/**
 * Validates the mathematics in the lesson scripts — in figures, in practice
 * sets, and in running prose.
 *
 * Scripts are authored by hand in Markdown and only rendered in the browser, so
 * a malformed block or a piece of invalid LaTeX would otherwise surface as a
 * broken page rather than as a build failure. This checks each block parses as
 * YAML, carries the fields its kind requires, and that all of its mathematics
 * compiles under the same KaTeX settings the application uses. Prose is checked
 * for the same reason and matters more, because notation that fails to parse
 * there has nothing around it to look wrong — it simply renders as its own
 * source in the middle of a sentence.
 *
 * Run with `npm run check`. Exits non-zero if anything fails.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join, dirname, relative } from 'node:path'
import katex from 'katex'
import { parse } from 'yaml'

const CONTENT = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'content')

const MACROS = {
  '\\ca': '\\htmlClass{c-a}{#1}',
  '\\cb': '\\htmlClass{c-b}{#1}',
  '\\cc': '\\htmlClass{c-c}{#1}',
  '\\cd': '\\htmlClass{c-d}{#1}',
}

const GRADES = ['achieved', 'merit', 'excellence']

const BLOCK = /^```(figure|practice)$\n([\s\S]*?)^```$/gm
const INLINE_MATHS = /\$([^$]+)\$/g

const FENCED = /^```[\s\S]*?^```$/gm
const CODE_SPAN = /`[^`\n]*`/g
/** Inline maths in prose, which is written on one line and closed on that line. */
const PROSE_MATHS = /\$([^$\n]+)\$/g

/** KaTeX mutates the macros object it is given, so each call gets a fresh copy. */
const options = (displayMode) => ({
  displayMode,
  throwOnError: true,
  trust: true,
  strict: false,
  macros: { ...MACROS },
})

function* markdownFiles(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry)
    if (statSync(path).isDirectory()) yield* markdownFiles(path)
    else if (entry.endsWith('.md')) yield path
  }
}

const problems = []
const counted = { figure: 0, practice: 0, question: 0, fragment: 0, sketch: 0 }
let expressions = 0

/**
 * The prose of a script, with everything that is not prose replaced by spaces
 * and its line breaks left alone, so a line number in the result is a line
 * number in the file.
 *
 * A fenced block is checked as a block, and mathematics inside a code span is
 * being shown as its own source rather than rendered, so neither counts as
 * prose.
 */
function proseOf(source) {
  const blank = (match) => match.replace(/[^\n]/g, ' ')
  return source.replace(FENCED, blank).replace(CODE_SPAN, blank)
}

/**
 * Compiles the inline mathematics of a script's prose, and reports a delimiter
 * left unclosed.
 *
 * An unclosed `$` is worth naming on its own because of how it fails: the
 * notation after it renders as a sentence and the prose after it renders as
 * mathematics, and neither looks like a missing dollar sign.
 */
function checkProse(source, where) {
  for (const [index, line] of proseOf(source).split('\n').entries()) {
    const at = `${where}:${index + 1}`
    if ((line.match(/\$/g)?.length ?? 0) % 2 !== 0) {
      problems.push(`${at}: unclosed $`)
    }
    for (const [, tex] of line.matchAll(PROSE_MATHS)) {
      expressions++
      counted.fragment++
      try {
        katex.renderToString(tex, options(false))
      } catch (cause) {
        problems.push(`${at}: ${cause.message.split('\n')[0]}`)
      }
    }
  }
}

const HIGHLIGHTS = ['a', 'b', 'c', 'd']

const isInterval = (pair) =>
  Array.isArray(pair) &&
  pair.length === 2 &&
  pair.every((n) => typeof n === 'number') &&
  pair[0] < pair[1]

/**
 * Validates the shape of a sketch: intervals ordered, polynomials numeric,
 * points in coordinate pairs. Labels are plain text — notation would arrive in
 * the browser as its own source, so a `$` in one is reported here.
 */
function checkGraph(graph, where) {
  if (!isInterval(graph.domain)) {
    problems.push(`${where}: graph domain must be [low, high]`)
  }
  if (graph.range !== undefined && !isInterval(graph.range)) {
    problems.push(`${where}: graph range must be [low, high]`)
  }
  for (const [index, curve] of (graph.curves ?? []).entries()) {
    const at = `${where} curve ${index + 1}`
    if (!Array.isArray(curve?.poly) || curve.poly.length === 0 || curve.poly.some((n) => typeof n !== 'number')) {
      problems.push(`${at}: poly must be a list of coefficients`)
    }
    if (curve?.color !== undefined && !HIGHLIGHTS.includes(curve.color)) {
      problems.push(`${at}: color must be one of ${HIGHLIGHTS.join(', ')}`)
    }
    if (curve?.domain !== undefined && !isInterval(curve.domain)) {
      problems.push(`${at}: domain must be [low, high]`)
    }
    if (typeof curve?.label === 'string' && curve.label.includes('$')) {
      problems.push(`${at}: labels are plain text, not notation`)
    }
  }
  for (const [index, point] of (graph.points ?? []).entries()) {
    const at = `${where} point ${index + 1}`
    if (!Array.isArray(point?.at) || point.at.length !== 2 || point.at.some((n) => typeof n !== 'number')) {
      problems.push(`${at}: at must be [x, y]`)
    }
    if (point?.color !== undefined && !HIGHLIGHTS.includes(point.color)) {
      problems.push(`${at}: color must be one of ${HIGHLIGHTS.join(', ')}`)
    }
    if (typeof point?.label === 'string' && point.label.includes('$')) {
      problems.push(`${at}: labels are plain text, not notation`)
    }
  }
  for (const ticks of [graph.xticks, graph.yticks]) {
    if (ticks !== undefined && (!Array.isArray(ticks) || ticks.some((n) => typeof n !== 'number'))) {
      problems.push(`${where}: ticks must be numbers`)
    }
  }
}

/** Compiles the display maths and the inline maths of one line of working. */
function checkStep(step, where) {
  if (!step?.math && !step?.note && !step?.graph) {
    problems.push(`${where}: empty`)
    return
  }
  if (step?.graph) {
    counted.sketch++
    checkGraph(step.graph, where)
  }
  const sources = [
    ...(step.math ? [[step.math, true]] : []),
    ...[...(step.note ?? '').matchAll(INLINE_MATHS)].map((m) => [m[1], false]),
  ]
  for (const [tex, displayMode] of sources) {
    expressions++
    try {
      katex.renderToString(tex, options(displayMode))
    } catch (cause) {
      problems.push(`${where}: ${cause.message.split('\n')[0]}`)
    }
  }
}

function checkFigure(figure, where) {
  const at = `${where} [${figure?.caption ?? '(no caption)'}]`
  if (!Array.isArray(figure?.steps) || figure.steps.length === 0) {
    problems.push(`${at}: no steps`)
    return
  }
  for (const [index, step] of figure.steps.entries()) {
    checkStep(step, `${at} step ${index + 1}`)
  }
}

function checkPractice(practice, where) {
  const at = `${where} [practice${practice?.caption ? ` — ${practice.caption}` : ''}]`
  if (!Array.isArray(practice?.questions) || practice.questions.length === 0) {
    problems.push(`${at}: no questions`)
    return
  }
  for (const [index, question] of practice.questions.entries()) {
    counted.question++
    const asked = `${at} question ${index + 1}`

    if (typeof question?.ask !== 'string' || !question.ask.trim()) {
      problems.push(`${asked}: does not ask anything`)
      continue
    }
    if (!GRADES.includes(question.grade)) {
      problems.push(`${asked}: grade must be one of ${GRADES.join(', ')}`)
    }
    checkStep({ math: question.math, note: question.ask, graph: question.graph }, asked)

    if (!Array.isArray(question.working) || question.working.length === 0) {
      problems.push(`${asked}: no working`)
      continue
    }
    for (const [line, step] of question.working.entries()) {
      checkStep(step, `${asked} working ${line + 1}`)
    }
  }
}

for (const path of markdownFiles(CONTENT)) {
  const where = relative(CONTENT, path)
  const source = readFileSync(path, 'utf8')

  checkProse(source, where)

  for (const [, kind, block] of source.matchAll(BLOCK)) {
    counted[kind]++

    let parsed
    try {
      parsed = parse(block)
    } catch (cause) {
      problems.push(`${where}: ${kind} does not parse as YAML — ${cause.message.split('\n')[0]}`)
      continue
    }

    if (kind === 'figure') checkFigure(parsed, where)
    else checkPractice(parsed, where)
  }
}

for (const problem of problems) console.error(`  ${problem}`)
console.log(
  `${counted.figure} figures, ${counted.practice} practice sets, ` +
    `${counted.question} questions, ${counted.fragment} fragments in prose, ` +
    `${counted.sketch} sketches, ${expressions} expressions, ` +
    `${problems.length} problem${problems.length === 1 ? '' : 's'}`,
)
process.exit(problems.length === 0 ? 0 : 1)
