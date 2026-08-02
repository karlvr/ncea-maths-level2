/**
 * The colour scheme the pages are read in: the device's own setting, or an
 * override in either direction that outlasts the visit.
 *
 * Use this where a control has to show the setting and change it. The scheme is
 * applied to the document itself, so nothing that merely renders in it has to
 * know which one is in force.
 */
import { useEffect, useState } from 'react'

/** Follow the device, or hold the pages to one scheme whatever it is set to. */
export type ColourScheme = 'auto' | 'light' | 'dark'

/* Where the choice is kept, and the attribute it is applied through. The same
   two names appear in `index.html`, which reads the choice before the first
   paint so that an override never flashes the other scheme, and in the
   stylesheet, which paints from the attribute. */
const STORAGE_KEY = 'colour-scheme'
const ATTRIBUTE = 'scheme'

function storedScheme(): ColourScheme {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : 'auto'
}

/**
 * The scheme in force and a function that changes it. A change takes effect on
 * the whole document at once and is remembered for the next visit; following
 * the device is the state of having chosen nothing, and is stored as such.
 */
export function useColourScheme(): [ColourScheme, (scheme: ColourScheme) => void] {
  const [scheme, setScheme] = useState<ColourScheme>(storedScheme)

  useEffect(() => {
    const { dataset } = document.documentElement
    if (scheme === 'auto') {
      delete dataset[ATTRIBUTE]
      localStorage.removeItem(STORAGE_KEY)
    } else {
      dataset[ATTRIBUTE] = scheme
      localStorage.setItem(STORAGE_KEY, scheme)
    }
  }, [scheme])

  return [scheme, setScheme]
}
