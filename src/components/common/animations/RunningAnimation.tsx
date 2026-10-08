import { Motion, Shift } from './Motion';
import { points } from './points';

const DUR = 0.9;

const HIP: [number, number] = [120, 84];
const SHOULDER: [number, number] = [124, 60];

type Pose = { mid: [number, number]; end: [number, number] };

/** Las cuatro fases de una zancada de la pierna: delante, apoyo, impulso y recogida. */
const LEG: Pose[] = [
  { mid: [132, 98], end: [146, 112] },
  { mid: [124, 100], end: [118, 116] },
  { mid: [112, 102], end: [94, 110] },
  { mid: [120, 92], end: [106, 100] },
];

/** Las cuatro fases del brazo: adelante, a media altura, atrás y subiendo. */
const ARM: Pose[] = [
  { mid: [136, 68], end: [146, 60] },
  { mid: [124, 74], end: [134, 72] },
  { mid: [112, 68], end: [102, 76] },
  { mid: [122, 72], end: [128, 62] },
];

/** Lleva la secuencia de fases a una vuelta completa empezando en `from`. */
const cycle = (poses: Pose[], from: number) => {
  const ordered = poses.map((_, index) => poses[(index + from) % poses.length]);
  return [...ordered, ordered[0]];
};

const legValues = (from: number) =>
  cycle(LEG, from).map((pose) => points(HIP, pose.mid, pose.end));

const armValues = (from: number) =>
  cycle(ARM, from).map((pose) => points(SHOULDER, pose.mid, pose.end));

/** Corredor de perfil: una zancada completa cada 0,9 segundos. */
const RunningAnimation = () => (
  <svg viewBox="30 34 180 100" role="img" aria-label="Ilustración de una persona corriendo" width="100%">
    <defs>
      <linearGradient id="run-edges" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="210" y2="0">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.16" stopColor="#fff" stopOpacity="1" />
        <stop offset="0.84" stopColor="#fff" stopOpacity="1" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <mask id="run-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="160">
        <rect x="30" y="0" width="180" height="160" fill="url(#run-edges)" />
      </mask>
    </defs>
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Rayas de velocidad */}
      {[56, 68, 80].map((y, index) => (
        <line key={y} x1="30" x2={52 - index * 6} y1={y} y2={y} strokeWidth="3" opacity="0">
          <animate
            attributeName="opacity"
            values="0;0.7;0"
            dur="0.6s"
            begin={`${index * 0.2}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Sombra y suelo; el trazo discontinuo se desplaza y da sensación de avance */}
      <g mask="url(#run-mask)">
        <ellipse cx="118" cy="121" rx="28" ry="3.5" fill="#000" opacity="0.18" stroke="none" />
        <line x1="0" x2="240" y1="124" y2="124" strokeWidth="3" strokeDasharray="16 20" opacity="0.55">
          <animate attributeName="stroke-dashoffset" values="0;-36" dur="0.45s" repeatCount="indefinite" />
        </line>
      </g>

      {/* El corredor sube y baja dos veces por zancada */}
      <g>
        <Shift
          values={['0 0', '0 -3.5', '0 0', '0 -3.5', '0 0']}
          times={[0, 0.25, 0.5, 0.75, 1]}
          dur={DUR}
        />

        {/* Pierna y brazo del lado lejano */}
        <polyline stroke="#BFD0FF" strokeWidth="5">
          <Motion attr="points" values={legValues(2)} dur={DUR} times={[0, 0.25, 0.5, 0.75, 1]} linear />
        </polyline>
        <polyline stroke="#BFD0FF" strokeWidth="4.5">
          <Motion attr="points" values={armValues(0)} dur={DUR} times={[0, 0.25, 0.5, 0.75, 1]} linear />
        </polyline>

        {/* Tronco inclinado hacia delante y cabeza */}
        <line x1={HIP[0]} y1={HIP[1]} x2={SHOULDER[0] + 2} y2={SHOULDER[1]} strokeWidth="8" />
        <circle cx="132" cy="49" r="7.5" fill="#fff" stroke="none" />

        {/* Pierna y brazo del lado cercano, en oposición */}
        <polyline strokeWidth="5.5">
          <Motion attr="points" values={legValues(0)} dur={DUR} times={[0, 0.25, 0.5, 0.75, 1]} linear />
        </polyline>
        <polyline strokeWidth="5">
          <Motion attr="points" values={armValues(2)} dur={DUR} times={[0, 0.25, 0.5, 0.75, 1]} linear />
        </polyline>
      </g>
    </g>
  </svg>
);

export default RunningAnimation;
