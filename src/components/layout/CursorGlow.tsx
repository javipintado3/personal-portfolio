import type { MouseEvent, ReactNode } from 'react';

import { Box } from '@mui/material';

// Envuelve la página y deja un halo de color suave siguiendo al ratón.
// La posición se guarda en variables CSS: no hay estado ni re-renders al mover el cursor.
const CursorGlow = ({ children }: { children: ReactNode }) => {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--cursor-x', `${event.clientX}px`);
    event.currentTarget.style.setProperty('--cursor-y', `${event.clientY}px`);
  };

  return (
    <Box onMouseMove={handleMove}>
      <Box
        aria-hidden
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'radial-gradient(480px circle at var(--cursor-x, -500px) var(--cursor-y, -500px), rgba(108,76,224,0.09), transparent 65%)',
          '@media (prefers-reduced-motion: reduce), (hover: none)': { display: 'none' },
        }}
      />
      {children}
    </Box>
  );
};

export default CursorGlow;
