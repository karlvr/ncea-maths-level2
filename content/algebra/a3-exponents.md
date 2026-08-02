# A3—Exponents

---

An exponent is shorthand for repeated multiplication. $x^5$ means $x$ times $x$ times $x$ times $x$ times $x$—five of them multiplied together. The $x$ is the **base**. The $5$ is the **exponent**, also called the index or the power.

That definition is the whole topic. Every index law is a consequence of that definition, and if you forget a law you can rebuild the law by writing out the multiplication. That is the approach worth taking here, because the index laws are **not** on the formulae sheet supplied in the exam. The quadratic formula is there, the discriminant is there, the log rules are there. The index laws are not. You either know them or you reconstruct them.

---

## The three core laws

### Multiplying: add the exponents

$x^3 \cdot x^2$. Write it out: $x$ times $x$ times $x$, then $x$ times $x$. Five $x$'s multiplied together. So the answer is $x^5$.

```figure
caption: Multiplying—add the exponents
steps:
  - math: x^3 \cdot x^2
  - math: (\ca{x \cdot x \cdot x})(\cb{x \cdot x})
    note: Write out what the notation means.
  - math: x \cdot x \cdot x \cdot x \cdot x
    note: Five of them, multiplied together.
  - math: x^5 \qquad \text{since } \ca{3} + \cb{2} = 5
```

You added $3$ and $2$. That is the law: when you multiply powers of the same base, add the exponents.

### Dividing: subtract the exponents

$\dfrac{x^5}{x^2}$. Five $x$'s on top, two on the bottom. Two of the $x$'s on top cancel with the two underneath, leaving three $x$'s. So the answer is $x^3$.

```figure
caption: Dividing—subtract the exponents
steps:
  - math: \dfrac{x^5}{x^2}
  - math: \dfrac{x \cdot x \cdot x \cdot \ca{x \cdot x}}{\ca{x \cdot x}}
    note: Five on top, two underneath.
  - math: \dfrac{x \cdot x \cdot x \cdot \ca{\cancel{x} \cdot \cancel{x}}}{\ca{\cancel{x} \cdot \cancel{x}}}
    note: Two of the $x$'s on top cancel against the two underneath.
  - math: x^3 \qquad \text{since } 5 - 2 = 3
```

Subtract the exponents.

### A power of a power: multiply the exponents

$(x^2)^3$. That means $x^2$ times $x^2$ times $x^2$—three copies. Each copy is two $x$'s, so six altogether. $x^6$.

```figure
caption: A power of a power—multiply the exponents
steps:
  - math: (x^2)^3
  - math: \ca{x^2} \cdot \ca{x^2} \cdot \ca{x^2}
    note: Three copies, because the outer power is three.
  - math: x^6 \qquad \text{since } 2 \times 3 = 6
    note: Each copy contributes two, three times over.
```

Multiply the exponents.

### All three need the same base

Every one of those laws requires the **same base**. $2^3 \cdot 3^2$ cannot be combined, because one is built from twos and the other from threes. There is nothing to combine.

That condition matters later. In Module B, solving exponential equations depends on rewriting both sides so that they have the same base. The same-base condition is the reason that rewriting step is necessary.

```practice
caption: the three laws
questions:
  - ask: Simplify.
    math: x^7 \times x^4 \div x^3
    grade: achieved
    working:
      - math: x^{7+4} = x^{11}
        note: Work left to right, one law at a time.
      - math: x^{11-3} = x^8
  - ask: Simplify.
    math: (y^4)^3 \times y^2
    grade: achieved
    working:
      - math: y^{4 \times 3} \times y^2
        note: A power of a power multiplies. Do that before the multiplication outside it.
      - math: y^{12} \times y^2 = y^{14}
        note: The two exponents are combined by adding, not by multiplying again.
  - ask: Simplify.
    math: \dfrac{12a^5b^3}{4a^2b^3}
    grade: merit
    working:
      - math: \dfrac{12}{4} \times \dfrac{a^5}{a^2} \times \dfrac{b^3}{b^3}
        note: Split it by base. The numbers are their own base and divide as numbers.
      - math: 3 \times a^{5-2} \times b^{3-3}
      - math: 3a^3
        note: $b^0$ is $1$, so the $b$ leaves altogether rather than staying as $b$.
```

---

## Powers over products, not over sums

A power applied to a product applies to every factor.

$(2x)^3$ means $2x$ times $2x$ times $2x$. That is two times two times two, which is $8$, and $x$ times $x$ times $x$, which is $x^3$. So $8x^3$.

Now the trap, and it is the same trap as in the last lesson. A power does **not** distribute over addition.

$(x+y)^2$ is not $x^2 + y^2$. Expand it properly: $(x+y)(x+y)$, which gives $x^2 + 2xy + y^2$. There is a middle term. Check that with numbers—put in $x = 3$ and $y = 4$. Then $(3+4)^2$ is $49$, and $3^2 + 4^2$ is $25$. Not the same.

```figure
caption: A power does not distribute over addition
steps:
  - math: (x+y)^2 \;\ne\; x^2 + y^2
    note: Expand it properly rather than distributing the power.
  - math: (x+y)(x+y) \;=\; x^2 + \ca{2xy} + y^2
    note: There is a middle term, and that is the whole difference.
  - math: (\cb{3}+\cc{4})^2 = 7^2 = 49
    note: Check it with numbers.
  - math: \cb{3}^2 + \cc{4}^2 = 9 + 16 = 25
    note: Not the same, and the gap is the missing $2xy$—which is $24$.
```

This is worth pairing with the cancelling rule from the last lesson, because the two are one idea appearing in two places. **Multiplication distributes. Addition does not.** Cancelling reaches every factor but not every term; a power reaches every factor but not every term.

```practice
caption: powers over products
questions:
  - ask: Simplify.
    math: (3x^4)^2
    grade: achieved
    working:
      - math: \ca{3^2} \times \cb{(x^4)^2}
        note: The power reaches the $3$ as well as the $x$.
      - math: 9x^8
  - ask: Simplify.
    math: (2y)^3 \times (3y^2)^2
    grade: merit
    working:
      - math: \ca{8y^3} \times \cb{9y^4}
        note: $2^3$ is $8$ and $3^2$ is $9$. Neither number is left alone.
      - math: 72y^7
        note: The 2025 report names writing $2y^3$ for the first of these as a common failure.
  - ask: Expand.
    math: (x+2y)^2
    grade: merit
    working:
      - math: (x+2y)(x+2y)
        note: A sum inside a bracket has to be written out, not distributed over.
      - math: x^2 + 2xy + 2xy + 4y^2
      - math: x^2 + 4xy + 4y^2
```

---

## Zero, negative and fractional exponents

Each of these three follows from the laws already stated.

### Zero

$\dfrac{x^3}{x^3}$ is $1$, since anything divided by itself is one. But the division law says subtract the exponents: $3 - 3 = 0$, so the same calculation gives $x^0$.

```figure
caption: Why anything to the power zero is one
steps:
  - math: \dfrac{x^3}{x^3}
    note: Two ways of working this out, both correct.
  - math: \dfrac{x^3}{x^3} = 1
    note: Anything divided by itself is one.
  - math: \dfrac{x^3}{x^3} = x^{3-3} = x^0
    note: And the division law says subtract the exponents.
  - math: x^0 = 1
    note: Both are right, so the two answers must be the same thing.
```

Both results are correct, so $x^0$ is $1$. Any base to the power zero is one.

### Negative

$\dfrac{x^3}{x^5}$. Cancelling three $x$'s from the top and bottom leaves two $x$'s on the bottom, so the answer is $\dfrac{1}{x^2}$. But the division law says $3 - 5$, which is $-2$, so $x^{-2}$.

```figure
caption: Why a negative exponent is a reciprocal
steps:
  - math: \dfrac{x^3}{x^5}
    note: The same trick—work it out twice.
  - math: \dfrac{\cancel{x \cdot x \cdot x}}{\cancel{x \cdot x \cdot x} \cdot x \cdot x} = \dfrac{1}{x^2}
    note: Cancel three from each, and two are left underneath.
  - math: x^{3-5} = x^{-2}
    note: The division law gives minus two.
  - math: x^{-2} = \dfrac{1}{x^2}
    note: So a minus sign in the exponent means “one over”, not “negative”.
```

So $x^{-2}$ is $\dfrac{1}{x^2}$. **A negative exponent means a reciprocal.** It does not mean a negative number. $2^{-3}$ is $\dfrac{1}{8}$—a small positive number, not $-8$.

The rule also runs in reverse, and you will need it in that direction. $\dfrac{1}{x^3}$ is $x^{-3}$. Moving a power from the bottom of a fraction to the top flips the sign of its exponent.

### Fractional

$x^{\frac{1}{2}} \cdot x^{\frac{1}{2}}$. Add the exponents: a half plus a half is one, so the answer is $x$. Something which, multiplied by itself, gives $x$—that is the square root of $x$.

```figure
caption: Why a fractional exponent is a root
steps:
  - math: x^{\frac{1}{2}} \cdot x^{\frac{1}{2}}
  - math: x^{\frac{1}{2} + \frac{1}{2}} = x^1 = x
    note: By the multiplying law.
  - math: \ca{?} \times \ca{?} = x
    note: So $x^{\frac{1}{2}}$ is the thing which, multiplied by itself, gives $x$.
  - math: x^{\frac{1}{2}} = \sqrt{x}
```

So $x^{\frac{1}{2}}$ is the square root of $x$. In general, **the denominator of a fractional exponent is the root**. $x^{\frac{1}{3}}$ is the cube root of $x$.

Now combine the root rule with the power-of-a-power law, for a fraction like two thirds. $x^{\frac{2}{3}}$ is $\big(\sqrt[3]{x}\big)^2$. The denominator gives the root, the numerator gives the power.

**Do the root first.** It keeps the numbers small. For $8^{\frac{2}{3}}$, take the cube root of $8$ first, which is $2$, then square it, which is $4$. Going the other way means squaring $8$ to get $64$ and then finding the cube root of $64$, which is more work for the same answer.

```figure
caption: Root first, then power
steps:
  - math: 8^{\frac{2}{3}}
    note: The $\ca{3}$ on the bottom is the root; the $\cb{2}$ on top is the power.
  - math: \big(\sqrt[3]{8}\big)^{\cb{2}} = 2^{\cb{2}} = 4
    note: Root first. The numbers stay small.
  - math: \sqrt[\ca{3}]{8^{\cb{2}}} = \sqrt[3]{64} = 4
    note: Power first gives the same answer, but you had to know the cube root of $64$.
```

### Surd form and index form

A **surd** is a root written with a root sign. The rule connecting roots and fractional exponents runs in both directions, and the direction you will need most often is surd into index, because the index laws apply to powers and there is nothing they can do with a root sign.

$\sqrt{x}$ is $x^{\frac{1}{2}}$. And $\sqrt[3]{x^2}$ is $x^{\frac{2}{3}}$—the root goes underneath, the power inside goes on top. $\dfrac{1}{\sqrt{x}}$ is $x^{-\frac{1}{2}}$, because being underneath a one turns the exponent negative as well.

```figure
caption: Surd form to index form
steps:
  - math: \sqrt{x} \;=\; x^{\frac{1}{2}}
    note: The root becomes the denominator of the exponent.
  - math: \sqrt[\ca{3}]{x^{\cb{2}}} \;=\; x^{\frac{\cb{2}}{\ca{3}}}
    note: The root goes underneath, the power inside goes on top.
  - math: \dfrac{1}{\sqrt{x}} \;=\; \dfrac{1}{x^{\frac{1}{2}}} \;=\; x^{-\frac{1}{2}}
    note: Underneath a one as well, so the exponent turns negative.
```

Convert first, then apply the laws. The 2025 report has this skill on both of its lists: converting from surd form to index form is on the list of what candidates awarded Achieved could do, and failing to manipulate expressions involving surds is on the list of why candidates did not achieve.

```practice
caption: surd form and index form
questions:
  - ask: Write in index form.
    math: \sqrt[4]{x^3}
    grade: achieved
    working:
      - math: x^{\frac{3}{4}}
        note: The $3$ and the $4$ do not swap. The root is always the denominator.
  - ask: Write in index form.
    math: \dfrac{2}{\sqrt[3]{x}}
    grade: achieved
    working:
      - math: \dfrac{2}{x^{\frac{1}{3}}}
        note: The $2$ is not under the root sign, so the root does not reach it.
      - math: 2x^{-\frac{1}{3}}
        note: Only the power moves up out of the denominator. The $2$ stays where it is.
  - ask: Simplify, giving your answer in index form.
    math: \sqrt{x} \times \sqrt[3]{x}
    grade: merit
    working:
      - math: x^{\frac{1}{2}} \times x^{\frac{1}{3}}
        note: Two different roots cannot be combined as roots. Convert them both first.
      - math: x^{\frac{1}{2} + \frac{1}{3}}
        note: The same base now, so the exponents add.
      - math: x^{\frac{5}{6}}
        note: A half and a third go over a common denominator of $6$.
```

```practice
caption: zero, negative and fractional exponents
questions:
  - ask: Evaluate.
    math: 16^{\frac{3}{2}}
    grade: achieved
    working:
      - math: \big(\sqrt{16}\big)^3
        note: The $2$ underneath is the root, so the root is a square root.
      - math: 4^3 = 64
  - ask: Write without a negative exponent.
    math: 5x^{-3}
    grade: achieved
    working:
      - math: 5 \times \dfrac{1}{x^3}
        note: The exponent belongs to the $x$ alone, so the $5$ does not move.
      - math: \dfrac{5}{x^3}
  - ask: Simplify, leaving your answer with positive exponents.
    math: \dfrac{6x^{-2}y^4}{9x^3y^{-1}}
    grade: merit
    working:
      - math: \dfrac{6}{9} \times x^{-2-3} \times y^{4-(-1)}
        note: Subtract the exponents by base. Subtracting $-1$ adds $1$.
      - math: \tfrac{2}{3}x^{-5}y^5
      - math: \dfrac{2y^5}{3x^5}
        note: A negative exponent on top becomes a positive one underneath.
  - ask: Evaluate.
    math: \left(\dfrac{27}{8}\right)^{-\frac{2}{3}}
    grade: merit
    working:
      - math: \left(\dfrac{8}{27}\right)^{\frac{2}{3}}
        note: A negative exponent on a fraction turns the fraction over.
      - math: \left(\sqrt[3]{\dfrac{8}{27}}\right)^2 = \left(\dfrac{2}{3}\right)^2
        note: Root first, top and bottom.
      - math: \dfrac{4}{9}
```

---

## Putting it together

A typical exam expression: $\big(8x^6\big)^{\frac{2}{3}}$.

The power applies to each factor. So it is $8^{\frac{2}{3}} \cdot \big(x^6\big)^{\frac{2}{3}}$.

For $8^{\frac{2}{3}}$: the cube root of $8$ is $2$, squared is $4$.

For $\big(x^6\big)^{\frac{2}{3}}$: multiply the exponents, and six times two thirds is four, so $x^4$.

The answer is $4x^4$.

```figure
id: a3-worked
caption: One factor at a time
steps:
  - math: \big(8x^6\big)^{\frac{2}{3}}
    note: The power applies to each factor separately.
  - math: \ca{8^{\frac{2}{3}}} \cdot \cb{\big(x^6\big)^{\frac{2}{3}}}
  - math: \ca{8^{\frac{2}{3}}} = \big(\sqrt[3]{8}\big)^2 = 2^2 = \ca{4}
    note: Root first, then square.
  - math: \cb{\big(x^6\big)^{\frac{2}{3}}} = x^{6 \times \frac{2}{3}} = \cb{x^4}
    note: A power of a power, so multiply the exponents.
  - math: \ca{4}\cb{x^4}
```

Nothing in that is new. Each factor met one of the laws above, and the only new thing is that they arrived in the same expression.

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Simplify.
    math: 4y \times \sqrt{\dfrac{y^6}{25}}
    grade: achieved
    from: "2025"
    working:
      - math: \sqrt{\dfrac{y^6}{25}} = \dfrac{y^3}{5}
        note: A square root is the power $\dfrac{1}{2}$, and it reaches the top and the bottom.
      - math: 4y \times \dfrac{y^3}{5}
      - math: \dfrac{4y^4}{5}
  - ask: Simplify, leaving your answer with positive exponents.
    math: \dfrac{9(3n)^2}{n^5}
    grade: achieved
    from: "2023"
    working:
      - math: \dfrac{9 \times \ca{9n^2}}{n^5}
        note: The square reaches the $3$ inside the bracket as well as the $n$.
      - math: \dfrac{81n^2}{n^5} = 81n^{-3}
      - math: \dfrac{81}{n^3}
        note: Positive exponents were asked for, so the answer cannot be left at the line above.
  - ask: Simplify.
    math: \left(\dfrac{n^4}{25n^8}\right)^{-0.5}
    grade: achieved
    from: "2023"
    working:
      - math: \dfrac{n^4}{25n^8} = \dfrac{1}{25n^4}
        note: Simplify inside the bracket first. There is much less to do afterwards.
      - math: \big(25n^4\big)^{0.5}
        note: The minus means turn it over, and then the half is taken.
      - math: 5n^2
        note: $-0.5$ is a fractional exponent written as a decimal.
  - ask: Simplify.
    math: \big(16x^8\big)^{\frac{3}{4}}
    grade: merit
    working:
      - math: \ca{16^{\frac{3}{4}}} \times \cb{\big(x^8\big)^{\frac{3}{4}}}
        note: One factor at a time.
      - math: \ca{16^{\frac{3}{4}}} = \big(\sqrt[4]{16}\big)^3 = 2^3 = \ca{8}
      - math: \cb{\big(x^8\big)^{\frac{3}{4}}} = x^{8 \times \frac{3}{4}} = \cb{x^6}
      - math: 8x^6
  - ask: Show that the expression simplifies to $\dfrac{x-1}{x(x+1)}$.
    math: \dfrac{\left(x^{\frac{3}{2}} - x^{\frac{1}{2}}\right)\left(x^{\frac{1}{2}} + x^{-\frac{1}{2}}\right)}{\left(x^{\frac{3}{2}} + x^{\frac{1}{2}}\right)^2}
    grade: excellence
    from: "2024"
    working:
      - math: x^{\frac{3}{2}}\!\cdot\!x^{\frac{1}{2}} + x^{\frac{3}{2}}\!\cdot\!x^{-\frac{1}{2}} - x^{\frac{1}{2}}\!\cdot\!x^{\frac{1}{2}} - x^{\frac{1}{2}}\!\cdot\!x^{-\frac{1}{2}}
        note: Expand the numerator, adding exponents at every product.
      - math: x^2 + x - x - 1 = x^2 - 1
        note: Two of the four terms cancel, and what is left is a difference of two squares.
      - math: \left(x^{\frac{1}{2}}(x+1)\right)^2 = x(x+1)^2
        note: Take a factor of $x^{\frac{1}{2}}$ out of the denominator before squaring it.
      - math: \dfrac{(x+1)(x-1)}{x(x+1)^2}
        note: Both parts are now ordinary algebra. The exponents were only ever the disguise.
      - math: \dfrac{x-1}{x(x+1)}
```

---

## Summary

An exponent is repeated multiplication. Every law follows from that, so reconstruct rather than memorise—and you do have to know them, because they are not on the formulae sheet.

Multiplying adds the exponents. Dividing subtracts them. A power of a power multiplies them. All three require the same base.

A power applies to every factor in a product, and never distributes over addition. $(x+y)^2$ has a middle term.

Zero exponent gives one. A negative exponent means a reciprocal, not a negative value. A fractional exponent is a root—denominator is the root, numerator is the power, and take the root first.

A root sign is an exponent in another notation. Convert it to an exponent before you try to do anything with it, because the laws above are the only laws there are.

The specification asks for answers in their simplest algebraic form. For exponents that normally means one term, positive exponents only, and any numbers evaluated.
