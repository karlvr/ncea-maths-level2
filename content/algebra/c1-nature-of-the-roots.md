# C1—The nature of the roots

---

A quadratic equation has two roots, or one, or none. Which of the three it is can be settled without solving the equation, from a single number calculated out of $a$, $b$ and $c$.

That number is the **discriminant**. It is written $\Delta$, it equals $b^2 - 4ac$, and it is on the formulae sheet beside the quadratic formula it comes out of.

This is the whole of Module C. It is one idea, and the examination spends most of its time running it backwards—stating how many roots there are and asking for a coefficient.

---

## Where the discriminant comes from

The quadratic formula is $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$. Everything in it is fixed once $a$, $b$ and $c$ are known, and the only part whose behaviour changes is what sits under the square root sign.

```figure
id: c1-from-the-formula
caption: What decides the number of roots
steps:
  - math: x = \dfrac{-b \pm \sqrt{\ca{b^2 - 4ac}}}{2a}
    note: The rest of the formula is arithmetic. Only the part under the root sign can change what happens.
  - math: \ca{b^2 - 4ac} > 0
    note: A positive number has a real square root, and the plus-or-minus adds and subtracts it—two different answers.
  - math: \ca{b^2 - 4ac} = 0
    note: The square root is zero, so adding and subtracting it give the same thing—one answer.
  - math: \ca{b^2 - 4ac} < 0
    note: No real number squares to give a negative, so the formula produces nothing.
```

The discriminant is therefore not a rule to be memorised separately. It is the part of the quadratic formula that decides how many values the plus-or-minus can produce, and a forgotten discriminant can be recovered by writing out the formula and looking under the root sign.

---

## The three cases

Three signs, and each one names a different answer to the question of how many roots there are.

```figure
caption: What the discriminant tells you
steps:
  - math: |
      \begin{array}{c|l}
      \Delta > 0 & \textsf{two distinct real roots} \\[4pt]
      \hline \\[-6pt]
      \Delta = 0 & \textsf{one repeated root} \\[4pt]
      \hline \\[-6pt]
      \Delta < 0 & \textsf{no real roots}
      \end{array}
    note: A repeated root is also called an equal root or a double root. All three names mean $\Delta = 0$.
```

Take the equation to $ax^2 + bx + c = 0$ before reading off the three coefficients, and carry the signs across with them.

```figure
id: c1-calculating
caption: Calculating a discriminant
steps:
  - math: 3x^2 + 4 = 7x
    note: Not yet in standard form, so the coefficients cannot be read off it.
  - math: 3x^2 - 7x + 4 = 0
    note: Now $a=3$, $b=-7$ and $c=4$.
  - math: \Delta = (\ca{-7})^2 - 4(3)(4)
    note: Each coefficient is substituted inside brackets, so the minus is squared along with the seven.
  - math: \Delta = 49 - 48 = 1
    note: Positive, so the equation has two distinct real roots.
```

Squaring $-7$ without the bracket gives $-49$, which turns a positive discriminant into a negative one and reverses the answer. The 2025 examiner's report gives dealing incorrectly with negative numbers and substituting incorrectly as separate reasons candidates did not achieve.

```practice
caption: calculating a discriminant
questions:
  - ask: Calculate the discriminant.
    math: 2x^2 + 7 = 9x
    grade: achieved
    working:
      - math: 2x^2 - 9x + 7 = 0
        note: Standard form first, or the coefficients will be wrong.
      - math: \Delta = (-9)^2 - 4(2)(7)
      - math: \Delta = 81 - 56 = 25
  - ask: Calculate the discriminant.
    math: 3x^2 + 4 = 8x
    grade: achieved
    working:
      - math: 3x^2 - 8x + 4 = 0
        note: Standard form first, or the coefficients will be wrong.
      - math: \Delta = (-8)^2 - 4(3)(4)
      - math: \Delta = 64 - 48 = 16
  - ask: Calculate the discriminant, and state the number of real roots.
    math: x^2 - 4x + 7 = 0
    grade: achieved
    working:
      - math: \Delta = (-4)^2 - 4(1)(7)
      - math: \Delta = 16 - 28 = -12
      - math: \textsf{no real roots}
        note: The question asked for two things, so both are written down.
  - ask: Calculate the discriminant, and state the number of real roots.
    math: x^2 - 6x + 11 = 0
    grade: achieved
    working:
      - math: \Delta = (-6)^2 - 4(1)(11)
      - math: \Delta = 36 - 44 = -8
      - math: \textsf{no real roots}
        note: The question asked for two things, so both are written down.
  - ask: Calculate the discriminant, and state the number of real roots.
    math: 4x^2 - 12x + 9 = 0
    grade: achieved
    working:
      - math: \Delta = (-12)^2 - 4(4)(9)
      - math: \Delta = 144 - 144 = 0
      - math: \textsf{one repeated root}
        note: The expression is a perfect square, $(2x-3)^2$, which is what a zero discriminant means.
  - ask: Calculate the discriminant, and state the number of real roots.
    math: 9x^2 - 24x + 16 = 0
    grade: achieved
    working:
      - math: \Delta = (-24)^2 - 4(9)(16)
      - math: \Delta = 576 - 576 = 0
      - math: \textsf{one repeated root}
        note: The expression is a perfect square, $(3x-4)^2$, which is what a zero discriminant means.
```

---

## What it looks like on a graph

The roots of $ax^2 + bx + c = 0$ are the values of $x$ at which the graph of $y = ax^2 + bx + c$ meets the $x$-axis, because meeting that axis is what $y = 0$ describes.

```figure
caption: The three cases as three graphs
steps:
  - math: |
      \begin{array}{c|l}
      \Delta > 0 & \textsf{crosses the } x\textsf{-axis twice} \\[4pt]
      \hline \\[-6pt]
      \Delta = 0 & \textsf{touches it once, at the vertex} \\[4pt]
      \hline \\[-6pt]
      \Delta < 0 & \textsf{never meets it}
      \end{array}
    note: A parabola with no real roots lies entirely above the axis or entirely below it.
```

A question that says the graph *does not cross the $x$-axis*, or *has no real solutions*, or *never equals zero*, is a discriminant question written in other words. So is one that says a line is a **tangent** to a curve: substituting the line into the curve gives a quadratic, and touching at exactly one point means that quadratic has one repeated root.

The wording decides whether you need an equation or an inequality. *Exactly one root* gives $\Delta = 0$. *No real roots* gives $\Delta < 0$. *Two distinct roots* gives $\Delta > 0$. *At least one root* gives $\Delta \geq 0$.

---

## What the discriminant says about the kind of root

The specification says candidates may be required to understand the meaning of rational numbers in regard to the roots of an equation, and the discriminant is where that is decided.

When $\Delta$ is a perfect square, its square root is a whole number, so both roots come out as one whole number divided by another. Both roots are rational, and the quadratic factorises with whole numbers in the brackets.

When $\Delta$ is positive but not a perfect square, its square root is a surd. The roots are irrational, and no factorisation with whole numbers exists.

```figure
id: c1-rational
caption: Whether the roots are rational
steps:
  - math: 2x^2 - 9x + 7 = 0 \qquad \Delta = 25
    note: Twenty-five is a perfect square.
  - math: x = \dfrac{9 \pm \ca{5}}{4}
    note: The square root is a whole number, so both roots are whole numbers over four.
  - math: x = \dfrac{7}{2} \quad\textsf{or}\quad x = 1
    note: Both rational, and the equation therefore factorises as $(2x-7)(x-1) = 0$.
  - math: 2x^2 - 9x + 5 = 0 \qquad \Delta = 41
    note: Forty-one is not a perfect square.
  - math: x = \dfrac{9 \pm \sqrt{41}}{4}
    note: Both roots carry a surd, so no pair of whole-number brackets produces this equation.
```

So the discriminant also answers *will this factorise?*, which is worth a few seconds before beginning a search that cannot succeed.

```practice
caption: what kind of roots
questions:
  - ask: Use the discriminant to decide whether the equation factorises with whole numbers.
    math: 3x^2 + 5x - 2 = 0
    grade: achieved
    working:
      - math: \Delta = 5^2 - 4(3)(-2) = 25 + 24 = 49
        note: The $c$ is negative, so $-4ac$ adds.
      - math: \textsf{a perfect square, so it factorises}
        note: Forty-nine is $7^2$. The factorisation is $(3x-1)(x+2)$.
  - ask: Use the discriminant to decide whether the equation factorises with whole numbers.
    math: 2x^2 + 7x - 4 = 0
    grade: achieved
    working:
      - math: \Delta = 7^2 - 4(2)(-4) = 49 + 32 = 81
        note: The $c$ is negative, so $-4ac$ adds.
      - math: \textsf{a perfect square, so it factorises}
        note: Eighty-one is $9^2$. The factorisation is $(2x-1)(x+4)$.
  - ask: Use the discriminant to decide whether the equation factorises with whole numbers.
    math: x^2 + 6x + 7 = 0
    grade: achieved
    working:
      - math: \Delta = 36 - 28 = 8
        note: Positive, so there are two roots.
      - math: \textsf{not a perfect square, so it does not factorise}
        note: Two roots exist, but both are irrational and only the formula will produce them.
  - ask: Use the discriminant to decide whether the equation factorises with whole numbers.
    math: x^2 + 8x + 11 = 0
    grade: achieved
    working:
      - math: \Delta = 64 - 44 = 20
        note: Positive, so there are two roots.
      - math: \textsf{not a perfect square, so it does not factorise}
        note: Two roots exist, but both are irrational and only the formula will produce them.
```

---

## Working backwards

The examination more often gives the number of roots and asks for an unknown coefficient. Calculate the discriminant with the unknown still in it, then set it equal to zero, or greater than zero, or less than zero, according to what the question said. Solving what remains is B1 and B2 work.

```figure
id: c1-backwards
caption: From a stated number of roots to a coefficient
steps:
  - math: x^2 + kx + 9 = 0 \quad\textsf{has one repeated root}
    note: One repeated root means the discriminant is zero.
  - math: \Delta = k^2 - 4(1)(9)
    note: The unknown coefficient goes into the discriminant like any other.
  - math: k^2 - 36 = 0
    note: An equation in $k$, and it is itself a quadratic.
  - math: k = 6 \quad\textsf{or}\quad k = -6
    note: Two values, and both are answers. Giving only the positive one is a common way to lose half the marks.
```

The equation in $k$ is solved by the methods of B2, and its own discriminant is of no interest—it is a quadratic like any other, and the discriminant belonged to the original equation in $x$.

An inequality is handled the same way, with one extra care: multiplying or dividing an inequality by a negative number reverses it.

```figure
caption: When the wording gives an inequality
steps:
  - math: y = 3x^2 + 12x + p \quad\textsf{does not cross the } x\textsf{-axis}
    note: Never meeting the axis means there are no real roots.
  - math: 12^2 - 4(3)(p) < 0
    note: No real roots is $\Delta < 0$, so an inequality replaces the equals sign.
  - math: 144 - 12p < 0
  - math: 144 < 12p
    note: Adding $12p$ to both sides keeps the inequality pointing the same way.
  - math: p > 12
```

Collecting the unknown on the side that leaves its coefficient positive, as above, avoids the reversal altogether. Dividing by a negative coefficient instead reaches the same answer, provided the sign is turned.

```figure
caption: Dividing an inequality by a negative
steps:
  - math: 144 - 12p < 0
    note: The same inequality, taken the other way.
  - math: -12p < -144
    note: Subtract $144$ from both sides, which leaves a negative coefficient on the $p$.
  - math: p > 12
    note: Dividing both sides by $-12$ reverses the inequality, and the answer matches the one above.
```

Where the unknown is the coefficient of $x^2$, one more case has to be checked. If that coefficient can be zero, the equation is not a quadratic at all, it has no discriminant, and it is treated separately.

```practice
caption: working backwards
questions:
  - ask: Find the values of $k$ for which the equation has one repeated root.
    math: x^2 + (k-1)x + 4 = 0
    grade: merit
    working:
      - math: (k-1)^2 - 4(1)(4) = 0
        note: One repeated root, so the discriminant is set to zero. The whole of $k-1$ is the $b$.
      - math: (k-1)^2 = 16
      - math: k - 1 = \pm 4
        note: A square root gives two values, which is where the second answer comes from.
      - math: k = 5 \quad\textsf{or}\quad k = -3
  - ask: Find the values of $k$ for which the equation has one repeated root.
    math: x^2 + (k-2)x + 9 = 0
    grade: merit
    working:
      - math: (k-2)^2 - 4(1)(9) = 0
        note: One repeated root, so the discriminant is set to zero. The whole of $k-2$ is the $b$.
      - math: (k-2)^2 = 36
      - math: k - 2 = \pm 6
        note: A square root gives two values, which is where the second answer comes from.
      - math: k = 8 \quad\textsf{or}\quad k = -4
  - ask: The graph does not cross the $x$-axis. Find the possible values of $p$.
    math: y = 5x^2 + 10x + p
    grade: merit
    from: "2023"
    working:
      - math: 100 - 20p < 0
        note: Not crossing the axis means no real roots, so the discriminant is negative.
      - math: 100 < 20p
      - math: p > 5
        note: An inequality, not a single value. The answer is every $p$ above five.
  - ask: The graph does not cross the $x$-axis. Find the possible values of $p$.
    math: y = 3x^2 + 12x + p
    grade: merit
    working:
      - math: 144 - 12p < 0
        note: Not crossing the axis means no real roots, so the discriminant is negative.
      - math: 144 < 12p
      - math: p > 12
        note: An inequality, not a single value. The answer is every $p$ above twelve.
  - ask: Find the values of $k$ for which the equation has two distinct real roots.
    math: kx^2 + 6x + 3 = 0
    grade: excellence
    working:
      - math: 6^2 - 4(k)(3) > 0
        note: Two distinct roots, so the discriminant is positive.
      - math: 36 - 12k > 0
      - math: k < 3
      - math: k < 3 \textsf{ and } k \ne 0
        note: At $k=0$ the equation is linear rather than quadratic, so it is excluded separately.
  - ask: Find the values of $k$ for which the equation has two distinct real roots.
    math: kx^2 + 8x + 2 = 0
    grade: excellence
    working:
      - math: 8^2 - 4(k)(2) > 0
        note: Two distinct roots, so the discriminant is positive.
      - math: 64 - 8k > 0
      - math: k < 8
      - math: k < 8 \textsf{ and } k \ne 0
        note: At $k=0$ the equation is linear rather than quadratic, so it is excluded separately.
```

---

## One solution to a pair of equations

A line and a curve given together are a pair of simultaneous equations, and B1 solved such a pair by substituting one into the other. When the curve is a quadratic, that substitution leaves a quadratic equation, and the number of solutions the pair has is the number of roots that quadratic has.

So a question saying there is **only one solution** is saying $\Delta = 0$.

```figure
id: c1-simultaneous
caption: One solution means one repeated root
steps:
  - math: y - 3x = 12 \qquad x^2 + 2ky = 15k
    note: A line and a curve, with a constant $k$ in the curve.
  - math: y = 3x + 12
    note: Rearrange the line, so that one unknown can be substituted into the other equation.
  - math: x^2 + 2k(3x + 12) = 15k
    note: Substitute it into the curve, which leaves an equation in $x$ alone.
  - math: x^2 + 6kx + 9k = 0
    note: Expand and collect. Twenty-four $k$ less fifteen $k$ leaves nine $k$.
  - math: (6k)^2 - 4(1)(9k) = 0
    note: Only one solution, so this quadratic has one repeated root.
  - math: 36k(k - 1) = 0 \;\Rightarrow\; k = 1
    note: The value $k=0$ also satisfies it, and the question rules it out by calling $k$ non-zero.
```

Finding $k$ is usually half the question. Putting it back gives the quadratic that has the repeated root, and solving that gives the point where the line and the curve meet.

```figure
caption: Finding the solution itself
steps:
  - math: x^2 + 6(1)x + 9(1) = 0
    note: Substitute the value of $k$ back into the quadratic it came from.
  - math: (x + 3)^2 = 0
    note: A perfect square, which is what a repeated root always produces.
  - math: x = -3
  - math: y = 3(-3) + 12 = 3
    note: Put the value back into the line, which is the simpler of the two equations.
  - math: (-3, \; 3)
```

```practice
caption: one solution to a pair
questions:
  - ask: Find the value of $c$ for which the line is a tangent to the curve.
    math: y = 2x + c \qquad y = x^2
    grade: merit
    working:
      - math: x^2 = 2x + c
        note: A tangent touches at exactly one point, so the pair has one solution.
      - math: x^2 - 2x - c = 0
        note: Everything to one side before the discriminant is calculated.
      - math: (-2)^2 - 4(1)(-c) = 0
      - math: 4 + 4c = 0 \;\Rightarrow\; c = -1
  - ask: Find the value of $c$ for which the line is a tangent to the curve.
    math: y = 4x + c \qquad y = x^2
    grade: merit
    working:
      - math: x^2 = 4x + c
        note: A tangent touches at exactly one point, so the pair has one solution.
      - math: x^2 - 4x - c = 0
        note: Everything to one side before the discriminant is calculated.
      - math: (-4)^2 - 4(1)(-c) = 0
      - math: 16 + 4c = 0 \;\Rightarrow\; c = -4
  - ask: The values of $x$ and $y$ satisfy both equations, where $k$ is a non-zero constant. Given that there is only one solution, find the value of $k$ and then find the solution.
    math: y - 4x = 20 \qquad x^2 + 2ky = 24k
    grade: excellence
    from: "2025"
    working:
      - math: y = 4x + 20
        note: Rearrange the linear equation, because it is the easier of the two to substitute from.
      - math: x^2 + 2k(4x + 20) = 24k
      - math: x^2 + 8kx + 16k = 0
        note: Forty $k$ less twenty-four $k$ leaves sixteen $k$.
      - math: (8k)^2 - 4(1)(16k) = 0
        note: Only one solution, so the discriminant of this quadratic is zero.
      - math: 64k^2 - 64k = 0 \;\Rightarrow\; 64k(k-1) = 0
      - math: k = 1
        note: $k$ is given as non-zero, so the other root of this equation is discarded.
      - math: x^2 + 8x + 16 = 0 \;\Rightarrow\; (x+4)^2 = 0
        note: Substitute $k$ back to get the quadratic whose repeated root is the solution.
      - math: (-4, \; 4)
        note: $x = -4$, and the line gives $y = 4(-4) + 20 = 4$.
  - ask: The values of $x$ and $y$ satisfy both equations, where $k$ is a non-zero constant. Given that there is only one solution, find the value of $k$ and then find the solution.
    math: y - 3x = 12 \qquad x^2 + 2ky = 18k
    grade: excellence
    working:
      - math: y = 3x + 12
        note: Rearrange the linear equation, because it is the easier of the two to substitute from.
      - math: x^2 + 2k(3x + 12) = 18k
      - math: x^2 + 6kx + 6k = 0
        note: Twenty-four $k$ less eighteen $k$ leaves six $k$.
      - math: (6k)^2 - 4(1)(6k) = 0
        note: Only one solution, so the discriminant of this quadratic is zero.
      - math: 36k^2 - 24k = 0 \;\Rightarrow\; 12k(3k-2) = 0
      - math: k = \dfrac{2}{3}
        note: $k$ is given as non-zero, so the other root of this equation is discarded.
      - math: x^2 + 4x + 4 = 0 \;\Rightarrow\; (x+2)^2 = 0
        note: Substitute $k$ back to get the quadratic whose repeated root is the solution.
      - math: (-2, \; 6)
        note: $x = -2$, and the line gives $y = 3(-2) + 12 = 6$.
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Find the discriminant of the quadratic equation.
    math: 4x^2 + 3 = 8x
    grade: achieved
    from: "2024"
    working:
      - math: 4x^2 - 8x + 3 = 0
        note: The instruction says find the discriminant, so the equation is not to be solved.
      - math: \Delta = (-8)^2 - 4(4)(3)
      - math: \Delta = 16
  - ask: Find the discriminant of the quadratic equation.
    math: 2x^2 + 5 = 12x
    grade: achieved
    working:
      - math: 2x^2 - 12x + 5 = 0
        note: The instruction says find the discriminant, so the equation is not to be solved.
      - math: \Delta = (-12)^2 - 4(2)(5)
      - math: \Delta = 104
  - ask: State the number of real roots.
    math: x^2 + 2x + 5 = 0
    grade: achieved
    working:
      - math: \Delta = 4 - 20 = -16
      - math: \textsf{no real roots}
  - ask: State the number of real roots.
    math: x^2 + 4x + 9 = 0
    grade: achieved
    working:
      - math: \Delta = 16 - 36 = -20
      - math: \textsf{no real roots}
  - ask: Find the values of $m$ for which the equation has equal roots.
    math: x^2 - mx + 16 = 0
    grade: merit
    working:
      - math: (-m)^2 - 4(1)(16) = 0
        note: Equal roots is another name for one repeated root, so the discriminant is zero.
      - math: m^2 = 64
      - math: m = 8 \quad\textsf{or}\quad m = -8
        note: Squaring $-m$ gives $m^2$, so both signs come back at the end.
  - ask: Find the values of $m$ for which the equation has equal roots.
    math: x^2 - mx + 25 = 0
    grade: merit
    working:
      - math: (-m)^2 - 4(1)(25) = 0
        note: Equal roots is another name for one repeated root, so the discriminant is zero.
      - math: m^2 = 100
      - math: m = 10 \quad\textsf{or}\quad m = -10
        note: Squaring $-m$ gives $m^2$, so both signs come back at the end.
  - ask: Show that the equation has two distinct real roots for every non-zero value of $k$.
    math: x^2 + kx - k^2 = 0
    grade: merit
    working:
      - math: \Delta = k^2 - 4(1)(-k^2)
        note: Subtracting a negative adds, so both terms end up positive.
      - math: \Delta = k^2 + 4k^2 = 5k^2
      - math: 5k^2 > 0 \textsf{ for every } k \ne 0
        note: A square is never negative, so the discriminant is positive whenever $k$ is not zero.
  - ask: Show that the equation has two distinct real roots for every non-zero value of $k$.
    math: x^2 + 3kx - k^2 = 0
    grade: merit
    working:
      - math: \Delta = (3k)^2 - 4(1)(-k^2)
        note: The bracket matters, because the $3$ is squared along with the $k$.
      - math: \Delta = 9k^2 + 4k^2 = 13k^2
      - math: 13k^2 > 0 \textsf{ for every } k \ne 0
        note: A square is never negative, so the discriminant is positive whenever $k$ is not zero.
  - ask: The parabola touches the $x$-axis at exactly one point, and passes through $(0, 9)$. Find the two possible equations of the parabola.
    math: y = x^2 + bx + c
    grade: excellence
    working:
      - math: 9 = 0 + 0 + c \;\Rightarrow\; c = 9
        note: Passing through $(0,9)$ fixes the constant, because the other two terms vanish at $x=0$.
      - math: b^2 - 4(1)(9) = 0
        note: Touching at exactly one point means one repeated root.
      - math: b^2 = 36 \;\Rightarrow\; b = 6 \quad\textsf{or}\quad b = -6
      - math: y = x^2 + 6x + 9 \quad\textsf{or}\quad y = x^2 - 6x + 9
        note: Two parabolas satisfy both conditions, touching the axis at $-3$ and at $3$.
  - ask: The parabola touches the $x$-axis at exactly one point, and passes through $(0, 25)$. Find the two possible equations of the parabola.
    math: y = x^2 + bx + c
    grade: excellence
    working:
      - math: 25 = 0 + 0 + c \;\Rightarrow\; c = 25
        note: Passing through $(0,25)$ fixes the constant, because the other two terms vanish at $x=0$.
      - math: b^2 - 4(1)(25) = 0
        note: Touching at exactly one point means one repeated root.
      - math: b^2 = 100 \;\Rightarrow\; b = 10 \quad\textsf{or}\quad b = -10
      - math: y = x^2 + 10x + 25 \quad\textsf{or}\quad y = x^2 - 10x + 25
        note: Two parabolas satisfy both conditions, touching the axis at $-5$ and at $5$.
```

---

## Summary

The discriminant is $b^2 - 4ac$, it is on the formulae sheet, and it is the part of the quadratic formula that sits under the square root sign. That is why it decides the number of roots and why nothing about it has to be memorised.

Positive gives two distinct real roots, zero gives one repeated root, and negative gives none. On a graph those are crossing the $x$-axis twice, touching it once, and never meeting it.

A perfect square discriminant means both roots are rational, which is the same as saying the quadratic factorises with whole numbers.

Take the equation to $ax^2 + bx + c = 0$ before reading off the coefficients, and substitute each of them inside brackets so that a negative $b$ survives being squared.

Most examination questions run the idea backwards. Read the wording for whether it wants an equation or an inequality, put the unknown coefficient into the discriminant, and solve what results with the methods of B1 and B2.

A line meeting a curve at exactly one point, a tangent, and a pair of simultaneous equations with only one solution are all the same question: substitute one equation into the other, and set the discriminant of what results to zero.
