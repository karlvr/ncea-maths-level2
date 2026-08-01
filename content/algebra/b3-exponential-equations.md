# B3—Exponential equations and logarithms

---

In $2^x = 32$ the unknown is in the power. Nothing in B1 or B2 reaches it, because $x$ is not being added to anything and not being multiplied by anything—it is counting how many twos are multiplied together.

Two ways in. Write both sides as powers of the same base, and then the powers themselves must be equal. Or use a logarithm, which is the operation that brings a power down to where the earlier methods can work on it.

The logarithm rules are on the formulae sheet handed out with the examination. The index laws are not, and everything here rests on them, so A3 is the topic to have straight before this one.

---

## Making the bases match

If two powers of the same base are equal, their exponents are equal. That is the whole method, and it needs the same base on both sides for the reason A3 gave: a power of two and a power of three have nothing in common to compare.

```figure
id: b3-same-base
caption: Matching the bases
steps:
  - math: 2^{x+1} = 32
    note: One side is a power of two and the other is a number.
  - math: 2^{x+1} = 2^{\ca{5}}
    note: Thirty-two is $2^5$, so both sides are now powers of the same base.
  - math: x + 1 = \ca{5}
    note: Same base, so the exponents must be equal.
  - math: x = 4
```

Getting there means rewriting one side or both, and the rewriting is A3 in full: a number as a power, a reciprocal as a negative exponent, a root as a fractional one.

```figure
caption: Rewriting a side as a power
steps:
  - math: |
      \begin{array}{rcl}
      9 & = & 3^2 \\[10pt]
      \dfrac{1}{27} & = & 3^{-3} \\[10pt]
      \sqrt{5} & = & 5^{\frac{1}{2}} \\[10pt]
      \dfrac{1}{\sqrt[3]{2}} & = & 2^{-\frac{1}{3}}
      \end{array}
    note: Each of these is a line of A3, and every one of them turns up in an exponential equation.
```

Once both sides are written over the same base, the power of a power law collapses each side to a single exponent.

```figure
id: b3-rewrite
caption: Rewriting both sides over one base
steps:
  - math: 27^{2x+1} = \left(\dfrac{1}{9}\right)^{x}
    note: Nine and twenty-seven are both powers of three.
  - math: \big(3^{\ca{3}}\big)^{2x+1} = \big(3^{\cb{-2}}\big)^{x}
    note: A reciprocal is a negative exponent, so one over nine is $3^{-2}$.
  - math: 3^{6x+3} = 3^{-2x}
    note: A power of a power multiplies, on both sides.
  - math: 6x + 3 = -2x
    note: The bases match, so the exponents can be equated.
  - math: x = -\dfrac{3}{8}
```

```practice
caption: making the bases match
questions:
  - ask: Solve.
    math: 3^x = 81
    grade: achieved
    working:
      - math: 3^x = 3^4
        note: Eighty-one is three multiplied by itself four times.
      - math: x = 4
  - ask: Solve.
    math: 2^{x-1} = 16
    grade: achieved
    working:
      - math: 2^{x-1} = 2^4
      - math: x - 1 = 4 \;\Rightarrow\; x = 5
        note: The whole exponent is equated, not just the letter in it.
  - ask: Solve.
    math: 8^{x+1} = \dfrac{1}{4}
    grade: merit
    working:
      - math: \big(2^3\big)^{x+1} = 2^{-2}
        note: Eight and four are both powers of two, and one over four is a negative exponent.
      - math: 2^{3x+3} = 2^{-2}
      - math: 3x + 3 = -2 \;\Rightarrow\; x = -\dfrac{5}{3}
  - ask: Solve.
    math: 4^{3x-1} = \left(\dfrac{1}{8}\right)^{x}
    grade: merit
    from: "2024"
    working:
      - math: \big(2^2\big)^{3x-1} = \big(2^{-3}\big)^{x}
        note: Base two reaches both sides. Base four or base eight would reach only one.
      - math: 2^{6x-2} = 2^{-3x}
        note: The exponents multiply, and the bracket keeps the $-1$ attached to the $3x$.
      - math: 6x - 2 = -3x
      - math: 9x = 2 \;\Rightarrow\; x = \dfrac{2}{9}
```

---

## What a logarithm is

$\log_b y$ is the power that $b$ has to be raised to in order to give $y$. The formulae sheet states it as a pair: if $y = b^x$ then $x = \log_b y$.

The two lines carry one fact in two notations, and moving between them is most of what a logarithm question asks for.

```figure
id: b3-two-notations
caption: Two ways of writing one fact
steps:
  - math: 2^{\ca{5}} = 32
    note: Two raised to the fifth power is thirty-two.
  - math: \log_2 32 = \ca{5}
    note: The power that two must be raised to in order to give thirty-two is five. Same fact.
```

So reading a logarithmic equation means turning it into index form. $x = \log_3 243$ asks for a power, so write $3^x = 243$, and the answer is $5$. In $\log_x 81 = 4$ the unknown is the base instead, so write $x^4 = 81$, and the answer is $3$.

A base has to be positive, and it cannot be $1$. That rules out roots which the algebra otherwise allows: $\log_x 36 = 2$ gives $x^2 = 36$, so $x$ is $6$ or $-6$, and $-6$ is rejected because no logarithm has a negative base. The 2023 marking schedule awards the higher grade only where that rejection is shown.

You also cannot take the logarithm of zero or of a negative number, because no power of a positive base produces one. That fact does most of the discarding later in this topic.

```practice
caption: reading a logarithm
questions:
  - ask: Evaluate.
    math: \log_3 27
    grade: achieved
    working:
      - math: 3^{?} = 27
        note: Read the notation as a question about a power.
      - math: "3"
  - ask: Solve.
    math: x = \log_4 256
    grade: achieved
    from: "2024"
    working:
      - math: 4^x = 256
        note: Write it in index form, where the unknown is in an ordinary position.
      - math: x = 4
  - ask: Evaluate.
    math: \log_4 \dfrac{1}{16}
    grade: merit
    working:
      - math: 4^{?} = \dfrac{1}{16}
      - math: "-2"
        note: A reciprocal comes from a negative exponent, so the answer is negative rather than a fraction.
  - ask: Solve.
    math: \log_x 49 = 2
    grade: merit
    from: "2023"
    working:
      - math: x^2 = 49
        note: The unknown is the base this time.
      - math: x = 7 \quad\textsf{or}\quad x = -7
        note: Taking a square root gives two values.
      - math: x = 7
        note: A logarithm cannot have a negative base, so $-7$ is rejected. Writing that down is required.
```

---

## The logarithm rules

Three rules, all of them on the formulae sheet.

```figure
caption: The three rules
steps:
  - math: |
      \begin{array}{rcl}
      \log_b(xy) & = & \log_b x + \log_b y \\[4pt]
      \log_b\!\left(\dfrac{x}{y}\right) & = & \log_b x - \log_b y \\[4pt]
      \log_b\!\left(x^n\right) & = & n\log_b x
      \end{array}
    note: A product becomes a sum, a quotient becomes a difference, and a power becomes a coefficient.
```

They are the index laws in the other notation. A logarithm is an exponent, and multiplying powers of the same base adds the exponents—so the logarithm of a product is the sum of the logarithms.

```figure
caption: Why the product rule holds
steps:
  - math: b^{\ca{m}} \cdot b^{\cb{n}} = b^{\ca{m}+\cb{n}}
    note: The multiplying law from A3.
  - math: \log_b\!\left(b^{\ca{m}} \cdot b^{\cb{n}}\right) = \ca{m} + \cb{n}
    note: A logarithm returns the exponent, and the exponent on the right is a sum.
  - math: \log_b(xy) = \log_b x + \log_b y
    note: Writing $x$ for $b^m$ and $y$ for $b^n$ gives the rule as the formulae sheet states it.
```

Two values are worth knowing and are not on the sheet. $\log_b b = 1$, because $b^1 = b$. $\log_b 1 = 0$, because $b^0 = 1$.

The rules are about products, quotients and powers. $\log(x + y)$ is not $\log x + \log y$, and nothing turns a sum inside a logarithm into anything simpler—which is the same boundary A2 drew around cancelling and A3 drew around powers.

Splitting a number into factors is what makes the rules usable. Where $p = \log_a 2$ and $q = \log_a 5$, the value of $\log_a 50$ follows from writing fifty as $2 \times 5^2$.

```figure
id: b3-in-terms-of
caption: Splitting a number into factors first
steps:
  - math: \log_a 50
    note: Fifty is not one of the values given, but its factors are.
  - math: \log_a\!\left(\ca{2} \times \cb{5}^2\right)
    note: Fifty is two times twenty-five, and twenty-five is five squared.
  - math: \log_a \ca{2} + \log_a \cb{5}^2
    note: The product rule splits it into two logarithms.
  - math: \log_a \ca{2} + 2\log_a \cb{5}
    note: The power rule brings the exponent down in front.
  - math: p + 2q
```

```practice
caption: the logarithm rules
questions:
  - ask: Write as a single logarithm.
    math: \log 5 + \log 4
    grade: achieved
    working:
      - math: \log(5 \times 4) = \log 20
        note: A sum of logarithms is the logarithm of a product.
  - ask: Write as a single logarithm.
    math: 2\log x - \log y
    grade: achieved
    working:
      - math: \log x^2 - \log y
        note: A coefficient in front goes back up as a power.
      - math: \log\!\left(\dfrac{x^2}{y}\right)
        note: A difference of logarithms is the logarithm of a quotient.
  - ask: If $p = \log_a 3$ and $q = \log_a 7$, write $\log_a 63$ in terms of $p$ and $q$.
    grade: merit
    from: "2025"
    working:
      - math: \log_a\!\left(3^2 \times 7\right)
        note: Split sixty-three into the factors the question has given values for.
      - math: 2\log_a 3 + \log_a 7
      - math: 2p + q
  - ask: Evaluate.
    math: 4 + \log_b\!\left(b^{-2}\right) + \log_b \sqrt{b}
    grade: merit
    from: "2023"
    working:
      - math: 4 - 2\log_b b + \tfrac{1}{2}\log_b b
        note: Convert the surd to $b^{\frac{1}{2}}$, then bring both exponents down in front.
      - math: 4 - 2 + \tfrac{1}{2}
        note: $\log_b b$ is $1$, whatever the base is.
      - math: \tfrac{5}{2}
```

---

## Solving a logarithmic equation

Combine every logarithm on each side into one, then convert to index form and solve what is left.

```figure
id: b3-log-equation
caption: Combining, then converting
steps:
  - math: 2\log_2(x+3) - \log_2 x = 4
    note: Two logarithms on the left, and the same base in both.
  - math: \log_2(x+3)^2 - \log_2 x = 4
    note: The coefficient goes back up as a power. It squares the whole bracket.
  - math: \log_2\!\left(\dfrac{(x+3)^2}{x}\right) = 4
    note: A difference of logarithms is the logarithm of a quotient.
  - math: \dfrac{(x+3)^2}{x} = 2^4
    note: Now in index form, and the logarithm has gone.
  - math: x^2 + 6x + 9 = 16x
    note: Multiply both sides by $x$, and expand the square rather than distributing over it.
  - math: x^2 - 10x + 9 = 0
  - math: x = 1 \quad\textsf{or}\quad x = 9
```

Check each root in the equation you were given. A root that puts zero or a negative number inside any logarithm is not a solution, because there is no such logarithm. Here both roots survive, since $x+3$ and $x$ are positive at $1$ and at $9$.

```practice
caption: solving a logarithmic equation
questions:
  - ask: Solve.
    math: \log_3 x + \log_3 4 = 2
    grade: achieved
    working:
      - math: \log_3 4x = 2
        note: Combine the two logarithms into one before converting.
      - math: 4x = 3^2 = 9
      - math: x = \dfrac{9}{4}
  - ask: Solve.
    math: \log_2 x + \log_2 (x - 2) = 3
    grade: merit
    working:
      - math: \log_2 x(x-2) = 3
      - math: x^2 - 2x = 8
        note: Index form, with $2^3$ on the right.
      - math: (x - 4)(x + 2) = 0
      - math: x = 4
        note: At $x=-2$ both logarithms would be of negative numbers, so that root is rejected.
  - ask: Solve.
    math: 2\log_5(x + 4) - \log_5 x = 2
    grade: merit
    from: "2025"
    working:
      - math: \log_5\!\left(\dfrac{(x+4)^2}{x}\right) = 2
        note: Power rule first, then quotient rule.
      - math: (x+4)^2 = 25x
        note: Convert to index form and multiply both sides by $x$.
      - math: x^2 - 17x + 16 = 0
        note: Expand the square, then take everything to one side.
      - math: x = 16 \quad\textsf{or}\quad x = 1
```

---

## When the bases cannot be matched

$5^x = 8$ has no common base. Eight is not a power of five, and no rewriting will make it one.

Take the logarithm of both sides instead. The power rule brings the $x$ down in front, where dividing removes it.

```figure
id: b3-take-logs
caption: Taking logarithms of both sides
steps:
  - math: 5^x = 8
    note: Eight is not a power of five, so there is nothing to match.
  - math: \log\!\left(5^x\right) = \log 8
    note: Take the logarithm of both sides. Any base works, so use the one on the calculator.
  - math: x\log 5 = \log 8
    note: The power rule brings the exponent down in front of the logarithm.
  - math: x = \dfrac{\log 8}{\log 5} = 1.29
    note: A division of two logarithms. It is not $\log \dfrac{8}{5}$, which is a different number.
```

```practice
caption: no common base
questions:
  - ask: Solve, to three significant figures.
    math: 3^x = 20
    grade: achieved
    working:
      - math: x\log 3 = \log 20
        note: Twenty is not a power of three, so the bases cannot be matched.
      - math: x = \dfrac{\log 20}{\log 3} = 2.73
  - ask: Solve, to three significant figures.
    math: 2^{x+1} = 45
    grade: merit
    working:
      - math: (x+1)\log 2 = \log 45
        note: The whole exponent comes down, so it needs a bracket.
      - math: x + 1 = 5.4919
      - math: x = 4.49
  - ask: Solve, to three significant figures.
    math: 5 \times 4^x = 90
    grade: merit
    working:
      - math: 4^x = 18
        note: Divide by the $5$ first. The power rule reaches an exponent, not a coefficient.
      - math: x = \dfrac{\log 18}{\log 4} = 2.08
```

---

## Quadratics in disguise

An exponential equation carrying two different powers of one base is often a quadratic underneath. $2^{2x}$ is $\left(2^x\right)^2$, so an equation containing both $2^{2x}$ and $2^x$ is an equation in $2^x$ and its square.

Name that quantity, and the equation becomes one B2 can solve.

```figure
id: b3-hidden-quadratic
caption: A quadratic in disguise
steps:
  - math: 2^{2x} - 2^x - 6 = 0
    note: Two different powers of two, one of them the square of the other.
  - math: \left(\ca{2^x}\right)^2 - \ca{2^x} - 6 = 0
    note: $2^{2x}$ is $2^x$ squared, by the power of a power law.
  - math: u^2 - u - 6 = 0 \qquad \textsf{where } u = \ca{2^x}
    note: Naming it makes the shape of the equation visible.
  - math: (u - 3)(u + 2) = 0
  - math: 2^x = 3 \quad\textsf{or}\quad 2^x = -2
    note: Both values of $u$ have to be turned back into statements about $x$.
  - math: x = \dfrac{\log 3}{\log 2} = 1.58
    note: A power of a positive base is never negative, so $2^x = -2$ has no solution.
```

A positive base raised to any power is positive, so $2^x = -2$ has no solution and the second value of $u$ leads nowhere. The 2025 marking schedule gives excluding the negative value as part of what the highest grade on that question requires, so the rejection is written down rather than passed over.

The powers do not always line up as neatly as $2^{2x}$ and $2^x$. In $3^{2x+1}$ the exponent has an extra $1$ in it, and the multiplying law splits it off: $3^{2x+1} = 3 \cdot 3^{2x} = 3\left(3^x\right)^2$. Likewise $3^{x+2} = 3^2 \cdot 3^x = 9 \cdot 3^x$. Both become multiples of the quantity being named.

```practice
caption: quadratics in disguise
questions:
  - ask: Solve.
    math: 9^x - 4 \times 3^x + 3 = 0
    grade: merit
    working:
      - math: \left(3^x\right)^2 - 4\left(3^x\right) + 3 = 0
        note: Nine is $3^2$, so $9^x$ is $3^x$ squared.
      - math: (u - 1)(u - 3) = 0 \qquad \textsf{where } u = 3^x
      - math: 3^x = 1 \quad\textsf{or}\quad 3^x = 3
        note: Both values are positive, so neither is rejected.
      - math: x = 0 \quad\textsf{or}\quad x = 1
  - ask: Solve.
    math: 4^{2x} - 3 \times 4^x - 4 = 0
    grade: merit
    from: "2023"
    working:
      - math: u^2 - 3u - 4 = 0 \qquad \textsf{where } u = 4^x
      - math: (u - 4)(u + 1) = 0
      - math: 4^x = 4 \quad\textsf{or}\quad 4^x = -1
      - math: x = 1
        note: No power of four is negative, so only the first value gives a solution.
  - ask: Solve, to three significant figures.
    math: 3^{2x+1} - 54 = 3^{x+2}
    grade: excellence
    from: "2025"
    working:
      - math: 3\left(3^x\right)^2 - 54 = 9\left(3^x\right)
        note: Split the extra terms off each exponent, so both sides are built from $3^x$ alone.
      - math: 3u^2 - 9u - 54 = 0 \qquad \textsf{where } u = 3^x
        note: Everything to one side, as B2 requires before any method is applied.
      - math: u^2 - 3u - 18 = 0
        note: Divide through by $3$, which is allowed because $3$ is a number and not the unknown.
      - math: (u - 6)(u + 3) = 0
      - math: 3^x = 6
        note: $3^x = -3$ is impossible, so it is discarded.
      - math: x = \dfrac{\log 6}{\log 3} = 1.63
```

---

## Growth and decay

The specification names compound interest, growth and decay as contexts in which an exponential equation may have to be formed and then solved.

All of them have the same shape: a starting amount, multiplied by the same factor once per period. A factor above one is growth, and a factor below one is decay.

```figure
id: b3-decay
caption: Forming and solving a decay equation
steps:
  - math: V = 24000 \times \ca{0.85}^{\,t}
    note: A car worth 24 000 dollars losing fifteen per cent a year keeps eighty-five per cent of its value each year.
  - math: 10000 = 24000 \times \ca{0.85}^{\,t}
    note: The question asks when it is worth 10 000 dollars, so that value goes on the left.
  - math: 0.85^{\,t} = 0.4167
    note: Divide both sides by the starting amount, which isolates the power.
  - math: t\log 0.85 = \log 0.4167
    note: No common base, so take logarithms of both sides.
  - math: t = 5.39
    note: Both of those logarithms are negative, and dividing one by the other gives a positive time.
  - math: 6 \textsf{ years}
    note: The value passes 10 000 dollars during the sixth year, and years are counted whole.
```

Compound interest is the same equation with a factor above one: an amount $P$ at $6\%$ a year is worth $P \times 1.06^{\,n}$ after $n$ years.

Some models use the base $e$ rather than a decimal. It behaves like any other base, and $\ln$ is its logarithm—the formulae sheet gives $\ln y = \log_e y$. A model given in that form usually has an unknown constant in it, found by substituting the starting values before anything else is attempted.

```practice
caption: growth and decay
questions:
  - ask: 5000 dollars is invested at 6 per cent a year, compounding annually. Find the value of the investment after 4 years.
    grade: achieved
    working:
      - math: V = 5000 \times 1.06^{\,4}
        note: Six per cent added each year means multiplying by $1.06$ once a year.
      - math: V = 6312.38
  - ask: 5000 dollars is invested at 6 per cent a year, compounding annually. Find the number of whole years before the investment is worth more than 8000 dollars.
    grade: merit
    working:
      - math: 5000 \times 1.06^{\,n} = 8000
        note: Write the equation down before solving it.
      - math: 1.06^{\,n} = 1.6
      - math: n = \dfrac{\log 1.6}{\log 1.06} = 8.07
        note: No common base, so take logarithms of both sides.
      - math: 9 \textsf{ years}
        note: Eight whole years is not yet enough, so the answer rounds up rather than to the nearest.
  - ask: The value $V$ of a laptop in dollars is modelled by $V = 50 + ke^{-0.4t}$, where $t$ is the time in years since it was bought and $k$ is a constant. The laptop cost 1250 dollars. Find $k$, and find when the laptop is worth 400 dollars.
    grade: excellence
    from: "2023"
    working:
      - math: 1250 = 50 + ke^{0}
        note: It cost 1250 dollars when it was bought, so that is the value at $t = 0$.
      - math: k = 1200
        note: Anything to the power zero is one, so the whole exponential term is $k$ at that moment.
      - math: 400 = 50 + 1200e^{-0.4t}
        note: Now the model is complete, the second question is an equation in $t$ alone.
      - math: e^{-0.4t} = 0.2917
      - math: -0.4t = \ln 0.2917
        note: Take the natural logarithm of both sides, because the base here is $e$.
      - math: t = 3.08 \textsf{ years}
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Solve.
    math: 2^{3x} = 64
    grade: achieved
    working:
      - math: 2^{3x} = 2^6
      - math: 3x = 6 \;\Rightarrow\; x = 2
  - ask: Evaluate.
    math: \log_2 32 - \log_2 4
    grade: achieved
    working:
      - math: \log_2\!\left(\dfrac{32}{4}\right) = \log_2 8
        note: Reading each logarithm separately gives $5-2$ and the same answer.
      - math: "3"
  - ask: Find an expression for $p$ in terms of $x$.
    math: \dfrac{5^{4x+3}}{5^{-x}} = 5^{3p}
    grade: merit
    from: "2023"
    working:
      - math: 5^{4x+3-(-x)} = 5^{3p}
        note: Dividing powers of the same base subtracts the exponents, and subtracting a negative adds.
      - math: 5^{5x+3} = 5^{3p}
      - math: 5x + 3 = 3p
      - math: p = \dfrac{5x+3}{3}
  - ask: If $\log_b x = 3$ and $\log_{2b} y = 3$, write $y$ in terms of $x$.
    grade: merit
    from: "2024"
    working:
      - math: b^3 = x
        note: Put each statement into index form, where the base is visible.
      - math: (2b)^3 = y
      - math: 8b^3 = y
        note: The cube reaches the $2$ as well as the $b$.
      - math: y = 8x
        note: $b^3$ is $x$, so the whole of $8b^3$ is $8x$.
  - ask: The magnitude $M$ of an earthquake is given by $M = \log_{10}\!\left(\dfrac{I}{I_0}\right)$, where $I$ is its intensity and $I_0$ is a fixed reference intensity. Show that an earthquake of magnitude 6.2 is more than 15 times as intense as one of magnitude 5.0.
    grade: excellence
    from: "2024"
    working:
      - math: 6.2 = \log_{10}\!\left(\dfrac{I_1}{I_0}\right) \;\Rightarrow\; I_1 = 10^{6.2}I_0
        note: Convert to index form, which gives each intensity in terms of the reference.
      - math: I_2 = 10^{5.0}I_0
        note: The same step for the second earthquake, with the same reference intensity.
      - math: \dfrac{I_1}{I_2} = \dfrac{10^{6.2}I_0}{10^{5.0}I_0} = 10^{1.2}
        note: The reference cancels, and dividing powers of the same base subtracts the exponents.
      - math: 10^{1.2} = 15.85 > 15
        note: The question said show, so the comparison with fifteen has to be stated.
```

---

## Summary

An exponential equation has the unknown in the power, and there are two ways at it.

Write both sides as powers of one base, and then the exponents are equal. Getting there uses every rewriting rule from A3—a number as a power, a reciprocal as a negative exponent, a root as a fractional one.

A logarithm is a power. $\log_b y$ is the power that $b$ is raised to in order to give $y$, and turning a logarithmic statement into index form is the first move in almost every question about one.

The three logarithm rules are on the formulae sheet and are the index laws in another notation. They apply to products, quotients and powers, and never to a sum inside the logarithm.

Where no common base exists, take logarithms of both sides and let the power rule bring the exponent down.

Where one power of a base is the square of another, name the smaller one and a quadratic appears. Solve it by B2's methods, then reject any value that would need a positive base raised to a power to come out negative.

Growth and decay are the same equation with a multiplier either side of one, and the specification names them as contexts the examination may use.
