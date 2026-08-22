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

const W = 360
const MAX_H = 320
const PAD = 34

type Vec = readonly [number, number]

const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1]]
const subtract = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1]]
const scale = (a: Vec, s: number): Vec => [a[0] * s, a[1] * s]
const length = (a: Vec): number => Math.hypot(a[0], a[1])

/** The unit vector along `a`, or upward when `a` has no length to speak of. */
function unit(a: Vec): Vec {
  const size = length(a)
  return size < 1e-9 ? [0, 1] : [a[0] / size, a[1] / size]
}

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

  // The figure's extent in its own coordinates, arcs included: a sector's arc
  // can swing wide of every named point.
  const extent = [
    ...named.map(([, point]) => point),
    ...arcs.flatMap((arc) => arcPoints(at(arc.center), at(arc.from), at(arc.to), arc.radius, arc.reflex ?? false)),
  ]
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
  /** A world direction on the screen, where the y-axis points the other way. */
  const flip = (direction: Vec): Vec => [direction[0], -direction[1]]

  const centroid: Vec = scale(
    named.reduce((sum, [, point]) => add(sum, point), [0, 0] as Vec),
    1 / Math.max(named.length, 1),
  )

  const polyline = (points: readonly Vec[]) =>
    `M${points.map((point) => map(point).map((n) => n.toFixed(2)).join(',')).join('L')}`

  /** A text position offset from a screen point along a world direction. */
  const offset = (point: Vec, direction: Vec, distance: number) => {
    const [dx, dy] = flip(unit(direction))
    const [x, y] = map(point)
    return { x: x + dx * distance, y: y + dy * distance + 4 }
  }

  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${height}`} role="img" aria-label="A labelled diagram">
      {edges.map((edge, index) => {
        const [x1, y1] = map(at(edge.from))
        const [x2, y2] = map(at(edge.to))
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
        const vertex = at(angle.at)
        const from = at(angle.from)
        const to = at(angle.to)
        const toward = bisector(vertex, from, to, angle.reflex ?? false)
        const mark = angle.right ? (
          <path
            className={`diagram-angle${colourClass(angle.color)}`}
            d={polyline([
              add(vertex, scale(unit(subtract(from, vertex)), 11 / zoom)),
              add(vertex, scale(add(unit(subtract(from, vertex)), unit(subtract(to, vertex))), 11 / zoom)),
              add(vertex, scale(unit(subtract(to, vertex)), 11 / zoom)),
            ])}
          />
        ) : (
          <path
            className={`diagram-angle${colourClass(angle.color)}`}
            d={polyline(
              arcPoints(
                vertex,
                add(vertex, scale(unit(subtract(from, vertex)), 16 / zoom)),
                add(vertex, scale(unit(subtract(to, vertex)), 16 / zoom)),
                16 / zoom,
                angle.reflex ?? false,
              ),
            )}
          />
        )
        return (
          <g key={index}>
            {mark}
            {angle.label && (
              <text
                {...offset(vertex, toward, 29)}
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
        const center = at(arc.center)
        const toward = bisector(center, at(arc.from), at(arc.to), arc.reflex ?? false)
        return (
          <g key={index}>
            <path
              className={`diagram-arc${colourClass(arc.color)}`}
              d={polyline(arcPoints(center, at(arc.from), at(arc.to), arc.radius, arc.reflex ?? false))}
            />
            {arc.label && (
              <text
                {...offset(add(center, scale(toward, arc.radius)), toward, 14)}
                className={`${labelClass(arc.label)}${colourClass(arc.color)}`}
                textAnchor="middle"
              >
                {arc.label}
              </text>
            )}
          </g>
        )
      })}

      {edges.map(
        (edge, index) =>
          edge.label && (
            <text
              key={index}
              {...offset(
                scale(add(at(edge.from), at(edge.to)), 0.5),
                subtract(scale(add(at(edge.from), at(edge.to)), 0.5), centroid),
                13,
              )}
              className={`${labelClass(edge.label)}${colourClass(edge.color)}`}
              textAnchor="middle"
            >
              {edge.label}
            </text>
          ),
      )}

      {named.map(([name, point]) => (
        <text
          key={name}
          {...offset(point, subtract(point, centroid), 15)}
          className="diagram-name"
          textAnchor="middle"
        >
          {name}
        </text>
      ))}
    </svg>
  )
}
