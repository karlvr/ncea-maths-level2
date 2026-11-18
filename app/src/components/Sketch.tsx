/**
 * A sketch graph: polynomial curves drawn over a stated domain, with axes,
 * marked points and axis numbers where they say something.
 *
 * Use this for the graphs an examination expects to be sketched rather than
 * plotted — shape, intercepts and turning points matter; scale does not, so
 * axes carry numbers only where a value is worth reading. Curves take their
 * colours from the same palette as the `\ca`–`\cd` highlight macros, so a
 * curve can be matched to the expression it came from.
 */
import { useId } from 'react'
import type { Graph, GraphCurve } from '../lesson-body'
import { Clearance, beyond, measureLabel, textPosition, type LabelSize, type PlacedLabel } from './label-layout'
import { add, scale, unit, type Vec } from './vector'

const W = 360
const H = 270
const PAD = 34
const SAMPLES = 120

/** The font size of a label and of an axis's name, in the sketch's pixels. */
const LABEL_FONT = 15
/** The font size of a number on an axis, in the sketch's pixels. */
const NUMERAL_FONT = 13
/** The radius of a marked point's dot. */
const DOT_RADIUS = 3.5

/** The region the curves are drawn in. A curve is cut off at its edges. */
const PLOT = { left: PAD - 1, top: PAD - 12, right: W - PAD + 1, bottom: H - PAD + 12 }

/**
 * How far a curve's label may move from where it is asked for, as fractions
 * of the curve's domain, nearest first.
 */
const LABEL_SHIFTS = [0, -0.04, 0.04, -0.08, 0.08, -0.12, 0.12, -0.16, 0.16]

/** Evaluates a polynomial given by its coefficients, highest power first. */
function value(poly: readonly number[], x: number): number {
  return poly.reduce((sum, coefficient) => sum * x + coefficient, 0)
}

/** The derivative of a polynomial given by its coefficients, highest power first. */
function derivative(poly: readonly number[]): number[] {
  const degree = poly.length - 1
  return poly.slice(0, -1).map((coefficient, index) => coefficient * (degree - index))
}

function curveDomain(curve: GraphCurve, graph: Graph): readonly [number, number] {
  const [x0, x1] = graph.domain
  if (!curve.domain) return [x0, x1]
  return [Math.max(x0, curve.domain[0]), Math.min(x1, curve.domain[1])]
}

/**
 * The y-interval to show: as stated, or wide enough for every curve and marked
 * point, always including the x-axis, with headroom so nothing sits on an edge.
 */
function rangeOf(graph: Graph): readonly [number, number] {
  if (graph.range) return graph.range
  let low = 0
  let high = 0
  for (const curve of graph.curves ?? []) {
    const [c0, c1] = curveDomain(curve, graph)
    for (let i = 0; i <= SAMPLES; i++) {
      const y = value(curve.poly, c0 + ((c1 - c0) * i) / SAMPLES)
      low = Math.min(low, y)
      high = Math.max(high, y)
    }
  }
  for (const point of graph.points ?? []) {
    low = Math.min(low, point.at[1])
    high = Math.max(high, point.at[1])
  }
  if (low === high) return [-1, 1]
  const headroom = (high - low) * 0.08
  return [low - headroom, high + headroom]
}

/** The parts of a traced curve that lie inside the plot, where the curve is visible. */
function visibleRuns(trace: readonly Vec[]): Vec[][] {
  const runs: Vec[][] = []
  let run: Vec[] = []
  for (const point of trace) {
    const [x, y] = point
    if (x >= PLOT.left && x <= PLOT.right && y >= PLOT.top && y <= PLOT.bottom) {
      run.push(point)
    } else {
      if (run.length > 1) runs.push(run)
      run = []
    }
  }
  if (run.length > 1) runs.push(run)
  return runs
}

/** Formats an axis number with a true minus sign. */
function numeral(n: number): string {
  return String(n).replace('-', '−')
}

export function Sketch({ graph }: { graph: Graph }) {
  const id = useId()
  const [x0, x1] = graph.domain
  const [y0, y1] = rangeOf(graph)
  const curves = graph.curves ?? []
  const points = graph.points ?? []
  const xticks = graph.xticks ?? []
  const yticks = graph.yticks ?? []

  const sx = (x: number) => PAD + ((x - x0) / (x1 - x0)) * (W - 2 * PAD)
  const sy = (y: number) => H - PAD - ((y - y0) / (y1 - y0)) * (H - 2 * PAD)
  const on = (curve: GraphCurve, x: number): Vec => [sx(x), sy(value(curve.poly, x))]

  /** Each axis passes through zero, or lies along an edge when zero is out of view. */
  const axisX = sx(Math.min(Math.max(0, x0), x1))
  const axisY = sy(Math.min(Math.max(0, y0), y1))

  const traces = curves.map((curve) => {
    const [c0, c1] = curveDomain(curve, graph)
    return Array.from({ length: SAMPLES + 1 }, (_, i) => on(curve, c0 + ((c1 - c0) * i) / SAMPLES))
  })
  const path = (trace: readonly Vec[]) =>
    `M${trace.map((point) => point.map((n) => n.toFixed(2)).join(',')).join('L')}`

  // Every line is drawn before any label is placed, and the labels are placed
  // from the most constrained to the least: an axis number stays by its tick,
  // a point's label stays by its dot, and a curve's label can move along the
  // curve.
  const clearance = new Clearance(W, H)
  clearance.line([PAD - 8, axisY], [W - PAD + 8, axisY])
  clearance.line([axisX, H - PAD + 8], [axisX, PAD - 8])
  for (const tick of xticks) clearance.line([sx(tick), axisY - 3], [sx(tick), axisY + 3])
  for (const tick of yticks) clearance.line([axisX - 3, sy(tick)], [axisX + 3, sy(tick)])
  for (const point of points) {
    const dot: Vec = [sx(point.at[0]), sy(point.at[1])]
    if (point.guides) {
      clearance.line(dot, [dot[0], axisY])
      clearance.line(dot, [axisX, dot[1]])
    }
    clearance.occupy({ center: dot, size: { halfWidth: DOT_RADIUS, halfHeight: DOT_RADIUS, baseline: 0 } })
  }
  traces.forEach((trace, index) => {
    for (const run of visibleRuns(trace)) clearance.polyline(run, `curve ${index}`)
  })

  const xName = graph.xlabel ?? 'x'
  const yName = graph.ylabel ?? 'y'
  const xNameSize = measureLabel(xName, LABEL_FONT)
  const yNameSize = measureLabel(yName, LABEL_FONT)
  const xNameAt = { x: W - PAD + 14, y: axisY + 4 }
  const yNameAt = { x: axisX, y: PAD - 16 }
  clearance.occupy({ center: [xNameAt.x + xNameSize.halfWidth, xNameAt.y - xNameSize.baseline], size: xNameSize })
  clearance.occupy({ center: [yNameAt.x, yNameAt.y - yNameSize.baseline], size: yNameSize })

  /** Positions beside `foot` on the side `side`, then shifted each way across it by `shift`. */
  const around = (foot: Vec, side: Vec, size: LabelSize, shift: Vec): Vec[] => {
    const centre = beyond(foot, side, size)
    return [centre, add(centre, scale(shift, -1)), add(centre, shift)]
  }

  const xNumerals = xticks.map((tick) => {
    const size = measureLabel(numeral(tick), NUMERAL_FONT)
    const foot: Vec = [sx(tick), axisY]
    const shift: Vec = [size.halfWidth + 3, 0]
    return clearance.place(size, [...around(foot, [0, 1], size, shift), ...around(foot, [0, -1], size, shift)])
  })

  const yNumerals = yticks.map((tick) => {
    const size = measureLabel(numeral(tick), NUMERAL_FONT)
    const foot: Vec = [axisX, sy(tick)]
    const shift: Vec = [0, size.halfHeight + 3]
    return clearance.place(size, [...around(foot, [-1, 0], size, shift), ...around(foot, [1, 0], size, shift)])
  })

  const pointLabels = points.map((point): PlacedLabel | undefined => {
    if (!point.label) return undefined
    const size = measureLabel(point.label, LABEL_FONT)
    const [px, py] = [sx(point.at[0]), sy(point.at[1])]
    const dx = DOT_RADIUS + 4 + size.halfWidth
    const dy = DOT_RADIUS + 4 + size.halfHeight
    return clearance.place(size, [
      [px + dx, py - dy],
      [px - dx, py - dy],
      [px + dx, py + dy],
      [px - dx, py + dy],
      [px + dx, py],
      [px - dx, py],
      [px, py - dy],
      [px, py + dy],
    ])
  })

  const curveLabels = curves.map((curve, index): PlacedLabel | undefined => {
    if (!curve.label) return undefined
    const [c0, c1] = curveDomain(curve, graph)
    const target = curve.labelAt ?? c0 + (c1 - c0) * 0.88
    const size = measureLabel(curve.label, LABEL_FONT)
    const slope = derivative(curve.poly)
    const beside = (extra: number) =>
      LABEL_SHIFTS.flatMap((shift) => {
        const x = Math.min(Math.max(target + shift * (c1 - c0), c0), c1)
        const along = unit([sx(1) - sx(0), (sy(1) - sy(0)) * value(slope, x)])
        const above: Vec = [along[1], -along[0]]
        return [beyond(on(curve, x), above, size, extra), beyond(on(curve, x), scale(above, -1), size, extra)]
      })
    return clearance.place(size, [...beside(0), ...beside(8)], `curve ${index}`)
  })

  return (
    <svg
      className="sketch"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="A sketch graph"
    >
      <defs>
        <marker
          id={`${id}-arrow`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0,0L10,5L0,10z" className="sketch-arrow" />
        </marker>
        <clipPath id={`${id}-plot`}>
          <rect x={PLOT.left} y={PLOT.top} width={PLOT.right - PLOT.left} height={PLOT.bottom - PLOT.top} />
        </clipPath>
      </defs>

      <line
        className="sketch-axis"
        x1={PAD - 8}
        y1={axisY}
        x2={W - PAD + 8}
        y2={axisY}
        markerEnd={`url(#${id}-arrow)`}
      />
      <line
        className="sketch-axis"
        x1={axisX}
        y1={H - PAD + 8}
        x2={axisX}
        y2={PAD - 8}
        markerEnd={`url(#${id}-arrow)`}
      />
      <text className="sketch-axis-label" {...xNameAt} fontSize={LABEL_FONT}>
        {xName}
      </text>
      <text className="sketch-axis-label" {...yNameAt} fontSize={LABEL_FONT} textAnchor="middle">
        {yName}
      </text>

      {xticks.map((tick, index) => (
        <g key={`x${tick}`}>
          <line
            className="sketch-tick"
            x1={sx(tick)}
            y1={axisY - 3}
            x2={sx(tick)}
            y2={axisY + 3}
          />
          <text className="sketch-numeral" {...textPosition(xNumerals[index])} fontSize={NUMERAL_FONT} textAnchor="middle">
            {numeral(tick)}
          </text>
        </g>
      ))}
      {yticks.map((tick, index) => (
        <g key={`y${tick}`}>
          <line
            className="sketch-tick"
            x1={axisX - 3}
            y1={sy(tick)}
            x2={axisX + 3}
            y2={sy(tick)}
          />
          <text className="sketch-numeral" {...textPosition(yNumerals[index])} fontSize={NUMERAL_FONT} textAnchor="middle">
            {numeral(tick)}
          </text>
        </g>
      ))}

      <g clipPath={`url(#${id}-plot)`}>
        {curves.map((curve, index) => (
          <path
            key={index}
            className={[
              'sketch-curve',
              curve.color ? `c-${curve.color}` : '',
              curve.dashed ? 'is-dashed' : '',
            ]
              .join(' ')
              .trim()}
            d={path(traces[index])}
          />
        ))}
      </g>

      {points.map((point, index) => {
        const [px, py] = point.at
        const label = pointLabels[index]
        return (
          <g key={index}>
            {point.guides && (
              <>
                <line
                  className="sketch-guide"
                  x1={sx(px)}
                  y1={sy(py)}
                  x2={sx(px)}
                  y2={axisY}
                />
                <line
                  className="sketch-guide"
                  x1={sx(px)}
                  y1={sy(py)}
                  x2={axisX}
                  y2={sy(py)}
                />
              </>
            )}
            <circle
              className={`sketch-point${point.color ? ` c-${point.color}` : ''}`}
              cx={sx(px)}
              cy={sy(py)}
              r={DOT_RADIUS}
            />
            {point.label && label && (
              <text className="sketch-label" {...textPosition(label)} fontSize={LABEL_FONT} textAnchor="middle">
                {point.label}
              </text>
            )}
          </g>
        )
      })}

      {curves.map((curve, index) => {
        const label = curveLabels[index]
        if (!curve.label || !label) return null
        return (
          <text
            key={index}
            className={`sketch-label${curve.color ? ` c-${curve.color}` : ''}`}
            {...textPosition(label)}
            fontSize={LABEL_FONT}
            textAnchor="middle"
          >
            {curve.label}
          </text>
        )
      })}
    </svg>
  )
}
