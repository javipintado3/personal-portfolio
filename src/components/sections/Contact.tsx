import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react';

import Reveal from '../common/Reveal';
import { profile } from '../../data/profile';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: IconMail, external: false },
  { label: 'LinkedIn', value: 'Conecta conmigo', href: profile.linkedin, Icon: IconBrandLinkedin, external: true },
  { label: 'GitHub', value: 'Mira mi código', href: profile.github, Icon: IconBrandGithub, external: true },
];

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Reveal>
          <Paper
            elevation={0}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              p: { xs: 4, md: 7 },
              borderRadius: 3,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #2952E3 0%, #6C4CE0 55%, #A24BE0 100%)',
              color: '#fff',
              boxShadow: '0 24px 60px -20px rgba(41, 82, 227, 0.55)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.28) 1.5px, transparent 1.5px)',
                backgroundSize: '22px 22px',
                maskImage: 'linear-gradient(135deg, #000 0%, transparent 65%)',
                WebkitMaskImage: 'linear-gradient(135deg, #000 0%, transparent 65%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: 420,
                height: 420,
                background: 'radial-gradient(circle, rgba(255,255,255,0.28) 0%, transparent 65%)',
              }}
            />

            <Stack alignItems="center" spacing={2} sx={{ position: 'relative' }}>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                ¿Hablamos?
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.92, maxWidth: 480 }}>
                Estoy abierto a nuevas oportunidades como desarrollador full stack. Escríbeme o conecta conmigo.
              </Typography>
              <Chip
                icon={<IconMapPin size={16} color="#fff" />}
                label={profile.location}
                sx={{ bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', backdropFilter: 'blur(6px)' }}
              />
            </Stack>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              sx={{ position: 'relative', mt: 5 }}
            >
              {channels.map(({ label, value, href, Icon, external }) => (
                <Box
                  key={label}
                  component="a"
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    p: 2.5,
                    borderRadius: 2,
                    color: '#fff',
                    textDecoration: 'none',
                    textAlign: 'left',
                    bgcolor: 'rgba(255,255,255,0.14)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.25s ease, background-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      bgcolor: 'rgba(255,255,255,0.24)',
                    },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box
                      sx={{
                        display: 'flex',
                        p: 1.2,
                        borderRadius: 3,
                        bgcolor: '#fff',
                        color: 'primary.main',
                      }}
                    >
                      <Icon size={24} />
                    </Box>
                    <IconArrowUpRight size={20} style={{ opacity: 0.8 }} />
                  </Stack>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2 }}>
                    {label}
                  </Typography>
                  <Typography variant="body2" noWrap sx={{ opacity: 0.9 }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Contact;
