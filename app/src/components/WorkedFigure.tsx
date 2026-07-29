/**
 * A worked figure: one piece of algebra set apart from the prose, captioned.
 *
 * Use this for working that illustrates something being explained. Where the
 * working answers a question the reader has been asked to attempt, it belongs
 * in a practice set instead, which withholds it until it is wanted.
 */
import type { Figure } from '../lesson-body'
import { Working } from './Working'

export function WorkedFigure({ figure }: { figure: Figure }) {
  return (
    <figure className="worked" aria-label={figure.caption}>
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
      <Working steps={figure.steps} />
    </figure>
  )
}
