# A3 — Exponents

---

An exponent is shorthand for repeated multiplication. $x$ to the power five means $x$ times $x$ times $x$ times $x$ times $x$ — five of them multiplied together. The $x$ is the **base**. The five is the **exponent**, also called the index or the power.

That definition is the whole topic. Every index law is a consequence of that definition, and if you forget a law you can rebuild the law by writing out the multiplication. That is the approach worth taking here, because the index laws are **not** on the formulae sheet supplied in the exam. The quadratic formula is there, the discriminant is there, the log rules are there. The index laws are not. You either know them or you reconstruct them.

---

## The three core laws

### Multiplying: add the exponents

```figure
caption: Multiplying — add the exponents
steps:
  - math: x^3 \cdot x^2
  - math: (\ca{x \cdot x \cdot x})(\cb{x \cdot x})
    note: Write out what the notation means.
  - math: x \cdot x \cdot x \cdot x \cdot x
    note: Five of them, multiplied together.
  - math: x^5 \qquad \text{since } \ca{3} + \cb{2} = 5
```

$x$ cubed times $x$ squared. Write it out: $x$ times $x$ times $x$, then $x$ times $x$. Five $x$'s multiplied together. So the answer is $x$ to the fifth.

You added three and two. That is the law: when you multiply powers of the same base, add the exponents.

### Dividing: subtract the exponents

```figure
caption: Dividing — subtract the exponents
steps:
  - math: \dfrac{x^5}{x^2}
  - math: \dfrac{x \cdot x \cdot x \cdot \ca{x \cdot x}}{\ca{x \cdot x}}
    note: Five on top, two underneath.
  - math: \dfrac{x \cdot x \cdot x \cdot \ca{\cancel{x} \cdot \cancel{x}}}{\ca{\cancel{x} \cdot \cancel{x}}}
    note: Two of the x's on top cancel against the two underneath.
  - math: x^3 \qquad \text{since } 5 - 2 = 3
```

$x$ to the fifth, divided by $x$ squared. Five $x$'s on top, two on the bottom. Two of the $x$'s on top cancel with the two underneath, leaving three $x$'s. So the answer is $x$ cubed.

Subtract the exponents.

### A power of a power: multiply the exponents

```figure
caption: A power of a power — multiply the exponents
steps:
  - math: (x^2)^3
  - math: \ca{x^2} \cdot \ca{x^2} \cdot \ca{x^2}
    note: Three copies, because the outer power is three.
  - math: x^6 \qquad \text{since } 2 \times 3 = 6
    note: Each copy contributes two, three times over.
```

$x$ squared, all cubed. That means $x$ squared, times $x$ squared, times $x$ squared — three copies. Each copy is two $x$'s, so six altogether. $x$ to the sixth.

Multiply the exponents.

### The condition on all three

Every one of those laws requires the **same base**. Two cubed times three squared cannot be combined, because one is built from twos and the other from threes. There is nothing to gather.

That condition matters later. In Module B, solving exponential equations depends on rewriting both sides so that they have the same base. The same-base condition is the reason that rewriting step is necessary.

---

## Powers over products, and the trap

A power applied to a product applies to every factor.

Two $x$, all cubed, means two $x$ times two $x$ times two $x$. That is two times two times two, which is eight, and $x$ times $x$ times $x$, which is $x$ cubed. So eight $x$ cubed.

Now the trap, and it is the same trap as in the last lesson. A power does **not** distribute over addition.

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
    note: Not the same, and the gap is the missing $2xy$ — which is twenty-four.
```

$x$ plus $y$, all squared, is not $x$ squared plus $y$ squared. Expand it properly: $x$ plus $y$, times $x$ plus $y$, which gives $x$ squared plus two $x$ $y$ plus $y$ squared. There is a middle term. Check that with numbers — put in $x$ equals three and $y$ equals four. Three plus four, squared, is forty-nine. Nine plus sixteen is twenty-five. Not the same.

This is worth pairing with the cancelling rule from the last lesson, because the two are one idea appearing in two places. **Multiplication distributes. Addition does not.** Cancelling reaches every factor but not every term; a power reaches every factor but not every term. Understand that once and you have both.

---

## Zero, negative and fractional exponents

These three look like extra rules to memorise. They are not. Each one follows from the laws already stated.

### Zero

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

$x$ cubed divided by $x$ cubed is one, since anything divided by itself is one. But the division law says subtract the exponents: three minus three is zero, so the same calculation gives $x$ to the zero.

Both results are correct, so $x$ to the zero is one. Any base to the power zero is one.

### Negative

```figure
caption: Why a negative exponent is a reciprocal
steps:
  - math: \dfrac{x^3}{x^5}
    note: The same trick — work it out twice.
  - math: \dfrac{\cancel{x \cdot x \cdot x}}{\cancel{x \cdot x \cdot x} \cdot x \cdot x} = \dfrac{1}{x^2}
    note: Cancel three from each, and two are left underneath.
  - math: x^{3-5} = x^{-2}
    note: The division law gives minus two.
  - math: x^{-2} = \dfrac{1}{x^2}
    note: So a minus sign in the exponent means "one over", not "negative".
```

$x$ cubed divided by $x$ to the fifth. Cancelling three $x$'s from the top and bottom leaves two $x$'s on the bottom, so the answer is one over $x$ squared. But the division law says three minus five, which is minus two — $x$ to the minus two.

So $x$ to the minus two is one over $x$ squared. **A negative exponent means a reciprocal.** It does not mean a negative number. Two to the minus three is one eighth — a small positive number, not minus eight.

The rule also runs in reverse, and you will need it in that direction. One over $x$ cubed is $x$ to the minus three. Moving a power from the bottom of a fraction to the top flips the sign of its exponent.

### Fractional

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

$x$ to the half, times $x$ to the half. Add the exponents: a half plus a half is one, so the answer is $x$. Something which, multiplied by itself, gives $x$ — that is the square root of $x$.

So $x$ to the half is the square root of $x$. In general, **the denominator of a fractional exponent is the root**. $x$ to the one third is the cube root of $x$.

Now combine the root rule with the power-of-a-power law, for a fraction like two thirds. $x$ to the two thirds is the cube root of $x$, all squared. The denominator gives the root, the numerator gives the power.

```figure
caption: Root first, then power
steps:
  - math: 8^{\frac{2}{3}}
    note: The $\ca{3}$ on the bottom is the root; the $\cb{2}$ on top is the power.
  - math: \big(\sqrt[3]{8}\big)^{\cb{2}} = 2^{\cb{2}} = 4
    note: Root first. The numbers stay small.
  - math: \sqrt[\ca{3}]{8^{\cb{2}}} = \sqrt[3]{64} = 4
    note: Power first gives the same answer, but you had to know the cube root of sixty-four.
```

**Do the root first.** It keeps the numbers small. Eight to the two thirds — take the cube root of eight first, which is two, then square it, which is four. Going the other way means squaring eight to get sixty-four and then finding the cube root of sixty-four, which is more work for the same answer.

---

## Putting it together

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

A typical exam expression: eight $x$ to the sixth, all to the power two thirds.

The power applies to each factor. So it is eight to the two thirds, times $x$ to the sixth to the two thirds.

Eight to the two thirds: cube root of eight is two, squared is four.

$x$ to the sixth to the two thirds: multiply the exponents, six times two thirds is four, so $x$ to the fourth.

The answer is four $x$ to the fourth.

Work through it factor by factor. Do not try to see the whole thing at once.

---

## Summary

An exponent is repeated multiplication. Every law follows from that, so reconstruct rather than memorise — and you do have to know them, because they are not on the formulae sheet.

Multiplying adds the exponents. Dividing subtracts them. A power of a power multiplies them. All three require the same base.

A power applies to every factor in a product, and never distributes over addition. $x$ plus $y$, all squared, has a middle term.

Zero exponent gives one. A negative exponent means a reciprocal, not a negative value. A fractional exponent is a root — denominator is the root, numerator is the power, and take the root first.

The specification asks for answers in their simplest algebraic form. For exponents that normally means one term, positive exponents only, and any numbers evaluated.
