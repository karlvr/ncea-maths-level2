# Figure notation

How worked figures are described inside the lesson scripts.

The prose is speakable — no symbols, everything written as it would be said aloud. Figures carry the notation. The two are complementary: the sentence tells him what is happening, the figure shows him what it looks like written down.

Figures live in fenced blocks inside the script, beside the passage they belong to. Strip every ` ```figure ` block and the prose still reads as a continuous script.

A figure illustrates something being explained. Working that answers a question the reader has been asked to attempt belongs in a practice set instead — see [PRACTICE-NOTATION.md](PRACTICE-NOTATION.md) — which withholds it until it is wanted.

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

## Sketches

A step may carry a `graph` instead of — or as well as — its `math`. It draws as
a sketch in the examination's sense: shape, intercepts and turning points,
with numbers on the axes only where a value is worth reading.

````markdown
```figure
caption: A curve and its tangent
steps:
  - graph:
      domain: [-1, 4]
      curves:
        - poly: [1, -4, 3]
          label: f
        - poly: [2, -6]
          color: a
          label: tangent
          dashed: true
      points:
        - at: [3, 0]
          color: a
          guides: true
      xticks: [3]
    note: The tangent touches the curve where $x = 3$.
```
````

| Field | Meaning |
|---|---|
| `domain` | The x-interval the sketch covers, as `[low, high]`. Required. |
| `range` | The y-interval shown. Derived from the curves when omitted. |
| `curves` | Each has `poly`, the polynomial's coefficients highest power first — `[1, 0, -3]` is $x^2-3$ — and optionally `color` (`a`–`d`, the highlight palette), `label`, `labelAt` (the x to set the label near), `dashed`, and its own `domain`. |
| `points` | Each has `at: [x, y]`, and optionally `label`, `color`, and `guides`, which draws dashed lines from the point to each axis. |
| `xticks`, `yticks` | Values marked on an axis. An unmarked axis carries only its arrowhead. |
| `xlabel`, `ylabel` | Axis labels, where the context names them something other than `x` and `y`. |

Labels are plain text, not notation — write `f ′(x)` with the prime character,
not `$f'(x)$`. A sketch is qualitative: pick a domain that shows the shape, mark
the values the point of the figure depends on, and leave the rest of the axes
bare.

---

## Diagrams

A step may carry a `diagram` instead of its `math`: a labelled geometric figure
— a triangle with its sides and angles marked, a quadrilateral split by a
diagonal, a sector, a solid drawn with its hidden edges dashed. Where a sketch
answers *what shape is this function*, a diagram answers *what is given and
what is wanted*.

````markdown
```figure
caption: Two sides and the angle between them
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [20, 36]
        C: [55, 36]
        D: [50, -14]
      edges:
        - [A, B]
        - [B, C]
        - [C, D]
        - from: D
          to: A
          label: 40 m
        - from: A
          to: C
          label: 45.8 m
          color: a
          dashed: true
      angles:
        - at: D
          from: A
          to: C
          label: 60°
    note: The diagonal splits the quadrilateral into two triangles.
```
````

| Field | Meaning |
|---|---|
| `points` | Named vertices: `A: [x, y]`, y upward. Coordinates are unitless and only their proportions matter — the diagram scales to fit. Every point is labelled with its name. |
| `edges` | Each is `[P, Q]`, or an object with `from` and `to` and optionally `label` (set beside the edge, at its midpoint where there is room), `color` (`a`–`d`), and `dashed` — dashed is how a hidden edge of a solid, or a line added to the figure, is drawn. |
| `angles` | An arc marking the angle at vertex `at`, between the rays toward `from` and toward `to`, with an optional `label` and `color`. `right: true` draws the right-angle square instead of an arc. The smaller of the two angles is marked; `reflex: true` marks the other. |
| `arcs` | A circular arc for sectors: `center`, `from` and `to` (points on the circle), and optionally `label` and `color`. The minor arc is drawn; `reflex: true` draws the major one. |

Labels are plain text, exactly as for a sketch: `60°` with the degree sign,
`45.8 m` with its unit, `x` as a bare letter. A diagram is *not to scale* in the
examination's sense — place the points so the figure reads clearly, not so the
measurements are true, and never rely on the drawing to carry a value that the
labels do not state.

A solid is drawn as a flat projection: choose coordinates that suggest the
depth, and dash every edge a solid would hide. The triangle being solved inside
the solid is picked out with `color` on its edges.

The figure shows the mathematics; the prose explains it. They should not duplicate each other. If a note simply restates the sentence beneath it, delete the note.

Prefer one expression changing over several expressions side by side. The exception is a deliberate comparison, where two things have to be visible at once for the point to land — use a LaTeX `array` for that.

Keep steps to the size of one line of working. A step that does three things at once is the step he will not be able to predict, and predicting is the point.
