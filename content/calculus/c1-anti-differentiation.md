# C1—Anti-differentiation

---

In Module A you turned functions into gradient functions. In Module C you go in the other direction. A question gives the gradient function and asks for the function it came from. You already did this by eye in the sketching lesson, and found one problem: a gradient graph cannot show how high the curve sits. In this lesson you do it by formula, and the unknown height becomes the constant $c$.

---

## Reversing the rule

The formulae sheet states the reverse rule beside the forward one.

```figure
caption: The rule, as the sheet prints it
steps:
  - math: \textsf{If } f'(x) = x^n \textsf{, then } f(x) = \dfrac{x^{n+1}}{n+1} + c
    note: "Raise the power by one, then divide by the new power. The $+\\,c$ is part of the rule, not an afterthought."
```

The operation has two names, and you will meet both. The standard calls it **anti-differentiation**, and these lessons use that name. Most textbooks also call the same operation **integration**, and use the two words interchangeably. The function that anti-differentiating gives is the **anti-derivative**.

Differentiation multiplied by the power and then lowered it. Anti-differentiation reverses both steps, in the reverse order. First the power rises by one. Then you divide by the new power, which undoes the multiplication. Apply it to $x^2$. The power rises to $3$, and you divide the term by $3$.

```figure
caption: One power of x, reversed
steps:
  - math: f'(x) = x^{\ca{2}}
    note: "Raise the power by one, divide by the new power."
  - math: f(x) = \dfrac{x^{\ca{3}}}{\ca{3}} + c
    note: "Check by differentiating the answer. The $3$ comes down and cancels the division, which gives $x^2$ again. You can check every anti-derivative this way."
```

Coefficients and terms behave exactly as they did when differentiating. A coefficient stays and multiplies, and you take terms one at a time. A constant term is a constant gradient, so it becomes that multiple of $x$. Anti-differentiating $5$ gives $5x$.

```figure
caption: A gradient function, term by term
steps:
  - math: f'(x) = 6x^2 - 4x + 5
    note: "Three terms. Take them one at a time, raising and dividing."
  - math: f(x) = \dfrac{6x^3}{3} - \dfrac{4x^2}{2} + 5x + c
    note: "Divide each term by its own new power. Simplify the fractions next."
  - math: f(x) = 2x^3 - 2x^2 + 5x + c
    note: "Differentiate this to check it. The result is $6x^2 - 4x + 5$, the gradient function you started with. Write one $c$ for the whole function, not one for each term."
```

You anti-differentiate a long gradient function the same way. Count the terms before starting, and count them again in the answer. Every term of $f'$ produces exactly one term of $f$, plus the $c$. The 2025 report lists candidates who *"missed a term when integrating long functions"*.

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
        note: "The $+\\,c$ is part of the answer. The 2025 report lists *omitted the constant of integration* among candidates not achieving."
  - ask: Find $f(x)$.
    math: f'(x) = 6x^2 - 10x + 3
    grade: achieved
    working:
      - math: f(x) = \dfrac{6x^3}{3} - \dfrac{10x^2}{2} + 3x + c
      - math: f(x) = 2x^3 - 5x^2 + 3x + c
        note: "The $+\\,c$ is part of the answer. With it, the answer stands for every curve with this gradient function, not just one."
  - ask: Find $y$.
    math: \dfrac{dy}{dx} = 3x^2 - x + 4
    grade: achieved
    working:
      - math: y = x^3 - \dfrac{x^2}{2} + 4x + c
        note: "The coefficient of the middle term is $1$, so the $2$ does not cancel and stays in the denominator."
  - ask: Find $y$.
    math: \dfrac{dy}{dx} = 4x^3 - x + 2
    grade: achieved
    working:
      - math: y = x^4 - \dfrac{x^2}{2} + 2x + c
        note: "The coefficient of the middle term is $1$, so the $2$ does not cancel and stays in the denominator."
```

---

## Why the c is there

The derivative of a constant term is zero. The $+7$ in $x^2 + 7$ does not change the gradient, so the $7$ does not appear in $f'(x) = 2x$. When you anti-differentiate $2x$, you cannot find out what the constant was. Every curve of the form $x^2 + \textsf{constant}$ has the gradient function $2x$. These curves are a **family of curves**: curves with the same shape that differ only by a vertical shift. The anti-derivative has to stand for every curve in the family. So you write $x^2 + c$, where $c$ stands for any constant.

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
    note: "Three of the curves whose gradient function is $2x$. You drew this family by eye in the sketching lesson. The value of $c$ is how far each curve is shifted up or down from $x^2$."
```

The proper name of the constant is the **constant of integration**. The name uses the word integration, even in working that says anti-differentiate. The reports use this name when they list candidates who left the $c$ out. The marking schedules treat the $c$ as part of the anti-derivative, not an optional extra. The grade step of the 2024 schedule reads *"Correct anti derivative with $+c$"*. An anti-derivative written without it is incomplete.

---

## Finding the constant

A question that asks for one particular curve gives one more fact. Usually it is a point that the curve passes through. Anti-differentiate first, with the $c$ in place. Then substitute the point, and solve for $c$, which is the only unknown left.

```figure
caption: Finding the one curve through a point
steps:
  - math: f'(x) = 3x^2 - 8x \qquad\textsf{through}\qquad (1, 2)
    note: "Anti-differentiate first, and keep the $+\\,c$. Use the point only after that."
  - math: f(x) = x^3 - 4x^2 + c
    note: "This is every curve with the given gradient function. Only one of these curves passes through $(1, 2)$."
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
        note: "A point on the $y$-axis gives the $c$ directly. In the sketching lesson you could only draw the shape of this curve. Now you have its exact equation."
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

## When the question does not give the point

The hardest version of the question does not give a point directly. Instead it describes a feature of the curve, such as *the $y$-value of the local minimum is $-40$*. You have to find the point before you can use it. The minimum is a turning point, so its $x$-coordinate is a solution of $f'(x) = 0$. So you use turning-point working inside an anti-differentiation question. The Excellence part of the 2025 paper on this topic is built this way.

```practice
caption: a point to find first
questions:
  - ask: Find the equation of the original function $f(x)$, given that the $y$-value of the local minimum is equal to $-40$.
    math: f'(x) = 2x^2 - 2x - 12
    grade: excellence
    from: "2025"
    working:
      - math: f(x) = \dfrac{2x^3}{3} - x^2 - 12x + c
        note: "Anti-differentiate first, and keep the $+\\,c$. You cannot use the $y$-value yet, because you do not know where the minimum is."
      - math: 2x^2 - 2x - 12 = 0 \qquad\Rightarrow\qquad 2(x - 3)(x + 2) = 0
        note: "The minimum is a turning point, so it sits where the gradient function is zero."
      - math: x = 3 \;\textsf{ or }\; x = -2
      - math: f''(x) = 4x - 2 \qquad f''(3) = 10 > 0 \qquad\therefore\;\textsf{minimum at } x = 3
        note: "There are two possible $x$-values. The question said *minimum*, so justify which one is the minimum rather than assume it."
      - math: f(3) = 18 - 9 - 36 + c = -40
      - math: c = -13
      - math: f(x) = \dfrac{2x^3}{3} - x^2 - 12x - 13
  - ask: Find the equation of the original function $f(x)$, given that the $y$-value of the local minimum is equal to $-50$.
    math: f'(x) = 3x^2 - 6x - 24
    grade: excellence
    working:
      - math: f(x) = x^3 - 3x^2 - 24x + c
        note: "Anti-differentiate first, and keep the $+\\,c$. You cannot use the $y$-value yet, because you do not know where the minimum is."
      - math: 3x^2 - 6x - 24 = 0 \qquad\Rightarrow\qquad 3(x - 4)(x + 2) = 0
        note: "The minimum is a turning point, so it sits where the gradient function is zero."
      - math: x = 4 \;\textsf{ or }\; x = -2
      - math: f''(x) = 6x - 6 \qquad f''(4) = 18 > 0 \qquad\therefore\;\textsf{minimum at } x = 4
        note: "There are two possible $x$-values. The question said *minimum*, so justify which one is the minimum rather than assume it."
      - math: f(4) = 64 - 48 - 96 + c = -50
      - math: c = 30
      - math: f(x) = x^3 - 3x^2 - 24x + 30
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well.

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

Anti-differentiation reverses the rule for differentiating. Raise the power by one, divide by the new power, and write $+\,c$. Keep each coefficient, and anti-differentiate one term at a time. A constant term such as $5$ becomes $5x$. You can check every answer by differentiating it.

The $c$ is there because differentiating removes any constant term. With the $c$, the anti-derivative stands for the whole family of curves that share one gradient function. These curves differ only by a vertical shift, which a gradient graph cannot show. The schedules count the anti-derivative as correct only with the $c$ written.

To find one particular curve, you need one extra fact. Substitute the given point, solve for $c$, and write the finished function. When the fact is a feature, such as the $y$-value at a minimum, find that point first. Solve $f'(x) = 0$, and justify the nature of the turning point.

The final lesson uses both directions in the one context that the standard names: distance, velocity and acceleration. In that lesson, differentiating and anti-differentiating are steps down and up a single ladder.
