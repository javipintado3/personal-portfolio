import { Fab } from '@mui/material';
import { IconArrowUp } from '@tabler/icons-react';

/**
 * Botón flotante para volver arriba. Aparece al bajar un poco gracias a la
 * animación ligada al scroll del navegador (sin JavaScript); donde no está
 * soportada, se queda oculto.
 */
const BackToTop = () => {
  return (
    <Fab
      color="primary"
      size="medium"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      sx={{
        position: 'fixed',
        right: { xs: 16, md: 28 },
        bottom: { xs: 16, md: 28 },
        zIndex: (theme) => theme.zIndex.appBar - 1,
        opacity: 0,
        visibility: 'hidden',
        '@keyframes backToTopShow': {
          from: { opacity: 0, visibility: 'hidden', transform: 'translateY(12px)' },
          to: { opacity: 1, visibility: 'visible', transform: 'translateY(0)' },
        },
        animation: 'backToTopShow linear both',
        animationTimeline: 'scroll(root)',
        animationRange: '400px 600px',
        '@supports not (animation-timeline: scroll())': { display: 'none' },
      }}
    >
      <IconArrowUp size={22} />
    </Fab>
  );
};

export default BackToTop;
