/**
 * Tracks how far through a lesson the reader has got.
 *
 * A lesson is one long page, so "which part of it is on screen" is a question
 * that anything showing the reader their place has to answer. This module
 * answers it once, from the headings the rendered page carries, so that
 * everything showing a position agrees on what that position is.
 */
import { useEffect, useState } from 'react'

/**
 * A heading being tracked, with the point at which it becomes the one being
 * read: its own `scroll-margin-top`, which is where it comes to rest when it is
 * navigated to. Taking the measure from the heading keeps the two in step —
 * arriving at a heading and reading past it agree on which section that is —
 * and leaves the amount of headroom stated in the stylesheet alone.
 */
interface TrackedHeading {
  readonly element: HTMLElement
  readonly headroom: number
}

/**
 * The section and subsection being read, as anchors. Either may be absent: the
 * section until the page has been scrolled past its first heading, the
 * subsection whenever the section in view has no subsections or none of them
 * has been reached yet.
 */
export interface ReadingPosition {
  readonly section?: string
  readonly subsection?: string
}

/** A position within no lesson, or within one not yet scrolled into. */
const NOWHERE: ReadingPosition = {}

/**
 * The reading position within the given lesson, kept current as the page
 * scrolls and reset when the lesson changes.
 *
 * The headings are read from the rendered page, so the position is meaningful
 * only while that lesson is the one on screen.
 */
export function useReadingPosition(topicId: string | undefined): ReadingPosition {
  const [position, setPosition] = useState<ReadingPosition>(NOWHERE)

  useEffect(() => {
    setPosition(NOWHERE)
    if (!topicId) return

    const headings = [
      ...document.querySelectorAll<HTMLElement>('.lesson .prose h2[id], .lesson .prose h3[id]'),
    ]
    if (headings.length === 0) return

    // Headroom is read from the stylesheet, so it has to be taken again whenever
    // the viewport changes and the stylesheet answers differently.
    let tracked: readonly TrackedHeading[] = []
    const track = () => {
      tracked = headings.map((element) => ({
        element,
        headroom: parseFloat(getComputedStyle(element).scrollMarginTop) || 0,
      }))
    }

    let queued = false
    const measure = () => {
      queued = false
      let section: string | undefined
      let subsection: string | undefined
      // A subsection belongs to the section above it, so passing a section
      // heading clears whichever subsection of the previous one was in view.
      for (const { element, headroom } of tracked) {
        // A heading resting exactly on its headroom has been reached, so allow
        // for the fraction of a pixel a scroll can land on.
        if (element.getBoundingClientRect().top > headroom + 1) break
        if (element.tagName === 'H2') {
          section = element.id
          subsection = undefined
        } else {
          subsection = element.id
        }
      }
      setPosition((current) =>
        current.section === section && current.subsection === subsection
          ? current
          : { section, subsection },
      )
    }
    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(measure)
    }
    const onResize = () => {
      track()
      onScroll()
    }

    track()
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [topicId])

  return position
}
