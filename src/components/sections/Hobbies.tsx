import type { ComponentType } from 'react';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { IconBarbell, IconBrandStrava, IconRotate2, IconRun, IconTrophy, type Icon } from '@tabler/icons-react';

import FlipCard from '../common/FlipCard';
import Reveal from '../common/Reveal';
import GymAnimation from '../common/animations/GymAnimation';
import RowingAnimation from '../common/animations/RowingAnimation';
import RunningAnimation from '../common/animations/RunningAnimation';
import { hobbies, type HobbyAnimation } from '../../data/profile';

type Look = {
  icon: Icon;
  animation: ComponentType;
  /** Colores del acento (cara delantera) y fondo de la cara de atrás. */
  from: string;
  to: string;
  backEnd: string;
};

/** Cada afición tiene su color: azul para el agua, naranja para la carrera, violeta para el gimnasio. */
const LOOKS: Record<HobbyAnimation, Look> = {
  rowing: { icon: IconTrophy, animation: RowingAnimation, from: '#2952E3', to: '#38BDF8', backEnd: '#1B1F3B' },
  running: { icon: IconRun, animation: RunningAnimation, from: '#F97316', to: '#EC4899', backEnd: '#6B1D5C' },
  gym: { icon: IconBarbell, animation: GymAnimation, from: '#7C3AED', to: '#6366F1', backEnd: '#1B1F3B' },
};

const CARD_HEIGHT = 330;

const Hobbies = () => {
  return (
    <Box id="hobbies" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 4 }}>
          Fuera del trabajo
        </Typography>

        <Grid container spacing={3}>
          {hobbies.map((hobby) => {
            const look = LOOKS[hobby.animation];
            const HobbyIcon = look.icon;
            const Animation = look.animation;
            return (
              <Grid key={hobby.title} size={{ xs: 12, sm: 4 }}>
                <Reveal stretch>
                  <FlipCard
                    front={
                      <Box
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          height: '100%',
                          minHeight: CARD_HEIGHT,
                          p: 3,
                          pt: 3.5,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1.5,
                          borderRadius: 4,
                          border: 1,
                          borderColor: 'divider',
                          bgcolor: 'background.paper',
                          boxShadow: `0 10px 30px ${look.from}1f`,
                          // Franja de color arriba
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: '0 0 auto 0',
                            height: 6,
                            background: `linear-gradient(90deg, ${look.from}, ${look.to})`,
                          },
                        }}
                      >
                        {/* Icono grande de fondo, como marca de agua */}
                        <Box
                          aria-hidden
                          sx={{ position: 'absolute', right: -24, bottom: -28, color: look.from, opacity: 0.08 }}
                        >
                          <HobbyIcon size={170} stroke={1.2} />
                        </Box>

                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 3,
                            display: 'grid',
                            placeItems: 'center',
                            color: '#fff',
                            background: `linear-gradient(135deg, ${look.from}, ${look.to})`,
                            boxShadow: `0 8px 20px ${look.from}59`,
                          }}
                        >
                          <HobbyIcon size={28} />
                        </Box>

                        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.25, fontSize: '1.1rem' }}>
                          {hobby.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1, position: 'relative' }}
                        >
                          {hobby.description}
                        </Typography>

                        {/* Pista de que la tarjeta gira */}
                        <Box
                          sx={{
                            alignSelf: 'flex-start',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 1.25,
                            py: 0.5,
                            borderRadius: 99,
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: look.from,
                            bgcolor: `${look.from}1a`,
                            position: 'relative',
                          }}
                        >
                          <IconRotate2 size={14} />
                          <Box component="span" sx={{ '@media (hover: none)': { display: 'none' } }}>
                            Pasa el ratón
                          </Box>
                          <Box component="span" sx={{ display: 'none', '@media (hover: none)': { display: 'inline' } }}>
                            Toca para girar
                          </Box>
                        </Box>
                      </Box>
                    }
                    back={
                      <Box
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          height: '100%',
                          minHeight: CARD_HEIGHT,
                          p: 3,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1.5,
                          borderRadius: 4,
                          color: '#fff',
                          background: `linear-gradient(150deg, ${look.from} 0%, ${look.backEnd} 100%)`,
                          boxShadow: `0 18px 40px ${look.from}59`,
                          // Brillo suave en una esquina
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: -70,
                            right: -70,
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.12)',
                            pointerEvents: 'none',
                          },
                        }}
                      >
                        <Box sx={{ width: '100%', maxWidth: 270, position: 'relative' }}>
                          <Animation />
                        </Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, position: 'relative' }}>
                          {hobby.title}
                        </Typography>
                        {hobby.cta ? (
                          <Box sx={{ position: 'relative', display: 'grid', justifyItems: 'center', gap: 0.75, mt: 0.5 }}>
                            {hobby.cta.caption ? (
                              <Typography variant="caption" sx={{ opacity: 0.9, textAlign: 'center', lineHeight: 1.3 }}>
                                {hobby.cta.caption}
                              </Typography>
                            ) : null}
                            <Button
                              variant="contained"
                              href={hobby.cta.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              startIcon={<IconBrandStrava size={18} />}
                              // En táctil, pulsar el botón no debe volver a girar la tarjeta
                              onPointerUp={(event) => event.stopPropagation()}
                              sx={{
                                px: 2.5,
                                py: 1,
                                borderRadius: 99,
                                fontWeight: 700,
                                color: look.from,
                                bgcolor: '#fff',
                                '&:hover': { bgcolor: '#fff', transform: 'translateY(-1px)' },
                                // Anillo que late suave para que el botón destaque
                                animation: 'ctaPulse 2.2s ease-out infinite',
                                '@keyframes ctaPulse': {
                                  '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.55)' },
                                  '70%': { boxShadow: '0 0 0 12px rgba(255, 255, 255, 0)' },
                                  '100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' },
                                },
                                '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
                              }}
                            >
                              {hobby.cta.label}
                            </Button>
                          </Box>
                        ) : null}
                      </Box>
                    }
                  />
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hobbies;
