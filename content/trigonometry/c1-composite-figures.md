# C1—Composite figures

---

A quadrilateral has no rule of its own. Neither does a house-shaped plot, a company sign, or a paddock with one corner removed. Every rule so far applies to a triangle or a sector: the sine rule, the cosine rule, the area formula, arc length and sector area. Most figures in an assessment task are neither a triangle nor a sector. NZQA's clarification for this standard gives the example directly: the calculations must have a purpose, "for example determining a total area that will be subdivided." A **composite figure** is a shape made from simpler pieces, such as triangles and sectors. To apply a rule to a composite figure, cut it into pieces that each have a rule. Where to cut is the first decision you make.

---

## Splitting a quadrilateral with a diagonal

A diagonal drawn across a quadrilateral splits it into two triangles that share that diagonal as a side. Where two sides and the angle between them are known in one of the two triangles, use the cosine rule to find the diagonal.

```figure
caption: A block of land, split by a fence line
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [8, 46]
        C: [50, 50]
        D: [42, -8]
      edges:
        - from: A
          to: B
          label: 41 m
        - from: B
          to: C
          label: 38 m
        - from: C
          to: D
          label: 27 m
        - from: D
          to: A
          label: 34 m
      angles:
        - at: D
          from: A
          to: C
          label: 72°
    note: "This is an irregular block of land with corners $A$, $B$, $C$ and $D$. A new fence line is planned from $A$ to $C$. There is no rule for the area of this shape as a whole."
  - diagram:
      points:
        A: [0, 0]
        B: [8, 46]
        C: [50, 50]
        D: [42, -8]
      edges:
        - from: A
          to: B
          label: 41 m
        - from: B
          to: C
          label: 38 m
        - from: C
          to: D
          label: 27 m
        - from: D
          to: A
          label: 34 m
        - from: A
          to: C
          color: a
          dashed: true
      angles:
        - at: D
          from: A
          to: C
          label: 72°
    note: "The fence line $AC$ splits the block into two triangles. In triangle $ACD$, two sides and the angle between them are known. Triangle $ABC$ will share the side $AC$ once it is found."
  - math: AC^2 = 34^2 + 27^2 - 2(34)(27)\cos 72°
    note: "Use the cosine rule, because triangle $ACD$ gives two sides and the angle between them. You cannot use the sine rule here, because you do not know any side together with its opposite angle."
  - math: AC^2 \approx 1317.6 \qquad AC \approx 36.3\ \textsf{m}
    note: "Round the length for the answer, but keep the squared value, $1317.6$, for the next triangle. Squaring the rounded $36.3$ instead would carry a small error forward."
  - math: \textsf{Area of } \triangle ACD = \tfrac12(34)(27)\sin 72° \approx 436.5\ \textsf{m}^2
    note: "The area formula also uses two sides and the angle between them. So you find the area from the same given information as the diagonal."
```

The area formula and the cosine rule both use the same given information: two sides and the angle between them. That is why triangle $ACD$ gives both without any extra work. Triangle $ABC$ does not have two known sides and the angle between them. It has two known sides, $AB$ and $BC$, and a third side, $AC$, which you have just found.

```practice
caption: splitting a quadrilateral
questions:
  - ask: A field is bounded by quadrilateral $ABCD$. The diagonal $BD$ splits it into two triangles. In triangle $ABD$, $AB = 18$ m, $AD = 25$ m, and the angle at $A$ is $70°$. Calculate the length of the diagonal $BD$.
    grade: achieved
    working:
      - math: BD^2 = 18^2 + 25^2 - 2(18)(25)\cos 70°
        note: "The triangle has two known sides and the angle between them, so use the cosine rule."
      - math: BD^2 \approx 641.2
      - math: BD \approx 25.3\ \textsf{m}
        note: "The diagonal $BD$ is $25.3$ m long. The answer states what the number represents."
  - ask: A field is bounded by quadrilateral $ABCD$. The diagonal $BD$ splits it into two triangles. In triangle $ABD$, $AB = 21$ m, $AD = 23$ m, and the angle at $A$ is $74°$. Calculate the length of the diagonal $BD$.
    grade: achieved
    working:
      - math: BD^2 = 21^2 + 23^2 - 2(21)(23)\cos 74°
        note: "The triangle has two known sides and the angle between them, so use the cosine rule."
      - math: BD^2 \approx 703.7
      - math: BD \approx 26.5\ \textsf{m}
        note: "The diagonal $BD$ is $26.5$ m long."
```

---

## Carrying the shared side forward

The two triangles share the diagonal that you have just found. A value that you calculate in one triangle becomes a known value in the other. With $AC$ known, triangle $ABC$ has three known sides, so you can use the cosine rule to find an angle.

```figure
caption: The second triangle, drawn on its own
steps:
  - diagram:
      points:
        A: [0, 0]
        B: [41, 4]
        C: [30, 34]
      edges:
        - from: A
          to: B
          label: 41 m
        - from: B
          to: C
          label: 38 m
        - from: C
          to: A
          label: 36.3 m
          color: a
    note: "This is triangle $ABC$ drawn by itself, with all three sides now known. To find its area, you first need the angle at $B$."
  - math: \cos B = \dfrac{41^2 + 38^2 - 1317.6}{2(41)(38)}
    note: "Use the unrounded $AC^2 = 1317.6$ from the first triangle, not $36.3^2$."
  - math: B \approx 54.5°
  - math: \textsf{Area of } \triangle ABC = \tfrac12(41)(38)\sin 54.5° \approx 634.6\ \textsf{m}^2
  - math: \textsf{Total area of } ABCD \approx 436.5 + 634.6 \approx 1071.1\ \textsf{m}^2
    note: "The two triangle areas add to give the area of the whole block."
```

In a chain like this, an error in one step carries into every later step. That is true of a wrong method as well as a rounding error. The sine rule connects an angle and the side opposite it through the sine of the angle, not through the angle itself. Halving $60°$ to $30°$ does not halve the side opposite, because $\sin 30°$ is not half of $\sin 60°$. A side is not proportional to an angle in any of the five methods of this standard. The exemplar for this standard names this error directly, at its High Not Achieved boundary. The student "incorrectly thought that halving the angle will result in the length of the opposite side being halved."

```practice
caption: carrying the diagonal into the second triangle
questions:
  - ask: A field is bounded by quadrilateral $ABCD$, split by the diagonal $AC$. In triangle $ACD$, $AD = 30$ m, $DC = 22$ m, and the angle at $D$ is $65°$. In triangle $ABC$, $AB = 27$ m and $BC = 33$ m. Calculate the total area of $ABCD$.
    grade: merit
    working:
      - math: AC^2 = 30^2 + 22^2 - 2(30)(22)\cos 65°
        note: "Find the diagonal from the triangle that has two known sides and the angle between them."
      - math: AC^2 \approx 826.1 \qquad AC \approx 28.7\ \textsf{m}
      - math: \textsf{Area of } \triangle ACD = \tfrac12(30)(22)\sin 65° \approx 299.1\ \textsf{m}^2
      - math: \cos B = \dfrac{27^2 + 33^2 - 826.1}{2(27)(33)}
        note: "$826.1$ is the unrounded $AC^2$, carried across from the first triangle."
      - math: B \approx 56.2°
      - math: \textsf{Area of } \triangle ABC = \tfrac12(27)(33)\sin 56.2° \approx 370.1\ \textsf{m}^2
      - math: \textsf{Total area of } ABCD \approx 299.1 + 370.1 \approx 669.2\ \textsf{m}^2
        note: "The total area is what the question asked for, stated with its unit."
  - ask: A field is bounded by quadrilateral $ABCD$, split by the diagonal $AC$. In triangle $ACD$, $AD = 28$ m, $DC = 19$ m, and the angle at $D$ is $58°$. In triangle $ABC$, $AB = 24$ m and $BC = 31$ m. Calculate the total area of $ABCD$.
    grade: merit
    working:
      - math: AC^2 = 28^2 + 19^2 - 2(28)(19)\cos 58°
        note: "Find the diagonal from the triangle that has two known sides and the angle between them."
      - math: AC^2 \approx 581.2 \qquad AC \approx 24.1\ \textsf{m}
      - math: \textsf{Area of } \triangle ACD = \tfrac12(28)(19)\sin 58° \approx 225.6\ \textsf{m}^2
      - math: \cos B = \dfrac{24^2 + 31^2 - 581.2}{2(24)(31)}
        note: "$581.2$ is the unrounded $AC^2$, carried across from the first triangle."
      - math: B \approx 50.0°
      - math: \textsf{Area of } \triangle ABC = \tfrac12(24)(31)\sin 50.0° \approx 285.1\ \textsf{m}^2
      - math: \textsf{Total area of } ABCD \approx 225.6 + 285.1 \approx 510.7\ \textsf{m}^2
        note: "The total area is what the question asked for, stated with its unit."
```

---

## A composite built from a sector

A diagonal is not the only way to cut a shape. Where part of the figure is curved, the piece you cut is a sector rather than a triangle. The same idea applies: find each piece with the rule that fits it, then combine the pieces.

```figure
caption: A sign made from a sector and a triangle
steps:
  - diagram:
      points:
        O: [0, 0]
        A: [12, 0]
        B: [2.1, 11.8]
        E: [9, 0]
        F: [1.6, 8.9]
      edges:
        - from: O
          to: A
          label: 12 cm
        - from: O
          to: B
          label: 12 cm
        - from: O
          to: E
          color: a
          label: 9 cm
        - from: O
          to: F
          color: a
          label: 7 cm
        - from: E
          to: F
          color: a
      arcs:
        - center: O
          from: A
          to: B
      angles:
        - at: O
          from: A
          to: B
          label: 80°
    note: "A company sign is a red sector, radius $12$ cm, edged in black. A blue triangular emblem is cut from it, with $E$ nine centimetres from the centre along one straight edge and $F$ seven centimetres along the other."
  - math: \textsf{Sector area} = \dfrac{80}{360}\times\pi\times12^2 \approx 100.5\ \textsf{cm}^2
  - math: \textsf{Emblem area} = \tfrac12(9)(7)\sin 80° \approx 31.0\ \textsf{cm}^2
    note: "The emblem is a triangle with two known sides and the $80°$ between them. Use the area formula, because the emblem is not itself a fraction of the circle."
  - math: \textsf{Red paint area} = 100.5 - 31.0 = 69.5\ \textsf{cm}^2
    note: "The red area is what remains of the sector once the emblem is removed."
  - math: \textsf{Black edging} = \dfrac{80}{360}\times2\pi\times12 \;+\; 2(12) \approx 40.8\ \textsf{cm}
    note: "The 2.4D task states the rule for this edge directly: \"the black outline goes around the outer edges of the sector.\" That is the arc and the two straight sides. Forgetting the two radii is the easiest way to order too little trim."
```

```practice
caption: a composite with a sector
questions:
  - ask: A logo is a red sector of radius $15$ cm and angle $100°$, with a blue triangular emblem cut from it. The emblem has sides of $11$ cm and $8$ cm from the centre, with the sector's own $100°$ between them. Calculate the area of red paint needed, and the length of black trim needed to edge the outer boundary of the sector.
    grade: merit
    working:
      - math: \textsf{Sector area} = \dfrac{100}{360}\times\pi\times15^2 \approx 196.3\ \textsf{cm}^2
      - math: \textsf{Emblem area} = \tfrac12(11)(8)\sin 100° \approx 43.3\ \textsf{cm}^2
      - math: \textsf{Red paint area} = 196.3 - 43.3 \approx 153.0\ \textsf{cm}^2
        note: "The area asked for is the sector's area minus the emblem, not the sector alone."
      - math: \textsf{Trim} = \dfrac{100}{360}\times2\pi\times15 \;+\; 2(15) \approx 56.2\ \textsf{cm}
        note: "The trim follows the arc and the two straight sides, not the emblem's edges inside it."
  - ask: A logo is a red sector of radius $10$ cm and angle $95°$, with a blue triangular emblem cut from it. The emblem has sides of $7$ cm and $5$ cm from the centre, with the sector's own $95°$ between them. Calculate the area of red paint needed, and the length of black trim needed to edge the outer boundary of the sector.
    grade: merit
    working:
      - math: \textsf{Sector area} = \dfrac{95}{360}\times\pi\times10^2 \approx 82.9\ \textsf{cm}^2
      - math: \textsf{Emblem area} = \tfrac12(7)(5)\sin 95° \approx 17.4\ \textsf{cm}^2
      - math: \textsf{Red paint area} = 82.9 - 17.4 \approx 65.5\ \textsf{cm}^2
        note: "The area asked for is the sector's area minus the emblem, not the sector alone."
      - math: \textsf{Trim} = \dfrac{95}{360}\times2\pi\times10 \;+\; 2(10) \approx 36.6\ \textsf{cm}
        note: "The trim follows the arc and the two straight sides, not the emblem's edges inside it."
```

---

## Writing the solution up

The same chain of working earns different grades depending on how it is written, not on which numbers appear in it. NZQA's clarification is specific about what changes at each grade.

At Achieved, "the result of a numerical calculation only is insufficient, working is expected and students need to indicate what the calculated answer represents." A line reading "$AC = 36.3$" is a number on its own, without a unit or a statement of what it is. The repaired form is *the new fence line $AC$ is $36.3$ m long*. That is the same calculation with the answer named. The earlier worked example names its answer at every step.

At Merit, "students need to clearly indicate what they are calculating and their solutions need to be linked to the context". So at each stage of the chain, write what you are finding before you find it. Give the final value with its unit, and with a sentence that connects it to what the question asked. The 2.4A assessment schedule also says this about rounding: "any appropriate and correct rounding is acceptable (including truncation) and does not need to be stated." The number of decimal places is not being marked. The statement of what the number is, and the units it carries, are marked.

At Excellence, "the response needs to be clearly communicated with correct mathematical statements, and students need to explain any decisions they make in the solution of the problem." In this standard's tasks, the decision to explain is where you cut the figure, and why that cut meets the condition in the question.

---

## Devising a subdivision

Some problems do not ask for a total. They ask for a **subdivision**: a way to divide the land into sections that meet a condition. For example, each section must be at least a minimum area, and not every section may be a triangle. The task does not give instructions for finding a subdivision. The clarification says that this is deliberate. Where a task has "a series of instructions that lead students through a step or a sequence of steps towards the solution", students are likely to lose the opportunity to show all levels of thinking. Your work is to find the cut.

The work has the same steps each time. First calculate the whole area. Then compare it with the requirement. Then choose one subdivision, and check each section against the requirement directly.

Take the block from earlier, with total area $1071.1$ m², split by $AC$ into $\triangle ACD$ ($436.5$ m²) and $\triangle ABC$ ($634.6$ m²). Suppose the block must now be sold as three sections, each at least $150$ m², and not every section may be a triangle.

Triangle $ACD$ can be one section on its own. Its area of $436.5$ m² is well above the minimum. Triangle $ABC$ must be split into two sections. Mark the midpoint $M$ of $AB$ and the midpoint $N$ of $BC$, and join $M$ to $N$. Because $BM$ is half of $BA$ and $BN$ is half of $BC$, the small triangle $BMN$ has area

$$\tfrac12 \cdot BM \cdot BN \cdot \sin B = \tfrac14\left(\tfrac12 \cdot BA \cdot BC \cdot \sin B\right) = \tfrac14 \times 634.6 \approx 158.6\ \textsf{m}^2,$$

one quarter of $\triangle ABC$, because halving both sides that meet at $B$ quarters the area between them. The remaining piece, quadrilateral $AMNC$, has the other three-quarters of the area: about $475.9$ m². The three sections are $436.5$ m², $158.6$ m² and $475.9$ m². Every one of them is above $150$ m², and $AMNC$ is not a triangle, so the conditions are met.

This is the kind of answer that the exemplar shows at Excellence: a strategy "devised to investigate the situation," with a concrete subdivision "not all of which are triangles." Its commentary at the Excellence boundary also names what separates a secure Excellence from a borderline one. That is "finding and stating clearly the dimensions of the four subsections," not just the areas. A subdivision is not complete when you have the areas that meet the condition. Also give the lengths that someone would need to mark the sections on the ground.

---

## Practice

The questions are in grade order. At Achieved, you use one method correctly. At Merit, you chain methods and link them to the context. At Excellence, you devise a strategy to meet a condition.

```practice
questions:
  - ask: A park is bounded by quadrilateral $PQRS$. The diagonal $PR$ splits it into two triangles. In triangle $PQR$, $PQ = 16$ m, $QR = 21$ m, and the angle at $Q$ is $72°$. Calculate the length of the diagonal $PR$.
    grade: achieved
    working:
      - math: PR^2 = 16^2 + 21^2 - 2(16)(21)\cos 72°
      - math: PR^2 \approx 489.3
      - math: PR \approx 22.1\ \textsf{m}
        note: "The diagonal $PR$ is $22.1$ m long."
  - ask: A park is bounded by quadrilateral $PQRS$. The diagonal $PR$ splits it into two triangles. In triangle $PQR$, $PQ = 19$ m, $QR = 26$ m, and the angle at $Q$ is $63°$. Calculate the length of the diagonal $PR$.
    grade: achieved
    working:
      - math: PR^2 = 19^2 + 26^2 - 2(19)(26)\cos 63°
      - math: PR^2 \approx 588.5
      - math: PR \approx 24.3\ \textsf{m}
        note: "The diagonal $PR$ is $24.3$ m long."
  - ask: A courtyard is bounded by quadrilateral $ABCD$, split by the diagonal $AC$. In triangle $ACD$, $AD = 32$ m, $DC = 24$ m, and the angle at $D$ is $55°$. In triangle $ABC$, $AB = 29$ m and $BC = 35$ m. Calculate the total area of the courtyard, in square metres.
    grade: merit
    working:
      - math: AC^2 = 32^2 + 24^2 - 2(32)(24)\cos 55°
      - math: AC^2 \approx 718.9 \qquad AC \approx 26.8\ \textsf{m}
      - math: \textsf{Area of } \triangle ACD = \tfrac12(32)(24)\sin 55° \approx 314.6\ \textsf{m}^2
      - math: \cos B = \dfrac{29^2 + 35^2 - 718.9}{2(29)(35)}
        note: "$718.9$ is the unrounded $AC^2$."
      - math: B \approx 48.4°
      - math: \textsf{Area of } \triangle ABC = \tfrac12(29)(35)\sin 48.4° \approx 379.7\ \textsf{m}^2
      - math: \textsf{Total area} \approx 314.55 + 379.68 \approx 694.2\ \textsf{m}^2
        note: "The total area of the courtyard is $694.2$ m². The answer is linked back to what the question asked for."
  - ask: A courtyard is bounded by quadrilateral $ABCD$, split by the diagonal $AC$. In triangle $ACD$, $AD = 26$ m, $DC = 20$ m, and the angle at $D$ is $48°$. In triangle $ABC$, $AB = 25$ m and $BC = 30$ m. Calculate the total area of the courtyard, in square metres.
    grade: merit
    working:
      - math: AC^2 = 26^2 + 20^2 - 2(26)(20)\cos 48°
      - math: AC^2 \approx 380.1 \qquad AC \approx 19.5\ \textsf{m}
      - math: \textsf{Area of } \triangle ACD = \tfrac12(26)(20)\sin 48° \approx 193.2\ \textsf{m}^2
      - math: \cos B = \dfrac{25^2 + 30^2 - 380.1}{2(25)(30)}
        note: "$380.1$ is the unrounded $AC^2$."
      - math: B \approx 40.2°
      - math: \textsf{Area of } \triangle ABC = \tfrac12(25)(30)\sin 40.2° \approx 242.3\ \textsf{m}^2
      - math: \textsf{Total area} \approx 193.2 + 242.3 \approx 435.5\ \textsf{m}^2
        note: "The total area of the courtyard is $435.5$ m²."
  - ask: A logo is a red sector of radius $14$ cm and angle $110°$, with a blue emblem cut from it made of two sides of $10$ cm and $7$ cm from the centre, at the sector's own $110°$. Calculate the red paint area and the black trim needed around the outer boundary of the sector.
    grade: merit
    working:
      - math: \textsf{Sector area} = \dfrac{110}{360}\times\pi\times14^2 \approx 188.1\ \textsf{cm}^2
      - math: \textsf{Emblem area} = \tfrac12(10)(7)\sin 110° \approx 32.9\ \textsf{cm}^2
      - math: \textsf{Red paint area} = 188.15 - 32.89 \approx 155.3\ \textsf{cm}^2
      - math: \textsf{Trim} = \dfrac{110}{360}\times2\pi\times14 \;+\; 2(14) \approx 54.9\ \textsf{cm}
        note: "The trim is the arc plus both straight sides. The emblem does not add to it, because the emblem sits inside the sector rather than on its boundary."
  - ask: A logo is a red sector of radius $9$ cm and angle $85°$, with a blue emblem cut from it made of two sides of $6$ cm and $4$ cm from the centre, at the sector's own $85°$. Calculate the red paint area and the black trim needed around the outer boundary of the sector.
    grade: merit
    working:
      - math: \textsf{Sector area} = \dfrac{85}{360}\times\pi\times9^2 \approx 60.1\ \textsf{cm}^2
      - math: \textsf{Emblem area} = \tfrac12(6)(4)\sin 85° \approx 12.0\ \textsf{cm}^2
      - math: \textsf{Red paint area} = 60.1 - 12.0 \approx 48.1\ \textsf{cm}^2
      - math: \textsf{Trim} = \dfrac{85}{360}\times2\pi\times9 \;+\; 2(9) \approx 31.4\ \textsf{cm}
        note: "The trim is the arc plus both straight sides."
  - ask: A reserve is bounded by quadrilateral $EFGH$, split by the diagonal $EG$. In triangle $EHG$, $EH = 26$ m, $HG = 19$ m, and the angle at $H$ is $64°$. In triangle $EFG$, $EF = 24$ m and $FG = 30$ m. The reserve is to be sold as three sections, each of area at least $65$ m², and not every section may be a triangle. Devise a subdivision that meets both conditions, showing that it does.
    grade: excellence
    working:
      - math: EG^2 = 26^2 + 19^2 - 2(26)(19)\cos 64°
        note: "Find the diagonal from the triangle with two known sides and the angle between them."
      - math: EG^2 \approx 603.9 \qquad EG \approx 24.6\ \textsf{m}
      - math: \textsf{Area of } \triangle EHG = \tfrac12(26)(19)\sin 64° \approx 222.0\ \textsf{m}^2
      - math: \cos F = \dfrac{24^2 + 30^2 - 603.9}{2(24)(30)}
        note: "$603.9$ is the unrounded $EG^2$, carried from the first triangle."
      - math: F \approx 52.7°
      - math: \textsf{Area of } \triangle EFG = \tfrac12(24)(30)\sin 52.7° \approx 286.5\ \textsf{m}^2
      - math: \textsf{Total area} \approx 222.0 + 286.5 \approx 508.5\ \textsf{m}^2
        note: "This is the area of the whole reserve, before you choose a subdivision."
      - math: "\\triangle EHG \\textsf{ alone stands as one section: } 222.0\\ \\textsf{m}^2 \\textsf{, above the minimum.}"
        note: "The first section does not need any more work. It already meets the condition."
      - math: "M, N \\textsf{ the midpoints of } EF \\textsf{ and } FG \\quad\\Rightarrow\\quad \\textsf{area } \\triangle FMN = \\tfrac14(286.5) \\approx 71.6\\ \\textsf{m}^2"
        note: "Halving both sides that meet at $F$ quarters the area between them, because the area formula multiplies those two sides together."
      - math: \textsf{area } EMNG = 286.5 - 71.6 \approx 214.9\ \textsf{m}^2
        note: "The remaining piece is a quadrilateral, not a triangle. That meets the condition that not every section is triangular."
      - math: "\\therefore\\ 222.0\\ \\textsf{m}^2,\\ 71.6\\ \\textsf{m}^2,\\ 214.9\\ \\textsf{m}^2 \\;\\textsf{— three sections, each above } 65\\ \\textsf{m}^2, \\textsf{one of them not a triangle}"
        note: "The strategy is stated, followed, and checked against both conditions the question set. That is the kind of write-up that earns Excellence."
  - ask: A reserve is bounded by quadrilateral $EFGH$, split by the diagonal $EG$. In triangle $EHG$, $EH = 23$ m, $HG = 17$ m, and the angle at $H$ is $70°$. In triangle $EFG$, $EF = 21$ m and $FG = 27$ m. The reserve is to be sold as three sections, each of area at least $55$ m², and not every section may be a triangle. Devise a subdivision that meets both conditions, showing that it does.
    grade: excellence
    working:
      - math: EG^2 = 23^2 + 17^2 - 2(23)(17)\cos 70°
        note: "Find the diagonal from the triangle with two known sides and the angle between them."
      - math: EG^2 \approx 550.5 \qquad EG \approx 23.5\ \textsf{m}
      - math: \textsf{Area of } \triangle EHG = \tfrac12(23)(17)\sin 70° \approx 183.7\ \textsf{m}^2
      - math: \cos F = \dfrac{21^2 + 27^2 - 550.5}{2(21)(27)}
        note: "$550.5$ is the unrounded $EG^2$, carried from the first triangle."
      - math: F \approx 56.9°
      - math: \textsf{Area of } \triangle EFG = \tfrac12(21)(27)\sin 56.9° \approx 237.5\ \textsf{m}^2
      - math: \textsf{Total area} \approx 183.7 + 237.5 \approx 421.2\ \textsf{m}^2
        note: "This is the area of the whole reserve, before you choose a subdivision."
      - math: "\\triangle EHG \\textsf{ alone stands as one section: } 183.7\\ \\textsf{m}^2 \\textsf{, above the minimum.}"
        note: "The first section does not need any more work. It already meets the condition."
      - math: "M, N \\textsf{ the midpoints of } EF \\textsf{ and } FG \\quad\\Rightarrow\\quad \\textsf{area } \\triangle FMN = \\tfrac14(237.5) \\approx 59.4\\ \\textsf{m}^2"
        note: "Halving both sides that meet at $F$ quarters the area between them."
      - math: \textsf{area } EMNG = 237.5 - 59.4 \approx 178.1\ \textsf{m}^2
        note: "The remaining piece is a quadrilateral, not a triangle."
      - math: "\\therefore\\ 183.7\\ \\textsf{m}^2,\\ 59.4\\ \\textsf{m}^2,\\ 178.1\\ \\textsf{m}^2 \\;\\textsf{— three sections, each above } 55\\ \\textsf{m}^2, \\textsf{one of them not a triangle}"
        note: "The strategy is stated, followed, and checked against both conditions the question set."
```

---

## Summary

Cut a composite figure along a diagonal, or wherever a straight or curved boundary separates two pieces that already have a rule. That boundary separates a triangle from a triangle, or a triangle from a sector. Keep a value from one piece unrounded, and use it as a known value in the next piece. Once each piece is known, add or subtract the pieces.

The mathematics inside each piece is the same as in Modules A and B. What is new is the write-up. An Achieved answer names what its number represents. A Merit answer states what each calculation is finding and links it to the context with units. An Excellence answer explains the decision behind a devised strategy, with correct mathematical statements throughout. A wrong statement about how a side and an angle are related loses credit for the working, even when the arithmetic after it is correct. An example is to halve an angle and expect the opposite side to halve.

Every figure in this lesson has been flat, in two dimensions. A task may instead place its triangles inside a solid, such as a box or a pyramid, or between a mast and the wires that hold it. The methods are the same, but you find the triangles inside the solid. C2 covers figures in three dimensions.
