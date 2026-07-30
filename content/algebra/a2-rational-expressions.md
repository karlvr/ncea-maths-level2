# A2—Rational expressions

---

A **rational expression** is a fraction with algebra in it. Rational means ratio—one thing divided by another. $\dfrac{x+2}{x-3}$ is a rational expression.

You already know how to handle rational expressions. Every rule for ordinary number fractions applies. To multiply, multiply the tops and multiply the bottoms. To divide, turn the second fraction upside down and multiply. To add, put both fractions over a common denominator first. To cancel, remove a factor that appears top and bottom.

The difficulty is that with numbers you can see the factors immediately—with $\dfrac{6}{9}$, the $3$ is obvious. With algebra the factors are hidden inside the expression, and you have to create the factors before you can use them.

This is the topic the examiner's reports are hardest on. The 2025 report says a lack of basic algebra skills limited candidates across all three papers of Level 2 maths, and that it was most evident when they were asked to work with expressions involving fractions.

The first move in almost every one of these questions is **factorise everything you can see.**

---

## Cancelling: factors only, never terms

Cancelling is division. When you cancel, you are dividing the numerator and the denominator—the top and the bottom—by the same thing, which leaves the value unchanged.

Cancelling works on a product. It does not work on a sum.

You can still divide, if you divide every term. Take $\dfrac{2x+6}{2}$. Dividing by $2$ means dividing the whole numerator by $2$—every term of it. $2x$ becomes $x$, and $6$ becomes $3$. The answer is $x + 3$.

```figure
caption: Dividing has to reach every term
steps:
  - math: \dfrac{2x + 6}{2}
    note: Dividing by $2$ means dividing all of the numerator by $2$.
  - math: \dfrac{\ca{2}x}{\ca{2}} + \dfrac{\cb{6}}{\ca{2}}
    note: Both terms, not just the one with the $2$ in front of it.
  - math: x + 3
```

Now the error. It is tempting to look at the $2$ on the bottom and the $2$ in front of the $x$ on the top, cancel that pair, and write $x + 6$. That is wrong, because the $6$ was never divided. The $6$ is a separate term, and the division has to reach the $6$ as well.

```figure
caption: The error to avoid
steps:
  - math: \dfrac{\ca{2}x + 6}{\ca{2}}
    note: Cancelling only the twos that catch the eye.
  - math: x + 6 \qquad \color{red}{\times}
    note: The $6$ was never divided. Substitute $x = 1$—the original is $4$, this is $7$.
```

The safe version of the rule: **you can only cancel something that is multiplying the entire numerator and multiplying the entire denominator.** Anything that is added or subtracted is a term, and a term cannot be cancelled.

So the procedure is fixed. Factorise the numerator completely. Factorise the denominator completely. Only then cancel, and only cancel whole brackets.

```figure
id: a2-simplify
caption: Factorise, then cancel
steps:
  - math: \dfrac{x^2 - 9}{x^2 + 7x + 12}
    note: Nothing can be cancelled yet. The $x^2$ terms are terms, not factors. So we factorise…
  - math: \dfrac{(x+3)(x-3)}{x^2 + 7x + 12}
    note: The top is a difference of two squares. Next the denominator…
  - math: \dfrac{(x+3)(x-3)}{(x+3)(x+4)}
    note: The bottom needs two numbers multiplying to $12$ and adding to $7$.
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
        note: Cancelling only the $6$ against the $2$ would leave the $4x^2$ undivided.
  - ask: Simplify.
    math: \dfrac{x^2 - 25}{x^2 + 3x - 10}
    grade: achieved
    working:
      - math: \dfrac{(x+5)(x-5)}{x^2 + 3x - 10}
        note: Difference of two squares on the top.
      - math: \dfrac{(x+5)(x-5)}{(x+5)(x-2)}
        note: Multiply to $-10$, add to $3$.
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
        note: One $(x+3)$ cancels. The other stays, because only one appeared on top.
```

---

## Multiplying and dividing

Multiplying is straightforward: tops together, bottoms together.

But do not multiply the brackets out first. Factorise everything first, cancel anything common across the whole fraction, and only then combine what is left. If you expand first you produce large expressions that you will have to factorise again.

```figure
caption: Cancel before combining
steps:
  - math: \dfrac{x+3}{x^2-4} \times \dfrac{x-2}{x+3}
    note: Two fractions to be multiplied, with nothing expanded.
  - math: \dfrac{x+3}{(x+2)(x-2)} \times \dfrac{x-2}{x+3}
    note: Factorise whatever will factorise, and matching brackets appear. Now multiply…
  - math: \dfrac{\ca{(x+3)}\,\cb{(x-2)}}{(x+2)\,\cb{(x-2)}\,\ca{(x+3)}}
    note: Multiply tops together and bottoms together. Now cancel the pairs…
  - math: \dfrac{\ca{\cancel{(x+3)}}\,\cb{\cancel{(x-2)}}}{(x+2)\,\cb{\cancel{(x-2)}}\,\ca{\cancel{(x+3)}}}
    note: Both the factors on the top have a match underneath. What’s left?
  - math: \dfrac{1}{x+2}
    note: Nothing is left on the top, so a $1$ stands there.
```

Dividing is multiplication by the reciprocal. Turn the second fraction upside down, change the divide into a multiply, and continue as above. Turn over the second fraction and not the first—the second fraction is the one being divided by.

So the order is the same for multiplying and for dividing: factorise, multiply into one fraction, then cancel. Once it is one fraction, a factor on the top cancels against a match anywhere underneath, whichever fraction it arrived in.

```practice
caption: multiplying and dividing
questions:
  - ask: Simplify.
    math: \dfrac{3x}{x+1} \times \dfrac{x+1}{9x^2}
    grade: achieved
    working:
      - math: \dfrac{3x}{x+1} \times \dfrac{x+1}{(3x)^2}
        note: $9x^2$ is $(3x)^2$, which puts a $3x$ underneath to match the one on the left.
      - math: \dfrac{\cb{3x}\,\ca{(x+1)}}{\ca{(x+1)}\,(\cb{3x})^2}
        note: Tops together and bottoms together, without expanding anything.
      - math: \dfrac{1}{3x}
        note: Both pairs cancel. One $3x$ is left underneath, because the bottom had two of them.
  - ask: Simplify.
    math: \dfrac{6x^2}{x+3} \div \dfrac{2x}{x+3}
    grade: achieved
    working:
      - math: \dfrac{6x^2}{x+3} \times \dfrac{x+3}{2x}
        note: The divide becomes a multiply, with the second fraction turned over.
      - math: \dfrac{2x \cdot 3x}{x+3} \times \dfrac{x+3}{2x}
        note: $6x^2$ is $2x$ times $3x$, which puts a $2x$ on the top to match the one underneath.
      - math: \dfrac{\cb{2x} \cdot 3x\,\ca{(x+3)}}{\ca{(x+3)}\,\cb{2x}}
        note: Tops together and bottoms together.
      - math: 3x
        note: Both pairs cancel, and the $3x$ is what is left.
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

Here you need a common denominator, and the same rule applies as with numbers: you cannot add fractions until you’ve made the bottoms match.

Factorise the denominators first. The lowest common denominator is then built from the factors you find—take each distinct factor, and include it as many times as it appears in any single denominator.

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

```figure
caption: The minus reaches the whole numerator
steps:
  - math: \dfrac{7x+2}{5} - \dfrac{2x-3}{5}
    note: Write the second numerator in brackets before doing anything else.
  - math: \dfrac{(7x+2) - \ca{(2x-3)}}{5}
  - math: \dfrac{7x + 2 - 2x \ca{+} 3}{5}
    note: Minus a $-3$ is $+3$. This sign is the one that costs marks.
  - math: \dfrac{5x + 5}{5}
  - math: \dfrac{\cb{5}(x+1)}{\cb{5}} \;=\; x+1
    note: A common factor appears, so it cancels.
```

The reliable defence is to write brackets around the second numerator before you do anything else, and expand the minus deliberately. The reports put this skill on both of their lists: the 2025 report gives dealing incorrectly with negative numbers as a reason candidates did not achieve, and the 2024 report gives working with negative terms without error as something candidates awarded Merit could do.

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
        note: $-3$ times $-2$ is $+6$.
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

Sometimes two factors do not match because one is the negative of the other. $3-x$ and $x-3$ are not the same factor, but they differ only by a sign. Take a $-1$ out of $3-x$, and it becomes $-1(x-3)$. Now the brackets match and can cancel.

```figure
caption: Brackets that differ only by a sign
steps:
  - math: \dfrac{\ca{3-x}}{\cb{x-3}}
    note: These are not the same bracket, so nothing cancels yet.
  - math: \dfrac{-1(\cb{x-3})}{\cb{x-3}}
    note: Take a $-1$ out of the top, and the brackets match.
  - math: "-1"
```

A subtraction written the other way round is what produces such a pair, and a difference of two squares is where that happens most: $9-x^2$ factorises to $(3+x)(3-x)$, while $x^2-9$ gives $(x+3)(x-3)$. Before deciding that nothing cancels, check whether taking out a $-1$ would make two brackets match.

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
        note: Take a $-1$ out of the denominator to make the brackets match.
      - math: -(x+4)
  - ask: Simplify fully.
    math: \dfrac{9-x^2}{x^2+2x-15}
    grade: merit
    working:
      - math: \dfrac{(3+x)(3-x)}{(x+5)(x-3)}
        note: Difference of two squares on top, trinomial underneath.
      - math: \dfrac{(x+3)\big(\!-\!1\big)\ca{(x-3)}}{(x+5)\ca{(x-3)}}
        note: $3-x$ is $-1(x-3)$.
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
        note: A common factor of $2x$ drops the numerator to a quadratic.
      - math: \dfrac{2x(2x-1)\ca{(x+4)}}{(3x-2)\ca{(x+4)}}
        note: Both are trinomials with a coefficient on the $x^2$, so split the middle term.
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

Leave your answer factorised. Expanding it out is not simplifying—the specification asks for the simplest algebraic form, and factorised is simplest.

The common denominator comes back in Module B. An equation with fractions in it is cleared by multiplying every term by the lowest common denominator, found exactly as it is found here—with the difference that an equation may be multiplied through and an expression may not.
