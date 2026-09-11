# B1—Arcs and sectors

---

Module A solved triangles: three sides, three angles, any shape at all. The two methods left on the standard's list apply to a different figure. A **sector** is the slice of a circle cut out by two radii and the arc between them. This lesson finds the length of the arc of a sector and the area of the sector. Both come from one fraction of the whole circle.

---

## Arc length

A sector is a fraction of its circle, and the angle at the centre gives the fraction. An angle of $\theta$ degrees is $\dfrac{\theta}{360}$ of the full turn, because $360°$ is one complete revolution.

The circumference of a whole circle is $2\pi r$, unchanged from Year 11. An arc is that same fraction of the circumference, so its length is $\dfrac{\theta}{360} \times 2\pi r$. Te Kura's assessment booklet for this standard prints the same relationship as one fraction, $\dfrac{\theta \times 2\pi r}{360}$. The two forms are algebraically identical, with the parts grouped differently on the page.

```figure
caption: Arc length
steps:
  - diagram:
      points:
        O: [0, 0]
        A: [60, 0]
        B: [46, 38.6]
      edges:
        - from: O
          to: A
          label: 15 m
        - from: O
          to: B
          label: 15 m
      angles:
        - at: O
          from: A
          to: B
          label: 40°
      arcs:
        - center: O
          from: A
          to: B
    note: The radius and the angle at the centre are given. The arc is the $\dfrac{40}{360}$ fraction of the full circumference.
  - math: L = \dfrac{40}{360} \times 2\pi(15)
    note: "Substitute into the formula: the fraction of the circle, times the full circumference."
  - math: L = 10.5 \;\textsf{m}
    note: The arc is $10.5$ m long. At Achieved, a number on its own is not enough. The answer has to say what it is a length of.
```

```practice
caption: arc length
questions:
  - ask: Find the length of the arc.
    diagram:
      points:
        O: [0, 0]
        A: [55, 0]
        B: [17, 52.3]
      edges:
        - from: O
          to: A
          label: 10 m
        - from: O
          to: B
          label: 10 m
      angles:
        - at: O
          from: A
          to: B
          label: 72°
      arcs:
        - center: O
          from: A
          to: B
    grade: achieved
    working:
      - math: L = \dfrac{72}{360} \times 2\pi(10)
      - math: L = 12.6 \;\textsf{m}
        note: The arc is $12.6$ m long.
  - ask: A sector has a radius of $18$ m and an angle of $50°$ at the centre. Find the length of its arc.
    grade: achieved
    working:
      - math: L = \dfrac{50}{360} \times 2\pi(18)
      - math: L = 15.7 \;\textsf{m}
        note: The arc is $15.7$ m long.
```

---

## Sector area

The area of a whole circle is $\pi r^2$. The area of a sector is the same $\dfrac{\theta}{360}$ fraction of it, so $\textsf{Area} = \dfrac{\theta}{360} \times \pi r^2$. It is the same idea as the previous section, applied to the area instead of the circumference.

```figure
caption: Sector area
steps:
  - diagram:
      points:
        O: [0, 0]
        A: [55, 0]
        B: [-18.8, 51.7]
      edges:
        - from: O
          to: A
          label: 9 cm
        - from: O
          to: B
          label: 9 cm
      angles:
        - at: O
          from: A
          to: B
          label: 110°
      arcs:
        - center: O
          from: A
          to: B
    note: The same two facts as before, a radius and the angle at the centre. Now the fraction is taken of the area.
  - math: \textsf{Area} = \dfrac{110}{360} \times \pi(9)^2
    note: Square the radius before you take the fraction, because the fraction scales the area formula, not the radius.
  - math: \textsf{Area} = 77.8 \;\textsf{cm}^2
```

```practice
caption: sector area
questions:
  - ask: Find the area of the sector.
    diagram:
      points:
        O: [0, 0]
        A: [55, 0]
        B: [-47.6, 27.5]
      edges:
        - from: O
          to: A
          label: 6 m
        - from: O
          to: B
          label: 6 m
      angles:
        - at: O
          from: A
          to: B
          label: 150°
      arcs:
        - center: O
          from: A
          to: B
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{150}{360} \times \pi(6)^2
      - math: \textsf{Area} = 47.1 \;\textsf{m}^2
  - ask: A sector has a radius of $14$ cm and an angle of $45°$ at the centre. Find its area.
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{45}{360} \times \pi(14)^2
      - math: \textsf{Area} = 77.0 \;\textsf{cm}^2
```

---

## The perimeter of a sector

The boundary of a sector is not the arc alone. Three pieces close the shape: the arc, and the two straight radii on either side of it. The perimeter is all three added together. The trap is stopping at the arc, because the arc is the only piece the two formulae above ever compute. The two radii are easy to forget precisely because they need no formula at all, only the value already given.

```figure
caption: The perimeter of a sector
steps:
  - diagram:
      points:
        O: [0, 0]
        A: [55, 0]
        B: [-4.8, 54.8]
      edges:
        - from: O
          to: A
          label: 8 m
        - from: O
          to: B
          label: 8 m
      angles:
        - at: O
          from: A
          to: B
          label: 95°
      arcs:
        - center: O
          from: A
          to: B
    note: A radius and the angle at the centre, as before.
  - math: L = \dfrac{95}{360} \times 2\pi(8) = 13.3 \;\textsf{m}
    note: The arc alone. A question asking only for arc length would stop here.
  - math: \textsf{Perimeter} = 13.3 + 8 + 8 = 29.3 \;\textsf{m}
    note: "The perimeter adds the two radii the diagram already gave: three parts, not one."
```

Units are part of the answer, not a label added afterward. The TKI task *Signing our name* asks for the length of black paint needed to edge a sector-shaped company logo. Its instructions describe the logo as "edged in black," where "the black outline goes around the outer edges of the sector". That outline is the arc and both straight sides. That task's assessment schedule accepts "any correct rounding/truncation" at every grade. But it requires "some evidence of correct units" even at Achieved, and at Merit and Excellence it states that "correct units are required".

```practice
caption: perimeter
questions:
  - ask: Find the perimeter of the sector.
    diagram:
      points:
        O: [0, 0]
        A: [55, 0]
        B: [-42.1, 35.4]
      edges:
        - from: O
          to: A
          label: 5 cm
        - from: O
          to: B
          label: 5 cm
      angles:
        - at: O
          from: A
          to: B
          label: 140°
      arcs:
        - center: O
          from: A
          to: B
    grade: achieved
    working:
      - math: L = \dfrac{140}{360} \times 2\pi(5) = 12.2 \;\textsf{cm}
        note: The arc first, on its own.
      - math: \textsf{Perimeter} = 12.2 + 5 + 5 = 22.2 \;\textsf{cm}
        note: Both radii added, with the unit carried through.
  - ask: A sector has a radius of $11$ m and an angle of $65°$ at the centre. Find its perimeter.
    grade: achieved
    working:
      - math: L = \dfrac{65}{360} \times 2\pi(11) = 12.5 \;\textsf{m}
        note: The arc first, on its own.
      - math: \textsf{Perimeter} = 12.5 + 11 + 11 = 34.5 \;\textsf{m}
        note: Both radii added, with the unit carried through.
```

---

## Working backwards

Both formulae run the other way. Given the arc length and the radius, you can find the fraction $\dfrac{\theta}{360}$ and multiply it by $360$ to reach $\theta$. Given the area and the angle, the same rearrangement isolates $r^2$, and a square root finishes it. Te Kura's farmer's field task lays a quad bike track around the paddock as "an arc of a circle." It gives neither the radius of the track nor the angle it turns through directly. A task built this way needs the formula run backward before the forward formula has anything to compute with.

```figure
caption: Finding the angle from the arc
steps:
  - diagram:
      points:
        O: [0, 0]
        A: [55, 0]
        B: [-18.6, 51.7]
      edges:
        - from: O
          to: A
          label: 12 m
        - from: O
          to: B
          label: 12 m
      angles:
        - at: O
          from: A
          to: B
          label: θ
      arcs:
        - center: O
          from: A
          to: B
          label: 23.0 m
    note: The radius and the arc are given this time. The angle is wanted.
  - math: L = \dfrac{\theta}{360} \times 2\pi r \quad\Rightarrow\quad \dfrac{\theta}{360} = \dfrac{23.0}{2\pi(12)}
    note: The same formula, rearranged so that the fraction sits on its own.
  - math: \theta = \dfrac{23.0}{2\pi(12)} \times 360 = 109.8°
```

```practice
caption: working backwards
questions:
  - ask: A sector has a radius of $9$ m, and its arc is $14.8$ m long. Find the size of the angle $\theta$ at the centre.
    grade: merit
    working:
      - math: L = \dfrac{\theta}{360} \times 2\pi r \quad\Rightarrow\quad \dfrac{\theta}{360} = \dfrac{14.8}{2\pi(9)}
      - math: \theta = \dfrac{14.8}{2\pi(9)} \times 360 = 94.2°
  - ask: A sector has a radius of $16$ m, and its arc is $20.5$ m long. Find the size of the angle $\theta$ at the centre.
    grade: merit
    working:
      - math: L = \dfrac{\theta}{360} \times 2\pi r \quad\Rightarrow\quad \dfrac{\theta}{360} = \dfrac{20.5}{2\pi(16)}
      - math: \theta = \dfrac{20.5}{2\pi(16)} \times 360 = 73.4°
  - ask: A sector has an angle of $72°$ at the centre and an area of $141.4$ cm². Find its radius $r$.
    grade: merit
    working:
      - math: 141.4 = \dfrac{72}{360} \times \pi r^2
        note: The angle is given this time, so it goes in directly and $r^2$ is isolated.
      - math: r^2 = \dfrac{141.4 \times 360}{72\pi}
      - math: r = 15.0 \;\textsf{cm}
        note: The square root undoes the square last, once $r^2$ stands alone.
  - ask: A sector has an angle of $54°$ at the centre and an area of $47.1$ cm². Find its radius $r$.
    grade: merit
    working:
      - math: 47.1 = \dfrac{54}{360} \times \pi r^2
        note: The angle is given this time, so it goes in directly and $r^2$ is isolated.
      - math: r^2 = \dfrac{47.1 \times 360}{54\pi}
      - math: r = 10.0 \;\textsf{cm}
```

---

## The segment

A chord is a straight line joining two points on the circle. A chord cuts a sector into two pieces: the triangle formed by the chord and the two radii, and the curved piece beyond it. The curved piece is called the **segment**. The triangle has two sides equal to the radius and the angle $\theta$ between them. Its area is the area-of-a-triangle formula with both sides set to $r$: $\dfrac{1}{2}(r)(r)\sin\theta = \dfrac{1}{2}r^2\sin\theta$. The segment is what remains of the sector once that triangle is removed.

```figure
caption: The segment
steps:
  - diagram:
      points:
        O: [0, 0]
        A: [60, 0]
        B: [20.5, 56.4]
      edges:
        - from: O
          to: A
          label: 10 cm
        - from: O
          to: B
          label: 10 cm
        - from: A
          to: B
          color: a
          dashed: true
      angles:
        - at: O
          from: A
          to: B
          label: 70°
      arcs:
        - center: O
          from: A
          to: B
    note: The chord $AB$ splits the sector into the triangle $OAB$ and the segment beyond it.
  - math: \textsf{Sector} = \dfrac{70}{360} \times \pi(10)^2 = 61.1 \;\textsf{cm}^2
  - math: \textsf{Triangle} = \dfrac{1}{2}(10)(10)\sin 70° = 47.0 \;\textsf{cm}^2
  - math: \textsf{Segment} = 61.1 - 47.0 = 14.1 \;\textsf{cm}^2
    note: Two areas found by two different methods, then one subtracted from the other. This is the first genuine chain in this module.
```

```practice
caption: the segment
questions:
  - ask: The chord $AB$ divides the sector into a triangle and a segment. Find the area of the segment, the part beyond the chord.
    diagram:
      points:
        O: [0, 0]
        A: [60, 0]
        B: [10.4, 59.1]
      edges:
        - from: O
          to: A
          label: 12 cm
        - from: O
          to: B
          label: 12 cm
        - from: A
          to: B
          color: a
          dashed: true
      angles:
        - at: O
          from: A
          to: B
          label: 80°
      arcs:
        - center: O
          from: A
          to: B
    grade: merit
    working:
      - math: \textsf{Sector} = \dfrac{80}{360} \times \pi(12)^2 = 100.5 \;\textsf{cm}^2
      - math: \textsf{Triangle} = \dfrac{1}{2}(12)(12)\sin 80° = 70.9 \;\textsf{cm}^2
      - math: \textsf{Segment} = 100.5 - 70.9 = 29.6 \;\textsf{cm}^2
  - ask: A sector of radius $9$ cm and angle $60°$ is cut by the chord joining the two ends of its arc, into a triangle and a segment. Find the area of the segment, the part beyond the chord.
    grade: merit
    working:
      - math: \textsf{Sector} = \dfrac{60}{360} \times \pi(9)^2 = 42.4 \;\textsf{cm}^2
      - math: \textsf{Triangle} = \dfrac{1}{2}(9)(9)\sin 60° = 35.1 \;\textsf{cm}^2
      - math: \textsf{Segment} = 42.4 - 35.1 = 7.3 \;\textsf{cm}^2
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: A garden sprinkler sits at the centre of a circular lawn and oscillates through an angle of $80°$ each pass, watering out to a radius of $6$ m. Find the length of the arc the water reaches.
    grade: achieved
    working:
      - math: L = \dfrac{80}{360} \times 2\pi(6)
      - math: L = 8.4 \;\textsf{m}
        note: The arc watered is $8.4$ m long.
  - ask: A garden sprinkler sits at the centre of a circular lawn and oscillates through an angle of $100°$ each pass, watering out to a radius of $9$ m. Find the length of the arc the water reaches.
    grade: achieved
    working:
      - math: L = \dfrac{100}{360} \times 2\pi(9)
      - math: L = 15.7 \;\textsf{m}
        note: The arc watered is $15.7$ m long.
  - ask: A round pizza of radius $20$ cm is cut into slices, each with an angle of $36°$ at the centre. Find the area of one slice.
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{36}{360} \times \pi(20)^2
      - math: \textsf{Area} = 125.7 \;\textsf{cm}^2
  - ask: A round pizza of radius $16$ cm is cut into slices, each with an angle of $45°$ at the centre. Find the area of one slice.
    grade: achieved
    working:
      - math: \textsf{Area} = \dfrac{45}{360} \times \pi(16)^2
      - math: \textsf{Area} = 100.5 \;\textsf{cm}^2
  - ask: A company's logo is a sector of radius $1.2$ m and angle $130°$, edged in black paint. The company has $4.5$ m of black paint. Find the length of edging the logo needs, and state whether the paint is enough.
    grade: merit
    working:
      - math: L = \dfrac{130}{360} \times 2\pi(1.2) = 2.7 \;\textsf{m}
        note: The arc, before the two radii are added.
      - math: \textsf{Perimeter} = 2.7 + 1.2 + 1.2 = 5.1 \;\textsf{m}
        note: The logo needs $5.1$ m of edging. That is more than the $4.5$ m of paint the company has, so the paint is not enough.
  - ask: A company's logo is a sector of radius $0.9$ m and angle $150°$, edged in black paint. The company has $4.5$ m of black paint. Find the length of edging the logo needs, and state whether the paint is enough.
    grade: merit
    working:
      - math: L = \dfrac{150}{360} \times 2\pi(0.9) = 2.4 \;\textsf{m}
        note: The arc, before the two radii are added.
      - math: \textsf{Perimeter} = 2.4 + 0.9 + 0.9 = 4.2 \;\textsf{m}
        note: The logo needs $4.2$ m of edging. That is within the $4.5$ m of paint the company has, so the paint is enough, with $0.3$ m to spare.
  - ask: A farm has a quad-bike track laid out as an arc of a circle, of radius $30$ m. The track sweeps out an arc $47.1$ m long before rejoining the boundary fence. Find the angle the track turns through, at the centre of the circle it follows.
    grade: merit
    working:
      - math: L = \dfrac{\theta}{360} \times 2\pi r \quad\Rightarrow\quad \dfrac{\theta}{360} = \dfrac{47.1}{2\pi(30)}
        note: The radius and the arc are both known this time, so the angle is what the rearranged formula finds.
      - math: \theta = \dfrac{47.1}{2\pi(30)} \times 360 = 90.0°
        note: The track turns through $90.0°$.
  - ask: A farm has a quad-bike track laid out as an arc of a circle, of radius $25$ m. The track sweeps out an arc $39.3$ m long before rejoining the boundary fence. Find the angle the track turns through, at the centre of the circle it follows.
    grade: merit
    working:
      - math: L = \dfrac{\theta}{360} \times 2\pi r \quad\Rightarrow\quad \dfrac{\theta}{360} = \dfrac{39.3}{2\pi(25)}
        note: The radius and the arc are both known this time, so the angle is what the rearranged formula finds.
      - math: \theta = \dfrac{39.3}{2\pi(25)} \times 360 = 90.1°
        note: The track turns through $90.1°$.
  - ask: A stained-glass panel is shaped as a sector of radius $40$ cm and angle $100°$. A straight board replaces the piece below the chord, and glass fills the curved section above it. Find the area of glass needed.
    grade: excellence
    working:
      - math: \textsf{Sector} = \dfrac{100}{360} \times \pi(40)^2 = 1396.26 \;\textsf{cm}^2
        note: The strategy is the decision that makes this a segment problem rather than a sector problem. The straight edge of the board is the chord, so the area of the sector is only the starting point.
      - math: \textsf{Triangle} = \dfrac{1}{2}(40)(40)\sin 100° = 787.85 \;\textsf{cm}^2
      - math: \textsf{Glass needed} = 1396.26 - 787.85 = 608.4 \;\textsf{cm}^2
        note: The panel needs $608.4$ cm$^2$ of glass. The answer is stated in the terms the question asked for, with its unit.
  - ask: A stained-glass panel is shaped as a sector of radius $30$ cm and angle $130°$. A straight board replaces the piece below the chord, and glass fills the curved section above it. Find the area of glass needed.
    grade: excellence
    working:
      - math: \textsf{Sector} = \dfrac{130}{360} \times \pi(30)^2 = 1021.0 \;\textsf{cm}^2
        note: The straight edge of the board is the chord, so the area of the sector is only the starting point.
      - math: \textsf{Triangle} = \dfrac{1}{2}(30)(30)\sin 130° = 344.7 \;\textsf{cm}^2
      - math: \textsf{Glass needed} = 1021.0 - 344.7 = 676.3 \;\textsf{cm}^2
        note: The panel needs $676.3$ cm$^2$ of glass.
```

---

## Summary

A sector is a fraction of its circle, $\dfrac{\theta}{360}$, set by the angle at the centre. Applied to the circumference, that fraction gives arc length. Applied to the area, it gives sector area. It is one idea, used twice. The perimeter of a sector is the arc plus both radii, not the arc alone. Both formulae rearrange to run backward, from a given arc length or area to the angle or the radius that produced it. A chord cuts a sector into a triangle and a segment. The area of the segment is the area of the sector with the area of the triangle subtracted. That is the sector formula, the triangle formula, and a subtraction, chained.

With the sine rule, the cosine rule, the area of a triangle, arc length and sector area, you now have every method the standard names. Module C is where the standard is actually assessed. A real figure rarely arrives as a labelled triangle or a labelled sector. The work is finding which of these five methods each piece of it needs, then chaining the results together.
