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

const W = 360
const H = 270
const PAD = 34
const SAMPLES = 120

/** Evaluates a polynomial given by its coefficients, highest power first. */
function value(poly: readonly number[], x: number): number {
  return poly.reduce((sum, coefficient) => sum * x + coefficient, 0)
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

/** Formats an axis number with a true minus sign. */
function numeral(n: number): string {
  return String(n).replace('-', '−')
}

export function Sketch({ graph }: { graph: Graph }) {
  const id = useId()
  const [x0, x1] = graph.domain
  const [y0, y1] = rangeOf(graph)

  const sx = (x: number) => PAD + ((x - x0) / (x1 - x0)) * (W - 2 * PAD)
  const sy = (y: number) => H - PAD - ((y - y0) / (y1 - y0)) * (H - 2 * PAD)

  /** Each axis passes through zero, or lies along an edge when zero is out of view. */
  const axisX = sx(Math.min(Math.max(0, x0), x1))
  const axisY = sy(Math.min(Math.max(0, y0), y1))

  const path = (curve: GraphCurve) => {
    const [c0, c1] = curveDomain(curve, graph)
    const points: string[] = []
    for (let i = 0; i <= SAMPLES; i++) {
      const x = c0 + ((c1 - c0) * i) / SAMPLES
      points.push(`${sx(x).toFixed(2)},${sy(value(curve.poly, x)).toFixed(2)}`)
    }
    return `M${points.join('L')}`
  }

  const labelPosition = (curve: GraphCurve) => {
    const [c0, c1] = curveDomain(curve, graph)
    const at = curve.labelAt ?? c0 + (c1 - c0) * 0.88
    const x = Math.min(Math.max(at, c0), c1)
    return { x: sx(x) + 6, y: sy(value(curve.poly, x)) - 8 }
  }

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
          <rect x={PAD - 1} y={PAD - 12} width={W - 2 * PAD + 2} height={H - 2 * PAD + 24} />
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
      <text className="sketch-axis-label" x={W - PAD + 14} y={axisY + 4}>
        {graph.xlabel ?? 'x'}
      </text>
      <text className="sketch-axis-label" x={axisX} y={PAD - 16} textAnchor="middle">
        {graph.ylabel ?? 'y'}
      </text>

      {(graph.xticks ?? []).map((tick) => (
        <g key={`x${tick}`}>
          <line
            className="sketch-tick"
            x1={sx(tick)}
            y1={axisY - 3}
            x2={sx(tick)}
            y2={axisY + 3}
          />
          <text className="sketch-numeral" x={sx(tick)} y={axisY + 16} textAnchor="middle">
            {numeral(tick)}
          </text>
        </g>
      ))}
      {(graph.yticks ?? []).map((tick) => (
        <g key={`y${tick}`}>
          <line
            className="sketch-tick"
            x1={axisX - 3}
            y1={sy(tick)}
            x2={axisX + 3}
            y2={sy(tick)}
          />
          <text
            className="sketch-numeral"
            x={axisX - 7}
            y={sy(tick) + 4}
            textAnchor="end"
          >
            {numeral(tick)}
          </text>
        </g>
      ))}

      <g clipPath={`url(#${id}-plot)`}>
        {(graph.curves ?? []).map((curve, index) => (
          <path
            key={index}
            className={[
              'sketch-curve',
              curve.color ? `c-${curve.color}` : '',
              curve.dashed ? 'is-dashed' : '',
            ]
              .join(' ')
              .trim()}
            d={path(curve)}
          />
        ))}
      </g>

      {(graph.points ?? []).map((point, index) => {
        const [px, py] = point.at
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
              r="3.5"
            />
            {point.label && (
              <text className="sketch-label" x={sx(px) + 7} y={sy(py) - 7}>
                {point.label}
              </text>
            )}
          </g>
        )
      })}

      {(graph.curves ?? []).map((curve, index) => {
        if (!curve.label) return null
        const at = labelPosition(curve)
        return (
          <text
            key={index}
            className={`sketch-label${curve.color ? ` c-${curve.color}` : ''}`}
            x={at.x}
            y={at.y}
          >
            {curve.label}
          </text>
        )
      })}
    </svg>
  )
}
