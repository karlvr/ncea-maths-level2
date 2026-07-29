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

```figure
caption: Dividing has to reach every term
steps:
  - math: \dfrac{2x + 6}{2}
    note: Dividing by two means dividing all of the numerator by two.
  - math: \dfrac{\ca{2}x}{\ca{2}} + \dfrac{\cb{6}}{\ca{2}}
    note: Both terms, not just the one with the two in front of it.
  - math: x + 3
```

Take two $x$ plus six, all over two. Dividing by two means dividing the whole numerator by two — every term of it. Two $x$ becomes $x$, and six becomes three. The answer is $x$ plus three.

```figure
caption: The error to avoid
steps:
  - math: \dfrac{\ca{2}x + 6}{\ca{2}}
    note: Cancelling only the twos that catch the eye.
  - math: x + 6 \qquad \color{red}{\times}
    note: The six was never divided. Substitute $x = 1$ — the original is four, this is seven.
```

Now the error. It is tempting to look at the two on the bottom and the two in front of the $x$ on the top, cancel that pair, and write $x$ plus six. That is wrong, because the six was never divided. The six is a separate term, and the division has to reach the six as well.

The safe version of the rule: **you can only cancel something that is multiplying the entire numerator and multiplying the entire denominator.** Anything that is added or subtracted is a term, and a term cannot be cancelled.

So the procedure is fixed. Factorise the numerator completely. Factorise the denominator completely. Only then cancel, and only cancel whole brackets.

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

Take $x$ squared minus nine, over $x$ squared plus seven $x$ plus twelve. Nothing can be cancelled yet — the $x$ squareds are terms, not factors. Factorise the top: difference of two squares, so $x$ plus three, times $x$ minus three. Factorise the bottom: two numbers multiplying to twelve and adding to seven, so $x$ plus three, times $x$ plus four. Now $x$ plus three appears as a factor on both, so it cancels. What is left is $x$ minus three, over $x$ plus four.

---

## Multiplying and dividing

Multiplying is straightforward: tops together, bottoms together.

But do not multiply the brackets out first. Factorise everything first, cancel anything common across the whole fraction, and only then combine what is left. If you expand first you produce large expressions that you will have to factorise again.

Dividing is multiplication by the reciprocal. Turn the second fraction upside down, change the divide into a multiply, and continue as above. Turn over the second fraction and not the first — the second fraction is the one being divided by.

---

## Adding and subtracting

Here you need a common denominator, and the same rule applies as with numbers: you cannot add fractions until the bottoms match.

Factorise the denominators first. The lowest common denominator is then built from the factors you find — take each distinct factor, and include it as many times as it appears in any single denominator.

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

Take one over $x$ plus two, plus three over $x$ minus one. The denominators share nothing, so the common denominator is $x$ plus two, times $x$ minus one. Multiply the first fraction top and bottom by $x$ minus one, and the second top and bottom by $x$ plus two. The numerator becomes $x$ minus one, plus three lots of $x$ plus two — which is $x$ minus one plus three $x$ plus six, or four $x$ plus five. The answer is four $x$ plus five, over the product of the two brackets.

Leave the denominator in factorised form. It is already simplest, and expanding it hides whether anything cancels.

### The sign trap when subtracting

When you subtract, the minus applies to the entire numerator of the second fraction, not just its first term.

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

Take seven $x$ plus two, over five, minus two $x$ minus three, over five. Subtracting two $x$ minus three means subtracting the two $x$ and *adding* the three. The numerator is seven $x$ plus two, minus two $x$, plus three — so five $x$ plus five. And that has a common factor of five, which cancels with the denominator, leaving $x$ plus one.

The reliable defence is to write brackets around the second numerator before you do anything else, and expand the minus deliberately. Every year the examiner's report lists this error.

---

## One more thing to look for

```figure
caption: Brackets that differ only by a sign
steps:
  - math: \dfrac{\ca{3-x}}{\cb{x-3}}
    note: These are not the same bracket, so nothing cancels yet.
  - math: \dfrac{-1(\cb{x-3})}{\cb{x-3}}
    note: Take a minus one out of the top, and the brackets match.
  - math: "-1"
```

Sometimes two factors do not match because one is the negative of the other. Three minus $x$, and $x$ minus three, are not the same factor — but they differ only by a sign. Take a minus one out of three minus $x$, and it becomes minus one, times $x$ minus three. Now the brackets match and can cancel, leaving a minus one behind.

---

## Summary

A rational expression is a fraction with algebra in it, and every rule you know for number fractions still applies.

Factorise first. Always. It is the step that makes everything else possible.

Cancel factors, never terms. A factor multiplies the whole numerator and the whole denominator. Anything that is added or subtracted is a term and cannot be cancelled.

To multiply, factorise and cancel before combining. To divide, flip the second fraction. To add or subtract, factorise the denominators to find the common denominator, and put brackets around a numerator you are subtracting.

Leave your answer factorised. Expanding it out is not simplifying — the specification asks for the simplest algebraic form, and factorised is simplest.
