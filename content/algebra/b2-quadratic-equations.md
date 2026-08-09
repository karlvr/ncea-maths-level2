# B2—Solving quadratic equations

---

A quadratic equation is one in which the highest power of the unknown is two. $x^2 + 7x + 12 = 0$ is quadratic, and so is $2x + 3 = \dfrac{7}{x}$ once both sides are multiplied by $x$.

A linear equation has one solution. A quadratic has two, or one, or none, and its solutions are called its **roots**.

Three methods find them: factorising, completing the square, and the quadratic formula. All three answer the same question, and the skill being assessed is choosing which one to reach for.

---

## Everything on one side first

Every method needs the equation written as $ax^2 + bx + c = 0$, with zero on one side. Rearrange first, then read off $a$, $b$ and $c$ with the signs they carry.

```figure
caption: Getting to standard form
steps:
  - math: 3x^2 + 4 = 7x
    note: Not yet in a form any method can use.
  - math: 3x^2 - 7x + 4 = 0
    note: Take the $7x$ across, and the whole of the left side is now over zero.
  - math: a = 3, \quad b = \ca{-7}, \quad c = 4
    note: The sign in front of a term belongs to that term, so $b$ is $-7$.
```

Never divide both sides by the unknown. $x^2 = 5x$ has two roots, $0$ and $5$. Dividing both sides by $x$ leaves $x = 5$ and loses the other one, because dividing by $x$ assumes $x$ is not zero, and in an equation you are solving that is exactly what is not yet known.

```figure
caption: Why dividing by the unknown loses a root
steps:
  - math: x^2 = 5x
    note: The unknown appears on both sides, and it is tempting to divide it out.
  - math: x = 5 \qquad \color{red}{\times}
    note: Dividing both sides by $x$ throws away every solution in which $x$ is zero.
  - math: x^2 - 5x = 0
    note: Take everything to one side instead.
  - math: x(x - 5) = 0
    note: A common factor, and both of its factors are now available.
  - math: x = 0 \quad\textsf{or}\quad x = 5
```

---

## Solving by factorising

A1 established that if a product is zero, at least one of its factors is zero. That statement is the whole of this method: get the equation to standard form, factorise the side that is not zero, and set each factor to zero in turn.

```figure
id: b2-factorising
caption: Solving by factorising
steps:
  - math: x^2 + 7x + 12 = 0
    note: Zero is already on one side.
  - math: (x+3)(x+4) = 0
    note: Two numbers multiplying to $12$ and adding to $7$.
  - math: x + 3 = 0 \quad\textsf{or}\quad x + 4 = 0
    note: A product is zero only when one of its factors is zero.
  - math: x = \ca{-3} \quad\textsf{or}\quad x = \ca{-4}
    note: Each root is the value that makes its own bracket zero.
```

The sign reverses between the bracket and the root. A factor of $(x+3)$ gives a root of $-3$, because $-3$ is the value that makes $x+3$ zero. A factor of $(3x+1)$ gives a root of $-\dfrac{1}{3}$ for the same reason.

The zero on the right is what makes the method work, and no other number would do. $(x+3)(x+4) = 2$ says nothing about either bracket, because two numbers can multiply to two in unlimited ways. So an equation like $(x+2)(x-1) = 10$ is expanded, collected, and taken back to zero before it is factorised again.

```practice
caption: solving by factorising
questions:
  - ask: Solve.
    math: x^2 - 5x + 6 = 0
    grade: achieved
    working:
      - math: (x-2)(x-3) = 0
        note: Two numbers multiplying to $6$ and adding to $-5$, so both are negative.
      - math: x = 2 \quad\textsf{or}\quad x = 3
  - ask: Solve.
    math: x^2 - 7x + 12 = 0
    grade: achieved
    working:
      - math: (x-3)(x-4) = 0
        note: Two numbers multiplying to $12$ and adding to $-7$, so both are negative.
      - math: x = 3 \quad\textsf{or}\quad x = 4
  - ask: Solve.
    math: x^2 = 4x
    grade: achieved
    working:
      - math: x^2 - 4x = 0
        note: Everything to one side. Dividing both sides by $x$ would lose a root.
      - math: x(x - 4) = 0
      - math: x = 0 \quad\textsf{or}\quad x = 4
  - ask: Solve.
    math: x^2 = 6x
    grade: achieved
    working:
      - math: x^2 - 6x = 0
        note: Everything to one side. Dividing both sides by $x$ would lose the root $x = 0$.
      - math: x(x - 6) = 0
      - math: x = 0 \quad\textsf{or}\quad x = 6
  - ask: Solve.
    math: x^2 - 49 = 0
    grade: achieved
    working:
      - math: (x+7)(x-7) = 0
        note: A difference of two squares is a factorisation like any other.
      - math: x = -7 \quad\textsf{or}\quad x = 7
  - ask: Solve.
    math: x^2 - 81 = 0
    grade: achieved
    working:
      - math: (x+9)(x-9) = 0
      - math: x = -9 \quad\textsf{or}\quad x = 9
  - ask: Solve.
    math: 2x - 9 = \dfrac{5}{x}
    grade: achieved
    from: "2024"
    working:
      - math: 2x^2 - 9x = 5
        note: Multiply every term by $x$, which clears the fraction and produces an $x^2$.
      - math: 2x^2 - 9x - 5 = 0
        note: Zero on one side before factorising.
      - math: (2x + 1)(x - 5) = 0
        note: Multiply to $-10$ and add to $-9$, then split the middle term.
      - math: x = -\dfrac{1}{2} \quad\textsf{or}\quad x = 5
  - ask: Solve.
    math: 3x - 7 = \dfrac{6}{x}
    grade: achieved
    working:
      - math: 3x^2 - 7x = 6
        note: Multiply every term by $x$, which clears the fraction and produces an $x^2$.
      - math: 3x^2 - 7x - 6 = 0
        note: Zero on one side before factorising.
      - math: (x - 3)(3x + 2) = 0
        note: Multiply to $-18$ and add to $-7$, then split the middle term.
      - math: x = 3 \quad\textsf{or}\quad x = -\dfrac{2}{3}
```

---

## Completing the square

Every quadratic can be written as a bracket squared, plus or minus a number. Take the coefficient of $x$ and halve it, and that halved number is what goes inside the bracket. Squaring the bracket produces that number squared as well, so subtract it back off.

```figure
id: b2-completing
caption: Completing the square
steps:
  - math: x^2 + 6x - 2
    note: Half of the coefficient of $x$ is $3$.
  - math: (x + \ca{3})^2 = x^2 + 6x + \cb{9}
    note: The bracket produces the $x^2$ and the $6x$ wanted, and a $9$ that was not.
  - math: (x + \ca{3})^2 - \cb{9} - 2
    note: Subtract the unwanted $9$, then carry down the $-2$ from the original expression.
  - math: (x + 3)^2 - 11
```

Once the quadratic is a bracket squared, solving it is two more steps: take the number across, then take the square root of both sides.

```figure
caption: Solving from the completed square
steps:
  - math: (x + 3)^2 - 11 = 0
  - math: (x + 3)^2 = 11
    note: Take the number across, so that a square stands alone on one side.
  - math: x + 3 = \pm\sqrt{11}
    note: Both $\sqrt{11}$ and $-\sqrt{11}$ square to $11$, so both are solutions.
  - math: x = -3 \pm \sqrt{11}
    note: Exact answers. A decimal is only wanted where the question asks for one.
```

**The plus-or-minus is not optional.** Taking the square root of both sides of an equation produces two answers, and writing only the positive one loses a root in exactly the way that dividing by $x$ did.

An equation that arrives as a square already needs only those last two steps, whatever is wrapped around it.

```figure
caption: When the square is already there
steps:
  - math: \dfrac{12}{(2x-1)^2} = 4
    note: The bracket is squared, so it is worth clearing everything else before touching it.
  - math: (2x-1)^2 = 3
    note: Multiply both sides by the bracket and divide both sides by $4$.
  - math: 2x - 1 = \pm\sqrt{3}
  - math: x = \dfrac{1 \pm \sqrt{3}}{2}
```

Where there is a coefficient in front of the $x^2$, take it out of the first two terms before halving anything, and multiply it back through at the end.

```figure
caption: With a coefficient on the x squared
steps:
  - math: 2x^2 + 12x + 5
    note: Halving the $12$ straight away would be halving the wrong number.
  - math: \ca{2}(x^2 + 6x) + 5
    note: Take the $2$ out of the first two terms only.
  - math: \ca{2}\big[(x+3)^2 - 9\big] + 5
    note: Complete the square inside the bracket, where the coefficient of $x^2$ is now $1$.
  - math: 2(x+3)^2 - 18 + 5
    note: The $2$ multiplies the $-9$ as well as the square.
  - math: 2(x+3)^2 - 13
```

Completing the square also hands you the vertex of the parabola. The graph of $y = (x+p)^2 + q$ has its lowest point where the bracket is zero, at $x = -p$, and the value there is $q$—so the vertex is at $(-p, q)$, read straight off the completed form without any calculation.

```practice
caption: completing the square
questions:
  - ask: Write in the form $(x+p)^2 + q$.
    math: x^2 + 10x + 3
    grade: achieved
    working:
      - math: (x+5)^2 = x^2 + 10x + 25
        note: Half of $10$ is $5$, and the bracket brings a $25$ with it.
      - math: (x+5)^2 - 25 + 3
      - math: (x+5)^2 - 22
  - ask: Write in the form $(x+p)^2 + q$.
    math: x^2 + 8x + 5
    grade: achieved
    working:
      - math: (x+4)^2 = x^2 + 8x + 16
        note: Half of $8$ is $4$, and the bracket brings a $16$ with it.
      - math: (x+4)^2 - 16 + 5
      - math: (x+4)^2 - 11
  - ask: Write in the form $(x+p)^2 + q$.
    math: x^2 - 6x - 1
    grade: achieved
    working:
      - math: (x-3)^2 = x^2 - 6x + 9
        note: Half of $-6$ is $-3$, and squaring it still gives a positive $9$.
      - math: (x-3)^2 - 9 - 1 = (x-3)^2 - 10
  - ask: Write in the form $(x+p)^2 + q$.
    math: x^2 - 10x - 4
    grade: achieved
    working:
      - math: (x-5)^2 = x^2 - 10x + 25
        note: Half of $-10$ is $-5$, and squaring it still gives a positive $25$.
      - math: (x-5)^2 - 25 - 4 = (x-5)^2 - 29
  - ask: Solve, giving exact answers.
    math: x^2 + 4x - 6 = 0
    grade: merit
    working:
      - math: (x+2)^2 - 4 - 6 = 0
        note: Half of $4$ is $2$, and the bracket brings a $4$ that has to come back off.
      - math: (x+2)^2 = 10
      - math: x = -2 \pm \sqrt{10}
        note: Exact was asked for, so the surd stays.
  - ask: Solve, giving exact answers.
    math: x^2 + 6x - 2 = 0
    grade: merit
    working:
      - math: (x+3)^2 - 9 - 2 = 0
        note: Half of $6$ is $3$, and the bracket brings a $9$ that has to come back off.
      - math: (x+3)^2 = 11
      - math: x = -3 \pm \sqrt{11}
        note: Exact was asked for, so the surd stays.
  - ask: Solve, giving exact answers.
    math: \dfrac{15}{(2x+1)^2} = 3
    grade: merit
    from: "2025"
    working:
      - math: 15 = 3(2x+1)^2
        note: Multiply both sides by the squared bracket.
      - math: (2x+1)^2 = 5
      - math: 2x + 1 = \pm\sqrt{5}
        note: Two answers, because both roots of $5$ square back to $5$.
      - math: x = \dfrac{-1 \pm \sqrt{5}}{2}
  - ask: Solve, giving exact answers.
    math: \dfrac{28}{(3x-2)^2} = 4
    grade: merit
    working:
      - math: 28 = 4(3x-2)^2
        note: Multiply both sides by the squared bracket.
      - math: (3x-2)^2 = 7
      - math: 3x - 2 = \pm\sqrt{7}
        note: Two answers, because both roots of $7$ square back to $7$.
      - math: x = \dfrac{2 \pm \sqrt{7}}{3}
```

---

## The quadratic formula

The formula is on the formulae sheet handed out with the examination, so it does not have to be memorised. It solves any quadratic, including every one that does not factorise.

```figure
caption: The quadratic formula
steps:
  - math: ax^2 + bx + c = 0 \quad\Longrightarrow\quad x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}
    note: The plus-or-minus is where the two roots come from.
```

Substitute $a$, $b$ and $c$ inside brackets, as A1 required of every substitution. A negative $b$ is where this goes wrong: $-b$ becomes $-(-7)$, which is $+7$, and $b^2$ becomes $(-7)^2$, which is $+49$.

```figure
id: b2-formula
caption: Substituting into the formula
steps:
  - math: 3x^2 - 7x + 4 = 0
    note: Standard form, so $a=3$, $b=-7$ and $c=4$.
  - math: x = \dfrac{-(\ca{-7}) \pm \sqrt{(\ca{-7})^2 - 4(3)(4)}}{2(3)}
    note: Every one of the three goes in inside its own bracket.
  - math: x = \dfrac{7 \pm \sqrt{49 - 48}}{6}
    note: Minus a negative seven is plus seven, and a negative squared is positive.
  - math: x = \dfrac{7 \pm 1}{6}
  - math: x = \dfrac{4}{3} \quad\textsf{or}\quad x = 1
    note: The two signs are worked out separately, giving $\dfrac{8}{6}$ and $\dfrac{6}{6}$.
```

What comes out under the root sign is often not a whole number, and it is left as a surd where the question asks for exact answers and turned into a decimal where it does not. Where letters rather than numbers go in, the surd may simplify: $\sqrt{36k^2 - 32k^2}$ is $\sqrt{4k^2}$, which is $2k$.

```practice
caption: the quadratic formula
questions:
  - ask: Solve, to two decimal places.
    math: x^2 + 3x - 5 = 0
    grade: achieved
    working:
      - math: x = \dfrac{-3 \pm \sqrt{(3)^2 - 4(1)(-5)}}{2(1)}
        note: The $c$ is negative, and $-4ac$ therefore adds rather than subtracts.
      - math: x = \dfrac{-3 \pm \sqrt{29}}{2}
      - math: x = 1.19 \quad\textsf{or}\quad x = -4.19
  - ask: Solve, to two decimal places.
    math: x^2 + 5x - 3 = 0
    grade: achieved
    working:
      - math: x = \dfrac{-5 \pm \sqrt{(5)^2 - 4(1)(-3)}}{2(1)}
        note: The $c$ is negative, and $-4ac$ therefore adds rather than subtracts.
      - math: x = \dfrac{-5 \pm \sqrt{37}}{2}
      - math: x = 0.54 \quad\textsf{or}\quad x = -5.54
  - ask: Solve, to two decimal places.
    math: 2x^2 - 7x + 1 = 0
    grade: achieved
    working:
      - math: x = \dfrac{7 \pm \sqrt{49 - 8}}{4}
        note: $-b$ is $+7$, and $2a$ is $4$ rather than $2$.
      - math: x = \dfrac{7 \pm \sqrt{41}}{4}
      - math: x = 3.35 \quad\textsf{or}\quad x = 0.15
  - ask: Solve, to two decimal places.
    math: 3x^2 - 8x + 2 = 0
    grade: achieved
    working:
      - math: x = \dfrac{8 \pm \sqrt{64 - 24}}{6}
        note: $-b$ is $+8$, and $2a$ is $6$ rather than $3$.
      - math: x = \dfrac{8 \pm \sqrt{40}}{6}
      - math: x = 2.39 \quad\textsf{or}\quad x = 0.28
  - ask: Solve in terms of $k$, giving fully simplified answers.
    math: 2x^2 - 6kx + 4k^2 = 0
    grade: merit
    from: "2024"
    working:
      - math: x = \dfrac{6k \pm \sqrt{(-6k)^2 - 4(2)(4k^2)}}{2(2)}
        note: The letters go in exactly as numbers would, brackets and all.
      - math: x = \dfrac{6k \pm \sqrt{36k^2 - 32k^2}}{4}
      - math: x = \dfrac{6k \pm 2k}{4}
        note: $\sqrt{4k^2}$ is $2k$, so the surd disappears altogether.
      - math: x = 2k \quad\textsf{or}\quad x = k
        note: The two signs are taken separately, giving $\dfrac{8k}{4}$ and $\dfrac{4k}{4}$.
  - ask: Solve in terms of $k$, giving fully simplified answers.
    math: 3x^2 - 12kx + 9k^2 = 0
    grade: merit
    working:
      - math: x = \dfrac{12k \pm \sqrt{(-12k)^2 - 4(3)(9k^2)}}{2(3)}
        note: The letters go in exactly as numbers would, brackets and all.
      - math: x = \dfrac{12k \pm \sqrt{144k^2 - 108k^2}}{6}
      - math: x = \dfrac{12k \pm 6k}{6}
        note: $\sqrt{36k^2}$ is $6k$, so the surd disappears altogether.
      - math: x = 3k \quad\textsf{or}\quad x = k
        note: The two signs are taken separately, giving $\dfrac{18k}{6}$ and $\dfrac{6k}{6}$.
```

---

## Choosing a method

Try factorising first, and give it up quickly. Two numbers multiplying to $ac$ and adding to $b$ either exist or do not, and finding out takes a few seconds.

Complete the square when the question asks for the completed form, or when the vertex of the parabola is what is wanted.

Use the formula for everything else. It never fails, and its only cost is arithmetic.

```figure
caption: Which method
steps:
  - math: |
      \begin{array}{rl}
      \textsf{two numbers found quickly} & \textsf{factorise} \\[3pt]
      \textsf{the form or the vertex is asked for} & \textsf{complete the square} \\[3pt]
      \textsf{anything else} & \textsf{the formula}
      \end{array}
    note: All three give the same roots, so a slow method is never a wrong one.
```

Read the instruction before choosing. *Solve*, *factorise*, *write in the form* and *calculate the discriminant* ask for four different things, and the 2024 examiner's report lists not following instructions of that kind as a reason candidates did not achieve.

---

## Answers the context rules out

When a quadratic comes from a situation rather than from a page of algebra, one of its two roots is often impossible. A length cannot be negative. A number of people cannot be a fraction. A time measured from the start cannot be before it.

Discard the impossible root, and write down that you have discarded it and why. The discarding is part of the answer, not tidying up afterwards.

```figure
caption: Rejecting a root the context forbids
steps:
  - math: w(w + 3) = 70
    note: A rectangle three metres longer than it is wide, with an area of seventy square metres.
  - math: w^2 + 3w - 70 = 0
  - math: (w + 10)(w - 7) = 0
  - math: w = -10 \quad\textsf{or}\quad w = 7
    note: Both are roots of the equation. Only one of them is a width.
  - math: w = 7
    note: A width cannot be negative, so $-10$ is rejected. Saying so is part of the answer.
```

---

## Working backwards from the roots

If the roots are $p$ and $q$, then $(x - p)(x - q) = 0$ is an equation having exactly those roots, and expanding it puts that equation in standard form.

Fractional roots are cleared by multiplying each bracket up. The root $\dfrac{2}{5}$ gives the bracket $\left(x - \dfrac{2}{5}\right)$, and multiplying that bracket by $5$ turns it into $(5x - 2)$—which has the same root, because the value making $5x-2$ zero is still two fifths.

```figure
id: b2-from-roots
caption: Building an equation from its roots
steps:
  - math: x = \dfrac{2}{5} \quad\textsf{or}\quad x = -\dfrac{1}{2}
    note: Each root has to become a bracket that is zero at that value.
  - math: \left(x - \dfrac{2}{5}\right)\left(x + \dfrac{1}{2}\right) = 0
    note: The sign reverses on the way into the bracket.
  - math: (5x - 2)(2x + 1) = 0
    note: Multiply the first bracket by $5$ and the second by $2$, which clears both fractions.
  - math: 10x^2 + x - 2 = 0
    note: Expanding gives whole-number coefficients, which is what such a question asks for.
```

A cubic works the same way with three brackets. Roots of $-2$, $\dfrac{1}{3}$ and $4$ give $(x+2)(3x-1)(x-4) = 0$, and the 2024 examiner's report names candidates who identified the three correct factors and then could not expand them.

### What the coefficients say about the roots

Expanding $(x - p)(x - q)$ gives $x^2 - (p+q)x + pq$. Comparing that with $x^2 + bx + c$ shows that the two roots add to $-b$ and multiply to $c$.

That gives the sum and the product of the roots without solving anything, which is enough for questions that ask about the roots rather than for them.

```figure
caption: The sum and the product of the roots
steps:
  - math: (x - p)(x - q) = x^2 - \ca{(p+q)}x + \cb{pq}
    note: Expanding two brackets whose roots are $p$ and $q$.
  - math: x^2 + bx + c = 0 \;\Longrightarrow\; p + q = \ca{-b}, \quad pq = \cb{c}
    note: Matching the two lines term by term.
```

Two roots that are opposites, such as $3$ and $-3$, add to zero, so an equation whose roots are opposites has no term in $x$. Setting the coefficient of $x$ to zero is the whole method, however complicated the equation the coefficients came from. Where that equation arrives as two fractions set equal, cross-multiply—multiply both sides by both denominators—and expand every product before collecting; the 2024 report names candidates who cross-multiplied but did not expand correctly.

```practice
caption: working backwards from the roots
questions:
  - ask: Find a quadratic equation with integer coefficients whose roots are $3$ and $-5$.
    grade: achieved
    working:
      - math: (x - 3)(x + 5) = 0
        note: The sign reverses between the root and its bracket.
      - math: x^2 + 2x - 15 = 0
  - ask: Find a quadratic equation with integer coefficients whose roots are $4$ and $-2$.
    grade: achieved
    working:
      - math: (x - 4)(x + 2) = 0
        note: The sign reverses between the root and its bracket.
      - math: x^2 - 2x - 8 = 0
  - ask: Find a quadratic equation with integer coefficients whose roots are $\dfrac{1}{2}$ and $-3$.
    grade: achieved
    working:
      - math: \left(x - \dfrac{1}{2}\right)(x + 3) = 0
      - math: (2x - 1)(x + 3) = 0
        note: Multiply the fractional bracket by $2$, which leaves its root unchanged.
      - math: 2x^2 + 5x - 3 = 0
  - ask: Find a quadratic equation with integer coefficients whose roots are $\dfrac{1}{3}$ and $-2$.
    grade: achieved
    working:
      - math: \left(x - \dfrac{1}{3}\right)(x + 2) = 0
      - math: (3x - 1)(x + 2) = 0
        note: Multiply the fractional bracket by $3$, which leaves its root unchanged.
      - math: 3x^2 + 5x - 2 = 0
  - ask: A quadratic equation $ax^2 + bx + c = 0$ has solutions $\dfrac{1}{4}$ and $-\dfrac{2}{3}$. Find integer values of $a$, $b$ and $c$.
    grade: achieved
    from: "2025"
    working:
      - math: (4x - 1)(3x + 2) = 0
        note: Each fractional root gives a bracket once it is multiplied up by its denominator.
      - math: 12x^2 + 8x - 3x - 2 = 0
      - math: 12x^2 + 5x - 2 = 0
        note: So $a = 12$, $b = 5$ and $c = -2$.
  - ask: A quadratic equation $ax^2 + bx + c = 0$ has solutions $\dfrac{1}{5}$ and $-\dfrac{3}{2}$. Find integer values of $a$, $b$ and $c$.
    grade: achieved
    working:
      - math: (5x - 1)(2x + 3) = 0
        note: Each fractional root gives a bracket once it is multiplied up by its denominator.
      - math: 10x^2 + 15x - 2x - 3 = 0
      - math: 10x^2 + 13x - 3 = 0
        note: So $a = 10$, $b = 13$ and $c = -3$.
  - ask: A cubic is given by $f(x) = 2x^3 + ax^2 + bx + c$. Its graph cuts the $x$-axis at $-3$, $\dfrac{1}{2}$ and $2$. Find the values of $a$, $b$ and $c$.
    grade: merit
    from: "2024"
    working:
      - math: (x+3)(2x-1)(x-2) = 0
        note: Three roots give three brackets, and the fractional one is multiplied up by $2$.
      - math: (2x-1)(x-2) = 2x^2 - 5x + 2
        note: Expand two of the three first, and the third one waits.
      - math: (x+3)(2x^2 - 5x + 2) = 2x^3 + x^2 - 13x + 6
        note: Six products, and the leading term is $2x^3$ as the question requires.
      - math: a = 1, \quad b = -13, \quad c = 6
  - ask: A cubic is given by $f(x) = 3x^3 + ax^2 + bx + c$. Its graph cuts the $x$-axis at $-2$, $\dfrac{1}{3}$ and $1$. Find the values of $a$, $b$ and $c$.
    grade: merit
    working:
      - math: (x+2)(3x-1)(x-1) = 0
        note: Three roots give three brackets, and the fractional one is multiplied up by $3$.
      - math: (3x-1)(x-1) = 3x^2 - 4x + 1
        note: Expand two of the three first, and the third one waits.
      - math: (x+2)(3x^2 - 4x + 1) = 3x^3 + 2x^2 - 7x + 2
        note: Six products, and the leading term is $3x^3$ as the question requires.
      - math: a = 2, \quad b = -7, \quad c = 2
  - ask: The solutions of $x^2 + px + q = 0$ are $a$ and $b$. Given that $a^2 + b^2 = (a+b)^2 - 2ab$, find an expression for $a^2 + b^2$ in terms of $p$ and $q$.
    grade: excellence
    from: "2025"
    working:
      - math: (x - a)(x - b) = x^2 - (a+b)x + ab
        note: Write the equation from its roots, which is the only way in.
      - math: a + b = -p, \quad ab = q
        note: Match that against $x^2 + px + q$ term by term.
      - math: a^2 + b^2 = (-p)^2 - 2q
        note: Substitute both into the identity the question supplies.
      - math: p^2 - 2q
  - ask: The solutions of $x^2 + px + q = 0$ are $a$ and $b$. Find an expression for $\dfrac{1}{a} + \dfrac{1}{b}$ in terms of $p$ and $q$.
    grade: excellence
    working:
      - math: (x - a)(x - b) = x^2 - (a+b)x + ab
        note: Write the equation from its roots, which is the only way in.
      - math: a + b = -p, \quad ab = q
        note: Match that against $x^2 + px + q$ term by term.
      - math: \dfrac{1}{a} + \dfrac{1}{b} = \dfrac{b + a}{ab}
        note: Put the two fractions over a common denominator, and both parts become quantities already known.
      - math: -\dfrac{p}{q}
  - ask: Find the value of $k$ for which the equation has two roots that are numerically equal but with opposite signs, such as $3$ and $-3$.
    math: \dfrac{x^2 - 3x}{5x - 2} = \dfrac{k-1}{k+1}
    grade: excellence
    from: "2024"
    working:
      - math: (x^2 - 3x)(k+1) = (k-1)(5x-2)
        note: Cross-multiply, which is multiplying both sides by both denominators.
      - math: kx^2 + x^2 - 3kx - 3x = 5kx - 2k - 5x + 2
        note: Expand both sides in full before collecting anything.
      - math: (k+1)x^2 + (2 - 8k)x + 2(k-1) = 0
        note: Everything to one side, collected by powers of $x$. The coefficients carry $k$, and that is expected.
      - math: 2 - 8k = 0
        note: Roots of $r$ and $-r$ give $(x-r)(x+r)$, which has no term in $x$—so the coefficient of $x$ is zero.
      - math: k = \dfrac{1}{4}
  - ask: Find the value of $k$ for which the equation has two roots that are numerically equal but with opposite signs, such as $3$ and $-3$.
    math: \dfrac{x^2 - 2x}{4x - 3} = \dfrac{k-2}{k+2}
    grade: excellence
    working:
      - math: (x^2 - 2x)(k+2) = (k-2)(4x-3)
        note: Cross-multiply, which is multiplying both sides by both denominators.
      - math: kx^2 + 2x^2 - 2kx - 4x = 4kx - 3k - 8x + 6
        note: Expand both sides in full before collecting anything.
      - math: (k+2)x^2 + (4 - 6k)x + 3(k-2) = 0
        note: Everything to one side, collected by powers of $x$. The coefficients carry $k$, and that is expected.
      - math: 4 - 6k = 0
        note: Roots of $r$ and $-r$ give $(x-r)(x+r)$, which has no term in $x$—so the coefficient of $x$ is zero.
      - math: k = \dfrac{2}{3}
```

---

## Forming a quadratic from a context

Naming the unknown works as it did in B1. What changes is that the relationship produces an $x^2$—usually because an area is involved, or because two quantities that both depend on the unknown are multiplied together.

Where the question supplies the form of a model, the work is to complete it from the information given. A parabola with its vertex at $(h, k)$ can be written $y = a(x - h)^2 + k$, and one further point on the curve fixes $a$.

```figure
id: b2-model
caption: Completing a given model
steps:
  - math: y = a(x - h)^2 + k
    note: The form is given. Only $a$, $h$ and $k$ have to be found.
  - math: y = a(x - \ca{20})^2 + \cb{8}
    note: The ball reaches its greatest height of $8$ m when it is $20$ m along, so the vertex is $(20, 8)$.
  - math: 0 = a(0 - 20)^2 + 8
    note: It was thrown from ground level, so the curve also passes through $(0,0)$.
  - math: 400a = -8 \;\Rightarrow\; a = -0.02
    note: The value is negative, which is what makes the parabola open downwards.
  - math: y = -0.02(x - 20)^2 + 8
    note: The model is complete, and any height along the flight can now be calculated from it.
```

Reading a value out of a finished model is substitution and nothing more: the completed model $y = -0.02(x - 20)^2 + 8$ gives a height of $-0.02(15)^2 + 8$ at $x = 35$, which is $3.5$ m.

```practice
caption: forming a quadratic
questions:
  - ask: The length of a rectangle is 4 cm more than its width, and its area is 45 cm². Find the width.
    grade: merit
    working:
      - math: \textsf{let } w = \textsf{ the width, in centimetres}
      - math: w(w + 4) = 45
        note: The equation has to be written down, not only used.
      - math: w^2 + 4w - 45 = 0
      - math: (w + 9)(w - 5) = 0
      - math: w = 5
        note: A width cannot be $-9$, so that root is rejected.
  - ask: The length of a rectangle is 3 cm more than its width, and its area is 54 cm². Find the width.
    grade: merit
    working:
      - math: \textsf{let } w = \textsf{ the width, in centimetres}
      - math: w(w + 3) = 54
        note: The equation has to be written down, not only used.
      - math: w^2 + 3w - 54 = 0
      - math: (w + 9)(w - 6) = 0
      - math: w = 6
        note: A width cannot be $-9$, so that root is rejected.
  - ask: A stone is dropped from a bridge. Its height above the water, in metres, is modelled by $h = 30 - 4.9t^2$, where $t$ is the time in seconds. Find how long the stone takes to reach the water.
    grade: merit
    working:
      - math: 0 = 30 - 4.9t^2
        note: Reaching the water means a height of zero, which is the equation to form.
      - math: t^2 = \dfrac{30}{4.9} = 6.122
      - math: t = \pm 2.47
        note: Taking a square root gives two values.
      - math: t = 2.47 \textsf{ seconds}
        note: Time is measured from the moment of release, so the negative root is rejected.
  - ask: A stone is dropped from a cliff. Its height above the sea, in metres, is modelled by $h = 45 - 4.9t^2$, where $t$ is the time in seconds. Find how long the stone takes to reach the sea.
    grade: merit
    working:
      - math: 0 = 45 - 4.9t^2
        note: Reaching the sea means a height of zero, which is the equation to form.
      - math: t^2 = \dfrac{45}{4.9} = 9.184
      - math: t = \pm 3.03
        note: Taking a square root gives two values.
      - math: t = 3.03 \textsf{ seconds}
        note: Time is measured from the moment of release, so the negative root is rejected.
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Solve.
    math: x^2 + 2x - 15 = 0
    grade: achieved
    working:
      - math: (x+5)(x-3) = 0
        note: Multiply to $-15$ and add to $2$.
      - math: x = -5 \quad\textsf{or}\quad x = 3
  - ask: Solve.
    math: x^2 + 4x - 21 = 0
    grade: achieved
    working:
      - math: (x+7)(x-3) = 0
        note: Multiply to $-21$ and add to $4$.
      - math: x = -7 \quad\textsf{or}\quad x = 3
  - ask: Write in the form $(x + p)^2 - q$.
    math: x^2 + 12x - 7
    grade: achieved
    from: "2024"
    working:
      - math: (x+6)^2 = x^2 + 12x + 36
        note: Half of $12$ is $6$.
      - math: (x+6)^2 - 36 - 7
      - math: (x+6)^2 - 43
  - ask: Write in the form $(x + p)^2 - q$.
    math: x^2 + 14x - 5
    grade: achieved
    working:
      - math: (x+7)^2 = x^2 + 14x + 49
        note: Half of $14$ is $7$.
      - math: (x+7)^2 - 49 - 5
      - math: (x+7)^2 - 54
  - ask: Solve.
    math: (x + 2)(x - 1) = 10
    grade: merit
    working:
      - math: x^2 + x - 2 = 10
        note: The right side is not zero, so nothing can yet be said about either bracket.
      - math: x^2 + x - 12 = 0
        note: Expand, then take everything to one side, then factorise again.
      - math: (x + 4)(x - 3) = 0
      - math: x = -4 \quad\textsf{or}\quad x = 3
  - ask: Solve.
    math: (x + 3)(x - 2) = 14
    grade: merit
    working:
      - math: x^2 + x - 6 = 14
        note: The right side is not zero, so nothing can yet be said about either bracket.
      - math: x^2 + x - 20 = 0
        note: Expand, then take everything to one side, then factorise again.
      - math: (x + 5)(x - 4) = 0
      - math: x = -5 \quad\textsf{or}\quad x = 4
  - ask: Solve, giving exact answers.
    math: 2x^2 - 5x - 1 = 0
    grade: merit
    working:
      - math: x = \dfrac{5 \pm \sqrt{(-5)^2 - 4(2)(-1)}}{2(2)}
        note: No pair of numbers multiplies to $-2$ and adds to $-5$, so factorising is not available.
      - math: x = \dfrac{5 \pm \sqrt{25 + 8}}{4}
        note: Subtracting $4ac$ when $c$ is negative adds.
      - math: x = \dfrac{5 \pm \sqrt{33}}{4}
  - ask: Solve, giving exact answers.
    math: 3x^2 - 7x - 2 = 0
    grade: merit
    working:
      - math: x = \dfrac{7 \pm \sqrt{(-7)^2 - 4(3)(-2)}}{2(3)}
        note: No pair of numbers multiplies to $-6$ and adds to $-7$, so factorising is not available.
      - math: x = \dfrac{7 \pm \sqrt{49 + 24}}{6}
        note: Subtracting $4ac$ when $c$ is negative adds.
      - math: x = \dfrac{7 \pm \sqrt{73}}{6}
  - ask: A rectangle is inscribed in a circle of radius $r$, with the four corners of the rectangle on the circle. The rectangle is three times as long as it is wide. Find a fully simplified expression for the area of the rectangle in terms of $r$.
    grade: excellence
    from: "2025"
    working:
      - math: \textsf{let } w = \textsf{ the width}, \quad \textsf{length} = 3w
        note: Name one dimension and write the other in terms of it.
      - math: w^2 + (3w)^2 = (2r)^2
        note: The diagonal of the rectangle is a diameter of the circle, so the two sides and the diagonal make a right-angled triangle.
      - math: 10w^2 = 4r^2
        note: The brackets matter. Both the $3$ and the $2$ get squared.
      - math: w^2 = \dfrac{2r^2}{5}
      - math: \textsf{area} = 3w^2 = \dfrac{6r^2}{5}
        note: The area is $3w^2$, so $w$ itself is never needed and the surd never appears.
  - ask: A rectangle is inscribed in a circle of radius $r$, with the four corners of the rectangle on the circle. The rectangle is twice as long as it is wide. Find a fully simplified expression for the area of the rectangle in terms of $r$.
    grade: excellence
    working:
      - math: \textsf{let } w = \textsf{ the width}, \quad \textsf{length} = 2w
        note: Name one dimension and write the other in terms of it.
      - math: w^2 + (2w)^2 = (2r)^2
        note: The diagonal of the rectangle is a diameter of the circle, so the two sides and the diagonal make a right-angled triangle.
      - math: 5w^2 = 4r^2
        note: The brackets matter. Both the $2$s get squared.
      - math: w^2 = \dfrac{4r^2}{5}
      - math: \textsf{area} = 2w^2 = \dfrac{8r^2}{5}
        note: The area is $2w^2$, so $w$ itself is never needed and the surd never appears.
  - ask: A ball is hit from a point 1 m above the ground. It reaches its greatest height of 12 m when it is 50 m from where it was hit. A wall 6 m high stands 90 m from where it was hit. Determine whether the ball clears the wall.
    grade: excellence
    from: "2025"
    working:
      - math: y = a(x - 50)^2 + 12
        note: The greatest height gives the vertex, so vertex form is the least work.
      - math: 1 = a(0 - 50)^2 + 12
        note: At the moment it is hit, $x$ is zero and the height is $1$.
      - math: 2500a = -11 \;\Rightarrow\; a = -0.0044
      - math: y = -0.0044(90 - 50)^2 + 12
        note: Substitute the distance of the wall to find the height of the ball there.
      - math: y = -7.04 + 12 = 4.96
      - math: \textsf{4.96 m is less than 6 m, so the ball does not clear the wall}
        note: The question asked for a decision, so the decision has to be stated in words.
  - ask: A ball is hit from a point 2 m above the ground. It reaches its greatest height of 15 m when it is 40 m from where it was hit. A wall 5 m high stands 70 m from where it was hit. Determine whether the ball clears the wall.
    grade: excellence
    working:
      - math: y = a(x - 40)^2 + 15
        note: The greatest height gives the vertex, so vertex form is the least work.
      - math: 2 = a(0 - 40)^2 + 15
        note: At the moment it is hit, $x$ is zero and the height is $2$.
      - math: 1600a = -13 \;\Rightarrow\; a = -0.008125
      - math: y = -0.008125(70 - 40)^2 + 15
        note: Substitute the distance of the wall to find the height of the ball there.
      - math: y = -7.31 + 15 = 7.69
      - math: \textsf{7.69 m is greater than 5 m, so the ball clears the wall}
        note: The question asked for a decision, so the decision has to be stated in words.
```

---

## Summary

A quadratic equation has zero on one side before any method touches it, and $a$, $b$ and $c$ are read off with their signs.

Never divide both sides by the unknown. It discards the root where the unknown is zero.

Factorising works because a product is zero only when one of its factors is zero, and the sign reverses between a bracket and its root.

Completing the square halves the coefficient of $x$ and subtracts back the square that the bracket brings with it. It solves any quadratic, and the completed form gives the vertex of the parabola without further work.

The quadratic formula is on the formulae sheet, works always, and is where a negative $b$ costs marks. Substitute inside brackets.

Where a quadratic comes from a context, reject the root the context forbids and say why. Where the roots are given instead, build the equation from $(x-p)(x-q) = 0$ and multiply fractional brackets up to whole numbers.

Two of the methods above hand on directly. B3 solves exponential equations by finding a quadratic hidden inside them and factorising it. C1 takes the $b^2 - 4ac$ from under the square root sign in the formula and asks what its sign alone can tell you.
