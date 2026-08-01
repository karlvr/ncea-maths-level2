# Practice notation

How questions to be worked on paper are described inside the lesson scripts.

A practice set is a fenced ` ```practice ` block. It carries questions and the
working that answers them; the working stays out of sight on screen until it is
asked for, and is always printed in full.

Practice sets appear twice in a lesson. A short set follows each technique as it
is taught, drilling that technique alone. A longer mixed set sits under a
`## Practice` heading before the summary, combining techniques the way the
examination does.

---

## The block

````markdown
```practice
caption: common factor
questions:
  - ask: Factorise.
    math: 12x^2 + 18x
    grade: achieved
    working:
      - math: \ca{6}\!\cdot\!2\!\cdot\!\cb{x}\!\cdot\!x \;+\; \ca{6}\!\cdot\!3\!\cdot\!\cb{x}
        note: Take the largest number that divides both, not just any number that does.
      - math: 6x(2x+3)
```
````

| Field | Meaning |
|---|---|
| `caption` | What this set drills. Optional, and appended to the word *Practice*, which the set carries anyway — so write `common factor`, not `Practice — common factor`. |
| `questions` | Ordered list, easiest first. |

Each question:

| Field | Meaning |
|---|---|
| `ask` | The instruction, in prose, with inline maths in `$…$`. |
| `math` | The expression the question is about, set on its own line. Raw LaTeX, no `$` delimiters. Optional, where the instruction says everything. |
| `graph` | The sketch the question is about, where the question shows a graph rather than an expression — see the sketch fields in [FIGURE-NOTATION.md](FIGURE-NOTATION.md). A step of `working` may carry one too, where the answer is itself a sketch. |
| `grade` | `achieved`, `merit` or `excellence`. Required. |
| `from` | The examination year the question was adapted from. Quote it, or YAML reads it as a number. |
| `working` | The answer, one line at a time. Same `math` and `note` fields as a figure's steps, and the same stepper. |

The block is YAML, so the rules that apply to figures apply here: quote any value
containing a colon, and quote any value YAML would read as something other than
text. `npm run check` compiles every expression and rejects a missing or unknown
`grade`.

---

## The instruction goes in `ask`, the notation in `math`

The lesson prose sets notation inline, and a question could too. It does not,
because here the notation is the thing being asked about rather than a fragment
of a sentence: `ask` carries the sentence, `math` carries the expression.

```
ask: Simplify fully.
math: \dfrac{2x^2 - 18}{x^2 + 6x + 9}
```

Not `ask: Simplify fully $\dfrac{2x^2 - 18}{x^2 + 6x + 9}$.` — an expression of
any size sets badly inline, and the reader has to pick it out of a sentence
before they can start.

Where the instruction needs to name the expression, name it. "Find the value of
$k$ for which the expression is a perfect square", not "…for which this is a
perfect square".

---

## Where the questions come from

Past papers are the calibration, not the supply. Three years of papers yield two
or three parts per topic, and most parts deliberately combine topics, so the
rest are written to match what the marking schedules and the examiner's reports
show each band actually demands.

**A question lifted from a paper is altered before it is used**, and the year is
recorded in `from`. Altering it keeps the papers themselves worth sitting under
timed conditions later; recording the year says the shape is real.

Set questions only on what the lesson has already taught. A part of a past paper
that needs a later topic belongs in that later topic, however well it fits the
technique in front of you.

---

## Grades

The band is the one the marking schedule would award for answering well, not a
measure of how long the question takes.

| Band | What it asks for |
|---|---|
| `achieved` | One method, applied correctly. |
| `merit` | A sequence of steps, or two concepts used together. |
| `excellence` | A strategy that has to be devised before it can be carried out. |

---

## Writing the working

The working is a figure's steps by another name, and the same rules hold: each
step is a **state**, one line of working, and a note must not give away the step
below it.

Two things a practice note should do that a figure's note need not:

- Name the decision that was made, where there was one — *common factor first,
  which drops the power and clears the coefficient*.
- Say what would have gone wrong otherwise, where an error is likely — *the six
  was never divided*. The examiner's reports say which errors are common; use
  them rather than guessing.

The last step is the answer. It does not need a note saying so.
