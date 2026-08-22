# NCEA Level 2 Maths — Study Brief

**Purpose:** A working reference for building short audio lessons + written examples for a Year 12 (NCEA Level 2) student in New Zealand. Covers **Algebra (AS91261)**, **Trigonometry (AS91259)** and **Calculus (AS91262)**.

**Source:** Official NZQA achievement standards, Version 3 (published 19 November 2015, 2019 reprint). Content below is a paraphrase of the "Methods" and criteria sections of each standard.

---

## The learning format we're building

- **Audio first.** The student learns better by listening than reading.
- **One 5–10 minute audio script per *topic*.** Short, conversational, no diagrams needed — audio has to stand alone.
- **Paired with a page on screen:** the script text plus worked examples with diagrams.
- **Practice happens on paper.** Maths needs drawing and working out by hand.

**Terminology used in this document:**

| Term | Meaning |
|---|---|
| **Subject** | Algebra, Trigonometry, Calculus |
| **Module** | A grouping of related topics within a subject |
| **Topic** | One 5–10 minute audio lesson |

---

## How grading works (both standards)

Three grade bands, and the difference between them is the *kind of thinking*, not the amount of content:

- **Achieved** — Select and use methods, show knowledge of the concepts and terms, communicate clearly.
- **Merit** — Adds *relational thinking*: carrying out a logical sequence of steps, connecting different concepts or representations, forming and using a model, and relating findings back to the context.
- **Excellence** — Adds *extended abstract thinking*: devising a strategy, identifying the relevant concepts in a context, building a chain of logical reasoning or a proof, forming a generalisation, and communicating mathematical insight.

**Implication for the lessons:** getting Achieved is about knowing the method. Merit and Excellence are about *choosing* the method, chaining steps, and explaining the reasoning in words. Worth building explanation-out-loud practice into the study routine, not just calculation.

---

# 1. ALGEBRA — AS91261

The published NCEA standard: https://www.nzqa.govt.nz/nqfdocs/ncea-resource/achievements/2019/as91261.pdf

> **"Apply algebraic methods in solving problems"**
> Mathematics and Statistics 2.6 · Level 2 · **4 credits** · **EXTERNAL (exam)** · Domain: Algebra

Derived from Level 7 of the New Zealand Curriculum, against these objectives:
- Manipulate rational, exponential and logarithmic algebraic expressions
- Form and use linear and quadratic equations

**This one is examined**, so past papers matter a lot. NZQA also publishes a **Formulae Resource** issued with each exam — worth downloading so he knows what he does *not* have to memorise.

## The official method list (5 items)

1. Manipulating algebraic expressions, including rational expressions
2. Manipulating expressions with exponents, including fractional and negative exponents
3. Determining the nature of the roots of a quadratic equation
4. Solving exponential equations (may include manipulating logarithms)
5. Forming and solving linear and quadratic equations

## Proposed module / topic structure

### Module A — Expressions

*Key framing for the audio: an **expression** is a collection of terms with no equals sign — you simplify and rearrange it. An **equation** has an equals sign — you solve it. This distinction unlocks a lot of Level 2 algebra.*

| # | Topic | Notes for the script |
|---|---|---|
| A1 | Manipulating algebraic expressions | Expanding, factorising, simplifying. The full toolkit: common factor, difference of two squares, quadratic trinomials. |
| A2 | Rational expressions | Algebraic fractions. Factorise first, then cancel. Adding/subtracting with a common denominator. Emphasise: cancel *factors*, never terms — this is the single most common error. |
| A3 | Exponents | Index laws (multiply → add powers, divide → subtract, power of a power → multiply). Then fractional exponents as roots, and negative exponents as reciprocals. |

### Module B — Equations

| # | Topic | Notes for the script |
|---|---|---|
| B1 | Forming and solving linear equations | Often the "translate the word problem into algebra" question. The forming is the hard part, not the solving. |
| B2 | Solving quadratic equations | Three routes: factorising, completing the square, quadratic formula. Script should focus on *choosing* which one — that's the Merit skill. |
| B3 | Exponential equations and logarithms | Solving where the unknown is in the power. Same-base method first, then logs. Log rules. Note: logs live *inside* this topic in the standard — they don't get their own heading. |

### Module C — Quadratic properties

| # | Topic | Notes for the script |
|---|---|---|
| C1 | The nature of the roots | The discriminant, b² − 4ac. Positive → two real roots; zero → one repeated root; negative → no real roots. Exam questions often reverse this: "find the values of k for which…" — good Excellence territory. |

## Source documents

Local copies in `./docs/algebra/`. All from the NZQA page for
[standard 91261](https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91261).

### Past exam papers

Sit these under timed conditions, then mark against the schedule for the same year.

| Year | Paper | Marking schedule | Examiner's report |
|---|---|---|---|
| 2025 | [paper](./docs/algebra/91261-exm-2025.pdf) | [schedule](./docs/algebra/91261-ass-2025.pdf) | [report](./docs/algebra/91261-report-2025.pdf) |
| 2024 | [paper](./docs/algebra/91261-exm-2024.pdf) | [schedule](./docs/algebra/91261-ass-2024.pdf) | [report](./docs/algebra/91261-report-2024.pdf) |
| 2023 | [paper](./docs/algebra/91261-exm-2023.pdf) | [schedule](./docs/algebra/91261-ass-2023.pdf) | — |

- **Paper** — the exam as sat.
- **Schedule** — the marking guide: model answers plus what earns Achieved, Merit and Excellence on each question.
- **Report** — the chief marker's commentary on what candidates got wrong that year. Read before revising, not after.

### Reference

- [2026 assessment specification](./docs/algebra/91261-spc-2026.pdf) — NZQA's advance notice of what this year's exam will and won't cover. **Read this first.**
- [Formulae reference](./docs/algebra/91261-frm-2025.pdf) — the sheet supplied in the exam room. Anything on it does not need memorising.
- [Achievement standard AS91261](./docs/algebra/as91261.pdf) — the standard itself, source of the five methods above.

---

# 2. TRIGONOMETRY — AS91259

The published NCEA standard: https://www.nzqa.govt.nz/nqfdocs/ncea-resource/achievements/2019/as91259.pdf

> **"Apply trigonometric relationships in solving problems"**
> Mathematics and Statistics 2.4 · Level 2 · **3 credits** · **INTERNAL** · Domain: Trigonometry

Derived from Level 7 of the New Zealand Curriculum, against the objective: apply trigonometric relationships, including the sine and cosine rules, **in two and three dimensions**.

**This one is internally assessed** — it's marked through a school-set task, not the November exam. He still earns the credits, but the study strategy is different: understanding and clear communication of method matter more than exam-paper drilling.

## The official method list (5 items)

1. Length of an arc of a circle
2. Area of a sector of a circle
3. Sine rule
4. Cosine rule
5. Area of a triangle

**Three things to note:**
- **Trigonometric equations are NOT in this standard.** Some commercial workbooks bundle them in; the official method list does not include them. Park that unless his teacher says otherwise.
- **"Two and three dimensions"** — problems on solids can appear, though every published assessment task is 2D (composite plane figures). One topic covers it.
- **Degrees, not radians.** The Te Kura task's formulae list gives arc length as θ/360 × 2πr and sector area as θ/360 × πr² — degree form. Radians are Level 3 and are not taught here.

*Assumed prior knowledge: SOH-CAH-TOA and right-angled triangle work from Year 11. He is solid on this.*

## Module / topic structure (as built)

The grade ladder for this standard is thinking and communication, not harder
techniques — every method is Achieved-level on its own; Merit chains methods in
context, Excellence devises a strategy and communicates it. So the structure is
five methods in two modules, then a module on the assessed skill itself.

### Module A — Triangles

| # | Topic | Notes |
|---|---|---|
| A1 | The sine rule | Opens with why new rules: SOH-CAH-TOA needs a hypotenuse. a/sin A = b/sin B = c/sin C; needs a side–opposite-angle pair. The ambiguous case, briefly. |
| A2 | The cosine rule | Two sides and the included angle, or three sides. Pythagoras with a correction term. |
| A3 | The area of a triangle, and choosing the rule | Area = ½ab·sin C, then the module's closing decision: what you have determines what you use. |

### Module B — Circles

| # | Topic | Notes |
|---|---|---|
| B1 | Arcs and sectors | Both formulae as fractions of the circle, in degrees. Sector perimeter (the logo task's edging). Segment area = sector − triangle, the bridge into composites. |

### Module C — Solving problems

| # | Topic | Notes |
|---|---|---|
| C1 | Composite figures | Splitting quadrilaterals and logos into triangles and sectors; the write-up ladder from the clarification and exemplars. The heart of the internal. |
| C2 | Three dimensions | Finding the flat triangle inside a solid, redrawing it, applying Module A. |

### Sources

No exam papers exist for an internal standard. The calibration documents live
in `docs/trigonometry/`: the standard, NZQA's clarification, the annotated
exemplars at six grade boundaries, two TKI tasks with their assessment
schedules, and Te Kura's assessment activity with its formulae list.

---

# 3. CALCULUS — AS91262

The published NCEA standard: https://www.nzqa.govt.nz/nqfdocs/ncea-resource/achievements/2015/as91262.pdf

> **"Apply calculus methods in solving problems"**
> Mathematics and Statistics 2.7 · Level 2 · **5 credits** · **EXTERNAL (exam)** · Domain: Calculus

Derived from Level 7 of the New Zealand Curriculum, against these objectives:
- Sketch the graphs of functions and their gradient functions, and describe the relationship between these graphs
- Apply differentiation and anti-differentiation techniques to polynomials

**This one is examined**, worth the most credits of the three standards, and shares the November paper sitting (and the L2–MATHF formulae sheet) with Algebra. Both central rules — the derivative of $x^n$ and its anti-derivative — are printed on that sheet.

## The official method list (7 items)

1. Derivatives and anti-derivatives of polynomials given in expanded form
2. Gradient functions
3. Gradient at a point
4. Equation of a tangent
5. Turning points where f ′(x) = 0 and their nature
6. Function from a derived function
7. Rate of change problems (such as kinematics)

The 2026 assessment specification adds three concrete requirements: drawing the graph of the gradient of a function given the graph of the function (or vice versa), justifying the nature of maximum and minimum points (second derivative, testing points around the turning point, or an annotated sketch), and forming polynomials from a variety of contexts.

## Proposed module / topic structure

### Module A — Differentiation

*Key framing: a function and its gradient function are a pair. Differentiation takes you from the function to its gradient function; anti-differentiation is the same road walked backwards. Everything in the standard is one direction or the other.*

| # | Topic | Notes for the script |
|---|---|---|
| A1 | The gradient function | What the derivative is — the gradient of the curve, read at any point. The power rule for polynomials. Gradient at a point. Notation: f ′(x) and dy/dx. |
| A2 | Tangents | The equation of the tangent at a point, and the reverse question: find the point where the gradient takes a given value. Straight-line skills from Level 1 carry the second half. |
| A3 | The graph of the gradient function | Sketching f ′ from the graph of f and f from the graph of f ′. Named explicitly in the 2026 specification, and a guaranteed question — one appears in every recent paper. |

### Module B — Turning points

| # | Topic | Notes for the script |
|---|---|---|
| B1 | Turning points and their nature | Solve f ′(x) = 0, then justify maximum or minimum — sign test, second derivative, or annotated sketch; the specification accepts all three. Increasing and decreasing regions belong here too. |
| B2 | Maximum and minimum problems | The long modelling parts that close each exam question: form a polynomial from a context, optimise it, prove the result is what it claims to be. This is where "form polynomials from a variety of contexts" lives. |

### Module C — Anti-differentiation

| # | Topic | Notes for the script |
|---|---|---|
| C1 | Anti-differentiation | Reversing the power rule. The constant of integration, and recovering it — a function from its derived function through a known point. |
| C2 | Rates of change and kinematics | The derivative as a rate of change in context, and the distance–velocity–acceleration ladder in both directions. The capstone: every earlier topic gets used. |

## Source documents

Local copies in `./docs/calculus/`. All from the NZQA page for
[standard 91262](https://www.nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91262).

### Past exam papers

| Year | Paper | Marking schedule | Examiner's report |
|---|---|---|---|
| 2025 | [paper](./docs/calculus/91262-exm-2025.pdf) | [schedule](./docs/calculus/91262-ass-2025.pdf) | [report](./docs/calculus/91262-report-2025.pdf) |
| 2024 | [paper](./docs/calculus/91262-exm-2024.pdf) | [schedule](./docs/calculus/91262-ass-2024.pdf) | [report](./docs/calculus/91262-report-2024.pdf) |
| 2023 | [paper](./docs/calculus/91262-exm-2023.pdf) | [schedule](./docs/calculus/91262-ass-2023.pdf) | [report](./docs/calculus/91262-report-2023.pdf) |

### Reference

- [2026 assessment specification](./docs/calculus/91262-spc-2026.pdf) — the same document as Algebra's; the 91262 section is one page.
- [Achievement standard AS91262](./docs/calculus/as91262.pdf) — the standard itself, source of the seven methods above.
- The formulae sheet is shared across the Level 2 standards — the local copy sits with Algebra at [91261-frm-2025.pdf](./docs/algebra/91261-frm-2025.pdf).

---

# Open items / next steps

- [ ] Download past exam papers and the Formulae Resource for **91261** from NZQA
- [ ] Confirm which standards his school is actually offering (schools pick from ~14 available at Level 2)
- [ ] Check whether segment area is covered in his trigonometry unit
- [ ] Have him try a past paper and flag which questions are *"I don't know where to start"* vs *"I know what it wants but not how"* — that distinction tells us where to aim the scripts
- [x] Pull the **Calculus (AS91262)** standard when he reaches that unit — 5 credits, external
- [ ] Decide on a local text-to-speech tool for voice cloning (privacy-preserving, runs offline)
- [ ] Note for TTS: mathematical notation and acronyms will need phonetic spelling in the scripts (e.g. write "SOH-CAH-TOA", "b squared minus four a c")

---

# Where to find the source documents

- Standard 91261 (Algebra): `nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91261`
- Standard 91259 (Trigonometry): `nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91259`
- Standard 91262 (Calculus): `nzqa.govt.nz/ncea/assessment/view-detailed.do?standardNumber=91262`

Each page carries the achievement standard PDF, past examination papers, formulae resources, assessment schedules (marking guides), assessment reports (examiner commentary on where candidates went wrong), and annotated exemplars.

The **assessment reports** are an underrated resource — they tell you exactly which errors cost students marks each year.
