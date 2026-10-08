type Point = [number, number];

/** Texto "x1,y1 x2,y2 ..." que espera el atributo `points` de una polilínea SVG. */
export const points = (...list: Point[]): string => list.map(([x, y]) => `${x},${y}`).join(' ');
