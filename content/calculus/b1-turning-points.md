# B1—Turning points and their nature

---

In Module A you met the same fact twice. A horizontal tangent has gradient zero, and a sketch of $f$ turns exactly where $f'$ crosses the axis. This lesson is about that point. Finding where $f'(x) = 0$, and saying what kind of point it is, is the main skill in the standard. The word problems in the next lesson use the same method in real situations.

---

## Finding turning points

A **turning point** is a point where the curve stops climbing and starts falling, or the reverse. At the turn the curve is momentarily flat, so its gradient there is zero. That gives the method: solve $f'(x) = 0$.

```figure
caption: Finding the turning points
steps:
  - math: f(x) = x^3 - 3x^2 - 9x + 2
    note: "This is a cubic, so expect up to two turning points."
  - math: f'(x) = 3x^2 - 6x - 9
    note: "Differentiate, and set the result equal to zero. Flat means gradient zero."
  - math: 3x^2 - 6x - 9 = 0
  - math: 3(x - 3)(x + 1) = 0
    note: "Take out the common factor, then factorise the trinomial. When the factors are hard to find, use the quadratic formula instead."
  - math: x = 3 \quad\textsf{or}\quad x = -1
    note: "These are the $x$-coordinates of the two flat points. You still need their heights."
  - math: f(-1) = 7 \qquad f(3) = -25
    note: "Take the heights from the original function, as always. The turning points are $(-1, 7)$ and $(3, -25)$."
```

For a cubic, $f'(x) = 0$ is a quadratic equation, so everything from solving quadratics in algebra applies. Factorise if the factors are easy to find. Otherwise use the quadratic formula from the sheet. The calculus in this question is one line. The marks after it are algebra.

Take each height from $f$, as in every earlier lesson: $f$ gives the height, and $f'$ gives the steepness. When an answer names a turning point, give both of its coordinates.

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
    note: "You found both turning points without drawing anything. The sketch shows the same two points."
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
  - ask: Find the coordinates of the turning point of the curve.
    math: f(x) = x^2 - 4x + 9
    grade: achieved
    working:
      - math: f'(x) = 2x - 4 = 0
      - math: x = 2
      - math: f(2) = 4 - 8 + 9 = 5
      - math: (2, 5)
  - ask: Find the coordinates of both turning points of the curve.
    math: f(x) = x^3 - 12x + 3
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 12 = 0
      - math: x^2 = 4 \qquad x = 2 \;\textsf{ or }\; x = -2
      - math: f(2) = 8 - 24 + 3 = -13
      - math: f(-2) = -8 + 24 + 3 = 19
        note: "There are two points, so find two heights, each from $f$."
      - math: (2, -13) \;\textsf{ and }\; (-2, 19)
  - ask: Find the coordinates of both turning points of the curve.
    math: f(x) = x^3 - 48x + 2
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 48 = 0
      - math: x^2 = 16 \qquad x = 4 \;\textsf{ or }\; x = -4
      - math: f(4) = 64 - 192 + 2 = -126
      - math: f(-4) = -64 + 192 + 2 = 130
        note: "There are two points, so find two heights, each from $f$."
      - math: (4, -126) \;\textsf{ and }\; (-4, 130)
```

---

## The nature of a turning point

*Nature* is the examiner's word for the kind of turning point. A **maximum** is where the curve turns from climbing to falling, and a **minimum** is where it turns from falling to climbing. Solving $f'(x) = 0$ does not tell you which it is, because the gradient is zero at both kinds. So the nature is a second question, and you answer it with its own working.

The 2026 specification names three acceptable justifications: *"by using the second derivative, testing points around the turning points, or with an annotated sketch of the shape of the curve"*. Any one of the three is enough.

### Testing points either side

Take an $x$ a little before the turning point and one a little after, and read the sign of $f'$ at each. Climbing then falling is a maximum. Falling then climbing is a minimum.

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
    note: "The curve climbs before $x = -1$ and falls after it, so that point is a maximum. It falls before $x = 3$ and climbs after it, so that point is a minimum."
```

### The second derivative

Differentiating the gradient function gives the **second derivative**, written $f''(x)$ and read *f double dashed*. It is the gradient of the gradient function. Where the function was given as an equation in $y$, the second derivative is written $\dfrac{d^2y}{dx^2}$. That matches the first derivative, written $\dfrac{dy}{dx}$. At a maximum the gradient is falling through zero, so $f''$ is negative there. At a minimum the gradient is rising through zero, so $f''$ is positive.

```figure
caption: The second derivative test
steps:
  - math: f'(x) = 3x^2 - 6x - 9
    note: "Differentiate once more."
  - math: f''(x) = 6x - 6
  - math: f''(-1) = -12 < 0 \qquad\therefore\;\textsf{maximum}
    note: "The second derivative is negative, so the gradient is falling through zero there."
  - math: f''(3) = 12 > 0 \qquad\therefore\;\textsf{minimum}
    note: "The second derivative is positive, so the gradient is rising through zero. Substitute once for each point, and write the conclusion beside each one."
```

The second derivative test is the fastest of the three, but it does not always work. If $f''$ is zero at the point, the test does not tell you the nature, and you must use one of the other two justifications instead.

### An annotated sketch

A cubic with a positive $x^3$ term climbs in from the lower left and climbs away to the upper right. So the first of its two turning points must be the maximum, and the second must be the minimum. An **annotated** sketch is a sketch with notes written on it. A small labelled sketch, with this reasoning written beside it, is a complete justification. A bare sketch with no words does not claim anything.

Whichever of the three you use, you have to state the conclusion: *therefore $(3, -25)$ is a minimum*. The sentence is part of the working. The Excellence column of the 2024 schedule requires the minimum to be *stated* as such and the choice *justified*.

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
        note: "For a parabola the second derivative is a constant, so one line of working shows the nature. You must still write that line."
  - ask: Find the coordinates of the turning point of the curve, and use calculus to show that it is a minimum.
    math: f(x) = x^2 - 10x + 4
    grade: merit
    working:
      - math: f'(x) = 2x - 10 = 0
      - math: x = 5 \qquad f(5) = 25 - 50 + 4 = -21
      - math: f''(x) = 2 > 0 \qquad\therefore\;(5, -21)\;\textsf{is a minimum}
        note: "For a parabola the second derivative is a constant, so one line of working shows the nature. You must still write that line."
  - ask: The curve has turning points at $x = -2$ and $x = 1$. Use calculus to determine the nature of each.
    math: f(x) = 2x^3 + 3x^2 - 12x + 4
    grade: merit
    working:
      - math: f'(x) = 6x^2 + 6x - 12
        note: "Check the given points first: $f'(-2) = 24 - 12 - 12 = 0$ and $f'(1) = 6 + 6 - 12 = 0$."
      - math: f''(x) = 12x + 6
      - math: f''(-2) = -18 < 0 \qquad\therefore\;\textsf{maximum at } x = -2
      - math: f''(1) = 18 > 0 \qquad\therefore\;\textsf{minimum at } x = 1
  - ask: The curve has turning points at $x = -4$ and $x = 1$. Use calculus to determine the nature of each.
    math: f(x) = 2x^3 + 9x^2 - 24x + 3
    grade: merit
    working:
      - math: f'(x) = 6x^2 + 18x - 24
        note: "Check the given points first: $f'(-4) = 96 - 72 - 24 = 0$ and $f'(1) = 6 + 18 - 24 = 0$."
      - math: f''(x) = 12x + 18
      - math: f''(-4) = -30 < 0 \qquad\therefore\;\textsf{maximum at } x = -4
      - math: f''(1) = 30 > 0 \qquad\therefore\;\textsf{minimum at } x = 1
```

---

## Increasing and decreasing

Between its turning points, a curve climbs the whole way or falls the whole way. A function is **increasing** where its curve climbs, and **decreasing** where its curve falls. So a question about where a function is increasing or decreasing asks for those regions. The turning points are the boundaries between them.

Find where $f'(x) = 0$. Then read the sign of $f'$ in each region, from a test point or from the shape of the graph of $f'$.

```figure
caption: Where the function decreases
steps:
  - math: f(x) = x^3 - 6x^2 + 9x + 1
    note: "Decreasing means falling, and falling means a negative gradient. So the question asks where $f'$ is negative."
  - math: f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)
    note: "$f'$ is zero at $x = 1$ and $x = 3$. These two values cut the $x$-axis into three regions."
  - math: f'(0) = 9 \qquad f'(2) = -3 \qquad f'(4) = 9
    note: "Positive, negative, positive. A parabola that opens upwards is below the axis only between its roots."
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

The answer to this question is an interval of $x$-values. Writing the turning points and stopping earns the marks for finding them, but it does not answer the question. The question asked for the region.

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
        note: "One test point between the roots gives the sign of $f'$ for the whole region. A parabola that opens upwards is negative only between its roots."
      - math: \textsf{decreasing for}\;\; -1 < x < 2
  - ask: Use calculus to find the values of $x$ for which the function is decreasing.
    math: f(x) = 2x^3 - 9x^2 - 24x + 1
    grade: merit
    working:
      - math: f'(x) = 6x^2 - 18x - 24 = 0
      - math: 6(x - 4)(x + 1) = 0
      - math: x = 4 \;\textsf{ or }\; x = -1
      - math: f'(0) = -24 < 0
        note: "One test point between the roots gives the sign of $f'$ for the whole region. A parabola that opens upwards is negative only between its roots."
      - math: \textsf{decreasing for}\;\; -1 < x < 4
  - ask: Use calculus to find the values of $x$ for which the function is increasing.
    math: f(x) = x^3 - 9x^2 + 24x - 3
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 18x + 24 = 0
      - math: 3(x - 2)(x - 4) = 0
      - math: x = 2 \;\textsf{ or }\; x = 4
      - math: f'(3) = 27 - 54 + 24 = -3 < 0
        note: "$f'$ is negative between the roots, so it is positive outside them."
      - math: \textsf{increasing for}\;\; x < 2 \;\textsf{ and }\; x > 4
        note: "The function is increasing in two separate regions, and the answer must give both."
```

---

## Working backwards to a coefficient

Some questions leave a coefficient unknown and give a fact about the curve instead. You change each fact into an equation with $f$ or $f'$, as in the rest of this lesson. *Has a stationary point at $x = a$* means $f'(a) = 0$. *Passes through a point* or *meets the $x$-axis at $x = a$* means $f(a)$ equals the height of that point. Change every fact into an equation, then solve the equations.

```figure
caption: A fact becomes an equation
steps:
  - math: f(x) = x^3 + kx^2 + 3 \qquad\textsf{stationary point at}\;\; x = 2
    note: "There is one unknown coefficient and one fact about the curve."
  - math: f'(x) = 3x^2 + 2kx
    note: "$k$ is a constant, so treat it like any other coefficient when you differentiate."
  - math: f'(2) = 12 + 4k = 0
    note: "A stationary point at $x = 2$ means that the gradient there is zero."
  - math: k = -3
```

With two unknown coefficients the question gives two facts. Converting both gives a pair of simultaneous equations, which you solve as in algebra. The hardest turning-point part of the 2025 paper is built this way. It gives a cubic with coefficients $a$ and $b$, one $x$-intercept and one stationary point. Everything else follows once you have written the two equations.

```practice
caption: unknown coefficients
questions:
  - ask: The curve has a stationary point at $x = -2$. Find the value of $p$, and determine the nature of the stationary point.
    math: f(x) = x^3 + px^2 + 4
    grade: merit
    working:
      - math: f'(x) = 3x^2 + 2px
      - math: f'(-2) = 12 - 4p = 0
        note: "The stationary point gives an equation in $p$."
      - math: p = 3
      - math: f''(x) = 6x + 6 \qquad f''(-2) = -6 < 0
      - math: \therefore\;\textsf{a maximum}
  - ask: The curve has a stationary point at $x = -4$. Find the value of $p$, and determine the nature of the stationary point.
    math: f(x) = x^3 + px^2 + 5
    grade: merit
    working:
      - math: f'(x) = 3x^2 + 2px
      - math: f'(-4) = 48 - 8p = 0
        note: "The stationary point gives an equation in $p$."
      - math: p = 6
      - math: f''(x) = 6x + 12 \qquad f''(-4) = -12 < 0
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
        note: "The stationary point gives the second equation."
      - math: 3a - 4a - 1 = 0 \qquad\Rightarrow\qquad a = -1, \;\; b = 2
      - math: f'(x) = -3x^2 + 4x - 1 = -(3x - 1)(x - 1) = 0
      - math: x = \dfrac{1}{3}
        note: "$x = 1$ was the stationary point given, so the other one is at $x = \\dfrac{1}{3}$."
      - math: f''(x) = -6x + 4 \qquad f''\!\left(\dfrac{1}{3}\right) = 2 > 0
      - math: \therefore\;\textsf{a local minimum}
  - ask: The graph of $f(x) = ax^3 + bx^2 - 4x + 4$, where $a$ and $b$ are constants, meets the $x$-axis at $x = 2$ and has a stationary point at $x = 1$. Use calculus to find the $x$-coordinate of the other stationary point, and determine what type of stationary point it is.
    grade: excellence
    working:
      - math: f(2) = 8a + 4b - 8 + 4 = 0
        note: "Meeting the $x$-axis at $x = 2$ means the height there is zero."
      - math: 8a + 4b = 4 \qquad\Rightarrow\qquad b = 1 - 2a
      - math: f'(x) = 3ax^2 + 2bx - 4
      - math: f'(1) = 3a + 2b - 4 = 0
        note: "The stationary point gives the second equation."
      - math: 3a + 2(1 - 2a) - 4 = 0 \qquad\Rightarrow\qquad a = -2, \;\; b = 5
      - math: f'(x) = -6x^2 + 10x - 4 = -2(3x - 2)(x - 1) = 0
      - math: x = \dfrac{2}{3}
        note: "$x = 1$ was the stationary point given, so the other one is at $x = \\dfrac{2}{3}$."
      - math: f''(x) = -12x + 10 \qquad f''\!\left(\dfrac{2}{3}\right) = 2 > 0
      - math: \therefore\;\textsf{a local minimum}
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well.

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
  - ask: Find the coordinates of the turning points of the curve.
    math: f(x) = x^3 - 75x
    grade: achieved
    working:
      - math: f'(x) = 3x^2 - 75 = 0
      - math: x^2 = 25 \qquad x = 5 \;\textsf{ or }\; x = -5
      - math: f(5) = 125 - 375 = -250 \qquad f(-5) = 250
      - math: (5, -250) \;\textsf{ and }\; (-5, 250)
  - ask: Use calculus to find the values of $x$ for which the function is increasing.
    math: f(x) = x^3 - 3x^2 - 24x + 1
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 6x - 24 = 0
      - math: 3(x - 4)(x + 2) = 0
      - math: x = 4 \;\textsf{ or }\; x = -2
      - math: f'(0) = -24 < 0
        note: "$f'$ is negative between the roots, so it is positive outside them."
      - math: \textsf{increasing for}\;\; x < -2 \;\textsf{ and }\; x > 4
        note: "The function is increasing in two separate regions, and the answer must give both."
  - ask: Use calculus to find the values of $x$ for which the function is increasing.
    math: f(x) = x^3 - 3x^2 - 45x + 2
    grade: merit
    working:
      - math: f'(x) = 3x^2 - 6x - 45 = 0
      - math: 3(x - 5)(x + 3) = 0
      - math: x = 5 \;\textsf{ or }\; x = -3
      - math: f'(0) = -45 < 0
        note: "$f'$ is negative between the roots, so it is positive outside them."
      - math: \textsf{increasing for}\;\; x < -3 \;\textsf{ and }\; x > 5
        note: "The function is increasing in two separate regions, and the answer must give both."
  - ask: Find the coordinates of the three turning points of the curve.
    math: f(x) = x^4 - 8x^2
    grade: merit
    working:
      - math: f'(x) = 4x^3 - 16x = 0
        note: "The gradient function of a quartic is a cubic, and the 2023 report says candidates *found difficulty in solving a cubic expression*. Take out the common factor first, as always."
      - math: 4x(x^2 - 4) = 4x(x - 2)(x + 2) = 0
        note: "The common factor $4x$ gives one root by itself. What is left is a difference of two squares."
      - math: x = -2, \;\; 0, \;\; 2
      - math: f(\pm 2) = 16 - 32 = -16 \qquad f(0) = 0
      - math: (-2, -16), \;\; (0, 0) \;\textsf{ and }\; (2, -16)
  - ask: Find the coordinates of the three turning points of the curve.
    math: f(x) = x^4 - 18x^2
    grade: merit
    working:
      - math: f'(x) = 4x^3 - 36x = 0
        note: "The gradient function of a quartic is a cubic. Take out the common factor first, as always."
      - math: 4x(x^2 - 9) = 4x(x - 3)(x + 3) = 0
        note: "The common factor $4x$ gives one root by itself. What is left is a difference of two squares."
      - math: x = -3, \;\; 0, \;\; 3
      - math: f(\pm 3) = 81 - 162 = -81 \qquad f(0) = 0
      - math: (-3, -81), \;\; (0, 0) \;\textsf{ and }\; (3, -81)
  - ask: Using calculus methods, find the $x$-coordinate of the local minimum of the curve, and explain how you know it is a minimum.
    math: y = 2x^3 - 3x^2 - 36x + 4
    grade: excellence
    working:
      - math: \dfrac{dy}{dx} = 6x^2 - 6x - 36 = 0
      - math: 6(x - 3)(x + 2) = 0
      - math: x = 3 \;\textsf{ or }\; x = -2
        note: "There are two stationary points, and the question asks for the minimum. So you must show which one is the minimum, not assume it."
      - math: \dfrac{d^2y}{dx^2} = 12x - 6
      - math: 12(3) - 6 = 30 > 0 \qquad\therefore\;\textsf{minimum at } x = 3
        note: "Testing points either side of $x = 3$, or an annotated sketch of a cubic with a positive $x^3$ term, would justify it equally well."
  - ask: Using calculus methods, find the $x$-coordinate of the local minimum of the curve, and explain how you know it is a minimum.
    math: y = 2x^3 - 6x^2 - 18x + 5
    grade: excellence
    from: "2024"
    working:
      - math: \dfrac{dy}{dx} = 6x^2 - 12x - 18 = 0
      - math: 6(x - 3)(x + 1) = 0
      - math: x = 3 \;\textsf{ or }\; x = -1
        note: "There are two stationary points, and the question asks for the minimum. So you must show which one is the minimum, not assume it."
      - math: \dfrac{d^2y}{dx^2} = 12x - 12
      - math: 12(3) - 12 = 24 > 0 \qquad\therefore\;\textsf{minimum at } x = 3
        note: "Testing points either side of $x = 3$, or an annotated sketch of a cubic with a positive $x^3$ term, would justify it equally well."
  - ask: The curve $y = x^2 + bx + c$ has a minimum at $(3, -4)$. Find the values of $b$ and $c$.
    grade: excellence
    working:
      - math: \dfrac{dy}{dx} = 2x + b
      - math: 2(3) + b = 0 \qquad\Rightarrow\qquad b = -6
        note: "A minimum is a stationary point, so the gradient at $x = 3$ is zero."
      - math: 9 + 3(-6) + c = -4
        note: "The point also lies on the curve, so its coordinates satisfy the equation. That is the second fact."
      - math: c = 5
  - ask: The curve $y = x^2 + bx + c$ has a minimum at $(2, -7)$. Find the values of $b$ and $c$.
    grade: excellence
    working:
      - math: \dfrac{dy}{dx} = 2x + b
      - math: 2(2) + b = 0 \qquad\Rightarrow\qquad b = -4
        note: "A minimum is a stationary point, so the gradient at $x = 2$ is zero."
      - math: 4 + 2(-4) + c = -7
        note: "The point also lies on the curve, so its coordinates satisfy the equation. That is the second fact."
      - math: c = -3
```

---

## Summary

A turning point is where the gradient is zero: solve $f'(x) = 0$, then take heights from $f$. For a cubic, $f'(x) = 0$ is a quadratic equation, so the marks after the differentiation are for algebra.

The nature is a separate question with its own working. Three justifications are accepted: second derivative, test points either side, annotated sketch. Whichever you use, you must state the conclusion in words. A negative $f''$ means a maximum, and a positive $f''$ means a minimum. If $f''$ is zero, the test does not tell you the nature, and you must use another justification.

Between turning points a curve climbs throughout or falls throughout, so you answer *increasing* and *decreasing* questions with intervals bounded by the turning points.

Change each fact about a curve into an equation. A point on the curve means $f(a)$ equals its height. A stationary point means $f'(a) = 0$. To find two unknowns, you need two facts.

In the next lesson you use all of this in word problems. There the turning point gives the largest volume, the least material or the greatest area. These are the problems in the title of the standard, *Apply calculus methods in solving problems*.
