/**
 * Two-dimensional vectors, for the geometry of a drawn figure.
 *
 * Use these for points and directions in a figure's own coordinates or on the
 * screen. They are plain tuples, so a vector can be written as a literal and
 * read from a figure's specification as it stands.
 */
export type Vec = readonly [number, number]

export const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1]]
export const subtract = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1]]
export const scale = (a: Vec, s: number): Vec => [a[0] * s, a[1] * s]
export const dot = (a: Vec, b: Vec): number => a[0] * b[0] + a[1] * b[1]
export const length = (a: Vec): number => Math.hypot(a[0], a[1])

/** The point a fraction `t` of the way from `a` to `b`. */
export const between = (a: Vec, b: Vec, t: number): Vec => add(a, scale(subtract(b, a), t))

/** The unit vector along `a`, or `[0, 1]` when `a` has no length to speak of. */
export function unit(a: Vec): Vec {
  const size = length(a)
  return size < 1e-9 ? [0, 1] : [a[0] / size, a[1] / size]
}

/** `a` turned a quarter-turn. */
export const perpendicular = (a: Vec): Vec => [-a[1], a[0]]

/** `a` turned by `angle` radians, in the direction that turns the x-axis toward the y-axis. */
export function rotate(a: Vec, angle: number): Vec {
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  return [a[0] * cos - a[1] * sin, a[0] * sin + a[1] * cos]
}
