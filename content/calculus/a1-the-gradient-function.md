# A1—The gradient function

---

The introduction promised that every function has a gradient function. This lesson is the rule that finds it, and what the result says.

---

## The gradient at a point

The gradient of a curve at a point is the gradient of the **tangent** at that point: the straight line that touches the curve there and has the same steepness as the curve does at the moment of touching.

```figure
caption: The tangent carries the gradient
steps:
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [1, 0, 0]
          label: f
      points:
        - at: [1, 1]
          color: a
    note: "One point on the curve is marked. The curve has a steepness there, but a curve is hard to measure directly."
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [1, 0, 0]
          label: f
        - poly: [2, -1]
          color: a
          label: tangent
          domain: [-0.3, 2.3]
      points:
        - at: [1, 1]
          color: a
    note: "The tangent touches at the marked point and matches the curve's steepness there. Its gradient is a number—rise over run—and that number is the gradient of the curve at the point."
```

Zoom in far enough on any point of a polynomial's graph and the curve becomes indistinguishable from its tangent. That is why a single number can describe the steepness at a point, even though the curve keeps bending either side of it.

Measuring a tangent by eye is guesswork, and guesswork is not calculus. The gradient function replaces the guessing: it is a formula that returns the gradient at every point at once, and it is found by a rule.

---

## The rule

The formulae sheet states the rule.

```figure
caption: The rule, as the sheet prints it
steps:
  - math: \dfrac{d}{dx}\left(x^n\right) = nx^{n-1}
    note: "Multiply by the power, then lower the power by one."
```

Applied to $x^3$: the power is $3$, so multiply by $3$ and lower the power to $2$.

```figure
caption: One power of x
steps:
  - math: x^{\ca{3}}
    note: "Multiply by the power. Then the power drops by one."
  - math: \ca{3}x^{2}
```

Three extensions turn the rule into a method for any polynomial, and each is a consequence of what a gradient is.

**A coefficient stays and multiplies.** The graph of $5x^3$ is the graph of $x^3$ stretched to five times the height, so every gradient on it is five times steeper: the derivative of $5x^3$ is $5 \times 3x^2$, which is $15x^2$.

**Terms differentiate one at a time.** A polynomial is differentiated term by term, each term keeping its sign.

**A constant differentiates to zero.** The graph of $y = 7$ is a flat line. Its gradient is zero everywhere, so the $7$ contributes nothing to the gradient function. For the same reason the derivative of $3x$ is just $3$: the graph of $3x$ is a line of gradient $3$. The rule says the same thing, because $3x^1$ becomes $3x^0$, and $x^0$ is $1$.

```figure
caption: A polynomial, term by term
steps:
  - math: f(x) = 4x^3 + x^2 - 5x + 8
    note: "Four terms. Take them one at a time."
  - math: \dfrac{d}{dx}\left(4x^3\right) = 12x^2
    note: "Multiply by the power, then lower the power."
  - math: \dfrac{d}{dx}\left(x^2\right) = 2x
    note: "Its coefficient is $1$, so there is nothing else to multiply."
  - math: \dfrac{d}{dx}\left(-5x\right) = -5
    note: "$-5x$ is a line of gradient $-5$, and that is its derivative."
  - math: \dfrac{d}{dx}\left(8\right) = 0
    note: "The constant contributes no gradient at all."
  - math: f'(x) = 12x^2 + 2x - 5
    note: "The four derivatives, collected. The derivative of a cubic is a quadratic—differentiating always lowers every power by one."
```

A coefficient written as a fraction behaves like any other coefficient. The derivative of $\dfrac{x^2}{2}$ is $\dfrac{2x}{2}$, which is $x$, and the derivative of $\dfrac{x}{2}$ is $\dfrac{1}{2}$. The 2025 report lists candidates who *"failed to differentiate when a fraction was involved in an expression"* among those not achieving—the fraction changes nothing about the rule.

```practice
caption: the rule
questions:
  - ask: Differentiate.
    math: f(x) = 3x^4
    grade: achieved
    working:
      - math: f'(x) = 3 \times 4x^3 = 12x^3
        note: "The coefficient stays and multiplies the power."
  - ask: Differentiate.
    math: f(x) = 5x^3
    grade: achieved
    working:
      - math: f'(x) = 5 \times 3x^2 = 15x^2
  - ask: Differentiate.
    math: f(x) = x^5 - 4x^3 + 2x - 9
    grade: achieved
    working:
      - math: f'(x) = 5x^4 - 12x^2 + 2
        note: "Term by term. The $2x$ becomes $2$, and the constant becomes nothing."
  - ask: Differentiate.
    math: f(x) = x^4 - 3x^2 + 5x - 6
    grade: achieved
    working:
      - math: f'(x) = 4x^3 - 6x + 5
        note: "Term by term. The $5x$ becomes $5$, and the constant becomes nothing."
  - ask: Find the gradient function.
    math: f(x) = \dfrac{x^6}{3} + \dfrac{x^2}{2} - 10
    grade: achieved
    working:
      - math: f'(x) = \dfrac{6x^5}{3} + \dfrac{2x}{2}
        note: "The fractions are coefficients, so they stay and multiply."
      - math: f'(x) = 2x^5 + x
  - ask: Find the gradient function.
    math: f(x) = \dfrac{x^4}{2} + \dfrac{x^3}{3} - 7
    grade: achieved
    working:
      - math: f'(x) = \dfrac{4x^3}{2} + \dfrac{3x^2}{3}
        note: "The fractions are coefficients, so they stay and multiply."
      - math: f'(x) = 2x^3 + x^2
```

---

## Two notations

The same operation is written two ways, and the papers use both.

When the function is named $f(x) = x^2$ its gradient function is written $f'(x)$, read *f dashed of x*. When the function is written as an equation in $y$ such as $y = x^2$, the gradient function is written $\dfrac{dy}{dx}$, read *d y by d x*.

```figure
caption: Two spellings of one operation
steps:
  - math: |
      \begin{array}{c|c}
      f(x) = x^2 & y = x^2 \\[4pt]
      f'(x) = 2x & \dfrac{dy}{dx} = 2x
      \end{array}
    note: "The left column and the right column say exactly the same thing."
```

$\dfrac{dy}{dx}$ looks like a fraction and is not one—at this level it is a single symbol, and nothing may cancel inside it. The result of differentiating, whichever way it is written, is called the **derivative**; *gradient function* and *derivative* name the same object.

---

## Expand before differentiating

The rule reaches powers of $x$ in a sum of terms, and nothing else. A product must be expanded before the rule applies, because the derivative of a product is not the product of the derivatives.

$x \cdot x$ shows why. As a product, differentiating each factor gives $1 \times 1 = 1$. But $x \cdot x$ is $x^2$, and its derivative is $2x$. The product-of-derivatives answer is wrong at every point but one.

```figure
caption: Expand, then differentiate
steps:
  - math: f(x) = (x+2)(x-5)
    note: "The rule cannot reach inside a product. Expand first."
  - math: f(x) = x^2 - 3x - 10
    note: "Now it is a sum of terms, and the rule applies to each."
  - math: f'(x) = 2x - 3
```

The standard promises polynomials *given in expanded form*, so the expanding you have to do yourself mostly arises where a question asks you to build the function—the area or volume questions of Module B. The habit belongs here all the same: the rule applies to expanded form only.

```practice
caption: expand first
questions:
  - ask: Differentiate.
    math: f(x) = (2x-1)(x+3)
    grade: merit
    working:
      - math: f(x) = 2x^2 + 5x - 3
        note: "Expand first—differentiating each bracket separately gives a wrong answer."
      - math: f'(x) = 4x + 5
  - ask: Differentiate.
    math: f(x) = (3x+2)(x-4)
    grade: merit
    working:
      - math: f(x) = 3x^2 - 10x - 8
        note: "Expand first—differentiating each bracket separately gives a wrong answer."
      - math: f'(x) = 6x - 10
  - ask: Differentiate.
    math: y = x^2(x - 6)
    grade: merit
    working:
      - math: y = x^3 - 6x^2
      - math: \dfrac{dy}{dx} = 3x^2 - 12x
  - ask: Differentiate.
    math: y = x^2(2x - 5)
    grade: merit
    working:
      - math: y = 2x^3 - 5x^2
      - math: \dfrac{dy}{dx} = 6x^2 - 10x
```

---

## The gradient at a point, by formula

To find the gradient at one point, differentiate first, then substitute the point's $x$-value **into the gradient function**.

```figure
caption: Gradient at a point
steps:
  - math: f(x) = x^3 - 2x^2 \qquad\textsf{at}\qquad x = 3
    note: "Differentiate first. The function itself will not be substituted into at all."
  - math: f'(x) = 3x^2 - 4x
  - math: f'(3) = 3(3)^2 - 4(3)
    note: "The $x$-value goes into the gradient function, inside brackets."
  - math: f'(3) = 27 - 12 = 15
    note: "At $x = 3$ the curve climbs at gradient $15$."
```

Substituting into the wrong formula is the error to guard against here. $f(3)$ is the *height* of the curve at $x = 3$; $f'(3)$ is its *steepness* there. The two numbers answer different questions, and a question about gradient wants $f'$.

The substitution itself carries the other danger. The 2025 report's not-achieved list has both *"substituted values incorrectly into the given function or derivative"* and *"misinterpreted expressions such as $-x^2$"*—the same bracket discipline as algebra: the value goes in wrapped in brackets, so that an even power squares the sign away and an odd power keeps it.

```practice
caption: gradient at a point
questions:
  - ask: Use calculus to find the gradient of the function at the point where $x = 2$.
    math: f(x) = 2x^3 - 5x^2 + 3x - 7
    grade: achieved
    from: "2024"
    working:
      - math: f'(x) = 6x^2 - 10x + 3
        note: "Differentiate the whole function before substituting anything."
      - math: f'(2) = 6(2)^2 - 10(2) + 3
      - math: f'(2) = 24 - 20 + 3 = 7
  - ask: Use calculus to find the gradient of the function at the point where $x = 2$.
    math: f(x) = 3x^3 - 4x^2 + 2x - 1
    grade: achieved
    working:
      - math: f'(x) = 9x^2 - 8x + 2
        note: "Differentiate the whole function before substituting anything."
      - math: f'(2) = 9(2)^2 - 8(2) + 2
      - math: f'(2) = 36 - 16 + 2 = 22
  - ask: Use calculus to find the gradient of the function at the point where $x = -\dfrac{1}{2}$.
    math: f(x) = 2x^3 + 3x^2 + \dfrac{x}{2} - 4
    grade: achieved
    from: "2025"
    working:
      - math: f'(x) = 6x^2 + 6x + \dfrac{1}{2}
        note: "The $\\dfrac{x}{2}$ is the term to watch—its derivative is its coefficient, $\\dfrac{1}{2}$."
      - math: f'\!\left(-\dfrac{1}{2}\right) = 6\left(-\dfrac{1}{2}\right)^2 + 6\left(-\dfrac{1}{2}\right) + \dfrac{1}{2}
        note: "Brackets around the substituted value, so the square keeps the sign right."
      - math: f'\!\left(-\dfrac{1}{2}\right) = \dfrac{3}{2} - 3 + \dfrac{1}{2} = -1
  - ask: Use calculus to find the gradient of the function at the point where $x = -\dfrac{1}{2}$.
    math: f(x) = 4x^3 + 2x^2 + \dfrac{x}{3} - 5
    grade: achieved
    working:
      - math: f'(x) = 12x^2 + 4x + \dfrac{1}{3}
        note: "The $\\dfrac{x}{3}$ is the term to watch—its derivative is its coefficient, $\\dfrac{1}{3}$."
      - math: f'\!\left(-\dfrac{1}{2}\right) = 12\left(-\dfrac{1}{2}\right)^2 + 4\left(-\dfrac{1}{2}\right) + \dfrac{1}{3}
        note: "Brackets around the substituted value, so the square keeps the sign right."
      - math: f'\!\left(-\dfrac{1}{2}\right) = 3 - 2 + \dfrac{1}{3} = \dfrac{4}{3}
```

---

## Reading the gradient function backwards

The same formula answers the reverse question: *at which point does the curve have gradient three?* Set the gradient function equal to the given gradient and solve for $x$. The 2025 report names the wrong turn candidates take here: *"substituting the gradient value into the original function"*—the given number is a gradient, so the equation it belongs in is $f'(x) = \textsf{gradient}$, and it is never an input to $f$. Where the question asks for the point rather than just the $x$-value, finish by substituting that $x$ into the original function for its $y$-value—the point sits on the curve, so its height comes from $f$, not from $f'$.

```figure
caption: From a gradient to a point
steps:
  - math: f(x) = 3x^2 - 7x - 10 \qquad\textsf{gradient} = 5
    note: "Which point on the curve has gradient $5$?"
  - math: f'(x) = 6x - 7
  - math: 6x - 7 = 5
    note: "Set the gradient function equal to the gradient being asked about."
  - math: x = 2
    note: "That locates the point along the $x$-axis. The question asked for the point, so its height is still needed."
  - math: f(2) = 3(2)^2 - 7(2) - 10 = -12
    note: "Height comes from the original function. The point is $(2, -12)$."
```

One equation used twice: $f'$ finds *where*, $f$ finds *how high*. Keeping the two jobs separate is most of the mark in this question shape.

```practice
caption: backwards
questions:
  - ask: Find the coordinates of the point on the curve where the gradient of $f(x)$ is equal to $3$.
    math: f(x) = 2x^2 - 9x - 5
    grade: achieved
    from: "2025"
    working:
      - math: f'(x) = 4x - 9 = 3
        note: "Gradient function, set equal to the gradient given."
      - math: x = 3
      - math: f(3) = 2(3)^2 - 9(3) - 5 = -14
        note: "The $y$-value comes from $f$, because the point lies on the curve."
      - math: (3, -14)
  - ask: Find the coordinates of the point on the curve where the gradient of $f(x)$ is equal to $4$.
    math: f(x) = 3x^2 - 8x + 1
    grade: achieved
    working:
      - math: f'(x) = 6x - 8 = 4
        note: "Gradient function, set equal to the gradient given."
      - math: x = 2
      - math: f(2) = 3(2)^2 - 8(2) + 1 = -3
        note: "The $y$-value comes from $f$, because the point lies on the curve."
      - math: (2, -3)
  - ask: Find the value of $a$, given that the gradient of the curve at $x = 1$ is $6$.
    math: f(x) = ax^3 - 3x^2 + 2
    grade: merit
    working:
      - math: f'(x) = 3ax^2 - 6x
        note: "$a$ is a constant, so it rides along like any coefficient."
      - math: f'(1) = 3a - 6 = 6
      - math: a = 4
  - ask: Find the value of $a$, given that the gradient of the curve at $x = 1$ is $7$.
    math: f(x) = ax^3 - 4x^2 + 1
    grade: merit
    working:
      - math: f'(x) = 3ax^2 - 8x
        note: "$a$ is a constant, so it rides along like any coefficient."
      - math: f'(1) = 3a - 8 = 7
      - math: a = 5
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Differentiate.
    math: f(x) = x^4 - 6x^2 + 11x - 3
    grade: achieved
    working:
      - math: f'(x) = 4x^3 - 12x + 11
  - ask: Differentiate.
    math: f(x) = x^4 - 5x^2 + 7x - 2
    grade: achieved
    working:
      - math: f'(x) = 4x^3 - 10x + 7
  - ask: Use calculus to find the gradient of the function at the point where $x = -1$.
    math: y = \dfrac{x^4}{2} + 3x^3 - x
    grade: achieved
    working:
      - math: \dfrac{dy}{dx} = 2x^3 + 9x^2 - 1
      - math: 2(-1)^3 + 9(-1)^2 - 1
        note: "An odd power keeps the minus; an even power loses it."
      - math: -2 + 9 - 1 = 6
  - ask: Use calculus to find the gradient of the function at the point where $x = -1$.
    math: y = \dfrac{x^4}{4} + 2x^3 - x
    grade: achieved
    working:
      - math: \dfrac{dy}{dx} = x^3 + 6x^2 - 1
      - math: (-1)^3 + 6(-1)^2 - 1
        note: "An odd power keeps the minus; an even power loses it."
      - math: -1 + 6 - 1 = 4
  - ask: Find the coordinates of the point on the curve where the gradient is $-2$.
    math: f(x) = x^2 - 8x + 3
    grade: achieved
    working:
      - math: f'(x) = 2x - 8 = -2
      - math: x = 3
      - math: f(3) = 9 - 24 + 3 = -12
      - math: (3, -12)
  - ask: Find the coordinates of the point on the curve where the gradient is $-2$.
    math: f(x) = x^2 - 6x + 5
    grade: achieved
    working:
      - math: f'(x) = 2x - 6 = -2
      - math: x = 2
      - math: f(2) = 4 - 12 + 5 = -3
      - math: (2, -3)
  - ask: Differentiate.
    math: f(x) = (x-4)(x^2+2x)
    grade: merit
    working:
      - math: f(x) = x^3 - 2x^2 - 8x
        note: "Expand before the rule can be used."
      - math: f'(x) = 3x^2 - 4x - 8
  - ask: Differentiate.
    math: f(x) = (x-3)(x^2+4x)
    grade: merit
    working:
      - math: f(x) = x^3 + x^2 - 12x
        note: "Expand before the rule can be used."
      - math: f'(x) = 3x^2 + 2x - 12
  - ask: The gradient of the curve at $x = 2$ is $17$. Find $b$.
    math: f(x) = x^3 + bx^2 + x
    grade: merit
    working:
      - math: f'(x) = 3x^2 + 2bx + 1
      - math: f'(2) = 12 + 4b + 1 = 17
      - math: b = 1
  - ask: The gradient of the curve at $x = 3$ is $41$. Find $b$.
    math: f(x) = x^3 + bx^2 + 2x
    grade: merit
    working:
      - math: f'(x) = 3x^2 + 2bx + 2
      - math: f'(3) = 27 + 6b + 2 = 41
      - math: b = 2
  - ask: Show that the gradient of the curve is smallest at $x = 0$.
    math: f(x) = x^3 + 5x
    grade: excellence
    working:
      - math: f'(x) = 3x^2 + 5
        note: "The claim is about gradients, so the working lives entirely in the gradient function."
      - math: f'(0) = 5
      - math: 3x^2 \ge 0 \;\textsf{ for every } x \textsf{, so } f'(x) \ge 5
        note: "A square is never negative, and that carries the whole argument."
      - math: \textsf{The gradient is never less than } 5 \textsf{, its value at } x=0.
  - ask: Show that the gradient of the curve is smallest at $x = 0$.
    math: f(x) = 2x^3 + 3x
    grade: excellence
    working:
      - math: f'(x) = 6x^2 + 3
        note: "The claim is about gradients, so the working lives entirely in the gradient function."
      - math: f'(0) = 3
      - math: 6x^2 \ge 0 \;\textsf{ for every } x \textsf{, so } f'(x) \ge 3
        note: "A square is never negative, and that carries the whole argument."
      - math: \textsf{The gradient is never less than } 3 \textsf{, its value at } x=0.
```

---

## Summary

The gradient of a curve at a point is the gradient of its tangent there, and the gradient function returns that number for every point at once.

The rule is on the formulae sheet: multiply by the power, lower the power by one. Coefficients stay and multiply, terms differentiate one at a time, and a constant differentiates to zero.

The rule applies to a sum of terms only, so expand any product first.

For a gradient at a point, substitute into $f'$, never into $f$: height and steepness are different numbers. For the point with a given gradient, solve $f'(x) = \textsf{gradient}$, then take the height from $f$.

The next lesson puts $f'(a)$ to work: it is the $m$ in the equation of the tangent line. The lesson after that draws the gradient function whole, as a graph beside the graph of $f$.
