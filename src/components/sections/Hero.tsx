import { Avatar, Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { IconBrandLinkedin, IconDownload, IconMail, IconMapPin } from '@tabler/icons-react';

import Reveal from '../common/Reveal';
import profilePhoto from '../../assets/profile.jpg';
import { profile } from '../../data/profile';

const fadeInUp = {
  '@keyframes heroFadeInUp': {
    from: { opacity: 0, transform: 'translateY(16px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  opacity: 0,
  animation: 'heroFadeInUp 0.7s ease forwards',
};

const Hero = () => {
  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        '@media (prefers-reduced-motion: reduce)': {
          '& *': { animation: 'none !important', opacity: '1 !important', transform: 'none !important' },
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
        <Reveal>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            alignItems="center"
          >
            <Box
              sx={{
                '@keyframes heroFloat': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
                animation: 'heroFloat 5s ease-in-out infinite',
              }}
            >
              <Avatar
                src={profilePhoto}
                alt={profile.name}
                sx={{
                  width: { xs: 132, md: 164 },
                  height: { xs: 132, md: 164 },
                  boxShadow: '0 8px 24px rgba(41,82,227,0.25)',
                }}
              />
            </Box>

            <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, ...fadeInUp }}>
                {profile.name}
              </Typography>

              <Typography
                variant="h5"
                sx={{ color: 'text.secondary', fontWeight: 500, ...fadeInUp, animationDelay: '0.1s' }}
              >
                {profile.headline}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ color: 'text.secondary', ...fadeInUp, animationDelay: '0.2s' }}
              >
                <IconMapPin size={18} />
                <Typography variant="body2">{profile.location}</Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ pt: 1, ...fadeInUp, animationDelay: '0.3s' }}
              >
                <Button
                  variant="contained"
                  startIcon={<IconBrandLinkedin size={18} />}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<IconMail size={18} />}
                  href={`mailto:${profile.email}`}
                >
                  Contactar
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<IconDownload size={18} />}
                  href="/cv/CV_Javier_Pintado_Navarro.pdf"
                  download
                >
                  Descargar CV
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mt: 5,
              justifyContent: { xs: 'center', md: 'flex-start' },
              ...fadeInUp,
              animationDelay: '0.4s',
            }}
          >
            {['React', 'TypeScript', 'Spring Boot', 'Material UI'].map((tech) => (
              <Chip key={tech} label={tech} variant="outlined" color="primary" />
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Hero;
