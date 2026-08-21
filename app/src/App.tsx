/**
 * The application shell: contents on one side, a lesson on the other.
 *
 * Routing is by hash, which keeps deep links working on a static host without
 * any server-side rewriting.
 */
import { useEffect, useState } from 'react'
import { HashRouter, Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { ColourSchemeChoice } from './components/ColourSchemeChoice'
import { Contents } from './components/Contents'
import { Lesson } from './components/Lesson'
import { Worksheet, lessonSheet, moduleSheet } from './components/Worksheet'
import { SUBJECTS, TOPIC_ORDER, findModule, findTopic, type Module } from './syllabus'

/** Whether a module has any questions to gather onto a sheet of its own. */
function hasPractice(module: Module): boolean {
  return module.topics.some((topic) => topic.practice.length > 0)
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
              {hasPractice(module) && (
                <p className="module-sheet">
                  <Link to={`/practice/${subject.id}/${module.id}`}>
                    Practice sheet for this module
                  </Link>
                </p>
              )}
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

function LessonSheetRoute() {
  const { topicId } = useParams()
  const location = topicId ? findTopic(topicId) : undefined
  if (!location) return <Navigate to="/" replace />
  return <Worksheet sheet={lessonSheet(location)} />
}

function ModuleSheetRoute() {
  const { subjectId, moduleId } = useParams()
  const location = subjectId && moduleId ? findModule(subjectId, moduleId) : undefined
  if (!location) return <Navigate to="/" replace />
  return <Worksheet sheet={moduleSheet(location)} />
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
          <ColourSchemeChoice />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice/:topicId" element={<LessonSheetRoute />} />
            <Route path="/practice/:subjectId/:moduleId" element={<ModuleSheetRoute />} />
            <Route path="/:topicId" element={<LessonRoute />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
