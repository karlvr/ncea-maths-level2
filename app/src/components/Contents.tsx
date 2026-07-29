/**
 * The table of contents: every subject, module and topic, in study order.
 *
 * The topic being read expands to list its own sections, and the section
 * currently in view is marked. Lessons are long by design — the explanation,
 * its figures and its practice belong on one page — so the way to keep one
 * navigable is to show the reader where in it they are, rather than to break it
 * into shorter pages.
 */
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useReadingPosition } from '../reading-position'
import { SUBJECTS, type Section, type Topic } from '../syllabus'

/** The lesson's own sections, without the subsections that sit inside them. */
function topLevel(sections: readonly Section[]): readonly Section[] {
  return sections.filter((section) => section.level === 2)
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
      {topLevel(topic.sections).map((section: Section) => (
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
  const inView = useReadingPosition(openTopicId || undefined).section

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
                    {topic.id === openTopicId && topLevel(topic.sections).length > 0 && (
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
