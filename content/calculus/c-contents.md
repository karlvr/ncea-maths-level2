# What the standard contains

---

This page is the whole of Level 2 calculus in one list: three modules, seven topics, and the skills inside each topic. Nothing is taught here. The purpose is to show you the size of the subject before you start on it, because a textbook shows one page at a time and never states how much there is altogether.

Read the list now, and again before the exam. In between, treat it as a checklist and mark the skills you can already do.

---

## Module A—Differentiation

From a function to its gradient function.

**A1—The gradient function.** The rule, and what its output means.

- the gradient of a curve at a point, as the gradient of the tangent there
- the rule: multiply by the power, lower the power by one
- coefficients, terms and constants, each handled in turn
- the two notations, $f'(x)$ and $\dfrac{dy}{dx}$
- expanding a product before differentiating
- the gradient at a point, substituted into $f'$, never into $f$
- the point with a given gradient, found by solving $f'(x) = \textsf{gradient}$

**A2—Tangents.** A point and a gradient, both taken from the curve.

- the point from $f$, the gradient from $f'$
- assembling the line with $y - y_1 = m(x - x_1)$, which is not on the formulae sheet
- the point given as coordinates, or as an $x$-value only
- a tangent parallel to a given line
- a horizontal tangent, as the door into Module B

**A3—The graph of the gradient function.** The same relationship, drawn instead of computed.

- climbing, falling or flat, read into positive, negative or zero
- turning points of $f$ placed over the crossings of $f'$
- the degree dropping by one, so the shape is known in advance
- sketching $f'$ from the graph of $f$
- sketching $f$ from the graph of $f'$, with a point to anchor it
- what a gradient graph cannot say—how high the curve sits

---

## Module B—Turning points

Where the gradient is zero, and what that place is worth.

**B1—Turning points and their nature.** Finding them, and saying which kind each is.

- solving $f'(x) = 0$, with heights from $f$
- turning point and stationary point as words
- the nature, justified three accepted ways: second derivative, test points, annotated sketch
- the second derivative, $f''(x)$, and its sign
- increasing and decreasing regions, answered as intervals
- an unknown coefficient recovered from a fact about the curve

**B2—Maximum and minimum problems.** The polynomial built before the calculus starts.

- the quantity from the shape's formula, the constraint from the situation
- substituting to one variable, then expanding
- rejecting answers the situation cannot contain, in writing
- answering with the quantity the question asked for, in its units
- proving the maximum or minimum, concluded in the context's words
- a power in the denominator, sent through index form

---

## Module C—Anti-differentiation

The same road, walked backwards.

**C1—Anti-differentiation.** From the gradient function to the family it came from.

- anti-differentiation and integration as two names for one operation
- the reverse rule: raise the power by one, divide by the new power
- the constant $c$, and the family of curves it stands for
- checking by differentiating the answer back
- the constant found from a given point
- the constant found from a feature—the value at a maximum or minimum

**C2—Rates of change and kinematics.** Both directions, in the standard's own context.

- the derivative as a rate, in any pair of variables
- interpreting a rate in the model's words and units, sign included
- the ladder: distance, velocity, acceleration
- at rest, constant speed and from rest, converted to equations
- climbing the ladder, with a constant found and evidenced at each step
- two moving objects, met by setting their distances equal

---

## How much of it is really new

Seven topics, and two ideas underneath all of them.

The first idea is the pair: a function and its gradient function, connected by one rule run in either direction. Module A computes the pair, A3 draws it, C1 reverses it, and C2 renames it distance and velocity. That is five of the seven topics.

```figure
caption: One pair, four questions
steps:
  - math: f(x) = x^2 \quad\longrightarrow\quad f'(x) = 2x
    note: A1 asks you to make this move by rule.
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [1, 0, 0]
          color: a
          label: f
        - poly: [2, 0]
          color: b
          label: f ′
    note: A3 asks you to make the same move by eye, in either direction.
  - math: f'(x) = 2x \quad\longrightarrow\quad f(x) = x^2 + c
    note: C1 asks for the move backwards, and the $c$ is the price of the return trip.
  - math: s(t) = t^2 \quad\longrightarrow\quad v(t) = 2t
    note: C2 asks the same again, wearing kinematics letters.
```

The second idea is the turning point: where the gradient is zero, the quantity is at its largest or smallest. B1 finds and classifies them; B2 builds the function whose turning point is worth finding. The tangent, in A2, is the pair read at a single point.

Two ideas, then—and the algebra to serve them, which is the earlier standard's work. Start at Module A and work down. Every later topic depends on an earlier one, and none of them depends on a topic further down the list.
