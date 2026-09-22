import { Avatar, Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-react';

import Reveal from '../common/Reveal';
import profilePhoto from '../../assets/profile.jpg';
import { profile } from '../../data/profile';

const Hero = () => {
  return (
    <Box
      id="top"
      sx={{
        py: { xs: 8, md: 12 },
        background:
          'radial-gradient(circle at 15% 20%, rgba(41,82,227,0.12), transparent 45%), radial-gradient(circle at 85% 0%, rgba(108,76,224,0.14), transparent 40%)',
      }}
    >
      <Container maxWidth="md">
        <Reveal>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            alignItems="center"
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

            <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
                {profile.name}
              </Typography>

              <Typography variant="h5" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {profile.headline}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ color: 'text.secondary' }}
              >
                <IconMapPin size={18} />
                <Typography variant="body2">{profile.location}</Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ pt: 1 }}
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
