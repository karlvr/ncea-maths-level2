# Level 2 trigonometry

---

## Triangles with no right angle

At Year 11 every triangle you solved had a right angle, because SOH-CAH-TOA works only in a right-angled triangle. The SOH-CAH-TOA ratios use the hypotenuse, and a triangle with no right angle has no hypotenuse. A surveyed boundary, a roof truss and a sail rarely include a right angle. Most triangles in real problems are general triangles, with no right angle.

```figure
caption: A right-angled triangle and a general triangle
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
    note: This triangle has a right angle, so it has a hypotenuse, the side opposite the right angle. The SOH-CAH-TOA ratios use that side.
  - diagram:
      points:
        A: [0, 0]
        B: [10, 44]
        C: [60, 6]
      edges:
        - [A, B]
        - [B, C]
        - [A, C]
    note: A general triangle has no right angle, so it has no hypotenuse. You cannot use SOH-CAH-TOA on it.
```

This standard adds five methods to what SOH-CAH-TOA and Pythagoras already do. They are the sine rule, the cosine rule, the area of a triangle, the length of an arc and the area of a sector. The first three work on a triangle of any shape. The last two work on a slice of a circle. Together they solve any triangle and any sector. A right-angled triangle is a special case, and you can still use Pythagoras and SOH-CAH-TOA on it.

---

## The three modules

**Module A—Triangles.** Module A covers the sine rule and the cosine rule. Each rule works for a different combination of given sides and angles. Module A also covers the area formula, which uses the same given information as the cosine rule. The module ends with how to choose the rule from the information a triangle gives.

**Module B—Circles.** Module B covers arc length and sector area. Arc length is a fraction of the circumference, and sector area is the same fraction of the area of the circle. In both, the angle at the centre gives the fraction.

**Module C—Solving problems.** Module C covers a figure that is neither a single triangle nor a single sector, such as a quadrilateral, a logo or a paddock. You split the figure into triangles and sectors, and then use the methods of Modules A and B on them. The figures are first in two dimensions and then in three. This is the module the standard is assessed on.

---

## How this standard is assessed

The standard is worth three credits, and it is **internal**. Your school marks it through an assessment task. It is not part of the November exam. There are no past papers and no examiner's reports for this standard.

Explanatory Note 4 of the standard says methods include a selection from those related to "length of an arc of a circle, area of a sector of a circle, sine rule, cosine rule, area of a triangle." That list is the whole subject. Only the methods in that list are assessed.

The task is one extended problem, not a set of separate skill questions. NZQA's clarification for this standard says a task "with a number of discrete questions based on skills and straightforward calculations is not appropriate." It also says that where a task "has a series of instructions that lead students through a step or a sequence of steps towards the solution, it is likely that the opportunity for students to demonstrate all levels of thinking will be compromised." The task sets a situation, such as a paddock, a subdivision or a logo, and leaves the choice of method to you.

The standard's own achievement criteria define the three grades. Achieved is to "apply trigonometric relationships in solving problems". Merit adds "using relational thinking". Excellence adds "using extended abstract thinking." The clarification says what that means for the write-up at each grade.

> What the clarification requires you to write, at each grade:
>
> - **Achieved.** "The result of a numerical calculation only is insufficient, working is expected and students need to indicate what the calculated answer represents."
> - **Merit.** "Students need to clearly indicate what they are calculating and their solutions need to be linked to the context."
> - **Excellence.** "The response needs to be clearly communicated with correct mathematical statements, and students need to explain any decisions they make in the solution of the problem."

The requirement for units also rises with the grade. The assessment schedule for the TKI task *School Spare Land Subdivision* asks for "some evidence of correct units" at Achieved. At Merit and at Excellence it states plainly that "correct units are required".

---

## What you do not have to memorise

Of the three standards here, this is the one with no exam, so there is no exam formulae sheet. Instead the formulae are printed with the assessment task. Te Kura's assessment activity for this standard includes exactly this reference list. Both TKI tasks instruct the teacher to provide a formulae sheet with the task.

```figure
caption: The formulae printed with the task
steps:
  - math: |
      \dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}
    note: The sine rule, exactly as Te Kura's reference list prints it.
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
    note: The area of a sector. The list has all five methods that the standard names.
```

The November exam's formulae sheet, shared between algebra and calculus, does not include any of these. For this subject, the task gives its own formulae. A printed sheet does not tell you which formula to use. You choose the formula, use each result in the next calculation, and say in words what each answer means. The lessons teach those skills.
