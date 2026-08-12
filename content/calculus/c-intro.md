# Level 2 calculus

---

## A function and its gradient function

A straight line has one gradient. Rise over run gives the same answer wherever on the line you measure it, so the gradient of a line is a single number: $y = 3x + 1$ has gradient $3$ everywhere.

A curve does not. The graph of $y = x^2$ falls on the left, is flat at the bottom, and climbs on the right—more steeply the further it goes. Ask for *the* gradient of a curve and the question is incomplete, because the answer depends on where you ask.

```figure
caption: One gradient, then many
steps:
  - graph:
      domain: [-3, 3]
      curves:
        - poly: [0.75, 1]
    note: A straight line. The gradient is the same number wherever it is measured.
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

So the gradient of a curve is itself a function of $x$: give it a value of $x$, and it returns how steep the curve is there. This is the **gradient function**, written $f'(x)$ and read *f dashed of x*. For $f(x) = x^2$ the gradient function is $f'(x) = 2x$: at $x = 2$ the curve climbs at gradient $4$, at $x = 0$ it is flat, and at $x = -2$ it falls at gradient $-4$.

```figure
caption: The pair
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
    note: "$\\ca{f(x) = x^2}$ and its gradient function $\\cb{f'(x) = 2x}$. Where the curve falls, the gradient function is below the $x$-axis; where the curve is flat, it crosses zero; where the curve climbs, it is above."
```

Two operations connect the pair, and they are opposites of each other.

```figure
caption: Two directions
steps:
  - math: |
      f(x) \quad\underset{\textsf{\scriptsize anti-differentiate}}{\overset{\textsf{\scriptsize differentiate}}{\rightleftharpoons}}\quad f'(x)
    note: "Differentiating takes a function to its gradient function. Anti-differentiating takes a gradient function back to the function it came from."
```

Everything in this standard is one of those two moves, applied and then interpreted. A question that gives you a function and asks how fast it changes, or where it turns, or what its largest value is, is asking you to differentiate. A question that gives you the rate at which something changes and asks for the thing itself is asking you to anti-differentiate. Deciding the direction is the first step of every answer. The 2025 report says candidates who did not achieve *"were unable to decide when differentiation or integration was required"*. *Integration* is the other name for anti-differentiation.

---

## The three modules

**Module A—Differentiation.** Finding the gradient function of any polynomial, reading it at a point, using it to write the equation of a tangent, and drawing its graph beside the graph of the function.

**Module B—Turning points.** Where the gradient function equals zero, the curve turns, and a turning point is where a quantity is at its largest or smallest. The examination's long word problems are here: the greatest volume the container can hold, the least material the cup can be made from.

**Module C—Anti-differentiation.** The reverse direction: recovering a function from its gradient function, and moving both ways along the ladder that connects distance, velocity and acceleration.

---

## Where algebra is used

Differentiating is the easy part of every question—one rule, applied term by term. The marks around it are algebra. Expressions are expanded before they are differentiated. Setting the gradient function to zero produces a quadratic equation, solved by factorising or by the quadratic formula. A question that withholds two coefficients produces two equations in two unknowns.

All of that is Module A and Module B of the algebra standard, and this subject assumes it. If factorising a trinomial or solving a pair of simultaneous equations is not fluent yet, revise those topics first—a calculus answer is usually lost in its algebra, not in its calculus.

---

## How this standard is assessed

Five credits, the most of the three standards here, and it is **external**—sat in the November exam, in the same session as algebra. The exam is three questions, each with several parts, and word problems appear throughout.

After each year's examination is marked, the examiners publish a report on it: what candidates at each grade could commonly do, and what those who were not awarded the standard commonly got wrong. These lessons quote those reports wherever a finding touches the topic in hand. Every mistake quoted cost candidates marks in a real examination.

> Four things the specification and the papers say to expect, each one a way of losing marks on otherwise correct work:
>
> - **Where a question says *use calculus*, the working must show the calculus.** The marking schedules give the first grade step for *evidence of correct calculus*, and the 2025 report warns that answers *"given without sufficient method are likely to be awarded Correct Answer Only, even if the final answer is correct"*—worth Achieved at best.
> - **You may be asked to draw the graph of the gradient function from the graph of the function, or the reverse.** One of the two appears in every recent paper.
> - **A maximum or minimum must be justified.** The specification accepts three ways: the second derivative, testing points either side of the turning point, or an annotated sketch of the shape of the curve. Stating *it is a minimum* with no reason is not a justification.
> - **Know the formulae for common 2D and 3D shapes.** The specification expects them to be applied in solving problems. Some papers print the formula beside the question and some do not.

---

## What you do not have to memorise

A formulae sheet is handed out with the exam and you may keep it. It is shared with the algebra standard, and it carries both of the central rules of this subject.

```figure
caption: What the sheet carries
steps:
  - math: |
      \dfrac{d}{dx}\left(x^n\right) = nx^{n-1}
    note: "The rule for differentiating, exactly as the sheet prints it."
  - math: |
      \textsf{If } f'(x) = x^n \textsf{, then } f(x) = \dfrac{x^{n+1}}{n+1} + c
    note: "And the rule for anti-differentiating. Both directions are on the sheet, so neither needs memorising."
```

The quadratic formula is on the same sheet, and solving $f'(x) = 0$ is where it is used in this subject.

What the sheet cannot do is choose the direction, expand an expression so the rule can reach it, or say what the answer means in the words of the question. Those are what the lessons teach.
