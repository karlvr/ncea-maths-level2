# A3—The area of a triangle, and choosing the rule

---

The cosine rule finds a side or an angle. A triangle's area is a third quantity a question can ask for, and the formula for it needs the same two pieces of information as the cosine rule for a side: two sides and the angle between them.

---

## The area of a triangle

$\textsf{Area} = \dfrac{1}{2}ab\sin C$: two sides and the angle between them, the same shape of given information as the cosine rule, but a different question asked of it.

```figure
caption: Area from two sides and the angle between them
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [45, 0]
        C: [5, 80]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: 9 m
        - [A, B]
      angles:
        - at: C
          from: A
          to: B
          label: 30°
    note: Two sides and the angle between them, at $C$ — nothing about a third side is needed.
  - math: \textsf{Area} = \dfrac{1}{2}(10)(9)\sin 30°
    note: The two given sides and the angle they enclose substitute directly.
  - math: \textsf{Area} = 45 \times 0.5 = 22.5 \;\textsf{m}^2
```

```practice
caption: the area of a triangle
questions:
  - ask: Find the area of the triangle.
    diagram:
      points:
        A: [4, 0]
        B: [80, 0]
        C: [0, 57]
      edges:
        - from: B
          to: C
          label: 12 m
        - from: C
          to: A
          label: 7 m
        - [A, B]
      angles:
        - at: C
          from: A
          to: B
          label: 50°
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{1}{2}(12)(7)\sin 50°
      - math: \textsf{Area} = 42 \times 0.7660\ldots = 32.2 \;\textsf{m}^2
  - ask: Find the area of the triangle.
    diagram:
      points:
        A: [21, 0]
        B: [80, 0]
        C: [0, 30]
      edges:
        - from: B
          to: C
          label: 14 m
        - from: C
          to: A
          label: 6 m
        - [A, B]
      angles:
        - at: C
          from: A
          to: B
          label: 35°
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{1}{2}(14)(6)\sin 35°
      - math: \textsf{Area} = 42 \times 0.5736\ldots = 24.1 \;\textsf{m}^2
```

---

## Finding the angle first

Where the included angle is not part of the given information, find it first, then use the area formula on the two sides it sits between. Which method supplies it depends on what else is given: the angle sum where two other angles are known, the sine rule where an opposite pair is available, or the cosine rule where three sides are given and nothing else. Three sides is the only shape of given information with no angle in it at all.

```figure
caption: An angle found before the area
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [71, 0]
        C: [1, 80]
      edges:
        - from: B
          to: C
          label: 12 m
        - from: C
          to: A
          label: 9 m
        - from: A
          to: B
          label: 8 m
    note: Three sides, no angle — the area formula needs an angle between two of them, so one has to be found first.
  - math: \cos A = \dfrac{9^2 + 8^2 - 12^2}{2(9)(8)}
    note: The cosine rule reaches angle $A$, between the two sides, $b = 9$ and $c = 8$, that will carry the area formula.
  - math: \cos A = \dfrac{1}{144} = 0.0069\ldots
  - math: A = \cos^{-1}(0.0069\ldots) = 89.6°
  - math: \textsf{Area} = \dfrac{1}{2}(9)(8)\sin 89.6°
  - math: \textsf{Area} = 36 \times 0.99995\ldots = 36.0 \;\textsf{m}^2
    note: $A$ lands close to $90°$ here — a feature of this triangle, not a shortcut the method depends on.
```

```practice
caption: the angle first, then the area
questions:
  - ask: Find the area of the triangle.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [7, 46]
      edges:
        - from: B
          to: C
          label: 13 m
        - from: C
          to: A
          label: 7 m
        - from: A
          to: B
          label: 12 m
    grade: merit
    working:
      - math: \cos A = \dfrac{7^2 + 12^2 - 13^2}{2(7)(12)}
        note: Angle $A$, between the two sides the area formula will use.
      - math: \cos A = \dfrac{24}{168} = 0.1429\ldots
      - math: A = \cos^{-1}(0.1429\ldots) = 81.8°
      - math: \textsf{Area} = \dfrac{1}{2}(7)(12)\sin 81.8°
      - math: \textsf{Area} = 42 \times 0.9898\ldots = 41.6 \;\textsf{m}^2
  - ask: Find the area of the triangle.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [0, 60]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: 6 m
        - from: A
          to: B
          label: 8 m
    grade: merit
    working:
      - math: \cos A = \dfrac{6^2 + 8^2 - 10^2}{2(6)(8)}
      - math: \cos A = \dfrac{0}{96} = 0
        note: A zero cosine — this is the $6$-$8$-$10$ right triangle Pythagoras already knows. The cosine rule finds the right angle without being told to look for one.
      - math: A = \cos^{-1}(0) = 90°
      - math: \textsf{Area} = \dfrac{1}{2}(6)(8)\sin 90° = 24.0 \;\textsf{m}^2
```

---

## Choosing the rule

Four tools now cover any triangle, and what is given decides which one applies.

```figure
caption: Which rule fits the given information
steps:
  - math: |
      \begin{array}{l|l}
      \textsf{What is given} & \textsf{What to use} \\[2pt]
      \hline \\[-8pt]
      \textsf{a side and its opposite angle, plus one piece} & \textsf{the sine rule} \\[6pt]
      \textsf{two sides and the angle between them, a side wanted} & \textsf{the cosine rule, for a side} \\[6pt]
      \textsf{two sides and the angle between them, the area wanted} & \textsf{the area formula} \\[6pt]
      \textsf{three sides, an angle wanted} & \textsf{the cosine rule, for an angle} \\
      \end{array}
```

The second and third rows start from identical given information: the same two sides and the same included angle can be asked for a side or for the area. The question decides the rule, not the given information on its own.

```practice
caption: choosing and solving
questions:
  - ask: Find the length of side $c$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [23, 60]
      edges:
        - from: B
          to: C
          label: 9 m
        - from: C
          to: A
          label: 7 m
        - from: A
          to: B
          label: c
      angles:
        - at: C
          from: A
          to: B
          label: 65°
    grade: achieved
    working:
      - math: c^2 = 9^2 + 7^2 - 2(9)(7)\cos 65°
        note: Two sides and the angle between them, with a side wanted — the cosine rule.
      - math: c^2 = 130 - 126\cos 65° = 76.75\ldots
      - math: c = \sqrt{76.75\ldots} = 8.8 \;\textsf{m}
  - ask: Find the length of side $c$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [23, 51]
      edges:
        - from: B
          to: C
          label: 11 m
        - from: C
          to: A
          label: 8 m
        - from: A
          to: B
          label: c
      angles:
        - at: C
          from: A
          to: B
          label: 72°
    grade: achieved
    working:
      - math: c^2 = 11^2 + 8^2 - 2(11)(8)\cos 72°
      - math: c^2 = 185 - 176\cos 72° = 130.61\ldots
      - math: c = \sqrt{130.61\ldots} = 11.4 \;\textsf{m}
  - ask: Find the area of the triangle.
    diagram:
      points:
        A: [0, 0]
        B: [64, 0]
        C: [4, 80]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: 8 m
        - [A, B]
      angles:
        - at: C
          from: A
          to: B
          label: 40°
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{1}{2}(10)(8)\sin 40°
        note: The same given shape as the two questions before it, but the area is wanted, not a side — the area formula, not the cosine rule.
      - math: \textsf{Area} = 40 \times 0.6428\ldots = 25.7 \;\textsf{m}^2
  - ask: Find the area of the triangle.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [15, 55]
      edges:
        - from: B
          to: C
          label: 9 m
        - from: C
          to: A
          label: 6 m
        - [A, B]
      angles:
        - at: C
          from: A
          to: B
          label: 65°
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{1}{2}(9)(6)\sin 65°
      - math: \textsf{Area} = 27 \times 0.9063\ldots = 24.5 \;\textsf{m}^2
  - ask: Find the size of angle $A$.
    diagram:
      points:
        A: [27, 0]
        B: [80, 0]
        C: [0, 56]
      edges:
        - from: B
          to: C
          label: 11 m
        - from: C
          to: A
          label: 7 m
        - from: A
          to: B
          label: 6 m
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: achieved
    working:
      - math: \cos A = \dfrac{7^2 + 6^2 - 11^2}{2(7)(6)}
        note: Three sides, an angle wanted — the cosine rule, rearranged for an angle.
      - math: \cos A = \dfrac{-36}{84} = -0.4286\ldots
      - math: A = \cos^{-1}(-0.4286\ldots) = 115.4°
  - ask: Find the size of angle $A$.
    diagram:
      points:
        A: [10, 0]
        B: [80, 0]
        C: [0, 61]
      edges:
        - from: B
          to: C
          label: 13 m
        - from: C
          to: A
          label: 8 m
        - from: A
          to: B
          label: 9 m
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: achieved
    working:
      - math: \cos A = \dfrac{8^2 + 9^2 - 13^2}{2(8)(9)}
      - math: \cos A = \dfrac{-24}{144} = -0.1667\ldots
      - math: A = \cos^{-1}(-0.1667\ldots) = 99.6°
  - ask: Find the length of side $b$.
    diagram:
      points:
        A: [0, 0]
        B: [75, 0]
        C: [80, 63]
      edges:
        - from: B
          to: C
          label: 9 m
        - from: C
          to: A
          label: b
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 38°
        - at: B
          from: C
          to: A
          label: 95°
    grade: achieved
    working:
      - math: \dfrac{b}{\sin 95°} = \dfrac{9}{\sin 38°}
        note: An opposite pair, side $a = 9$ and angle $A = 38°$, plus one more piece — the sine rule.
      - math: b = \dfrac{9 \sin 95°}{\sin 38°}
      - math: b = 14.6 \;\textsf{m}
  - ask: Find the length of side $b$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [77, 75]
      edges:
        - from: B
          to: C
          label: 11 m
        - from: C
          to: A
          label: b
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 44°
        - at: B
          from: C
          to: A
          label: 88°
    grade: achieved
    working:
      - math: \dfrac{b}{\sin 88°} = \dfrac{11}{\sin 44°}
      - math: b = \dfrac{11 \sin 88°}{\sin 44°}
      - math: b = 15.8 \;\textsf{m}
```

---

## Practice

Work these on paper before revealing anything. They draw on the whole module, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: A surveyor stands at two points, $A$ and $B$, $50$ m apart along a straight path, to find the distance to a tree $T$ on the far side of a river. The angle $TAB$ is $72°$, and the angle $TBA$ is $65°$. Find the distance $BT$.
    diagram:
      points:
        A: [0, 0]
        B: [63, 0]
        T: [26, 80]
      edges:
        - from: A
          to: B
          label: 50 m
        - from: B
          to: T
          label: BT
        - [T, A]
      angles:
        - at: A
          from: B
          to: T
          label: 72°
        - at: B
          from: T
          to: A
          label: 65°
    grade: merit
    working:
      - math: \angle T = 180° - 72° - 65° = 43°
        note: The ratio already known is built from $AB = 50$ and its opposite angle, at $T$ — found first from the angle sum.
      - math: \dfrac{BT}{\sin 72°} = \dfrac{50}{\sin 43°}
      - math: BT = \dfrac{50 \sin 72°}{\sin 43°}
      - math: BT = 69.7 \;\textsf{m}
        note: The tree is $69.7$ m from $B$.
  - ask: A surveyor stands at two points, $A$ and $B$, $40$ m apart along a straight path, to find the distance to a tree $T$ on the far side of a river. The angle $TAB$ is $68°$, and the angle $TBA$ is $60°$. Find the distance $BT$.
    diagram:
      points:
        A: [0, 0]
        B: [79, 0]
        T: [32, 80]
      edges:
        - from: A
          to: B
          label: 40 m
        - from: B
          to: T
          label: BT
        - [T, A]
      angles:
        - at: A
          from: B
          to: T
          label: 68°
        - at: B
          from: T
          to: A
          label: 60°
    grade: merit
    working:
      - math: \angle T = 180° - 68° - 60° = 52°
      - math: \dfrac{BT}{\sin 68°} = \dfrac{40}{\sin 52°}
      - math: BT = \dfrac{40 \sin 68°}{\sin 52°}
      - math: BT = 47.1 \;\textsf{m}
        note: The tree is $47.1$ m from $B$.
  - ask: A triangular sail has two edges of length $4.2$ m and $3.6$ m, with an angle of $110°$ between them. Find the length of the sail's third edge, its foot.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [35, 28]
      edges:
        - from: A
          to: C
          label: 4.2 m
        - from: A
          to: B
          label: 3.6 m
        - from: B
          to: C
          label: c
      angles:
        - at: A
          from: B
          to: C
          label: 110°
    grade: merit
    working:
      - math: c^2 = 4.2^2 + 3.6^2 - 2(4.2)(3.6)\cos 110°
      - math: c^2 = 30.60 - 30.24\cos 110° = 40.94\ldots
        note: $\cos 110°$ is negative, so subtracting it adds to the total — the angle is obtuse, and the foot is longer than either of the given edges.
      - math: c = \sqrt{40.94\ldots} = 6.4 \;\textsf{m}
        note: The sail's foot is $6.4$ m long.
  - ask: A triangular sail has two edges of length $5.0$ m and $3.8$ m, with an angle of $115°$ between them. Find the length of the sail's third edge, its foot.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [32, 25]
      edges:
        - from: A
          to: C
          label: 5.0 m
        - from: A
          to: B
          label: 3.8 m
        - from: B
          to: C
          label: c
      angles:
        - at: A
          from: B
          to: C
          label: 115°
    grade: merit
    working:
      - math: c^2 = 5.0^2 + 3.8^2 - 2(5.0)(3.8)\cos 115°
      - math: c^2 = 39.44 - 38.00\cos 115° = 55.50\ldots
      - math: c = \sqrt{55.50\ldots} = 7.4 \;\textsf{m}
        note: The sail's foot is $7.4$ m long.
  - ask: A triangular deck is to be built with sides $9$ m, $7$ m and $5$ m. Decking costs $85$ dollars per square metre. Devise a strategy to find the cost of the decking, and calculate it.
    diagram:
      points:
        A: [8, 0]
        B: [65, 0]
        C: [0, 80]
      edges:
        - from: B
          to: C
          label: 9 m
        - from: C
          to: A
          label: 7 m
        - from: A
          to: B
          label: 5 m
    grade: excellence
    working:
      - math: \cos A = \dfrac{7^2 + 5^2 - 9^2}{2(7)(5)}
        note: No angle is given, so the strategy is the cosine rule for an angle, then the area formula, then the area multiplied by the rate.
      - math: \cos A = \dfrac{-7}{70} = -0.1
      - math: A = \cos^{-1}(-0.1) = 95.7°
      - math: \textsf{Area} = \dfrac{1}{2}(7)(5)\sin 95.7° = 17.4 \;\textsf{m}^2
      - math: \textsf{Cost} = 17.4 \times 85 = 1480 \;\textsf{dollars}
        note: Rounded to the nearest dollar. The deck costs $1480$ dollars to lay.
  - ask: A triangular deck is to be built with sides $8$ m, $6$ m and $5$ m. Decking costs $95$ dollars per square metre. Devise a strategy to find the cost of the decking, and calculate it.
    diagram:
      points:
        A: [4, 0]
        B: [71, 0]
        C: [0, 80]
      edges:
        - from: B
          to: C
          label: 8 m
        - from: C
          to: A
          label: 6 m
        - from: A
          to: B
          label: 5 m
    grade: excellence
    working:
      - math: \cos A = \dfrac{6^2 + 5^2 - 8^2}{2(6)(5)}
      - math: \cos A = \dfrac{-3}{60} = -0.05
      - math: A = \cos^{-1}(-0.05) = 92.9°
      - math: \textsf{Area} = \dfrac{1}{2}(6)(5)\sin 92.9° = 15.0 \;\textsf{m}^2
      - math: \textsf{Cost} = 15.0 \times 95 = 1423 \;\textsf{dollars}
        note: The deck costs $1423$ dollars to lay.
  - ask: A triangular paddock has corners $P$, $Q$ and $R$. Fence $PQ$ is $70$ m, fence $QR$ is $30$ m, and the angle at $P$ between fence $PQ$ and fence $PR$ is $22°$. The diagram shows that the angle at $R$ is obtuse. Find the length of fence $PR$, and state the total length of fencing the paddock needs.
    diagram:
      points:
        P: [0, 0]
        Q: [80, 0]
        R: [53, 22]
      edges:
        - from: P
          to: Q
          label: 70 m
        - from: Q
          to: R
          label: 30 m
        - from: R
          to: P
          label: PR
      angles:
        - at: P
          from: Q
          to: R
          label: 22°
    grade: excellence
    working:
      - math: \sin R = \dfrac{PQ \sin P}{QR} = \dfrac{70 \sin 22°}{30}
        note: "$PQ = 70$ is opposite the angle at $R$; $QR = 30$, opposite $P$, is the known ratio."
      - math: \sin R = 0.8741\ldots
      - math: R = \sin^{-1}(0.8741\ldots) = 60.9° \quad\textsf{or}\quad 180° - 60.9° = 119.1°
        note: The diagram shows $R$ obtuse, so the second branch is the one wanted. The decision is stated, not left implicit.
      - math: \angle Q = 180° - 22° - 119.1° = 38.9°
      - math: \dfrac{PR}{\sin 38.9°} = \dfrac{30}{\sin 22°}
      - math: PR = \dfrac{30 \sin 38.9°}{\sin 22°} = 50.3 \;\textsf{m}
      - math: \textsf{Fencing} = 70 + 30 + 50.3 = 150.3 \;\textsf{m}
        note: The paddock needs $150.3$ m of fencing in total.
  - ask: A triangular paddock has corners $P$, $Q$ and $R$. Fence $PQ$ is $65$ m, fence $QR$ is $25$ m, and the angle at $P$ between fence $PQ$ and fence $PR$ is $20°$. The diagram shows that the angle at $R$ is obtuse. Find the length of fence $PR$, and state the total length of fencing the paddock needs.
    diagram:
      points:
        P: [0, 0]
        Q: [80, 0]
        R: [57, 21]
      edges:
        - from: P
          to: Q
          label: 65 m
        - from: Q
          to: R
          label: 25 m
        - from: R
          to: P
          label: PR
      angles:
        - at: P
          from: Q
          to: R
          label: 20°
    grade: excellence
    working:
      - math: \sin R = \dfrac{PQ \sin P}{QR} = \dfrac{65 \sin 20°}{25}
      - math: \sin R = 0.8893\ldots
      - math: R = \sin^{-1}(0.8893\ldots) = 62.8° \quad\textsf{or}\quad 180° - 62.8° = 117.2°
        note: The diagram shows $R$ obtuse, so the second branch is the one wanted.
      - math: \angle Q = 180° - 20° - 117.2° = 42.8°
      - math: \dfrac{PR}{\sin 42.8°} = \dfrac{25}{\sin 20°}
      - math: PR = \dfrac{25 \sin 42.8°}{\sin 20°} = 49.7 \;\textsf{m}
      - math: \textsf{Fencing} = 65 + 25 + 49.7 = 139.7 \;\textsf{m}
        note: The paddock needs $139.7$ m of fencing in total.
```

---

## Summary

$\textsf{Area} = \dfrac{1}{2}ab\sin C$ needs the same given information as the cosine rule for a side: two sides and the angle between them. Where that angle is not part of the given information, find it first — from the angle sum, the sine rule, or the cosine rule, whichever the rest of the given information supplies — before the area formula can be used.

Choosing which of the four tools fits a question is decided by what is given and what is asked, not by which lesson it happened to appear in: an opposite pair calls for the sine rule; two sides and the angle between them call for the cosine rule if a side is wanted, or the area formula if the area is wanted; three sides call for the cosine rule, rearranged for an angle.

Triangles are done. The standard's remaining two methods, arc length and sector area, apply the same idea, a fraction of the whole, to parts of a circle instead.
