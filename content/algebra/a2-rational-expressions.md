# A2 — Rational expressions

---

A **rational expression** is a fraction with algebra in it. Rational means ratio — one thing divided by another. $x$ plus two, over $x$ minus three, is a rational expression.

The important point at the start: you already know how to handle rational expressions. Every rule for ordinary number fractions applies here without modification. To multiply, multiply the tops and multiply the bottoms. To divide, turn the second fraction upside down and multiply. To add, put both fractions over a common denominator first. To cancel, remove a factor that appears top and bottom.

Nothing in that list is new. The difficulty is that with numbers you can see the factors immediately — with six over nine, the three is obvious. With algebra the factors are hidden inside the expression, and you have to create the factors before you can use them.

Which means the first move in almost every one of these questions is the same: **factorise everything you can see.**

---

## Cancelling: factors only, never terms

This is the single most common error at Level 2, so it is worth understanding rather than memorising.

Cancelling is division. When you cancel, you are dividing the numerator and the denominator — the top and the bottom — by the same thing, which leaves the value unchanged.

Division works across multiplication. It does not work across addition.

Take two $x$ plus six, all over two. Dividing by two means dividing the whole numerator by two — every term of it. Two $x$ becomes $x$, and six becomes three. The answer is $x$ plus three.

```figure
caption: Dividing has to reach every term
steps:
  - math: \dfrac{2x + 6}{2}
    note: Dividing by two means dividing all of the numerator by two.
  - math: \dfrac{\ca{2}x}{\ca{2}} + \dfrac{\cb{6}}{\ca{2}}
    note: Both terms, not just the one with the two in front of it.
  - math: x + 3
```

Now the error. It is tempting to look at the two on the bottom and the two in front of the $x$ on the top, cancel that pair, and write $x$ plus six. That is wrong, because the six was never divided. The six is a separate term, and the division has to reach the six as well.

```figure
caption: The error to avoid
steps:
  - math: \dfrac{\ca{2}x + 6}{\ca{2}}
    note: Cancelling only the twos that catch the eye.
  - math: x + 6 \qquad \color{red}{\times}
    note: The six was never divided. Substitute $x = 1$ — the original is four, this is seven.
```

The safe version of the rule: **you can only cancel something that is multiplying the entire numerator and multiplying the entire denominator.** Anything that is added or subtracted is a term, and a term cannot be cancelled.

So the procedure is fixed. Factorise the numerator completely. Factorise the denominator completely. Only then cancel, and only cancel whole brackets.

Take $x$ squared minus nine, over $x$ squared plus seven $x$ plus twelve. Nothing can be cancelled yet — the $x$ squareds are terms, not factors. Factorise the top: difference of two squares, so $x$ plus three, times $x$ minus three. Factorise the bottom: two numbers multiplying to twelve and adding to seven, so $x$ plus three, times $x$ plus four. Now $x$ plus three appears as a factor on both, so it cancels.

```figure
id: a2-simplify
caption: Factorise, then cancel
steps:
  - math: \dfrac{x^2 - 9}{x^2 + 7x + 12}
    note: Nothing can be cancelled yet. The $x^2$ terms are terms, not factors.
  - math: \dfrac{(x+3)(x-3)}{x^2 + 7x + 12}
    note: The top is a difference of two squares.
  - math: \dfrac{(x+3)(x-3)}{(x+3)(x+4)}
    note: The bottom needs two numbers multiplying to twelve and adding to seven.
  - math: \dfrac{\ca{\cancel{(x+3)}}(x-3)}{\ca{\cancel{(x+3)}}(x+4)}
    note: Now there is a factor common to both, so it cancels.
  - math: \dfrac{x-3}{x+4}
```

```practice
caption: cancelling
questions:
  - ask: Simplify.
    math: \dfrac{4x^2 + 6x}{2x}
    grade: achieved
    working:
      - math: \dfrac{\ca{2x}(2x+3)}{\ca{2x}}
        note: The numerator has a common factor, and it is the denominator.
      - math: 2x+3
        note: Cancelling only the six against the two would leave the four $x$ squared undivided.
  - ask: Simplify.
    math: \dfrac{x^2 - 25}{x^2 + 3x - 10}
    grade: achieved
    working:
      - math: \dfrac{(x+5)(x-5)}{x^2 + 3x - 10}
        note: Difference of two squares on the top.
      - math: \dfrac{(x+5)(x-5)}{(x+5)(x-2)}
        note: Multiply to minus ten, add to three.
      - math: \dfrac{x-5}{x-2}
  - ask: Simplify fully.
    math: \dfrac{2x^2 - 18}{x^2 + 6x + 9}
    grade: merit
    working:
      - math: \dfrac{2(x^2-9)}{x^2+6x+9}
        note: A common factor on top before anything else.
      - math: \dfrac{2(x+3)(x-3)}{(x+3)(x+3)}
        note: The two numbers for the denominator turn out to be the same number.
      - math: \dfrac{2(x-3)}{x+3}
        note: One $x$ plus three cancels. The other stays, because only one appeared on top.
```

---

## Multiplying and dividing

Multiplying is straightforward: tops together, bottoms together.

But do not multiply the brackets out first. Factorise everything first, cancel anything common across the whole fraction, and only then combine what is left. If you expand first you produce large expressions that you will have to factorise again.

Dividing is multiplication by the reciprocal. Turn the second fraction upside down, change the divide into a multiply, and continue as above. Turn over the second fraction and not the first — the second fraction is the one being divided by.

```practice
caption: multiplying and dividing
questions:
  - ask: Simplify.
    math: \dfrac{3x}{x+1} \times \dfrac{x+1}{9x^2}
    grade: achieved
    working:
      - math: \dfrac{3x\,\ca{(x+1)}}{\ca{(x+1)}\,9x^2}
        note: Tops together and bottoms together, without expanding anything.
      - math: \dfrac{\cb{3x}}{9x^2}
      - math: \dfrac{1}{3x}
        note: Three $x$ divides into nine $x$ squared three $x$ times, leaving a one on top.
  - ask: Simplify.
    math: \dfrac{x+2}{x-4} \times \dfrac{x^2-16}{x^2-4}
    grade: merit
    working:
      - math: \dfrac{x+2}{x-4} \times \dfrac{(x+4)(x-4)}{(x+2)(x-2)}
        note: Factorise both fractions before combining them.
      - math: \dfrac{\ca{(x+2)}\,(x+4)\,\cb{(x-4)}}{\cb{(x-4)}\,\ca{(x+2)}\,(x-2)}
      - math: \dfrac{x+4}{x-2}
  - ask: Simplify.
    math: \dfrac{x^2+5x}{x^2-9} \div \dfrac{x+5}{x-3}
    grade: merit
    working:
      - math: \dfrac{x^2+5x}{x^2-9} \times \dfrac{x-3}{x+5}
        note: Turn the second fraction over, and the division becomes a multiplication.
      - math: \dfrac{x(x+5)}{(x+3)(x-3)} \times \dfrac{x-3}{x+5}
      - math: \dfrac{x\,\ca{(x+5)}\,\cb{(x-3)}}{(x+3)\,\cb{(x-3)}\,\ca{(x+5)}}
      - math: \dfrac{x}{x+3}
```

---

## Adding and subtracting

Here you need a common denominator, and the same rule applies as with numbers: you cannot add fractions until the bottoms match.

Factorise the denominators first. The lowest common denominator is then built from the factors you find — take each distinct factor, and include it as many times as it appears in any single denominator.

Take one over $x$ plus two, plus three over $x$ minus one. The denominators share nothing, so the common denominator is $x$ plus two, times $x$ minus one. Multiply the first fraction top and bottom by $x$ minus one, and the second top and bottom by $x$ plus two. The numerator becomes $x$ minus one, plus three lots of $x$ plus two.

```figure
caption: Adding over a common denominator
steps:
  - math: \dfrac{1}{x+2} + \dfrac{3}{x-1}
    note: The denominators share nothing, so the common denominator is their product.
  - math: \dfrac{1 \cdot \ca{(x-1)}}{(x+2)\ca{(x-1)}} + \dfrac{3 \cdot \cb{(x+2)}}{\cb{(x+2)}(x-1)}
    note: Multiply each fraction top and bottom by what the other one is missing.
  - math: \dfrac{(x-1) + 3(x+2)}{(x+2)(x-1)}
    note: Same denominator now, so the numerators can be added.
  - math: \dfrac{x - 1 + 3x + 6}{(x+2)(x-1)}
  - math: \dfrac{4x + 5}{(x+2)(x-1)}
    note: Leave the denominator in factors. Expanding it would hide anything that cancels.
```

Leave the denominator in factorised form. It is already simplest, and expanding it hides whether anything cancels.

### The minus applies to the whole numerator

When you subtract, the minus applies to the entire numerator of the second fraction, not just its first term.

Take seven $x$ plus two, over five, minus two $x$ minus three, over five. Subtracting two $x$ minus three means subtracting the two $x$ and *adding* the three. The numerator is seven $x$ plus two, minus two $x$, plus three — so five $x$ plus five. And that has a common factor of five, which cancels with the denominator.

```figure
caption: The minus reaches the whole numerator
steps:
  - math: \dfrac{7x+2}{5} - \dfrac{2x-3}{5}
    note: Write the second numerator in brackets before doing anything else.
  - math: \dfrac{(7x+2) - \ca{(2x-3)}}{5}
  - math: \dfrac{7x + 2 - 2x \ca{+} 3}{5}
    note: Minus a minus three is plus three. This sign is the one that costs marks.
  - math: \dfrac{5x + 5}{5}
  - math: \dfrac{\cb{5}(x+1)}{\cb{5}} \;=\; x+1
    note: A common factor appears, so it cancels.
```

The reliable defence is to write brackets around the second numerator before you do anything else, and expand the minus deliberately. Every year the examiner's report lists this error.

```practice
caption: adding and subtracting
questions:
  - ask: Write as a single fraction.
    math: \dfrac{2}{x} + \dfrac{5}{x+1}
    grade: achieved
    working:
      - math: \dfrac{2\ca{(x+1)}}{x\,\ca{(x+1)}} + \dfrac{5\cb{x}}{\cb{x}\,(x+1)}
        note: Multiply each fraction top and bottom by what the other one is missing.
      - math: \dfrac{2(x+1) + 5x}{x(x+1)}
      - math: \dfrac{7x+2}{x(x+1)}
        note: The denominator stays in factors.
  - ask: Write as a single fraction.
    math: \dfrac{4}{x-2} - \dfrac{3}{x+1}
    grade: merit
    working:
      - math: \dfrac{4(x+1) - \ca{3(x-2)}}{(x-2)(x+1)}
        note: A subtraction, so the second numerator needs a bracket around it.
      - math: \dfrac{4x + 4 - 3x \ca{+} 6}{(x-2)(x+1)}
        note: Minus three times minus two is plus six.
      - math: \dfrac{x+10}{(x-2)(x+1)}
  - ask: Write as a single fraction.
    math: \dfrac{2}{t} + \dfrac{t-3}{t^2} - \dfrac{1}{4t}
    grade: merit
    from: "2024"
    working:
      - math: 4t^2
        note: Each denominator divides into this one, and nothing smaller will do.
      - math: \dfrac{8t}{4t^2} + \dfrac{4(t-3)}{4t^2} - \dfrac{t}{4t^2}
        note: Take each fraction up to the common denominator one at a time.
      - math: \dfrac{8t + 4t - 12 - t}{4t^2}
      - math: \dfrac{11t - 12}{4t^2}
        note: The examiner's report singles out fractions like this one as where marks are lost.
```

---

## Brackets that differ only by a sign

Sometimes two factors do not match because one is the negative of the other. Three minus $x$, and $x$ minus three, are not the same factor — but they differ only by a sign. Take a minus one out of three minus $x$, and it becomes minus one, times $x$ minus three. Now the brackets match and can cancel.

```figure
caption: Brackets that differ only by a sign
steps:
  - math: \dfrac{\ca{3-x}}{\cb{x-3}}
    note: These are not the same bracket, so nothing cancels yet.
  - math: \dfrac{-1(\cb{x-3})}{\cb{x-3}}
    note: Take a minus one out of the top, and the brackets match.
  - math: "-1"
```

```practice
caption: brackets that differ only by a sign
questions:
  - ask: Simplify.
    math: \dfrac{x^2-16}{4-x}
    grade: merit
    working:
      - math: \dfrac{(x+4)\ca{(x-4)}}{\cb{4-x}}
        note: The two brackets are not the same, so nothing cancels yet.
      - math: \dfrac{(x+4)\ca{(x-4)}}{-1\,\ca{(x-4)}}
        note: Take a minus one out of the denominator to make the brackets match.
      - math: -(x+4)
  - ask: Simplify fully.
    math: \dfrac{9-x^2}{x^2+2x-15}
    grade: merit
    working:
      - math: \dfrac{(3+x)(3-x)}{(x+5)(x-3)}
        note: Difference of two squares on top, trinomial underneath.
      - math: \dfrac{(x+3)\big(\!-\!1\big)\ca{(x-3)}}{(x+5)\ca{(x-3)}}
        note: Three minus $x$ is minus one times $x$ minus three.
      - math: \dfrac{-(x+3)}{x+5}
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Simplify fully.
    math: \dfrac{x^2 + 7x + 10}{x^2 - 4}
    grade: achieved
    working:
      - math: \dfrac{(x+5)(x+2)}{(x+2)(x-2)}
        note: A trinomial on top, a difference of two squares underneath.
      - math: \dfrac{x+5}{x-2}
  - ask: Simplify.
    math: \dfrac{4x^2 + 20x + 25}{2x^2 + 5x}
    grade: merit
    from: "2024"
    working:
      - math: \dfrac{4x^2 + 20x + 25}{x(2x+5)}
        note: Start with the denominator, where the common factor is easy to see.
      - math: \dfrac{(2x+5)^2}{x(2x+5)}
        note: The numerator is a perfect square, which the denominator has just hinted at.
      - math: \dfrac{2x+5}{x}
  - ask: Simplify fully.
    math: \dfrac{4x^3 + 14x^2 - 8x}{3x^2 + 10x - 8}
    grade: merit
    from: "2025"
    working:
      - math: \dfrac{2x(2x^2 + 7x - 4)}{3x^2 + 10x - 8}
        note: A common factor of two $x$ drops the numerator to a quadratic.
      - math: \dfrac{2x(2x-1)\ca{(x+4)}}{(3x-2)\ca{(x+4)}}
        note: Both are trinomials with a coefficient on the $x$ squared, so split the middle term.
      - math: \dfrac{2x(2x-1)}{3x-2}
        note: Either this or the expanded numerator is accepted.
  - ask: The expression can be written as $A + \dfrac{B}{x}$, where $A$ and $B$ are integers. Find $A$ and $B$.
    math: \dfrac{12x^2 - 14x + 4}{3x^2 - 2x}
    grade: excellence
    from: "2023"
    working:
      - math: \dfrac{2(6x^2 - 7x + 2)}{x(3x-2)}
        note: Common factor out of each, top and bottom.
      - math: \dfrac{2(3x-2)(2x-1)}{x(3x-2)}
      - math: \dfrac{2(2x-1)}{x} = \dfrac{4x-2}{x}
        note: Simplify first. The required form only becomes reachable once this has cancelled.
      - math: \dfrac{4x}{x} - \dfrac{2}{x} = 4 - \dfrac{2}{x}
        note: Split the numerator term by term over the denominator.
      - math: A = 4, \quad B = -2
        note: $B$ is negative, and the form given has a plus in it. Both facts have to hold at once.
  - ask: Simplify fully.
    math: \dfrac{1}{x-3} - \dfrac{6}{x^2-9}
    grade: excellence
    working:
      - math: \dfrac{1}{x-3} - \dfrac{6}{(x+3)(x-3)}
        note: Factorise the denominators before looking for a common one.
      - math: (x+3)(x-3)
        note: The second denominator already contains the first, so it is the common denominator.
      - math: \dfrac{(x+3) - 6}{(x+3)(x-3)}
        note: Only the first fraction needs taking up.
      - math: \dfrac{\ca{x-3}}{(x+3)\ca{(x-3)}}
        note: The numerator has become a copy of one of the factors underneath.
      - math: \dfrac{1}{x+3}
```

---

## Summary

A rational expression is a fraction with algebra in it, and every rule you know for number fractions still applies.

Factorise first. Always. It is the step that makes everything else possible.

Cancel factors, never terms. A factor multiplies the whole numerator and the whole denominator. Anything that is added or subtracted is a term and cannot be cancelled.

To multiply, factorise and cancel before combining. To divide, flip the second fraction. To add or subtract, factorise the denominators to find the common denominator, and put brackets around a numerator you are subtracting.

Leave your answer factorised. Expanding it out is not simplifying — the specification asks for the simplest algebraic form, and factorised is simplest.
