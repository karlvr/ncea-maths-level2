/**
 * The section being read, held at the top of the page as it scrolls.
 *
 * A lesson runs to one long page, so the heading that gives a passage its
 * meaning scrolls out of sight well before the passage ends. This keeps the
 * section — and the subsection within it — named for as long as they apply.
 *
 * It restates headings that are already in the page, so it is hidden from
 * assistive technology rather than read out a second time.
 */
import { useReadingPosition } from '../reading-position'
import type { Topic } from '../syllabus'

export function SectionTrail({ topic }: { topic: Topic }) {
  const position = useReadingPosition(topic.id)
  const section = topic.sections.find((candidate) => candidate.id === position.section)
  const subsection = topic.sections.find((candidate) => candidate.id === position.subsection)

  return (
    <div className="section-trail" aria-hidden="true">
      {section && (
        <p>
          <span>{section.title}</span>
          {subsection && (
            <>
              <span className="section-trail-mark">›</span>
              <span>{subsection.title}</span>
            </>
          )}
        </p>
      )}
    </div>
  )
}
