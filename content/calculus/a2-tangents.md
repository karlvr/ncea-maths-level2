# A2—Tangents

---

The previous lesson produced $f'(a)$: the gradient of the curve at one chosen point. A straight line through a known point with a known gradient is Level 1 work. Put the two together and you can write the equation of the tangent—the question this lesson is about, and one that appears in every recent paper.

---

## Two ingredients

The tangent at $x = a$ is a straight line, and a straight line is pinned down by a point and a gradient. Both come from the curve, and each from a different formula.

- **The point.** The tangent touches the curve at $x = a$, so the point is $\big(a, f(a)\big)$: the height comes from the original function.
- **The gradient.** The tangent's gradient is the curve's gradient at the touch, which is $f'(a)$, from the gradient function.

```figure
caption: What the tangent needs
steps:
  - graph:
      domain: [-1, 4]
      curves:
        - poly: [1, -4, 3]
          label: f
        - poly: [2, -6]
          color: a
          label: tangent
          domain: [1.2, 4]
      points:
        - at: [3, 0]
          color: a
          guides: true
      xticks: [3]
    note: "One curve, one marked point, one line through it. The line's two ingredients—where it passes and how steeply—are $f(3)$ and $f'(3)$."
```

With the point and the gradient found, the line is assembled with

$$y - y_1 = m(x - x_1)$$

This equation is **not on the formulae sheet**. The sheet carries the differentiation rule; the straight-line equation it assumes you know. The 2024 report lists *"could not write the equation of a straight line"* among the reasons candidates did not achieve—the calculus in the question was never reached, because the Level 1 line equation was missing.

---

## Writing the equation of a tangent

```figure
caption: Tangent at a point
steps:
  - math: f(x) = x^3 - 3x^2 + 2 \qquad\textsf{at}\qquad x = 1
    note: "Two ingredients to collect, and each has its own formula."
  - math: f(1) = 1 - 3 + 2 = 0
    note: "Height first. The tangent touches the curve at $(1, 0)$."
  - math: f'(x) = 3x^2 - 6x
    note: "Now the gradient. Differentiate, then substitute."
  - math: f'(1) = 3 - 6 = -3
    note: "The tangent's gradient is $-3$. Both ingredients are ready."
  - math: y - 0 = -3(x - 1)
    note: "Point and gradient go into the straight-line equation."
  - math: y = -3x + 3
```

The two substitutions are the place errors live. $f(a)$ is the height and $f'(a)$ is the gradient; swap them and every line after is wrong, though the working looks tidy. Say what each number is as you find it—*the point is $(1, 0)$, the gradient is $-3$*—and the swap cannot happen silently.

The 2024 marking schedule accepts the unsimplified form—its note reads "Candidate does not need to simplify to $y = mx + c$"—so $y - 0 = -3(x-1)$ already earns the mark. Simplifying anyway costs a line and buys a form that is easier to check: substitute the touching point into the finished equation, and the two sides must agree.

Some questions supply the point ready-made—*find the tangent at $(-2, 6)$*—and then $f(a)$ is not needed; the height is on the page. Some supply only $x = a$, and then finding $f(a)$ is the first step. Read which one you have been given before starting.

```practice
caption: tangents
questions:
  - ask: Find the gradient of the tangent to the curve at $x = 3$.
    math: f(x) = x^2 - 4x + 1
    grade: achieved
    working:
      - math: f'(x) = 2x - 4
      - math: f'(3) = 2
        note: "The question asks only for the gradient, so the height is never needed."
  - ask: Find the gradient of the tangent to the curve at $x = 5$.
    math: f(x) = x^2 - 6x + 5
    grade: achieved
    working:
      - math: f'(x) = 2x - 6
      - math: f'(5) = 4
        note: "The question asks only for the gradient, so the height is never needed."
  - ask: Find the equation of the tangent to the curve at $x = 1$.
    math: f(x) = x^2 + 2x - 3
    grade: merit
    working:
      - math: f(1) = 1 + 2 - 3 = 0
        note: "The point: $(1, 0)$."
      - math: f'(x) = 2x + 2
      - math: f'(1) = 4
        note: "The gradient: $4$."
      - math: y - 0 = 4(x - 1)
      - math: y = 4x - 4
  - ask: Find the equation of the tangent to the curve at $x = 1$.
    math: f(x) = x^2 + 4x - 5
    grade: merit
    working:
      - math: f(1) = 1 + 4 - 5 = 0
        note: "The point: $(1, 0)$."
      - math: f'(x) = 2x + 4
      - math: f'(1) = 6
        note: "The gradient: $6$."
      - math: y - 0 = 6(x - 1)
      - math: y = 6x - 6
  - ask: Find the equation of the tangent to the graph of the function at the point $(-2, 6)$.
    math: f(x) = 4 - 9x + 2x^3
    grade: merit
    from: "2024"
    working:
      - math: f'(x) = -9 + 6x^2
        note: "The point is supplied, so only the gradient has to be found."
      - math: f'(-2) = -9 + 24 = 15
      - math: y - 6 = 15(x + 2)
      - math: y = 15x + 36
  - ask: Find the equation of the tangent to the graph of the function at the point $(-2, 5)$.
    math: f(x) = 3 - 5x + x^3
    grade: merit
    working:
      - math: f'(x) = -5 + 3x^2
        note: "The point is supplied, so only the gradient has to be found."
      - math: f'(-2) = -5 + 12 = 7
      - math: y - 5 = 7(x + 2)
      - math: y = 7x + 19
  - ask: Find the equation of the tangent to the curve at $x = 3$.
    math: f(x) = -\dfrac{x^3}{3} + x^2 - 2x + 5
    grade: merit
    from: "2025"
    working:
      - math: f(3) = -9 + 9 - 6 + 5 = -1
        note: "Only $x$ is supplied, so the height is the first thing to find."
      - math: f'(x) = -x^2 + 2x - 2
      - math: f'(3) = -9 + 6 - 2 = -5
      - math: y + 1 = -5(x - 3)
        note: "Subtracting the height $-1$ becomes adding $1$."
      - math: y = -5x + 14
  - ask: Find the equation of the tangent to the curve at $x = 3$.
    math: f(x) = -\dfrac{x^3}{3} + 2x^2 - x - 8
    grade: merit
    working:
      - math: f(3) = -9 + 18 - 3 - 8 = -2
        note: "Only $x$ is supplied, so the height is the first thing to find."
      - math: f'(x) = -x^2 + 4x - 1
      - math: f'(3) = -9 + 12 - 1 = 2
      - math: y + 2 = 2(x - 3)
        note: "Subtracting the height $-2$ becomes adding $2$."
      - math: y = 2x - 8
```

---

## A tangent with a stated gradient

The question can run the other way: instead of naming the touching point, it names the gradient—*find the tangent parallel to $y = 2x + 1$*. Parallel lines share a gradient, so the tangent's gradient is $2$, and the unknown is where it touches. That is the backwards question from the previous lesson: solve $f'(x) = 2$, take the height from $f$, and assemble the line as before.

```figure
caption: From gradient to tangent
steps:
  - math: f(x) = x^2 - 6x + 4 \qquad\textsf{parallel to}\qquad y = 2x + 1
    note: "Parallel means the tangent's gradient is $2$. The touching point is now the unknown."
  - math: f'(x) = 2x - 6 = 2
    note: "The gradient function, set equal to the gradient the tangent must have."
  - math: x = 4
  - math: f(4) = 16 - 24 + 4 = -4
    note: "Height from the original function, as always. The tangent touches at $(4, -4)$."
  - math: y + 4 = 2(x - 4)
  - math: y = 2x - 12
```

A tangent described as **horizontal** has gradient zero, so its touching point solves $f'(x) = 0$. A point where that happens is a turning point of the curve, and finding and classifying them is the whole of Module B—this question shape is where that work begins.

```practice
caption: stated gradient
questions:
  - ask: Find the equation of the tangent to the curve that is parallel to $y = 4x - 9$.
    math: f(x) = x^2 - 2x + 5
    grade: merit
    working:
      - math: f'(x) = 2x - 2 = 4
        note: "Parallel lines share a gradient, so the tangent's gradient is $4$."
      - math: x = 3
      - math: f(3) = 9 - 6 + 5 = 8
      - math: y - 8 = 4(x - 3)
      - math: y = 4x - 4
  - ask: Find the equation of the tangent to the curve that is parallel to $y = 6x + 1$.
    math: f(x) = x^2 - 4x + 7
    grade: merit
    working:
      - math: f'(x) = 2x - 4 = 6
        note: "Parallel lines share a gradient, so the tangent's gradient is $6$."
      - math: x = 5
      - math: f(5) = 25 - 20 + 7 = 12
      - math: y - 12 = 6(x - 5)
      - math: y = 6x - 18
  - ask: Find the equation of the tangent to the curve that is horizontal.
    math: f(x) = x^2 - 10x + 18
    grade: merit
    working:
      - math: f'(x) = 2x - 10 = 0
        note: "A horizontal line has gradient zero, so the gradient function is set to zero."
      - math: x = 5
      - math: f(5) = 25 - 50 + 18 = -7
      - math: y = -7
        note: "A horizontal tangent is a line of constant height, so its equation carries no $x$."
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Find the gradient of the tangent to the curve at $x = 1$.
    math: f(x) = 3x^2 - x
    grade: achieved
    working:
      - math: f'(x) = 6x - 1
      - math: f'(1) = 5
  - ask: Find the gradient of the tangent to the curve at $x = 2$.
    math: f(x) = 4x^2 - x
    grade: achieved
    working:
      - math: f'(x) = 8x - 1
      - math: f'(2) = 15
  - ask: Find the equation of the tangent to the curve at $x = 0$.
    math: y = x^3 - 4x + 1
    grade: merit
    working:
      - math: y = 1 \;\textsf{ when }\; x = 0
        note: "The point: $(0, 1)$."
      - math: \dfrac{dy}{dx} = 3x^2 - 4
      - math: \dfrac{dy}{dx} = -4 \;\textsf{ at }\; x = 0
      - math: y = -4x + 1
        note: "Through $(0, 1)$ the intercept is already known, so the equation assembles directly."
  - ask: Find the equation of the tangent to the curve at $x = 0$.
    math: y = x^3 - 5x + 2
    grade: merit
    working:
      - math: y = 2 \;\textsf{ when }\; x = 0
        note: "The point: $(0, 2)$."
      - math: \dfrac{dy}{dx} = 3x^2 - 5
      - math: \dfrac{dy}{dx} = -5 \;\textsf{ at }\; x = 0
      - math: y = -5x + 2
  - ask: Find the equations of the two tangents to the curve that have gradient $3$.
    math: f(x) = x^3 - 9x
    grade: excellence
    working:
      - math: f'(x) = 3x^2 - 9 = 3
        note: "A quadratic, so expect two answers—the question said two tangents."
      - math: x^2 = 4 \qquad x = 2 \;\textsf{ or }\; x = -2
      - math: f(2) = 8 - 18 = -10 \qquad f(-2) = -8 + 18 = 10
        note: "Each touching point gets its height from $f$, separately."
      - math: y + 10 = 3(x - 2) \qquad y - 10 = 3(x + 2)
      - math: y = 3x - 16 \qquad y = 3x + 16
  - ask: Find the equations of the two tangents to the curve that have gradient $15$.
    math: f(x) = x^3 - 12x
    grade: excellence
    working:
      - math: f'(x) = 3x^2 - 12 = 15
        note: "A quadratic, so expect two answers—the question said two tangents."
      - math: x^2 = 9 \qquad x = 3 \;\textsf{ or }\; x = -3
      - math: f(3) = 27 - 36 = -9 \qquad f(-3) = -27 + 36 = 9
        note: "Each touching point gets its height from $f$, separately."
      - math: y + 9 = 15(x - 3) \qquad y - 9 = 15(x + 3)
      - math: y = 15x - 54 \qquad y = 15x + 54
  - ask: Show that the tangent to the curve $y = x^2$ at the point $(a, a^2)$ meets the $x$-axis at $x = \dfrac{a}{2}$.
    grade: excellence
    working:
      - math: \dfrac{dy}{dx} = 2x
        note: "The point is general, so the working stays in terms of $a$ throughout."
      - math: y - a^2 = 2a(x - a)
        note: "Point $(a, a^2)$, gradient $2a$, into the straight-line equation."
      - math: y = 2ax - a^2
      - math: 0 = 2ax - a^2 \;\;\textsf{ at the } x\textsf{-axis}
      - math: x = \dfrac{a^2}{2a} = \dfrac{a}{2}
        note: "Which is what was to be shown, for every point on the curve at once."
  - ask: Show that the tangent to the curve $y = x^3$ at the point $(a, a^3)$ meets the $x$-axis at $x = \dfrac{2a}{3}$.
    grade: excellence
    working:
      - math: \dfrac{dy}{dx} = 3x^2
        note: "The point is general, so the working stays in terms of $a$ throughout."
      - math: y - a^3 = 3a^2(x - a)
        note: "Point $(a, a^3)$, gradient $3a^2$, into the straight-line equation."
      - math: y = 3a^2x - 2a^3
        note: "Three $a^3$ taken off one $a^3$ leaves $-2a^3$."
      - math: 0 = 3a^2x - 2a^3 \;\;\textsf{ at the } x\textsf{-axis}
      - math: x = \dfrac{2a^3}{3a^2} = \dfrac{2a}{3}
        note: "Which is what was to be shown, for every point on the curve at once."
```

---

## Summary

A tangent is a straight line, so it needs a point and a gradient, and the curve supplies both: the point is $\big(a, f(a)\big)$ and the gradient is $f'(a)$. Height from $f$, steepness from $f'$: the same division of labour as the whole of Module A.

Assemble with $y - y_1 = m(x - x_1)$, which is not on the formulae sheet. Either form of the answer is accepted; the simplified form is the one you can check by substituting the touching point back in.

Where the gradient is stated instead of the point—parallel to a given line, or horizontal—solve $f'(x) = \textsf{gradient}$ to find the touch, then proceed as before.

A horizontal tangent marks a turning point of the curve, and turning points are Module B's subject. Before that, the next lesson finishes Module A by drawing the gradient function whole—the graph of $f'$ beside the graph of $f$.
