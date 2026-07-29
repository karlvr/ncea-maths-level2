/**
 * The application shell: contents on one side, a lesson on the other.
 *
 * Routing is by hash, which keeps deep links working on a static host without
 * any server-side rewriting.
 */
import { useEffect, useState } from 'react'
import {
  HashRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'
import { Lesson } from './components/Lesson'
import { SUBJECTS, TOPIC_ORDER, findTopic } from './syllabus'

function Contents({ onNavigate }: { onNavigate: () => void }) {
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
                    <NavLink to={`/${topic.id}`} onClick={onNavigate}>
                      {topic.title}
                    </NavLink>
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

function Home() {
  useEffect(() => {
    document.title = 'NCEA Level 2 Maths'
  }, [])

  return (
    <article className="lesson">
      <header className="lesson-header">
        <h1>NCEA Level 2 Maths</h1>
        <p className="lesson-subtitle">Study notes and worked figures.</p>
      </header>
      {SUBJECTS.map((subject) => (
        <section key={subject.id} className="prose">
          <h2>
            {subject.title} — {subject.standard}
          </h2>
          {subject.modules.map((module) => (
            <div key={module.id}>
              <h3>{module.title}</h3>
              {module.blurb && <p>{module.blurb}</p>}
              <ul>
                {module.topics.map((topic) => (
                  <li key={topic.id}>
                    <Link to={`/${topic.id}`}>{topic.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </article>
  )
}

function LessonRoute() {
  const { topicId } = useParams()
  const location = topicId ? findTopic(topicId) : undefined
  if (!location) return <Navigate to="/" replace />
  return <Lesson location={location} />
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HashRouter>
      <div className={`shell${menuOpen ? ' is-menu-open' : ''}`}>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Contents'}
        </button>
        <aside className="sidebar">
          <Contents onNavigate={() => setMenuOpen(false)} />
          <p className="topic-count">
            {TOPIC_ORDER.length} {TOPIC_ORDER.length === 1 ? 'topic' : 'topics'}
          </p>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:topicId" element={<LessonRoute />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
