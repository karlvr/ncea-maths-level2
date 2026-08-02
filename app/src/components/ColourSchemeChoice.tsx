/**
 * The control that sets the colour scheme, offering the two schemes and the
 * device's own setting as three exclusive choices.
 */
import { useColourScheme, type ColourScheme } from '../colour-scheme'

const CHOICES: readonly { scheme: ColourScheme; label: string }[] = [
  { scheme: 'light', label: 'Light' },
  { scheme: 'dark', label: 'Dark' },
  { scheme: 'auto', label: 'Auto' },
]

export function ColourSchemeChoice() {
  const [scheme, setScheme] = useColourScheme()

  return (
    <div className="scheme-choice" role="group" aria-label="Colour scheme">
      {CHOICES.map((choice) => (
        <button
          key={choice.scheme}
          type="button"
          aria-pressed={choice.scheme === scheme}
          onClick={() => setScheme(choice.scheme)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  )
}
