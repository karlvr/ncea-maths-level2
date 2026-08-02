# B1—Forming and solving linear equations

---

An equation states that two things are equal. Solving it means finding the values of the unknown that make that statement true.

An equation is **linear** when the unknown appears only to the first power. $3x + 5 = 20$ is linear. $x^2 + 3x = 20$ is not, because of the $x^2$, and it is solved by the methods in the next topic.

Equations contain equals signs, unlike the expressions of Module A. The equals sign brings one new permission with it: you may do anything you like to an equation, provided you do it to both sides. Both sides name the same number, so an operation applied to both of them leaves two sides that still name the same number.

That permission does not extend to an expression. Multiplying an expression by three gives an expression three times as large, which is a different expression. Multiplying both sides of an equation by three leaves the two sides equal to each other, and leaves the same values of the unknown making the statement true.

The examination puts the difficulty in **forming** the equation—turning a paragraph of words into a statement with an equals sign in it—not in solving it once you have it. The specification is explicit that any equation you form must be stated as part of solving a problem, so the equation is not only a step towards the answer, it is part of the answer.

---

## Doing the same thing to both sides

To solve a linear equation, get the unknown by itself on one side. Undo whatever has been done to it, in the reverse of the order it was done.

In $3x + 5 = 20$ the $x$ was multiplied by $3$, and then $5$ was added. So undo the addition first, and the multiplication second.

```figure
id: b1-reverse-order
caption: Undoing in reverse order
steps:
  - math: 3x + 5 = 20
    note: The $x$ was multiplied by $3$, and then $5$ was added.
  - math: 3x + 5 \ca{- 5} = 20 \ca{- 5}
    note: Undo the last thing first. Subtract $5$ from both sides.
  - math: 3x = 15
  - math: \dfrac{3x}{\cb{3}} = \dfrac{15}{\cb{3}}
    note: Now undo the multiplication. Divide both sides by $3$.
  - math: x = 5
```

Substituting the answer back into the equation you were given checks it, and the check here is exact rather than approximate. A solution makes the two sides equal and a wrong answer does not, so putting $5$ in for $x$ must produce $20$ on the left as well as on the right.

Dividing both sides by a negative number is allowed, and it changes the sign on both sides. From $-2x = 12$, dividing both sides by $-2$ gives $x = -6$.

```practice
caption: undoing in reverse order
questions:
  - ask: Solve.
    math: 4x - 7 = 21
    grade: achieved
    working:
      - math: 4x = 28
        note: Undo the subtraction first, by adding $7$ to both sides.
      - math: x = 7
  - ask: Solve.
    math: \dfrac{x}{5} + 3 = 11
    grade: achieved
    working:
      - math: \dfrac{x}{5} = 8
        note: The $x$ was divided by $5$ and then $3$ was added, so the addition is undone first.
      - math: x = 40
        note: Undo a division by multiplying both sides.
  - ask: Solve.
    math: 7 - 2x = 19
    grade: achieved
    working:
      - math: "-2x = 12"
        note: Subtract $7$ from both sides. The term in $x$ keeps the minus that was in front of it.
      - math: x = -6
        note: Dividing both sides by $-2$ changes the sign of both.
```

---

## The unknown on both sides

When the unknown appears on both sides, collect the terms containing it on one side and the numbers on the other.

Which side is free to choose, and choosing the side that leaves a positive number in front of the unknown avoids carrying a minus through every line that follows.

```figure
caption: Collecting the unknown on one side
steps:
  - math: 5x - 3 = 2x + 12
    note: Terms in $x$ on both sides.
  - math: 5x - 3 \ca{- 2x} = 2x + 12 \ca{- 2x}
    note: Subtract the smaller of the two from both sides, so that what remains is positive.
  - math: 3x - 3 = 12
    note: The unknown is now on one side only, and this is the shape of the previous section.
  - math: 3x = 15
  - math: x = 5
```

In $4 - 3x = 2x - 11$ the term in $x$ is negative on the left and positive on the right. Adding $3x$ to both sides clears the left and leaves $5x$ on the right, giving $4 = 5x - 11$. Subtracting $2x$ instead would have left $-5x$ on the left, which is correct but harder to keep track of.

```practice
caption: the unknown on both sides
questions:
  - ask: Solve.
    math: 7x - 4 = 3x + 16
    grade: achieved
    working:
      - math: 4x - 4 = 16
        note: Subtract $3x$ from both sides.
      - math: 4x = 20
      - math: x = 5
  - ask: Solve.
    math: 2 - 5x = 3x - 22
    grade: achieved
    working:
      - math: 2 = 8x - 22
        note: Add $5x$ to both sides, so that the term in $x$ ends up positive.
      - math: 24 = 8x
      - math: x = 3
  - ask: Solve.
    math: 9 - x = 4x + 24
    grade: achieved
    working:
      - math: 9 = 5x + 24
        note: Add $x$ to both sides.
      - math: "-15 = 5x"
      - math: x = -3
        note: A negative solution is an ordinary answer, not a sign that something has gone wrong.
```

---

## Brackets and fractions

### Expand the brackets first

A bracket in an equation is expanded exactly as it is in an expression, and a minus in front of one reaches every term inside it.

```figure
caption: Expanding before solving
steps:
  - math: 5(x - 2) - 2(x - 4) = 4
    note: Two brackets, and the second one is being subtracted.
  - math: 5x - 10 - 2x \ca{+} 8 = 4
    note: The minus reaches both terms inside the second bracket, so both of its signs flip.
  - math: 3x - 2 = 4
  - math: x = 2
```

### Multiplying an equation through

A fraction in an equation is cleared by multiplying every term on both sides by the lowest common denominator. The common denominator is found exactly as it was in A2: factorise the denominators, and take each distinct factor as many times as it appears in any one of them.

Here is where an equation and an expression part company. In A2 a fraction had to stay a fraction, because multiplying an expression by six gives an expression six times as large. An equation may be multiplied through, because both sides are multiplied and neither side changes relative to the other.

```figure
id: b1-clear-fractions
caption: Clearing the fractions
steps:
  - math: \dfrac{2x}{3} - \dfrac{x-4}{2} = 3
    note: The lowest common denominator of $3$ and $2$ is $6$.
  - math: \ca{6} \cdot \dfrac{2x}{3} - \ca{6} \cdot \dfrac{x-4}{2} = \ca{6} \cdot 3
    note: Multiply every term by it, on both sides.
  - math: 4x - 3\ca{(x-4)} = 18
    note: Each denominator divides out. A numerator with two terms in it keeps its bracket.
  - math: 4x - 3x + 12 = 18
  - math: x = 6
```

The bracket around $x-4$ is what keeps the subtraction correct, and it is there because that numerator was a single quantity before the multiplication and has to stay one afterwards.

When the unknown is in a denominator, multiplying through still clears it, but what is left may not be linear. Multiplying $2x + 3 = \dfrac{7}{x}$ through by $x$ gives $2x^2 + 3x = 7$, which has an $x^2$ in it. That is a quadratic, and B2 solves it.

```practice
caption: brackets and fractions
questions:
  - ask: Solve.
    math: 3(x - 4) = 18
    grade: achieved
    working:
      - math: 3x - 12 = 18
        note: Expanding is one way. Dividing both sides by $3$ first is another, and is quicker here.
      - math: x = 10
  - ask: Solve.
    math: 2(x + 5) = 3(x - 1)
    grade: achieved
    working:
      - math: 2x + 10 = 3x - 3
        note: Expand both sides before collecting anything.
      - math: 13 = x
  - ask: Solve.
    math: \dfrac{x}{4} + \dfrac{x}{6} = 5
    grade: achieved
    working:
      - math: 3x + 2x = 60
        note: The lowest common denominator of $4$ and $6$ is $12$, not $24$.
      - math: x = 12
  - ask: Solve.
    math: \dfrac{x+2}{3} - \dfrac{x-1}{4} = 1
    grade: merit
    working:
      - math: 4(x+2) - 3\ca{(x-1)} = 12
        note: Multiply every term by $12$. The subtracted numerator needs its bracket.
      - math: 4x + 8 - 3x \ca{+} 3 = 12
        note: Minus three times minus one is plus three.
      - math: x = 1
```

---

## Rearranging a formula

Making a letter the subject of a formula is the same work with an expression as the answer instead of a number. Undo what has been done to that letter, in the reverse of the order it was done, doing each step to both sides.

```figure
caption: Making a letter the subject
steps:
  - math: A = \pi r^2
    note: The $r$ was squared, and the result was multiplied by $\pi$.
  - math: \dfrac{A}{\pi} = r^2
    note: Undo the multiplication first. Divide both sides by $\pi$.
  - math: r = \sqrt{\dfrac{A}{\pi}}
    note: Then take the square root of both sides. A radius is a length, so only the positive root is kept.
```

A root is undone by raising both sides to the matching power, and the side without the root needs a bracket around all of it.

```figure
id: b1-undo-root
caption: Undoing a root
steps:
  - math: 2y = \sqrt[3]{5x - 9}
    note: The whole of $5x-9$ sits under a cube root.
  - math: (\ca{2y})^3 = 5x - 9
    note: Cube both sides. The left side is all of $2y$, so the bracket goes round all of it.
  - math: 8y^3 = 5x - 9
    note: The cube reaches the $2$ as well as the $y$.
  - math: x = \dfrac{8y^3 + 9}{5}
```

The 2025 examiner's report gives expanding $(2y)^3$ as $2y^3$ rather than $8y^3$ as a reason candidates did not achieve, and it is the same bracket rule that A1 applied to $\pi(2x)^2$.

### When the letter appears more than once

Collect every term containing that letter on one side and everything else on the other, then take the letter out as a common factor. What is left inside the bracket becomes the denominator.

```figure
id: b1-subject-twice
caption: The subject appearing twice
steps:
  - math: ax + 3 = bx + 7
    note: The $x$ is on both sides, and both of its coefficients are letters.
  - math: ax - bx = 4
    note: Collect the terms in $x$ on one side and the numbers on the other.
  - math: x(\ca{a - b}) = 4
    note: Take $x$ out as a common factor, which is A1's first method of factorising.
  - math: x = \dfrac{4}{\ca{a - b}}
    note: Divide both sides by the bracket, and the bracket becomes a denominator.
```

```practice
caption: rearranging a formula
questions:
  - ask: Make $x$ the subject.
    math: 3y = \sqrt[3]{2x + 7}
    grade: achieved
    from: "2025"
    working:
      - math: (3y)^3 = 2x + 7
        note: Cube both sides, with a bracket round the whole of the left side.
      - math: 27y^3 = 2x + 7
        note: The cube reaches the $3$, so it becomes $27$.
      - math: x = \dfrac{27y^3 - 7}{2}
  - ask: Make $r$ the subject.
    math: V = \dfrac{4}{3}\pi r^3
    grade: merit
    working:
      - math: 3V = 4\pi r^3
        note: Multiply both sides by $3$ to clear the fraction.
      - math: r^3 = \dfrac{3V}{4\pi}
      - math: r = \sqrt[3]{\dfrac{3V}{4\pi}}
  - ask: Make $h$ the subject.
    math: S = 2\pi r h + 2\pi r^2
    grade: merit
    working:
      - math: S - 2\pi r^2 = 2\pi r h
        note: Only one term contains $h$, so move the other one across.
      - math: h = \dfrac{S - 2\pi r^2}{2\pi r}
        note: Divide both sides by everything that multiplies $h$.
```

---

## Forming an equation from words

Nothing on the page is an equation yet. You have to decide what the unknown is, write every quantity in the problem in terms of it, and find the statement in the words that says two of those quantities are equal.

```figure
caption: Forming an equation
steps:
  - math: |
      \begin{array}{rl}
      1. & \textsf{name the unknown, and say what it measures} \\[3pt]
      2. & \textsf{write each quantity in terms of it} \\[3pt]
      3. & \textsf{find the two quantities the words say are equal} \\[3pt]
      4. & \textsf{write the equation down} \\[3pt]
      5. & \textsf{solve it, then answer the question that was asked}
      \end{array}
```

A rectangle is three centimetres longer than it is wide, and its perimeter is thirty-four centimetres. Find its area.

```figure
id: b1-forming
caption: A rectangle of known perimeter
steps:
  - math: \textsf{let } \ca{w} = \textsf{ the width, in centimetres}
    note: Name the unknown, and say what it measures. Without the unit the answer means nothing.
  - math: \textsf{length} = \ca{w} + 3
    note: Three centimetres longer than the width, so it is written in terms of the width.
  - math: 2\ca{w} + 2(\ca{w} + 3) = 34
    note: The perimeter is the quantity the words give a value for, so the perimeter is the equation.
  - math: 4w + 6 = 34
  - math: w = 7
  - math: \textsf{area} = 7 \times 10 = 70
    note: The question asked for the area. Stopping at $w$ answers a question nobody asked.
```

### Write the equation down

The specification says that any equation you form must be stated as part of solving a problem. An equation that was used but never written earns nothing, however correct the arithmetic that followed it. The line $2w + 2(w+3) = 34$ goes on the page before any solving starts.

### Check against the wording, not against your equation

Substituting your answer into the equation you formed tests only whether you solved that equation correctly. It cannot tell you whether the equation was the right one to write, because an equation built wrongly accepts a wrong answer without complaint.

Read the answer back into the original sentences instead. A width of seven and a length of ten give a perimeter of thirty-four, and ten is three more than seven, so both of the facts in the question hold.

```practice
caption: forming an equation
questions:
  - ask: A plumber charges a call-out fee of 60 dollars, and 45 dollars for each hour of work. A job cost 240 dollars in total. Find how many hours the plumber worked.
    grade: achieved
    working:
      - math: \textsf{let } h = \textsf{ the number of hours worked}
      - math: 60 + 45h = 240
        note: The call-out fee is paid once, so it is not multiplied by anything.
      - math: 45h = 180
      - math: h = 4 \textsf{ hours}
  - ask: A rope 15 m long is cut into two pieces, one of them 3 m longer than the other. Find the length of the longer piece.
    grade: achieved
    working:
      - math: \textsf{let } x = \textsf{ the length of the shorter piece, in metres}
        note: Naming the shorter piece makes the other one $x+3$ rather than $x-3$.
      - math: x + (x + 3) = 15
        note: The two pieces together make the whole rope, and that is the quantity the words give a value for.
      - math: 2x + 3 = 15
      - math: x = 6
      - math: \textsf{longer piece} = 9 \textsf{ m}
        note: The question asked for the longer piece, so the answer is $x+3$ and not $x$.
  - ask: Three consecutive whole numbers add to 84. Find the three numbers.
    grade: achieved
    working:
      - math: \textsf{let } n = \textsf{ the smallest of the three}
        note: Naming the smallest one makes the other two $n+1$ and $n+2$.
      - math: n + (n+1) + (n+2) = 84
      - math: 3n + 3 = 84
      - math: n = 27
      - math: 27, \; 28, \; 29
        note: The question asked for the three numbers, not for $n$.
  - ask: The three angles of a triangle are $x$, $2x$ and $x + 20$ degrees. Find the size of the largest angle.
    grade: merit
    working:
      - math: x + 2x + (x + 20) = 180
        note: The three angles of a triangle add to 180 degrees, and that fact is what supplies the equation.
      - math: 4x + 20 = 180
      - math: x = 40
      - math: \textsf{largest angle} = 80^\circ
        note: The three angles are $40^\circ$, $80^\circ$ and $60^\circ$, so the largest of them is $2x$.
  - ask: A rectangle is twice as long as it is wide, and its perimeter is 42 cm. Find its area.
    grade: merit
    working:
      - math: \textsf{let } w = \textsf{ the width, in centimetres}
      - math: 2w + 2(2w) = 42
        note: The length is $2w$, and the perimeter counts each side twice.
      - math: 6w = 42 \;\Rightarrow\; w = 7
      - math: \textsf{area} = 7 \times 14 = 98 \textsf{ cm}^2
        note: The unit of an area is a square centimetre, and stating it is part of answering.
  - ask: A shop sells pens for 3 dollars each and notebooks for 7 dollars each. In one day it sold 40 items altogether, taking 184 dollars. Find how many pens it sold.
    grade: merit
    working:
      - math: \textsf{let } p = \textsf{ the number of pens sold}
      - math: \textsf{notebooks sold} = 40 - p
        note: The two counts add to $40$, so naming one of them names the other. A second letter is not needed.
      - math: 3p + 7(40 - p) = 184
        note: Each count is multiplied by its own price, and the two amounts add to the takings.
      - math: 3p + 280 - 7p = 184
      - math: -4p = -96 \;\Rightarrow\; p = 24
        note: Both sides are negative, and dividing by $-4$ makes both positive.
  - ask: One phone plan charges 30 dollars a month plus 20 cents for each text. Another charges 18 dollars a month plus 35 cents for each text. Find the number of texts for which the two plans cost the same.
    grade: merit
    working:
      - math: \textsf{let } n = \textsf{ the number of texts in a month}
      - math: 30 + 0.20n = 18 + 0.35n
        note: One expression for each plan, and the words say the two are equal.
      - math: 12 = 0.15n
        note: Both amounts are in dollars. Mixing dollars on one side with cents on the other is the error here.
      - math: n = 80
  - ask: A journey of 240 km is driven in two parts, the first at 80 km/h and the second at 60 km/h. The whole journey takes 3.5 hours. Find the distance driven at 80 km/h.
    grade: excellence
    working:
      - math: \textsf{let } d = \textsf{ the distance driven at 80 km/h, in kilometres}
        note: Neither part's distance is given, so one of them has to be named before anything can be written.
      - math: \textsf{second part} = 240 - d
        note: The two distances add to the whole journey.
      - math: \dfrac{d}{80} + \dfrac{240 - d}{60} = 3.5
        note: A time is a distance divided by a speed, and the two times add to the time given.
      - math: 3d + 4(240 - d) = 840
        note: Multiply every term by $240$, which is the lowest common denominator of $80$ and $60$.
      - math: 3d + 960 - 4d = 840
      - math: d = 120 \textsf{ km}
        note: Check against the wording. 120 km at 80 km/h is 1.5 hours, 120 km at 60 km/h is 2 hours, and those add to 3.5.
```

---

## Two unknowns, two equations

One equation with two unknowns has many solutions: $x + y = 10$ is satisfied by $x=1$ and $y=9$, and by $x=2$ and $y=8$, and by every other pair adding to ten. Two equations that must both be true at once usually pin down a single pair.

Two methods do it, and both reach the same pair. The pair $2x + y = 11$ and $3x - y = 9$ is worked below by each of them in turn.

### Substitution

Rearrange one equation to give one unknown in terms of the other, then put that expression into the second equation. What is left is one equation in one unknown.

```figure
id: b1-substitution
caption: Substituting one equation into the other
steps:
  - math: 2x + y = 11 \qquad 3x - y = 9
    note: Two equations, both true for the same pair of values.
  - math: y = 11 - 2x
    note: Rearrange whichever of the two is easiest, to give one unknown in terms of the other.
  - math: 3x - \ca{(11 - 2x)} = 9
    note: Put that expression into the other equation, in brackets. Only one unknown is left.
  - math: 3x - 11 + 2x = 9
    note: The minus reaches both terms inside the bracket.
  - math: 5x = 20 \;\Rightarrow\; x = 4
  - math: y = 11 - 2(4) = 3
    note: Put the value back into the rearranged equation.
```

### Elimination

Add or subtract the two equations so that one unknown disappears.

```figure
id: b1-elimination
caption: Eliminating one unknown
steps:
  - math: 2x + \ca{y} = 11 \qquad 3x - \ca{y} = 9
    note: The same pair, solved the other way.
  - math: (2x + y) + (3x - y) = 11 + 9
    note: The terms in $y$ are opposites, so adding the two equations removes them.
  - math: 5x = 20
  - math: x = 4
  - math: 2(4) + y = 11 \;\Rightarrow\; y = 3
    note: Put the value back into either equation to get the other unknown.
```

Where the coefficients do not match, multiply one equation through by whatever makes them match. That is the same permission used to clear fractions above.

Reach for substitution when one equation already gives a letter on its own, and when one of the two equations is not linear—which is how a line meets a curve in C1, where elimination has nothing to cancel against. Elimination is quicker when both equations are in the same tidy form.

A curve of known form passing through known points gives one equation for each point. In $y = 3x^2 + ax + b$ the unknowns are $a$ and $b$, and each point supplies a value for $x$ and a value for $y$—which leaves an equation with $a$ and $b$ in it, and neither of them squared.

```figure
id: b1-two-points
caption: Two points on a curve give two equations
steps:
  - math: y = 3x^2 + ax + b
    note: The unknowns are $a$ and $b$. At each point the $x$ and the $y$ are both known.
  - math: 0 = 3(\ca{2})^2 + a(\ca{2}) + b
    note: The curve crosses the $x$-axis at $(2,0)$, so that pair satisfies the equation.
  - math: 2a + b = -12
  - math: -a + b = -9
    note: The point $(-1,-6)$ gives a second equation in the same two unknowns.
  - math: 3a = -3
    note: Subtracting the second equation from the first removes $b$.
  - math: a = -1, \quad b = -10
```

```practice
caption: two unknowns
questions:
  - ask: Solve the pair of equations.
    math: x + y = 10 \qquad x - y = 2
    grade: achieved
    working:
      - math: 2x = 12
        note: Adding the two equations removes the $y$.
      - math: x = 6, \quad y = 4
  - ask: Solve the pair of equations by substitution.
    math: y = 2x - 1 \qquad 3x + y = 14
    grade: achieved
    working:
      - math: 3x + \ca{(2x - 1)} = 14
        note: The first equation already gives $y$ on its own, so it goes straight into the second.
      - math: 5x - 1 = 14
      - math: x = 3
      - math: y = 2(3) - 1 = 5
        note: Put the value back into the equation that was already rearranged.
  - ask: Solve the pair of equations.
    math: x + y = 4 \qquad 3x - 2y = 7
    grade: merit
    working:
      - math: y = 4 - x
        note: Neither equation gives a letter on its own, but the first one rearranges in a single step.
      - math: 3x - 2\ca{(4 - x)} = 7
        note: The expression goes in inside a bracket, because a minus is about to reach it.
      - math: 3x - 8 + 2x = 7
        note: Minus two times minus $x$ is plus two $x$, so the terms in $x$ add rather than cancel.
      - math: 5x = 15 \;\Rightarrow\; x = 3
      - math: y = 4 - 3 = 1
  - ask: Solve the pair of equations.
    math: 3x + 2y = 16 \qquad x - y = 2
    grade: merit
    working:
      - math: 6x + 4y = 32 \qquad 4x - 4y = 8
        note: Multiply the first equation by $2$ and the second by $4$, so the $y$ terms match.
      - math: 10x = 40
      - math: x = 4, \quad y = 2
  - ask: Three coffees and two teas cost 21 dollars. One coffee and four teas cost 17 dollars. Find the price of a coffee and the price of a tea.
    grade: merit
    working:
      - math: \textsf{let } c = \textsf{ the price of a coffee and } t = \textsf{ that of a tea, in dollars}
      - math: 3c + 2t = 21 \qquad c + 4t = 17
        note: One equation for each sentence, and both of them have to be written down.
      - math: c = 17 - 4t
        note: The second equation carries a single $c$, which is the signal to substitute rather than eliminate.
      - math: 3(17 - 4t) + 2t = 21
      - math: 51 - 12t + 2t = 21
      - math: -10t = -30 \;\Rightarrow\; t = 3
      - math: c = 17 - 4(3) = 5
        note: Check both sentences, not only the one substituted into last. Three coffees and two teas do come to 21 dollars.
  - ask: The graph of $y = 2x^2 + ax + b$ crosses the $x$-axis at $(3,0)$, and passes through $(-1,-8)$. Find the values of $a$ and $b$.
    grade: merit
    from: "2025"
    working:
      - math: 0 = 2(3)^2 + 3a + b \;\Rightarrow\; 3a + b = -18
        note: Substitute the first point, and evaluate every number before going on.
      - math: -8 = 2(-1)^2 - a + b \;\Rightarrow\; -a + b = -10
        note: Squaring $-1$ gives $+1$, so the first term is $2$ and not $-2$.
      - math: 4a = -8
        note: Subtract the second equation from the first.
      - math: a = -2, \quad b = -12
```

---

## Practice

Work these on paper before revealing anything. They are ordered easiest first, and the band each one is pitched at is the band the marker would award for doing it well.

```practice
questions:
  - ask: Solve.
    math: 5(x - 3) = 2x + 6
    grade: achieved
    working:
      - math: 5x - 15 = 2x + 6
      - math: 3x = 21
      - math: x = 7
  - ask: Make $x$ the subject.
    math: y = \dfrac{x - 4}{3}
    grade: achieved
    working:
      - math: 3y = x - 4
        note: Multiply both sides by $3$ first, which clears the fraction in one step.
      - math: x = 3y + 4
  - ask: Solve.
    math: \dfrac{3x-1}{4} - \dfrac{x}{3} = 1
    grade: merit
    working:
      - math: 3(3x-1) - 4x = 12
        note: Multiply every term by $12$. The numerator with two terms keeps its bracket.
      - math: 9x - 3 - 4x = 12
      - math: 5x = 15 \;\Rightarrow\; x = 3
  - ask: Ana is three times as old as her nephew. In six years she will be twice as old as he is then. Find both of their ages now.
    grade: merit
    working:
      - math: \textsf{let } n = \textsf{ the nephew's age now, in years}
        note: Name the younger one, so that the other age is a multiple rather than a fraction.
      - math: 3n + 6 = 2(n + 6)
        note: In six years both ages go up by six, and the words say one is then twice the other.
      - math: 3n + 6 = 2n + 12
      - math: n = 6
      - math: \textsf{nephew } 6, \quad \textsf{Ana } 18
        note: Check against the wording. In six years they are $12$ and $24$, and $24$ is twice $12$.
  - ask: Find the value of $k$ for which the equation holds for every value of $x$.
    math: \dfrac{x^2 + 3x + k}{(x+5)(x+1)} = \dfrac{x-2}{x+1}
    grade: merit
    from: "2023"
    working:
      - math: (x^2 + 3x + k)(x+1) = (x-2)(x+5)(x+1)
        note: Cross-multiply, which is multiplying both sides by both denominators.
      - math: x^2 + 3x + k = (x-2)(x+5)
        note: The factor $(x+1)$ appears on both sides and divides out.
      - math: x^2 + 3x + k = x^2 + 3x - 10
        note: Expand the right side. The first two terms match, which is what makes a value of $k$ possible.
      - math: k = -10
  - ask: A cylinder of radius $r$ and height $h$, and a second container with the same radius and height, have the surface areas below—the cylinder's first. The two surface areas are equal. Find $h$ in terms of $r$.
    math: '2\pi r^2 + 2\pi rh \qquad\textsf{ and }\qquad 5r^2 + 10rh'
    grade: excellence
    from: "2023"
    working:
      - math: 2\pi r^2 + 2\pi rh = 5r^2 + 10rh
        note: Write the equation down before rearranging it. That line is required in its own right.
      - math: 2\pi rh - 10rh = 5r^2 - 2\pi r^2
        note: Collect every term containing $h$ on one side and everything else on the other.
      - math: rh(2\pi - 10) = r^2(5 - 2\pi)
        note: Take $h$ out as a common factor on the left, and $r^2$ out on the right.
      - math: h = \dfrac{r(5 - 2\pi)}{2\pi - 10}
        note: One $r$ cancels from top and bottom. Both brackets are negative, so $h$ is positive.
```

---

## Summary

An expression is simplified and an equation is solved. Whatever you do to one side of an equation, do to the other side as well.

Undo the operations on the unknown in the reverse of the order they were done. When the unknown is on both sides, collect it on the side that leaves its coefficient positive.

Expand brackets before solving, and clear fractions by multiplying every term on both sides by the lowest common denominator. Multiplying through is a move an equation allows and an expression does not.

Making a letter the subject is the same work with an expression as the answer. Where that letter appears more than once, collect its terms on one side and take it out as a common factor.

Name the unknown and say what it measures, write each quantity in terms of it, and write the equation down before solving—the specification requires that any equation you form is stated. Check the answer against the original wording rather than against the equation you formed, and answer the question that was asked.

Two unknowns need two equations, and one is eliminated by adding or subtracting the pair.

Clearing a fraction whose denominator contains the unknown leaves an $x^2$ behind, and so does substituting a line into a curve. Both land in B2.
