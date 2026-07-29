# A1 — Manipulating algebraic expressions

---

Nothing in this lesson has an equals sign, so nothing in it gets solved. Every question asks the same thing: here is an expression, write it more simply.

What follows is the toolkit for doing that — one rule that governs all of it, the two words for the parts of an expression, then three techniques applied in a fixed order.

---

## The value must not change

One rule governs all work with expressions: the value must not change.

You may rewrite an expression in any form you like, provided that substituting a number for $x$ gives the same answer before and after. Everything else in this lesson is technique for doing exactly that.

That rule also allows you to check your work. Choose a number, substitute it into the original expression and into your simplified expression, then calculate and compare the two. If the answers differ, there is an error in the working.

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

### Substituting needs brackets

Write the number inside brackets every time you substitute, before doing any arithmetic. The brackets keep the number attached to whatever was being done to $x$.

Substitute minus three for $x$ in $x$ squared. With brackets, the whole of minus three is squared, and the answer is nine. Without them, only the three is squared and the minus is left sitting outside, which gives minus nine. The two answers differ by a sign.

```figure
caption: Substituting a negative number
steps:
  - math: x^2 \qquad\textsf{where}\qquad x = \ca{-3}
    note: Substitute a negative number and the brackets decide the answer.
  - math: (\ca{-3})^2 = 9
    note: With brackets, the whole of minus three is squared.
  - math: "-3^2 = -9"
    note: Without them, only the three is squared, and the minus stays outside it.
```

The same pair of brackets separates two different expressions. Minus $x$ squared means square $x$ and then make the result negative. Minus $x$, all squared, means square the whole of minus $x$, and that is positive. The examiner's reports list substituting incorrectly and mishandling negative numbers as separate reasons candidates did not achieve, and a missing bracket produces both.

What you substitute is often an expression rather than a number, and the brackets matter more there, because there is more inside them for the operation to reach. If the radius of a circle is two $x$, the area is $\pi$ times two $x$, all squared, which is four $\pi$ times $x$ squared. Leave the brackets off and the square reaches the $x$ but not the two, and every line after that is wrong. The 2024 report names that error exactly: candidates who formed a correct expression and then did not put brackets around the radius.

```figure
caption: Brackets around a substituted expression
steps:
  - math: A = \pi r^2 \qquad\textsf{where}\qquad r = \ca{2x}
    note: This time what goes in is an expression, not a number.
  - math: A = \pi(\ca{2x})^2 = 4\pi x^2
    note: The bracket makes the square reach the two as well as the $x$.
  - math: A = \pi \cdot \ca{2x}^2 = 2\pi x^2 \qquad \color{red}{\times}
    note: Without it the two is never squared, and the error is carried through the rest of the question.
```

```practice
caption: substituting
questions:
  - ask: Evaluate the expression when $x = -3$.
    math: 2x^2 - 5x
    grade: achieved
    working:
      - math: 2(\ca{-3})^2 - 5(\ca{-3})
        note: Brackets in first, arithmetic afterwards. Doing it in that order is what keeps the signs right.
      - math: 2(9) + 15
        note: A negative squared is positive, and subtracting a negative adds.
      - math: "33"
  - ask: A student factorised the expression as $(x+3)(x-3)$. Decide by substitution whether that is correct.
    math: x^2 - 6x + 9
    grade: achieved
    working:
      - math: (\ca{1})^2 - 6(\ca{1}) + 9 = 4
        note: Choose any number and put it into the expression you were given.
      - math: (\ca{1}+3)(\ca{1}-3) = -8
        note: Now the same number into the answer being tested.
      - math: \textsf{Not correct}
        note: The two disagree, so the factorising is wrong. The bracket that agrees is $(x-3)^2$.
```

---

## Terms and factors

Two words name the parts of an expression, and the difference between them decides what you are allowed to do with those parts.

**Terms** are the parts that are added. Three $x$ squared plus five $x$ minus two has three terms. The sign in front of a term belongs to that term, so the third term is minus two rather than two.

Within a term, the number in front of the letters is the **coefficient**, and the letters are the **letter part**. A term with no letters at all is the **constant**. Where no number is written the coefficient is one, so $x$ squared means one $x$ squared.

```figure
caption: The parts of a term
steps:
  - math: \ca{3}x^2 + \ca{5}x - \cb{2}
    note: Three and five are coefficients. Minus two is the constant.
```

**Factors** are the parts that are multiplied. Three $x$ times the bracket $x$ plus three has two factors: the three $x$, and the bracket.

Which of the two words applies depends on the form in front of you. A sum is cut into terms. A product is cut into factors. The same expression can be written either way, and moving between those two forms is the whole of what expanding and factorising do.

```figure
caption: The same expression, cut two ways
steps:
  - math: 6x^2 + 9x
    note: Added, so the parts are terms. There are two of them.
  - math: 3x(2x+3)
    note: Multiplied, so the parts are factors. Two of those as well, and one of them is a bracket.
  - math: 6x^2 + 9x \;=\; 3x(2x+3)
    note: One expression and one value, written two ways. Only the form has changed.
```

A term has factors of its own. Six $x$ squared is six times $x$ times $x$, so six and $x$ are both factors of it, and searching every term for a factor they all share is the first of the three techniques below. The expression as a whole is different. It has factors only once the whole of it is a product. Six $x$ squared plus nine $x$ has none, because the last thing done in it is an addition.

The rest of the lesson moves between those two forms.

---

## Expanding and factorising

Two operations, and they are opposites of each other.

```figure
caption: Two directions
steps:
  - math: |
      (x+2)(x+5) \quad\underset{\textsf{\scriptsize factorise}}{\overset{\textsf{\scriptsize expand}}{\rightleftharpoons}}\quad x^2 + 7x + 10
    note: A product on the left, a sum of terms on the right. The same expression both times.
```

**Expanding** converts a product into a sum of terms. Take $x$ plus two, times $x$ plus five. Multiply each term in the first bracket by each term in the second. $x$ times $x$ is $x$ squared. $x$ times five is five $x$. Two times $x$ is two $x$. Two times five is ten. Collect the like terms: $x$ squared plus seven $x$ plus ten.

```figure
id: a1-expand
caption: Expanding
steps:
  - math: (\ca{x}+\cb{2})(\cc{x}+\cd{5})
    note: Multiply each term in the first bracket by each term in the second.
  - math: \ca{x}\!\cdot\!\cc{x} \;+\; \ca{x}\!\cdot\!\cd{5} \;+\; \cb{2}\!\cdot\!\cc{x} \;+\; \cb{2}\!\cdot\!\cd{5}
    note: Four products, because there are two terms in each bracket.
  - math: x^2 + \ca{5x} + \cb{2x} + 10
    note: Two of them have the same letter part, so they combine into one.
  - math: x^2 + 7x + 10
```

Three brackets are expanded the same way, two at a time: expand any two of them, then multiply that result by the bracket left over. The 2024 report describes candidates who identified three correct factors and then could not expand them, so the expansion is worth practising on its own.

**Factorising** converts a sum of terms into a product. Starting from $x$ squared plus seven $x$ plus ten, you recover $x$ plus two, times $x$ plus five.

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

The same expression, written two ways.

They differ in difficulty. Expanding is mechanical and always possible. Factorising is a search — you are working out what must have been multiplied together to produce the result — and not every expression factorises. That is why factorising is where the marks are.

```practice
caption: expanding
questions:
  - ask: Expand and simplify.
    math: (x+3)(x+7)
    grade: achieved
    working:
      - math: x^2 + 7x + 3x + 21
        note: Four products, one for each pairing of terms.
      - math: x^2 + 10x + 21
  - ask: Expand and simplify.
    math: (2x-5)(x+4)
    grade: achieved
    working:
      - math: 2x^2 + 8x - 5x - 20
        note: The minus five carries its sign into both of its products.
      - math: 2x^2 + 3x - 20
  - ask: Expand and simplify.
    math: (3x-2)^2
    grade: achieved
    working:
      - math: (3x-2)(3x-2)
        note: A square is the bracket written out twice. It does not square each term.
      - math: 9x^2 - 6x - 6x + 4
      - math: 9x^2 - 12x + 4
        note: The middle term is the one that disappears if you square term by term.
  - ask: Expand and simplify.
    math: (x-1)(x+2)(x-3)
    grade: merit
    working:
      - math: (\ca{x^2 + x - 2})(x-3)
        note: Expand two of the brackets first, and the third one waits.
      - math: x^3 - 3x^2 + x^2 - 3x - 2x + 6
        note: Six products this time, because three terms are multiplied by two.
      - math: x^3 - 2x^2 - 5x + 6
```

---

## What factorising is for

Factors do two things that terms cannot.

First: in an algebraic fraction, only factors cancel. Terms never cancel. So anything you intend to cancel has to be in factorised form first. That is the subject of the next lesson.

Second: if two things multiply to give zero, at least one of them must be zero. That is the basis for solving a quadratic by factorising, and it requires a product. A sum of terms will not do.

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

Factorising is the step that makes both of those available.

---

## Three ways to factorise

Three tools, applied in this order.

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

### One — common factor

Examine every term for something they all contain, and take it outside a bracket.

Six $x$ squared plus nine $x$. Every term contains a factor of three, and every term contains at least one $x$. Take out three $x$. What remains inside the bracket is two $x$ plus three. The result is three $x$, bracket, two $x$ plus three.

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

Verify by expanding it back. Three $x$ times two $x$ is six $x$ squared. Three $x$ times three is nine $x$. Correct.

Take out common factors first in every case. It frequently converts an unfamiliar expression into a standard one. Two $x$ squared minus eighteen is not a recognised form. Take out the two and it becomes two, bracket, $x$ squared minus nine — and $x$ squared minus nine is the next tool.

```figure
caption: Why the common factor comes first
steps:
  - math: 2x^2 - 18
    note: Not a form you recognise.
  - math: 2(\ca{x^2 - 9})
    note: Take out the two — and now the bracket is the next tool.
  - math: 2(x+3)(x-3)
```

```practice
caption: common factor
questions:
  - ask: Factorise.
    math: 12x^2 + 18x
    grade: achieved
    working:
      - math: \ca{6}\!\cdot\!2\!\cdot\!\cb{x}\!\cdot\!x \;+\; \ca{6}\!\cdot\!3\!\cdot\!\cb{x}
        note: Take the largest number that divides both, not just any number that does.
      - math: 6x(2x+3)
  - ask: Take out the highest common factor.
    math: 5x^3 - 20x^2 + 15x
    grade: achieved
    working:
      - math: 5x(x^2 - 4x + 3)
        note: Every term has a five and at least one $x$. The signs stay with their terms.
  - ask: Factorise. The common factor here is not a number.
    math: 3x(x-2) + 5(x-2)
    grade: merit
    working:
      - math: 3x\ca{(x-2)} + 5\ca{(x-2)}
        note: A whole bracket can be a common factor, in the same way a number can.
      - math: (x-2)(3x+5)
        note: This move is the last step of the hardest factorising in the lesson.
```

### Two — difference of two squares

$a$ squared minus $b$ squared factorises to $a$ plus $b$, times $a$ minus $b$.

Two conditions must both hold. Both terms are perfect squares, and they are separated by a minus.

```figure
caption: Difference of two squares
steps:
  - math: \ca{a^2} \;\cb{-}\; \cc{b^2} \;=\; (a+b)(a-b)
    note: Both terms are squares, and there is a minus between them. Both conditions must hold.
```

$x$ squared minus nine becomes $x$ plus three, times $x$ minus three. Four $x$ squared minus twenty-five becomes two $x$ plus five, times two $x$ minus five — because four $x$ squared is two $x$ all squared, and twenty-five is five squared.

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

$a$ squared **plus** $b$ squared does not factorise. There is no pair of brackets that produces $x$ squared plus nine.

```figure
caption: The one that does not work
steps:
  - math: x^2 + 9
    note: A sum of two squares. There is no pair of brackets that produces this — check any pair you try by expanding it.
```

```practice
caption: difference of two squares
questions:
  - ask: Factorise.
    math: x^2 - 49
    grade: achieved
    working:
      - math: (x)^2 - (7)^2
        note: Both terms are squares, and a minus separates them.
      - math: (x+7)(x-7)
  - ask: Factorise.
    math: 9x^2 - 64
    grade: achieved
    working:
      - math: (\ca{3x})^2 - (\cb{8})^2
        note: Nine $x$ squared is a square, because it is three $x$ all squared.
      - math: (\ca{3x}+\cb{8})(\ca{3x}-\cb{8})
  - ask: Factorise fully.
    math: 50x^2 - 8
    grade: merit
    working:
      - math: 50x^2 - 8
        note: Neither term is a square, so the rule does not apply yet.
      - math: 2(25x^2 - 4)
        note: Take out the common factor first, and the bracket becomes a case that does.
      - math: 2(5x+2)(5x-2)
        note: Fully means the two out the front stays. Dropping it changes the value.
```

### Three — quadratic trinomials

Three terms, with $x$ squared at the front. Take $x$ squared plus seven $x$ plus twelve.

Find two numbers that multiply to give the constant and add to give the coefficient of $x$. Multiply to twelve, add to seven: three and four. The factorisation is $x$ plus three, times $x$ plus four.

```figure
id: a1-trinomial
caption: Factorising a trinomial
steps:
  - math: x^2 + \ca{7}x + \cb{12}
    note: Two numbers that multiply to the constant $\cb{12}$ and add to the coefficient $\ca{7}$.
  - math: \cc{3} \times \cd{4} = \cb{12} \qquad \cc{3} + \cd{4} = \ca{7}
  - math: (x+\cc{3})(x+\cd{4})
```

The signs follow a pattern. If the constant is positive, both numbers carry the same sign, and that sign matches the middle term. If the constant is negative, one number is positive and one is negative, and the larger of the two carries the sign of the middle term.

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

When there is a coefficient in front of the $x$ squared, the method extends. Take two $x$ squared plus seven $x$ plus three. Multiply the coefficient of $x$ squared by the constant: two times three is six. Find two numbers that multiply to six and add to seven: six and one. Use them to split the middle term into six $x$ plus one $x$. Then factorise the first two terms and the last two terms separately, and a common bracket appears.

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

This one is worth deliberate practice. It comes up regularly.

```practice
caption: quadratic trinomials
questions:
  - ask: Factorise.
    math: x^2 + 9x + 20
    grade: achieved
    working:
      - math: \cc{4} \times \cd{5} = 20 \qquad \cc{4} + \cd{5} = 9
        note: Multiply to the constant, add to the coefficient of $x$.
      - math: (x+4)(x+5)
  - ask: Factorise.
    math: x^2 - 3x - 28
    grade: achieved
    working:
      - math: \cc{-7} \times \cd{4} = -28 \qquad \cc{-7} + \cd{4} = -3
        note: A negative constant means one of each sign, and the larger carries the middle sign.
      - math: (x-7)(x+4)
  - ask: Factorise.
    math: 3x^2 + 11x + 6
    grade: merit
    working:
      - math: \ca{3} \times \cb{6} = 18
        note: With a coefficient on the $x$ squared, multiply that coefficient by the constant.
      - math: \cc{9} \times \cd{2} = 18 \qquad \cc{9} + \cd{2} = 11
      - math: 3x^2 + \cc{9x} + \cd{2x} + 6
        note: Split the middle term with them.
      - math: 3x(x+3) + 2(x+3)
        note: Factorise the two pairs separately.
      - math: (x+3)(3x+2)
  - ask: Factorise fully.
    math: 4x^3 - 4x^2 - 24x
    grade: merit
    working:
      - math: 4x(x^2 - x - 6)
        note: Common factor first, which drops the power and clears the coefficient.
      - math: \cc{-3} \times \cd{2} = -6 \qquad \cc{-3} + \cd{2} = -1
      - math: 4x(x-3)(x+2)
        note: Three factors. Each tool applied in turn produces one more.
```

---

## Collecting like terms

Terms are **like** when their letter parts are identical — same letters, same powers.

Three $x$ squared and five $x$ squared are like terms. They combine to eight $x$ squared. Three $x$ squared and five $x$ are not like terms. They stay separate, and no amount of work will combine them.

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

Add the coefficients. The letter part does not change.

```practice
caption: collecting like terms
questions:
  - ask: Simplify.
    math: 5x^2 + 3x - 2x^2 + 8x
    grade: achieved
    working:
      - math: (5\ca{x^2} - 2\ca{x^2}) + (3\cb{x} + 8\cb{x})
        note: Gather each letter part with its own kind before adding anything.
      - math: 3x^2 + 11x
        note: Two terms, and they will not reduce to one.
  - ask: Expand and simplify.
    math: (x+4)(x-1) - (x-3)(x+2)
    grade: merit
    working:
      - math: (x^2 + 3x - 4) - \ca{(x^2 - x - 6)}
        note: Expand each product first, and keep the second one in a bracket.
      - math: x^2 + 3x - 4 - x^2 \ca{+} x \ca{+} 6
        note: The minus reaches every term inside that bracket, so two signs flip.
      - math: 4x + 2
        note: The $x$ squared terms cancel, which is the sign the signs were handled correctly.
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Factorise fully.
    math: 8x^2 - 50
    grade: achieved
    working:
      - math: 2(4x^2 - 25)
        note: Common factor first. Neither original term is a square.
      - math: 2(2x+5)(2x-5)
  - ask: Find the value of $k$ for which the expression is a perfect square.
    math: 25x^2 - 40x + k
    grade: merit
    from: "2025"
    working:
      - math: (\ca{5x} + \cb{?})^2
        note: Twenty-five $x$ squared is five $x$ squared, so the first term of the bracket is fixed.
      - math: (5x-4)^2 = 25x^2 - 40x + 16
        note: The middle term is twice the product of the two, so the second term is minus four.
      - math: k = 16
  - ask: Factorise fully.
    math: 6x^2 - 7x - 3
    grade: merit
    working:
      - math: \ca{6} \times \cb{-3} = -18
      - math: \cc{-9} \times \cd{2} = -18 \qquad \cc{-9} + \cd{2} = -7
      - math: 6x^2 - 9x + 2x - 3
      - math: 3x(2x-3) + 1(2x-3)
        note: The second pair has no common factor other than one, and the one must be written.
      - math: (2x-3)(3x+1)
  - ask: Factorise fully.
    math: x^4 - 16
    grade: excellence
    working:
      - math: (x^2)^2 - (4)^2
        note: $x$ to the fourth is $x$ squared, squared.
      - math: (x^2+4)(x^2-4)
        note: One of these two brackets is itself a difference of two squares.
      - math: (x^2+4)(x+2)(x-2)
        note: $x$ squared plus four is a sum of squares, so it stops there.
  - ask: Factorise fully.
    math: (x+3)^2 - (x-2)^2
    grade: excellence
    working:
      - math: \big(\ca{(x+3)}\big)^2 - \big(\cb{(x-2)}\big)^2
        note: A square minus a square, where each square is of a bracket rather than a term.
      - math: \big[\ca{(x+3)} + \cb{(x-2)}\big]\big[\ca{(x+3)} - \cb{(x-2)}\big]
      - math: (2x+1)(5)
        note: The second bracket collapses, because subtracting minus two adds two.
      - math: 5(2x+1)
        note: Expanding both squares first gets the same answer with far more work.
```

---

## Summary

Expressions are simplified. Equations are solved. This module is expressions.

Terms are the parts that are added and factors are the parts that are multiplied. Only factors cancel.

Expanding and factorising are opposites. Expanding is the mechanical direction. Factorising is the one being assessed.

Factorise in a fixed order: common factor, then difference of two squares, then trinomial.

Check factorising by expanding it back. Check simplifying by substituting a number, and write whatever you substitute inside brackets, so that a negative keeps its sign and a coefficient gets squared along with its letter.

One point from the examination specification. Algebraic technique must be shown, not just a correct answer, and answers must be given in their simplest form. The working carries as much weight as the result. So when you practise, state the reason for each step out loud — common factor first, which left a difference of two squares. Being able to say it is what lets you write it down, and writing it down is what takes you past Achieved.
