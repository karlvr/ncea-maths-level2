# C1—Anti-differentiation

---

Module A turned functions into gradient functions. From here the standard runs the other way: the question gives the gradient function and wants the function it came from. The sketching lesson already went this way by eye and met the one obstacle—a gradient graph cannot say how high the curve sits. This lesson goes the same way by formula, and the obstacle becomes the constant $c$.

---

## Reversing the rule

The formulae sheet states the reverse rule beside the forward one.

```figure
caption: The rule, as the sheet prints it
steps:
  - math: \textsf{If } f'(x) = x^n \textsf{, then } f(x) = \dfrac{x^{n+1}}{n+1} + c
    note: "Raise the power by one, then divide by the new power. The $+\\,c$ is part of the rule, not an afterthought."
```

The operation has two names, and you will meet both. The standard calls it **anti-differentiation**, and these lessons follow it. Most textbooks also call the same operation **integration**, and use the two words interchangeably.

Differentiation multiplied by the power and then lowered it; coming back, the power rises first and the division undoes the multiplication that differentiating would do. Applied to $x^2$: the power rises to $3$, and the term is divided by $3$.

```figure
caption: One power of x, reversed
steps:
  - math: f'(x) = x^{\ca{2}}
    note: "Raise the power by one, divide by the new power."
  - math: f(x) = \dfrac{x^{\ca{3}}}{\ca{3}} + c
    note: "Check by differentiating the answer: the $3$ comes down, cancels the division, and $x^2$ returns. Every anti-derivative can be checked this way, and the check is free."
```

Coefficients and terms behave exactly as they did in Module A: a coefficient stays and multiplies, and terms are handled one at a time. A constant term is a constant gradient, so it becomes that multiple of $x$: anti-differentiating $5$ gives $5x$.

```figure
caption: A gradient function, term by term
steps:
  - math: f'(x) = 6x^2 - 4x + 5
    note: "Three terms. Take them one at a time, raising and dividing."
  - math: f(x) = \dfrac{6x^3}{3} - \dfrac{4x^2}{2} + 5x + c
    note: "Each new power divides its own term. Simplify the fractions before anything else happens."
  - math: f(x) = 2x^3 - 2x^2 + 5x + c
    note: "Differentiate this back: $6x^2 - 4x + 5$. Correct—and one $c$ covers the whole function, not one per term."
```

A long gradient function is anti-differentiated the same way. The 2025 report lists candidates who *"missed a term when integrating long functions"*: count the terms before starting, and count them again in the answer—every term of $f'$ produces exactly one term of $f$, plus the $c$.

```practice
caption: reversing the rule
questions:
  - ask: Anti-differentiate.
    math: f'(x) = x^3
    grade: achieved
    working:
      - math: f(x) = \dfrac{x^4}{4} + c
  - ask: Anti-differentiate.
    math: f'(x) = x^5
    grade: achieved
    working:
      - math: f(x) = \dfrac{x^6}{6} + c
  - ask: Find $f(x)$.
    math: f'(x) = 8x^3 - 6x + 1
    grade: achieved
    working:
      - math: f(x) = \dfrac{8x^4}{4} - \dfrac{6x^2}{2} + x + c
      - math: f(x) = 2x^4 - 3x^2 + x + c
        note: "The $+\\,c$ is part of the answer—the 2025 report lists *omitted the constant of integration* among candidates not achieving."
  - ask: Find $f(x)$.
    math: f'(x) = 6x^2 - 10x + 3
    grade: achieved
    working:
      - math: f(x) = \dfrac{6x^3}{3} - \dfrac{10x^2}{2} + 3x + c
      - math: f(x) = 2x^3 - 5x^2 + 3x + c
        note: "The $+\\,c$ is part of the answer, and it is what makes this a family of curves rather than one."
  - ask: Find $y$.
    math: \dfrac{dy}{dx} = 3x^2 - x + 4
    grade: achieved
    working:
      - math: y = x^3 - \dfrac{x^2}{2} + 4x + c
        note: "The middle term's coefficient is $1$, so the division by $2$ simply stays."
  - ask: Find $y$.
    math: \dfrac{dy}{dx} = 4x^3 - x + 2
    grade: achieved
    working:
      - math: y = x^4 - \dfrac{x^2}{2} + 2x + c
        note: "The middle term's coefficient is $1$, so the division by $2$ simply stays."
```

---

## Why the c is there

Differentiating erases constants: the $+7$ in $x^2 + 7$ contributes no gradient, so $f'(x) = 2x$ carries no trace of it. Coming back, the erased constant cannot be recovered: every curve of the form $x^2 + \textsf{constant}$ has the gradient function $2x$, and the anti-derivative has to stand for all of them at once. The $c$ is how it does.

```figure
caption: One gradient function, a family of curves
steps:
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [1, 0, 2]
          dashed: true
        - poly: [1, 0, 0]
          color: a
        - poly: [1, 0, -2]
          dashed: true
    note: "Three of the curves whose gradient function is $2x$. The sketching lesson met this family by eye; $+\\,c$ is the same freedom written as algebra."
```

The constant's proper name is the **constant of integration**—it keeps the operation's other word even when the working around it says anti-differentiate, and it is the name the reports use when they list its omission. The marking schedules treat the $c$ as part of the anti-derivative, not a refinement of it—the 2024 schedule's grade step reads *"Correct anti derivative with $+c$"*. An anti-derivative written without it is incomplete.

---

## Finding the constant

A question that wants one particular curve supplies one more fact—usually a point the curve passes through. Anti-differentiate first, with the $c$ in place; then substitute the point, and the $c$ is the only unknown left.

```figure
caption: Pinning down the curve
steps:
  - math: f'(x) = 3x^2 - 8x \qquad\textsf{through}\qquad (1, 2)
    note: "First the family, then the member."
  - math: f(x) = x^3 - 4x^2 + c
    note: "The whole family. The point picks one curve out of it."
  - math: f(1) = 1 - 4 + c = 2
    note: "The curve passes through $(1, 2)$, so substituting $x = 1$ must give $2$."
  - math: c = 5
  - math: f(x) = x^3 - 4x^2 + 5
    note: "The finished function, written out whole."
```

```practice
caption: finding the constant
questions:
  - ask: The graph of $f(x)$ passes through the point $(2, 25)$. Find the equation of the function $f$.
    math: f'(x) = 12 - 6x + 6x^2
    grade: merit
    from: "2024"
    working:
      - math: f(x) = 12x - 3x^2 + 2x^3 + c
        note: "Anti-differentiate every term, and carry the $c$ from this line onwards."
      - math: f(2) = 24 - 12 + 16 + c = 25
      - math: c = -3
      - math: f(x) = 12x - 3x^2 + 2x^3 - 3
  - ask: The graph of $f(x)$ passes through the point $(2, 25)$. Find the equation of the function $f$.
    math: f'(x) = 10 - 4x + 3x^2
    grade: merit
    working:
      - math: f(x) = 10x - 2x^2 + x^3 + c
        note: "Anti-differentiate every term, and carry the $c$ from this line onwards."
      - math: f(2) = 20 - 8 + 8 + c = 25
      - math: c = 5
      - math: f(x) = 10x - 2x^2 + x^3 + 5
  - ask: The graph of $f(x)$ passes through $(2, 3)$. Find the equation of the function $f$.
    math: f'(x) = 2x^3 - 6x^2 + 4x - 1
    grade: merit
    from: "2025"
    working:
      - math: f(x) = \dfrac{x^4}{2} - 2x^3 + 2x^2 - x + c
        note: "$\\dfrac{2x^4}{4}$ simplifies to $\\dfrac{x^4}{2}$."
      - math: f(2) = 8 - 16 + 8 - 2 + c = 3
      - math: c = 5
      - math: f(x) = \dfrac{x^4}{2} - 2x^3 + 2x^2 - x + 5
  - ask: The graph of $f(x)$ passes through $(2, 5)$. Find the equation of the function $f$.
    math: f'(x) = 4x^3 - 6x^2 + 2x - 1
    grade: merit
    working:
      - math: f(x) = x^4 - 2x^3 + x^2 - x + c
        note: "$\\dfrac{4x^4}{4}$ simplifies to $x^4$."
      - math: f(2) = 16 - 16 + 4 - 2 + c = 5
      - math: c = 3
      - math: f(x) = x^4 - 2x^3 + x^2 - x + 3
  - ask: The gradient function of a curve is $f'(x) = x - 2$, and the curve passes through $(0, 1)$. Find the equation of the curve.
    grade: merit
    working:
      - math: f(x) = \dfrac{x^2}{2} - 2x + c
      - math: f(0) = c = 1
        note: "A point on the $y$-axis gives the $c$ directly. This is the curve the sketching lesson could only draw the shape of, now answered exactly."
      - math: f(x) = \dfrac{x^2}{2} - 2x + 1
  - ask: The gradient function of a curve is $f'(x) = x + 3$, and the curve passes through $(0, 4)$. Find the equation of the curve.
    grade: merit
    working:
      - math: f(x) = \dfrac{x^2}{2} + 3x + c
      - math: f(0) = c = 4
        note: "A point on the $y$-axis gives the $c$ directly."
      - math: f(x) = \dfrac{x^2}{2} + 3x + 4
```

---

## When the point is hidden

The hardest version gives no point directly. Instead it names a feature—*the $y$-value of the local minimum is $-40$*—and the point has to be found before it can be used. The minimum is a turning point, so its $x$ solves $f'(x) = 0$; that is Module B working inside a Module C question, and it is how the 2025 paper built its Excellence part on this topic.

```practice
caption: a hidden point
questions:
  - ask: Find the equation of the original function $f(x)$, given that the $y$-value of the local minimum is equal to $-40$.
    math: f'(x) = 2x^2 - 2x - 12
    grade: excellence
    from: "2025"
    working:
      - math: f(x) = \dfrac{2x^3}{3} - x^2 - 12x + c
        note: "The family first. The given $y$-value belongs to a point not yet located."
      - math: 2x^2 - 2x - 12 = 0 \qquad\Rightarrow\qquad 2(x - 3)(x + 2) = 0
        note: "The minimum is a turning point, so it sits where the gradient function is zero."
      - math: x = 3 \;\textsf{ or }\; x = -2
      - math: f''(x) = 4x - 2 \qquad f''(3) = 10 > 0 \qquad\therefore\;\textsf{minimum at } x = 3
        note: "Two candidates, and the question said *minimum*, so the choice is justified, not assumed."
      - math: f(3) = 18 - 9 - 36 + c = -40
      - math: c = -13
      - math: f(x) = \dfrac{2x^3}{3} - x^2 - 12x - 13
  - ask: Find the equation of the original function $f(x)$, given that the $y$-value of the local minimum is equal to $-50$.
    math: f'(x) = 3x^2 - 6x - 24
    grade: excellence
    working:
      - math: f(x) = x^3 - 3x^2 - 24x + c
        note: "The family first. The given $y$-value belongs to a point not yet located."
      - math: 3x^2 - 6x - 24 = 0 \qquad\Rightarrow\qquad 3(x - 4)(x + 2) = 0
        note: "The minimum is a turning point, so it sits where the gradient function is zero."
      - math: x = 4 \;\textsf{ or }\; x = -2
      - math: f''(x) = 6x - 6 \qquad f''(4) = 18 > 0 \qquad\therefore\;\textsf{minimum at } x = 4
        note: "Two candidates, and the question said *minimum*, so the choice is justified, not assumed."
      - math: f(4) = 64 - 48 - 96 + c = -50
      - math: c = 30
      - math: f(x) = x^3 - 3x^2 - 24x + 30
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Find $f(x)$.
    math: f'(x) = 4x - 7
    grade: achieved
    working:
      - math: f(x) = 2x^2 - 7x + c
  - ask: Find $f(x)$.
    math: f'(x) = 6x - 5
    grade: achieved
    working:
      - math: f(x) = 3x^2 - 5x + c
  - ask: Find $y$.
    math: \dfrac{dy}{dx} = x^2 - \dfrac{x}{2} + 3
    grade: achieved
    working:
      - math: y = \dfrac{x^3}{3} - \dfrac{x^2}{4} + 3x + c
        note: "The middle term is $\\dfrac{1}{2} \\cdot \\dfrac{x^2}{2}$, which is $\\dfrac{x^2}{4}$."
  - ask: Find $y$.
    math: \dfrac{dy}{dx} = x^2 - \dfrac{x}{3} + 2
    grade: achieved
    working:
      - math: y = \dfrac{x^3}{3} - \dfrac{x^2}{6} + 2x + c
        note: "The middle term is $\\dfrac{1}{3} \\cdot \\dfrac{x^2}{2}$, which is $\\dfrac{x^2}{6}$."
  - ask: The curve passes through $(3, 10)$. Find the equation of the curve.
    math: \dfrac{dy}{dx} = 2x - 5
    grade: merit
    working:
      - math: y = x^2 - 5x + c
      - math: 9 - 15 + c = 10
      - math: c = 16
      - math: y = x^2 - 5x + 16
  - ask: The curve passes through $(2, 7)$. Find the equation of the curve.
    math: \dfrac{dy}{dx} = 2x - 3
    grade: merit
    working:
      - math: y = x^2 - 3x + c
      - math: 4 - 6 + c = 7
      - math: c = 9
      - math: y = x^2 - 3x + 9
  - ask: The curve meets the $x$-axis at $x = 1$. Find the equation of the curve.
    math: f'(x) = 3x^2 + 4x
    grade: merit
    working:
      - math: f(x) = x^3 + 2x^2 + c
      - math: f(1) = 1 + 2 + c = 0
        note: "Meeting the $x$-axis at $x = 1$ is the point $(1, 0)$, worded without brackets."
      - math: c = -3
      - math: f(x) = x^3 + 2x^2 - 3
  - ask: The curve meets the $x$-axis at $x = 2$. Find the equation of the curve.
    math: f'(x) = 3x^2 + 2x
    grade: merit
    working:
      - math: f(x) = x^3 + x^2 + c
      - math: f(2) = 8 + 4 + c = 0
        note: "Meeting the $x$-axis at $x = 2$ is the point $(2, 0)$, worded without brackets."
      - math: c = -12
      - math: f(x) = x^3 + x^2 - 12
  - ask: The $y$-value of the local maximum of $f$ is $7$. Find the equation of the function $f(x)$.
    math: f'(x) = 3x^2 - 6x
    grade: excellence
    working:
      - math: f(x) = x^3 - 3x^2 + c
      - math: 3x^2 - 6x = 0 \qquad\Rightarrow\qquad 3x(x - 2) = 0
      - math: x = 0 \;\textsf{ or }\; x = 2
      - math: f''(x) = 6x - 6 \qquad f''(0) = -6 < 0 \qquad\therefore\;\textsf{maximum at } x = 0
      - math: f(0) = c = 7
      - math: f(x) = x^3 - 3x^2 + 7
  - ask: The $y$-value of the local maximum of $f$ is $12$. Find the equation of the function $f(x)$.
    math: f'(x) = 3x^2 - 12x
    grade: excellence
    working:
      - math: f(x) = x^3 - 6x^2 + c
      - math: 3x^2 - 12x = 0 \qquad\Rightarrow\qquad 3x(x - 4) = 0
      - math: x = 0 \;\textsf{ or }\; x = 4
      - math: f''(x) = 6x - 12 \qquad f''(0) = -12 < 0 \qquad\therefore\;\textsf{maximum at } x = 0
      - math: f(0) = c = 12
      - math: f(x) = x^3 - 6x^2 + 12
```

---

## Summary

Anti-differentiation reverses the rule: raise the power by one, divide by the new power, and write $+\,c$. Coefficients stay, terms go one at a time, and a constant gradient becomes a multiple of $x$. Every answer can be checked by differentiating it back.

The $c$ stands for the whole family of curves sharing one gradient function—the vertical freedom the sketching lesson found. The schedules count the anti-derivative as correct only with the $c$ written.

One extra fact picks out one curve: substitute the given point, solve for $c$, and write the finished function. When the fact is a feature—the value at a minimum—locate the feature first with $f'(x) = 0$ and a justification of its nature.

The final lesson takes both directions of the whole subject into the one context the standard names outright: distance, velocity and acceleration, where differentiating and anti-differentiating are steps down and up a single ladder.
