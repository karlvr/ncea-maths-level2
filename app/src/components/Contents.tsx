/**
 * The table of contents: every subject, module and topic, in study order.
 *
 * The topic being read expands to list its own sections, and the section
 * currently in view is marked. Lessons are long by design — the explanation,
 * its figures and its practice belong on one page — so the way to keep one
 * navigable is to show the reader where in it they are, rather than to break it
 * into shorter pages.
 */
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { SUBJECTS, type Section, type Topic } from '../syllabus'

/** How far below the top of the viewport a heading counts as the one in view. */
const THRESHOLD = 140

/**
 * The section of the page currently being read, tracked as it scrolls. Empty
 * until the page has sections and has been scrolled past the first of them.
 */
function useSectionInView(topicId: string | undefined): string | undefined {
  const [inView, setInView] = useState<string>()

  useEffect(() => {
    setInView(undefined)
    if (!topicId) return

    const headings = [...document.querySelectorAll<HTMLElement>('.lesson .prose h2[id]')]
    if (headings.length === 0) return

    let queued = false
    const measure = () => {
      queued = false
      let current: string | undefined
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > THRESHOLD) break
        current = heading.id
      }
      setInView(current)
    }
    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [topicId])

  return inView
}

function Sections({
  topic,
  inView,
  onNavigate,
}: {
  topic: Topic
  inView: string | undefined
  onNavigate: () => void
}) {
  return (
    <ul className="contents-sections">
      {topic.sections.map((section: Section) => (
        <li key={section.id}>
          <Link
            to={{ pathname: `/${topic.id}`, hash: `#${section.id}` }}
            className={section.id === inView ? 'section-link is-in-view' : 'section-link'}
            aria-current={section.id === inView ? 'location' : undefined}
            onClick={onNavigate}
          >
            {section.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Contents({ onNavigate }: { onNavigate: () => void }) {
  const { pathname } = useLocation()
  const openTopicId = pathname.replace(/^\//, '')
  const inView = useSectionInView(openTopicId || undefined)

  return (
    <nav className="contents" aria-label="Contents">
      <Link to="/" className="masthead" onClick={onNavigate}>
        NCEA Level 2 Maths
      </Link>
      {SUBJECTS.map((subject) => (
        <section key={subject.id}>
          <h2>
            {subject.title}
            <span className="standard">
              {subject.standard} ·{' '}
              {subject.assessment === 'external' ? 'exam' : 'internal'}
            </span>
          </h2>
          {subject.modules.map((module) => (
            <div key={module.id} className="contents-module">
              <h3>{module.title}</h3>
              <ul>
                {module.topics.map((topic) => (
                  <li key={topic.id}>
                    <NavLink to={`/${topic.id}`} onClick={onNavigate} end>
                      {topic.title}
                    </NavLink>
                    {topic.id === openTopicId && topic.sections.length > 0 && (
                      <Sections topic={topic} inView={inView} onNavigate={onNavigate} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </nav>
  )
}
