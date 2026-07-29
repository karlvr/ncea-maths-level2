/**
 * A worked figure: one piece of algebra, revealed a line at a time.
 *
 * Steps accumulate rather than replace, so the figure builds downwards the way
 * working is written on paper. Holding later steps back is the point of the
 * component — being made to attempt the next line before seeing it is what
 * turns a figure into practice rather than something to read past. A figure of
 * a single step has nothing to withhold and renders plainly.
 *
 * Every step is present in the document whether or not it has been revealed, so
 * that printing a lesson produces complete working.
 */
import { useCallback, useState } from 'react'
import type { Figure } from '../lesson-body'
import { Annotated, MathsBlock } from './Maths'

export function WorkedFigure({ figure }: { figure: Figure }) {
  const last = figure.steps.length - 1
  const [revealed, setRevealed] = useState(0)
  const stepped = last > 0

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowRight') setRevealed((at) => Math.min(at + 1, last))
      else if (event.key === 'ArrowLeft') setRevealed((at) => Math.max(at - 1, 0))
      else return
      event.preventDefault()
    },
    [last],
  )

  return (
    <figure
      className="worked"
      tabIndex={stepped ? 0 : undefined}
      onKeyDown={stepped ? onKeyDown : undefined}
      aria-label={figure.caption}
    >
      {figure.caption && <figcaption>{figure.caption}</figcaption>}

      <ol className="worked-steps" aria-live="polite">
        {figure.steps.map((step, index) => (
          <li
            key={index}
            className={[
              index > revealed ? 'is-hidden' : '',
              index === revealed && stepped ? 'is-current' : '',
            ]
              .join(' ')
              .trim()}
          >
            {step.math && <MathsBlock tex={step.math} />}
            {step.note && (
              <p className="worked-note">
                <Annotated text={step.note} />
              </p>
            )}
          </li>
        ))}
      </ol>

      {stepped && (
        <div className="worked-controls">
          <button
            type="button"
            onClick={() => setRevealed((at) => Math.max(at - 1, 0))}
            disabled={revealed === 0}
          >
            Back
          </button>
          <span className="worked-count" aria-label={`Step ${revealed + 1} of ${last + 1}`}>
            {revealed + 1} / {last + 1}
          </span>
          <button
            type="button"
            onClick={() => setRevealed((at) => Math.min(at + 1, last))}
            disabled={revealed === last}
          >
            Next
          </button>
          <button
            type="button"
            className="worked-jump"
            onClick={() => setRevealed(revealed === last ? 0 : last)}
          >
            {revealed === last ? 'Start over' : 'Reveal all'}
          </button>
        </div>
      )}
    </figure>
  )
}
