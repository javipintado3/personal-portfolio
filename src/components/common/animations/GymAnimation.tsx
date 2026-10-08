import { Motion } from './Motion';
import { points } from './points';

const DUR = 2.2;

/** La barra se queda un momento arriba y otro abajo, como en una repetición real. */
const TIMES = [0, 0.35, 0.5, 0.85, 1];
const BAR_Y = [60, 20, 20, 60, 60];

const SHOULDER_LEFT: [number, number] = [102, 60];
const SHOULDER_RIGHT: [number, number] = [138, 60];

/** Brazo en las dos posturas: barra a la altura del hombro y barra por encima de la cabeza. */
const DOWN = { elbow: [92, 76], hand: [88, 60] } as const;
const UP = { elbow: [92, 40], hand: [88, 20] } as const;

const mirror = ([x, y]: readonly [number, number]): [number, number] => [240 - x, y];

const armValues = (shoulder: [number, number], side: (p: readonly [number, number]) => [number, number]) =>
  [DOWN, UP, UP, DOWN, DOWN].map((pose) =>
    points(shoulder, side(pose.elbow), side(pose.hand)),
  );

const identity = (p: readonly [number, number]): [number, number] => [p[0], p[1]];

/** Press de hombros con barra: una repetición cada 2,2 segundos. */
const GymAnimation = () => (
  <svg viewBox="0 0 240 160" role="img" aria-label="Ilustración de una persona levantando una barra" width="100%">
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Suelo */}
      <ellipse cx="120" cy="140" rx="46" ry="4" fill="#000" opacity="0.18" stroke="none" />
      <line x1="30" x2="210" y1="138" y2="138" strokeWidth="3" opacity="0.5" />

      {/* Piernas y pies */}
      <line x1="112" y1="98" x2="106" y2="134" strokeWidth="7" />
      <line x1="128" y1="98" x2="134" y2="134" strokeWidth="7" />
      <line x1="98" y1="135" x2="110" y2="135" strokeWidth="5" />
      <line x1="130" y1="135" x2="142" y2="135" strokeWidth="5" />

      {/* Tronco, hombros y cabeza */}
      <line x1="120" y1="56" x2="120" y2="100" strokeWidth="14" />
      <line x1={SHOULDER_LEFT[0]} y1="60" x2={SHOULDER_RIGHT[0]} y2="60" strokeWidth="8" />
      <circle cx="120" cy="40" r="9" fill="#fff" stroke="none" />

      {/* Brazos */}
      <polyline stroke="#DDE7FF" strokeWidth="5.5">
        <Motion attr="points" values={armValues(SHOULDER_LEFT, identity)} dur={DUR} times={TIMES} />
      </polyline>
      <polyline stroke="#DDE7FF" strokeWidth="5.5">
        <Motion attr="points" values={armValues(SHOULDER_RIGHT, mirror)} dur={DUR} times={TIMES} />
      </polyline>

      {/* Barra con sus discos */}
      <line x1="46" x2="194" strokeWidth="4" stroke="#BFD0FF">
        <Motion attr="y1" values={BAR_Y} dur={DUR} times={TIMES} />
        <Motion attr="y2" values={BAR_Y} dur={DUR} times={TIMES} />
      </line>
      {[56, 184].map((x) => (
        <g key={x}>
          <circle cx={x} r="16" fill="#fff" stroke="none">
            <Motion attr="cy" values={BAR_Y} dur={DUR} times={TIMES} />
          </circle>
          <circle cx={x} r="6" fill="#2952E3" stroke="none">
            <Motion attr="cy" values={BAR_Y} dur={DUR} times={TIMES} />
          </circle>
        </g>
      ))}
    </g>
  </svg>
);

export default GymAnimation;
