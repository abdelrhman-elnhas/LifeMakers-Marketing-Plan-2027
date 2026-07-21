// Small geometry helpers used to draw the donut-style "year wheel".
// Kept framework-free so they're easy to unit-test or reuse elsewhere.

export const WHEEL_CX = 200;
export const WHEEL_CY = 200;
export const WHEEL_R_OUTER = 175;
export const WHEEL_R_INNER = 105;

/**
 * Convert a polar coordinate (angle measured clockwise from 12 o'clock)
 * into an {x, y} point on the SVG canvas.
 */
export function polarToCartesian(cx, cy, r, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

/**
 * Build an SVG path `d` attribute for one donut segment between two angles.
 */
export function describeArc(cx, cy, rOuter, rInner, startAngle, endAngle) {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const startInner = polarToCartesian(cx, cy, rInner, endAngle);
  const endInner = polarToCartesian(cx, cy, rInner, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", startOuter.x, startOuter.y,
    "A", rOuter, rOuter, 0, largeArc, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", rInner, rInner, 0, largeArc, 1, startInner.x, startInner.y,
    "Z",
  ].join(" ");
}

/** Convert a day-of-year offset (0-365) into a wheel angle in degrees. */
export function dayToAngle(day, totalDays) {
  return (day / totalDays) * 360;
}
