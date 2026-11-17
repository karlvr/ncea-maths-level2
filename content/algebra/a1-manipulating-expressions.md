# A1—Manipulating algebraic expressions

---

Every question asks the same thing: write the given expression more simply.

---

## The value must not change

One rule applies to all work with expressions: the value of the expression must not change.

You may rewrite an expression in any form you like, provided that substituting a number for $x$ gives the same answer before and after.

You can also use that rule to check your work. Choose a number, substitute it into the original expression and into your simplified expression, then calculate and compare the two answers. If the answers differ, there is an error in the working.

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
    note: The answers match, so there is no error in the working.
```

### Substituting needs brackets

When you substitute a number for $x$, write the number inside brackets before you do any arithmetic. The brackets keep the number attached to every operation that applied to $x$.

Substitute $-3$ for $x$ in $x^2$. With brackets, you square the whole of $-3$, and the answer is $9$. Without the brackets, you square only the $3$ and the minus stays outside. That gives $-9$, and that is incorrect.

```figure
caption: Substituting a negative number
steps:
  - math: x^2 \qquad\textsf{where}\qquad x = \ca{-3}
    note: Substitute a negative number, and the brackets change the answer.
  - math: (\ca{-3})^2 = 9
    note: With brackets, you square the whole of $-3$.
  - math: "-3^2 = -9"
    note: Without the brackets, you square only the $3$, and the minus stays outside it.
```

The expression $-x^2$ means square $x$ and then make the result negative. $(-x)^2$ means square the whole of $-x$ (which becomes positive). The 2025 report lists substituting incorrectly and mishandling negative numbers as separate reasons candidates did not achieve.

What you substitute is often an expression rather than a number. The brackets matter more there, because there is more inside them for the operation to reach. If the radius of a circle is $2x$, the area is $\pi(2x)^2$, which is $4\pi x^2$. If you do not write the brackets, the square reaches the $x$ but not the $2$, and every line after that is wrong. The 2024 report names that error exactly: candidates who formed a correct expression and then did not put brackets around the radius.

```figure
caption: Brackets around a substituted expression
steps:
  - math: A = \pi r^2 \qquad\textsf{where}\qquad r = \ca{2x}
    note: This time you substitute an expression, not a number.
  - math: A = \pi(\ca{2x})^2 = 4\pi x^2
    note: The bracket makes the square reach the $2$ as well as the $x$.
  - math: A = \pi \cdot \ca{2x}^2 = 2\pi x^2 \qquad \color{red}{\times}
    note: Without the bracket, the square never reaches the $2$, and the error carries through the rest of the question.
```

```practice
caption: substituting
questions:
  - ask: Evaluate the expression when $x = -3$.
    math: 2x^2 - 5x
    grade: achieved
    working:
      - math: 2(\ca{-3})^2 - 5(\ca{-3})
        note: Write the numbers in brackets first, and do the arithmetic afterwards. That order keeps the signs right.
      - math: 2(9) + 15
        note: A negative squared is positive, and subtracting a negative adds.
      - math: "33"
  - ask: Evaluate the expression when $x = -2$.
    math: 3x^2 - 4x
    grade: achieved
    working:
      - math: 3(\ca{-2})^2 - 4(\ca{-2})
      - math: 3(4) + 8
      - math: "20"
  - ask: Evaluate the expression when $x = -4$.
    math: -x^2 + 3x
    grade: achieved
    working:
      - math: -(\ca{-4})^2 + 3(\ca{-4})
        note: The square does not reach the minus in front of $x^2$.
      - math: -16 - 12
        note: $(-4)^2$ is $16$, and the minus in front of it makes the term $-16$.
      - math: "-28"
  - ask: A student factorised the expression as $(x+3)(x-3)$. Decide by substitution whether that is correct.
    math: x^2 - 6x + 9
    grade: achieved
    working:
      - math: (\ca{1})^2 - 6(\ca{1}) + 9 = 4
        note: Choose any number and put it into the expression you were given.
      - math: (\ca{1}+3)(\ca{1}-3) = -8
        note: Now put the same number into the answer being tested.
      - math: \textsf{Not correct}
        note: The two answers differ, so the factorising is wrong.
  - ask: A student factorised the expression as $(x+5)(x-3)$. Decide by substitution whether that is correct.
    math: x^2 + 2x - 15
    grade: achieved
    working:
      - math: (\ca{1})^2 + 2(\ca{1}) - 15 = -12
        note: Choose any number and put it into the expression you were given.
      - math: (\ca{1}+5)(\ca{1}-3) = -12
        note: Put the same number into the answer being tested. The two answers match, but a match at one number does not prove that the factorising is correct.
      - math: (\cb{2})^2 + 2(\cb{2}) - 15 = -7 \qquad (\cb{2}+5)(\cb{2}-3) = -7
        note: Try a second number. The two answers match again.
      - math: \textsf{Correct}
  - ask: The side of a square is $3x$. Write an expression for its area.
    grade: achieved
    working:
      - math: A = (\ca{3x})^2
        note: Put brackets around the whole side length, so the square reaches the $3$ as well as the $x$.
      - math: A = 9x^2
  - ask: The radius of a circle is $4x$. Write an expression for its area.
    grade: achieved
    working:
      - math: A = \pi(\ca{4x})^2
      - math: A = 16\pi x^2
        note: Without the brackets the square never reaches the $4$, and every line after that is wrong.
```

---

## Show your working

The value must not change, and your working is where you show that it did not. Each line is another form of the same expression, equal to the line above it. So the value stays the same from the first line to the last.

The examination specification requires you to show algebraic technique, not just a correct answer. An answer with no working is marked *Correct Answer Only*. That is worth Achieved at best, and it cannot reach Merit or Excellence however right the answer is. So write every step, including the ones that look too small to matter.

---

## Terms and factors

The parts of an expression are named in two ways, terms and factors. What you are allowed to do with a part depends on which of the two it is.

**Terms** are the parts that are added. $3x^2 + 5x - 2$ has three terms. The sign in front of a term belongs to that term, so the third term is $-2$ rather than $2$.

Within a term, the number in front of the letters is the **coefficient**, and the letters are the **letter part**. A term with no letters at all is the **constant**. Where no number is written the coefficient is $1$, so $x^2$ means $1x^2$.

```figure
caption: The parts of a term
steps:
  - math: \ca{3}x^2 + \ca{5}x - \cb{2}
    note: $3$ and $5$ are coefficients. $-2$ is the constant.
```

**Factors** are the parts that are multiplied. $3x(x+3)$ has two factors: the $3x$, and the bracket.

Which of the two words applies depends on how the expression is written. The parts of a sum are terms. The parts of a product are factors. You can write the same expression either way, and moving between those two forms is called expanding and factorising.

```figure
caption: The same expression, two ways
steps:
  - math: 6x^2 + 9x
    note: The parts are added, so they are terms. There are two terms.
  - math: 3x(2x+3)
    note: The parts are multiplied, so they are factors. There are two factors, and one of them is a bracket.
  - math: 6x^2 + 9x \;=\; 3x(2x+3)
    note: The two forms are equal for every value of $x$. Only the way the expression is separated into parts differs.
```

A term has factors of its own. $6x^2$ is $6 \times x \times x$, so $6$ and $x$ are both factors of it. Searching every term for a factor that all the terms share is the first step of factorising. The expression as a whole is different. An expression has factors only once the whole expression is a product. $6x^2 + 9x$ has none, because it is a sum.

What you may do to a part depends on which of the two it is. You can cancel a factor against a matching factor, and you can take a factor shared by every term outside a bracket. You cannot do either of these things to a term.

---

## Expanding and factorising

Expanding and factorising are opposites.

```figure
caption: Two directions
steps:
  - math: |
      (x+2)(x+5) \quad\underset{\textsf{\scriptsize factorise}}{\overset{\textsf{\scriptsize expand}}{\rightleftharpoons}}\quad x^2 + 7x + 10
    note: The left side is a product, and the right side is a sum of terms. Both sides are the same expression.
```

**Expanding** converts a product into a sum of terms. Take $(x+2)(x+5)$. Multiply each term in the first bracket by each term in the second. $x$ times $x$ is $x$ squared. $x$ times five is five $x$. Two times $x$ is two $x$. Two times five is ten. Then collect the like terms: $x^2 + 7x + 10$.

```figure
id: a1-expand
caption: Expanding
steps:
  - math: (\ca{x}+\cb{2})(\cc{x}+\cd{5})
    note: Multiply each term in the first bracket by each term in the second.
  - math: \ca{x}\!\cdot\!\cc{x} \;+\; \ca{x}\!\cdot\!\cd{5} \;+\; \cb{2}\!\cdot\!\cc{x} \;+\; \cb{2}\!\cdot\!\cd{5}
    note: There are four products, because there are two terms in each bracket.
  - math: x^2 + \ca{5x} + \cb{2x} + 10
    note: Two of the products have the same letter part, so they add to one term.
  - math: x^2 + 7x + 10
```

You expand three brackets the same way, two at a time. Expand any two of them, then multiply that result by the third bracket. The 2024 report describes candidates who identified three correct factors and then could not expand them.

**Factorising** converts a sum of terms into a product. Starting from $x^2 + 7x + 10$, you recover $(x+2)(x+5)$.

Expanding and factorising differ in difficulty. Expanding is mechanical and always possible. Factorising is a search: you are finding what must have been multiplied together to produce the result. Not every expression factorises. That is why factorising is where the marks are.

```practice
caption: expanding
questions:
  - ask: Expand and simplify.
    math: (x+3)(x+7)
    grade: achieved
    working:
      - math: x^2 + 7x + 3x + 21
        note: There are four products, one for each pair of terms.
      - math: x^2 + 10x + 21
  - ask: Expand and simplify.
    math: (x+2)(x+9)
    grade: achieved
    working:
      - math: x^2 + 9x + 2x + 18
      - math: x^2 + 11x + 18
  - ask: Expand and simplify.
    math: (2x-5)(x+4)
    grade: achieved
    working:
      - math: 2x^2 + 8x - 5x - 20
        note: The $-5$ carries its sign into both of its products.
      - math: 2x^2 + 3x - 20
  - ask: Expand and simplify.
    math: (3x-2)(x+5)
    grade: achieved
    working:
      - math: 3x^2 + 15x - 2x - 10
      - math: 3x^2 + 13x - 10
  - ask: Expand and simplify.
    math: (x+5)(x-5)
    grade: achieved
    working:
      - math: x^2 - 5x + 5x - 25
        note: The two middle products are equal and opposite.
      - math: x^2 - 25
  - ask: Expand and simplify.
    math: (3x-2)^2
    grade: achieved
    working:
      - math: (3x-2)(3x-2)
        note: A square is the bracket written twice. Do not square each term separately.
      - math: 9x^2 - 6x - 6x + 4
      - math: 9x^2 - 12x + 4
        note: The middle term is the one that disappears if you square term by term.
  - ask: Expand and simplify.
    math: (4x+3)^2
    grade: achieved
    working:
      - math: (4x+3)(4x+3)
      - math: 16x^2 + 12x + 12x + 9
      - math: 16x^2 + 24x + 9
  - ask: Expand and simplify.
    math: (x-1)(x+2)(x-3)
    grade: merit
    working:
      - math: (\ca{x^2 + x - 2})(x-3)
        note: Expand two of the brackets first. Multiply by the third bracket after that.
      - math: x^3 - 3x^2 + x^2 - 3x - 2x + 6
        note: There are six products this time, because each of three terms is multiplied by two terms.
      - math: x^3 - 2x^2 - 5x + 6
  - ask: Expand and simplify.
    math: (x+1)(x-2)(x+4)
    grade: merit
    working:
      - math: (\ca{x^2 - x - 2})(x+4)
        note: You may take any two of the three brackets first.
      - math: x^3 + 4x^2 - x^2 - 4x - 2x - 8
      - math: x^3 + 3x^2 - 6x - 8
```

---

## What factorising is for

You can do things with factors that you cannot do with terms.

First: in an algebraic fraction, only factors cancel. Terms never cancel. So anything you intend to cancel has to be in factorised form first. That is the subject of the next lesson.

Second: if two numbers multiply to give zero, at least one of them must be zero. That is the basis for solving a quadratic by factorising. It works only for a product, not for a sum of terms.

```figure
caption: What you can do with a product
steps:
  - math: \dfrac{(x+2)(x+5)}{x+2}
    note: You can cancel a factor that appears top and bottom.
  - math: \dfrac{\ca{\cancel{(x+2)}}(x+5)}{\ca{\cancel{x+2}}} \;=\; x+5
  - math: (x+2)(x+5) = 0
    note: And if a product is zero, one of the factors must be zero.
  - math: x + 2 = 0 \quad\textsf{or}\quad x + 5 = 0
    note: That is how you solve a quadratic. Neither move works on a sum of terms.
```

You can make both moves only after you factorise.

---

## Three ways to factorise

Apply the methods in this order.

```figure
caption: The order of the methods
steps:
  - math: |
      \begin{array}{rl}
      1. & \textsf{common factor} \\[3pt]
      2. & \textsf{difference of two squares} \\[3pt]
      3. & \textsf{quadratic trinomial}
      \end{array}
    note: Always use the methods in this order. Taking out a common factor often leaves a bracket that you can then factorise with the second or third method.
```

### Method 1—common factor

Search every term for a factor that all the terms contain, and take that factor outside a bracket.

$6x^2 + 9x$. Every term contains a factor of $3$, and every term contains at least one $x$. Take out $3x$. What remains inside the bracket is $2x + 3$. The result is $3x(2x+3)$.

```figure
id: a1-common-factor
caption: Taking out a common factor
steps:
  - math: 6x^2 + 9x
    note: What appears in every term?
  - math: \ca{3}\!\cdot\!2\!\cdot\!\cb{x}\!\cdot\!x \;+\; \ca{3}\!\cdot\!3\!\cdot\!\cb{x}
    note: Both terms contain a $3$ and at least one $x$.
  - math: \ca{3}\cb{x}(2x+3)
    note: The common part comes out the front, and the rest of each term stays inside.
```

Check by expanding it back. Three $x$ times two $x$ is six $x$ squared. Three $x$ times three is nine $x$. Correct.

Take out common factors first, before you try anything else. Whatever is left inside the bracket is simpler than the expression you started with. You then apply the other two methods to it.

```practice
caption: common factor
questions:
  - ask: Factorise.
    math: 12x^2 + 18x
    grade: achieved
    working:
      - math: \ca{6}\!\cdot\!2\!\cdot\!\cb{x}\!\cdot\!x \;+\; \ca{6}\!\cdot\!3\!\cdot\!\cb{x}
        note: Take the largest number that divides both terms, not just any number that does.
      - math: 6x(2x+3)
  - ask: Factorise.
    math: 20x^2 + 15x
    grade: achieved
    working:
      - math: \ca{5}\!\cdot\!4\!\cdot\!\cb{x}\!\cdot\!x \;+\; \ca{5}\!\cdot\!3\!\cdot\!\cb{x}
      - math: 5x(4x+3)
  - ask: Take out the highest common factor.
    math: 5x^3 - 20x^2 + 15x
    grade: achieved
    working:
      - math: 5x(x^2 - 4x + 3)
        note: Every term has a $5$ and at least one $x$. The signs stay with their terms.
  - ask: Take out the highest common factor.
    math: 6x^3 - 9x^2 + 12x
    grade: achieved
    working:
      - math: 3x(2x^2 - 3x + 4)
        note: The largest number dividing $6$, $9$ and $12$ is $3$, and the terms share only one $x$.
  - ask: Factorise.
    math: 4x^2 + 4x
    grade: achieved
    working:
      - math: 4x(x+1)
        note: You take out the whole of the second term, and what remains of it is $1$. You must write the $1$, because an empty space inside the bracket is not a term.
  - ask: Factorise. The common factor here is not a number.
    math: 3x(x-2) + 5(x-2)
    grade: merit
    working:
      - math: 3x\ca{(x-2)} + 5\ca{(x-2)}
        note: A whole bracket can be a common factor, in the same way a number can.
      - math: (x-2)(3x+5)
        note: This move is the last step of the hardest factorising in the lesson.
  - ask: Factorise. The common factor here is not a number.
    math: 4x(x+3) - 7(x+3)
    grade: merit
    working:
      - math: 4x\ca{(x+3)} - 7\ca{(x+3)}
      - math: (x+3)(4x-7)
        note: The minus belongs to the $7$, so it goes inside the second bracket with the $7$.
```

### Method 2—difference of two squares

$a^2 - b^2$ factorises to $(a+b)(a-b)$.

```figure
caption: Difference of two squares
steps:
  - math: \ca{a^2} \;\cb{-}\; \cc{b^2} \;=\; (a+b)(a-b)
    note: Both terms are squares, and there is a minus between them. Take the square root of each term. The two roots are $a$ and $b$, and they go into both brackets.
```

The rule applies only when both of these conditions hold: the two terms, $a^2$ and $b^2$, are perfect squares, and a minus separates them.

A perfect square is an expression that is the square of another expression, with no surd left. A surd is a $\sqrt{\phantom{x}}$ that you cannot remove by simplifying. $16$ is a perfect square because it is $4^2$, and $9x^2$ is one because it is $(3x)^2$. $5$ is not, because its square root is $\sqrt{5}$.

$x^2 - 9$ factorises immediately.

```figure
steps:
  - math: x^2 - 9
  - math: (x+3)(x-3)
    note: $9$ is $3^2$.
```

$4x^2 - 25$ takes one step more, because you have to recognise each term as a square first.

```figure
steps:
  - math: 4x^2 - 25
    note: Is each term a square?
  - math: (\ca{2x})^2 - (\cb{5})^2
    note: Both terms are squares, so the rule applies.
  - math: (\ca{2x}+\cb{5})(\ca{2x}-\cb{5})
```

$a^2 + b^2$ does not factorise. The **plus** is the reason: there is no pair of brackets that produces $x^2 + 9$.

```figure
caption: The one that does not work
steps:
  - math: x^2 + 9
    note: A sum of two squares. There is no pair of brackets that produces this. Check any pair you try by expanding it.
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
    math: x^2 - 121
    grade: achieved
    working:
      - math: (x)^2 - (11)^2
      - math: (x+11)(x-11)
  - ask: Factorise if possible.
    math: x^2 + 16
    grade: achieved
    working:
      - math: x^2 + 16
        note: Both terms are squares, but a plus separates them.
      - math: \textsf{Does not factorise}
        note: A difference of two squares has a minus between its terms. No pair of brackets expands to a sum of two squares.
  - ask: Factorise.
    math: 9x^2 - 64
    grade: achieved
    working:
      - math: (\ca{3x})^2 - (\cb{8})^2
        note: $9x^2$ is a square, because it is $(3x)^2$.
      - math: (\ca{3x}+\cb{8})(\ca{3x}-\cb{8})
  - ask: Factorise.
    math: 25x^2 - 36
    grade: achieved
    working:
      - math: (\ca{5x})^2 - (\cb{6})^2
      - math: (\ca{5x}+\cb{6})(\ca{5x}-\cb{6})
  - ask: Factorise fully.
    math: 50x^2 - 8
    grade: merit
    working:
      - math: 50x^2 - 8
        note: Neither term is a square, so the rule does not apply yet.
      - math: 2(25x^2 - 4)
        note: Take out the common factor first. Then you can use difference of two squares on the bracket. The “fully” in the question means continue after this first factorisation.
      - math: 2(5x+2)(5x-2)
        note: Now fully factorised. The $2$ taken out in the first step is one of the factors, and it stays in the answer.
  - ask: Factorise fully.
    math: 18x^2 - 32
    grade: merit
    working:
      - math: 2(9x^2 - 16)
        note: Take out the common factor first. The bracket that remains is a difference of two squares.
      - math: 2(3x+4)(3x-4)
```

### Method 3—quadratic trinomials

A quadratic trinomial has three terms: an $x^2$ term, an $x$ term and a constant. Take $x^2 + 7x + 12$.

Find two numbers that multiply to give the constant and add to give the coefficient of $x$. Multiply to $12$, add to $7$: $3$ and $4$. The factorisation is $(x+3)(x+4)$.

```figure
id: a1-trinomial
caption: Factorising a trinomial
steps:
  - math: x^2 + \ca{7}x + \cb{12}
    note: Find two numbers that multiply to the constant $\cb{12}$ and add to the coefficient $\ca{7}$.
  - math: \cc{3} \times \cd{4} = \cb{12} \qquad \cc{3} + \cd{4} = \ca{7}
  - math: (x+\cc{3})(x+\cd{4})
```

The signs follow a pattern. If the constant is positive, both numbers carry the same sign, and that sign matches the middle term. If the constant is negative, one number is positive and one is negative. The larger of the two carries the sign of the middle term.

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

When there is a coefficient in front of the $x^2$, the method has extra steps. Take $2x^2 + 7x + 3$. Multiply the coefficient of $x^2$ by the constant: $2 \times 3 = 6$. Find two numbers that multiply to $6$ and add to $7$: $6$ and $1$. Use them to split the middle term into $6x + x$. Then factorise the first two terms and the last two terms separately, and a common bracket appears.

```figure
id: a1-split-middle
caption: When there is a coefficient on the x squared
steps:
  - math: \ca{2}x^2 + 7x + \cb{3}
    note: Multiply the coefficient of $x^2$ by the constant, so $2 \times 3 = 6$.
  - math: \cc{6} \times \cd{1} = 6 \qquad \cc{6} + \cd{1} = 7
    note: Now find two numbers multiplying to six and adding to seven.
  - math: 2x^2 + \cc{6x} + \cd{x} + 3
    note: Use them to split the middle term. There are now four terms, in two pairs.
  - math: \ca{2x}(x+3) + \cb{1}(x+3)
    note: Factorise the first pair and the last pair separately.
  - math: 2x(\ca{x+3}) + 1(\ca{x+3})
    note: The same bracket appears in both pairs, which shows the split worked.
  - math: (x+3)(2x+1)
    note: Take the common bracket out, and what is left is the other bracket.
```

The 2023 and 2025 papers both put one of these inside a rational expression. The 2023 expression is $\dfrac{3x^2 - 10x + 8}{9x^2 - 16}$. You have to split the middle term of the numerator before anything can cancel.

A trinomial is sometimes a perfect square: the square of a single bracket. You find it with the same method, and the two numbers are equal. For $x^2 + 6x + 9$, you need two numbers that multiply to $9$ and add to $6$, and both of them are $3$. So the factorisation is $(x+3)(x+3)$, which is written $(x+3)^2$.

Expanding $(x+a)^2$ gives $x^2 + 2ax + a^2$. The first and last terms are squares, and the middle term is twice the product of the two terms in the bracket. Check those two conditions to recognise a perfect square without a search for a pair of numbers. They hold with a coefficient on the $x^2$ as well.

```figure
caption: A trinomial that is a square
steps:
  - math: 4x^2 + 20x + 25
    note: The first and last terms are both squares.
  - math: (\ca{2x})^2 + 20x + (\cb{5})^2
    note: The two things being squared are $2x$ and $5$. Is the middle term twice their product?
  - math: 2 \times \ca{2x} \times \cb{5} = 20x
    note: It is, so both conditions hold.
  - math: (\ca{2x}+\cb{5})^2
```

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
    math: x^2 + 8x + 15
    grade: achieved
    working:
      - math: \cc{3} \times \cd{5} = 15 \qquad \cc{3} + \cd{5} = 8
      - math: (x+3)(x+5)
  - ask: Factorise.
    math: x^2 - 9x + 20
    grade: achieved
    working:
      - math: \cc{-4} \times \cd{-5} = 20 \qquad \cc{-4} + \cd{-5} = -9
        note: A positive constant with a negative middle term means both numbers are negative.
      - math: (x-4)(x-5)
  - ask: Factorise.
    math: x^2 - 3x - 28
    grade: achieved
    working:
      - math: \cc{-7} \times \cd{4} = -28 \qquad \cc{-7} + \cd{4} = -3
        note: A negative constant means one of each sign, and the larger number carries the sign of the middle term.
      - math: (x-7)(x+4)
  - ask: Factorise.
    math: x^2 - 2x - 24
    grade: achieved
    working:
      - math: \cc{-6} \times \cd{4} = -24 \qquad \cc{-6} + \cd{4} = -2
      - math: (x-6)(x+4)
  - ask: Factorise.
    math: x^2 + 14x + 49
    grade: achieved
    working:
      - math: \cc{7} \times \cd{7} = 49 \qquad \cc{7} + \cd{7} = 14
        note: The two numbers are the same number.
      - math: (x+7)^2
        note: $(x+7)(x+7)$ is written as a square.
  - ask: Factorise.
    math: x^2 - 12x + 36
    grade: achieved
    working:
      - math: \cc{-6} \times \cd{-6} = 36 \qquad \cc{-6} + \cd{-6} = -12
      - math: (x-6)^2
        note: The middle term is negative, so the bracket has a minus in it.
  - ask: Factorise.
    math: 3x^2 + 11x + 6
    grade: merit
    working:
      - math: \ca{3} \times \cb{6} = 18
        note: With a coefficient on the $x^2$, multiply that coefficient by the constant.
      - math: \cc{9} \times \cd{2} = 18 \qquad \cc{9} + \cd{2} = 11
      - math: 3x^2 + \cc{9x} + \cd{2x} + 6
        note: Split the middle term with those two numbers.
      - math: 3x(x+3) + 2(x+3)
        note: Factorise the two pairs separately.
      - math: (x+3)(3x+2)
  - ask: Factorise.
    math: 2x^2 + 11x + 12
    grade: merit
    working:
      - math: \ca{2} \times \cb{12} = 24
      - math: \cc{8} \times \cd{3} = 24 \qquad \cc{8} + \cd{3} = 11
      - math: 2x^2 + \cc{8x} + \cd{3x} + 12
      - math: 2x(x+4) + 3(x+4)
      - math: (x+4)(2x+3)
  - ask: Factorise fully.
    math: 4x^3 - 4x^2 - 24x
    grade: merit
    working:
      - math: 4x(x^2 - x - 6)
        note: Take out the common factor first. The bracket that remains has lower powers and no coefficient on the $x^2$.
      - math: \cc{-3} \times \cd{2} = -6 \qquad \cc{-3} + \cd{2} = -1
      - math: 4x(x-3)(x+2)
        note: The answer has three factors. Each method that you apply adds one more factor.
  - ask: Factorise fully.
    math: 2x^3 + 2x^2 - 12x
    grade: merit
    working:
      - math: 2x(x^2 + x - 6)
        note: Take out the common factor first. That leaves a trinomial with no coefficient on the $x^2$.
      - math: \cc{3} \times \cd{-2} = -6 \qquad \cc{3} + \cd{-2} = 1
      - math: 2x(x+3)(x-2)
```

---

## Collecting like terms

Terms are **like** when their letter parts are identical: the same letters, and the same powers.

$3x^2$ and $5x^2$ are like terms. They add to $8x^2$. $3x^2$ and $5x$ are not like terms. They stay separate, and you cannot combine them.

```figure
caption: Like and unlike
steps:
  - math: 3\ca{x^2} + 5\ca{x^2} \;=\; 8\ca{x^2}
    note: The letter parts are identical, so the coefficients add.
  - math: 3\ca{x^2} + 5\cb{x}
    note: The letter parts are different, so this is already in its simplest form.
  - math: 3x^2 + 5x \ne 8x^3 \quad\textsf{and}\quad \ne 8x
    note: Neither of these is equal to the expression. The two terms stay separate.
```

Add the coefficients. The letter part does not change.

Knowing which terms are like tells you when an expression is finished. $3x^2 + 11x$ is two terms and stays two terms. An answer that forces it into one term changes the value.

```practice
caption: collecting like terms
questions:
  - ask: Simplify.
    math: 5x^2 + 3x - 2x^2 + 8x
    grade: achieved
    working:
      - math: (5\ca{x^2} - 2\ca{x^2}) + (3\cb{x} + 8\cb{x})
        note: Group the terms that have the same letter part before you add anything.
      - math: 3x^2 + 11x
        note: These are two terms, and you cannot combine them into one.
  - ask: Simplify.
    math: 7x^2 - 2x - 4x^2 + 9x
    grade: achieved
    working:
      - math: (7\ca{x^2} - 4\ca{x^2}) + (-2\cb{x} + 9\cb{x})
        note: The sign in front of a term stays with it.
      - math: 3x^2 + 7x
  - ask: Expand and simplify.
    math: (x+4)(x-1) - (x-3)(x+2)
    grade: merit
    working:
      - math: (x^2 + 3x - 4) - \ca{(x^2 - x - 6)}
        note: Expand each product first, and keep the second product in a bracket.
      - math: x^2 + 3x - 4 - x^2 \ca{+} x \ca{+} 6
        note: The minus reaches every term inside that bracket, so two signs flip.
      - math: 4x + 2
        note: The $x^2$ terms cancel, which shows you handled the signs correctly.
  - ask: Expand and simplify.
    math: (x+5)(x-2) - (x-1)(x+3)
    grade: merit
    working:
      - math: (x^2 + 3x - 10) - \ca{(x^2 + 2x - 3)}
        note: Expand each product first, and keep the second product in a bracket.
      - math: x^2 + 3x - 10 - x^2 \ca{-} 2x \ca{+} 3
        note: Every sign inside that bracket flips, including the one that was already positive.
      - math: x - 7
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well.

```practice
questions:
  - ask: Factorise fully.
    math: 8x^2 - 50
    grade: achieved
    working:
      - math: 2(4x^2 - 25)
        note: Take out the common factor first, because neither term of the original expression is a square.
      - math: 2(2x+5)(2x-5)
  - ask: Factorise fully.
    math: 27x^2 - 12
    grade: achieved
    working:
      - math: 3(9x^2 - 4)
      - math: 3(3x+2)(3x-2)
  - ask: Find the value of $k$ for which the expression is a perfect square.
    math: 25x^2 - 40x + k
    grade: achieved
    from: "2025"
    working:
      - math: (\ca{5x} + \cb{?})^2
        note: $25x^2$ is $(5x)^2$, so the first term of the bracket is $5x$.
      - math: (5x-4)^2 = 25x^2 - 40x + 16
        note: The middle term is twice the product of the two terms in the bracket, so the second term is $-4$.
      - math: k = 16
  - ask: Find the value of $k$ for which the expression is a perfect square.
    math: 9x^2 + 30x + k
    grade: achieved
    working:
      - math: (\ca{3x} + \cb{?})^2
        note: $9x^2$ is $(3x)^2$, so the first term of the bracket is $3x$.
      - math: 2 \times \ca{3x} \times \cb{5} = 30x
        note: The middle term is twice the product of the two terms in the bracket, and that gives the second term.
      - math: k = 25
  - ask: Factorise fully.
    math: 6x^2 - 7x - 3
    grade: merit
    working:
      - math: \ca{6} \times \cb{-3} = -18
      - math: \cc{-9} \times \cd{2} = -18 \qquad \cc{-9} + \cd{2} = -7
      - math: 6x^2 - 9x + 2x - 3
      - math: 3x(2x-3) + 1(2x-3)
        note: The second pair has no common factor other than $1$, and you must write the $1$.
      - math: (2x-3)(3x+1)
  - ask: Factorise fully.
    math: 4x^2 - 4x - 15
    grade: merit
    working:
      - math: \ca{4} \times \cb{-15} = -60
      - math: \cc{-10} \times \cd{6} = -60 \qquad \cc{-10} + \cd{6} = -4
      - math: 4x^2 - 10x + 6x - 15
      - math: 2x(2x-5) + 3(2x-5)
      - math: (2x-5)(2x+3)
  - ask: Factorise fully.
    math: x^4 - 16
    grade: excellence
    working:
      - math: (x^2)^2 - (4)^2
        note: $x^4$ is $(x^2)^2$.
      - math: (x^2+4)(x^2-4)
        note: One of these two brackets is itself a difference of two squares.
      - math: (x^2+4)(x+2)(x-2)
        note: $x^2 + 4$ is a sum of squares, so the factorising stops there.
  - ask: Factorise fully.
    math: x^4 - 81
    grade: excellence
    working:
      - math: (x^2)^2 - (9)^2
      - math: (x^2+9)(x^2-9)
        note: The word “fully” tells you this line is not the answer.
      - math: (x^2+9)(x+3)(x-3)
  - ask: Factorise fully.
    math: (x+3)^2 - (x-2)^2
    grade: excellence
    working:
      - math: \big(\ca{(x+3)}\big)^2 - \big(\cb{(x-2)}\big)^2
        note: This is a square minus a square. Each square is of a bracket rather than of a single term.
      - math: \big[\ca{(x+3)} + \cb{(x-2)}\big]\big[\ca{(x+3)} - \cb{(x-2)}\big]
      - math: (2x+1)(5)
        note: The second bracket simplifies to $5$, because subtracting $-2$ adds $2$.
      - math: 5(2x+1)
        note: Expanding both squares first gets the same answer with far more work.
  - ask: Factorise fully.
    math: (x+4)^2 - (x-1)^2
    grade: excellence
    working:
      - math: \big(\ca{(x+4)}\big)^2 - \big(\cb{(x-1)}\big)^2
      - math: \big[\ca{(x+4)} + \cb{(x-1)}\big]\big[\ca{(x+4)} - \cb{(x-1)}\big]
      - math: (2x+3)(5)
        note: Subtracting $-1$ adds $1$, so the $x$ terms cancel in the second bracket.
      - math: 5(2x+3)
```

---

## Summary

You simplify expressions. You solve equations. This module is about expressions.

Terms are the parts that are added and factors are the parts that are multiplied. Only factors cancel.

Expanding and factorising are opposites. Expanding is the mechanical direction. Factorising is the direction the examiner assesses.

Factorise in a fixed order: common factor, then difference of two squares, then trinomial.

Check factorising by expanding it back. Check simplifying by substituting a number. Write whatever you substitute inside brackets, so that a negative keeps its sign and a coefficient is squared together with its letter.

You must give answers in their simplest form, and you must show algebraic technique. So when you practise, state the reason for each step out loud: common factor first, which left a difference of two squares. If you can say the reason, you can write it, and writing it is what takes you past Achieved.
