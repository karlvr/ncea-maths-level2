# Level 2 calculus

---

## A function and its gradient function

A straight line has one gradient. Rise over run gives the same answer wherever on the line you measure it, so the gradient of a line is a single number. The line $y = 3x + 1$ has gradient $3$ everywhere.

A curve does not have one gradient. The graph of $y = x^2$ falls on the left, is flat at the bottom, and climbs on the right. The further it goes to the right, the more steeply it climbs. So a question about *the* gradient of a curve is incomplete. The gradient depends on the point where you measure it.

```figure
caption: One gradient, then many
steps:
  - graph:
      domain: [-3, 3]
      curves:
        - poly: [0.75, 1]
    note: A straight line. The gradient is the same number wherever you measure it.
  - graph:
      domain: [-3, 3]
      curves:
        - poly: [1, 0, 0]
      points:
        - at: [-2, 4]
          label: falling
        - at: [0, 0]
          label: flat
        - at: [2, 4]
          label: climbing
    note: A curve. The steepness at each marked point is different, so no single number describes it.
```

So the gradient of a curve is itself a function of $x$. Substitute a value of $x$, and the result is the gradient of the curve at that point. This is the **gradient function**, written $f'(x)$ and read *f dashed of x*. For $f(x) = x^2$ the gradient function is $f'(x) = 2x$. At $x = 2$ the curve climbs at gradient $4$, at $x = 0$ it is flat, and at $x = -2$ it falls at gradient $-4$.

```figure
caption: A function and its gradient function
steps:
  - graph:
      domain: [-3, 3]
      curves:
        - poly: [1, 0, 0]
          color: a
          label: f
        - poly: [2, 0]
          color: b
          label: f ′
    note: "$\\ca{f(x) = x^2}$ and its gradient function $\\cb{f'(x) = 2x}$. Where the curve falls, the gradient function is below the $x$-axis. Where the curve is flat, the gradient function crosses zero. Where the curve climbs, the gradient function is above the $x$-axis."
```

Differentiating and anti-differentiating are the two operations that connect a function and its gradient function. Each operation is the opposite of the other.

```figure
caption: Differentiating and anti-differentiating
steps:
  - math: |
      f(x) \quad\underset{\textsf{\scriptsize anti-differentiate}}{\overset{\textsf{\scriptsize differentiate}}{\rightleftharpoons}}\quad f'(x)
    note: "Differentiating a function gives its gradient function. Anti-differentiating a gradient function gives the function it came from."
```

Every question in this standard asks you to differentiate or to anti-differentiate, and then to explain what the result means. Some questions give you a function and ask how fast it changes, where it turns, or what its largest value is. Those questions ask you to differentiate. Other questions give you the rate at which something changes and ask for the thing itself. Those questions ask you to anti-differentiate. So the first step of every answer is to decide whether to differentiate or to anti-differentiate. The 2025 report says candidates who did not achieve *"were unable to decide when differentiation or integration was required"*. *Integration* is the other name for anti-differentiation.

---

## The three modules

**Module A—Differentiation.** Finding the gradient function of any polynomial, and its value at a point. Using it to write the equation of a tangent, and drawing its graph beside the graph of the function.

**Module B—Turning points.** Where the gradient function equals zero, the curve turns. A turning point is where a quantity is at its largest or smallest. The long word problems of the examination are here: the greatest volume the container can hold, the least material the cup can be made from.

**Module C—Anti-differentiation.** Finding a function from its gradient function, which is differentiation in reverse. Moving both ways along the ladder that connects distance, velocity and acceleration.

---

## Where algebra is used

Differentiating is the easy part of every question: one rule, applied term by term. The rest of the marks are for algebra. You expand expressions before you differentiate them. Setting the gradient function to zero produces a quadratic equation. You solve it by factorising or by the quadratic formula. If a question gives two unknown coefficients, you form two equations in two unknowns.

All of that is in Module A and Module B of the algebra standard, and the calculus lessons do not teach it again. If you cannot yet factorise a trinomial or solve a pair of simultaneous equations easily, revise those topics first. Candidates usually lose marks on a calculus answer in the algebra, not in the calculus.

---

## How this standard is assessed

This standard is worth five credits, the most of the three standards here, and it is **external**. You sit it in the November exam, in the same session as algebra. The exam is three questions, each with several parts, and word problems appear throughout.

After each year's examination is marked, the examiners publish a report on it. The report lists what candidates at each grade could commonly do. It also lists what candidates who were not awarded the standard commonly got wrong. These lessons quote those reports wherever a finding is about the topic of the lesson. Every mistake quoted cost candidates marks in a real examination.

> If you do not meet one of these requirements from the specification and the papers, you can lose marks on work that is otherwise correct.
>
> - **Where a question says *use calculus*, the working must show the calculus.** The marking schedules give the first grade step for *evidence of correct calculus*. The 2025 report warns that answers *"given without sufficient method are likely to be awarded Correct Answer Only, even if the final answer is correct"*. Such an answer is worth Achieved at best.
> - **You may be asked to draw the graph of the gradient function from the graph of the function, or the reverse.** One of the two appears in every recent paper.
> - **You must justify a maximum or minimum.** The specification names three acceptable justifications. They are the second derivative, testing points either side of the turning point, and an annotated sketch of the shape of the curve. Stating *it is a minimum* without a reason is not a justification.
> - **Know the formulae for common 2D and 3D shapes.** The specification says candidates should be familiar with these formulae, so that they can apply them to solve problems. Some papers print the formula beside the question and some do not.

---

## What you do not have to memorise

The exam comes with a formulae sheet, and you may keep it. The algebra standard uses the same sheet, and it carries both of the central rules of this subject.

```figure
caption: What the sheet carries
steps:
  - math: |
      \dfrac{d}{dx}\left(x^n\right) = nx^{n-1}
    note: "The rule for differentiating, exactly as the sheet prints it."
  - math: |
      \textsf{If } f'(x) = x^n \textsf{, then } f(x) = \dfrac{x^{n+1}}{n+1} + c
    note: "And the rule for anti-differentiating. Both rules are on the sheet, so you do not need to memorise either of them."
```

The quadratic formula is on the same sheet. In this subject you use it to solve $f'(x) = 0$.

The sheet gives the two rules. You still have to decide whether to differentiate or to anti-differentiate. You also have to expand an expression before the rule applies, and explain what the answer means in the words of the question. The lessons teach those skills.
