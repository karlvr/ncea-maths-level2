/**
 * Places the text labels of a drawn figure so that no line runs through a
 * label and no two labels overlap.
 *
 * Use this when an SVG figure sets short labels beside its own lines: the
 * sides and angles of a diagram, or the curves and axis numbers of a sketch.
 * Each label is offered positions in order of preference, and takes the first
 * that keeps clear of everything already drawn and that sits closer to its own
 * line than to the line of anything else. Where none does, it takes the first
 * of those that touch the fewest things.
 *
 * A label's size is estimated from its characters rather than measured, so a
 * layout depends on the figure alone. It does not change when the fonts load,
 * and it is the same on screen and in print.
 */
import { add, scale, type Vec } from './vector'

/** The space between a label's ink and the line it labels. */
const GAP = 6

/** The least space a label keeps from any other line or label. */
const MARGIN = 2.5

/**
 * The space a label keeps from the line of something it does not label, where
 * it can. Any closer, and a reader may take the label to belong to that line.
 */
const RESERVE = 10

/** A drawn line, and the thing it draws where that thing can carry a label. */
interface Line {
  readonly from: Vec
  readonly to: Vec
  readonly owner?: string
}

/** How far a label's ink reaches from its centre. */
export interface LabelSize {
  readonly halfWidth: number
  readonly halfHeight: number
  /** The distance from the centre of the ink down to the baseline of the text. */
  readonly baseline: number
}

/** A label's size and the position of its centre. */
export interface PlacedLabel {
  readonly center: Vec
  readonly size: LabelSize
}

/**
 * The width of a character in ems. Each value is the widest of the serif
 * faces that the stylesheet names, so an estimate errs on the wide side.
 */
function advance(character: string): number {
  if (/[mwMW−]/.test(character)) return 0.88
  if (/[A-Z]/.test(character)) return 0.78
  if (/[ .,:;'′ilfjt]/.test(character)) return 0.33
  if (/[°()]/.test(character)) return 0.45
  return 0.56
}

/** The size of `text` set at `fontSize` pixels. */
export function measureLabel(text: string, fontSize: number): LabelSize {
  const ascent = 0.72
  const descent = /[fgjpqy(),]/.test(text) ? 0.26 : 0.02
  const width = [...text].reduce((sum, character) => sum + advance(character), 0)
  return {
    halfWidth: (width * fontSize) / 2,
    halfHeight: ((ascent + descent) * fontSize) / 2,
    baseline: ((ascent - descent) * fontSize) / 2,
  }
}

/** The distance from a label's centre to the edge of its ink, along the unit vector `direction`. */
export function reach(size: LabelSize, direction: Vec): number {
  return size.halfWidth * Math.abs(direction[0]) + size.halfHeight * Math.abs(direction[1])
}

/**
 * The distance from a line to the centre of a label set just clear of it, in
 * the unit direction `direction` away from the line.
 */
export function standoff(size: LabelSize, direction: Vec): number {
  return reach(size, direction) + GAP
}

/**
 * The centre for a label whose ink sits just clear of `point`, in the unit
 * direction `direction`. Use `extra` to set the label further out.
 */
export function beyond(point: Vec, direction: Vec, size: LabelSize, extra = 0): Vec {
  return add(point, scale(direction, standoff(size, direction) + extra))
}

/** The attributes that set a label's text centred on its position, with `textAnchor="middle"`. */
export function textPosition(label: PlacedLabel): { x: number; y: number } {
  return { x: label.center[0], y: label.center[1] + label.size.baseline }
}

interface Box {
  readonly left: number
  readonly top: number
  readonly right: number
  readonly bottom: number
}

function inkBox(label: PlacedLabel, margin: number): Box {
  const [x, y] = label.center
  const { halfWidth, halfHeight } = label.size
  return {
    left: x - halfWidth - margin,
    top: y - halfHeight - margin,
    right: x + halfWidth + margin,
    bottom: y + halfHeight + margin,
  }
}

const overlaps = (a: Box, b: Box) =>
  a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom

/** Returns true when `line` passes through `box`. */
function crosses({ from: a, to: b }: Line, box: Box): boolean {
  let enter = 0
  let leave = 1
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const limits: readonly (readonly [number, number])[] = [
    [-dx, a[0] - box.left],
    [dx, box.right - a[0]],
    [-dy, a[1] - box.top],
    [dy, box.bottom - a[1]],
  ]
  for (const [rate, room] of limits) {
    if (Math.abs(rate) < 1e-9) {
      if (room < 0) return false
    } else if (rate < 0) {
      enter = Math.max(enter, room / rate)
    } else {
      leave = Math.min(leave, room / rate)
    }
    if (enter > leave) return false
  }
  return true
}

/**
 * The lines and labels already drawn in a figure, and the figure's bounds.
 * Draw the lines first, then place the labels one at a time, most constrained
 * first: each label keeps clear of the labels placed before it.
 *
 * A line can name its `owner`, the thing it draws, such as one edge or one
 * curve. A label placed for that owner keeps its distance from the lines of
 * every other owner, so that it cannot be read as their label.
 */
export class Clearance {
  private readonly bounds: Box
  private readonly lines: Line[] = []
  private readonly boxes: Box[] = []

  constructor(width: number, height: number) {
    this.bounds = { left: 0, top: 0, right: width, bottom: height }
  }

  /** Records a straight line from `from` to `to`, drawn for `owner` where it has one. */
  line(from: Vec, to: Vec, owner?: string): void {
    this.lines.push({ from, to, owner })
  }

  /** Records a line through each of `points` in turn, drawn for `owner` where it has one. */
  polyline(points: readonly Vec[], owner?: string): void {
    for (let i = 1; i < points.length; i++) this.line(points[i - 1], points[i], owner)
  }

  /** Records a region that a label must not cover, such as a dot or a label set by hand. */
  occupy(label: PlacedLabel): void {
    this.boxes.push(inkBox(label, 0))
  }

  /**
   * Places a label of `size` for `owner` at the first of `positions` with the
   * lowest cost, and records it. Each line, label or figure edge that the
   * label touches adds one to the cost. A position near the line of another
   * owner adds a half, so it loses to a clear position but wins over a
   * position that touches something.
   */
  place(size: LabelSize, positions: readonly Vec[], owner?: string): PlacedLabel {
    let best: PlacedLabel = { center: positions[0], size }
    let lowest = Infinity
    for (const center of positions) {
      const label = { center, size }
      const score = this.conflicts(label) + (owner !== undefined && this.crowds(label, owner) ? 0.5 : 0)
      if (score < lowest) {
        best = label
        lowest = score
      }
      if (score === 0) break
    }
    this.occupy(best)
    return best
  }

  /** Returns true when a line drawn for an owner other than `owner` passes close to `label`. */
  private crowds(label: PlacedLabel, owner: string): boolean {
    const box = inkBox(label, RESERVE)
    return this.lines.some((line) => line.owner !== undefined && line.owner !== owner && crosses(line, box))
  }

  /** The number of lines, labels and figure edges that `label` would touch. */
  private conflicts(label: PlacedLabel): number {
    const box = inkBox(label, MARGIN)
    const ink = inkBox(label, 0)
    const outside =
      ink.left < this.bounds.left ||
      ink.top < this.bounds.top ||
      ink.right > this.bounds.right ||
      ink.bottom > this.bounds.bottom
    return (
      (outside ? 1 : 0) +
      this.lines.filter((line) => crosses(line, box)).length +
      this.boxes.filter((other) => overlaps(box, other)).length
    )
  }
}
