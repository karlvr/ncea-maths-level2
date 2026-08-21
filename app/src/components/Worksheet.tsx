/**
 * The questions of a lesson or a module set out on their own, to be printed and
 * worked on paper.
 *
 * A worksheet is a second reading of the same scripts rather than a document of
 * its own: the prose and the figures are left behind, the questions keep the
 * headings they were written under, and the working is not rendered at all, so
 * a sheet cannot be turned over into its own answer key. Space to write follows
 * each question, sized by the band it is pitched at, because an Excellence
 * question needs more room than an Achieved one.
 */
import { useEffect, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { PracticeGroup, Question, Section } from '../lesson-body'
import type { ModuleLocation, TopicLocation } from '../syllabus'
import { Annotated, MathsBlock } from './Maths'
import { Sketch } from './Sketch'

/** One lesson's questions, under the title of the lesson they came from. */
interface SheetLesson {
  readonly id: string
  readonly title: string
  readonly groups: readonly PracticeGroup[]
}

/**
 * A worksheet: what it is called, where its questions came from, and the way
 * back to the reading they belong to.
 */
export interface Sheet {
  readonly title: string
  /** The line above the title, placing the questions in the course. */
  readonly breadcrumb: string
  readonly back: { readonly to: string; readonly label: string }
  readonly lessons: readonly SheetLesson[]
}

/** The questions of one lesson, on their own. */
export function lessonSheet({ subject, module, topic }: TopicLocation): Sheet {
  return {
    title: topic.title,
    breadcrumb: `${subject.title} · ${module.title}`,
    back: { to: `/${topic.id}`, label: 'Back to the lesson' },
    lessons: [{ id: topic.id, title: topic.title, groups: topic.practice }],
  }
}

/** The questions of every lesson in a module, in study order. */
export function moduleSheet({ subject, module }: ModuleLocation): Sheet {
  return {
    title: module.title,
    breadcrumb: `${subject.title} · ${subject.standard}`,
    back: { to: '/', label: 'Back to the contents' },
    lessons: module.topics.map((topic) => ({
      id: topic.id,
      title: topic.title,
      groups: topic.practice,
    })),
  }
}

function Heading({ level, children }: { level: number; children: ReactNode }) {
  const Tag = `h${Math.min(level, 6)}` as 'h2'
  return <Tag className="sheet-heading">{children}</Tag>
}

function SheetQuestion({ question }: { question: Question }) {
  return (
    <li className="sheet-question" data-grade={question.grade}>
      <p className="practice-meta">
        <span className={`grade grade-${question.grade}`}>{question.grade}</span>
        {question.from && (
          <span className="practice-source">adapted from the {question.from} exam</span>
        )}
      </p>

      <p className="practice-ask">
        <Annotated text={question.ask} />
      </p>
      {question.graph && <Sketch graph={question.graph} />}
      {question.math && <MathsBlock tex={question.math} />}

      <div className="sheet-space" aria-hidden="true" />
    </li>
  )
}

/**
 * The groups of one lesson, with each heading set once and not again until it
 * changes. `depth` is how far the lesson's own headings are pushed down to sit
 * beneath the title above them.
 */
function SheetGroups({ groups, depth }: { groups: readonly PracticeGroup[]; depth: number }) {
  let standing: readonly Section[] = []

  return (
    <>
      {groups.map((group, index) => {
        const fresh = group.headings.filter((heading, at) => standing[at]?.id !== heading.id)
        standing = group.headings
        return (
          <section key={index} className="sheet-group">
            {fresh.map((heading) => (
              <Heading key={heading.id} level={heading.level + depth}>
                {heading.title}
              </Heading>
            ))}
            {group.practice.caption && <p className="sheet-caption">{group.practice.caption}</p>}
            <ol className="sheet-questions">
              {group.practice.questions.map((question, at) => (
                <SheetQuestion key={at} question={question} />
              ))}
            </ol>
          </section>
        )
      })}
    </>
  )
}

function count(lessons: readonly SheetLesson[]): number {
  return lessons.reduce(
    (total, lesson) =>
      total + lesson.groups.reduce((sum, group) => sum + group.practice.questions.length, 0),
    0,
  )
}

export function Worksheet({ sheet }: { sheet: Sheet }) {
  const questions = count(sheet.lessons)
  const named = sheet.lessons.length > 1

  useEffect(() => {
    document.title = `${sheet.title} practice — NCEA Level 2 Maths`
  }, [sheet.title])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [sheet.title])

  return (
    <article className="lesson worksheet">
      <header className="lesson-header">
        <p className="lesson-breadcrumb">{sheet.breadcrumb}</p>
        <h1>{sheet.title}</h1>
        <p className="lesson-subtitle">
          Practice questions — {questions} {questions === 1 ? 'question' : 'questions'} to work
          on paper.
        </p>
        <p className="sheet-tools">
          <button type="button" className="sheet-print" onClick={() => window.print()}>
            Print
          </button>
          <Link to={sheet.back.to}>{sheet.back.label}</Link>
        </p>
      </header>

      {questions === 0 && <p className="sheet-empty">There are no practice questions here yet.</p>}

      {sheet.lessons.map((lesson) => (
        <section key={lesson.id} className="sheet-lesson">
          {named && <h2 className="sheet-lesson-title">{lesson.title}</h2>}
          <SheetGroups groups={lesson.groups} depth={named ? 1 : 0} />
        </section>
      ))}
    </article>
  )
}
