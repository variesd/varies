import { noopReturn } from './cubic-bezier';
/**
 *  A Bézier curve (/ˈbɛz.i.eɪ/ BEH-zee-ay)[1] is a parametric curve used in computer graphics and related
 *  fields.[2] A set of discrete "control points" defines a smooth, continuous curve by means of a formula.
 *  Usually the curve is intended to approximate a real-world shape that otherwise has no mathematical representation or
 *  whose representation is unknown or too complicated. The Bézier curve is named after French engineer Pierre Bézier (1910–1999),
 *  who used it in the 1960s for designing curves for the bodywork of Renault cars.[3] Other uses include the design of computer fonts and animation.[3]
 *  Bézier curves can be combined to form a Bézier spline,
 *  or generalized to higher dimensions to form Bézier surfaces.[3]
 *  The Bézier triangle is a special case of the latter.
 */

/**
 * Inspiration Freya Holmér
 * link https://www.youtube.com/watch?v=aVwxzDHniEw
 * use online https://cubic-bezier.com/
 */

/**
 * This has been modified from Gaëtan Renaudeau's BezierEasing
 * https://github.com/gre/bezier-easing/blob/master/src/index.js
 * https://github.com/gre/bezier-easing/blob/master/LICENSE
 *
 */
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t: number, a1: number, a2: number) =>
  (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t

const subdivisionPrecision = 0.0000001
const subdivisionMaxIterations = 12

function binarySubdivide(
  x: number,
  lowerBound: number,
  upperBound: number,
  mX1: number,
  mX2: number
) {
  let currentX: number
  let currentT: number
  let i: number = 0

  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2.0
    currentX = calcBezier(currentT, mX1, mX2) - x
    if (currentX > 0.0) {
      upperBound = currentT
    } else {
      lowerBound = currentT
    }
  } while (
    Math.abs(currentX) > subdivisionPrecision &&
    ++i < subdivisionMaxIterations
  )

  return currentT
}
function noopReturn<T> () {

}
export function cubicBezier(
  mX1: number,
  mY1: number,
  mX2: number,
  mY2: number
) {
  // If this is a linear gradient, return linear easing
  if (mX1 === mY1 && mX2 === mY2) return noopReturn

  const getTForX = (aX: number) => binarySubdivide(aX, 0, 1, mX1, mX2)

  // If animation is at start/end, return t without easing
  return (t: number) =>
    t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2)
}
