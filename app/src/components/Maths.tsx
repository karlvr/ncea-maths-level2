/**
 * Rendering of mathematical notation, and of prose that contains it.
 *
 * All maths in the lesson scripts is LaTeX. Highlighting is written with the
 * macros `\ca` to `\cd`, which mark a fragment as belonging to one of four
 * highlight groups; the colours themselves live in CSS so that they respond to
 * the page theme rather than being fixed at authoring time. Within a figure the
 * groups mean only "this came from that", and they carry no meaning between one
 * figure and the next.
 *
 * Notation that fails to parse renders as its own source rather than throwing,
 * so an authoring mistake shows up on the page as something obviously wrong
 * instead of a blank screen.
 */
import { useMemo } from 'react'
import katex from 'katex'

/**
 * The KaTeX settings every part of the site renders with, so that a fragment
 * looks the same in a figure, in a figure's note, and in running prose.
 *
 * KaTeX mutates the macro table it is given, so callers take a copy.
 */
export const KATEX_MACROS = {
  '\\ca': '\\htmlClass{c-a}{#1}',
  '\\cb': '\\htmlClass{c-b}{#1}',
  '\\cc': '\\htmlClass{c-c}{#1}',
  '\\cd': '\\htmlClass{c-d}{#1}',
}

export const KATEX_OPTIONS = {
  throwOnError: false,
  trust: true,
  strict: false,
  macros: KATEX_MACROS,
}

function render(tex: string, displayMode: boolean): string {
  return katex.renderToString(tex, {
    ...KATEX_OPTIONS,
    displayMode,
    macros: { ...KATEX_MACROS },
  })
}

/** A block of mathematics, set on its own line and centred. */
export function MathsBlock({ tex }: { tex: string }) {
  const html = useMemo(() => render(tex, true), [tex])
  return <div className="maths-block" dangerouslySetInnerHTML={{ __html: html }} />
}

const INLINE_MATHS = /\$([^$]+)\$/g

/**
 * A line of prose which may contain inline maths delimited by `$…$`.
 *
 * Use this for short author-written lines rather than for arbitrary Markdown —
 * it handles maths and nothing else, and does not interpret emphasis, links or
 * lists.
 */
export function Annotated({ text }: { text: string }) {
  const parts = useMemo(() => {
    const out: Array<{ maths: boolean; value: string }> = []
    let cursor = 0
    for (const match of text.matchAll(INLINE_MATHS)) {
      if (match.index > cursor) {
        out.push({ maths: false, value: text.slice(cursor, match.index) })
      }
      out.push({ maths: true, value: match[1] })
      cursor = match.index + match[0].length
    }
    if (cursor < text.length) out.push({ maths: false, value: text.slice(cursor) })
    return out
  }, [text])

  return (
    <>
      {parts.map((part, index) =>
        part.maths ? (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: render(part.value, false) }}
          />
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </>
  )
}
