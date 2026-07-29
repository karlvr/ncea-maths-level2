# Working on this repository

Study material for one Year 12 (NCEA Level 2) student in New Zealand, covering
Algebra (AS91261) and Trigonometry (AS91259), with Calculus (AS91262) to follow.
The output is a static site of lesson pages: written explanation with worked
figures alongside.

```
content/          the lessons — Markdown, the source of truth
docs/             NZQA PDFs: standards, past papers, marking schedules
app/              the site that renders content/ — React, TypeScript, Vite
BRIEF.md          the subject-matter brief and syllabus plan
```

**Node comes from mise.** Prefix commands: `mise exec -- npm run dev`. There is
no other Node on the machine.

> BRIEF.md is still the authority on the syllabus and on what each standard
> requires. Its *"The learning format we're building"* section is not: it
> describes an audio-first plan with a text-to-speech pipeline, and that was
> dropped in favour of pages with stepped figures.

---

## Editing the content

Lessons are Markdown in `content/<subject>/`. One file is one topic, which is
one page.

**To add a lesson:** write the file, then add its path to the right module in
[`app/src/syllabus.ts`](app/src/syllabus.ts). Nothing else. Titles come from the
Markdown `#` heading, so never restate a title in the syllabus.

A lesson file is prose with fenced ` ```figure ` and ` ```practice ` blocks
interleaved. Remove every block and the prose must still read as continuous
writing — the formats are deliberately separable.

Lessons are long, and stay on one page. The sidebar lists the open lesson's
`##` headings and marks the one in view, and a strip at the top of the page
names the section and subsection being read once their headings have scrolled
away — so length is a navigation problem rather than a reason to split a topic
across pages.

### How the prose is written

The register is **direct instruction**, not conversation. These rules come from
Karl's own edits, and he gives feedback by editing rather than describing — so
when a script comes back changed, read the changes as rules and apply them
everywhere, not just where he touched.

1. **Name the noun; do not point at it.** "the original expression", not "the
   original". "If the answers differ", not "if they differ".
2. **Spell out the action.** "then calculate and compare", not "and compare".
3. **Plain word over technical word** where the technical word earns nothing:
   *opposites*, not *inverses*.
4. **Do not answer objections nobody raised.** Emphasis that teaches stays
   ("cancel factors, **never** terms"); emphasis that merely insists goes.
5. **No metaphors or asides that wink at the reader.** They read as casual and
   have been cut before.

**Mathematics in prose is written out in words** — "two $x$ squared minus
eighteen", not `2x² − 18`. This is a deliberate style choice and it survives
from the original audio-first plan. Notation belongs in figures.

**Variables are the exception:** write them as inline maths, so `$x$`, `$a$`,
`$y$`. They then set in the same italic as the figures. Everything else stays in
words.

### Placing content

Explain how a thing fits in before explaining the thing. Each lesson should
place itself against what came before and hand off to what comes after — A1
closes by saying what factorising unlocks in A2 and B2; A3 flags that the
same-base condition is what makes exponential equations work in B3.

Subject-level framing belongs in that subject's introduction, not in its first
topic. See [`content/algebra/a-intro.md`](content/algebra/a-intro.md).

Where the NZQA documents say something concrete and checkable — what is on the
formulae sheet, what the examiner's report says candidates got wrong — use it.
Read the PDFs in `docs/` rather than working from memory.

### The examiner's report sweep

Once a module's lessons are drafted, sweep the examiner's reports for that
standard — `docs/<subject>/*-report-*.pdf`, every year available — and account
for each error they name. This is a pass of its own, run after the lessons
exist, not something to attempt while drafting them.

The reports are structured as four lists per standard: what candidates awarded
Achieved, Merit and Excellence could commonly do, and what those awarded Not
Achieved commonly did. The Not Achieved list is the error list. The Achieved
list is just as useful, because a skill named there is one the examiner treats
as the floor — *converted from surd form to index form* is on it, so a lesson
that never converts in that direction has a gap.

Work through every named item and decide, in writing, which of three it is:

1. **Already covered.** Point at the line that covers it. If it is covered only
   implicitly, that counts as not covered.
2. **A gap in a lesson that exists.** Fix it. A named error earns prose that
   names it and a practice question that would catch it — usually both, because
   prose explains the error and practice is where the reader meets it.
3. **Belongs to a lesson not yet written.** Say so and leave it. Do not force a
   Module B error into Module A because Module A is what exists.

Two rules on how the reports get cited in the content:

- **Cite the year and quote the finding, or do not cite at all.** "The 2024
  report names candidates who identified three correct factors and then could
  not expand them" is checkable against the PDF. "Every year the examiner's
  report lists this error" is not, and a claim of that shape turned out to be
  wrong when the reports were finally read.
- **Attribute to the right standard.** One report PDF covers all three
  standards sat in that paper. A finding in the 91262 section is a calculus
  finding, and the general commentary at the front covers all of them.

Two more sources worth mining in the same pass. The marking schedules
(`*-ass-*.pdf`) show what the marker accepts, including the parenthetical
concessions — *possibly without brackets* — and carry the grade table that says
what a working-free answer is worth. The specification (`*-spc-*.pdf`) says what
candidates may be required to do.

---

## Figures

Full notation: [`content/FIGURE-NOTATION.md`](content/FIGURE-NOTATION.md). In
short:

```figure
caption: Taking out a common factor
steps:
  - math: 6x^2 + 9x
    note: What appears in every term?
  - math: \ca{3}\cb{x}(2x+3)
    note: The common part comes out the front.
```

- **Steps are states, not instructions.** `math` is what is on the page at that
  moment. The `note` explains it.
- One step renders static; several render as a stepper. That is the only
  difference, and the step count decides it — there is no flag.
- **Write steps as though the reader will try to guess each one.** Withholding
  the next line is the point; do not put step three's answer in step two's note.
- **Colour, never arrows.** `\ca` `\cb` `\cc` `\cd` mean "this came from that",
  within one figure only. Use them sparingly.
- The block is YAML: quote anything with a colon, and anything YAML would read
  as a number (`math: "-1"`).
- A note that restates the maths above it, or that describes something
  incidental to the particular example, should be deleted or generalised.

---

## Practice

Full notation: [`content/PRACTICE-NOTATION.md`](content/PRACTICE-NOTATION.md).
In short:

```practice
caption: common factor
questions:
  - ask: Factorise.
    math: 12x^2 + 18x
    grade: achieved
    working:
      - math: 6x(2x+3)
        note: Take the largest number that divides both terms.
```

- **A short set follows each technique**, drilling that technique alone; **a
  mixed set** sits under a `## Practice` heading before the summary.
- `ask` carries the instruction, `math` carries the expression. The prose rule —
  words, not notation — applies to `ask` and to the notes.
- `grade` is required and is one of `achieved`, `merit`, `excellence`. It is
  the band the marking schedule would award, not a measure of length.
- `working` uses the same steps and the same stepper as a figure, and is hidden
  on screen until asked for. Printing reveals all of it.
- **Past papers are the calibration, not the supply.** Adapt anything lifted
  from one, record the year in `from`, and never set a question that needs a
  topic the lesson has not reached.

### Deriving questions from the papers

The papers are `docs/<subject>/*-exm-*.pdf`, with a marking schedule beside each.
Extract one to text before reading it:

```sh
pdftotext -layout docs/algebra/91261-exm-2025.pdf -
```

2024 and 2025 come out clean. 2023 threads *DO NOT WRITE IN THIS AREA* through
every line, so grep that one and expect to read around the noise.

Then, per topic:

**Inventory the parts before adapting any of them.** A paper is three questions
of about five parts each, so fifteen parts a year. Write down what each part
tests and which lesson it belongs to. Most parts sit at Merit or Excellence and
deliberately combine topics — a rational expression whose numerator needs a
trinomial factorised first, indices buried inside a log equation.

**Expect a low yield.** Across 2023, 2024 and 2025 only two or three parts per
topic are usable as single-topic questions. That is what "calibration, not
supply" means in practice: the papers fix the difficulty and the wording, and the
rest of the set is written to match. A1 carries one adapted part; its other
twenty-two questions were written against it.

**Reject a part that needs a topic the lesson has not reached**, however well it
fits otherwise. 2024 Q1(a) asks for $x^2 + 8x - 5$ in completed-square form,
which would suit A1's factorising work — but completing the square is B2, so it
is not available to A1.

**Read the band off the marking schedule, never off intuition.** Each part has a
column per band, and one part often spans two. On 2025 Q2(b) the schedule gives
Achieved for factorising either the numerator or the denominator, and Merit for
the correct simplification. `grade` is what the question *as set* would earn, so
that part is Merit.

**Adapt by changing the numbers and keeping the structure — then derive the whole
answer again from scratch.** This is where the work is, and where it goes wrong.
Changing the numbers usually breaks the thing the question was testing. Adapting
2025 Q2(b) the obvious way produced a numerator and a denominator with no factor
in common, so nothing cancelled and the question had no point left; the
denominator's factors have to be chosen to share one with the numerator. Work the
adapted question end to end before writing a line of `working`.

**Record the year in `from`, and only the year.** The year is enough to say the
shape is real. The question number would point straight at the original, which is
what adapting it was meant to avoid.

**Leave the long modelling parts alone.** Each question in each paper closes with
a contextual part — a golf ball's flight, a decibel scale, the area of a company
logo. Those are Module B and C work: form the equation, then use the
discriminant. They are not Module A practice, and cutting one down to fit
destroys what it tests.

To see which parts have been mined already, and from which year:

```sh
grep -rn 'from:' content/
```

---

**Always run `mise exec -- npm run check` after touching a figure or a practice
set.** It compiles every expression with the browser's KaTeX settings. It runs
in CI too, but a block that fails there has already wasted a deploy.

---

## The app

See [`app/README.md`](app/README.md). It renders `content/` directly — nothing
is copied or generated into the app.

```sh
cd app
mise exec -- npm run dev      # http://localhost:5173
mise exec -- npm run check    # validate every figure and practice set
mise exec -- npm run build
```

Structure worth knowing before changing it:

- [`src/syllabus.ts`](app/src/syllabus.ts) — the course as data. Declares only
  ordering and grouping; everything else is read from the Markdown.
- [`src/lesson-body.ts`](app/src/lesson-body.ts) — splits a script into prose,
  figures and practice, and reads out its section headings. No format knows
  about the others.
- [`src/components/Working.tsx`](app/src/components/Working.tsx) — the stepper.
  A figure and a practice answer are the same thing behind it, which is why
  they behave identically.
- [`src/components/Maths.tsx`](app/src/components/Maths.tsx) — the single set of
  KaTeX options. Prose, notes and figures all render through it, so a fragment
  looks identical wherever it appears. Change it in one place.
- [`src/reading-position.ts`](app/src/reading-position.ts) — which section and
  subsection are being read, answered once from the headings on the page so that
  the sidebar and the sticky strip cannot disagree.

Section anchors are derived from the heading wording, in one place
(`sectionId`), and used both to build the sidebar and to stamp `id` on the
rendered `<h2>` and `<h3>`. Headings must therefore be plain text — notation in
one would not survive the round trip.

Anything held at the top of the viewport is sized in CSS by `--toolbar` (the
narrow-screen contents bar) and `--trail` (the strip naming the section). The
headings' `scroll-margin-top` clears both, and is also read back as the point at
which a heading counts as the one being read — so the amount of headroom is
stated in the stylesheet only.

Routing is by hash and assets are relative, so the site works from any base
path. Deployment to GitHub Pages happens on push to `main`.

### Verifying a change

`npm run build` passing is not evidence the page looks right. Screenshot it:

```sh
mise exec -- npm run preview -- --port 4321
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --disable-gpu --virtual-time-budget=5000 --window-size=1100,1750 \
  --screenshot=out.png "http://localhost:4321/#/a1-manipulating-expressions"
```

Check dark mode too, with `--force-dark-mode`.

---

## House style for the code

The repository follows the conventions in `~/.claude/CLAUDE.md`; the two that
come up most here:

- Document what a class or module is *for* and when to use it, never who calls
  it. Naming consumers in lower-layer documentation inverts the abstraction.
- Group values that always travel together into one type rather than passing
  them separately.
