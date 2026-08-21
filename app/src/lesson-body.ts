/**
 * Splits a lesson script into the pieces it is made of.
 *
 * A script is Markdown with fenced ```figure and ```practice blocks interleaved
 * through it. The pieces are deliberately separable: remove every block and the
 * prose still reads as a continuous piece of writing. This module performs that
 * separation, yielding the pieces in document order so they can be rendered
 * differently without any of the formats needing to know about the others.
 *
 * It also reads the section headings out of a script, so that a long lesson can
 * be navigated without being split into several.
 *
 * Use this when rendering a lesson. A malformed block is reported rather than
 * thrown, so one bad block cannot take a page down.
 */
import { parse } from 'yaml'

/** The highlight palette, shared with the `\ca`–`\cd` colour macros. */
export type Highlight = 'a' | 'b' | 'c' | 'd'

/** One curve in a sketch: a polynomial, and how it should be drawn. */
export interface GraphCurve {
  /** Polynomial coefficients, highest power first: `[1, 0, -3]` is $x^2-3$. */
  readonly poly: readonly number[]
  /** Highlight colour. Uncoloured curves draw in the ink colour. */
  readonly color?: Highlight
  /** Label for the curve, set in plain text beside it. */
  readonly label?: string
  /** The x at which to set the label. Defaults to near the right-hand end. */
  readonly labelAt?: number
  readonly dashed?: boolean
  /** The x-interval to draw over, where narrower than the sketch's domain. */
  readonly domain?: readonly [number, number]
}

/** One marked point in a sketch. */
export interface GraphPoint {
  /** The point, as `[x, y]`. */
  readonly at: readonly [number, number]
  /** Label for the point, set in plain text beside it. */
  readonly label?: string
  readonly color?: Highlight
  /** Draw dashed guides from the point to each axis. */
  readonly guides?: boolean
}

/**
 * A sketch: polynomial curves over a stated domain, with marked points. Drawn
 * the way an examination expects a sketch to be drawn — shape, intercepts and
 * turning points, with numbers on the axes only where they say something.
 */
export interface Graph {
  /** The x-interval the sketch covers. */
  readonly domain: readonly [number, number]
  /** The y-interval shown. Derived from the curves when omitted. */
  readonly range?: readonly [number, number]
  readonly curves?: readonly GraphCurve[]
  readonly points?: readonly GraphPoint[]
  /** Values marked on each axis. Unmarked axes carry only their arrowheads. */
  readonly xticks?: readonly number[]
  readonly yticks?: readonly number[]
  /** Axis labels. `x` and `y` unless the context names them otherwise. */
  readonly xlabel?: string
  readonly ylabel?: string
}

/** One line of working: what is on the page at this point in a derivation. */
export interface WorkingStep {
  /** LaTeX for the expression as it stands. Not delimited — the field is maths. */
  readonly math?: string
  /** A sketch shown at this step, above any expression. */
  readonly graph?: Graph
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
  readonly steps: readonly WorkingStep[]
}

/** The bands the standard is graded in, in ascending order of demand. */
export const GRADES = ['achieved', 'merit', 'excellence'] as const

export type Grade = (typeof GRADES)[number]

/**
 * One question to be attempted on paper, together with the working that answers
 * it. The working is withheld until it is asked for, so that the question is a
 * question rather than a second worked example.
 */
export interface Question {
  /** What is being asked, in prose, with inline maths in `$…$`. */
  readonly ask: string
  /** The expression the question is about, set on its own line. */
  readonly math?: string
  /** The sketch the question is about, where the question shows a graph. */
  readonly graph?: Graph
  /** The band the question is pitched at. */
  readonly grade: Grade
  /** The examination year the question was adapted from, where there is one. */
  readonly from?: string
  /** The answer, a line of working at a time. */
  readonly working: readonly WorkingStep[]
}

/**
 * A set of questions to work through on paper. Ordered as they should be
 * attempted, which is easiest first.
 */
export interface Practice {
  /** What this particular set drills, where a set needs distinguishing. */
  readonly caption?: string
  readonly questions: readonly Question[]
}

/** A heading in a lesson, and the anchor it can be reached by. */
export interface Section {
  readonly id: string
  readonly title: string
  /** 2 for a section of the lesson, 3 for a subsection within one. */
  readonly level: 2 | 3
}

export type LessonBlock =
  | { readonly kind: 'prose'; readonly markdown: string }
  | { readonly kind: 'figure'; readonly figure: Figure }
  | { readonly kind: 'practice'; readonly practice: Practice }
  | { readonly kind: 'error'; readonly source: string; readonly message: string }

const BLOCK = /^```(figure|practice)$\n([\s\S]*?)^```$/gm
const FENCED = /^```[\s\S]*?^```$/gm
const HEADING = /^(#{2,3})\s+(.+)$/gm

function toFigure(source: string, parsed: Partial<Figure> | null): LessonBlock {
  const steps = parsed?.steps
  if (!Array.isArray(steps) || steps.length === 0) {
    return { kind: 'error', source, message: 'Figure has no steps' }
  }
  return {
    kind: 'figure',
    figure: { id: parsed?.id, caption: parsed?.caption, steps },
  }
}

function toPractice(source: string, parsed: Partial<Practice> | null): LessonBlock {
  const questions = parsed?.questions
  if (!Array.isArray(questions) || questions.length === 0) {
    return { kind: 'error', source, message: 'Practice set has no questions' }
  }
  for (const [index, question] of questions.entries()) {
    const at = `Question ${index + 1}`
    if (typeof question?.ask !== 'string' || !question.ask.trim()) {
      return { kind: 'error', source, message: `${at} does not ask anything` }
    }
    if (!GRADES.includes(question.grade)) {
      return { kind: 'error', source, message: `${at} has no grade band` }
    }
    if (!Array.isArray(question.working) || question.working.length === 0) {
      return { kind: 'error', source, message: `${at} has no working` }
    }
  }
  return { kind: 'practice', practice: { caption: parsed?.caption, questions } }
}

/**
 * Divides a script into prose, figures and practice sets, in the order they
 * appear. Prose blocks are returned as Markdown; empty ones are omitted.
 */
export function splitLesson(markdown: string): readonly LessonBlock[] {
  const blocks: LessonBlock[] = []
  let cursor = 0

  for (const match of markdown.matchAll(BLOCK)) {
    const prose = markdown.slice(cursor, match.index).trim()
    if (prose) blocks.push({ kind: 'prose', markdown: prose })

    const [whole, kind, source] = match
    try {
      const parsed = parse(source)
      blocks.push(kind === 'figure' ? toFigure(source, parsed) : toPractice(source, parsed))
    } catch (cause) {
      blocks.push({
        kind: 'error',
        source,
        message: cause instanceof Error ? cause.message : `${kind} could not be parsed`,
      })
    }
    cursor = match.index + whole.length
  }

  const tail = markdown.slice(cursor).trim()
  if (tail) blocks.push({ kind: 'prose', markdown: tail })
  return blocks
}

/**
 * The anchor a heading is reached by. Derived from the wording rather than from
 * position, so a link survives sections being reordered but not retitled.
 *
 * Headings are assumed to be plain text; notation in one would not survive the
 * round trip from Markdown source to rendered heading.
 */
export function sectionId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * The `##` and `###` headings of a script, in document order and interleaved as
 * they appear, each carrying the level it was written at. Headings inside fenced
 * blocks are not sections, and are ignored.
 */
export function sections(markdown: string): readonly Section[] {
  const prose = markdown.replace(FENCED, '')
  return [...prose.matchAll(HEADING)].map((match) => {
    const title = match[2].trim()
    return { id: sectionId(title), title, level: match[1].length as 2 | 3 }
  })
}

/**
 * A practice set together with the headings it sits beneath: the section, and
 * the subsection within it where the set was written under one. Outermost
 * first, and empty for a set appearing before any heading.
 */
export interface PracticeGroup {
  readonly headings: readonly Section[]
  readonly practice: Practice
}

/**
 * The practice sets of a script in document order, each carrying the headings
 * in force where it appears.
 *
 * Use this to present a script's questions apart from the script: the prose and
 * the figures are dropped, and what is left keeps the shape the lesson gave it.
 */
export function practiceSheet(markdown: string): readonly PracticeGroup[] {
  const groups: PracticeGroup[] = []
  let headings: readonly Section[] = []

  for (const block of splitLesson(markdown)) {
    if (block.kind === 'prose') {
      for (const heading of sections(block.markdown)) {
        headings = heading.level === 2 ? [heading] : [...headings.slice(0, 1), heading]
      }
    } else if (block.kind === 'practice') {
      groups.push({ headings, practice: block.practice })
    }
  }
  return groups
}
