# C2—Three dimensions

---

The achievement objective this standard is built from names two things: "apply trigonometric relationships, including the sine and cosine rules, in two and three dimensions." Every figure so far has lain flat on the page. A box, a pyramid, or a mast held by wires puts the same triangles on the faces and inside the volume of a solid — and no rule in this standard works in three dimensions. The work is finding the flat triangle the solid contains, drawing it on its own, and solving it exactly as Module A already does.

---

## The diagonal of a box

A rectangular box has a diagonal running from one corner to the opposite one, through the inside of the box rather than across a face. Finding it takes two right triangles, not one.

```figure
caption: The diagonal of a storage crate
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [12, 0]
        C: [17, 7]
        D: [5, 7]
        E: [0, 8]
        F: [12, 8]
        G: [17, 15]
        H: [5, 15]
      edges:
        - from: A
          to: B
          label: 12 m
        - from: B
          to: C
        - from: C
          to: D
          dashed: true
        - from: D
          to: A
          dashed: true
          label: 9 m
        - from: E
          to: F
        - from: F
          to: G
        - from: G
          to: H
        - from: H
          to: E
        - from: A
          to: E
          label: 8 m
        - from: B
          to: F
        - from: C
          to: G
        - from: D
          to: H
          dashed: true
    note: "A storage crate measures $12$ m by $9$ m by $8$ m. The corner-to-corner diagonal, from $A$ to $G$, runs through the inside of the crate."
  - diagram:
      points:
        A: [0, 0]
        B: [12, 0]
        C: [17, 7]
        D: [5, 7]
        E: [0, 8]
        F: [12, 8]
        G: [17, 15]
        H: [5, 15]
      edges:
        - from: A
          to: B
          label: 12 m
        - from: B
          to: C
        - from: C
          to: D
          dashed: true
        - from: D
          to: A
          dashed: true
          label: 9 m
        - from: E
          to: F
        - from: F
          to: G
        - from: G
          to: H
        - from: H
          to: E
        - from: A
          to: E
          label: 8 m
        - from: B
          to: F
        - from: C
          to: G
        - from: D
          to: H
          dashed: true
        - from: A
          to: C
          color: a
          dashed: true
        - from: A
          to: G
          color: b
          dashed: true
    note: "$AC$, the base diagonal, lies flat in the bottom face — a right triangle, since the base is a rectangle. $AG$, the diagonal wanted, is the hypotenuse of a second right triangle built from $AC$ and the vertical edge $CG$."
  - math: AC^2 = 12^2 + 9^2 = 225 \qquad AC = 15\ \textsf{m}
    note: "Pythagoras, in the base rectangle's own right angle — not the cosine rule, because a rectangle's corners are already $90°$."
  - math: AG^2 = AC^2 + CG^2 = 15^2 + 8^2 = 289 \qquad AG = 17\ \textsf{m}
    note: "A second right triangle: $AC$, the vertical edge $CG$, and the diagonal $AG$, with the right angle where the vertical edge meets the base."
```

Two applications of Pythagoras, chained: the base diagonal is a right triangle inside a rectangle you already have, and the full diagonal is a right triangle built from that base diagonal and a vertical edge. Nothing here is new mathematics — Pythagoras and SOH-CAH-TOA are the right-angle methods from Year 11, and every corner of a box gives them one.

```practice
caption: the diagonal of a box
questions:
  - ask: A box measures $6$ m by $8$ m by $5$ m. Calculate the length of the diagonal across its base.
    grade: achieved
    working:
      - math: d^2 = 6^2 + 8^2 = 100
        note: "The base is a rectangle, so Pythagoras finds its diagonal directly."
      - math: d = 10\ \textsf{m}
        note: "The base diagonal is $10$ m."
  - ask: A box measures $7$ m by $24$ m by $6$ m. Calculate the length of the diagonal across its base.
    grade: achieved
    working:
      - math: d^2 = 7^2 + 24^2 = 625
        note: "The base is a rectangle, so Pythagoras finds its diagonal directly."
      - math: d = 25\ \textsf{m}
        note: "The base diagonal is $25$ m."
  - ask: A warehouse is $8$ m long, $15$ m wide and $10$ m tall. Calculate the length of the diagonal running from one bottom corner to the opposite top corner.
    grade: merit
    working:
      - math: \textsf{base}^2 = 8^2 + 15^2 = 289 \qquad \textsf{base} = 17\ \textsf{m}
        note: "The base diagonal first, from the rectangle it lies in."
      - math: \textsf{diagonal}^2 = 17^2 + 10^2 = 389
      - math: \textsf{diagonal} \approx 19.7\ \textsf{m}
        note: "The warehouse's corner-to-corner diagonal is $19.7$ m — the answer named, with its unit, as the context asked for."
  - ask: A warehouse is $9$ m long, $40$ m wide and $12$ m tall. Calculate the length of the diagonal running from one bottom corner to the opposite top corner.
    grade: merit
    working:
      - math: \textsf{base}^2 = 9^2 + 40^2 = 1681 \qquad \textsf{base} = 41\ \textsf{m}
        note: "The base diagonal first, from the rectangle it lies in."
      - math: \textsf{diagonal}^2 = 41^2 + 12^2 = 1825
      - math: \textsf{diagonal} \approx 42.7\ \textsf{m}
        note: "The warehouse's corner-to-corner diagonal is $42.7$ m."
```

---

## The angle a sloping edge makes with the base

The crate's diagonal $AG$ leans away from the base at an angle. That angle sits inside a right triangle too: $AC$ along the base, $CG$ standing vertically, and $AG$ as the sloping side between them.

```figure
caption: The angle of the crate's diagonal
steps:
  - diagram:
      points:
        A: [0, 0]
        C: [15, 0]
        G: [15, 8]
      edges:
        - from: A
          to: C
          label: 15 m
        - from: C
          to: G
          label: 8 m
        - from: A
          to: G
          label: 17 m
      angles:
        - at: C
          from: A
          to: G
          right: true
    note: "The triangle $ACG$, drawn on its own, flat. The right angle sits at $C$, where the vertical edge meets the base diagonal."
  - math: \tan(\angle GAC) = \dfrac{8}{15}
    note: "SOH-CAH-TOA reaches this directly — the triangle is right-angled, so the cosine and sine rules are not needed."
  - math: \angle GAC \approx 28.1°
    note: "The diagonal leans $28.1°$ above the base."
```

```practice
caption: the angle a diagonal makes with the base
questions:
  - ask: A box measures $9$ m by $12$ m by $5$ m. Calculate the angle its longest diagonal makes with the base.
    grade: merit
    working:
      - math: \textsf{base}^2 = 9^2 + 12^2 = 225 \qquad \textsf{base} = 15\ \textsf{m}
        note: "The base diagonal, drawn flat inside the rectangular base."
      - math: \tan(\theta) = \dfrac{5}{15}
        note: "The right triangle formed by the base diagonal, the vertical edge, and the box's own diagonal — redrawn on its own."
      - math: \theta \approx 18.4°
        note: "The diagonal makes an angle of $18.4°$ with the base."
  - ask: A box measures $20$ m by $15$ m by $9$ m. Calculate the angle its longest diagonal makes with the base.
    grade: merit
    working:
      - math: \textsf{base}^2 = 20^2 + 15^2 = 625 \qquad \textsf{base} = 25\ \textsf{m}
        note: "The base diagonal, drawn flat inside the rectangular base."
      - math: \tan(\theta) = \dfrac{9}{25}
        note: "The right triangle formed by the base diagonal, the vertical edge, and the box's own diagonal."
      - math: \theta \approx 19.8°
        note: "The diagonal makes an angle of $19.8°$ with the base."
```

---

## Pyramids: a triangle that is not a right angle

A box has a right angle at every corner. A pyramid does not — its slant edges meet the base at an angle that is not $90°$, and two of its slant edges meet each other at the apex in a triangle with no right angle anywhere in it. Both triangles still come from the solid the same way: find them, draw them flat, and solve them.

```figure
caption: The height of a pyramid
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [10, 0]
        C: [13, 5]
        D: [3, 5]
        M: [6.5, 2.5]
        P: [6.5, 12]
      edges:
        - from: A
          to: B
          label: 10 m
        - from: B
          to: C
        - from: C
          to: D
          dashed: true
        - from: D
          to: A
          dashed: true
        - from: P
          to: A
        - from: P
          to: B
          label: 13 m
          color: a
        - from: P
          to: C
        - from: P
          to: D
          dashed: true
        - from: P
          to: M
          color: b
          dashed: true
        - from: M
          to: B
          color: b
          dashed: true
      angles:
        - at: M
          from: P
          to: B
          right: true
    note: "A square-based pyramid, base $10$ m and slant edge $13$ m. $M$ is the centre of the base, directly beneath the apex $P$ — the height $PM$ meets the base there at a right angle."
  - math: MB^2 = \dfrac{10^2}{2} = 50
    note: "$MB$ is half the base's diagonal, and the diagonal itself is Pythagoras in the base square: diagonal$^2 = 10^2+10^2 = 200$. Halving a length before squaring it divides the square by four, so $MB^2 = 200 \\div 4 = 50$."
  - math: PM^2 = 13^2 - 50 = 119 \qquad PM \approx 10.9\ \textsf{m}
    note: "The right triangle $PMB$: Pythagoras, with $MB^2$ carried across unrounded."
  - math: \tan(\angle PBM) = \dfrac{10.9}{7.07}
    note: $MB = \sqrt{50} \approx 7.07$ m. The angle a slant edge makes with the base lives in this same right triangle.
  - math: \angle PBM \approx 57.0°
```

```figure
caption: The angle at the apex
steps:
  - diagram:
      points:
        P: [6, 0]
        B: [0, -10]
        C: [12, -10]
      edges:
        - from: P
          to: B
          label: 13 m
        - from: P
          to: C
          label: 13 m
        - from: B
          to: C
          label: 10 m
    note: "Two adjacent slant edges and the base edge between them, drawn flat. All three sides are known, and none of the triangle's angles is $90°$."
  - math: \cos(\angle BPC) = \dfrac{13^2 + 13^2 - 10^2}{2(13)(13)}
    note: "The cosine rule, because three sides are known and the triangle is not right-angled — SOH-CAH-TOA has nothing to work with here."
  - math: \angle BPC \approx 45.2°
    note: "The angle between the two slant edges, at the apex."
```

```practice
caption: pyramids
questions:
  - ask: A square-based pyramid has base $12$ m and slant edges of $15$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{12^2}{2} = 72
        note: "$MB$ is half the base diagonal, so $MB^2$ is a quarter of the diagonal squared, which is itself $2\\times12^2$."
      - math: PM^2 = 15^2 - 72 = 153 \qquad PM \approx 12.4\ \textsf{m}
        note: "The right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{12.4}{8.49} \qquad \theta \approx 55.6°
        note: $MB = \sqrt{72} \approx 8.49$ m. The pyramid's height is $12.4$ m and its slant edges meet the base at $55.6°$.
  - ask: A square-based pyramid has base $8$ m and slant edges of $11$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{8^2}{2} = 32
        note: "Half the base diagonal, squared."
      - math: PM^2 = 11^2 - 32 = 89 \qquad PM \approx 9.4\ \textsf{m}
        note: "The right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{9.4}{5.66} \qquad \theta \approx 59.1°
        note: $MB = \sqrt{32} \approx 5.66$ m. The pyramid's height is $9.4$ m and its slant edges meet the base at $59.1°$.
  - ask: A square-based pyramid has base $9$ m and slant edges of $14$ m. Calculate the angle between two adjacent slant edges, at the apex.
    grade: merit
    working:
      - math: \cos(\theta) = \dfrac{14^2 + 14^2 - 9^2}{2(14)(14)}
        note: "The triangle formed by two slant edges and the base edge between them has no right angle, so the cosine rule is what reaches it."
      - math: \theta \approx 37.5°
        note: "The two slant edges meet at $37.5°$."
  - ask: A square-based pyramid has base $11$ m and slant edges of $16$ m. Calculate the angle between two adjacent slant edges, at the apex.
    grade: merit
    working:
      - math: \cos(\theta) = \dfrac{16^2 + 16^2 - 11^2}{2(16)(16)}
        note: "The triangle formed by two slant edges and the base edge between them has no right angle."
      - math: \theta \approx 40.2°
        note: "The two slant edges meet at $40.2°$."
```

---

## Redraw the triangle

Every worked figure in this lesson has done the same thing before any number was substituted: pulled one triangle out of the solid and drawn it on its own, with only its own three sides and angles labelled. That drawing is not a diagram added for this page — it is the method. A solid holds several triangles at once, sharing edges and vertices with each other, and reading a rule's three pieces of information off a crowded 3D sketch is where a correct method turns into a wrong substitution. Redrawn flat, a triangle carries nothing that does not belong to it.

The redrawn triangle is also the working NZQA's clarification asks for. A response that jumps from a solid's dimensions to a substituted formula, with no drawing in between, has nowhere to show which triangle the numbers came from — and at Excellence, where "correct mathematical statements" and an explained strategy are what the grade is judging, the triangle drawn on its own is one of those statements.

---

## Practice

A mixed set: box, pyramid, and a mast held by wires, in the order the standard's grades run.

```practice
questions:
  - ask: A box measures $5$ m by $12$ m by $7$ m. Calculate the length of the diagonal across its base.
    grade: achieved
    working:
      - math: d^2 = 5^2 + 12^2 = 169
      - math: d = 13\ \textsf{m}
        note: "The base diagonal is $13$ m."
  - ask: A box measures $10$ m by $24$ m by $6$ m. Calculate the length of the diagonal across its base.
    grade: achieved
    working:
      - math: d^2 = 10^2 + 24^2 = 676
      - math: d = 26\ \textsf{m}
        note: "The base diagonal is $26$ m."
  - ask: A shed is $11$ m long, $14$ m wide and $7$ m tall. Calculate the angle its longest diagonal makes with the base.
    grade: merit
    working:
      - math: \textsf{base}^2 = 11^2 + 14^2 = 317 \qquad \textsf{base} \approx 17.8\ \textsf{m}
        note: "The base diagonal, from the rectangle it lies in."
      - math: \tan(\theta) = \dfrac{7}{17.8}
        note: "The right triangle drawn on its own: the base diagonal, the vertical edge, and the shed's own diagonal."
      - math: \theta \approx 21.5°
        note: "The diagonal makes an angle of $21.5°$ with the base."
  - ask: A shed is $13$ m long, $9$ m wide and $6$ m tall. Calculate the angle its longest diagonal makes with the base.
    grade: merit
    working:
      - math: \textsf{base}^2 = 13^2 + 9^2 = 250 \qquad \textsf{base} \approx 15.8\ \textsf{m}
        note: "The base diagonal, from the rectangle it lies in."
      - math: \tan(\theta) = \dfrac{6}{15.8}
        note: "The right triangle drawn on its own."
      - math: \theta \approx 20.8°
        note: "The diagonal makes an angle of $20.8°$ with the base."
  - ask: A square-based pyramid has base $14$ m and slant edges of $17$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{14^2}{2} = 98
        note: "Half the base diagonal, squared."
      - math: PM^2 = 17^2 - 98 = 191 \qquad PM \approx 13.8\ \textsf{m}
        note: "The right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{13.8}{9.90} \qquad \theta \approx 54.4°
        note: $MB = \sqrt{98} \approx 9.90$ m. The pyramid's height is $13.8$ m and its slant edges meet the base at $54.4°$.
  - ask: A square-based pyramid has base $16$ m and slant edges of $19$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{16^2}{2} = 128
        note: "Half the base diagonal, squared."
      - math: PM^2 = 19^2 - 128 = 233 \qquad PM \approx 15.3\ \textsf{m}
        note: "The right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{15.3}{11.3} \qquad \theta \approx 53.5°
        note: $MB = \sqrt{128} \approx 11.3$ m. The pyramid's height is $15.3$ m and its slant edges meet the base at $53.5°$.
  - ask: A vertical mast stands $18$ m tall. Two straight wires run from its top to two anchor points on level ground, one wire $24$ m long and the other $30$ m long. Looking straight down on the mast, the angle between the two wires' ground directions, measured at the foot of the mast, is $75°$. Calculate the distance between the two anchor points.
    grade: excellence
    working:
      - math: d_1^2 = 24^2 - 18^2 = 252 \qquad d_1 \approx 15.9\ \textsf{m}
        note: "Each wire, the mast, and the ground between them forms a vertical right triangle. $d_1$ is the ground distance from the mast's foot to the first anchor."
      - math: d_2^2 = 30^2 - 18^2 = 576 \qquad d_2 = 24\ \textsf{m}
        note: "The same right triangle, for the second wire."
      - math: "\\textsf{dist}^2 = d_1^2 + d_2^2 - 2d_1d_2\\cos75° = 252 + 576 - 2(15.9)(24)\\cos75°"
        note: "$d_1$, $d_2$ and the angle between them lie flat on the ground — a triangle with no right angle in it, so the cosine rule is what reaches the distance between the anchors. Its two sides are the unrounded $252$ and $576$."
      - math: \textsf{dist} \approx 25.1\ \textsf{m}
        note: "The two anchor points are $25.1$ m apart. Two right triangles found the ground distances, and one flat triangle at ground level connected them — the strategy devised rather than set out by the question."
  - ask: A vertical mast stands $15$ m tall. Two straight wires run from its top to two anchor points on level ground, one wire $20$ m long and the other $25$ m long. Looking straight down on the mast, the angle between the two wires' ground directions, measured at the foot of the mast, is $68°$. Calculate the distance between the two anchor points.
    grade: excellence
    working:
      - math: d_1^2 = 20^2 - 15^2 = 175 \qquad d_1 \approx 13.2\ \textsf{m}
        note: "Each wire, the mast, and the ground between them forms a vertical right triangle."
      - math: d_2^2 = 25^2 - 15^2 = 400 \qquad d_2 = 20\ \textsf{m}
        note: "The same right triangle, for the second wire."
      - math: "\\textsf{dist}^2 = d_1^2 + d_2^2 - 2d_1d_2\\cos68° = 175 + 400 - 2(13.2)(20)\\cos68°"
        note: "The two ground distances and the angle between them lie flat — the cosine rule reaches the distance between the anchors."
      - math: \textsf{dist} \approx 19.4\ \textsf{m}
        note: "The two anchor points are $19.4$ m apart."
```

---

## Summary

Three dimensions add no sixth method. A box, a pyramid or a mast holds several flat triangles at once — right-angled, where an edge meets a face square on, and oblique, where two sloping edges meet without one. Finding either kind is the same first move every time: identify the triangle, draw it on its own with only its own labels, and solve it with whichever of the five methods its given information matches.

That is the whole standard. Length of an arc, area of a sector, the sine rule, the cosine rule, the area of a triangle — five methods, each one Achieved on its own. A figure with no rule of its own is cut into pieces that have one, in two dimensions or projected out of three. What the grades measure beyond that is the write-up: a method used and its answer named, a chain of them linked to the context with units, or a strategy devised and explained in correct mathematical statements. The task itself is one extended problem, not a list of these skills in turn, and everything in this subject is what it draws from.
