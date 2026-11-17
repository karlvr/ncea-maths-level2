# B2—Maximum and minimum problems

---

In the previous lesson you found the turning points of curves that were given. The closing parts of the examination give a situation instead. Examples are a container to design, a paddock to fence, and an area to make as large as possible from a fixed amount of material. You have to form the function yourself before you can differentiate it. The specification calls this *forming polynomials from a variety of contexts*, and each paper sets its Excellence parts on it.

---

## From situation to polynomial

The question asks you to make a quantity as large or as small as possible. That quantity is the volume, the area, or the amount of material. You have to write it as a function of **one** variable. Form that function from the quantity and the constraint:

- **The quantity itself** is written from the formula for the shape. This usually has two variables in it.
- **The constraint** is a fixed total in the situation, such as a length of fencing, an area of sheet metal, or a volume the container must hold. Solve the constraint for one variable, and substitute the result into the quantity.

The result is a polynomial in one variable. Then find its turning point with the method of the previous lesson.

```figure
caption: A paddock against a wall
steps:
  - math: \textsf{40 m of fencing, three sides, wall on the fourth. Largest area?}
    note: "Let the two ends be $x$ metres each. The fencing is the constraint: the remaining side is $40 - 2x$."
  - math: A = x(40 - 2x)
    note: "The quantity to maximise, written from the shape as length times width, with the constraint already substituted."
  - math: A = 40x - 2x^2
    note: "Always expand before you differentiate."
  - math: A' = 40 - 4x = 0
    note: "The largest area sits at a turning point of $A$, and turning points are where the derivative is zero."
  - math: x = 10
  - math: A = 10(40 - 20) = 200
    note: "The ends are ten metres, the long side twenty, and the area is $200$ m$^2$. The answer states the quantity the question asked for, with its unit."
```

The first two lines earn the marks. Forming the polynomial is itself the assessed skill, before any turning point is found. The first grade step of the 2024 schedule for its container part is *"Sets up area equation in terms of 1 variable AND differentiates"*. Write the constraint, write the quantity, and show the substitution that combines them. An expression written without working does not earn marks if it is wrong. It earns less than full marks even when it is right, because the equation you form must be stated.

```practice
caption: forming
questions:
  - ask: A rectangle has a perimeter of 36 cm, and one side has length $x$. Show that its area is given by $A = 18x - x^2$.
    grade: achieved
    working:
      - math: 2x + 2w = 36 \qquad\Rightarrow\qquad w = 18 - x
        note: "The perimeter is the constraint, solved for the other side."
      - math: A = xw = x(18 - x)
      - math: A = 18x - x^2
        note: "A *show that* answer finishes at the statement it was asked to show."
  - ask: A rectangle has a perimeter of 40 cm, and one side has length $x$. Show that its area is given by $A = 20x - x^2$.
    grade: achieved
    working:
      - math: 2x + 2w = 40 \qquad\Rightarrow\qquad w = 20 - x
        note: "The perimeter is the constraint, solved for the other side."
      - math: A = xw = x(20 - x)
      - math: A = 20x - x^2
        note: "A *show that* answer finishes at the statement it was asked to show."
  - ask: Two numbers add to 20. Use calculus to find the largest possible value of their product.
    grade: merit
    working:
      - math: P = x(20 - x) = 20x - x^2
        note: "If one number is $x$, the other is $20 - x$, because the two numbers add to $20$."
      - math: P' = 20 - 2x = 0
      - math: x = 10
      - math: P = 10 \times 10 = 100
        note: "The question asked for the product, so the answer is $100$, not $10$."
  - ask: Two numbers add to 30. Use calculus to find the largest possible value of their product.
    grade: merit
    working:
      - math: P = x(30 - x) = 30x - x^2
        note: "If one number is $x$, the other is $30 - x$, because the two numbers add to $30$."
      - math: P' = 30 - 2x = 0
      - math: x = 15
      - math: P = 15 \times 15 = 225
        note: "The question asked for the product, so the answer is $225$, not $15$."
```

---

## Solve, then answer the question asked

Setting the derivative to zero gives an equation. Its solutions are not yet the answer.

**Reject any solution that is impossible in the situation.** Lengths cannot be negative, and a side of zero leaves no shape at all. The 2025 schedule shows the form: *"$x = 0.6$ m or $-0.6$ (reject as $-$ve)"*. Write the rejection. Do not leave a solution out without saying why.

**Then answer the question that was asked.** The $x$ of the turning point locates the best design. It is rarely the answer itself. *Find the maximum volume* asks for the volume. *Calculate the dimensions* asks for every dimension, so you use the constraint again to find the variables that you removed by substitution. Ending at $x$ when the question asked for cubic metres loses the final step and its mark.

---

## Prove it is a maximum

The word *maximum* in the question is a claim, and the exam asks you to prove it. The container part of the 2025 paper instructs, *"prove that the volume is a maximum using calculus"*. Everything from the nature section of the previous lesson applies unchanged: second derivative, test points either side, annotated sketch. State the conclusion in the terms of the context: *$V'' = -12h$ is negative for any positive height, so the volume is a maximum*.

In the schedules, the proof is the step that separates Excellence from Merit on these parts. It takes one substitution and one sentence.

```practice
caption: a full problem
questions:
  - ask: An open-topped box is made from a square sheet of card 30 cm on each side. A square of side $x$ is cut from each corner, and the sides are folded up. Use calculus to find the maximum volume of the box, and prove that the volume is a maximum.
    grade: excellence
    working:
      - math: V = x(30 - 2x)^2
        note: "Each side of the base is the side of the sheet minus two cuts. The height of the box is the cut. The volume already has one variable, so you do not need a constraint."
      - math: V = 900x - 120x^2 + 4x^3
        note: "Expand it, so that you can differentiate each term with the rule."
      - math: V' = 900 - 240x + 12x^2 = 0
      - math: 12(x - 5)(x - 15) = 0
      - math: "x = 5 \\;\\textsf{ or }\\; x = 15 \\;\\;\\textsf{(reject: a 30 cm sheet cannot lose 30 cm)}"
        note: "Two cuts of fifteen leave no base at all. Write the rejection, with its reason."
      - math: V = 5(30 - 10)^2 = 2000 \;\textsf{cm}^3
      - math: V'' = -240 + 24x \qquad V''(5) = -120 < 0
      - math: \therefore\;\textsf{the volume is a maximum}
  - ask: An open-topped box is made from a square sheet of card 24 cm on each side. A square of side $x$ is cut from each corner, and the sides are folded up. Use calculus to find the maximum volume of the box, and prove that the volume is a maximum.
    grade: excellence
    working:
      - math: V = x(24 - 2x)^2
        note: "Each side of the base is the side of the sheet minus two cuts. The height of the box is the cut. The volume already has one variable, so you do not need a constraint."
      - math: V = 576x - 96x^2 + 4x^3
        note: "Expand it, so that you can differentiate each term with the rule."
      - math: V' = 576 - 192x + 12x^2 = 0
      - math: 12(x - 4)(x - 12) = 0
      - math: "x = 4 \\;\\textsf{ or }\\; x = 12 \\;\\;\\textsf{(reject: a 24 cm sheet cannot lose 24 cm)}"
        note: "Two cuts of twelve leave no base at all. Write the rejection, with its reason."
      - math: V = 4(24 - 8)^2 = 1024 \;\textsf{cm}^3
      - math: V'' = -192 + 24x \qquad V''(4) = -96 < 0
      - math: \therefore\;\textsf{the volume is a maximum}
```

---

## A power in the denominator

In one recent question, the function you form is not a polynomial. Eliminating $h$ from the surface area of a cylinder leaves a term like $\dfrac{1000}{r}$. Use the index laws to rewrite the term in index form, $1000r^{-1}$. Then the differentiation rule works exactly as it always has: multiply by the power, then lower the power by one.

```figure
caption: The rule works for a negative power
steps:
  - math: S = 2\pi r^2 + \dfrac{1000}{r}
    note: "You cannot use the rule on the second term in this form."
  - math: S = 2\pi r^2 + 1000r^{\ca{-1}}
    note: "Write the term in index form, from algebra. The power is $-1$."
  - math: S' = 4\pi r \ca{-} 1000r^{\ca{-2}}
    note: "Multiply by $-1$, then lower the power to $-2$. The term changes from positive to negative, and the power becomes more negative."
  - math: S' = 4\pi r - \dfrac{1000}{r^2}
    note: "Write the term as a fraction again before you solve, if that is easier to read."
```

Set $S'$ equal to zero, then multiply both sides by $r^2$ to clear the fraction. $4\pi r = \dfrac{1000}{r^2}$ becomes $4\pi r^3 = 1000$. Then take the cube root to find $r$. The cylinder part of the 2024 paper is exactly this shape.

```practice
caption: negative powers
questions:
  - ask: A closed cylindrical can must hold $330$ cm$^3$. Use calculus to find the radius and height that use the least material, given that the surface area is $S = 2\pi r^2 + 2\pi rh$ and the volume is $V = \pi r^2 h$.
    grade: excellence
    from: "2024"
    working:
      - math: \pi r^2 h = 330 \qquad\Rightarrow\qquad h = \dfrac{330}{\pi r^2}
        note: "The volume is the constraint. Solve it for $h$, so the area becomes a function of one variable."
      - math: S = 2\pi r^2 + 2\pi r \cdot \dfrac{330}{\pi r^2} = 2\pi r^2 + \dfrac{660}{r}
      - math: S = 2\pi r^2 + 660r^{-1}
        note: "Write it in index form, so that you can use the rule."
      - math: S' = 4\pi r - 660r^{-2} = 0
      - math: 4\pi r^3 = 660 \qquad\Rightarrow\qquad r^3 = \dfrac{660}{4\pi}
        note: "Multiply through by $r^2$ to clear the fraction, then isolate the cube."
      - math: r = 3.74 \;\textsf{cm} \qquad h = \dfrac{330}{\pi r^2} = 7.49 \;\textsf{cm}
        note: "The question asked for both dimensions, so use the constraint once more to recover $h$. Use the unrounded $r$, so the rounding error is not squared."
  - ask: A closed cylindrical can must hold $500$ cm$^3$. Use calculus to find the radius and height that use the least material, given that the surface area is $S = 2\pi r^2 + 2\pi rh$ and the volume is $V = \pi r^2 h$.
    grade: excellence
    working:
      - math: \pi r^2 h = 500 \qquad\Rightarrow\qquad h = \dfrac{500}{\pi r^2}
        note: "The volume is the constraint. Solve it for $h$, so the area becomes a function of one variable."
      - math: S = 2\pi r^2 + 2\pi r \cdot \dfrac{500}{\pi r^2} = 2\pi r^2 + \dfrac{1000}{r}
      - math: S = 2\pi r^2 + 1000r^{-1}
        note: "Write it in index form, so that you can use the rule."
      - math: S' = 4\pi r - 1000r^{-2} = 0
      - math: 4\pi r^3 = 1000 \qquad\Rightarrow\qquad r^3 = \dfrac{1000}{4\pi}
        note: "Multiply through by $r^2$ to clear the fraction, then isolate the cube."
      - math: r = 4.30 \;\textsf{cm} \qquad h = \dfrac{500}{\pi r^2} = 8.60 \;\textsf{cm}
        note: "The question asked for both dimensions, so use the constraint once more to recover $h$. Use the unrounded $r$, so the rounding error is not squared."
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well.

```practice
questions:
  - ask: A farmer has 60 m of fencing for a rectangular pen against an existing wall, which forms one of the long sides. Use calculus to find the largest area the pen can enclose.
    grade: merit
    working:
      - math: A = x(60 - 2x) = 60x - 2x^2
        note: "Two ends of $x$ each leave $60 - 2x$ for the side opposite the wall."
      - math: A' = 60 - 4x = 0
      - math: x = 15
      - math: A = 15 \times 30 = 450 \;\textsf{m}^2
        note: "The area was asked for, so the working ends at the area."
  - ask: A farmer has 80 m of fencing for a rectangular pen against an existing wall, which forms one of the long sides. Use calculus to find the largest area the pen can enclose.
    grade: merit
    working:
      - math: A = x(80 - 2x) = 80x - 2x^2
        note: "Two ends of $x$ each leave $80 - 2x$ for the side opposite the wall."
      - math: A' = 80 - 4x = 0
      - math: x = 20
      - math: A = 20 \times 40 = 800 \;\textsf{m}^2
        note: "The area was asked for, so the working ends at the area."
  - ask: Rima is designing a lidless rectangular container. Its width must equal twice its height, and it is to be made from at most $3$ m$^2$ of material. Use calculus to find the maximum volume of the container, and prove that the volume is a maximum.
    grade: excellence
    from: "2025"
    working:
      - math: w = 2h \qquad S = lw + 2lh + 2wh = 2hl + 2lh + 4h^2
        note: "A lidless box has a base and four sides. With $w = 2h$, every face is written in $h$ and $l$."
      - math: 4hl + 4h^2 = 3 \qquad\Rightarrow\qquad l = \dfrac{3 - 4h^2}{4h}
        note: "The material is the constraint, solved for $l$."
      - math: V = lwh = 2h^2 l = 2h^2 \cdot \dfrac{3 - 4h^2}{4h}
      - math: V = \dfrac{3h}{2} - 2h^3
        note: "The volume now has one variable. Expand it, and it is a polynomial."
      - math: V' = \dfrac{3}{2} - 6h^2 = 0
      - math: h^2 = \dfrac{1}{4} \qquad h = \dfrac{1}{2} \;\;\textsf{(reject } -\tfrac{1}{2}\textsf{, a negative height)}
      - math: V = \dfrac{3}{2}\!\left(\dfrac{1}{2}\right) - 2\!\left(\dfrac{1}{8}\right) = \dfrac{1}{2} \;\textsf{m}^3
      - math: V'' = -12h \qquad V''\!\left(\tfrac{1}{2}\right) = -6 < 0 \qquad\therefore\;\textsf{a maximum}
        note: "Height is positive, so $V''$ is negative. That is the proof the question asked for."
  - ask: A lidless rectangular container has a width equal to twice its height, and is to be made from at most $12$ m$^2$ of material. Use calculus to find the maximum volume of the container, and prove that the volume is a maximum.
    grade: excellence
    working:
      - math: w = 2h \qquad S = lw + 2lh + 2wh = 2hl + 2lh + 4h^2
        note: "A lidless box has a base and four sides. With $w = 2h$, every face is written in $h$ and $l$."
      - math: 4hl + 4h^2 = 12 \qquad\Rightarrow\qquad l = \dfrac{12 - 4h^2}{4h}
        note: "The material is the constraint, solved for $l$."
      - math: V = lwh = 2h^2 l = 2h^2 \cdot \dfrac{12 - 4h^2}{4h}
      - math: V = 6h - 2h^3
        note: "The volume now has one variable. Expand it, and it is a polynomial."
      - math: V' = 6 - 6h^2 = 0
      - math: h^2 = 1 \qquad h = 1 \;\;\textsf{(reject } -1\textsf{, a negative height)}
      - math: V = 6(1) - 2(1) = 4 \;\textsf{m}^3
      - math: V'' = -12h \qquad V''(1) = -12 < 0 \qquad\therefore\;\textsf{a maximum}
        note: "Height is positive, so $V''$ is negative. That is the proof the question asked for."
  - ask: If $y = k - x$, where $k$ is a number, use calculus to show that the minimum value of $x^2 + 3y^2$ is equal to $\dfrac{3k^2}{4}$.
    grade: excellence
    from: "2024"
    working:
      - math: V = x^2 + 3(k - x)^2
        note: "Substitute the constraint straight away, so the quantity is in one variable. $k$ is a number, not a variable. Keep it in every line."
      - math: V = x^2 + 3k^2 - 6kx + 3x^2 = 4x^2 - 6kx + 3k^2
        note: "Expanded, with brackets kept around $k - x$ while it is squared."
      - math: V' = 8x - 6k = 0 \qquad\Rightarrow\qquad x = \dfrac{3k}{4}
      - math: V'' = 8 > 0 \qquad\therefore\;\textsf{a minimum}
        note: "The word *minimum* is in the claim, so justify it before you compute the value."
      - math: V = \left(\dfrac{3k}{4}\right)^2 + 3\left(\dfrac{k}{4}\right)^2 = \dfrac{9k^2}{16} + \dfrac{3k^2}{16}
        note: "$y = k - \\dfrac{3k}{4} = \\dfrac{k}{4}$, substituted with its bracket."
      - math: V = \dfrac{12k^2}{16} = \dfrac{3k^2}{4}
        note: "A *show that* answer ends at the statement it was asked to show."
  - ask: If $y = k - x$, where $k$ is a number, use calculus to show that the minimum value of $x^2 + y^2$ is equal to $\dfrac{k^2}{2}$.
    grade: excellence
    working:
      - math: V = x^2 + (k - x)^2
        note: "Substitute the constraint straight away, so the quantity is in one variable. $k$ is a number, not a variable. Keep it in every line."
      - math: V = x^2 + k^2 - 2kx + x^2 = 2x^2 - 2kx + k^2
        note: "Expanded, with brackets kept around $k - x$ while it is squared."
      - math: V' = 4x - 2k = 0 \qquad\Rightarrow\qquad x = \dfrac{k}{2}
      - math: V'' = 4 > 0 \qquad\therefore\;\textsf{a minimum}
        note: "The word *minimum* is in the claim, so justify it before you compute the value."
      - math: V = \left(\dfrac{k}{2}\right)^2 + \left(\dfrac{k}{2}\right)^2
        note: "$y = k - \\dfrac{k}{2} = \\dfrac{k}{2}$, so both terms are the same."
      - math: V = \dfrac{k^2}{2}
        note: "A *show that* answer ends at the statement it was asked to show."
```

---

## Summary

The calculus in these questions is the calculus of the previous lesson. The new skill is forming the function. Write the quantity from the formula for the shape, write the constraint, substitute until one variable remains, and expand. State the equations as you form them. Forming the function is assessed on its own.

Solve $f' = 0$, and reject in writing any solution that is impossible in the situation. Then answer the question that was asked, the volume, the area or the dimensions, with units. If the question asks for a variable that you substituted, use the constraint again to find it.

Prove the maximum or minimum with any of the three justifications. Write the conclusion in the words of the context. This proof is the Excellence step, and it takes two lines.

Substituting the constraint can leave a power of $x$ in the denominator of a fraction. Write the term in index form, and then you can use the rule.

This is the last lesson on differentiation in the standard. In Module C you work the other way: from the gradient function back to the function. The remaining exam questions work in that direction.
