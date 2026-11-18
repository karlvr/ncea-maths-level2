# C2—Three dimensions

---

The achievement objective that this standard comes from says to "apply trigonometric relationships, including the sine and cosine rules, in two and three dimensions." Every figure so far has lain flat on the page. In a box, a pyramid, or a mast held by wires, the same kinds of triangle lie on the faces of a solid or inside it. Each rule in this standard applies only to a flat figure. Your work is to find a flat triangle inside the solid, draw it on its own, and solve it with the methods of Module A.

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
    note: "$AC$, the base diagonal, lies flat in the bottom face. It sits in a right triangle, because the base is a rectangle. $AG$, the diagonal you need, is the hypotenuse of a second right triangle built from $AC$ and the vertical edge $CG$."
  - math: AC^2 = 12^2 + 9^2 = 225 \qquad AC = 15\ \textsf{m}
    note: "Use Pythagoras in the base rectangle. You do not need the cosine rule, because each corner of a rectangle is already $90°$."
  - math: AG^2 = AC^2 + CG^2 = 15^2 + 8^2 = 289 \qquad AG = 17\ \textsf{m}
    note: "This is a second right triangle, with sides $AC$, the vertical edge $CG$, and the diagonal $AG$. The right angle is where the vertical edge meets the base."
```

To find the diagonal of a box, use Pythagoras twice, one result after the other. The base diagonal comes from a right triangle inside the base rectangle. The full diagonal comes from a right triangle built from that base diagonal and a vertical edge. This is not new mathematics. Pythagoras and SOH-CAH-TOA are the right-angle methods from Year 11. You can use them in a box because every corner of a box is a right angle.

```practice
caption: the diagonal of a box
questions:
  - ask: A box measures $6$ m by $8$ m by $5$ m. Calculate the length of the diagonal across its base.
    grade: achieved
    working:
      - math: d^2 = 6^2 + 8^2 = 100
        note: "The base is a rectangle, so use Pythagoras to find its diagonal directly."
      - math: d = 10\ \textsf{m}
        note: "The base diagonal is $10$ m."
  - ask: A box measures $7$ m by $24$ m by $6$ m. Calculate the length of the diagonal across its base.
    grade: achieved
    working:
      - math: d^2 = 7^2 + 24^2 = 625
        note: "The base is a rectangle, so use Pythagoras to find its diagonal directly."
      - math: d = 25\ \textsf{m}
        note: "The base diagonal is $25$ m."
  - ask: A warehouse is $8$ m long, $15$ m wide and $10$ m tall. Calculate the length of the diagonal running from one bottom corner to the opposite top corner.
    grade: merit
    working:
      - math: \textsf{base}^2 = 8^2 + 15^2 = 289 \qquad \textsf{base} = 17\ \textsf{m}
        note: "Find the base diagonal first, from the rectangle it lies in."
      - math: \textsf{diagonal}^2 = 17^2 + 10^2 = 389
      - math: \textsf{diagonal} \approx 19.7\ \textsf{m}
        note: "The corner-to-corner diagonal of the warehouse is $19.7$ m. The answer names what the number is and gives its unit."
  - ask: A warehouse is $9$ m long, $40$ m wide and $12$ m tall. Calculate the length of the diagonal running from one bottom corner to the opposite top corner.
    grade: merit
    working:
      - math: \textsf{base}^2 = 9^2 + 40^2 = 1681 \qquad \textsf{base} = 41\ \textsf{m}
        note: "Find the base diagonal first, from the rectangle it lies in."
      - math: \textsf{diagonal}^2 = 41^2 + 12^2 = 1825
      - math: \textsf{diagonal} \approx 42.7\ \textsf{m}
        note: "The corner-to-corner diagonal of the warehouse is $42.7$ m."
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
    note: "This is triangle $ACG$, drawn flat on its own. The right angle sits at $C$, where the vertical edge meets the base diagonal."
  - math: \tan(\angle GAC) = \dfrac{8}{15}
    note: "The triangle is right-angled, so use SOH-CAH-TOA. You do not need the cosine rule or the sine rule."
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
        note: "Find the base diagonal in the rectangular base."
      - math: \tan(\theta) = \dfrac{5}{15}
        note: "Use the right triangle formed by the base diagonal, the vertical edge, and the box's own diagonal. Draw it on its own."
      - math: \theta \approx 18.4°
        note: "The diagonal makes an angle of $18.4°$ with the base."
  - ask: A box measures $20$ m by $15$ m by $9$ m. Calculate the angle its longest diagonal makes with the base.
    grade: merit
    working:
      - math: \textsf{base}^2 = 20^2 + 15^2 = 625 \qquad \textsf{base} = 25\ \textsf{m}
        note: "Find the base diagonal in the rectangular base."
      - math: \tan(\theta) = \dfrac{9}{25}
        note: "Use the right triangle formed by the base diagonal, the vertical edge, and the box's own diagonal."
      - math: \theta \approx 19.8°
        note: "The diagonal makes an angle of $19.8°$ with the base."
```

---

## Pyramids: a triangle without a right angle

A box has a right angle at every corner. A pyramid does not. The apex of a pyramid is its top point, and each slant edge joins the apex to a corner of the base. A slant edge meets the base at an angle that is not $90°$. Two slant edges and the base edge between them form a triangle without any right angle. You find each triangle in a pyramid in the same way: find it in the solid, draw it flat, and solve it.

```figure
caption: The height of a pyramid
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [10, 0]
        C: [15, 3]
        D: [5, 3]
        M: [7.5, 1.5]
        P: [7.5, 12]
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
    note: "This is a square-based pyramid with a base of $10$ m and slant edges of $13$ m. $M$ is the centre of the base, directly beneath the apex $P$. The height $PM$ meets the base there at a right angle."
  - math: MB^2 = \dfrac{10^2}{2} = 50
    note: "$MB$ is half the diagonal of the base. Pythagoras in the base square gives diagonal$^2 = 10^2+10^2 = 200$. Halving a length divides its square by four, so $MB^2 = 200 \\div 4 = 50$."
  - math: PM^2 = 13^2 - 50 = 119 \qquad PM \approx 10.9\ \textsf{m}
    note: "Use Pythagoras in the right triangle $PMB$, with the unrounded $MB^2$."
  - math: \tan(\angle PBM) = \dfrac{10.9}{7.07}
    note: $MB = \sqrt{50} \approx 7.07$ m. The angle a slant edge makes with the base sits in this same right triangle.
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
    note: "This triangle is two adjacent slant edges and the base edge between them, drawn flat. All three sides are known, and the triangle does not have a right angle."
  - math: \cos(\angle BPC) = \dfrac{13^2 + 13^2 - 10^2}{2(13)(13)}
    note: "Use the cosine rule, because three sides are known and the triangle is not right-angled. You cannot use SOH-CAH-TOA without a right angle."
  - math: \angle BPC \approx 45.2°
    note: "This is the angle between the two slant edges, at the apex."
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
        note: "Use the right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{12.4}{8.49} \qquad \theta \approx 55.6°
        note: $MB = \sqrt{72} \approx 8.49$ m. The pyramid's height is $12.4$ m and its slant edges meet the base at $55.6°$.
  - ask: A square-based pyramid has base $8$ m and slant edges of $11$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{8^2}{2} = 32
        note: "$MB^2$ is the square of half the base diagonal."
      - math: PM^2 = 11^2 - 32 = 89 \qquad PM \approx 9.4\ \textsf{m}
        note: "Use the right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{9.4}{5.66} \qquad \theta \approx 59.1°
        note: $MB = \sqrt{32} \approx 5.66$ m. The pyramid's height is $9.4$ m and its slant edges meet the base at $59.1°$.
  - ask: A square-based pyramid has base $9$ m and slant edges of $14$ m. Calculate the angle between two adjacent slant edges, at the apex.
    grade: merit
    working:
      - math: \cos(\theta) = \dfrac{14^2 + 14^2 - 9^2}{2(14)(14)}
        note: "The triangle formed by two slant edges and the base edge between them has no right angle, so use the cosine rule to find the angle."
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

In every worked figure in this lesson, one triangle was taken from the solid and drawn on its own before any number was substituted. Only the triangle's own three sides and angles were labelled. That drawing is not a diagram added for this page. It is the method. A solid contains several triangles at once, and they share edges and corners with each other. If you read the three values for a rule from a crowded 3D sketch, you can easily substitute a wrong value into a correct method. A triangle redrawn flat shows only its own sides and angles.

The redrawn triangle is also the working NZQA's clarification asks for. A response that goes straight from the dimensions of a solid to a substituted formula, without a drawing in between, does not show which triangle the numbers came from. At Excellence, the marker looks for "correct mathematical statements" and an explained strategy. The triangle drawn on its own is one of those statements.

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well.

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
        note: "Find the base diagonal from the rectangle it lies in."
      - math: \tan(\theta) = \dfrac{7}{17.8}
        note: "Draw the right triangle on its own. Its sides are the base diagonal, the vertical edge, and the shed's own diagonal."
      - math: \theta \approx 21.5°
        note: "The diagonal makes an angle of $21.5°$ with the base."
  - ask: A shed is $13$ m long, $9$ m wide and $6$ m tall. Calculate the angle its longest diagonal makes with the base.
    grade: merit
    working:
      - math: \textsf{base}^2 = 13^2 + 9^2 = 250 \qquad \textsf{base} \approx 15.8\ \textsf{m}
        note: "Find the base diagonal from the rectangle it lies in."
      - math: \tan(\theta) = \dfrac{6}{15.8}
        note: "Draw the right triangle on its own."
      - math: \theta \approx 20.8°
        note: "The diagonal makes an angle of $20.8°$ with the base."
  - ask: A square-based pyramid has base $14$ m and slant edges of $17$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{14^2}{2} = 98
        note: "$MB^2$ is the square of half the base diagonal."
      - math: PM^2 = 17^2 - 98 = 191 \qquad PM \approx 13.8\ \textsf{m}
        note: "Use the right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{13.8}{9.90} \qquad \theta \approx 54.4°
        note: $MB = \sqrt{98} \approx 9.90$ m. The pyramid's height is $13.8$ m and its slant edges meet the base at $54.4°$.
  - ask: A square-based pyramid has base $16$ m and slant edges of $19$ m. Calculate its height, and the angle a slant edge makes with the base.
    grade: merit
    working:
      - math: MB^2 = \dfrac{16^2}{2} = 128
        note: "$MB^2$ is the square of half the base diagonal."
      - math: PM^2 = 19^2 - 128 = 233 \qquad PM \approx 15.3\ \textsf{m}
        note: "Use the right triangle formed by the height, half the base diagonal, and the slant edge."
      - math: \tan(\theta) = \dfrac{15.3}{11.3} \qquad \theta \approx 53.5°
        note: $MB = \sqrt{128} \approx 11.3$ m. The pyramid's height is $15.3$ m and its slant edges meet the base at $53.5°$.
  - ask: A vertical mast stands $18$ m tall. Two straight wires run from its top to two anchor points on level ground, one wire $24$ m long and the other $30$ m long. Seen from directly above, the two wires make an angle of $75°$ at the foot of the mast. Calculate the distance between the two anchor points.
    grade: excellence
    working:
      - math: d_1^2 = 24^2 - 18^2 = 252 \qquad d_1 \approx 15.9\ \textsf{m}
        note: "Each wire, the mast, and the ground between them forms a vertical right triangle. $d_1$ is the ground distance from the mast's foot to the first anchor."
      - math: d_2^2 = 30^2 - 18^2 = 576 \qquad d_2 = 24\ \textsf{m}
        note: "Use the same kind of right triangle for the second wire."
      - math: "\\textsf{dist}^2 = d_1^2 + d_2^2 - 2d_1d_2\\cos75° = 252 + 576 - 2(15.9)(24)\\cos75°"
        note: "$d_1$, $d_2$ and the angle between them lie flat on the ground. That triangle has no right angle, so use the cosine rule to find the distance between the anchors. Use the unrounded squares, $252$ and $576$, for $d_1^2$ and $d_2^2$."
      - math: \textsf{dist} \approx 25.1\ \textsf{m}
        note: "The two anchor points are $25.1$ m apart. The strategy was to use two right triangles to find the ground distances, then one flat triangle at ground level to join them. You devised that strategy. The question did not give it."
  - ask: A vertical mast stands $15$ m tall. Two straight wires run from its top to two anchor points on level ground, one wire $20$ m long and the other $25$ m long. Seen from directly above, the two wires make an angle of $68°$ at the foot of the mast. Calculate the distance between the two anchor points.
    grade: excellence
    working:
      - math: d_1^2 = 20^2 - 15^2 = 175 \qquad d_1 \approx 13.2\ \textsf{m}
        note: "Each wire, the mast, and the ground between them forms a vertical right triangle."
      - math: d_2^2 = 25^2 - 15^2 = 400 \qquad d_2 = 20\ \textsf{m}
        note: "Use the same kind of right triangle for the second wire."
      - math: "\\textsf{dist}^2 = d_1^2 + d_2^2 - 2d_1d_2\\cos68° = 175 + 400 - 2(13.2)(20)\\cos68°"
        note: "The two ground distances and the angle between them lie flat on the ground. Use the cosine rule to find the distance between the anchors."
      - math: \textsf{dist} \approx 19.4\ \textsf{m}
        note: "The two anchor points are $19.4$ m apart."
```

---

## Summary

Three dimensions do not add a sixth method. A box, a pyramid or a mast contains several flat triangles at once. Some are right-angled, where an edge meets a face at a right angle. Others do not have a right angle, such as the triangle where two slant edges meet at the apex of a pyramid. You find either kind of triangle in the same way every time. Identify the triangle, draw it on its own with only its own labels, and solve it with whichever of the five methods its given information matches.

That is the whole standard. There are five methods: length of an arc, area of a sector, the sine rule, the cosine rule and the area of a triangle. One method used correctly is worth Achieved. Cut a figure that has no rule of its own into pieces that each have a rule. In three dimensions, draw each triangle flat first. Beyond Achieved, the grade depends on the write-up. An Achieved answer is a method used and its answer named. A Merit answer is a chain of methods linked to the context with units. An Excellence answer is a strategy devised and explained in correct mathematical statements. The task itself is one extended problem, not a list of these skills in turn. Everything in this subject is material for that one task.
