/**
 * A single lesson page: the script, its figures, and the way onward.
 *
 * Use this to render a topic located through the syllabus. The lesson's own
 * title and subtitle come from its script, so nothing here needs to restate
 * them.
 */
import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import type { PluggableList } from 'unified'
import { splitLesson } from '../lesson-body'
import { neighbours, type TopicLocation } from '../syllabus'
import { KATEX_OPTIONS } from './Maths'
import { WorkedFigure } from './WorkedFigure'

// Variables are written as `$x$` in the prose so they are set as mathematics
// rather than as a stray letter, and match the figures describing them.
const REMARK_PLUGINS: PluggableList = [remarkGfm, remarkMath]
const REHYPE_PLUGINS: PluggableList = [[rehypeKatex, KATEX_OPTIONS]]

export function Lesson({ location }: { location: TopicLocation }) {
  const { subject, module, topic } = location
  const blocks = useMemo(() => splitLesson(topic.markdown), [topic.markdown])
  const { previous, next } = neighbours(topic.id)

  useEffect(() => {
    document.title = `${topic.title} — NCEA Level 2 Maths`
    window.scrollTo(0, 0)
  }, [topic.title, topic.id])

  return (
    <article className="lesson">
      <header className="lesson-header">
        <p className="lesson-breadcrumb">
          {subject.title} · {module.title}
        </p>
        <h1>{topic.title}</h1>
        {topic.subtitle && <p className="lesson-subtitle">{topic.subtitle}</p>}
      </header>

      {blocks.map((block, index) => {
        if (block.kind === 'figure') {
          return <WorkedFigure key={index} figure={block.figure} />
        }
        if (block.kind === 'error') {
          return (
            <p key={index} className="figure-error">
              Figure could not be read: {block.message}
            </p>
          )
        }
        return (
          <div key={index} className="prose">
            <Markdown remarkPlugins={REMARK_PLUGINS} rehypePlugins={REHYPE_PLUGINS}>
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
