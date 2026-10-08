import { useState, type ReactNode } from 'react';

import { Box } from '@mui/material';

type FlipCardProps = {
  front: ReactNode;
  /** Se monta al girar y se desmonta cuando ha terminado de volver: así no desaparece a medio giro. */
  back: ReactNode;
};

/** Duración fija del giro, en milisegundos. */
const FLIP_MS = 1000;

/**
 * Tarjeta que se da la vuelta (1 segundo) al pasar el ratón por encima.
 *
 * - Ratón: gira al entrar y se queda girada mientras el ratón siga encima, para
 *   poder pulsar lo que haya en la cara de atrás. Al salir, vuelve.
 * - Táctil: un toque la gira y otro la devuelve (no hay "pasar por encima").
 * - Teclado: gira al enfocarla con el tabulador.
 * - Con "reducir movimiento" activado en el sistema, el giro es casi instantáneo.
 *
 * Los eventos de ratón están en el contenedor exterior, que no gira: si
 * estuvieran en la tarjeta, al girar se estrecha, el puntero quedaría fuera de
 * ella y la tarjeta parpadearía entre las dos caras.
 *
 * Las dos caras ocupan la misma celda de una rejilla, así la tarjeta mide lo que
 * mida la cara más alta y no salta al girar.
 */
const FlipCard = ({ front, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [backMounted, setBackMounted] = useState(false);

  const flip = (value: boolean) => {
    setFlipped(value);
    if (value) setBackMounted(true);
  };

  return (
    <Box
      tabIndex={0}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') flip(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') flip(false);
      }}
      onPointerUp={(event) => {
        if (event.pointerType !== 'mouse') flip(!flipped);
      }}
      onFocus={(event) => {
        if (event.currentTarget.matches(':focus-visible')) flip(true);
      }}
      onBlur={(event) => {
        // Pasar el foco al botón de la cara de atrás no cuenta como salir de la tarjeta
        if (!event.currentTarget.contains(event.relatedTarget)) flip(false);
      }}
      sx={{
        height: '100%',
        perspective: '1400px',
        outline: 'none',
        borderRadius: 4,
        '&:focus-visible': { outline: 2, outlineStyle: 'solid', outlineColor: 'primary.main', outlineOffset: 3 },
      }}
    >
      <Box
        onTransitionEnd={(event) => {
          // Cuando acaba de volver, ya se puede soltar la cara de atrás
          if (event.target === event.currentTarget && event.propertyName === 'transform' && !flipped) {
            setBackMounted(false);
          }
        }}
        sx={{
          display: 'grid',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: `transform ${FLIP_MS}ms cubic-bezier(0.45, 0.05, 0.25, 1)`,
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          '@media (prefers-reduced-motion: reduce)': { transition: 'transform 1ms' },
        }}
      >
        {/* La cara oculta no recibe clics ni foco: se esconde justo cuando queda de canto (a mitad del giro) */}
        <Box
          sx={{
            gridArea: '1 / 1',
            backfaceVisibility: 'hidden',
            visibility: flipped ? 'hidden' : 'visible',
            transition: `visibility 0s linear ${flipped ? FLIP_MS / 2 : 0}ms`,
          }}
        >
          {front}
        </Box>
        <Box
          sx={{
            gridArea: '1 / 1',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            visibility: flipped ? 'visible' : 'hidden',
            transition: `visibility 0s linear ${flipped ? 0 : FLIP_MS / 2}ms`,
          }}
        >
          {backMounted ? back : null}
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;
