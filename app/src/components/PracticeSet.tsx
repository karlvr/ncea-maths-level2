/**
 * A set of questions to be attempted on paper, with the answers held back.
 *
 * The working behind each question stays in the document but out of sight until
 * it is asked for, so that reading on is a deliberate act rather than the path
 * of least resistance. Printing a lesson gives every answer in full, since
 * paper cannot withhold anything.
 *
 * Each question states the band it is pitched at, in the language the standard
 * is graded in, so that the demand being made is never a surprise.
 */
import { useState } from 'react'
import type { Practice, Question } from '../lesson-body'
import { Annotated, MathsBlock } from './Maths'
import { Sketch } from './Sketch'
import { Working } from './Working'

function PracticeQuestion({ question }: { question: Question }) {
  const [shown, setShown] = useState(false)

  return (
    <li className="practice-question">
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

      <button
        type="button"
        className="practice-reveal"
        aria-expanded={shown}
        onClick={() => setShown((open) => !open)}
      >
        {shown ? 'Hide working' : 'Show working'}
      </button>

      <div className={`practice-working${shown ? '' : ' is-hidden'}`}>
        <Working steps={question.working} />
      </div>
    </li>
  )
}

export function PracticeSet({ practice }: { practice: Practice }) {
  const label = practice.caption ? `Practice — ${practice.caption}` : 'Practice'

  return (
    <section className="practice" aria-label={label}>
      <p className="practice-label">{label}</p>
      <ol className="practice-questions">
        {practice.questions.map((question, index) => (
          <PracticeQuestion key={index} question={question} />
        ))}
      </ol>
    </section>
  )
}
