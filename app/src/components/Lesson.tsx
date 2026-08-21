/**
 * A single lesson page: the script, its figures and practice, and the way
 * onward.
 *
 * Use this to render a topic located through the syllabus. The lesson's own
 * title and subtitle come from its script, so nothing here needs to restate
 * them.
 *
 * Sections carry an anchor derived from their wording, so a lesson can be
 * linked to at a point within it rather than only at its start, and the section
 * being read stays named at the top of the page while it is scrolled through.
 */
import { useEffect, useMemo, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Markdown, { type Options } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { sectionId, splitLesson } from '../lesson-body'
import { neighbours, type TopicLocation } from '../syllabus'
import { KATEX_OPTIONS } from './Maths'
import { PracticeSet } from './PracticeSet'
import { SectionTrail } from './SectionTrail'
import { WorkedFigure } from './WorkedFigure'

// Variables are written as `$x$` in the prose so they are set as mathematics
// rather than as a stray letter, and match the figures describing them.
const REMARK_PLUGINS: NonNullable<Options['remarkPlugins']> = [remarkGfm, remarkMath]
const REHYPE_PLUGINS: NonNullable<Options['rehypePlugins']> = [[rehypeKatex, KATEX_OPTIONS]]

/** The text of a heading, for deriving its anchor. */
function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  return ''
}

const COMPONENTS = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 id={sectionId(textOf(children))}>{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 id={sectionId(textOf(children))}>{children}</h3>
  ),
}

export function Lesson({ location }: { location: TopicLocation }) {
  const { subject, module, topic } = location
  const blocks = useMemo(() => splitLesson(topic.markdown), [topic.markdown])
  const { previous, next } = neighbours(topic.id)
  const { hash, key } = useLocation()

  useEffect(() => {
    document.title = `${topic.title} — NCEA Level 2 Maths`
  }, [topic.title])

  // Arriving at a section scrolls to it; arriving at a lesson starts at the top.
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [topic.id, hash, key])

  return (
    <article className="lesson">
      <SectionTrail topic={topic} />

      <header className="lesson-header">
        <p className="lesson-breadcrumb">
          {subject.title} · {module.title}
        </p>
        <h1>{topic.title}</h1>
        {topic.subtitle && <p className="lesson-subtitle">{topic.subtitle}</p>}
        {topic.practice.length > 0 && (
          <p className="lesson-tools">
            <Link to={`/practice/${topic.id}`}>Practice sheet</Link>
          </p>
        )}
      </header>

      {blocks.map((block, index) => {
        if (block.kind === 'figure') {
          return <WorkedFigure key={index} figure={block.figure} />
        }
        if (block.kind === 'practice') {
          return <PracticeSet key={index} practice={block.practice} />
        }
        if (block.kind === 'error') {
          return (
            <p key={index} className="figure-error">
              Block could not be read: {block.message}
            </p>
          )
        }
        return (
          <div key={index} className="prose">
            <Markdown
              remarkPlugins={REMARK_PLUGINS}
              rehypePlugins={REHYPE_PLUGINS}
              components={COMPONENTS}
            >
              {block.markdown}
            </Markdown>
          </div>
        )
      })}

      <nav className="lesson-onward" aria-label="Adjacent lessons">
        {previous ? (
          <Link to={`/${previous.topic.id}`} className="onward onward-back">
            <span>Previous</span>
            {previous.topic.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/${next.topic.id}`} className="onward onward-next">
            <span>Next</span>
            {next.topic.title}
          </Link>
        )}
      </nav>
    </article>
  )
}
