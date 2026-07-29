/**
 * Validates every figure in the lesson scripts.
 *
 * Figures are authored by hand in Markdown and only rendered in the browser, so
 * a malformed block or a piece of invalid LaTeX would otherwise surface as a
 * broken figure on the page rather than as a build failure. This checks each
 * block parses as YAML, declares at least one step, and that all of its
 * mathematics compiles under the same KaTeX settings the application uses.
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

const FIGURE_BLOCK = /^```figure$\n([\s\S]*?)^```$/gm
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
let figures = 0
let expressions = 0

for (const path of markdownFiles(CONTENT)) {
  const where = relative(CONTENT, path)
  const source = readFileSync(path, 'utf8')

  for (const block of source.matchAll(FIGURE_BLOCK)) {
    figures++

    let figure
    try {
      figure = parse(block[1])
    } catch (cause) {
      problems.push(`${where}: figure does not parse as YAML — ${cause.message.split('\n')[0]}`)
      continue
    }

    const caption = figure?.caption ?? '(no caption)'
    if (!Array.isArray(figure?.steps) || figure.steps.length === 0) {
      problems.push(`${where} [${caption}]: no steps`)
      continue
    }

    for (const [index, step] of figure.steps.entries()) {
      if (!step?.math && !step?.note) {
        problems.push(`${where} [${caption}] step ${index + 1}: empty`)
        continue
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
          problems.push(
            `${where} [${caption}] step ${index + 1}: ${cause.message.split('\n')[0]}`,
          )
        }
      }
    }
  }
}

for (const problem of problems) console.error(`  ${problem}`)
console.log(
  `${figures} figures, ${expressions} expressions, ${problems.length} problem${problems.length === 1 ? '' : 's'}`,
)
process.exit(problems.length === 0 ? 0 : 1)
