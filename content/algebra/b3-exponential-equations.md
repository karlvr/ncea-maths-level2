# B3—Exponential equations and logarithms

---

In $2^x = 32$ the unknown is in the power. The methods of B1 and B2 do not work here, because $x$ is not added to anything or multiplied by anything. Instead, $x$ counts how many twos are multiplied together.

Write both sides as powers of the same base, and then the exponents must be equal. Or take the logarithm of both sides, which moves the unknown out of the exponent. Then you can solve the equation with the methods of B1 and B2.

The logarithm rules are on the formulae sheet given with the examination. The index laws are not on the sheet, and every method in this lesson depends on them. So learn A3 before you start this topic.

---

## Making the bases match

If two powers of the same base are equal, their exponents are equal. That is the whole method. It works only when both sides have the same base. $4^1$ and $2^2$ are equal, but their exponents are not.

```figure
id: b3-same-base
caption: Matching the bases
steps:
  - math: 2^{x+1} = 32
    note: One side is a power of two and the other is a number.
  - math: 2^{x+1} = 2^{\ca{5}}
    note: Thirty-two is $2^5$, so both sides are now powers of the same base.
  - math: x + 1 = \ca{5}
    note: The bases are the same, so the exponents must be equal.
  - math: x = 4
```

To reach that form, rewrite one side or both using the index laws. Write a number as a power, a reciprocal as a negative exponent, and a root as a fractional one.

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
    note: Each line writes a number as a power. Each kind appears often in exponential equations.
```

Once you write both sides as powers of the same base, use the power of a power law to give each side a single exponent.

```figure
id: b3-rewrite
caption: Rewriting both sides as powers of one base
steps:
  - math: 27^{2x+1} = \left(\dfrac{1}{9}\right)^{x}
    note: Nine and twenty-seven are both powers of three.
  - math: \big(3^{\ca{3}}\big)^{2x+1} = \big(3^{\cb{-2}}\big)^{x}
    note: A reciprocal is a negative exponent, so one over nine is $3^{-2}$.
  - math: 3^{6x+3} = 3^{-2x}
    note: For a power of a power, multiply the exponents. Do this on both sides.
  - math: 6x + 3 = -2x
    note: The bases match, so you can equate the exponents.
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
    math: 2^x = 32
    grade: achieved
    working:
      - math: 2^x = 2^5
        note: Thirty-two is two multiplied by itself five times.
      - math: x = 5
  - ask: Solve.
    math: 2^{x-1} = 16
    grade: achieved
    working:
      - math: 2^{x-1} = 2^4
      - math: x - 1 = 4 \;\Rightarrow\; x = 5
        note: Equate the whole exponent, not just the letter in it.
  - ask: Solve.
    math: 5^{x-1} = 125
    grade: achieved
    working:
      - math: 5^{x-1} = 5^3
      - math: x - 1 = 3 \;\Rightarrow\; x = 4
        note: Equate the whole exponent, not just the letter in it.
  - ask: Solve.
    math: 8^{x+1} = \dfrac{1}{4}
    grade: merit
    working:
      - math: \big(2^3\big)^{x+1} = 2^{-2}
        note: Eight and four are both powers of two, and one over four is a negative exponent.
      - math: 2^{3x+3} = 2^{-2}
      - math: 3x + 3 = -2 \;\Rightarrow\; x = -\dfrac{5}{3}
  - ask: Solve.
    math: 9^{x+1} = \dfrac{1}{27}
    grade: merit
    working:
      - math: \big(3^2\big)^{x+1} = 3^{-3}
        note: Nine and twenty-seven are both powers of three, and one over twenty-seven is a negative exponent.
      - math: 3^{2x+2} = 3^{-3}
      - math: 2x + 2 = -3 \;\Rightarrow\; x = -\dfrac{5}{2}
  - ask: Solve.
    math: 4^{3x-1} = \left(\dfrac{1}{8}\right)^{x}
    grade: merit
    from: "2024"
    working:
      - math: \big(2^2\big)^{3x-1} = \big(2^{-3}\big)^{x}
        note: Use base two, because four and eight are both powers of two. Neither is a whole-number power of the other.
      - math: 2^{6x-2} = 2^{-3x}
        note: Multiply the exponents. The $2$ multiplies the whole of $3x - 1$, not only the $3x$.
      - math: 6x - 2 = -3x
      - math: 9x = 2 \;\Rightarrow\; x = \dfrac{2}{9}
  - ask: Solve.
    math: 8^{2x-1} = \left(\dfrac{1}{4}\right)^{x}
    grade: merit
    working:
      - math: \big(2^3\big)^{2x-1} = \big(2^{-2}\big)^{x}
        note: Use base two, because eight and four are both powers of two. Neither is a whole-number power of the other.
      - math: 2^{6x-3} = 2^{-2x}
        note: Multiply the exponents. The $3$ multiplies the whole of $2x - 1$, not only the $2x$.
      - math: 6x - 3 = -2x
      - math: 8x = 3 \;\Rightarrow\; x = \dfrac{3}{8}
```

---

## What a logarithm is

$\log_b y$ is the power that $b$ has to be raised to in order to give $y$. The formulae sheet states it as a pair: if $y = b^x$ then $x = \log_b y$.

The two statements are one fact written in two notations. Most of what a logarithm question asks for is changing one notation into the other.

```figure
id: b3-two-notations
caption: Two ways of writing one fact
steps:
  - math: 2^{\ca{5}} = 32
    note: Two raised to the fifth power is thirty-two.
  - math: \log_2 32 = \ca{5}
    note: The power that two must be raised to in order to give thirty-two is five. This is the same fact as the line above.
```

So to solve a logarithmic equation, write it in **index form**, which is the same fact written as a power. In $x = \log_3 243$ the unknown is a power, so write $3^x = 243$. The answer is $5$. In $\log_x 81 = 4$ the unknown is the base instead, so write $x^4 = 81$. Solving gives $3$ and $-3$, and only $3$ is the answer.

The base of a logarithm must be positive, and it cannot be $1$. So reject $-3$, and write the rejection down. You reject a value in the same way in $\log_x 36 = 2$, which gives $x^2 = 36$. So $x$ is $6$ or $-6$, and you reject $-6$. The 2023 marking schedule awards the higher grade only where that rejection is shown.

You also cannot take the logarithm of zero or of a negative number, because a power of a positive base is never zero or negative. Most of the values you reject later in this lesson are rejected for that reason.

```practice
caption: reading a logarithm
questions:
  - ask: Evaluate.
    math: \log_3 27
    grade: achieved
    working:
      - math: 3^{?} = 27
        note: Ask what power of $3$ gives $27$.
      - math: "3"
  - ask: Evaluate.
    math: \log_2 64
    grade: achieved
    working:
      - math: 2^{?} = 64
        note: Ask what power of $2$ gives $64$.
      - math: "6"
  - ask: Solve.
    math: x = \log_4 256
    grade: achieved
    from: "2024"
    working:
      - math: 4^x = 256
        note: Write it in index form, and ask what power of $4$ gives $256$.
      - math: x = 4
  - ask: Solve.
    math: x = \log_3 243
    grade: achieved
    working:
      - math: 3^x = 243
        note: Write it in index form, and ask what power of $3$ gives $243$.
      - math: x = 5
  - ask: Evaluate.
    math: \log_4 \dfrac{1}{16}
    grade: merit
    working:
      - math: 4^{?} = \dfrac{1}{16}
      - math: "-2"
        note: A reciprocal comes from a negative exponent, so the answer is negative rather than a fraction.
  - ask: Evaluate.
    math: \log_2 \dfrac{1}{8}
    grade: merit
    working:
      - math: 2^{?} = \dfrac{1}{8}
      - math: "-3"
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
        note: A logarithm cannot have a negative base, so reject $-7$. You must write that rejection down.
  - ask: Solve.
    math: \log_x 64 = 2
    grade: merit
    working:
      - math: x^2 = 64
        note: The unknown is the base this time.
      - math: x = 8 \quad\textsf{or}\quad x = -8
        note: Taking a square root gives two values.
      - math: x = 8
        note: A logarithm cannot have a negative base, so reject $-8$. You must write that rejection down.
```

---

## The logarithm rules

The formulae sheet gives three logarithm rules: one for a product, one for a quotient and one for a power.

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

The three rules are the index laws written in logarithm notation. A logarithm is an exponent, and multiplying powers of the same base adds the exponents. So the logarithm of a product is the sum of the logarithms.

```figure
caption: Why the product rule holds
steps:
  - math: b^{\ca{m}} \cdot b^{\cb{n}} = b^{\ca{m}+\cb{n}}
    note: This is the multiplying law for indices.
  - math: \log_b\!\left(b^{\ca{m}} \cdot b^{\cb{n}}\right) = \ca{m} + \cb{n}
    note: The logarithm base $b$ of a power of $b$ is the exponent, and here the exponent is a sum.
  - math: \log_b(xy) = \log_b x + \log_b y
    note: Writing $x$ for $b^m$ and $y$ for $b^n$ gives the rule as the formulae sheet states it.
```

$\log_b b = 1$, because $b^1 = b$. $\log_b 1 = 0$, because $b^0 = 1$. The formulae sheet does not give either value, so you have to remember them.

The rules apply to products, quotients and powers. $\log(x + y)$ is not $\log x + \log y$, and a sum inside a logarithm cannot be made simpler. The same is true of cancelling and of powers. They apply to each factor of a product, and never to each term of a sum.

To use the rules on a number, first split the number into factors. Where $p = \log_a 2$ and $q = \log_a 5$, you can find $\log_a 50$ by writing fifty as $2 \times 5^2$.

```figure
id: b3-in-terms-of
caption: Splitting a number into factors first
steps:
  - math: \log_a 50
    note: Fifty is not one of the values given, but its factors are.
  - math: \log_a\!\left(\ca{2} \times \cb{5}^2\right)
    note: Fifty is two times twenty-five, and twenty-five is five squared.
  - math: \log_a \ca{2} + \log_a \cb{5}^2
    note: Use the product rule to split it into two logarithms.
  - math: \log_a \ca{2} + 2\log_a \cb{5}
    note: Use the power rule to bring the exponent down in front.
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
    math: \log 6 + \log 5
    grade: achieved
    working:
      - math: \log(6 \times 5) = \log 30
        note: A sum of logarithms is the logarithm of a product.
  - ask: Write as a single logarithm.
    math: 2\log x - \log y
    grade: achieved
    working:
      - math: \log x^2 - \log y
        note: Use the power rule backwards, so the coefficient becomes a power.
      - math: \log\!\left(\dfrac{x^2}{y}\right)
        note: A difference of logarithms is the logarithm of a quotient.
  - ask: Write as a single logarithm.
    math: 3\log x - \log y
    grade: achieved
    working:
      - math: \log x^3 - \log y
        note: Use the power rule backwards, so the coefficient becomes a power.
      - math: \log\!\left(\dfrac{x^3}{y}\right)
        note: A difference of logarithms is the logarithm of a quotient.
  - ask: If $p = \log_a 3$ and $q = \log_a 7$, write $\log_a 63$ in terms of $p$ and $q$.
    grade: merit
    from: "2025"
    working:
      - math: \log_a\!\left(3^2 \times 7\right)
        note: Split sixty-three into the factors the question gives values for.
      - math: 2\log_a 3 + \log_a 7
      - math: 2p + q
  - ask: If $p = \log_a 2$ and $q = \log_a 5$, write $\log_a 200$ in terms of $p$ and $q$.
    grade: merit
    working:
      - math: \log_a\!\left(2^3 \times 5^2\right)
        note: Split two hundred into the factors the question gives values for.
      - math: 3\log_a 2 + 2\log_a 5
      - math: 3p + 2q
  - ask: Evaluate.
    math: 4 + \log_b\!\left(b^{-2}\right) + \log_b \sqrt{b}
    grade: excellence
    from: "2023"
    working:
      - math: 4 - 2\log_b b + \tfrac{1}{2}\log_b b
        note: Convert the surd to $b^{\frac{1}{2}}$, then bring both exponents down in front.
      - math: 4 - 2 + \tfrac{1}{2}
        note: $\log_b b$ is $1$, whatever the base is.
      - math: \tfrac{5}{2}
  - ask: Evaluate.
    math: 6 + \log_b\!\left(b^{-3}\right) + \log_b \sqrt[3]{b}
    grade: excellence
    working:
      - math: 6 - 3\log_b b + \tfrac{1}{3}\log_b b
        note: Convert the surd to $b^{\frac{1}{3}}$, then bring both exponents down in front.
      - math: 6 - 3 + \tfrac{1}{3}
        note: $\log_b b$ is $1$, whatever the base is.
      - math: \tfrac{10}{3}
```

---

## Solving a logarithmic equation

Combine every logarithm on each side into one, then convert to index form and solve what is left.

```figure
id: b3-log-equation
caption: Combining, then converting
steps:
  - math: 2\log_2(x+3) - \log_2 x = 4
    note: There are two logarithms on the left, with the same base.
  - math: \log_2(x+3)^2 - \log_2 x = 4
    note: Use the power rule backwards, so the coefficient becomes a power. The power applies to the whole bracket.
  - math: \log_2\!\left(\dfrac{(x+3)^2}{x}\right) = 4
    note: A difference of logarithms is the logarithm of a quotient.
  - math: \dfrac{(x+3)^2}{x} = 2^4
    note: This is index form, and the logarithm is gone.
  - math: x^2 + 6x + 9 = 16x
    note: Multiply both sides by $x$. Then expand $(x+3)^2$ in full, because it is not $x^2 + 9$.
  - math: x^2 - 10x + 9 = 0
  - math: x = 1 \quad\textsf{or}\quad x = 9
```

Check each root in the equation you were given. A root that puts zero or a negative number inside any logarithm is not a solution, because there is no such logarithm. Here both roots are solutions, because $x+3$ and $x$ are positive at $x = 1$ and at $x = 9$.

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
    math: \log_2 x + \log_2 3 = 4
    grade: achieved
    working:
      - math: \log_2 3x = 4
        note: Combine the two logarithms into one before converting.
      - math: 3x = 2^4 = 16
      - math: x = \dfrac{16}{3}
  - ask: Solve.
    math: \log_2 x + \log_2 (x - 2) = 3
    grade: merit
    working:
      - math: \log_2 x(x-2) = 3
      - math: x^2 - 2x = 8
        note: Convert to index form. The right side is $2^3$.
      - math: (x - 4)(x + 2) = 0
      - math: x = 4
        note: At $x=-2$ both logarithms would be of negative numbers, so reject that root.
  - ask: Solve.
    math: \log_3 x + \log_3 (x - 2) = 1
    grade: merit
    working:
      - math: \log_3 x(x-2) = 1
      - math: x^2 - 2x = 3
        note: Convert to index form. The right side is $3^1$.
      - math: (x - 3)(x + 1) = 0
      - math: x = 3
        note: At $x=-1$ both logarithms would be of negative numbers, so reject that root.
  - ask: Solve.
    math: 2\log_5(x + 4) - \log_5 x = 2
    grade: excellence
    from: "2025"
    working:
      - math: \log_5\!\left(\dfrac{(x+4)^2}{x}\right) = 2
        note: Use the power rule first, then the quotient rule.
      - math: (x+4)^2 = 25x
        note: Convert to index form and multiply both sides by $x$.
      - math: x^2 - 17x + 16 = 0
        note: Expand the square, then take everything to one side.
      - math: x = 16 \quad\textsf{or}\quad x = 1
  - ask: Solve.
    math: 2\log_4(x + 3) - \log_4 x = 2
    grade: excellence
    working:
      - math: \log_4\!\left(\dfrac{(x+3)^2}{x}\right) = 2
        note: Use the power rule first, then the quotient rule.
      - math: (x+3)^2 = 16x
        note: Convert to index form and multiply both sides by $x$.
      - math: x^2 - 10x + 9 = 0
        note: Expand the square, then take everything to one side.
      - math: x = 9 \quad\textsf{or}\quad x = 1
```

---

## When the bases cannot be matched

$5^x = 8$ has no common base. Eight is not a power of five, and you cannot rewrite it as one.

Take the logarithm of both sides instead. Then use the power rule to bring the $x$ down in front of the logarithm. Now you can divide to find $x$.

```figure
id: b3-take-logs
caption: Taking logarithms of both sides
steps:
  - math: 5^x = 8
    note: Eight is not a power of five, so there is nothing to match.
  - math: \log\!\left(5^x\right) = \log 8
    note: Take the logarithm of both sides. Any base works, so use base $10$, which is the log key on a calculator.
  - math: x\log 5 = \log 8
    note: Use the power rule to bring the exponent down in front of the logarithm.
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
    math: 2^x = 30
    grade: achieved
    working:
      - math: x\log 2 = \log 30
        note: Thirty is not a power of two, so the bases cannot be matched.
      - math: x = \dfrac{\log 30}{\log 2} = 4.91
  - ask: Solve, to three significant figures.
    math: 2^{x+1} = 45
    grade: merit
    working:
      - math: (x+1)\log 2 = \log 45
        note: The whole exponent comes down, so put it in a bracket.
      - math: x + 1 = 5.4919
      - math: x = 4.49
  - ask: Solve, to three significant figures.
    math: 3^{x+1} = 50
    grade: merit
    working:
      - math: (x+1)\log 3 = \log 50
        note: The whole exponent comes down, so put it in a bracket.
      - math: x + 1 = 3.5609
      - math: x = 2.56
  - ask: Solve, to three significant figures.
    math: 5 \times 4^x = 90
    grade: merit
    working:
      - math: 4^x = 18
        note: Divide by the $5$ first. The power rule applies to an exponent, not to a coefficient.
      - math: x = \dfrac{\log 18}{\log 4} = 2.08
  - ask: Solve, to three significant figures.
    math: 3 \times 5^x = 120
    grade: merit
    working:
      - math: 5^x = 40
        note: Divide by the $3$ first. The power rule applies to an exponent, not to a coefficient.
      - math: x = \dfrac{\log 40}{\log 5} = 2.29
```

---

## Quadratics in disguise

An exponential equation that contains two different powers of the same base is often a quadratic equation in disguise. $2^{2x}$ is $\left(2^x\right)^2$, so an equation containing both $2^{2x}$ and $2^x$ is an equation in $2^x$ and its square.

Write a single letter, such as $u$, for $2^x$. The equation then becomes an ordinary quadratic in $u$.

```figure
id: b3-hidden-quadratic
caption: A quadratic in disguise
steps:
  - math: 2^{2x} - 2^x - 6 = 0
    note: There are two different powers of two, and one is the square of the other.
  - math: \left(\ca{2^x}\right)^2 - \ca{2^x} - 6 = 0
    note: $2^{2x}$ is $2^x$ squared, by the power of a power law.
  - math: u^2 - u - 6 = 0 \qquad \textsf{where } u = \ca{2^x}
    note: Writing $u$ for $2^x$ shows that the equation is a quadratic.
  - math: (u - 3)(u + 2) = 0
  - math: 2^x = 3 \quad\textsf{or}\quad 2^x = -2
    note: Replace $u$ with $2^x$ in both answers.
  - math: x = \dfrac{\log 3}{\log 2} = 1.58
    note: A power of a positive base is never negative, so $2^x = -2$ has no solution.
```

A positive base raised to any power is positive, so $2^x = -2$ has no solution. The second value of $u$ does not give a value of $x$. Write the rejection down. On the 2025 marking schedule, excluding the negative value is part of what the highest grade for that question requires.

The powers do not always match as neatly as $2^{2x}$ and $2^x$. In $3^{2x+1}$ the exponent has an extra $1$ in it, and you use the multiplying law to separate it: $3^{2x+1} = 3 \cdot 3^{2x} = 3\left(3^x\right)^2$. Likewise $3^{x+2} = 3^2 \cdot 3^x = 9 \cdot 3^x$. Both become multiples of $3^x$, the quantity you replace with $u$.

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
        note: Both values are positive, so you keep both.
      - math: x = 0 \quad\textsf{or}\quad x = 1
  - ask: Solve.
    math: 4^x - 5 \times 2^x + 4 = 0
    grade: merit
    working:
      - math: \left(2^x\right)^2 - 5\left(2^x\right) + 4 = 0
        note: Four is $2^2$, so $4^x$ is $2^x$ squared.
      - math: (u - 1)(u - 4) = 0 \qquad \textsf{where } u = 2^x
      - math: 2^x = 1 \quad\textsf{or}\quad 2^x = 4
        note: Both values are positive, so you keep both.
      - math: x = 0 \quad\textsf{or}\quad x = 2
  - ask: Solve.
    math: 4^{2x} - 3 \times 4^x - 4 = 0
    grade: merit
    from: "2023"
    working:
      - math: u^2 - 3u - 4 = 0 \qquad \textsf{where } u = 4^x
      - math: (u - 4)(u + 1) = 0
      - math: 4^x = 4 \quad\textsf{or}\quad 4^x = -1
      - math: x = 1
        note: A power of four is never negative, so only the first value gives a solution.
  - ask: Solve.
    math: 9^{2x} - 2 \times 9^x - 3 = 0
    grade: merit
    working:
      - math: u^2 - 2u - 3 = 0 \qquad \textsf{where } u = 9^x
      - math: (u - 3)(u + 1) = 0
      - math: 9^x = 3 \quad\textsf{or}\quad 9^x = -1
      - math: x = \dfrac{1}{2}
        note: A power of nine is never negative, so only the first value gives a solution, and $9^{\frac{1}{2}}$ is $3$.
  - ask: Solve, to three significant figures.
    math: 3^{2x+1} - 54 = 3^{x+2}
    grade: excellence
    from: "2025"
    working:
      - math: 3\left(3^x\right)^2 - 54 = 9\left(3^x\right)
        note: Separate the extra terms from each exponent, so that both sides are written in terms of $3^x$.
      - math: 3u^2 - 9u - 54 = 0 \qquad \textsf{where } u = 3^x
        note: Take everything to one side, because every method for a quadratic starts from zero on one side.
      - math: u^2 - 3u - 18 = 0
        note: Divide through by $3$, which is allowed because $3$ is a number and not the unknown.
      - math: (u - 6)(u + 3) = 0
      - math: 3^x = 6
        note: $3^x = -3$ is impossible, so discard it.
      - math: x = \dfrac{\log 6}{\log 3} = 1.63
  - ask: Solve, to three significant figures.
    math: 3^{2x+1} - 30 = 3^{x+2}
    grade: excellence
    working:
      - math: 3\left(3^x\right)^2 - 30 = 9\left(3^x\right)
        note: Separate the extra terms from each exponent, so that both sides are written in terms of $3^x$.
      - math: 3u^2 - 9u - 30 = 0 \qquad \textsf{where } u = 3^x
        note: Take everything to one side, because every method for a quadratic starts from zero on one side.
      - math: u^2 - 3u - 10 = 0
        note: Divide through by $3$, which is allowed because $3$ is a number and not the unknown.
      - math: (u - 5)(u + 2) = 0
      - math: 3^x = 5
        note: $3^x = -2$ is impossible, so discard it.
      - math: x = \dfrac{\log 5}{\log 3} = 1.46
```

---

## Growth and decay

The specification names compound interest, growth and decay as contexts in which an exponential equation may have to be formed and then solved.

All three use the same kind of equation: a starting amount multiplied by the same factor once in each period. A factor greater than one gives growth, and a factor less than one gives decay.

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
    note: There is no common base, so take logarithms of both sides.
  - math: t = 5.39
    note: Both of those logarithms are negative, and dividing one by the other gives a positive time.
  - math: 6 \textsf{ years}
    note: The value passes 10 000 dollars during the sixth year, and years are counted whole.
```

Compound interest is the same equation with a factor greater than one: an amount $P$ at $6\%$ a year is worth $P \times 1.06^{\,n}$ after $n$ years.

Some models use the base $e$ instead of a base such as $1.06$. $e$ is a fixed number, about $2.718$, and it behaves like any other base. The logarithm with base $e$ is the **natural logarithm**, written $\ln$. The formulae sheet gives $\ln y = \log_e y$. A model given in that form usually has an unknown constant in it. Find the constant by substituting the starting values first.

```practice
caption: growth and decay
questions:
  - ask: 5000 dollars is invested at 6 per cent a year, compounding annually. Find the value of the investment after 4 years.
    grade: achieved
    working:
      - math: V = 5000 \times 1.06^{\,4}
        note: Six per cent added each year means multiplying by $1.06$ once a year.
      - math: V = 6312.38
  - ask: 8000 dollars is invested at 5 per cent a year, compounding annually. Find the value of the investment after 6 years.
    grade: achieved
    working:
      - math: V = 8000 \times 1.05^{\,6}
        note: Five per cent added each year means multiplying by $1.05$ once a year.
      - math: V = 10720.77
  - ask: 5000 dollars is invested at 6 per cent a year, compounding annually. Find the number of whole years before the investment is worth more than 8000 dollars.
    grade: merit
    working:
      - math: 5000 \times 1.06^{\,n} = 8000
        note: Write the equation down before solving it.
      - math: 1.06^{\,n} = 1.6
      - math: n = \dfrac{\log 1.6}{\log 1.06} = 8.07
        note: There is no common base, so take logarithms of both sides.
      - math: 9 \textsf{ years}
        note: Eight whole years is not yet enough, so round up, not to the nearest whole year.
  - ask: 8000 dollars is invested at 5 per cent a year, compounding annually. Find the number of whole years before the investment is worth more than 12000 dollars.
    grade: merit
    working:
      - math: 8000 \times 1.05^{\,n} = 12000
        note: Write the equation down before solving it.
      - math: 1.05^{\,n} = 1.5
      - math: n = \dfrac{\log 1.5}{\log 1.05} = 8.31
        note: There is no common base, so take logarithms of both sides.
      - math: 9 \textsf{ years}
        note: Eight whole years is not yet enough, so round up, not to the nearest whole year.
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
  - ask: The value $V$ of a machine in dollars is modelled by $V = 80 + ke^{-0.3t}$, where $t$ is the time in years since it was bought and $k$ is a constant. The machine cost 1580 dollars. Find $k$, and find when the machine is worth 500 dollars.
    grade: excellence
    working:
      - math: 1580 = 80 + ke^{0}
        note: It cost 1580 dollars when it was bought, so that is the value at $t = 0$.
      - math: k = 1500
        note: Anything to the power zero is one, so the whole exponential term is $k$ at that moment.
      - math: 500 = 80 + 1500e^{-0.3t}
        note: Now the model is complete, the second question is an equation in $t$ alone.
      - math: e^{-0.3t} = 0.28
      - math: -0.3t = \ln 0.28
        note: Take the natural logarithm of both sides, because the base here is $e$.
      - math: t = 4.24 \textsf{ years}
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well.

```practice
questions:
  - ask: Solve.
    math: 2^{3x} = 64
    grade: achieved
    working:
      - math: 2^{3x} = 2^6
      - math: 3x = 6 \;\Rightarrow\; x = 2
  - ask: Solve.
    math: 3^{2x} = 729
    grade: achieved
    working:
      - math: 3^{2x} = 3^6
      - math: 2x = 6 \;\Rightarrow\; x = 3
  - ask: Evaluate.
    math: \log_2 32 - \log_2 4
    grade: achieved
    working:
      - math: \log_2\!\left(\dfrac{32}{4}\right) = \log_2 8
        note: Reading each logarithm separately gives $5-2$ and the same answer.
      - math: "3"
  - ask: Evaluate.
    math: \log_2 64 - \log_2 4
    grade: achieved
    working:
      - math: \log_2\!\left(\dfrac{64}{4}\right) = \log_2 16
        note: Reading each logarithm separately gives $6-2$ and the same answer.
      - math: "4"
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
  - ask: Find an expression for $p$ in terms of $x$.
    math: \dfrac{7^{3x+2}}{7^{-2x}} = 7^{5p}
    grade: merit
    working:
      - math: 7^{3x+2-(-2x)} = 7^{5p}
        note: Dividing powers of the same base subtracts the exponents, and subtracting a negative adds.
      - math: 7^{5x+2} = 7^{5p}
      - math: 5x + 2 = 5p
      - math: p = \dfrac{5x+2}{5}
  - ask: If $\log_b x = 3$ and $\log_{2b} y = 3$, write $y$ in terms of $x$.
    grade: merit
    from: "2024"
    working:
      - math: b^3 = x
        note: Put each statement into index form, where the base is visible.
      - math: (2b)^3 = y
      - math: 8b^3 = y
        note: The cube applies to the $2$ as well as to the $b$.
      - math: y = 8x
        note: $b^3$ is $x$, so the whole of $8b^3$ is $8x$.
  - ask: If $\log_b x = 2$ and $\log_{3b} y = 2$, write $y$ in terms of $x$.
    grade: merit
    working:
      - math: b^2 = x
        note: Put each statement into index form, where the base is visible.
      - math: (3b)^2 = y
      - math: 9b^2 = y
        note: The square applies to the $3$ as well as to the $b$.
      - math: y = 9x
        note: $b^2$ is $x$, so the whole of $9b^2$ is $9x$.
  - ask: The magnitude $M$ of an earthquake is given by $M = \log_{10}\!\left(\dfrac{I}{I_0}\right)$, where $I$ is its intensity and $I_0$ is a fixed reference intensity. Show that an earthquake of magnitude 6.2 is more than 15 times as intense as one of magnitude 5.0.
    grade: excellence
    from: "2024"
    working:
      - math: 6.2 = \log_{10}\!\left(\dfrac{I_1}{I_0}\right) \;\Rightarrow\; I_1 = 10^{6.2}I_0
        note: Convert to index form, which gives each intensity in terms of the reference.
      - math: I_2 = 10^{5.0}I_0
        note: Do the same for the second earthquake, with the same reference intensity.
      - math: \dfrac{I_1}{I_2} = \dfrac{10^{6.2}I_0}{10^{5.0}I_0} = 10^{1.2}
        note: The reference cancels, and dividing powers of the same base subtracts the exponents.
      - math: 10^{1.2} = 15.85 > 15
        note: The question said show, so state the comparison with fifteen.
  - ask: The sound level $L$ in decibels is given by $L = 10\log_{10}\!\left(\dfrac{I}{I_0}\right)$, where $I$ is the intensity of the sound and $I_0$ is a fixed reference intensity. Show that a sound of 85 decibels is more than 30 times as intense as one of 70 decibels.
    grade: excellence
    working:
      - math: 85 = 10\log_{10}\!\left(\dfrac{I_1}{I_0}\right) \;\Rightarrow\; I_1 = 10^{8.5}I_0
        note: Divide by the $10$ before converting, then convert to index form.
      - math: I_2 = 10^{7.0}I_0
        note: Do the same for the second sound, with the same reference intensity.
      - math: \dfrac{I_1}{I_2} = \dfrac{10^{8.5}I_0}{10^{7.0}I_0} = 10^{1.5}
        note: The reference cancels, and dividing powers of the same base subtracts the exponents.
      - math: 10^{1.5} = 31.6 > 30
        note: The question said show, so state the comparison with thirty.
```

---

## Summary

An exponential equation has the unknown in the power.

Write both sides as powers of one base, and then the exponents are equal. To reach that form, use the index laws to write a number as a power, a reciprocal as a negative exponent, and a root as a fractional exponent.

A logarithm is a power. $\log_b y$ is the power that $b$ is raised to in order to give $y$. In almost every logarithm question, the first step is to write the logarithm in index form.

The three logarithm rules are on the formulae sheet and are the index laws in another notation. They apply to products, quotients and powers, and never to a sum inside the logarithm.

Where the two sides do not have a common base, take logarithms of both sides. Then use the power rule to bring the exponent down.

Where one power of a base is the square of another, write $u$ for the smaller power. The equation becomes a quadratic in $u$. Solve the quadratic, then reject any value that would make a power of a positive base negative.

Growth and decay use the same equation, with a factor greater than one for growth and less than one for decay. The specification names them as contexts that the examination may use.
