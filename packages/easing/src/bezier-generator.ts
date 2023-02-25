// eslint-disable-next-line @typescript-eslint/no-unused-vars, max-params
function linearBezierCurze(a, b, c, d) {
  const line1 = c - a
  const line2 = d - b
  // eslint-disable-next-line func-names
  return function (t) {
    return [line1 * t + a, line2 * t + b]
  }
}
