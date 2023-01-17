// pow  返回 基数的指数次幂 t ** power
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pow = Math.pow
const sqrt = Math.sqrt

export const easeOutCubic = (x: number): number => 1 - (1 - x) ** 3
export const linear = (x: number): number => x
export const easeOutExpo = (x: number): number =>
  x === 1 ? 1 : 1 - 2 ** (-10 * x)

export const easeInOutExpo = (x: number): number =>
  // eslint-disable-next-line no-nested-ternary
  x === 0
    ? 0
    : // eslint-disable-next-line no-nested-ternary
    x === 1
    ? 1
    : x < 0.5
    ? 2 ** (20 * x - 10) / 2
    : (2 - 2 ** (-20 * x + 10)) / 2
export const easeInExpo = (x: number): number =>
  x === 0 ? 0 : 2 ** (10 * x - 10)
export const easeInOutCirc = (x: number): number =>
  x < 0.5
    ? (1 - sqrt(1 - (2 * x) ** 2)) / 2
    : (sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2
