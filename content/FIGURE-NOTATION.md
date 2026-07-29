# Figure notation

How worked figures are described inside the lesson scripts.

The prose is speakable — no symbols, everything written as it would be said aloud. Figures carry the notation. The two are complementary: the sentence tells him what is happening, the figure shows him what it looks like written down.

Figures live in fenced blocks inside the script, above the passage they belong to. Strip every ` ```figure ` block and the prose still reads as a continuous script.

---

## The block

````markdown
```figure
caption: Splitting the middle term
steps:
  - math: 2x^2 + 7x + 3
    note: Multiply the coefficient of $x^2$ by the constant. Two times three is six.
  - math: 2x^2 + \ca{6x} + \cb{x} + 3
    note: Six and one multiply to six and add to seven, so split the middle term.
  - math: 2x(\ca{x+3}) + 1(\ca{x+3})
    note: Factorise the first pair and the last pair separately.
  - math: (x+3)(2x+1)
    note: The common bracket comes out.
```
````

| Field | Meaning |
|---|---|
| `caption` | Short label for the figure. |
| `steps` | Ordered list. Each step is a **state**, not a transition. |
| `math` | The expression as it stands at this step. Raw LaTeX — no `$` delimiters, the whole field is maths. |
| `note` | One line explaining this step. Prose, with inline maths in `$…$`. |
| `id` | Optional, for referring to a figure by name. |

The block is YAML, so quote any value containing a colon, and quote any value
YAML would otherwise read as something other than text — `math: "-1"` needs its
quotes, or it arrives as the number minus one. `npm run check` catches both.

---

## Steps are states, not instructions

Each step says what is on the page at that moment. It does not say what to do to get there — the `note` covers that.

This is the difference between `split $7x$ into $6x + x$` and `2x^2 + 6x + x + 3`. The first is an instruction to a person; the second is something the page can draw.

A figure with one step renders static. A figure with several renders with previous and next buttons. There is no separate choice to make — the number of steps decides it.

## Why stepped is the default

A stepper is a free self-test. He sees the starting expression and can try to produce the next line himself before revealing it. Attempting to recall something before being shown it is the best-evidenced study technique there is, and a figure that displays all four lines at once throws that away.

The information is identical either way. The stepper just withholds it long enough to be useful. There is a *show all steps* control for when he is revising rather than learning, and printing always expands every step.

So: write the steps as though he is going to try to guess each one. Do not put the answer to step three in the note on step two.

---

## Colour instead of arrows

To show where a term came from, colour it and colour its source to match. Four macros are available inside `math` and inside `$…$` in a `note`:

| Macro | Use |
|---|---|
| `\ca{…}` | First highlight |
| `\cb{…}` | Second highlight |
| `\cc{…}` | Third highlight |
| `\cd{…}` | Fourth highlight |

```
math: (\ca{x}+\cb{2})(\cc{x}+\cd{5})
math: \ca{x}\cdot\cc{x} + \ca{x}\cdot\cd{5} + \cb{2}\cdot\cc{x} + \cb{2}\cdot\cd{5}
```

The colours carry no fixed meaning — they mean "this came from that", and only within a single figure. They are defined in CSS rather than baked into the LaTeX, so they adapt to light and dark themes.

Use them sparingly. A figure where everything is coloured says nothing.

---

## What a good figure looks like

The figure shows the mathematics; the prose explains it. They should not duplicate each other. If a note simply restates the sentence beneath it, delete the note.

Prefer one expression changing over several expressions side by side. The exception is a deliberate comparison, where two things have to be visible at once for the point to land — use a LaTeX `array` for that.

Keep steps to the size of one line of working. A step that does three things at once is the step he will not be able to predict, and predicting is the point.
