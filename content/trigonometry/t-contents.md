# What the standard contains

---

This page is the whole of Level 2 trigonometry in one list: three modules, six topics, and the skills inside each topic. This page does not teach anything. It shows the size of the subject before you start. That matters because a textbook shows one page at a time and never states how much there is altogether.

Read the list now, and again before the assessment task. In between, treat it as a checklist and mark the skills you can already do.

---

## Module A—Triangles

These methods work on any triangle, not only a right-angled one.

**A1—The sine rule.** A side divided by the sine of its opposite angle gives the same value for all three pairs.

- the naming convention: side $a$ opposite angle $A$, and so on round the triangle
- the sine rule, $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$
- finding a side, from a side and its opposite angle plus one more angle
- finding an angle, with the rule inverted and $\sin^{-1}$ used at the end
- the third angle, from the angle sum of $180°$, when you need it before you can use the rule
- the ambiguous case: an obtuse angle has the same sine as an acute angle

**A2—The cosine rule.** The rule to use when you cannot start with the sine rule.

- recognising when the given information does not include a side and its opposite angle: two sides and the angle between them, or three sides alone
- the rule for a side, $a^2 = b^2 + c^2 - 2bc\cos A$, read as Pythagoras with a correction term
- the rule for an angle, $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$
- $\cos^{-1}$ giving an obtuse angle when the cosine is negative, so there is no ambiguous case
- the order of operations in $b^2 + c^2 - 2bc\cos A$: calculate the product $2bc\cos A$ first, then subtract it

**A3—The area of a triangle, and choosing the rule.** The third formula, and how to choose between all three.

- area $= \dfrac{1}{2}ab\sin C$, from two sides and the angle between them
- finding a missing angle first, when the area formula uses an angle that is not given
- choosing the rule from the given information: a side with its opposite angle means the sine rule, two sides and the included angle mean the cosine rule or the area formula, and three sides mean the cosine rule for an angle

---

## Module B—Circles

A sector is a fraction of its circle.

**B1—Arcs and sectors.** The angle at the centre gives the fraction of the circle, for both the arc and the sector.

- the fraction a sector is of its circle, $\dfrac{\theta}{360}$
- arc length, $\dfrac{\theta}{360} \times 2\pi r$, the same fraction of the circumference
- sector area, $\dfrac{\theta}{360} \times \pi r^2$, the same fraction of the area
- the perimeter of a sector: the arc plus its two straight radii
- working backwards, from an arc length or an area to $\theta$ or $r$
- the segment, a sector with its triangle cut away, using $\dfrac{1}{2}r^2\sin\theta$ for the triangle

---

## Module C—Solving problems

You choose the methods above yourself, and use each result in the next calculation. The question does not name the methods for you. The standard is assessed on this kind of problem.

**C1—Composite figures.** A composite figure has no formula of its own, so you split it into shapes that have one.

- splitting a quadrilateral, a logo or a paddock into triangles and sectors
- a diagonal that splits one quadrilateral into two triangles with a shared side
- carrying an unrounded value from one triangle into the next, so rounding errors do not grow
- what the write-up needs at each grade: the answer named at Achieved, each step linked to the context with units at Merit, the strategy explained with correct mathematical statements at Excellence
- devising a subdivision or an adaptation: computing the whole, comparing it against a requirement, then constructing and checking a concrete answer

**C2—Three dimensions.** You use the same methods on triangles that sit on the faces of a solid or inside it.

- finding the flat triangle a three-dimensional question is really asking about, and redrawing it on its own
- the diagonal of a box, as two right-angled triangles chained together
- the angle between a sloping edge and the base, read from the right triangle it sits in
- the non-right triangles of a pyramid, solved with the sine rule and the cosine rule once redrawn flat
- the redrawn triangle itself, labelled with only what belongs to it, as part of the write-up that the marker rewards

---

## How much of it is really new

The six topics have only five formulae between them. Each formula is one line long and has one use. Module A has three: the sine rule, the cosine rule and the area of a triangle. Module B has the other two, arc length and sector area. Both of those use one idea: the angle at the centre gives a fraction of the whole circle.

The other two topics do not teach a new formula, and the standard is assessed on them. The figure in the assessment task is never a labelled triangle or a labelled sector. It is a plot of land, a logo or a solid. Your work is to find the triangles and sectors inside it.

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
    note: The figure in the task has no rule of its own. No formula in the list applies to a quadrilateral.
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
    note: One added line splits it into two triangles. You can use every method in Module A on those triangles. Module C teaches how to split a figure.
```

What is new in this subject is not the formulae, which A1 through B1 teach one at a time on a figure drawn on its own. Module C adds the decisions: which line to draw, which rule to use for each piece, and the order in which to calculate the pieces. It also adds the write-up of the chain of steps, so that a marker can follow it. You earn the grades of the standard there. A higher grade comes from a longer chain of the same five formulae, not from a harder formula.
