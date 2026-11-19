import type { MouseEvent } from 'react';

import { Paper, type PaperProps } from '@mui/material';

// Inclinación máxima en grados: se mantiene baja para que el efecto sea sutil.
const MAX_TILT = 2;

// Tarjeta que se inclina un poco hacia el ratón y deja un brillo suave bajo el cursor.
// La posición se guarda en variables CSS del propio elemento: no hay estado ni re-renders.
const TiltCard = ({ sx, children, ...rest }: PaperProps) => {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--tilt-x', `${(0.5 - y) * MAX_TILT}deg`);
    card.style.setProperty('--tilt-y', `${(x - 0.5) * MAX_TILT}deg`);
    card.style.setProperty('--glow-x', `${x * 100}%`);
    card.style.setProperty('--glow-y', `${y * 100}%`);
  };

  const handleLeave = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <Paper
      {...rest}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      sx={[
        {
          position: 'relative',
          transform: 'perspective(1200px) translateY(var(--lift, 0px)) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))',
          transition: 'transform 0.2s ease-out, box-shadow 0.25s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            background: 'radial-gradient(420px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(108,76,224,0.10), transparent 60%)',
          },
          '&:hover': { boxShadow: 6, '--lift': '-6px' },
          '&:hover::before': { opacity: 1 },
          '@media (prefers-reduced-motion: reduce)': { transform: 'none', transition: 'none' },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Paper>
  );
};

export default TiltCard;
