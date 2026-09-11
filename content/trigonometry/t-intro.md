# Level 2 trigonometry

---

## Triangles with no right angle

At Year 11 every triangle you solved had a right angle, because SOH-CAH-TOA needs one — the ratios are defined against a hypotenuse, and a triangle with no right angle has no hypotenuse to name. A surveyed boundary, a roof truss and a sail rarely include one: most triangles that need solving are the general kind.

```figure
caption: A hypotenuse, and then none
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [0, 42]
        C: [58, 0]
      edges:
        - [A, B]
        - [B, C]
        - [A, C]
      angles:
        - at: A
          from: B
          to: C
          right: true
    note: The right angle means there is a hypotenuse — the side SOH-CAH-TOA's ratios are defined against.
  - diagram:
      points:
        A: [0, 0]
        B: [10, 44]
        C: [60, 6]
      edges:
        - [A, B]
        - [B, C]
        - [A, C]
    note: The general triangle. No right angle means no hypotenuse, and SOH-CAH-TOA has nowhere to start.
```

This standard adds five methods to what SOH-CAH-TOA and Pythagoras already do: the sine rule, the cosine rule, the area of a triangle, the length of an arc and the area of a sector. The first three work on a triangle of any shape; the last two work on a slice of a circle. Together they solve any triangle and any sector, and the right-angled triangle stays available as the special case that Pythagoras and SOH-CAH-TOA still fit.

---

## The three modules

**Module A—Triangles.** The sine rule and the cosine rule, each fitted to a different combination of given sides and angles, and the area formula that shares its given information with the cosine rule. The module ends by deciding which rule a triangle's given information calls for.

**Module B—Circles.** Arc length and sector area, both a fraction of the whole circle set by the angle at the centre — the same idea, applied twice.

**Module C—Solving problems.** A figure that is neither a plain triangle nor a plain sector — a quadrilateral, a logo, a paddock — split into pieces that Module A and Module B can reach, in two dimensions and then in three. This is the module the standard is actually assessed on.

---

## How this standard is assessed

Three credits, and it is **internal** — marked by the school through an assessment task, not sat in the November exam. There are no past papers and no examiner's reports for this standard.

Explanatory Note 4 of the standard says methods include a selection from those related to "length of an arc of a circle, area of a sector of a circle, sine rule, cosine rule, area of a triangle." That list is the whole subject; nothing outside it is assessed.

The task is one extended problem, not a set of separate skill questions. NZQA's clarification for this standard says a task "with a number of discrete questions based on skills and straightforward calculations is not appropriate," and that where a task "has a series of instructions that lead students through a step or a sequence of steps towards the solution, it is likely that the opportunity for students to demonstrate all levels of thinking will be compromised." The task sets a situation — a paddock, a subdivision, a logo — and leaves the choice of method to you.

The standard's own achievement criteria set the ladder: Achieved is to "apply trigonometric relationships in solving problems"; Merit adds "using relational thinking"; Excellence adds "using extended abstract thinking." The clarification says what that means for the write-up at each grade.

> What the clarification requires you to write, at each grade:
>
> - **Achieved.** "The result of a numerical calculation only is insufficient, working is expected and students need to indicate what the calculated answer represents."
> - **Merit.** "Students need to clearly indicate what they are calculating and their solutions need to be linked to the context."
> - **Excellence.** "The response needs to be clearly communicated with correct mathematical statements, and students need to explain any decisions they make in the solution of the problem."

Units follow the same ladder. The assessment schedule for the TKI task *School Spare Land Subdivision* asks for "some evidence of correct units" at Achieved, then states plainly that "correct units are required" at Merit and at Excellence.

---

## What you do not have to memorise

Of the three standards here, this is the one with no exam, so there is no exam formulae sheet. Instead the assessment task itself prints the formulae — Te Kura's assessment activity for this standard carries exactly this reference list, and both TKI tasks instruct the teacher to provide a formulae sheet with the task.

```figure
caption: What the task supplies
steps:
  - math: |
      \dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}
    note: The sine rule, printed on Te Kura's reference list exactly as it will be needed.
  - math: a^2 = b^2 + c^2 - 2bc\cos A
    note: The cosine rule, from the same list.
  - math: |
      \textsf{Area} = \dfrac{1}{2}bc\sin A
    note: The area of a triangle.
  - math: |
      \textsf{Arc length} = \dfrac{\theta}{360} \times 2\pi r
    note: The length of an arc.
  - math: |
      \textsf{Area of a sector} = \dfrac{\theta}{360} \times \pi r^2
    note: And the area of a sector. All five methods the standard names are on the list.
```

The November exam's formulae sheet, shared between algebra and calculus, carries none of these — this subject supplies its own, on the task. What a printed sheet cannot do is choose which formula the numbers in front of you call for, chain one result into the next, or say in words what an answer represents. Those are what the lessons that follow teach.
