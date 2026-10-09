import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material';
import { IconBrandLinkedin, IconDownload, IconMail, IconMapPin } from '@tabler/icons-react';

import profilePhoto from '../../assets/profile.jpg';
import { profile } from '../../data/profile';

const [firstName, ...lastNames] = profile.name.split(' ');

const slideInLeft = (delay: number) => ({
  '@keyframes heroSlideInLeft': {
    from: { opacity: 0, transform: 'translateX(-48px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  opacity: 0,
  animation: `heroSlideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s forwards`,
});

const Hero = () => {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 14, md: 22 },
        pb: { xs: 6, md: 8 },
        '@media (prefers-reduced-motion: reduce)': {
          '& *, & *::before, & *::after': {
            animation: 'none !important',
            opacity: '1 !important',
            transform: 'none !important',
          },
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          '@keyframes heroDrift1': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(40px, 25px)' },
          },
          '@keyframes heroDrift2': {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '50%': { transform: 'translate(-35px, 20px)' },
          },
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: { xs: 260, md: 420 },
            height: { xs: 260, md: 420 },
            borderRadius: '50%',
            filter: 'blur(60px)',
          },
          '&::before': {
            top: '5%',
            left: '5%',
            background: 'rgba(41,82,227,0.16)',
            animation: 'heroDrift1 14s ease-in-out infinite',
          },
          '&::after': {
            top: '0%',
            right: '5%',
            background: 'rgba(108,76,224,0.16)',
            animation: 'heroDrift2 16s ease-in-out infinite',
          },
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 6, md: 4 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            spacing={2.5}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            sx={{ textAlign: { xs: 'center', md: 'left' }, flex: 1 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.75,
                py: 0.75,
                borderRadius: 999,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 4px 14px rgba(41,82,227,0.12)',
                ...slideInLeft(0.1),
              }}
            >
              <Box
                sx={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  bgcolor: '#22C55E',
                  '@keyframes heroPulse': {
                    '0%': { boxShadow: '0 0 0 0 rgba(34,197,94,0.6)' },
                    '100%': { boxShadow: '0 0 0 10px rgba(34,197,94,0)' },
                  },
                  animation: 'heroPulse 1.8s ease-out infinite',
                }}
              />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Abierto a nuevas oportunidades
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.6rem', md: '3.6rem' }, lineHeight: 1.05, ...slideInLeft(0.25) }}
            >
              {firstName}
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background: 'linear-gradient(90deg, #2952E3 0%, #6C4CE0 60%, #A24BE0 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {lastNames.join(' ')}
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: 'text.secondary', fontWeight: 500, ...slideInLeft(0.4) }}
            >
              {profile.headline}
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ color: 'text.secondary', ...slideInLeft(0.5) }}
            >
              <IconMapPin size={18} />
              <Typography variant="body2">{profile.location}</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1.5}
              useFlexGap
              flexWrap="wrap"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ pt: 1, '& .MuiButton-root': { whiteSpace: 'nowrap' }, ...slideInLeft(0.65) }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<IconBrandLinkedin size={18} />}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button variant="outlined" size="large" startIcon={<IconMail size={18} />} href={`mailto:${profile.email}`}>
                Contactar
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconDownload size={18} />}
                href="/cv/CV_Javier_Pintado_Navarro.pdf"
                download
              >
                Descargar CV
              </Button>
            </Stack>
          </Stack>

          <Box
            sx={{
              position: 'relative',
              flexShrink: 0,
              '@keyframes heroPop': {
                from: { opacity: 0, transform: 'scale(0.8)' },
                to: { opacity: 1, transform: 'scale(1)' },
              },
              opacity: 0,
              animation: 'heroPop 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '50%',
                p: '7px',
                width: { xs: 220, md: 290 },
                height: { xs: 220, md: 290 },
                boxShadow: '0 24px 60px -18px rgba(41,82,227,0.55)',
                '@keyframes heroSpin': {
                  to: { transform: 'rotate(360deg)' },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '-50%',
                  background:
                    'conic-gradient(from 0deg, #2952E3, #A24BE0, #22D3EE, #6C4CE0, #2952E3)',
                  animation: 'heroSpin 6s linear infinite',
                },
              }}
            >
              <Avatar
                src={profilePhoto}
                alt={profile.name}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  border: '6px solid',
                  borderColor: 'background.default',
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
