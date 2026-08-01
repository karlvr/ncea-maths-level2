# B2—Maximum and minimum problems

---

The previous lesson found turning points of curves that were handed over ready-made. The examination's closing parts hand over a situation instead — a container to design, a paddock to fence, an area that must be as large as the material allows — and the curve has to be built before any calculus can touch it. The specification calls this *forming polynomials from a variety of contexts*, and it is where each paper keeps its Excellence.

---

## From situation to polynomial

The quantity the question wants made largest or smallest — the volume, the area, the amount of material — has to become a function of **one** variable. Two facts from the situation do it:

- **The quantity itself**, written from the shape's formula. This usually has two variables in it.
- **The constraint** — the fixed total the situation imposes: so much fencing, so much sheet metal, a volume that must be met. Solve the constraint for one variable and substitute it into the quantity.

One variable, one polynomial, and the previous lesson does the rest.

```figure
caption: A paddock against a wall
steps:
  - math: \textsf{40 m of fencing, three sides, wall on the fourth. Largest area?}
    note: "Let the two ends be $x$ metres each. The fencing is the constraint: the remaining side is $40 - 2x$."
  - math: A = x(40 - 2x)
    note: "The quantity to maximise, written from the shape — length times width — with the constraint already substituted."
  - math: A = 40x - 2x^2
    note: "Expand before differentiating, always."
  - math: A' = 40 - 4x = 0
    note: "The largest area sits at a turning point of $A$, and turning points are where the derivative is zero."
  - math: x = 10
  - math: A = 10(40 - 20) = 200
    note: "The ends are ten metres, the long side twenty, and the area is $200$ m$^2$. The answer states the quantity the question asked for, with its unit."
```

The first two lines are where this question is won. The 2024 schedule's first grade step for its container part is *"Sets up area equation in terms of 1 variable AND differentiates"* — forming the polynomial is itself the assessed skill, before any turning point is found. Write the constraint down, write the quantity down, and show the substitution that merges them; an expression that appears from nowhere earns nothing if it is wrong, and less than it should even when right, because the equation you form must be stated.

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
  - ask: Two numbers add to 20. Use calculus to find the largest possible value of their product.
    grade: merit
    working:
      - math: P = x(20 - x) = 20x - x^2
        note: "If one number is $x$, the sum makes the other $20 - x$."
      - math: P' = 20 - 2x = 0
      - math: x = 10
      - math: P = 10 \times 10 = 100
        note: "The question asked for the product, so the answer is $100$, not $10$."
```

---

## Solve, then answer the question asked

Setting the derivative to zero produces an equation, and its solutions need two checks before any of them becomes the answer.

**Reject what the situation cannot contain.** Lengths cannot be negative, and a side of zero leaves no shape at all. The 2025 schedule does this in one breath — *"$x = 0.6$ m or $-0.6$ (reject as $-$ve)"* — and the rejection is written down, not done silently.

**Then answer the question that was asked.** The turning point's $x$ is where the best design lives; it is rarely the answer itself. *Find the maximum volume* wants the volume; *calculate the dimensions* wants every dimension, which means going back through the constraint for the variables that were substituted away. Ending at $x$ when the question asked for cubic metres leaves the final step — and its mark — on the table.

---

## Prove it is a maximum

The word *maximum* in the question is a claim, and the exam asks for it to be proved: the 2025 paper's container part instructs, *"prove that the volume is a maximum using calculus"*. Everything from the previous lesson's nature section applies unchanged — second derivative, test points either side, annotated sketch — and the conclusion is stated in the context's terms: *$V'' = -12h$ is negative for any positive height, so the volume is a maximum*.

The proof is not decoration. In the schedules it is the step that separates Excellence from Merit on these parts, and it is one substitution plus one sentence.

```practice
caption: a full problem
questions:
  - ask: An open-topped box is made from a square sheet of card 30 cm on each side, by cutting a square of side $x$ from each corner and folding up the sides. Use calculus to find the maximum volume of the box, and prove that the volume is a maximum.
    grade: excellence
    working:
      - math: V = x(30 - 2x)^2
        note: "The base is the sheet minus two cuts on each side, and the height is the cut. One variable already, so no constraint is needed."
      - math: V = 900x - 120x^2 + 4x^3
        note: "Expanded, so the rule can reach it."
      - math: V' = 900 - 240x + 12x^2 = 0
      - math: 12(x - 5)(x - 15) = 0
      - math: "x = 5 \\;\\textsf{ or }\\; x = 15 \\;\\;\\textsf{(reject: a 30 cm sheet cannot lose 30 cm)}"
        note: "Two cuts of fifteen leave no base at all. The rejection is written, with its reason."
      - math: V = 5(30 - 10)^2 = 2000 \;\textsf{cm}^3
      - math: V'' = -240 + 24x \qquad V''(5) = -120 < 0
      - math: \therefore\;\textsf{the volume is a maximum}
```

---

## A power in the denominator

One recent question forms a function that is not a polynomial. Eliminating $h$ from a cylinder's surface area leaves a term like $\dfrac{1000}{r}$, and the reflex from algebra's Module A applies: rewrite it in index form, $1000r^{-1}$, and the differentiation rule works exactly as it always has — multiply by the power, lower the power by one.

```figure
caption: The rule reaches a negative power
steps:
  - math: S = 2\pi r^2 + \dfrac{1000}{r}
    note: "The second term is not yet in a form the rule can reach."
  - math: S = 2\pi r^2 + 1000r^{\ca{-1}}
    note: "Index form, from algebra. The power is $-1$."
  - math: S' = 4\pi r \ca{-} 1000r^{\ca{-2}}
    note: "Multiply by $-1$, lower the power to $-2$. The term's sign flips and the power falls further negative."
  - math: S' = 4\pi r - \dfrac{1000}{r^2}
    note: "Back out of index form for the solving, if that reads more easily."
```

Setting this to zero clears the fraction: $4\pi r = \dfrac{1000}{r^2}$ becomes $4\pi r^3 = 1000$, and the cube root finishes it. The 2024 paper's cylinder part is exactly this shape.

```practice
caption: negative powers
questions:
  - ask: A closed cylindrical can must hold $330$ cm$^3$. Use calculus to find the radius and height that use the least material, given that the surface area is $S = 2\pi r^2 + 2\pi rh$ and the volume is $V = \pi r^2 h$.
    grade: excellence
    from: "2024"
    working:
      - math: \pi r^2 h = 330 \qquad\Rightarrow\qquad h = \dfrac{330}{\pi r^2}
        note: "The volume is the constraint. Solve it for $h$, so the area becomes one-variable."
      - math: S = 2\pi r^2 + 2\pi r \cdot \dfrac{330}{\pi r^2} = 2\pi r^2 + \dfrac{660}{r}
      - math: S = 2\pi r^2 + 660r^{-1}
        note: "Index form, so the rule can reach it."
      - math: S' = 4\pi r - 660r^{-2} = 0
      - math: 4\pi r^3 = 660 \qquad\Rightarrow\qquad r^3 = \dfrac{660}{4\pi}
        note: "Multiply through by $r^2$ to clear the fraction, then isolate the cube."
      - math: r = 3.74 \;\textsf{cm} \qquad h = \dfrac{330}{\pi r^2} = 7.49 \;\textsf{cm}
        note: "The question asked for both dimensions, so the constraint is used once more to recover $h$ — with the unrounded $r$, so the rounding error is not squared."
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

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
        note: "One variable. Expand, and it is a polynomial after all."
      - math: V' = \dfrac{3}{2} - 6h^2 = 0
      - math: h^2 = \dfrac{1}{4} \qquad h = \dfrac{1}{2} \;\;\textsf{(reject } -\tfrac{1}{2}\textsf{, a negative height)}
      - math: V = \dfrac{3}{2}\!\left(\dfrac{1}{2}\right) - 2\!\left(\dfrac{1}{8}\right) = \dfrac{1}{2} \;\textsf{m}^3
      - math: V'' = -12h \qquad V''\!\left(\tfrac{1}{2}\right) = -6 < 0 \qquad\therefore\;\textsf{a maximum}
        note: "Height is positive, so $V''$ is negative — the proof the question demanded."
  - ask: If $y = k - x$, where $k$ is a number, use calculus to show that the minimum value of $x^2 + 3y^2$ is equal to $\dfrac{3k^2}{4}$.
    grade: excellence
    from: "2024"
    working:
      - math: V = x^2 + 3(k - x)^2
        note: "Substitute the constraint straight away, so the quantity is in one variable. $k$ is a number, not a variable — it rides along."
      - math: V = x^2 + 3k^2 - 6kx + 3x^2 = 4x^2 - 6kx + 3k^2
        note: "Expanded, with brackets kept around $k - x$ while it is squared."
      - math: V' = 8x - 6k = 0 \qquad\Rightarrow\qquad x = \dfrac{3k}{4}
      - math: V'' = 8 > 0 \qquad\therefore\;\textsf{a minimum}
        note: "The word *minimum* is in the claim, so it is justified before the value is computed."
      - math: V = \left(\dfrac{3k}{4}\right)^2 + 3\left(\dfrac{k}{4}\right)^2 = \dfrac{9k^2}{16} + \dfrac{3k^2}{16}
        note: "$y = k - \\dfrac{3k}{4} = \\dfrac{k}{4}$, substituted with its bracket."
      - math: V = \dfrac{12k^2}{16} = \dfrac{3k^2}{4}
        note: "A *show that* answer ends at the statement it was asked to show."
```

---

## Summary

The calculus in these questions is the previous lesson's. The new work is the forming: write the quantity from the shape's formula, write the constraint, substitute until one variable remains, and expand. State the equations as you form them — the forming is assessed on its own.

Solve $f' = 0$, reject in writing what the situation cannot contain, and then answer the question that was asked — the volume, the area, the dimensions — with units, going back through the constraint if a substituted variable is wanted.

Prove the maximum or minimum with any of the three justifications, concluded in the context's own words. It is the Excellence step and costs two lines.

A constraint substitution can leave a power of $x$ underneath a fraction. Index form from algebra puts it back in reach of the rule.

This closes the differentiation half of the standard. Module C turns around: from the gradient function back to the function, which is the direction the remaining exam questions run.
