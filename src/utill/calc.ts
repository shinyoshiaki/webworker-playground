export function twopos2y(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  x: number
) {
  return ((p2.y - p1.y) / (p2.x - p1.x)) * (x - p1.x) + p1.y;
}

export function exp2y(m: number, b: number, x: number) {
  return m * x + b;
}

export function exp2x(m: number, b: number, y: number) {
  return (y - b) / m;
}

export function vectorDist(
  p1: { x: number; y: number },
  p2: { x: number; y: number }
) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
