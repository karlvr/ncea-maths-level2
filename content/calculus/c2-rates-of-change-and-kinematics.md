# C2—Rates of change and kinematics

---

The standard names one context in its own method list: *rate of change problems (such as kinematics)*. This closing lesson is that context, and it uses everything—differentiating, turning points, anti-differentiating, and the constant—in the one setting where the exam asks for them all together: moving objects and changing quantities.

---

## A gradient is a rate

The gradient function was introduced as steepness, but steepness is itself a rate: how much $y$ changes per unit of $x$. When $x$ is time, $f'$ says how fast the quantity is changing right now—and that reading works for any pair of variables, whatever the letters. If $C(t)$ is a concentration at time $t$, then $C'(t)$ is the rate the concentration is rising, in concentration units per time unit. A negative rate means the quantity is falling, and saying so in words is part of the answer: the 2024 schedule's model answer reads *"132 bacteria per day are dying on day 10"*, not just $-132$.

```figure
caption: A rate, read from a model
steps:
  - math: C(t) = \dfrac{t^3}{12} - 5t^2 + 84t + 40
    note: "A concentration in µg/L, $t$ in minutes. *How fast is it changing at $t = 20$?* is a gradient question."
  - math: C'(t) = \dfrac{t^2}{4} - 10t + 84
    note: "Differentiate as always—the letters changed, the rule did not."
  - math: C'(20) = 100 - 200 + 84 = -16
    note: "Negative, so the concentration is falling: it is decreasing by $16$ µg/L per minute at that moment."
```

The variables need not involve time at all. The 2025 paper asks for the rate of change of a triangle's area *with respect to its height*—the answer is $\dfrac{dA}{dh}$, the same differentiation with $h$ standing where $x$ usually does, and its unit is area per unit of height.

```practice
caption: rates in context
questions:
  - ask: The concentration of a drug in the bloodstream is modelled by the function below, where $C$ is in µg/L and $t$ is in minutes. Show that the rate of change of concentration is $-4$ µg/L per minute when $t = 50$.
    math: C(t) = \dfrac{t^3}{75} - 2t^2 + 96t + 180
    grade: achieved
    from: "2025"
    working:
      - math: C'(t) = \dfrac{t^2}{25} - 4t + 96
      - math: C'(50) = \dfrac{2500}{25} - 200 + 96
      - math: C'(50) = 100 - 200 + 96 = -4
        note: "A *show that* answer ends by stating what was shown: the rate of change at $t = 50$ is $-4$ µg/L per minute."
  - ask: The concentration of a drug in the bloodstream is modelled by the function below, where $C$ is in µg/L and $t$ is in minutes. Show that the rate of change of concentration is $50$ µg/L per minute when $t = 25$.
    math: C(t) = \dfrac{t^3}{75} - 2.5t^2 + 150t + 200
    grade: achieved
    working:
      - math: C'(t) = \dfrac{t^2}{25} - 5t + 150
      - math: C'(25) = \dfrac{625}{25} - 125 + 150
      - math: C'(25) = 25 - 125 + 150 = 50
        note: "A *show that* answer ends by stating what was shown: the rate of change at $t = 25$ is $50$ µg/L per minute."
  - ask: A triangle's base is always three times its perpendicular height $h$. Find the rate of change of its area with respect to its height when the area is $96$ cm$^2$.
    grade: merit
    from: "2025"
    working:
      - math: A = \dfrac{1}{2} \cdot 3h \cdot h = \dfrac{3h^2}{2}
        note: "Form the polynomial first, in the one variable the rate is measured against."
      - math: \dfrac{dA}{dh} = 3h
      - math: \dfrac{3h^2}{2} = 96 \qquad\Rightarrow\qquad h^2 = 64 \qquad h = 8 \;\;\textsf{(reject } -8\textsf{)}
        note: "The question names the moment by the area, so the height at that moment has to be recovered from it."
      - math: \dfrac{dA}{dh} = 3(8) = 24 \;\textsf{cm}^2\textsf{ per cm}
  - ask: A triangle's base is always four times its perpendicular height $h$. Find the rate of change of its area with respect to its height when the area is $128$ cm$^2$.
    grade: merit
    working:
      - math: A = \dfrac{1}{2} \cdot 4h \cdot h = 2h^2
        note: "Form the polynomial first, in the one variable the rate is measured against."
      - math: \dfrac{dA}{dh} = 4h
      - math: 2h^2 = 128 \qquad\Rightarrow\qquad h^2 = 64 \qquad h = 8 \;\;\textsf{(reject } -8\textsf{)}
        note: "The question names the moment by the area, so the height at that moment has to be recovered from it."
      - math: \dfrac{dA}{dh} = 4(8) = 32 \;\textsf{cm}^2\textsf{ per cm}
  - ask: For the drug concentration model below, use calculus to find the time at which the concentration is greatest, and justify that it is a maximum.
    math: C(t) = \dfrac{t^3}{75} - 2t^2 + 96t + 180
    grade: excellence
    from: "2025"
    working:
      - math: C'(t) = \dfrac{t^2}{25} - 4t + 96 = 0
        note: "Greatest means a maximum, and a maximum is a turning point of $C$."
      - math: t^2 - 100t + 2400 = 0
        note: "Multiplying through by $25$ clears the fraction before factorising."
      - math: (t - 40)(t - 60) = 0 \qquad t = 40 \;\textsf{ or }\; t = 60
      - math: C''(t) = \dfrac{2t}{25} - 4 \qquad C''(40) = -0.8 < 0
      - math: \therefore\;\textsf{the concentration is greatest at } t = 40 \textsf{ minutes}
        note: "Two candidates, one justified choice—and the conclusion is given in the words of the model, not just as an $x$-value."
  - ask: For the drug concentration model below, use calculus to find the time at which the concentration is greatest, and justify that it is a maximum.
    math: C(t) = \dfrac{t^3}{75} - 2.5t^2 + 150t + 200
    grade: excellence
    working:
      - math: C'(t) = \dfrac{t^2}{25} - 5t + 150 = 0
        note: "Greatest means a maximum, and a maximum is a turning point of $C$."
      - math: t^2 - 125t + 3750 = 0
        note: "Multiplying through by $25$ clears the fraction before factorising."
      - math: (t - 50)(t - 75) = 0 \qquad t = 50 \;\textsf{ or }\; t = 75
      - math: C''(t) = \dfrac{2t}{25} - 5 \qquad C''(50) = -1 < 0
      - math: \therefore\;\textsf{the concentration is greatest at } t = 50 \textsf{ minutes}
        note: "Two candidates, one justified choice—and the conclusion is given in the words of the model, not just as an $x$-value."
```

---

## The ladder

Kinematics is the special case the standard names. Three functions describe a moving object, and each is the derivative of the one before:

- $s(t)$—**distance** from a fixed point, in metres
- $v(t)$—**velocity**, the rate the distance changes, in m/s
- $a(t)$—**acceleration**, the rate the velocity changes, in m/s²

```figure
caption: The kinematics ladder
steps:
  - math: |
      s(t) \;\; \underset{\textsf{\scriptsize anti-differentiate}}{\overset{\textsf{\scriptsize differentiate}}{\rightleftharpoons}} \;\; v(t) \;\; \underset{\textsf{\scriptsize anti-differentiate}}{\overset{\textsf{\scriptsize differentiate}}{\rightleftharpoons}} \;\; a(t)
    note: "Differentiate to move right, anti-differentiate to move left. Every kinematics question is a walk along this line, and reading the question tells you the direction."
```

The wording of the question says which rung you are on and which one it wants. *How fast* is $v$; *accelerating* is $a$; *how far* is $s$. Three phrases carry equations in disguise: **at rest** means $v = 0$, **constant speed** means $a = 0$, and **starts from rest at the dock** means $v = 0$ and $s = 0$ when $t = 0$.

---

## Down the ladder

Given distance, differentiate once for velocity and again for acceleration.

```figure
caption: Distance to velocity to acceleration
steps:
  - math: s(t) = t^3 - 6t^2 + 9t
    note: "Distance in metres, time in seconds. *When is the object at rest?* is a question about $v$."
  - math: v(t) = s'(t) = 3t^2 - 12t + 9
  - math: 3t^2 - 12t + 9 = 0 \qquad\Rightarrow\qquad 3(t - 1)(t - 3) = 0
    note: "At rest means the velocity is zero—the phrase is an equation."
  - math: t = 1 \;\textsf{ or }\; t = 3
    note: "The object stops twice: momentarily at one second, and again at three."
  - math: a(t) = v'(t) = 6t - 12
    note: "One more step down the ladder gives the acceleration, if the question wants it."
```

```practice
caption: down the ladder
questions:
  - ask: The distance travelled by a particle is given by $s(t) = 2t^3 - 5t^2 + 4t$ metres after $t$ seconds. Find the particle's velocity and acceleration when $t = 2$.
    grade: achieved
    working:
      - math: v(t) = s'(t) = 6t^2 - 10t + 4
      - math: v(2) = 24 - 20 + 4 = 8 \;\textsf{m/s}
      - math: a(t) = v'(t) = 12t - 10
      - math: a(2) = 14 \;\textsf{m/s}^2
        note: "Velocity is one step down the ladder from distance; acceleration is one more."
  - ask: The distance travelled by a particle is given by $s(t) = 3t^3 - 4t^2 + 2t$ metres after $t$ seconds. Find the particle's velocity and acceleration when $t = 2$.
    grade: achieved
    working:
      - math: v(t) = s'(t) = 9t^2 - 8t + 2
      - math: v(2) = 36 - 16 + 2 = 22 \;\textsf{m/s}
      - math: a(t) = v'(t) = 18t - 8
      - math: a(2) = 28 \;\textsf{m/s}^2
        note: "Velocity is one step down the ladder from distance; acceleration is one more."
  - ask: A particle's distance from its starting point is given by the function below, in metres after $t$ seconds. Use calculus to find the times at which the particle is at rest, and its acceleration at each of those times.
    math: s(t) = t^3 - 12t^2 + 36t
    grade: merit
    working:
      - math: v(t) = 3t^2 - 24t + 36 = 3(t - 2)(t - 6)
        note: "At rest converts to velocity zero."
      - math: v(t) = 0 \qquad\Rightarrow\qquad t = 2 \;\textsf{ or }\; t = 6
      - math: a(t) = v'(t) = 6t - 24
      - math: a(2) = -12 \;\textsf{m/s}^2 \qquad a(6) = 12 \;\textsf{m/s}^2
        note: "The particle is momentarily at rest both times, but the acceleration says what happens next—slowing into the first stop, speeding away from the second."
  - ask: A particle's distance from its starting point is given by the function below, in metres after $t$ seconds. Use calculus to find the times at which the particle is at rest, and its acceleration at each of those times.
    math: s(t) = t^3 - 9t^2 + 24t
    grade: merit
    working:
      - math: v(t) = 3t^2 - 18t + 24 = 3(t - 2)(t - 4)
        note: "At rest converts to velocity zero."
      - math: v(t) = 0 \qquad\Rightarrow\qquad t = 2 \;\textsf{ or }\; t = 4
      - math: a(t) = v'(t) = 6t - 18
      - math: a(2) = -6 \;\textsf{m/s}^2 \qquad a(4) = 6 \;\textsf{m/s}^2
        note: "The particle is momentarily at rest both times, but the acceleration says what happens next—slowing into the first stop, speeding away from the second."
```

---

## Up the ladder

Given acceleration, anti-differentiate for velocity, and again for distance—two anti-differentiations, each with its own constant, and each constant is found from what the object was doing at the start. The exam's kinematics takes this form: a vehicle accelerating from rest at a constant rate.

```figure
caption: Acceleration to velocity to distance
steps:
  - math: a(t) = 0.8
    note: "A truck accelerates from rest at $0.8$ m/s². How far has it gone when it reaches $20$ m/s?"
  - math: v(t) = 0.8t + c
    note: "Anti-differentiate. The constant is the starting velocity."
  - math: v(0) = 0 \;\Rightarrow\; c = 0 \qquad v(t) = 0.8t
    note: "*From rest* means the velocity at $t = 0$ is zero. The evidence for $c = 0$ is written, not assumed—the 2024 schedule awards the step *with evidence that $c = 0$*."
  - math: 0.8t = 20 \qquad\Rightarrow\qquad t = 25
    note: "The moment the target speed is reached."
  - math: s(t) = 0.4t^2 + c \qquad s(0) = 0 \;\Rightarrow\; c = 0
    note: "Anti-differentiate again for distance. A new constant, pinned by starting at the dock: distance zero at $t = 0$."
  - math: s(25) = 0.4(625) = 250 \;\textsf{m}
    note: "The truck travels $250$ m while reaching top speed."
```

The two constants are the working. A schedule step is reserved for each: evidence for the $c$ in $v$, and evidence for the $c$ in $s$. The two sentences are short: *$c = 0$ because the truck starts from rest; $c = 0$ because distance is measured from the start line*. The 2025 report says it directly: *"including the '+ c' term, and showing how it is calculated is necessary for higher-level achievement"*.

Physics has formulas for this situation, such as $v = u + at$, and they earn nothing here: the 2024 report says *"many candidates reverted to physics for this question, which involves no use of calculus so is not considered for any grade"*. The question says *use calculus*, and the anti-differentiation on the page is what gets marked; a correct distance produced from a memorised physics formula earns nothing at all.

```practice
caption: up the ladder
questions:
  - ask: A train leaves a station from rest, accelerating at a constant $0.4$ m/s². Use calculus to find how far the train travels in the first $30$ seconds.
    grade: achieved
    working:
      - math: a(t) = 0.4
      - math: v(t) = 0.4t + c \qquad c = 0 \;\textsf{ since the train starts from rest}
      - math: s(t) = 0.2t^2 + c \qquad c = 0 \;\textsf{ since distance is measured from the station}
        note: "Each constant carries its sentence of evidence, even when both turn out to be zero."
      - math: s(30) = 0.2(900) = 180 \;\textsf{m}
  - ask: A tram leaves a stop from rest, accelerating at a constant $0.5$ m/s². Use calculus to find how far the tram travels in the first $20$ seconds.
    grade: achieved
    working:
      - math: a(t) = 0.5
      - math: v(t) = 0.5t + c \qquad c = 0 \;\textsf{ since the tram starts from rest}
      - math: s(t) = 0.25t^2 + c \qquad c = 0 \;\textsf{ since distance is measured from the stop}
        note: "Each constant carries its sentence of evidence, even when both turn out to be zero."
      - math: s(20) = 0.25(400) = 100 \;\textsf{m}
  - ask: A car accelerates from rest at a constant $0.75$ m/s² until it reaches its top speed of $30$ m/s. Use calculus to find the distance the car travels until it reaches its top speed.
    grade: merit
    from: "2024"
    working:
      - math: a(t) = 0.75
      - math: v(t) = 0.75t + c \qquad c = 0 \;\textsf{ since the car starts from rest}
      - math: 0.75t = 30 \qquad\Rightarrow\qquad t = 40 \;\textsf{s}
      - math: s(t) = 0.375t^2 + c \qquad c = 0 \;\textsf{ since distance is measured from the start}
        note: "Each anti-differentiation brings its own constant, and each constant gets its own sentence of evidence."
      - math: s(40) = 0.375(1600) = 600 \;\textsf{m}
  - ask: A boat accelerates from rest at a constant $0.8$ m/s² until it reaches its top speed of $24$ m/s. Use calculus to find the distance the boat travels until it reaches its top speed.
    grade: merit
    working:
      - math: a(t) = 0.8
      - math: v(t) = 0.8t + c \qquad c = 0 \;\textsf{ since the boat starts from rest}
      - math: 0.8t = 24 \qquad\Rightarrow\qquad t = 30 \;\textsf{s}
      - math: s(t) = 0.4t^2 + c \qquad c = 0 \;\textsf{ since distance is measured from the start}
        note: "Each anti-differentiation brings its own constant, and each constant gets its own sentence of evidence."
      - math: s(30) = 0.4(900) = 360 \;\textsf{m}
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: A ball rolls so that its distance from its starting point is $s(t) = 12t - t^2$ metres after $t$ seconds. Use calculus to find when the ball is at rest, and how far it has rolled by then.
    grade: merit
    working:
      - math: v(t) = 12 - 2t = 0
        note: "At rest converts to velocity zero."
      - math: t = 6 \;\textsf{s}
      - math: s(6) = 72 - 36 = 36 \;\textsf{m}
        note: "The distance comes from $s$, one rung up from where the time was found."
  - ask: A ball rolls so that its distance from its starting point is $s(t) = 16t - 2t^2$ metres after $t$ seconds. Use calculus to find when the ball is at rest, and how far it has rolled by then.
    grade: merit
    working:
      - math: v(t) = 16 - 4t = 0
        note: "At rest converts to velocity zero."
      - math: t = 4 \;\textsf{s}
      - math: s(4) = 64 - 32 = 32 \;\textsf{m}
        note: "The distance comes from $s$, one rung up from where the time was found."
  - ask: A car is travelling at $25$ m/s when the driver brakes, decelerating at a constant $2.5$ m/s² until the car stops. Use calculus to find how far the car travels while braking.
    grade: merit
    from: "2023"
    working:
      - math: a(t) = -2.5
        note: "Deceleration is negative acceleration, and the sign has to survive into the equation."
      - math: v(t) = -2.5t + c \qquad c = 25 \;\textsf{ since the car is doing } 25 \textsf{ m/s when braking begins}
        note: "This time the starting state is not rest, so the constant is not zero—it is the initial speed."
      - math: 25 - 2.5t = 0 \qquad\Rightarrow\qquad t = 10 \;\textsf{s}
        note: "Stopping means velocity zero."
      - math: s(t) = -1.25t^2 + 25t \qquad\textsf{measuring distance from where braking began}
      - math: s(10) = -125 + 250 = 125 \;\textsf{m}
  - ask: A van is travelling at $30$ m/s when the driver brakes, decelerating at a constant $2$ m/s² until the van stops. Use calculus to find how far the van travels while braking.
    grade: merit
    working:
      - math: a(t) = -2
        note: "Deceleration is negative acceleration, and the sign has to survive into the equation."
      - math: v(t) = -2t + c \qquad c = 30 \;\textsf{ since the van is doing } 30 \textsf{ m/s when braking begins}
        note: "This time the starting state is not rest, so the constant is not zero—it is the initial speed."
      - math: 30 - 2t = 0 \qquad\Rightarrow\qquad t = 15 \;\textsf{s}
        note: "Stopping means velocity zero."
      - math: s(t) = -t^2 + 30t \qquad\textsf{measuring distance from where braking began}
      - math: s(15) = -225 + 450 = 225 \;\textsf{m}
  - ask: A ferry leaves a wharf at a constant speed of $6$ m/s. When the ferry is $240$ m from the wharf, a police boat sets off after it from the wharf, accelerating at a constant $0.6$ m/s². Use calculus to find the distance from the wharf at which the police boat catches the ferry.
    grade: excellence
    from: "2025"
    working:
      - math: '\textsf{Ferry:}\quad v(t) = 6 \qquad s(t) = 6t + 240'
        note: "Constant speed anti-differentiates to $6t + c$, and the ferry's $240$ m head start is its constant. Measuring both distances from the wharf, from the moment the boat launches, is the decision that makes the two equations comparable."
      - math: '\textsf{Boat:}\quad a(t) = 0.6 \qquad v(t) = 0.6t \qquad s(t) = 0.3t^2'
        note: "From rest at the wharf, both constants are zero—stated with their evidence."
      - math: 0.3t^2 = 6t + 240
        note: "Catching up means the two distances are equal."
      - math: t^2 - 20t - 800 = 0 \qquad\Rightarrow\qquad (t - 40)(t + 20) = 0
      - math: t = 40 \;\textsf{s} \;\;\textsf{(reject } t = -20\textsf{)}
      - math: s(40) = 0.3(1600) = 480 \;\textsf{m from the wharf}
  - ask: A cyclist rides away from a gate at a constant speed of $8$ m/s. When the cyclist is $420$ m from the gate, a motorbike sets off after the cyclist from the gate, accelerating at a constant $0.4$ m/s². Use calculus to find the distance from the gate at which the motorbike catches the cyclist.
    grade: excellence
    working:
      - math: '\textsf{Cyclist:}\quad v(t) = 8 \qquad s(t) = 8t + 420'
        note: "Constant speed anti-differentiates to $8t + c$, and the cyclist's $420$ m head start is its constant. Measuring both distances from the gate, from the moment the motorbike sets off, is the decision that makes the two equations comparable."
      - math: '\textsf{Motorbike:}\quad a(t) = 0.4 \qquad v(t) = 0.4t \qquad s(t) = 0.2t^2'
        note: "From rest at the gate, both constants are zero—stated with their evidence."
      - math: 0.2t^2 = 8t + 420
        note: "Catching up means the two distances are equal."
      - math: t^2 - 40t - 2100 = 0 \qquad\Rightarrow\qquad (t - 70)(t + 30) = 0
      - math: t = 70 \;\textsf{s} \;\;\textsf{(reject } t = -30\textsf{)}
      - math: s(70) = 0.2(4900) = 980 \;\textsf{m from the gate}
```

---

## Summary

A derivative is a rate: how much the quantity changes per unit of the other variable, in whatever letters the model uses. A negative rate is a quantity falling, and the interpretation is written in the model's own words and units.

Kinematics is the ladder: distance, velocity, acceleration, each the derivative of the one before. Differentiate to descend, anti-differentiate to climb, and let the wording choose the direction—*at rest*, *constant speed* and *from rest* are equations in disguise.

Climbing the ladder brings a constant at every step, and the start of the motion supplies each one. The evidence is a written sentence per constant, and the schedules reserve marks for exactly that.

This is the last topic of the standard, and it is the whole subject in one context: form the function, differentiate or anti-differentiate as the question directs, and interpret. From here the preparation is past papers, sat under timed conditions and marked against the schedule for the same year.
