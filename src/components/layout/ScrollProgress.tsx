import { Box } from '@mui/material';

/**
 * Línea fina arriba del todo que se llena según se baja por la página.
 * Usa la animación ligada al scroll del navegador (sin JavaScript); donde no
 * está soportada, simplemente no se muestra.
 */
const ScrollProgress = () => {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        transformOrigin: '0 50%',
        background: 'linear-gradient(90deg, #2952E3 0%, #6C4CE0 60%, #A24BE0 100%)',
        '@keyframes scrollProgressGrow': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        animation: 'scrollProgressGrow linear both',
        animationTimeline: 'scroll(root)',
        '@supports not (animation-timeline: scroll())': { display: 'none' },
      }}
    />
  );
};

export default ScrollProgress;
