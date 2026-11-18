/**
 * A labelled geometric figure: named points joined by edges, with angles and
 * circular arcs marked.
 *
 * Use this where the figure being reasoned about is a shape rather than the
 * graph of a function — a triangle with its sides and angles labelled, a
 * quadrilateral split by a diagonal, a sector, a solid drawn flat with its
 * hidden edges dashed. The drawing is not to scale in the examination's sense:
 * the given measurements are carried by the labels, and the coordinates only
 * arrange the figure so it reads clearly. Edges and marks take their colours
 * from the same palette as the `\ca`–`\cd` highlight macros, so the triangle
 * being solved inside a larger figure can be picked out.
 */
import type { Diagram as DiagramSpec, DiagramEdge, Highlight } from '../lesson-body'
import {
  Clearance,
  beyond,
  measureLabel,
  standoff,
  textPosition,
  type LabelSize,
  type PlacedLabel,
} from './label-layout'
import { add, between, dot, length, perpendicular, rotate, scale, subtract, unit, type Vec } from './vector'

const W = 360
const MAX_H = 320
const PAD = 34

/** The font size of a measurement label, in the figure's pixels. */
const LABEL_FONT = 14
/** The font size of a point's name, in the figure's pixels. */
const NAME_FONT = 15

/** The radius of an angle's arc, in the figure's pixels. */
const ANGLE_RADIUS = 16
/** The side of a right-angle square, in the figure's pixels. */
const SQUARE_SIDE = 11
/** The least distance from an angle's vertex to the centre of its label. */
const ANGLE_LABEL_DISTANCE = 29
/** The distance from a point to the centre of its name. */
const NAME_DISTANCE = 15
/**
 * The turns, in degrees, that a name can take away from the direction that
 * points out of the figure, in order of preference.
 */
const NAME_TURNS = [0, 25, -25, 50, -50, 75, -75, 100, -100]

/** Normalises an edge to its object form, from the `[from, to]` shorthand. */
function asEdge(edge: readonly [string, string] | DiagramEdge): DiagramEdge {
  return Array.isArray(edge) ? { from: edge[0], to: edge[1] } : (edge as DiagramEdge)
}

/**
 * The points of the arc at `center` from `from` to `to`, anticlockwise or
 * clockwise by whichever way is shorter, or the longer way when `reflex`.
 * Sampled as a polyline in world coordinates, so the caller's mapping to the
 * screen — including its y-flip — applies to an arc exactly as it applies to
 * an edge.
 */
function arcPoints(center: Vec, from: Vec, to: Vec, radius: number, reflex: boolean): Vec[] {
  const start = Math.atan2(from[1] - center[1], from[0] - center[0])
  const end = Math.atan2(to[1] - center[1], to[0] - center[0])
  let sweep = end - start
  while (sweep <= -Math.PI) sweep += 2 * Math.PI
  while (sweep > Math.PI) sweep -= 2 * Math.PI
  if (reflex) sweep -= Math.sign(sweep || 1) * 2 * Math.PI

  const samples = Math.max(8, Math.ceil(Math.abs(sweep) * 16))
  const points: Vec[] = []
  for (let i = 0; i <= samples; i++) {
    const angle = start + (sweep * i) / samples
    points.push(add(center, [radius * Math.cos(angle), radius * Math.sin(angle)]))
  }
  return points
}

/** The direction from a mark's vertex through the middle of its sweep. */
function bisector(center: Vec, from: Vec, to: Vec, reflex: boolean): Vec {
  const toward = add(unit(subtract(from, center)), unit(subtract(to, center)))
  const middle = length(toward) < 1e-9 ? unit([-(from[1] - center[1]), from[0] - center[0]]) : unit(toward)
  return reflex ? scale(middle, -1) : middle
}

/**
 * The distance from an angle's vertex to the centre of its label, along the
 * unit vector `toward`, so that the label clears the angle's mark and both of
 * its `arms`. A narrow angle sets its label further out, where the arms are
 * further apart.
 */
function angleLabelDistance(size: LabelSize, toward: Vec, arms: readonly Vec[]): number {
  let distance = Math.max(ANGLE_LABEL_DISTANCE, ANGLE_RADIUS + standoff(size, toward))
  for (const arm of arms) {
    const cos = dot(toward, arm)
    // An arm that points away from the label, as in a reflex angle, cannot reach it.
    if (cos <= 0) continue
    const sin = Math.max(Math.sqrt(1 - cos * cos), 0.05)
    distance = Math.max(distance, standoff(size, perpendicular(arm)) / sin)
  }
  return distance
}

/**
 * The unit normal to the line from `a` to `b` on the side away from `middle`.
 * Where `middle` lies on the line, the normal that points up the screen, or
 * else to the right.
 */
function outwardNormal(a: Vec, b: Vec, middle: Vec): Vec {
  const normal = perpendicular(unit(subtract(b, a)))
  const side = dot(normal, subtract(between(a, b, 0.5), middle))
  const reversed =
    Math.abs(side) > 1e-6 ? side < 0 : normal[1] > 1e-9 || (Math.abs(normal[1]) <= 1e-9 && normal[0] < 0)
  return reversed ? scale(normal, -1) : normal
}

/**
 * Returns true when the line from `a` to `b` and the line from `c` to `d` lie
 * along each other for part of their length, as part of a side does with the
 * whole side. Positions are on the screen, and a pixel counts as touching.
 */
function overlapping(a: Vec, b: Vec, c: Vec, d: Vec): boolean {
  const along = unit(subtract(b, a))
  const across = perpendicular(along)
  if (Math.abs(dot(subtract(c, a), across)) > 1 || Math.abs(dot(subtract(d, a), across)) > 1) return false
  const from = dot(subtract(c, a), along)
  const to = dot(subtract(d, a), along)
  return Math.max(from, to) > 1 && Math.min(from, to) < length(subtract(b, a)) - 1
}

const colourClass = (color: Highlight | undefined) => (color ? ` c-${color}` : '')

/** A measurement label is upright; a bare letter names a variable, in italic. */
const labelClass = (label: string) =>
  `diagram-label${/^[a-zA-Z]$/.test(label) ? ' is-variable' : ''}`

export function Diagram({ diagram }: { diagram: DiagramSpec }) {
  const named = Object.entries(diagram.points)
  const at = (name: string): Vec => diagram.points[name] ?? [0, 0]

  const edges = (diagram.edges ?? []).map(asEdge)
  const angles = diagram.angles ?? []
  const arcs = (diagram.arcs ?? []).map((arc) => ({
    ...arc,
    radius: length(subtract(at(arc.from), at(arc.center))),
  }))
  const arcCurves = arcs.map((arc) => arcPoints(at(arc.center), at(arc.from), at(arc.to), arc.radius, arc.reflex ?? false))

  // The figure's extent in its own coordinates, arcs included: a sector's arc
  // can swing wide of every named point.
  const extent = [...named.map(([, point]) => point), ...arcCurves.flat()]
  const xs = extent.map((point) => point[0])
  const ys = extent.map((point) => point[1])
  const x0 = Math.min(...xs)
  const y0 = Math.min(...ys)
  const spanX = Math.max(Math.max(...xs) - x0, 1e-6)
  const spanY = Math.max(Math.max(...ys) - y0, 1e-6)

  const zoom = Math.min((W - 2 * PAD) / spanX, (MAX_H - 2 * PAD) / spanY)
  const height = spanY * zoom + 2 * PAD
  const inset = (W - spanX * zoom) / 2

  const sx = (x: number) => inset + (x - x0) * zoom
  const sy = (y: number) => height - PAD - (y - y0) * zoom
  const map = (point: Vec): Vec => [sx(point[0]), sy(point[1])]
  const screen = (name: string): Vec => map(at(name))
  /** A world direction on the screen, where the y-axis points the other way. */
  const flip = (direction: Vec): Vec => [direction[0], -direction[1]]

  const centroid: Vec = scale(
    named.reduce((sum, [, point]) => add(sum, point), [0, 0] as Vec),
    1 / Math.max(named.length, 1),
  )
  const middle = map(centroid)

  const angleMarks = angles.map((angle) => {
    const vertex = at(angle.at)
    const from = unit(subtract(at(angle.from), vertex))
    const to = unit(subtract(at(angle.to), vertex))
    return angle.right
      ? [
          add(vertex, scale(from, SQUARE_SIDE / zoom)),
          add(vertex, scale(add(from, to), SQUARE_SIDE / zoom)),
          add(vertex, scale(to, SQUARE_SIDE / zoom)),
        ]
      : arcPoints(
          vertex,
          add(vertex, scale(from, ANGLE_RADIUS / zoom)),
          add(vertex, scale(to, ANGLE_RADIUS / zoom)),
          ANGLE_RADIUS / zoom,
          angle.reflex ?? false,
        )
  })

  const polyline = (points: readonly Vec[]) =>
    `M${points.map((point) => map(point).map((n) => n.toFixed(2)).join(',')).join('L')}`

  // Every line is drawn before any label is placed, and the labels are placed
  // from the most constrained to the least: a name stays close to its point,
  // an angle's label sits on the angle's bisector, and an edge's label can
  // move along the edge or to its other side.
  const clearance = new Clearance(W, height)
  edges.forEach((edge, index) => clearance.line(screen(edge.from), screen(edge.to), `edge ${index}`))
  for (const mark of [...angleMarks, ...arcCurves]) clearance.polyline(mark.map(map))

  const names = named.map(([name, point]) => {
    const away = unit(subtract(map(point), middle))
    return clearance.place(
      measureLabel(name, NAME_FONT),
      NAME_TURNS.map((turn) => add(map(point), scale(rotate(away, (turn * Math.PI) / 180), NAME_DISTANCE))),
    )
  })

  const angleLabels = angles.map((angle): PlacedLabel | undefined => {
    if (!angle.label) return undefined
    const vertex = screen(angle.at)
    const arms = [unit(subtract(screen(angle.from), vertex)), unit(subtract(screen(angle.to), vertex))]
    const toward = flip(bisector(at(angle.at), at(angle.from), at(angle.to), angle.reflex ?? false))
    const size = measureLabel(angle.label, LABEL_FONT)
    const distance = angleLabelDistance(size, toward, arms)
    return clearance.place(
      size,
      [0, 8, 16, 24].map((extra) => add(vertex, scale(toward, distance + extra))),
    )
  })

  const arcLabels = arcs.map((arc): PlacedLabel | undefined => {
    if (!arc.label) return undefined
    const toward = bisector(at(arc.center), at(arc.from), at(arc.to), arc.reflex ?? false)
    const onArc = map(add(at(arc.center), scale(toward, arc.radius)))
    const size = measureLabel(arc.label, LABEL_FONT)
    return clearance.place(
      size,
      [0, 8, 16].map((extra) => beyond(onArc, flip(toward), size, extra)),
    )
  })

  const edgeLabels = edges.map((edge, index): PlacedLabel | undefined => {
    if (!edge.label) return undefined
    const a = screen(edge.from)
    const b = screen(edge.to)
    const size = measureLabel(edge.label, LABEL_FONT)
    const outward = outwardNormal(a, b, middle)
    const inward = scale(outward, -1)
    // An edge that lies along an edge labelled before it, such as part of a
    // side drawn over the whole side, sets its label on the other side.
    const shared = edges
      .slice(0, index)
      .some((other) => other.label && overlapping(a, b, screen(other.from), screen(other.to)))
    const [preferred, other] = shared ? [inward, outward] : [outward, inward]
    const along = (side: Vec, fractions: readonly number[], extra = 0) =>
      fractions.map((t) => beyond(between(a, b, t), side, size, extra))
    return clearance.place(
      size,
      [
        ...along(preferred, [0.5, 0.38, 0.62]),
        ...along(other, [0.5, 0.38, 0.62]),
        ...along(preferred, [0.26, 0.74]),
        ...along(other, [0.26, 0.74]),
        ...along(preferred, [0.5], 10),
      ],
      `edge ${index}`,
    )
  })

  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${height}`} role="img" aria-label="A labelled diagram">
      {edges.map((edge, index) => {
        const [x1, y1] = screen(edge.from)
        const [x2, y2] = screen(edge.to)
        return (
          <line
            key={index}
            className={`diagram-edge${colourClass(edge.color)}${edge.dashed ? ' is-dashed' : ''}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
          />
        )
      })}

      {angles.map((angle, index) => {
        const label = angleLabels[index]
        return (
          <g key={index}>
            <path className={`diagram-angle${colourClass(angle.color)}`} d={polyline(angleMarks[index])} />
            {angle.label && label && (
              <text
                {...textPosition(label)}
                fontSize={LABEL_FONT}
                className={`${labelClass(angle.label)}${colourClass(angle.color)}`}
                textAnchor="middle"
              >
                {angle.label}
              </text>
            )}
          </g>
        )
      })}

      {arcs.map((arc, index) => {
        const label = arcLabels[index]
        return (
          <g key={index}>
            <path className={`diagram-arc${colourClass(arc.color)}`} d={polyline(arcCurves[index])} />
            {arc.label && label && (
              <text
                {...textPosition(label)}
                fontSize={LABEL_FONT}
                className={`${labelClass(arc.label)}${colourClass(arc.color)}`}
                textAnchor="middle"
              >
                {arc.label}
              </text>
            )}
          </g>
        )
      })}

      {edges.map((edge, index) => {
        const label = edgeLabels[index]
        return (
          edge.label &&
          label && (
            <text
              key={index}
              {...textPosition(label)}
              fontSize={LABEL_FONT}
              className={`${labelClass(edge.label)}${colourClass(edge.color)}`}
              textAnchor="middle"
            >
              {edge.label}
            </text>
          )
        )
      })}

      {named.map(([name], index) => (
        <text
          key={name}
          {...textPosition(names[index])}
          fontSize={NAME_FONT}
          className="diagram-name"
          textAnchor="middle"
        >
          {name}
        </text>
      ))}
    </svg>
  )
}
