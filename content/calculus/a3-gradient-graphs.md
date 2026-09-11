# A3—The graph of the gradient function

---

The first lesson found $f'$ by formula. This lesson finds it by eye. You are given the graph of a function and asked to draw the graph of its gradient function. Or you are given the graph of a gradient function and asked to draw the shape of the function it came from. One of the two appears in every recent paper. No equation is printed, so you read everything from the shape of the graph.

---

## Reading a graph for its gradient

At each point on the curve, ask one question: is the curve climbing, falling, or flat? The answer tells you where the gradient function sits at that same $x$: above the $x$-axis, below it, or on it.

- Where $f$ **climbs**, its gradient is positive, so $f'$ sits **above** the $x$-axis.
- Where $f$ **falls**, its gradient is negative, so $f'$ sits **below** the $x$-axis.
- Where $f$ is **flat** — at a turning point — its gradient is zero, so $f'$ **crosses** the $x$-axis.

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
    note: "This curve climbs until $x = 1$, is flat there, and falls after it. That is all you need to draw the gradient function."
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

**Every turning point of $f$ sits directly above or below a crossing of $f'$ with the $x$-axis.** Mark those crossings first. Then ask the climbing-or-falling question between them, and draw the rest of the sketch from the answers.

You know the shape of the answer before you read anything, because differentiating lowers every power by one. The gradient function of a parabola is a straight line. The gradient function of a cubic is a parabola, and the gradient function of a quartic is a cubic. If the curve in front of you is a cubic and your sketch of $f'$ is not a parabola, one of the two is wrong.

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
    note: "Turning points at $x = -1$ and $x = 1$. Between them the curve falls. Outside them it climbs. That is all the sketch of $f'$ needs."
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
    note: "The gradient function of a cubic is a parabola. It crosses the axis at $x = -1$ and $x = 1$. It is below the axis between the crossings, where $f$ falls, and above the axis outside them, where $f$ climbs."
```

The marker uses a checklist with three items: the shape, the sign, and the crossings. Nothing else is marked. For the 2025 sketch the schedule awards Achieved for two of the three, *"cubic shape, positive, roots correct"*, and Merit for all three. The height of a peak or the depth of a dip in a sketch of $f'$ does not earn marks, because the $y$-axis has no scale.

The drawing itself is part of the answer. Draw the curve in one smooth stroke, not in many light strokes. The 2024 report says what a parabola must look like to earn the mark: *"symmetrical, nicely shaped, and with no feathering (a single curve)"*. Label the axes, and label the $x$-value of each crossing. The 2023 report says that candidates who could sketch *"would often lack labelling of their axes"*, and the crossings are one of the three things marked.

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
        note: "The gradient function of a parabola is a straight line. It crosses the axis under the turning point, at $x = 0$. It is negative while $f$ falls and positive while $f$ climbs."
  - ask: The graph of $f(x)$ is shown, with a turning point at $x = 1$. Sketch the graph of the gradient function $f'(x)$.
    graph:
      domain: [-2, 4]
      curves:
        - poly: [1, -2, 0]
          label: f
      points:
        - at: [1, -1]
      xticks: [1]
    grade: achieved
    working:
      - graph:
          domain: [-2, 4]
          curves:
            - poly: [2, -2]
              color: b
              label: f ′
          points:
            - at: [1, 0]
              color: b
          xticks: [1]
        note: "The gradient function of a parabola is a straight line. It crosses the axis under the turning point, which is at $x = 1$ here rather than at the origin."
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
        note: "The gradient function of a cubic is a parabola, and it crosses the axis under each turning point. $f$ climbs, falls, then climbs, so $f'$ is positive, negative, then positive. The parabola opens upwards."
  - ask: The graph of $f(x)$ is shown, with turning points at $x = -2$ and $x = 0$. Sketch the graph of the gradient function $f'(x)$.
    graph:
      domain: [-3.5, 1.5]
      curves:
        - poly: [1, 3, 0, 0]
          label: f
      points:
        - at: [-2, 4]
        - at: [0, 0]
      xticks: [-2, 0]
    grade: merit
    working:
      - graph:
          domain: [-3.5, 1.5]
          curves:
            - poly: [3, 6, 0]
              color: b
              label: f ′
          points:
            - at: [-2, 0]
              color: b
            - at: [0, 0]
              color: b
          xticks: [-2, 0]
        note: "The gradient function of a cubic is a parabola, and it crosses the axis under each turning point. $f$ climbs, falls, then climbs, so $f'$ is positive, negative, then positive. The parabola opens upwards."
```

---

## Recovering the function from its gradient graph

The reverse reading uses the same three answers in the other direction. Where $f'$ is above the axis, draw $f$ climbing. Where $f'$ is below the axis, draw $f$ falling. Where $f'$ crosses the axis, $f$ turns. The degree goes up by one: given a straight line, draw a parabola, and given a parabola, draw a cubic.

The direction of the crossing tells you which way the turn goes. Where $f'$ passes from below the axis to above it, $f$ stops falling and starts climbing, so the turn is a minimum. Where $f'$ passes from above the axis to below it, the turn is a maximum.

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
    note: "The given graph is the gradient function. It is negative before $x = 2$, zero there, and positive after it. So the function falls, turns, then climbs."
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
    note: "A straight-line gradient function means $f$ is a parabola. The crossing from negative to positive makes the turn a minimum, at $x = 2$."
```

One thing the gradient graph cannot show is how high the function sits. Raising the whole curve does not change the gradient at any point, so every vertical position of the same shape is a correct answer.

```figure
caption: What the gradient graph cannot show
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
    note: "Three curves, one gradient function. The gradient graph does not separate them, so a question that wants one particular curve has to give a point on it."
```

A question that needs one particular curve gives a point for the curve to pass through. The 2024 paper gives the gradient graph and asks for the function *which passes through $(1, 0)$*. Finding that function exactly, rather than sketching its shape, is anti-differentiation, and a later lesson does it by formula. Here the point only sets the height of the sketch.

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
        note: "A straight-line gradient function makes $f$ a parabola. $f'$ crosses from negative to positive at $x = 2$, so the parabola has its minimum there. Slide the sketch up or down until it passes through $(0, 1)$."
  - ask: The graph of the gradient function $f'(x)$ is shown. The function passes through $(0, 2)$. Sketch the graph of $f(x)$.
    graph:
      domain: [-4, 2]
      curves:
        - poly: [1, 1]
          color: b
          label: f ′
      points:
        - at: [-1, 0]
          color: b
      xticks: [-1]
    grade: merit
    working:
      - graph:
          domain: [-4, 2]
          curves:
            - poly: [0.5, 1, 2]
              color: a
              label: f
          points:
            - at: [0, 2]
            - at: [-1, 1.5]
              color: a
              guides: true
          xticks: [-1]
        note: "A straight-line gradient function makes $f$ a parabola. $f'$ crosses from negative to positive at $x = -1$, so the parabola has its minimum there. Slide the sketch up or down until it passes through $(0, 2)$."
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and each one's band is what the marker would award for doing it well.

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
        note: "This cubic falls, climbs, then falls, so its parabola is negative, positive, then negative, and opens downwards. The crossings sit under the turning points, the shape is one degree down, and the sign matches the climb."
  - ask: The graph of $f(x)$ is shown, with turning points at $x = -2$ and $x = 2$. Sketch the graph of $f'(x)$.
    graph:
      domain: [-3.2, 3.2]
      curves:
        - poly: [-1, 0, 12, 0]
          label: f
      points:
        - at: [-2, -16]
        - at: [2, 16]
      xticks: [-2, 2]
    grade: merit
    working:
      - graph:
          domain: [-3.2, 3.2]
          curves:
            - poly: [-3, 0, 12]
              color: b
              label: f ′
          points:
            - at: [-2, 0]
              color: b
            - at: [2, 0]
              color: b
          xticks: [-2, 2]
        note: "This cubic falls, climbs, then falls, so its parabola is negative, positive, then negative, and opens downwards. The crossings sit under the turning points, the shape is one degree down, and the sign matches the climb."
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
        note: "The gradient function of a quartic is a cubic, and three turning points mean three crossings. Falling, climbing, falling, climbing becomes negative, positive, negative, positive: below, above, below, above the axis in turn."
  - ask: The graph of $f(x)$ is shown, with turning points at $x = -2$, $x = 0$ and $x = 2$. Sketch the graph of $f'(x)$.
    graph:
      domain: [-2.8, 2.8]
      curves:
        - poly: [1, 0, -8, 0, 0]
          label: f
      points:
        - at: [-2, -16]
        - at: [0, 0]
        - at: [2, -16]
      xticks: [-2, 2]
    grade: merit
    working:
      - graph:
          domain: [-2.8, 2.8]
          curves:
            - poly: [4, 0, -16, 0]
              color: b
              label: f ′
          points:
            - at: [-2, 0]
              color: b
            - at: [0, 0]
              color: b
            - at: [2, 0]
              color: b
          xticks: [-2, 2]
        note: "The gradient function of a quartic is a cubic, and three turning points mean three crossings. Falling, climbing, falling, climbing becomes negative, positive, negative, positive: below, above, below, above the axis in turn."
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
        note: "A parabola as the gradient function makes $f$ a cubic. At $x = -1$, $f'$ crosses from positive to negative, so $f$ has a maximum there. At $x = 1$ it crosses back, so $f$ has a minimum there. Any vertical position is correct, because no point was given. That is why the word *possible* is in the question."
  - ask: The graph of the gradient function $f'(x)$ is shown. Sketch a possible graph of $f(x)$, marking the $x$-values of its turning points.
    graph:
      domain: [-4, 4]
      curves:
        - poly: [1, 0, -4]
          color: b
          label: f ′
      points:
        - at: [-2, 0]
          color: b
        - at: [2, 0]
          color: b
      xticks: [-2, 2]
    grade: excellence
    working:
      - graph:
          domain: [-4, 4]
          curves:
            - poly: [0.333333, 0, -4, 0]
              color: a
              label: f
          points:
            - at: [-2, 5.333333]
              color: a
            - at: [2, -5.333333]
              color: a
          xticks: [-2, 2]
        note: "A parabola as the gradient function makes $f$ a cubic. At $x = -2$, $f'$ crosses from positive to negative, so $f$ has a maximum there. At $x = 2$ it crosses back, so $f$ has a minimum there. Any vertical position is correct, because no point was given."
```

---

## Summary

One question does all the work in both directions: is the curve climbing, falling, or flat? Climbing puts $f'$ above the axis, and falling puts it below. A turning point of $f$ sits exactly above or below a crossing of $f'$.

You know the shape in advance. Differentiating drops the degree by one, so sketching $f'$ moves one shape down the sequence line, parabola, cubic. Sketching $f$ moves one shape up.

Three things earn the marks — shape, sign, and crossings in the right places. Heights do not, because a sketch has no scale.

A gradient graph cannot show how high the curve sits, so recovering $f$ needs a given point to set the height. Module C turns that into a formula, anti-differentiation, where the constant $c$ stands for the same freedom to move up or down. Before that, Module B takes the crossings of $f'$, the turning points, as its own subject.
