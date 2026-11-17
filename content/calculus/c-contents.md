# What the standard contains

---

This page is the whole of Level 2 calculus in one list: three modules, seven topics, and the skills inside each topic. This page does not teach anything. A textbook shows one page at a time, and never states how much there is altogether. This page shows the size of the subject before you start.

Read the list now, and again before the exam. In between, treat it as a checklist and mark the skills you can already do.

---

## Module A—Differentiation

Differentiating a function to find its gradient function.

**A1—The gradient function.** The rule for finding the gradient function, and what the result tells you.

- the gradient of a curve at a point, as the gradient of the tangent there
- the rule: multiply by the power, lower the power by one
- coefficients, terms and constants, each handled in turn
- the two notations, $f'(x)$ and $\dfrac{dy}{dx}$
- expanding a product before differentiating
- the gradient at a point, substituted into $f'$, never into $f$
- the point with a given gradient, found by solving $f'(x) = \textsf{gradient}$

**A2—Tangents.** The equation of a tangent line, from a point on the curve and the gradient there.

- the point from $f$, the gradient from $f'$
- writing the equation of the line with $y - y_1 = m(x - x_1)$, which is not on the formulae sheet
- the point given as coordinates, or as an $x$-value only
- a tangent parallel to a given line
- a horizontal tangent, leading into Module B

**A3—The graph of the gradient function.** Drawing the gradient function as a graph, instead of calculating it.

- climbing, falling or flat, as a positive, negative or zero gradient
- turning points of $f$ placed over the crossings of $f'$
- the degree dropping by one, so you know the shape in advance
- sketching $f'$ from the graph of $f$
- sketching $f$ from the graph of $f'$, through a given point
- what a gradient graph cannot show: how high the curve sits

---

## Module B—Turning points

Finding where the gradient is zero, and the largest or smallest value there.

**B1—Turning points and their nature.** Finding them, and saying which kind each is.

- solving $f'(x) = 0$, with heights from $f$
- the words turning point and stationary point
- the nature, justified three accepted ways: second derivative, test points, annotated sketch
- the second derivative, $f''(x)$, and its sign
- increasing and decreasing regions, answered as intervals
- an unknown coefficient recovered from a fact about the curve

**B2—Maximum and minimum problems.** Writing the polynomial from the situation, before you differentiate.

- the quantity from the shape's formula, the constraint from the situation
- substituting to one variable, then expanding
- rejecting, in writing, answers that are impossible in the situation
- answering with the quantity the question asked for, in its units
- proving the maximum or minimum, with a conclusion in the words of the question
- a power in the denominator, rewritten in index form

---

## Module C—Anti-differentiation

Using the rule for differentiating in reverse.

**C1—Anti-differentiation.** Finding a function from its gradient function, with an unknown constant $c$.

- anti-differentiation and integration as two names for one operation
- the reverse rule: raise the power by one, divide by the new power
- the constant $c$: each value of $c$ gives the same curve at a different height
- checking the answer by differentiating it
- the constant found from a given point
- the constant found from a feature: the value at a maximum or minimum

**C2—Rates of change and kinematics.** Differentiating and anti-differentiating for motion and other rates of change.

- the derivative as a rate, in any pair of variables
- explaining what a rate means in the words and units of the model, including whether it is positive or negative
- the ladder: distance, velocity, acceleration
- at rest, constant speed and from rest, written as equations
- climbing the ladder, finding the constant and writing the evidence at each step
- where two moving objects meet, found by setting their distances equal

---

## How much of it is really new

All seven topics use the same two ideas.

The first idea is a function and its gradient function, connected by one rule that you can use in either direction. In Module A you calculate the gradient function, and in A3 you draw it. In C1 you use the rule in reverse. In C2 the function and its gradient function are distance and velocity. That is five of the seven topics.

```figure
caption: One function and its gradient function, in four topics
steps:
  - math: f(x) = x^2 \quad\longrightarrow\quad f'(x) = 2x
    note: In A1 you differentiate with the rule.
  - graph:
      domain: [-2.5, 2.5]
      curves:
        - poly: [1, 0, 0]
          color: a
          label: f
        - poly: [2, 0]
          color: b
          label: f ′
    note: In A3 you draw one graph from the other, in either direction.
  - math: f'(x) = 2x \quad\longrightarrow\quad f(x) = x^2 + c
    note: In C1 you anti-differentiate. Anti-differentiating gives an unknown constant $c$.
  - math: s(t) = t^2 \quad\longrightarrow\quad v(t) = 2t
    note: In C2 you differentiate in the same way, with distance $s$ and velocity $v$ as functions of time $t$.
```

The second idea is the turning point: where the gradient is zero, the quantity is at its largest or smallest. In B1 you find turning points and decide which kind each one is. In B2 you first write the function from a situation, and then find its turning point. In A2 you use the function and its gradient function at a single point to write the equation of the tangent.

Besides those two ideas, you need algebra, which is the work of the algebra standard. Start at Module A and follow the list in order. Every later topic depends on an earlier one, and none of them depends on a topic further down the list.
