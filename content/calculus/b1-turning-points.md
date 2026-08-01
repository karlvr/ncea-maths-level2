# B1—Turning points and their nature

---

Module A ended twice at the same place: a horizontal tangent has gradient zero, and a sketch of $f$ turns exactly where $f'$ crosses the axis. This lesson makes that place the subject. Finding where $f'(x) = 0$, and saying what kind of point lives there, is the centre of the standard—and the word problems of the next lesson are this lesson wearing a story.

---

## Finding turning points

A **turning point** is a point where the curve stops climbing and starts falling, or the reverse. At the turn the curve is momentarily flat, so its gradient there is zero. That gives the method: solve $f'(x) = 0$.

```figure
caption: Finding the turning points
steps:
  - math: f(x) = x^3 - 3x^2 - 9x + 2
    note: "A cubic, so expect up to two turning points."
  - math: f'(x) = 3x^2 - 6x - 9
    note: "Differentiate, and set the result equal to zero—flat means gradient zero."
  - math: 3x^2 - 6x - 9 = 0
  - math: 3(x - 3)(x + 1) = 0
    note: "Common factor out, then factorise the trinomial. The quadratic formula does the same job when the factors will not come."
  - math: x = 3 \quad\textsf{or}\quad x = -1
    note: "Two flat points, located along the $x$-axis. Their heights are still missing."
  - math: f(-1) = 7 \qquad f(3) = -25
    note: "Heights from the original function, as always. The turning points are $(-1, 7)$ and $(3, -25)$."
```

Solving $f'(x) = 0$ is a quadratic equation, so everything from algebra's Module B applies: factorise if the factors come quickly, otherwise use the quadratic formula from the sheet. The calculus in this question is one line; the marks after it are algebra.

The heights follow the Module A rule: $f$ for height, $f'$ for steepness. A turning point named in an answer is a point, and a point has both coordinates.

```figure
caption: The curve, for reference
steps:
  - graph:
      domain: [-3, 5]
      curves:
        - poly: [1, -3, -9, 2]
          label: f
      points:
        - at: [-1, 7]
          color: a
          label: (−1, 7)
        - at: [3, -25]
          color: a
          label: (3, −25)
      xticks: [-1, 3]
    note: "Both turning points, found without drawing anything. The sketch confirms what the algebra said."
```

A point where $f'(x) = 0$ is in general called a **stationary point**. Nearly always at this level it is a turning point, but a paper may use either word, and the method is the same for both.

```practice
caption: finding turning points
questions:
  - ask: Find the coordinates of the turning point of the curve.
    math: f(x) = x^2 - 6x + 11
    grade: achieved
    working:
      - math: f'(x) = 2x - 6 = 0
      - math: x = 3
      - math: f(3) = 9 - 18 + 11 = 2
      - math: (3, 2)
  - ask: Find the coordinates of both turning points of the curve.
    math: f(x) = x^3 - 12x + 3
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 12 = 0
      - math: x^2 = 4 \qquad x = 2 \;\textsf{ or }\; x = -2
      - math: f(2) = 8 - 24 + 3 = -13
      - math: f(-2) = -8 + 24 + 3 = 19
        note: "Two points, two heights, each from $f$."
      - math: (2, -13) \;\textsf{ and }\; (-2, 19)
```

---

## The nature of a turning point

*Nature* is the examiner's word for which kind: a **maximum**, where the curve turns from climbing to falling, or a **minimum**, where it turns from falling to climbing. The algebra that found the point does not say which it is, because $f'(x) = 0$ reads the same both ways, so the nature is a second question, answered with its own working.

The 2026 specification names three acceptable justifications: *"by using the second derivative, testing points around the turning points, or with an annotated sketch of the shape of the curve"*. Any one of the three is enough; each is shown on the turning points found above.

### Testing points either side

Take an $x$ a little before the turning point and one a little after, and read the sign of $f'$ at each. Climbing then falling is a maximum; falling then climbing is a minimum.

```figure
caption: The sign of the gradient either side
steps:
  - math: f'(x) = 3x^2 - 6x - 9
    note: "The turning points are at $x = -1$ and $x = 3$. Test a value in each of the three regions they cut the axis into."
  - math: f'(-2) = 15 \qquad f'(0) = -9 \qquad f'(4) = 15
    note: "Positive, negative, positive."
  - math: |
      \begin{array}{c|ccccc}
      x & -2 & -1 & 0 & 3 & 4 \\[2pt]
      \hline \\[-8pt]
      f'(x) & + & 0 & - & 0 & + \\[2pt]
       & \nearrow & \textsf{max} & \searrow & \textsf{min} & \nearrow
      \end{array}
    note: "Climbing into $x = -1$ and falling out of it: a maximum. Falling into $x = 3$ and climbing out: a minimum."
```

### The second derivative

Differentiating the gradient function gives the **second derivative**, written $f''(x)$ and read *f double dashed*—the gradient of the gradient. At a maximum the gradient is falling through zero, so $f''$ is negative there; at a minimum it is rising through zero, so $f''$ is positive.

```figure
caption: The second derivative test
steps:
  - math: f'(x) = 3x^2 - 6x - 9
    note: "Differentiate once more."
  - math: f''(x) = 6x - 6
  - math: f''(-1) = -12 < 0 \qquad\therefore\;\textsf{maximum}
    note: "Negative second derivative—the curve is shaped like a frown there."
  - math: f''(3) = 12 > 0 \qquad\therefore\;\textsf{minimum}
    note: "Positive—shaped like a cup. One substitution per point, and the conclusion written beside each."
```

The test is the fastest of the three, with one blind spot: if $f''$ comes out to be zero it says nothing at all, and one of the other two justifications has to speak instead.

### An annotated sketch

The shape argument: a cubic with a positive $x^3$ term climbs from the lower left and climbs away to the upper right, so of its two turning points the first must be the maximum and the second the minimum. Drawn small and labelled, with the reasoning written beside it, this is a complete justification—the word *annotated* is what makes it one. A bare sketch with no words claims nothing.

Whichever of the three is used, the conclusion has to be stated: *therefore $(3, -25)$ is a minimum*. The 2024 schedule's Excellence column requires the minimum to be *stated* as such and the choice *justified*—the sentence is part of the working, not a flourish after it.

```practice
caption: nature
questions:
  - ask: Find the coordinates of the turning point of the curve, and use calculus to show that it is a minimum.
    math: f(x) = x^2 - 8x + 3
    grade: merit
    working:
      - math: f'(x) = 2x - 8 = 0
      - math: x = 4 \qquad f(4) = 16 - 32 + 3 = -13
      - math: f''(x) = 2 > 0 \qquad\therefore\;(4, -13)\;\textsf{is a minimum}
        note: "For a parabola the second derivative is a constant, so one line settles it—but the line must still be written."
  - ask: The curve has turning points at $x = -2$ and $x = 1$. Use calculus to determine the nature of each.
    math: f(x) = 2x^3 + 3x^2 - 12x + 4
    grade: merit
    working:
      - math: f'(x) = 6x^2 + 6x - 12
        note: "Check the given points first: $f'(-2) = 24 - 12 - 12 = 0$ and $f'(1) = 6 + 6 - 12 = 0$."
      - math: f''(x) = 12x + 6
      - math: f''(-2) = -18 < 0 \qquad\therefore\;\textsf{maximum at } x = -2
      - math: f''(1) = 18 > 0 \qquad\therefore\;\textsf{minimum at } x = 1
```

---

## Increasing and decreasing

Between its turning points a curve does one thing: climbs throughout or falls throughout. A question that asks where the function is **increasing** or **decreasing** is asking for those regions, and the turning points are the fences between them.

Find where $f'(x) = 0$, then read the sign of $f'$ in each region—from a test point, or from the shape of the graph of $f'$.

```figure
caption: Where the function decreases
steps:
  - math: f(x) = x^3 - 6x^2 + 9x + 1
    note: "Decreasing means falling, and falling means negative gradient. The question is about the sign of $f'$."
  - math: f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)
    note: "Zero at $x = 1$ and $x = 3$, cutting the axis into three regions."
  - math: f'(0) = 9 \qquad f'(2) = -3 \qquad f'(4) = 9
    note: "Positive, negative, positive—an upward parabola is below the axis only between its roots."
  - math: \textsf{decreasing for}\;\; 1 < x < 3
    note: "The answer is a region, written as an inequality, not a point."
  - graph:
      domain: [-0.5, 4.5]
      curves:
        - poly: [1, -6, 9, 1]
          label: f
      points:
        - at: [1, 5]
          color: a
        - at: [3, 1]
          color: a
      xticks: [1, 3]
    note: "The curve falls exactly between its two turning points."
```

The answer to this question is an interval of $x$-values. Writing the turning points and stopping earns the finding marks but not the question—the region is what was asked for.

```practice
caption: increasing and decreasing
questions:
  - ask: Use calculus to find the values of $x$ for which the function is decreasing.
    math: f(x) = 2x^3 - 3x^2 - 12x + 4
    grade: merit
    working:
      - math: f'(x) = 6x^2 - 6x - 12 = 0
      - math: 6(x - 2)(x + 1) = 0
      - math: x = 2 \;\textsf{ or }\; x = -1
      - math: f'(0) = -12 < 0
        note: "One test point between the roots settles the sign of the whole region—an upward parabola is negative only between its roots."
      - math: \textsf{decreasing for}\;\; -1 < x < 2
```

---

## Working backwards to a coefficient

A question can hold back a coefficient and hand over a fact about the curve instead. Each fact converts to an equation by the same two formulas as everything above: *has a stationary point at $x = a$* means $f'(a) = 0$; *passes through a point* or *meets the $x$-axis at $x = a$* means $f(a)$ equals the height named. Convert every fact, then solve what results.

```figure
caption: A fact becomes an equation
steps:
  - math: f(x) = x^3 + kx^2 + 3 \qquad\textsf{stationary point at}\;\; x = 2
    note: "One unknown coefficient, one fact about the curve."
  - math: f'(x) = 3x^2 + 2kx
    note: "$k$ is a constant, so it differentiates like any coefficient."
  - math: f'(2) = 12 + 4k = 0
    note: "Stationary at $x = 2$ says exactly this."
  - math: k = -3
```

With two unknown coefficients, two facts arrive, and converting both gives simultaneous equations—algebra's Module B again. The 2025 paper's hardest turning-point part is built this way: a cubic with coefficients $a$ and $b$, one $x$-intercept and one stationary point given, and everything else follows once the two equations are written.

```practice
caption: unknown coefficients
questions:
  - ask: The curve has a stationary point at $x = -2$. Find the value of $p$, and determine the nature of the stationary point.
    math: f(x) = x^3 + px^2 + 4
    grade: merit
    working:
      - math: f'(x) = 3x^2 + 2px
      - math: f'(-2) = 12 - 4p = 0
        note: "The stationary point converts to an equation in $p$."
      - math: p = 3
      - math: f''(x) = 6x + 6 \qquad f''(-2) = -6 < 0
      - math: \therefore\;\textsf{a maximum}
  - ask: The graph of $f(x) = ax^3 + bx^2 - x + 2$, where $a$ and $b$ are constants, meets the $x$-axis at $x = 2$ and has a stationary point at $x = 1$. Use calculus to find the $x$-coordinate of the other stationary point, and determine what type of stationary point it is.
    grade: excellence
    from: "2025"
    working:
      - math: f(2) = 8a + 4b - 2 + 2 = 0
        note: "Meeting the $x$-axis at $x = 2$ means the height there is zero."
      - math: 8a + 4b = 0 \qquad\Rightarrow\qquad b = -2a
      - math: f'(x) = 3ax^2 + 2bx - 1
      - math: f'(1) = 3a + 2b - 1 = 0
        note: "The stationary point gives the second equation. Two facts, two equations."
      - math: 3a - 4a - 1 = 0 \qquad\Rightarrow\qquad a = -1, \;\; b = 2
      - math: f'(x) = -3x^2 + 4x - 1 = -(3x - 1)(x - 1) = 0
      - math: x = \dfrac{1}{3}
        note: "$x = 1$ was the stationary point given, so the other one is at $x = \\dfrac{1}{3}$."
      - math: f''(x) = -6x + 4 \qquad f''\!\left(\dfrac{1}{3}\right) = 2 > 0
      - math: \therefore\;\textsf{a local minimum}
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Find the coordinates of the turning points of the curve.
    math: f(x) = x^3 - 27x
    grade: achieved
    working:
      - math: f'(x) = 3x^2 - 27 = 0
      - math: x^2 = 9 \qquad x = 3 \;\textsf{ or }\; x = -3
      - math: f(3) = 27 - 81 = -54 \qquad f(-3) = 54
      - math: (3, -54) \;\textsf{ and }\; (-3, 54)
  - ask: Using calculus methods, find the $x$-coordinate of the local minimum of the curve, and explain how you know it is a minimum.
    math: y = 2x^3 - 6x^2 - 18x + 5
    grade: excellence
    from: "2024"
    working:
      - math: \dfrac{dy}{dx} = 6x^2 - 12x - 18 = 0
      - math: 6(x - 3)(x + 1) = 0
      - math: x = 3 \;\textsf{ or }\; x = -1
        note: "Two stationary points, and the question wants the minimum—so the nature must be decided, not assumed."
      - math: \dfrac{d^2y}{dx^2} = 12x - 12
      - math: 12(3) - 12 = 24 > 0 \qquad\therefore\;\textsf{minimum at } x = 3
        note: "Testing points either side of $x = 3$, or an annotated sketch of an upward cubic, would justify it equally well."
  - ask: Use calculus to find the values of $x$ for which the function is increasing.
    math: f(x) = x^3 - 3x^2 - 24x + 1
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 6x - 24 = 0
      - math: 3(x - 4)(x + 2) = 0
      - math: x = 4 \;\textsf{ or }\; x = -2
      - math: f'(0) = -24 < 0
        note: "Negative between the roots, so positive outside them."
      - math: \textsf{increasing for}\;\; x < -2 \;\textsf{ and }\; x > 4
        note: "Increasing happens in two separate regions, and the answer names both."
  - ask: Find the coordinates of the three turning points of the curve.
    math: f(x) = x^4 - 8x^2
    grade: merit
    working:
      - math: f'(x) = 4x^3 - 16x = 0
        note: "A quartic's gradient function is a cubic, and the 2023 report says candidates *found difficulty in solving a cubic expression*. Common factor first, as always."
      - math: 4x(x^2 - 4) = 4x(x - 2)(x + 2) = 0
        note: "The common factor $4x$ supplies one root itself, and leaves a difference of two squares."
      - math: x = -2, \;\; 0, \;\; 2
      - math: f(\pm 2) = 16 - 32 = -16 \qquad f(0) = 0
      - math: (-2, -16), \;\; (0, 0) \;\textsf{ and }\; (2, -16)
  - ask: The curve $y = x^2 + bx + c$ has a minimum at $(3, -4)$. Find the values of $b$ and $c$.
    grade: excellence
    working:
      - math: \dfrac{dy}{dx} = 2x + b
      - math: 2(3) + b = 0 \qquad\Rightarrow\qquad b = -6
        note: "A minimum is a stationary point, so the gradient at $x = 3$ is zero."
      - math: 9 + 3(-6) + c = -4
        note: "The point also lies on the curve, so its coordinates satisfy the equation—the second fact."
      - math: c = 5
```

---

## Summary

A turning point is where the gradient is zero: solve $f'(x) = 0$, then take heights from $f$. The solving is a quadratic equation, so the marks around the calculus are algebra.

The nature is a separate question with its own working. Three justifications are accepted—second derivative, test points either side, annotated sketch—and the conclusion must be stated in words whichever is used. $f''$ negative means maximum, positive means minimum, zero means the test is silent and another justification must be used.

Between turning points a curve climbs throughout or falls throughout, so *increasing* and *decreasing* questions are answered with intervals fenced by the turning points.

Facts about a curve convert to equations: on the curve means $f(a)$ equals the height, stationary means $f'(a) = 0$. Two unknowns need two facts.

The next lesson sends all of this into word problems: the turning point stops being a feature of a curve and becomes the largest volume, the least material, the greatest area—the question the whole standard is named after.
