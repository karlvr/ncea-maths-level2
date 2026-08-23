# What the standard contains

---

This page is the whole of Level 2 trigonometry in one list: three modules, six topics, and the skills inside each topic. Nothing is taught here. It shows the size of the subject before you start on it, because a textbook shows one page at a time and never states how much there is altogether.

Read the list now, and again before the assessment task. In between, treat it as a checklist and mark the skills you can already do.

---

## Module A—Triangles

Any triangle, not only the right-angled kind.

**A1—The sine rule.** A side over the sine of the angle opposite it, the same for all three pairs.

- the naming convention: side $a$ opposite angle $A$, and so on round the triangle
- the sine rule, $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$
- finding a side, from an opposite side-angle pair plus one more piece
- finding an angle, the rule inverted and $\sin^{-1}$ taken at the end
- the third angle, from the angle sum of $180°$, when the rule needs it first
- the ambiguous case: an obtuse angle shares its sine with an acute one

**A2—The cosine rule.** For the given information the sine rule cannot start from.

- recognising when there is no opposite pair: two sides and the angle between them, or three sides alone
- the rule for a side, $a^2 = b^2 + c^2 - 2bc\cos A$, read as Pythagoras with a correction term
- the rule for an angle, $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$
- $\cos^{-1}$ telling an obtuse angle from an acute one on its own, with no ambiguous case
- the order of operations in $b^2 + c^2 - 2bc\cos A$: the product $2bc\cos A$ computed whole, then subtracted

**A3—The area of a triangle, and choosing the rule.** The third formula, and the decision between all of them.

- area $= \dfrac{1}{2}ab\sin C$, from two sides and the angle between them
- finding the missing angle first, where the area formula needs one it has not been given
- choosing the rule a triangle's given information calls for: an opposite pair to the sine rule, two sides and the included angle to the cosine rule or the area formula, three sides to the cosine rule for an angle

---

## Module B—Circles

A sector as a fraction of its circle.

**B1—Arcs and sectors.** One idea, the angle at the centre, applied twice.

- the fraction a sector is of its circle, $\dfrac{\theta}{360}$
- arc length, $\dfrac{\theta}{360} \times 2\pi r$, the same fraction of the circumference
- sector area, $\dfrac{\theta}{360} \times \pi r^2$, the same fraction of the area
- the perimeter of a sector: the arc plus its two straight radii
- working backwards, from an arc length or an area to $\theta$ or $r$
- the segment, a sector with its triangle cut away, using $\dfrac{1}{2}r^2\sin\theta$ for the triangle

---

## Module C—Solving problems

The methods above, chosen and chained rather than named for you. This is what the standard is assessed on.

**C1—Composite figures.** A shape with no rule of its own, split into ones that have.

- splitting a quadrilateral, a logo or a paddock into triangles and sectors
- a diagonal turning one quadrilateral into two triangles that share a side
- carrying an unrounded value from one triangle into the next, so rounding does not compound
- what the write-up needs at each grade: the answer named at Achieved, each step linked to the context with units at Merit, the strategy explained with correct mathematical statements at Excellence
- devising a subdivision or an adaptation: computing the whole, comparing it against a requirement, then constructing and checking a concrete answer

**C2—Three dimensions.** The same figures, on the faces of a solid.

- finding the flat triangle a three-dimensional question is really asking about, and redrawing it on its own
- the diagonal of a box, as two right-angled triangles chained together
- the angle between a sloping edge and the base, read from the right triangle it sits in
- a pyramid's non-right triangles, solved with the sine rule and the cosine rule once redrawn flat
- the redrawn triangle itself, labelled with only what belongs to it, as part of the communication the grades reward

---

## How much of it is really new

Six topics, and only five formulae between them, each one line long and each doing one job. Module A carries three — the sine rule, the cosine rule, the area of a triangle — and Module B carries the other two, arc length and sector area, which are one idea applied twice: a fraction of the whole circle, set by the angle at the centre.

The remaining two topics teach no formula at all, and they are the ones the standard is assessed on. The assessment task's figure is never a labelled triangle or a labelled sector; it is a plot of land, a logo, a solid — and the work is finding the triangles and sectors inside it.

```figure
caption: What the five methods are for
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [14, 40]
        C: [62, 44]
        D: [55, -8]
      edges:
        - [A, B]
        - [B, C]
        - [C, D]
        - [D, A]
    note: The task's figure has no rule of its own — no formula in the list answers a quadrilateral.
  - diagram:
      points:
        A: [0, 0]
        B: [14, 40]
        C: [62, 44]
        D: [55, -8]
      edges:
        - [A, B]
        - [B, C]
        - [C, D]
        - [D, A]
        - from: A
          to: C
          color: a
          dashed: true
    note: One added line splits it into two triangles, and every method in Module A reaches them. Module C teaches the splitting.
```

What is new in this subject is not the formulae, which A1 through B1 teach one at a time on a figure drawn on its own. What Module C adds is deciding — which line to draw, which rule each piece calls for, in what order the pieces reach the answer — and writing the chain up so a marker can follow it. That is where the standard's grades are earned: not in a harder formula, but in a longer chain of the same five.
