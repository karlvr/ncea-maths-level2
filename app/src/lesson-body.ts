/**
 * Splits a lesson script into the prose and the figures it contains.
 *
 * A script is Markdown with fenced ```figure blocks interleaved through it. The
 * two are deliberately separable: remove every figure and the prose still reads
 * as a continuous piece of writing. This module performs that separation,
 * yielding the pieces in document order so they can be rendered differently
 * without either format needing to know about the other.
 *
 * Use this when rendering a lesson. A malformed figure is reported rather than
 * thrown, so one bad block cannot take a page down.
 */
import { parse } from 'yaml'

/** One state of a figure: what is on the page at this point in the working. */
export interface FigureStep {
  /** LaTeX for the expression as it stands. Not delimited — the field is maths. */
  readonly math?: string
  /** A line explaining this step, in prose, with inline maths in `$…$`. */
  readonly note?: string
}

/**
 * A worked figure. A single step renders as a static figure; several render as
 * a stepper, so the reader can attempt each line before revealing it.
 */
export interface Figure {
  readonly id?: string
  readonly caption?: string
  readonly steps: readonly FigureStep[]
}

export type LessonBlock =
  | { readonly kind: 'prose'; readonly markdown: string }
  | { readonly kind: 'figure'; readonly figure: Figure }
  | { readonly kind: 'error'; readonly source: string; readonly message: string }

const FIGURE_BLOCK = /^```figure$\n([\s\S]*?)^```$/gm

function toFigure(source: string): LessonBlock {
  try {
    const parsed = parse(source) as Partial<Figure> | null
    const steps = parsed?.steps
    if (!Array.isArray(steps) || steps.length === 0) {
      return { kind: 'error', source, message: 'Figure has no steps' }
    }
    return {
      kind: 'figure',
      figure: { id: parsed?.id, caption: parsed?.caption, steps },
    }
  } catch (cause) {
    return {
      kind: 'error',
      source,
      message: cause instanceof Error ? cause.message : 'Figure could not be parsed',
    }
  }
}

/**
 * Divides a script into alternating prose and figure blocks, in the order they
 * appear. Prose blocks are returned as Markdown; empty ones are omitted.
 */
export function splitLesson(markdown: string): readonly LessonBlock[] {
  const blocks: LessonBlock[] = []
  let cursor = 0

  for (const match of markdown.matchAll(FIGURE_BLOCK)) {
    const prose = markdown.slice(cursor, match.index).trim()
    if (prose) blocks.push({ kind: 'prose', markdown: prose })
    blocks.push(toFigure(match[1]))
    cursor = match.index + match[0].length
  }

  const tail = markdown.slice(cursor).trim()
  if (tail) blocks.push({ kind: 'prose', markdown: tail })
  return blocks
}
