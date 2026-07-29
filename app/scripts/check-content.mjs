/**
 * Validates every figure and practice set in the lesson scripts.
 *
 * Blocks are authored by hand in Markdown and only rendered in the browser, so
 * a malformed block or a piece of invalid LaTeX would otherwise surface as a
 * broken page rather than as a build failure. This checks each block parses as
 * YAML, carries the fields its kind requires, and that all of its mathematics
 * compiles under the same KaTeX settings the application uses.
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
const counted = { figure: 0, practice: 0, question: 0 }
let expressions = 0

/** Compiles the display maths and the inline maths of one line of working. */
function checkStep(step, where) {
  if (!step?.math && !step?.note) {
    problems.push(`${where}: empty`)
    return
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
    checkStep({ math: question.math, note: question.ask }, asked)

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
    `${counted.question} questions, ${expressions} expressions, ` +
    `${problems.length} problem${problems.length === 1 ? '' : 's'}`,
)
process.exit(problems.length === 0 ? 0 : 1)
