# A1—The sine rule

---

Year 11 solved triangles with SOH-CAH-TOA and Pythagoras, and both need a right angle: SOH-CAH-TOA divides two of a triangle's sides by its hypotenuse, and Pythagoras states a relationship that only holds when one angle is $90°$. Most triangles that need solving do not have one — a surveyed boundary, a roof truss, a sail cut to a curve. This module's three methods work on any triangle, with a right angle or without.

---

## Naming a triangle without a right angle

A triangle with no right angle still has three sides and three angles, and two of each are usually enough to find the rest.

```figure
caption: A triangle with no right angle
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [30, 60]
      edges:
        - [A, B]
        - [B, C]
        - from: C
          to: A
          label: "?"
      angles:
        - at: A
          from: B
          to: C
          label: 50°
        - at: B
          from: C
          to: A
          label: 65°
    note: No angle here is $90°$, so SOH-CAH-TOA has nothing to divide by and Pythagoras has no relationship to use. Two angles and a side are known — what can still be found?
```

Every side in this subject is named by the lower-case letter of the angle it sits opposite: side $a$ is opposite angle $A$, side $b$ opposite angle $B$, side $c$ opposite angle $C$. The convention holds for every triangle in every lesson from here on.

```figure
caption: Sides and angles, named
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [30, 60]
      edges:
        - from: B
          to: C
          label: a
        - from: C
          to: A
          label: b
        - from: A
          to: B
          label: c
      angles:
        - at: A
          from: B
          to: C
          label: A
        - at: B
          from: C
          to: A
          label: B
        - at: C
          from: A
          to: B
          label: C
    note: Side $a$ is opposite angle $A$. The same pattern gives $b$ opposite $B$ and $c$ opposite $C$.
```

---

## The sine rule

For any triangle, each side divided by the sine of its opposite angle gives the same value: $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$.

The rule applies whenever the given information contains an **opposite pair** — a side and the angle directly across the triangle from it — plus one more piece. The opposite pair gives the ratio; the extra angle unlocks a second side.

```figure
caption: Finding a side from an opposite pair
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [65, 55]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: b
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 40°
        - at: B
          from: C
          to: A
          label: 75°
    note: Side $a$ and angle $A$ are the opposite pair. Angle $B$ is the extra piece that unlocks side $b$.
  - math: \dfrac{b}{\sin 75°} = \dfrac{10}{\sin 40°}
    note: Set the ratio for the side wanted equal to the ratio already known, from the opposite pair.
  - math: b = \dfrac{10 \sin 75°}{\sin 40°}
    note: Cross-multiply to isolate $b$.
  - math: b = 15.0 \;\textsf{m}
```

The unknown side sits on top of its own fraction before the cross-multiplication, whichever side is wanted — writing the rule with $b$ already on top saves a rearrangement.

```practice
caption: finding a side
questions:
  - ask: Find the length of side $b$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [64, 45]
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
          label: 35°
        - at: B
          from: C
          to: A
          label: 70°
    grade: achieved
    working:
      - math: \dfrac{b}{\sin 70°} = \dfrac{9}{\sin 35°}
        note: The opposite pair is $a = 9$ and $A = 35°$; angle $B$ is the extra piece.
      - math: b = \dfrac{9 \sin 70°}{\sin 35°}
      - math: b = 14.7 \;\textsf{m}
  - ask: Find the length of side $b$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [51, 57]
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
          label: 48°
        - at: B
          from: C
          to: A
          label: 63°
    grade: achieved
    working:
      - math: \dfrac{b}{\sin 63°} = \dfrac{11}{\sin 48°}
      - math: b = \dfrac{11 \sin 63°}{\sin 48°}
      - math: b = 13.2 \;\textsf{m}
```

---

## Finding an angle

The rule inverts the same way for an angle: $\dfrac{\sin A}{a} = \dfrac{\sin B}{b}$. Isolate the sine, then undo it with $\sin^{-1}$.

```figure
caption: Finding an angle from an opposite pair
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [32, 38]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: 8 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 50°
        - at: B
          from: C
          to: A
          label: B
    note: Side $a = 10$ and angle $A = 50°$ are the opposite pair. Side $b = 8$ is the extra piece that unlocks angle $B$.
  - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \dfrac{\sin B}{8} = \dfrac{\sin 50°}{10}
    note: The rule as the task prints it, then turned over so that the sines sit on top.
  - math: \sin B = \dfrac{8 \sin 50°}{10}
    note: Isolate $\sin B$ before undoing it.
  - math: B = \sin^{-1}(0.6128\ldots)
  - math: B = 37.8°
```

$\sin^{-1}$ on a calculator always returns an angle between $0°$ and $90°$. That is correct here because side $b$ is shorter than side $a$, so angle $B$ must be smaller than the $50°$ angle opposite the longer side — an acute angle is the only possibility.

```practice
caption: finding an angle
questions:
  - ask: Find the size of angle $B$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [34, 30]
      edges:
        - from: B
          to: C
          label: 11 m
        - from: C
          to: A
          label: 9 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 42°
        - at: B
          from: C
          to: A
          label: B
    grade: achieved
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \dfrac{\sin B}{9} = \dfrac{\sin 42°}{11}
        note: The opposite pair is $a = 11$ and $A = 42°$.
      - math: \sin B = \dfrac{9 \sin 42°}{11}
      - math: B = \sin^{-1}(0.5475\ldots)
      - math: B = 33.2°
  - ask: Find the size of angle $B$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [28, 45]
      edges:
        - from: B
          to: C
          label: 13 m
        - from: C
          to: A
          label: 10 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 58°
        - at: B
          from: C
          to: A
          label: B
    grade: achieved
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \dfrac{\sin B}{10} = \dfrac{\sin 58°}{13}
      - math: \sin B = \dfrac{10 \sin 58°}{13}
      - math: B = \sin^{-1}(0.6523\ldots)
      - math: B = 40.7°
```

---

## The third angle

The angles of a triangle sum to $180°$, and the angle sum often has to be used before the sine rule can reach the side wanted. Where two angles are given and the side wanted is opposite the third, find the third angle first: $C = 180° - A - B$.

```figure
caption: The third angle, found before the side
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [54, 60]
      edges:
        - from: B
          to: C
          label: 9 m
        - from: C
          to: A
          label: c
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 48°
        - at: B
          from: C
          to: A
          label: 67°
    note: Side $c$ is opposite angle $C$, and $C$ is not given directly.
  - math: C = 180° - 48° - 67° = 65°
    note: The third angle, before anything else is attempted.
  - math: \dfrac{c}{\sin 65°} = \dfrac{9}{\sin 48°}
    note: Now $c$ has an opposite angle to work with, and the opposite pair $a = 9$, $A = 48°$ is still the known ratio.
  - math: c = \dfrac{9 \sin 65°}{\sin 48°}
  - math: c = 11.0 \;\textsf{m}
```

```practice
caption: the third angle first
questions:
  - ask: Find the length of side $c$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [47, 60]
      edges:
        - from: B
          to: C
          label: 8 m
        - from: C
          to: A
          label: c
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 52°
        - at: B
          from: C
          to: A
          label: 61°
    grade: merit
    working:
      - math: C = 180° - 52° - 61° = 67°
        note: Side $c$ is opposite $C$, so $C$ has to be found before the rule reaches $c$.
      - math: \dfrac{c}{\sin 67°} = \dfrac{8}{\sin 52°}
      - math: c = \dfrac{8 \sin 67°}{\sin 52°}
      - math: c = 9.3 \;\textsf{m}
  - ask: Find the length of side $c$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [67, 65]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: c
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 44°
        - at: B
          from: C
          to: A
          label: 79°
    grade: merit
    working:
      - math: C = 180° - 44° - 79° = 57°
      - math: \dfrac{c}{\sin 57°} = \dfrac{10}{\sin 44°}
      - math: c = \dfrac{10 \sin 57°}{\sin 44°}
      - math: c = 12.1 \;\textsf{m}
```

---

## The ambiguous case

$\sin^{-1}$ always returns an acute angle, but an obtuse angle can have the same sine: $\sin 130° = \sin 50°$, because the two are supplementary. When the side opposite the angle being found is longer than the side opposite the given angle, the triangle can be obtuse at that vertex, and the calculator's answer is only one of the two possibilities. The diagram tells you which of the two applies: where it shows the angle obtuse, subtract the calculator's answer from $180°$.

```figure
caption: The other branch of $\sin^{-1}$
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [47, 0]
        C: [80, 56]
      edges:
        - from: B
          to: C
          label: 6 m
        - from: C
          to: A
          label: 9 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 35°
        - at: B
          from: C
          to: A
          label: B
    note: Side $b = 9$ is longer than side $a = 6$, and the diagram shows angle $B$ obtuse.
  - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin B = \dfrac{9 \sin 35°}{6} = 0.8604\ldots
    note: The same substitution as any other opposite pair.
  - math: \sin^{-1}(0.8604\ldots) = 59.4°
    note: The calculator's answer is always the acute one.
  - math: B = 180° - 59.4° = 120.6°
    note: The diagram shows $B$ obtuse, so the other branch is the one wanted. $\sin 120.6° = \sin 59.4°$, so both satisfy the equation — only the diagram shows which is correct here.
```

```practice
caption: the ambiguous case
questions:
  - ask: Find the size of angle $B$.
    diagram:
      points:
        A: [0, 0]
        B: [53, 0]
        C: [80, 43]
      edges:
        - from: B
          to: C
          label: 5 m
        - from: C
          to: A
          label: 9 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 28°
        - at: B
          from: C
          to: A
          label: B
    grade: merit
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin B = \dfrac{9 \sin 28°}{5} = 0.8450\ldots
      - math: \sin^{-1}(0.8450\ldots) = 57.7°
        note: The acute branch — but the diagram shows $B$ obtuse.
      - math: B = 180° - 57.7° = 122.3°
  - ask: Find the size of angle $B$.
    diagram:
      points:
        A: [0, 0]
        B: [47, 0]
        C: [80, 37]
      edges:
        - from: B
          to: C
          label: 4.5 m
        - from: C
          to: A
          label: 8 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 25°
        - at: B
          from: C
          to: A
          label: B
    grade: merit
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin B = \dfrac{8 \sin 25°}{4.5} = 0.7513\ldots
      - math: \sin^{-1}(0.7513\ldots) = 48.7°
      - math: B = 180° - 48.7° = 131.3°
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Find the length of side $b$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [72, 55]
      edges:
        - from: B
          to: C
          label: 7 m
        - from: C
          to: A
          label: b
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 37°
        - at: B
          from: C
          to: A
          label: 82°
    grade: achieved
    working:
      - math: \dfrac{b}{\sin 82°} = \dfrac{7}{\sin 37°}
      - math: b = \dfrac{7 \sin 82°}{\sin 37°}
      - math: b = 11.5 \;\textsf{m}
  - ask: Find the length of side $b$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [35, 52]
      edges:
        - from: B
          to: C
          label: 12 m
        - from: C
          to: A
          label: b
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 56°
        - at: B
          from: C
          to: A
          label: 49°
    grade: achieved
    working:
      - math: \dfrac{b}{\sin 49°} = \dfrac{12}{\sin 56°}
      - math: b = \dfrac{12 \sin 49°}{\sin 56°}
      - math: b = 10.9 \;\textsf{m}
  - ask: Find the size of angle $B$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [24, 48]
      edges:
        - from: B
          to: C
          label: 15 m
        - from: C
          to: A
          label: 11 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 63°
        - at: B
          from: C
          to: A
          label: B
    grade: achieved
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin B = \dfrac{11 \sin 63°}{15} = 0.6534\ldots
      - math: B = \sin^{-1}(0.6534\ldots)
      - math: B = 40.8°
  - ask: Find the size of angle $B$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [32, 35]
      edges:
        - from: B
          to: C
          label: 10 m
        - from: C
          to: A
          label: 8 m
        - [A, B]
      angles:
        - at: A
          from: B
          to: C
          label: 47°
        - at: B
          from: C
          to: A
          label: B
    grade: achieved
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin B = \dfrac{8 \sin 47°}{10} = 0.5851\ldots
      - math: B = \sin^{-1}(0.5851\ldots)
      - math: B = 35.8°
  - ask: A yacht's stay wire runs from the top of the mast, $A$, to a fitting on the deck, $B$. From a second deck fitting $C$, $14$ m from $B$, the angle of sight up to the masthead, $\angle ACB$, is $73°$, and the angle at $B$ between the deck and the stay wire, $\angle ABC$, is $58°$. Find the length of the stay wire $AB$, stating what it represents.
    diagram:
      points:
        A: [50, 80]
        B: [0, 0]
        C: [74, 0]
      edges:
        - from: B
          to: C
          label: 14 m
        - from: C
          to: A
          label: AC
        - from: A
          to: B
          label: AB
      angles:
        - at: B
          from: C
          to: A
          label: 58°
        - at: C
          from: A
          to: B
          label: 73°
    grade: merit
    working:
      - math: \angle BAC = 180° - 58° - 73° = 49°
        note: The angle at the masthead is not given directly, and it is the third angle — found first, as before.
      - math: \dfrac{AB}{\sin 73°} = \dfrac{14}{\sin 49°}
        note: The opposite pair is the given side $BC = 14$ and its opposite angle, $49°$, at the masthead. $AB$ is opposite the $73°$ angle at $C$.
      - math: AB = \dfrac{14 \sin 73°}{\sin 49°}
      - math: AB = 17.7 \;\textsf{m}
        note: The stay wire $AB$ is $17.7$ m long.
  - ask: A yacht's stay wire runs from the top of the mast, $A$, to a fitting on the deck, $B$. From a second deck fitting $C$, $18$ m from $B$, the angle of sight up to the masthead, $\angle ACB$, is $69°$, and the angle at $B$ between the deck and the stay wire, $\angle ABC$, is $64°$. Find the length of the stay wire $AB$, stating what it represents.
    diagram:
      points:
        A: [39, 80]
        B: [0, 0]
        C: [70, 0]
      edges:
        - from: B
          to: C
          label: 18 m
        - from: C
          to: A
          label: AC
        - from: A
          to: B
          label: AB
      angles:
        - at: B
          from: C
          to: A
          label: 64°
        - at: C
          from: A
          to: B
          label: 69°
    grade: merit
    working:
      - math: \angle BAC = 180° - 64° - 69° = 47°
      - math: \dfrac{AB}{\sin 69°} = \dfrac{18}{\sin 47°}
      - math: AB = \dfrac{18 \sin 69°}{\sin 47°}
      - math: AB = 23.0 \;\textsf{m}
        note: The stay wire $AB$ is $23.0$ m long.
  - ask: A dinghy $D$ is spotted from two points $P$ and $Q$ on a straight jetty, $13$ m apart. The angle $\angle DPQ$ is $30°$, and $QD = 8$ m. The diagram shows that angle $\angle PDQ$ is obtuse. Devise a strategy to find the distance $PD$, showing every decision.
    diagram:
      points:
        P: [0, 0]
        Q: [80, 0]
        D: [35, 20]
      edges:
        - from: P
          to: Q
          label: 13 m
        - from: Q
          to: D
          label: 8 m
        - from: D
          to: P
          label: PD
      angles:
        - at: P
          from: Q
          to: D
          label: 30°
    grade: excellence
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin(\angle PDQ) = \dfrac{13 \sin 30°}{8} = 0.8125
        note: The known pair is $QD = 8$ opposite the $30°$ angle at $P$; $PQ = 13$ sits opposite the angle wanted at $D$, so the sine rule reaches $\angle PDQ$ directly.
      - math: \sin^{-1}(0.8125) = 54.3°
        note: The calculator's acute answer, and not yet the one wanted.
      - math: \angle PDQ = 180° - 54.3° = 125.7°
        note: Stated as obtuse, because the diagram rules the acute branch out — the decision is written down, not left implicit.
      - math: \angle PQD = 180° - 30° - 125.7° = 24.3°
        note: The third angle, needed because $PD$ is opposite it.
      - math: \dfrac{PD}{\sin 24.3°} = \dfrac{8}{\sin 30°}
        note: $PD$ is opposite the newly found angle at $Q$. $QD = 8$ and its opposite angle $P = 30°$ are still the known ratio.
      - math: PD = \dfrac{8 \sin 24.3°}{\sin 30°}
      - math: PD = 6.6 \;\textsf{m}
        note: The distance from $P$ to the dinghy is $6.6$ m.
  - ask: A dinghy $D$ is spotted from two points $P$ and $Q$ on a straight jetty, $11$ m apart. The angle $\angle DPQ$ is $33°$, and $QD = 7$ m. The diagram shows that angle $\angle PDQ$ is obtuse. Devise a strategy to find the distance $PD$, showing every decision.
    diagram:
      points:
        P: [0, 0]
        Q: [80, 0]
        D: [34, 22]
      edges:
        - from: P
          to: Q
          label: 11 m
        - from: Q
          to: D
          label: 7 m
        - from: D
          to: P
          label: PD
      angles:
        - at: P
          from: Q
          to: D
          label: 33°
    grade: excellence
    working:
      - math: \dfrac{a}{\sin A} = \dfrac{b}{\sin B} \quad\Rightarrow\quad \sin(\angle PDQ) = \dfrac{11 \sin 33°}{7} = 0.8558\ldots
      - math: \sin^{-1}(0.8558\ldots) = 58.9°
        note: The calculator's acute answer, and not yet the one wanted.
      - math: \angle PDQ = 180° - 58.9° = 121.1°
        note: Stated as obtuse, because the diagram rules the acute branch out.
      - math: \angle PQD = 180° - 33° - 121.1° = 25.9°
      - math: \dfrac{PD}{\sin 25.9°} = \dfrac{7}{\sin 33°}
      - math: PD = \dfrac{7 \sin 25.9°}{\sin 33°}
      - math: PD = 5.6 \;\textsf{m}
        note: The distance from $P$ to the dinghy is $5.6$ m.
```

---

## Summary

The sine rule, $\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}$, needs an opposite pair — a side and the angle directly across the triangle from it — plus one more piece. That extra piece is a second angle to reach a second side, or a second side to reach a second angle; where the missing angle is the third one, the angle sum $180°$ supplies it first.

Solving for an angle can return either of two supplementary values, because $\sin 130° = \sin 50°$. The calculator's $\sin^{-1}$ always gives the acute one; where the diagram shows the angle obtuse, subtract from $180°$.

Not every triangle offers an opposite pair. The next lesson covers what to do with two sides and the angle between them, or three sides and no angle at all — information with no opposite pair anywhere for the sine rule to start from.
