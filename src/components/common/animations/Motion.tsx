/**
 * Piezas para animar ilustraciones SVG sin librerías.
 *
 * Se usa SMIL (<animate>) y no CSS porque permite animar los puntos y los
 * extremos de las líneas (cómo se doblan los brazos y las piernas), cosa que
 * CSS no hace de forma fiable en todos los navegadores. Todas las animaciones de
 * una misma ilustración comparten duración y tiempos, así que van sincronizadas.
 */

type MotionProps = {
  /** Atributo del elemento que se anima: "cx", "x2", "points"... */
  attr: string;
  /** Valores por los que pasa, uno por cada instante de `times`. */
  values: (string | number)[];
  /** Duración de una vuelta completa, en segundos. */
  dur: number;
  /** Instantes (0 a 1) de cada valor. Por defecto, repartidos a partes iguales. */
  times?: number[];
  /** Movimiento a velocidad constante, sin suavizar (el agua, el suelo). */
  linear?: boolean;
};

const EASE = '0.45 0 0.55 1';

const keyTimesOf = (values: MotionProps['values'], times?: number[]) =>
  times ?? values.map((_, index) => index / (values.length - 1));

export const Motion = ({ attr, values, dur, times, linear = false }: MotionProps) => {
  const keyTimes = keyTimesOf(values, times);
  return (
    <animate
      attributeName={attr}
      values={values.join(';')}
      keyTimes={keyTimes.join(';')}
      dur={`${dur}s`}
      repeatCount="indefinite"
      calcMode={linear ? 'linear' : 'spline'}
      keySplines={linear ? undefined : keyTimes.slice(1).map(() => EASE).join(';')}
    />
  );
};

type ShiftProps = {
  /** Desplazamientos "x y" por los que pasa el grupo. */
  values: string[];
  dur: number;
  times?: number[];
  linear?: boolean;
};

/** Mueve el grupo SVG que lo contiene. */
export const Shift = ({ values, dur, times, linear = false }: ShiftProps) => {
  const keyTimes = keyTimesOf(values, times);
  return (
    <animateTransform
      attributeName="transform"
      type="translate"
      values={values.join(';')}
      keyTimes={keyTimes.join(';')}
      dur={`${dur}s`}
      repeatCount="indefinite"
      calcMode={linear ? 'linear' : 'spline'}
      keySplines={linear ? undefined : keyTimes.slice(1).map(() => EASE).join(';')}
    />
  );
};
