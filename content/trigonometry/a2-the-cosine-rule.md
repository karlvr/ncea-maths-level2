# A2—The cosine rule

---

The sine rule needs an opposite pair: a side and the angle directly across the triangle from it. Two sides and the angle between them offer no such pair — the angle sits between the two known sides, not opposite either — and three sides offer no angle at all. Both shapes of given information are common, in construction and in surveying, and neither can start the sine rule.

---

## The rule for a side

The cosine rule reaches a side from two sides and the angle between them: $a^2 = b^2 + c^2 - 2bc\cos A$, where $A$ is the angle between sides $b$ and $c$, opposite the side $a$ being found.

At $A = 90°$, $\cos A = 0$ and the last term disappears, leaving $a^2 = b^2 + c^2$ — Pythagoras exactly. Away from a right angle, the term $2bc\cos A$ corrects for it: below $90°$, cosine is positive and the term subtracts, pulling $a$ in tighter than Pythagoras alone would give; above $90°$, cosine is negative and the term adds, stretching $a$ out further.

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
    note: Two sides and the angle between them — no opposite pair, so the sine rule cannot reach $a$.
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
        note: The angle between the two given sides substitutes directly.
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

Three sides give no opposite pair either, so the sine rule cannot start there. The cosine rule rearranges to reach an angle instead: $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$. The rearrangement is printed on the task's formulae list, so it does not have to be produced from memory under pressure — but knowing where it comes from, the earlier rule swapped around and solved for $\cos A$, avoids substitution slips about which side stands alone.

Unlike $\sin^{-1}$, $\cos^{-1}$ tells an obtuse angle from an acute one on its own: cosine is positive for an acute angle and negative for an obtuse one, and $\cos^{-1}$ returns the matching angle either way. There is no second branch to choose between, and no diagram needed to decide it.

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
    note: Three sides, no angle — no opposite pair for the sine rule to use.
  - math: \cos A = \dfrac{8^2 + 7^2 - 13^2}{2(8)(7)}
    note: The side opposite the angle wanted, $a = 13$, is the one that is squared and subtracted.
  - math: \cos A = \dfrac{-56}{112} = -0.5
    note: A negative cosine already says the angle is obtuse, before $\cos^{-1}$ is taken.
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

The rule's most common slip is grouping the wrong way: computing $(b^2 + c^2 - 2bc)\cos A$ instead of $b^2 + c^2 - 2bc\cos A$. Only the $2bc$ term is multiplied by $\cos A$ — $b^2$ and $c^2$ stand outside it, added and subtracted before the cosine ever comes in.

```figure
caption: Only $2bc$ is scaled by $\cos A$
steps:
  - math: a^2 = 8^2 + 6^2 - 2(8)(6)\cos 60°
    note: The same triangle as the opening figure — $b = 8$, $c = 6$, $A = 60°$.
  - math: a^2 = 64 + 36 - 48 = 52 \qquad\checkmark
    note: $2(8)(6)\cos 60° = 96 \times 0.5 = 48$, the product $2bc$, scaled by $\cos A$ on its own.
  - math: a^2 \neq (64 + 36 - 96)(0.5) = 2
    note: The wrong grouping treats $b^2 + c^2 - 2bc$ as one bracket and scales all of it. The result, a side barely longer than $1$, is obviously too short beside sides of $8$ and $6$ — the error is easy to catch once it is checked against the picture.
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well. NZQA's clarification for this standard says that at Merit, *"students need to clearly indicate what they are calculating and their solutions need to be linked to the context"* — the sentence that finishes a context question is not decoration; it is where those marks sit.

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
        - at: A
          from: B
          to: C
          label: 105°
    grade: achieved
    working:
      - math: c^2 = 9^2 + 7^2 - 2(9)(7)\cos 105°
        note: $b^2$ and $c^2$ are added first, then only $2bc$ is scaled by $\cos 105°$ — not the whole bracket.
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
        - at: A
          from: B
          to: C
          label: 100°
    grade: achieved
    working:
      - math: c^2 = 10^2 + 6^2 - 2(10)(6)\cos 100°
      - math: c^2 = 136 - 120\cos 100° = 156.8\ldots
      - math: c = \sqrt{156.8\ldots} = 12.5 \;\textsf{m}
  - ask: A hiking course runs in three straight legs — $11$ km from the start to a turn point, $13$ km from there to a second point, and a final $19$ km leg directly back to the start. Find the angle of the turn, between the first two legs.
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
  - ask: A hiking course runs in three straight legs — $10$ km from the start to a turn point, $12$ km from there to a second point, and a final $17$ km leg directly back to the start. Find the angle of the turn, between the first two legs.
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
        note: The angle between the two given sides, at the hut, is the one that substitutes.
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
  - ask: A delivery drone flies three straight legs to check a farm's paddocks — $150$ m, then $180$ m, then a final $240$ m leg directly back to the start. Find the angle of the turn between the first two legs, and state, with your reasoning, whether that turn is acute or obtuse.
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
        note: The value is negative, so the angle is already known to be obtuse before $\cos^{-1}$ is taken — no separate check is needed the way the sine rule would require one.
      - math: A = \cos^{-1}(-0.05) = 92.9°
        note: An obtuse turn of $92.9°$, only just past a right angle.
  - ask: A delivery drone flies three straight legs to check a farm's paddocks — $140$ m, then $160$ m, then a final $220$ m leg directly back to the start. Find the angle of the turn between the first two legs, and state, with your reasoning, whether that turn is acute or obtuse.
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
        note: Negative, so the angle is obtuse before $\cos^{-1}$ is taken.
      - math: A = \cos^{-1}(-0.0714\ldots) = 94.1°
        note: An obtuse turn of $94.1°$.
```

---

## Summary

The cosine rule covers what the sine rule cannot reach: $a^2 = b^2 + c^2 - 2bc\cos A$ finds a side from two sides and the angle between them, and it reduces to Pythagoras exactly when that angle is $90°$. Rearranged, $\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}$ finds an angle from three sides, and its sign settles acute or obtuse without any second case to consider.

The rule's one common trap is grouping: only $2bc$ is multiplied by $\cos A$, and $b^2 + c^2$ stand outside that product.

Between them, the sine rule and the cosine rule find any missing side or angle a triangle offers. The module's last lesson adds a third quantity, the triangle's area, and the question of which of the three tools fits a given piece of information.
