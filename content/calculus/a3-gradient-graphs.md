# A3—The graph of the gradient function

---

The first lesson found $f'$ by formula. This lesson finds it by eye: given the graph of a function, draw the graph of its gradient function—and given the graph of a gradient function, recover the shape of the function it came from. One of the two appears in every recent paper, with no equation printed; the graph is all you get, so the reading has to be done from shape alone.

---

## Reading a graph for its gradient

Stand at a point on the curve and ask one question: climbing, falling, or flat? The answer places the gradient function above, below, or on the $x$-axis at that same $x$.

- Where $f$ **climbs**, its gradient is positive, so $f'$ sits **above** the $x$-axis.
- Where $f$ **falls**, its gradient is negative, so $f'$ sits **below** the $x$-axis.
- Where $f$ is **flat**—at a turning point—its gradient is zero, so $f'$ **crosses** the $x$-axis.

```figure
caption: The three answers
steps:
  - graph:
      domain: [-2, 4]
      curves:
        - poly: [-1, 2, 3]
          color: a
          label: f
      points:
        - at: [1, 4]
          color: a
          guides: true
      xticks: [1]
    note: "This curve climbs until $x = 1$, is flat there, and falls afterwards. That sentence is the whole input; the gradient function is drawn from it."
  - graph:
      domain: [-2, 4]
      curves:
        - poly: [-1, 2, 3]
          color: a
          label: f
        - poly: [-2, 2]
          color: b
          label: f ′
      points:
        - at: [1, 0]
          color: b
      xticks: [1]
    note: "$\\cb{f'}$ is above the axis while $\\ca{f}$ climbs, crosses zero under the turning point, and is below the axis while $\\ca{f}$ falls."
```

The turning points carry the alignment: **every turning point of $f$ sits directly above or below an $x$-intercept of $f'$**. Mark those crossings first, and the rest of the sketch is filled in by the climbing-or-falling question between them.

The shape of the answer is known before any reading starts, because differentiating lowers every power by one. A parabola's gradient function is a straight line; a cubic's is a parabola; a quartic's is a cubic. If the curve in front of you is a cubic and your sketch of $f'$ is not a parabola, one of the two is wrong.

```figure
caption: The degree drops by one
steps:
  - math: |
      \begin{array}{c|c}
      f & f' \\[2pt]
      \hline \\[-8pt]
      \textsf{line} & \textsf{horizontal line} \\[2pt]
      \textsf{parabola} & \textsf{line} \\[2pt]
      \textsf{cubic} & \textsf{parabola} \\[2pt]
      \textsf{quartic} & \textsf{cubic}
      \end{array}
```

---

## Sketching the gradient function

A cubic has two turning points, so its gradient function crosses the axis twice.

```figure
caption: From f to f ′
steps:
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [1, 0, -3, 0]
          color: a
          label: f
      points:
        - at: [-1, 2]
          color: a
        - at: [1, -2]
          color: a
      xticks: [-1, 1]
    note: "Turning points at $x = -1$ and $x = 1$. Between them the curve falls; outside them it climbs. That is everything the sketch of $f'$ needs."
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [3, 0, -3]
          color: b
          label: f ′
      points:
        - at: [-1, 0]
          color: b
        - at: [1, 0]
          color: b
      xticks: [-1, 1]
    note: "A cubic's gradient function is a parabola. It crosses at $x = -1$ and $x = 1$, dips below the axis between the crossings where $f$ falls, and is positive outside them where $f$ climbs."
```

The marking is by checklist. For the 2025 sketch the schedule awards Achieved for two of three—*"cubic shape, positive, roots correct"*—and Merit for all three. Shape, sign, crossings: the three answers to the three-zone question, and nothing else is being marked. The height of a peak or the depth of a dip in a sketch of $f'$ carries no marks, because no scale is printed on the $y$-axis.

The drawing itself is part of the answer. The 2024 report is specific about what a parabola must look like to be awarded: *"symmetrical, nicely shaped, and with no feathering (a single curve)"*—one smooth stroke, not a bundle of tentative ones. The 2023 report adds that candidates who could sketch *"would often lack labelling of their axes"*; label the axes and the $x$-values of the crossings, because the crossings are two of the three things being marked.

```practice
caption: sketching f ′
questions:
  - ask: The graph of $f(x)$ is shown. Sketch the graph of the gradient function $f'(x)$.
    graph:
      domain: [-3, 3]
      curves:
        - poly: [1, 0, -4]
          label: f
      points:
        - at: [0, -4]
      xticks: [0]
    grade: achieved
    working:
      - graph:
          domain: [-3, 3]
          curves:
            - poly: [2, 0]
              color: b
              label: f ′
          points:
            - at: [0, 0]
              color: b
        note: "A parabola's gradient function is a straight line. It crosses under the turning point at $x = 0$: negative while $f$ falls, positive while $f$ climbs."
  - ask: The graph of $f(x)$ is shown, with turning points at $x = 0$ and $x = 2$. Sketch the graph of the gradient function $f'(x)$.
    graph:
      domain: [-1.5, 3.5]
      curves:
        - poly: [1, -3, 0, 0]
          label: f
      points:
        - at: [0, 0]
        - at: [2, -4]
      xticks: [0, 2]
    grade: merit
    from: "2024"
    working:
      - graph:
          domain: [-1.5, 3.5]
          curves:
            - poly: [3, -6, 0]
              color: b
              label: f ′
          points:
            - at: [0, 0]
              color: b
            - at: [2, 0]
              color: b
          xticks: [0, 2]
        note: "A cubic's gradient function is a parabola, crossing under each turning point. $f$ climbs, falls, climbs—so $f'$ runs positive, negative, positive, and the parabola opens upwards."
```

---

## Recovering the function from its gradient graph

The reverse reading uses the same three zones, walked in the other direction: where $f'$ is above the axis, draw $f$ climbing; where below, falling; where $f'$ crosses, $f$ turns. The degree goes up by one—handed a straight line, draw a parabola; handed a parabola, draw a cubic.

Which way the turn goes is read off the crossing. Where $f'$ passes from below the axis to above it, $f$ stops falling and starts climbing—a minimum. From above to below, a maximum.

```figure
caption: From f ′ back to f
steps:
  - graph:
      domain: [-1, 5]
      curves:
        - poly: [1, -2]
          color: b
          label: f ′
      points:
        - at: [2, 0]
          color: b
      xticks: [2]
    note: "The given graph is the gradient function. It is negative before $x = 2$, zero at it, positive after—so the function falls, turns, climbs."
  - graph:
      domain: [-1, 5]
      curves:
        - poly: [0.5, -2, 1]
          color: a
          label: f
      points:
        - at: [2, -1]
          color: a
      xticks: [2]
    note: "A straight-line gradient function means $f$ is a parabola, and the crossing from negative to positive makes the turn a minimum, at $x = 2$."
```

One thing the gradient graph cannot say is how high the function sits. Raising the whole curve changes no gradient anywhere, so every vertical position of the same shape is a correct answer.

```figure
caption: What the gradient graph cannot decide
steps:
  - graph:
      domain: [-1, 5]
      curves:
        - poly: [0.5, -2, 3]
          dashed: true
        - poly: [0.5, -2, 1]
          color: a
        - poly: [0.5, -2, -1]
          dashed: true
    note: "Three curves, one gradient function. Nothing on the gradient graph separates them, so a question that wants one particular curve must pin it with a point."
```

A question that needs one particular curve supplies a point for it to pass through—the 2024 paper gives the gradient graph and asks for the function *which passes through $(1, 0)$*. Recovering that function exactly, rather than sketching its shape, is anti-differentiation, and Module C does it by formula. Here the point only anchors the sketch vertically.

```practice
caption: sketching f
questions:
  - ask: The graph of the gradient function $f'(x)$ is shown. The function passes through $(0, 1)$. Sketch the graph of $f(x)$.
    graph:
      domain: [-1, 5]
      curves:
        - poly: [1, -2]
          color: b
          label: f ′
      points:
        - at: [2, 0]
          color: b
      xticks: [2]
    grade: merit
    from: "2024"
    working:
      - graph:
          domain: [-1, 5]
          curves:
            - poly: [0.5, -2, 1]
              color: a
              label: f
          points:
            - at: [0, 1]
            - at: [2, -1]
              color: a
              guides: true
          xticks: [2]
        note: "A straight-line gradient function makes $f$ a parabola. $f'$ crosses from negative to positive at $x = 2$, so the parabola has its minimum there, and the sketch is slid vertically until it passes through $(0, 1)$."
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: The graph of $f(x)$ is shown, with turning points at $x = -1$ and $x = 1$. Sketch the graph of $f'(x)$.
    graph:
      domain: [-2.2, 2.2]
      curves:
        - poly: [-1, 0, 3, 1]
          label: f
      points:
        - at: [-1, -1]
        - at: [1, 3]
      xticks: [-1, 1]
    grade: merit
    working:
      - graph:
          domain: [-2.2, 2.2]
          curves:
            - poly: [-3, 0, 3]
              color: b
              label: f ′
          points:
            - at: [-1, 0]
              color: b
            - at: [1, 0]
              color: b
          xticks: [-1, 1]
        note: "This cubic falls, climbs, falls—so its parabola runs negative, positive, negative, and opens downwards. Crossings under the turning points, shape one degree down, sign matching the climb."
  - ask: The graph of $f(x)$ is shown, with turning points at $x = -1$, $x = 0$ and $x = 1$. Sketch the graph of $f'(x)$.
    graph:
      domain: [-1.6, 1.6]
      curves:
        - poly: [1, 0, -2, 0, 0]
          label: f
      points:
        - at: [-1, -1]
        - at: [0, 0]
        - at: [1, -1]
      xticks: [-1, 1]
    grade: merit
    from: "2025"
    working:
      - graph:
          domain: [-1.6, 1.6]
          curves:
            - poly: [4, 0, -4, 0]
              color: b
              label: f ′
          points:
            - at: [-1, 0]
              color: b
            - at: [0, 0]
              color: b
            - at: [1, 0]
              color: b
          xticks: [-1, 1]
        note: "A quartic's gradient function is a cubic, and three turning points mean three crossings. Falling, climbing, falling, climbing reads as negative, positive, negative, positive—below, above, below, above the axis in turn."
  - ask: The graph of the gradient function $f'(x)$ is shown. Sketch a possible graph of $f(x)$, marking the $x$-values of its turning points.
    graph:
      domain: [-3, 3]
      curves:
        - poly: [1, 0, -1]
          color: b
          label: f ′
      points:
        - at: [-1, 0]
          color: b
        - at: [1, 0]
          color: b
      xticks: [-1, 1]
    grade: excellence
    working:
      - graph:
          domain: [-3, 3]
          curves:
            - poly: [0.333333, 0, -1, 0]
              color: a
              label: f
          points:
            - at: [-1, 0.666667]
              color: a
            - at: [1, -0.666667]
              color: a
          xticks: [-1, 1]
        note: "A parabola as the gradient function makes $f$ a cubic. At $x = -1$, $f'$ crosses from positive to negative, so $f$ has a maximum; at $x = 1$ it crosses back, a minimum. Any vertical position is correct, because no point was given—the word *possible* is in the question for that reason."
```

---

## Summary

One question does all the work in both directions: climbing, falling, or flat? Climbing puts $f'$ above the axis, falling puts it below, and a turning point of $f$ sits exactly above or below a crossing of $f'$.

The shape is known in advance: differentiating drops the degree by one, so the answer is one shape down the line–parabola–cubic ladder when sketching $f'$, and one shape up when sketching $f$.

Three things earn the marks—shape, sign, and crossings in the right places. Heights do not, because a sketch has no scale.

Reading $f'$ back to $f$ meets the one thing a gradient graph cannot say: how high the curve sits. A supplied point pins it. Module C turns that observation into a formula—anti-differentiation, with its constant $c$ standing for exactly the vertical freedom seen here. Before that, Module B takes the crossings of $f'$, the turning points, and makes them the answer to a question of their own.
