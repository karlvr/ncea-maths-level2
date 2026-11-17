# A2—The cosine rule

---

You can use the sine rule only when you know an opposite pair: a side and the angle directly across the triangle from it. Two sides and the angle between them do not include such a pair, because the angle is between the two known sides, not opposite either. Three sides do not include any angle. Both kinds of given information are common in construction and in surveying, and you cannot solve either of them with the sine rule.

---

## The rule for a side

The cosine rule gives a side from two sides and the angle between them: $a^2 = b^2 + c^2 - 2bc\cos A$. Here $A$ is the angle between sides $b$ and $c$, and it is opposite the side $a$ wanted.

At $A = 90°$, $\cos A = 0$ and the last term disappears, leaving $a^2 = b^2 + c^2$, which is Pythagoras exactly. Away from a right angle, the term $2bc\cos A$ corrects for the angle. Below $90°$, cosine is positive. Subtracting $2bc\cos A$ then makes $a$ shorter than Pythagoras alone would give. Above $90°$, cosine is negative, so $-2bc\cos A$ is positive and $a$ is longer.

```figure
caption: A side from two sides and the angle between them
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [69, 0]
        C: [46, 80]
      edges:
        - from: A
          to: C
          label: 8 m
        - from: A
          to: B
          label: 6 m
        - from: B
          to: C
          label: a
      angles:
        - at: A
          from: B
          to: C
          label: 60°
    note: You know two sides and the angle between them. There is no opposite pair, so you cannot use the sine rule to find $a$.
  - math: a^2 = 8^2 + 6^2 - 2(8)(6)\cos 60°
    note: Substitute directly. The angle between the two given sides is the one that goes in.
  - math: a^2 = 100 - 48 = 52
  - math: a = \sqrt{52} = 7.2 \;\textsf{m}
```

```practice
caption: the cosine rule for a side
questions:
  - ask: Find the length of side $a$.
    diagram:
      points:
        A: [0, 0]
        B: [78, 0]
        C: [56, 80]
      edges:
        - from: A
          to: C
          label: 10 m
        - from: A
          to: B
          label: 8 m
        - from: B
          to: C
          label: a
      angles:
        - at: A
          from: B
          to: C
          label: 55°
    grade: achieved
    working:
      - math: a^2 = 10^2 + 8^2 - 2(10)(8)\cos 55°
        note: Substitute the angle between the two given sides directly.
      - math: a^2 = 164 - 160\cos 55° = 72.2\ldots
      - math: a = \sqrt{72.2\ldots} = 8.5 \;\textsf{m}
  - ask: Find the length of side $a$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [63, 75]
      edges:
        - from: A
          to: C
          label: 11 m
        - from: A
          to: B
          label: 9 m
        - from: B
          to: C
          label: a
      angles:
        - at: A
          from: B
          to: C
          label: 50°
    grade: achieved
    working:
      - math: a^2 = 11^2 + 9^2 - 2(11)(9)\cos 50°
      - math: a^2 = 202 - 198\cos 50° = 74.7\ldots
      - math: a = \sqrt{74.7\ldots} = 8.6 \;\textsf{m}
```

---

## The rule for an angle

Three sides do not include an opposite pair either, so you cannot use the sine rule. Rearrange the cosine rule to find an angle instead: $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$. The rearrangement is printed on the task's formulae list, so you do not have to produce it from memory. But it is the rule for a side, rearranged to make $\cos A$ the subject. Knowing that helps you put the side opposite $A$ in the right place.

Cosine is positive for an acute angle and negative for an obtuse angle. So $\cos^{-1}$ gives an obtuse angle when the cosine is negative, and an acute angle when it is positive. There is no second angle to consider, as there is with $\sin^{-1}$, and you do not need the diagram to decide.

```figure
caption: An angle from three sides
steps:
  - diagram:
      points:
        A: [29, 0]
        B: [80, 0]
        C: [0, 50]
      edges:
        - from: B
          to: C
          label: 13 m
        - from: C
          to: A
          label: 8 m
        - from: A
          to: B
          label: 7 m
      angles:
        - at: A
          from: B
          to: C
          label: A
    note: You know three sides and no angle. There is no opposite pair, so you cannot use the sine rule.
  - math: \cos A = \dfrac{8^2 + 7^2 - 13^2}{2(8)(7)}
    note: The side opposite the angle wanted, $a = 13$, is the one that is squared and subtracted.
  - math: \cos A = \dfrac{-56}{112} = -0.5
    note: A negative cosine already shows the angle is obtuse, before $\cos^{-1}$ is taken.
  - math: A = \cos^{-1}(-0.5) = 120°
```

```practice
caption: the cosine rule for an angle
questions:
  - ask: Find the size of angle $A$.
    diagram:
      points:
        A: [39, 0]
        B: [80, 0]
        C: [0, 34]
      edges:
        - from: B
          to: C
          label: 15 m
        - from: C
          to: A
          label: 9 m
        - from: A
          to: B
          label: 7 m
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: achieved
    working:
      - math: \cos A = \dfrac{9^2 + 7^2 - 15^2}{2(9)(7)}
      - math: \cos A = \dfrac{-95}{126} = -0.7540\ldots
      - math: A = \cos^{-1}(-0.7540\ldots) = 138.9°
  - ask: Find the size of angle $A$.
    diagram:
      points:
        A: [36, 0]
        B: [80, 0]
        C: [0, 37]
      edges:
        - from: B
          to: C
          label: 12 m
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
      - math: \cos A = \dfrac{7^2 + 6^2 - 12^2}{2(7)(6)}
      - math: \cos A = \dfrac{-59}{84} = -0.7024\ldots
      - math: A = \cos^{-1}(-0.7024\ldots) = 134.6°
```

---

## Order of operations

A common mistake is to group the terms the wrong way, and calculate $(b^2 + c^2 - 2bc)\cos A$ instead of $b^2 + c^2 - 2bc\cos A$. Only the $2bc$ term is multiplied by $\cos A$. $b^2$ and $c^2$ are not. Calculate $2bc\cos A$ as one product, then subtract it from $b^2 + c^2$.

```figure
caption: Only $2bc$ is multiplied by $\cos A$
steps:
  - math: a^2 = 8^2 + 6^2 - 2(8)(6)\cos 60°
    note: "The same triangle as the opening figure: $b = 8$, $c = 6$, $A = 60°$."
  - math: a^2 = 64 + 36 - 48 = 52 \qquad\checkmark
    note: $2(8)(6)\cos 60° = 96 \times 0.5 = 48$. This is the product $2bc$, multiplied by $\cos A$ on its own.
  - math: a^2 \neq (64 + 36 - 96)(0.5) = 2
    note: With the wrong grouping, you multiply all of $b^2 + c^2 - 2bc$ by $\cos A$. The result, a side barely longer than $1$, is obviously too short beside sides of $8$ and $6$. The error is easy to catch once you check it against the picture.
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each is labelled with the band the marker would award for doing it well. In a context question, you earn the Merit marks in the final sentence. NZQA's clarification for this standard says that at Merit, *"students need to clearly indicate what they are calculating and their solutions need to be linked to the context"*.

```practice
questions:
  - ask: Find the length of side $c$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [32, 30]
      edges:
        - from: A
          to: C
          label: 7 m
        - from: B
          to: C
          label: 9 m
        - from: A
          to: B
          label: c
      angles:
        - at: C
          from: A
          to: B
          label: 105°
    grade: achieved
    working:
      - math: c^2 = 9^2 + 7^2 - 2(9)(7)\cos 105°
        note: Only $2(9)(7)$ is multiplied by $\cos 105°$, not the whole bracket. Subtract that product from $9^2 + 7^2$.
      - math: c^2 = 130 - 126\cos 105° = 162.6\ldots
      - math: c = \sqrt{162.6\ldots} = 12.8 \;\textsf{m}
  - ask: Find the length of side $c$.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [24, 30]
      edges:
        - from: A
          to: C
          label: 6 m
        - from: B
          to: C
          label: 10 m
        - from: A
          to: B
          label: c
      angles:
        - at: C
          from: A
          to: B
          label: 100°
    grade: achieved
    working:
      - math: c^2 = 10^2 + 6^2 - 2(10)(6)\cos 100°
      - math: c^2 = 136 - 120\cos 100° = 156.8\ldots
      - math: c = \sqrt{156.8\ldots} = 12.5 \;\textsf{m}
  - ask: "A hiking course runs in three straight legs: $11$ km from the start to a turn point, $13$ km from there to a second point, and a final $19$ km leg directly back to the start. Find the angle of the turn, between the first two legs."
    diagram:
      points:
        A: [18, 0]
        B: [80, 0]
        C: [0, 71]
      edges:
        - from: A
          to: B
          label: 11 km
        - from: A
          to: C
          label: 13 km
        - from: B
          to: C
          label: 19 km
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: achieved
    working:
      - math: \cos A = \dfrac{11^2 + 13^2 - 19^2}{2(11)(13)}
        note: The return leg, $19$ km, is opposite the turn angle and is the side that is squared and subtracted.
      - math: \cos A = \dfrac{-71}{286} = -0.2483\ldots
      - math: A = \cos^{-1}(-0.2483\ldots) = 104.4°
  - ask: "A hiking course runs in three straight legs: $10$ km from the start to a turn point, $12$ km from there to a second point, and a final $17$ km leg directly back to the start. Find the angle of the turn, between the first two legs."
    diagram:
      points:
        A: [15, 0]
        B: [80, 0]
        C: [0, 77]
      edges:
        - from: A
          to: B
          label: 10 km
        - from: A
          to: C
          label: 12 km
        - from: B
          to: C
          label: 17 km
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: achieved
    working:
      - math: \cos A = \dfrac{10^2 + 12^2 - 17^2}{2(10)(12)}
      - math: \cos A = \dfrac{-45}{240} = -0.1875
      - math: A = \cos^{-1}(-0.1875) = 100.8°
  - ask: Two straight tracks leave a hut at an angle of $48°$ to each other. One hiker walks $6.5$ km along one track and a second walks $5.2$ km along the other. Find the direct distance between them.
    diagram:
      points:
        A: [0, 0]
        B: [77, 0]
        C: [14, 80]
      edges:
        - from: A
          to: C
          label: 5.2 km
        - from: B
          to: C
          label: 6.5 km
        - from: A
          to: B
          label: c
      angles:
        - at: C
          from: A
          to: B
          label: 48°
    grade: merit
    working:
      - math: c^2 = 6.5^2 + 5.2^2 - 2(6.5)(5.2)\cos 48°
        note: The angle between the two given sides, at the hut, is the one to substitute.
      - math: c^2 = 69.29 - 67.6\cos 48° = 24.06\ldots
      - math: c = \sqrt{24.06\ldots} = 4.9 \;\textsf{km}
        note: The two hikers are $4.9$ km apart.
  - ask: Two straight tracks leave a hut at an angle of $53°$ to each other. One hiker walks $7.0$ km along one track and a second walks $4.8$ km along the other. Find the direct distance between them.
    diagram:
      points:
        A: [0, 0]
        B: [80, 0]
        C: [7, 68]
      edges:
        - from: A
          to: C
          label: 4.8 km
        - from: B
          to: C
          label: 7.0 km
        - from: A
          to: B
          label: c
      angles:
        - at: C
          from: A
          to: B
          label: 53°
    grade: merit
    working:
      - math: c^2 = 7.0^2 + 4.8^2 - 2(7.0)(4.8)\cos 53°
      - math: c^2 = 72.04 - 67.2\cos 53° = 31.60\ldots
      - math: c = \sqrt{31.60\ldots} = 5.6 \;\textsf{km}
        note: The two hikers are $5.6$ km apart.
  - ask: "A delivery drone flies three straight legs to check a farm's paddocks: $150$ m, then $180$ m, then a final $240$ m leg directly back to the start. Find the angle of the turn between the first two legs, and state, with your reasoning, whether that turn is acute or obtuse."
    diagram:
      points:
        A: [4, 0]
        B: [71, 0]
        C: [0, 80]
      edges:
        - from: A
          to: B
          label: 150 m
        - from: A
          to: C
          label: 180 m
        - from: B
          to: C
          label: 240 m
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: excellence
    working:
      - math: \cos A = \dfrac{150^2 + 180^2 - 240^2}{2(150)(180)}
        note: The closing leg, $240$ m, is opposite the turn and is the side that is squared and subtracted.
      - math: \cos A = \dfrac{-2700}{54000} = -0.05
        note: The value is negative, so you already know the angle is obtuse before $\cos^{-1}$ is taken. With the sine rule you would need a separate check here, but with the cosine rule you do not.
      - math: A = \cos^{-1}(-0.05) = 92.9°
        note: An obtuse turn of $92.9°$, only just past a right angle.
  - ask: "A delivery drone flies three straight legs to check a farm's paddocks: $140$ m, then $160$ m, then a final $220$ m leg directly back to the start. Find the angle of the turn between the first two legs, and state, with your reasoning, whether that turn is acute or obtuse."
    diagram:
      points:
        A: [6, 0]
        B: [76, 0]
        C: [0, 80]
      edges:
        - from: A
          to: B
          label: 140 m
        - from: A
          to: C
          label: 160 m
        - from: B
          to: C
          label: 220 m
      angles:
        - at: A
          from: B
          to: C
          label: A
    grade: excellence
    working:
      - math: \cos A = \dfrac{140^2 + 160^2 - 220^2}{2(140)(160)}
      - math: \cos A = \dfrac{-3200}{44800} = -0.0714\ldots
        note: The cosine is negative, so you know the angle is obtuse before you take $\cos^{-1}$.
      - math: A = \cos^{-1}(-0.0714\ldots) = 94.1°
        note: An obtuse turn of $94.1°$.
```

---

## Summary

Use the cosine rule for the triangles where you cannot use the sine rule. $a^2 = b^2 + c^2 - 2bc\cos A$ finds a side from two sides and the angle between them. It becomes Pythagoras when that angle is $90°$. Rearranged, $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$ finds an angle from three sides. A negative result means the angle is obtuse, with no second case to consider.

The common mistake with this rule is grouping. Only $2bc$ is multiplied by $\cos A$, and $b^2 + c^2$ is not.

Together, the sine rule and the cosine rule can find any missing side or angle of a triangle. The last lesson of the module covers the area of a triangle, and how to choose between the three methods for the information you are given.
