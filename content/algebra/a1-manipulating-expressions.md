# A1 — Manipulating algebraic expressions

---

Nothing in this lesson has an equals sign, so nothing in it gets solved. Every question asks the same thing: here is an expression, write it more simply.

What follows is the toolkit for doing that — one rule that governs all of it, then three techniques applied in a fixed order.

---

## The rule

One rule governs all work with expressions: the value must not change.

You may rewrite an expression in any form you like, provided that substituting a number for $x$ gives the same answer before and after. Everything else in this lesson is technique for doing exactly that.

```figure
caption: Checking by substitution
steps:
  - math: 6x^2 + 9x \quad\longrightarrow\quad 3x(2x+3)
    note: The claim is that these two are the same expression. Test it.
  - math: 6(\ca{4})^2 + 9(\ca{4})
    note: Choose a number. Put $x = 4$ into the original expression.
  - math: 96 + 36 = 132
  - math: 3(\ca{4})\big(2(\ca{4})+3\big)
    note: Now put the same number into the simplified expression.
  - math: 12 \times 11 = 132
    note: The answers match, so no error has been introduced.
```

That rule also allows you to check your work. Choose a number, substitute it into the original expression and into your simplified expression, then calculate and compare the two. If the answers differ, there is an error in the working.

---

## Expanding and factorising

```figure
caption: Two directions
steps:
  - math: |
      (x+2)(x+5) \quad\underset{\textsf{\scriptsize factorise}}{\overset{\textsf{\scriptsize expand}}{\rightleftharpoons}}\quad x^2 + 7x + 10
    note: A product on the left, a sum of terms on the right. The same expression both times.
```

Two operations, and they are opposites of each other.

```figure
id: a1-expand
caption: Expanding
steps:
  - math: (\ca{x}+\cb{2})(\cc{x}+\cd{5})
    note: Multiply each term in the first bracket by each term in the second.
  - math: \ca{x}\!\cdot\!\cc{x} \;+\; \ca{x}\!\cdot\!\cd{5} \;+\; \cb{2}\!\cdot\!\cc{x} \;+\; \cb{2}\!\cdot\!\cd{5}
    note: Four products, because there are two terms in each bracket.
  - math: x^2 + \ca{5x} + \cb{2x} + 10
    note: Two of them are like terms.
  - math: x^2 + 7x + 10
```

**Expanding** converts a product into a sum of terms. Take $x$ plus two, times $x$ plus five. Multiply each term in the first bracket by each term in the second. $x$ times $x$ is $x$ squared. $x$ times five is five $x$. Two times $x$ is two $x$. Two times five is ten. Collect the like terms: $x$ squared plus seven $x$ plus ten.

```figure
caption: Factorising — the same figure, read upwards
steps:
  - math: x^2 + 7x + 10
    note: Start from the sum of terms.
  - math: x^2 + \ca{5x} + \cb{2x} + 10
    note: Seven x came from somewhere. Split it back apart.
  - math: (\ca{x}+\cb{2})(\cc{x}+\cd{5})
    note: And you are back at the product you started with.
```

**Factorising** converts a sum of terms into a product. Starting from $x$ squared plus seven $x$ plus ten, you recover $x$ plus two, times $x$ plus five.

The same expression, written two ways.

They differ in difficulty. Expanding is mechanical and always possible. Factorising is a search — you are working out what must have been multiplied together to produce the result — and not every expression factorises. That is why factorising is where the marks are.

---

## What factorising is for

```figure
caption: What a product lets you do
steps:
  - math: \dfrac{(x+2)(x+5)}{x+2}
    note: A factor that appears top and bottom can be cancelled.
  - math: \dfrac{\ca{\cancel{(x+2)}}(x+5)}{\ca{\cancel{x+2}}} \;=\; x+5
  - math: (x+2)(x+5) = 0
    note: And if a product is zero, one of the factors must be zero.
  - math: x + 2 = 0 \quad\textsf{or}\quad x + 5 = 0
    note: Which is how a quadratic gets solved. Neither move works on a sum of terms.
```

Factors do two things that terms cannot.

First: in an algebraic fraction, only factors cancel. Terms never cancel. So anything you intend to cancel has to be in factorised form first. That is the subject of the next lesson.

Second: if two things multiply to give zero, at least one of them must be zero. That is the basis for solving a quadratic by factorising, and it requires a product. A sum of terms will not do.

Factorising is the step that makes both of those available.

---

## The toolkit

```figure
caption: The order of attack
steps:
  - math: |
      \begin{array}{rl}
      1. & \textsf{common factor} \\[3pt]
      2. & \textsf{difference of two squares} \\[3pt]
      3. & \textsf{quadratic trinomial}
      \end{array}
    note: Always in this order. Step one often turns the expression into a case for step two or three.
```

Three tools, applied in this order.

### One — common factor

```figure
id: a1-common-factor
caption: Taking out a common factor
steps:
  - math: 6x^2 + 9x
    note: What appears in every term?
  - math: \ca{3}\!\cdot\!2\!\cdot\!\cb{x}\!\cdot\!x \;+\; \ca{3}\!\cdot\!3\!\cdot\!\cb{x}
    note: A three in both, and at least one $x$ in both.
  - math: \ca{3}\cb{x}(2x+3)
    note: The common part comes out the front, and what each term had left stays inside.
```

Examine every term for something they all contain, and take it outside a bracket.

Six $x$ squared plus nine $x$. Every term contains a factor of three, and every term contains at least one $x$. Take out three $x$. What remains inside the bracket is two $x$ plus three. The result is three $x$, bracket, two $x$ plus three.

Verify by expanding it back. Three $x$ times two $x$ is six $x$ squared. Three $x$ times three is nine $x$. Correct.

```figure
caption: Why the common factor comes first
steps:
  - math: 2x^2 - 18
    note: Not a form you recognise.
  - math: 2(\ca{x^2 - 9})
    note: Take out the two — and now the bracket is the next tool.
  - math: 2(x+3)(x-3)
```

Take out common factors first in every case. It frequently converts an unfamiliar expression into a standard one. Two $x$ squared minus eighteen is not a recognised form. Take out the two and it becomes two, bracket, $x$ squared minus nine — and $x$ squared minus nine is the next tool.

### Two — difference of two squares

```figure
caption: Difference of two squares
steps:
  - math: \ca{a^2} \;\cb{-}\; \cc{b^2} \;=\; (a+b)(a-b)
    note: Both terms are squares, and there is a minus between them. Both conditions must hold.
```

$a$ squared minus $b$ squared factorises to $a$ plus $b$, times $a$ minus $b$.

Two conditions must both hold. Both terms are perfect squares, and they are separated by a minus.

```figure
caption: Spotting it
steps:
  - math: x^2 - 9
  - math: (x+3)(x-3)
    note: Nine is three squared.
  - math: 4x^2 - 25
    note: Less obvious. Is each term a square?
  - math: (\ca{2x})^2 - (\cb{5})^2
    note: Both terms are squares, so the rule applies.
  - math: (\ca{2x}+\cb{5})(\ca{2x}-\cb{5})
```

$x$ squared minus nine becomes $x$ plus three, times $x$ minus three. Four $x$ squared minus twenty-five becomes two $x$ plus five, times two $x$ minus five — because four $x$ squared is two $x$ all squared, and twenty-five is five squared.

```figure
caption: The one that does not work
steps:
  - math: x^2 + 9
    note: A sum of two squares. There is no pair of brackets that produces this — check any pair you try by expanding it.
```

$a$ squared **plus** $b$ squared does not factorise. There is no pair of brackets that produces $x$ squared plus nine.

### Three — quadratic trinomials

```figure
id: a1-trinomial
caption: Factorising a trinomial
steps:
  - math: x^2 + \ca{7}x + \cb{12}
    note: Two numbers that multiply to the constant $\cb{12}$ and add to the coefficient $\ca{7}$.
  - math: \cc{3} \times \cd{4} = \cb{12} \qquad \cc{3} + \cd{4} = \ca{7}
  - math: (x+\cc{3})(x+\cd{4})
```

Three terms, with $x$ squared at the front. Take $x$ squared plus seven $x$ plus twelve.

Find two numbers that multiply to give the constant and add to give the coefficient of $x$. Multiply to twelve, add to seven: three and four. The factorisation is $x$ plus three, times $x$ plus four.

```figure
caption: What the signs tell you
steps:
  - math: |
      \begin{array}{c|c}
      \textsf{constant is }+ & \textsf{both numbers share a sign,} \\
       & \textsf{matching the middle term} \\[6pt]
      \hline \\[-6pt]
      \textsf{constant is }- & \textsf{one of each sign; the larger} \\
       & \textsf{carries the middle term's sign}
      \end{array}
```

The signs follow a pattern. If the constant is positive, both numbers carry the same sign, and that sign matches the middle term. If the constant is negative, one number is positive and one is negative, and the larger of the two carries the sign of the middle term.

```figure
id: a1-split-middle
caption: When there is a coefficient on the x squared
steps:
  - math: \ca{2}x^2 + 7x + \cb{3}
    note: Multiply the coefficient of $x^2$ by the constant. Two times three is six.
  - math: \cc{6} \times \cd{1} = 6 \qquad \cc{6} + \cd{1} = 7
    note: Now find two numbers multiplying to six and adding to seven.
  - math: 2x^2 + \cc{6x} + \cd{x} + 3
    note: Use them to split the middle term. Four terms now, in two pairs.
  - math: \ca{2x}(x+3) + \cb{1}(x+3)
    note: Factorise the first pair and the last pair separately.
  - math: 2x(\ca{x+3}) + 1(\ca{x+3})
    note: The same bracket appears in both. That is the sign it has worked.
  - math: (x+3)(2x+1)
    note: Take the common bracket out, and what is left is the other one.
```

When there is a coefficient in front of the $x$ squared, the method extends. Take two $x$ squared plus seven $x$ plus three. Multiply the coefficient of $x$ squared by the constant: two times three is six. Find two numbers that multiply to six and add to seven: six and one. Use them to split the middle term into six $x$ plus one $x$. Then factorise the first two terms and the last two terms separately, and a common bracket appears. This one is worth deliberate practice. It comes up regularly.

---

## Collecting like terms

```figure
caption: Like and unlike
steps:
  - math: 3\ca{x^2} + 5\ca{x^2} \;=\; 8\ca{x^2}
    note: Identical letter parts, so the coefficients add.
  - math: 3\ca{x^2} + 5\cb{x}
    note: Different letter parts. This is already as simple as it gets.
  - math: 3x^2 + 5x \ne 8x^3 \quad\textsf{and}\quad \ne 8x
    note: Neither of these is available. The two terms stay where they are.
```

Terms are **like** when their letter parts are identical — same letters, same powers.

Three $x$ squared and five $x$ squared are like terms. They combine to eight $x$ squared. Three $x$ squared and five $x$ are not like terms. They stay separate, and no amount of work will combine them.

Add the coefficients. The letter part does not change.

---

## Summary

Expressions are simplified. Equations are solved. This module is expressions.

Expanding and factorising are opposites. Expanding is the mechanical direction. Factorising is the one being assessed.

Factorise in a fixed order: common factor, then difference of two squares, then trinomial.

Check factorising by expanding it back. Check simplifying by substituting a number.

One point from the examination specification. Algebraic technique must be shown, not just a correct answer, and answers must be given in their simplest form. The working carries as much weight as the result. So when you practise, state the reason for each step out loud — common factor first, which left a difference of two squares. Being able to say it is what lets you write it down, and writing it down is what takes you past Achieved.
