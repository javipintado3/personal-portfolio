import { Motion, Shift } from './Motion';
import { points } from './points';

const DUR = 1.8;

/** Un punto del remo: el otro extremo (la pala) queda al lado opuesto del tolete. */
const PIVOT: [number, number] = [150, 88];
const blade = (handle: [number, number]): [number, number] => [
  PIVOT[0] + (PIVOT[0] - handle[0]) * 1.4,
  PIVOT[1] + (PIVOT[1] - handle[1]) * 1.4,
];

const HIP: [number, number] = [122, 92];

/** Las dos posturas de la palada: ataque (cuerpo adelante, pala al agua) y final (cuerpo atrás). */
const CATCH = { shoulder: [112, 66], head: [110, 55], hand: [94, 68], knee: [100, 78], foot: [86, 98] } as const;
const FINISH = { shoulder: [134, 67], head: [138, 56], hand: [136, 78], knee: [104, 95], foot: [86, 98] } as const;

const catchBlade = blade([CATCH.hand[0], CATCH.hand[1]]);
const finishBlade = blade([FINISH.hand[0], FINISH.hand[1]]);

/** Una cresta y un valle son 40 unidades: moviendo la ola 40 el bucle no se nota. */
const wave = (y: number) => {
  let d = `M-40 ${y} q10 -6 20 0`;
  for (let i = 0; i < 15; i += 1) d += ' t20 0';
  return `${d} L280 150 L-40 150 Z`;
};

/** Remero en su bote: palada completa cada 1,8 segundos. */
const RowingAnimation = () => (
  <svg viewBox="22 44 196 100" role="img" aria-label="Ilustración de una persona remando" width="100%">
    <defs>
      {/* El agua se desvanece hacia abajo y por los lados, en vez de cortarse en seco */}
      <linearGradient id="row-water" gradientUnits="userSpaceOnUse" x1="0" y1="100" x2="0" y2="142">
        <stop offset="0" stopColor="#fff" stopOpacity="1" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="row-edges" gradientUnits="userSpaceOnUse" x1="22" y1="0" x2="218" y2="0">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.14" stopColor="#fff" stopOpacity="1" />
        <stop offset="0.86" stopColor="#fff" stopOpacity="1" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <mask id="row-mask" maskUnits="userSpaceOnUse" x="-60" y="0" width="360" height="200">
        <rect x="22" y="0" width="196" height="200" fill="url(#row-edges)" />
      </mask>
    </defs>
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Todo lo que va en el bote sube y baja un poco con la palada */}
      <g>
        <Shift values={['0 0', '0 1.6', '0 0']} dur={DUR} />

        {/* Remo: del mango (en las manos) a la pala, pasando por el tolete */}
        <line stroke="#BFD0FF" strokeWidth="2.5">
          <Motion attr="x1" values={[CATCH.hand[0], FINISH.hand[0], CATCH.hand[0]]} dur={DUR} />
          <Motion attr="y1" values={[CATCH.hand[1], FINISH.hand[1], CATCH.hand[1]]} dur={DUR} />
          <Motion attr="x2" values={[catchBlade[0], finishBlade[0], catchBlade[0]]} dur={DUR} />
          <Motion attr="y2" values={[catchBlade[1], finishBlade[1], catchBlade[1]]} dur={DUR} />
        </line>
        <circle cx={PIVOT[0]} cy={PIVOT[1]} r="2.5" fill="#fff" stroke="none" />

        {/* Casco */}
        <path d="M30 96 L214 96 Q206 107 192 107 L52 107 Q38 107 30 96 Z" fill="#fff" stroke="none" />

        {/* Piernas */}
        <polyline strokeWidth="5.5">
          <Motion
            attr="points"
            values={[
              points([HIP[0], HIP[1]], [CATCH.knee[0], CATCH.knee[1]], [CATCH.foot[0], CATCH.foot[1]]),
              points([HIP[0], HIP[1]], [FINISH.knee[0], FINISH.knee[1]], [FINISH.foot[0], FINISH.foot[1]]),
              points([HIP[0], HIP[1]], [CATCH.knee[0], CATCH.knee[1]], [CATCH.foot[0], CATCH.foot[1]]),
            ]}
            dur={DUR}
          />
        </polyline>

        {/* Tronco y cabeza */}
        <line strokeWidth="8">
          <Motion attr="x1" values={[HIP[0], HIP[0], HIP[0]]} dur={DUR} />
          <Motion attr="y1" values={[HIP[1], HIP[1], HIP[1]]} dur={DUR} />
          <Motion attr="x2" values={[CATCH.shoulder[0], FINISH.shoulder[0], CATCH.shoulder[0]]} dur={DUR} />
          <Motion attr="y2" values={[CATCH.shoulder[1], FINISH.shoulder[1], CATCH.shoulder[1]]} dur={DUR} />
        </line>
        <circle r="7.5" fill="#fff" stroke="none">
          <Motion attr="cx" values={[CATCH.head[0], FINISH.head[0], CATCH.head[0]]} dur={DUR} />
          <Motion attr="cy" values={[CATCH.head[1], FINISH.head[1], CATCH.head[1]]} dur={DUR} />
        </circle>

        {/* Brazo */}
        <line stroke="#DDE7FF" strokeWidth="5">
          <Motion attr="x1" values={[CATCH.shoulder[0], FINISH.shoulder[0], CATCH.shoulder[0]]} dur={DUR} />
          <Motion attr="y1" values={[CATCH.shoulder[1], FINISH.shoulder[1], CATCH.shoulder[1]]} dur={DUR} />
          <Motion attr="x2" values={[CATCH.hand[0], FINISH.hand[0], CATCH.hand[0]]} dur={DUR} />
          <Motion attr="y2" values={[CATCH.hand[1], FINISH.hand[1], CATCH.hand[1]]} dur={DUR} />
        </line>
      </g>

      {/* Agua, por delante: la pala queda sumergida */}
      <g mask="url(#row-mask)">
        <path d={wave(100)} fill="url(#row-water)" fillOpacity="0.35" stroke="none">
          <Shift values={['0 0', '-40 0']} dur={2.4} linear />
        </path>
        <path d={wave(108)} fill="url(#row-water)" fillOpacity="0.6" stroke="none">
          <Shift values={['-40 0', '0 0']} dur={1.6} linear />
        </path>
      </g>
    </g>
  </svg>
);

export default RowingAnimation;
