import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

import { profile } from '../../data/profile';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            textAlign: 'center',
            background: 'linear-gradient(135deg, #2952E3 0%, #6C4CE0 100%)',
            color: '#fff',
          }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, mb: 1.5 }}>
            ¿Hablamos?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 4 }}>
            Estoy abierto a nuevas oportunidades como desarrollador full stack. Escríbeme o conecta conmigo en LinkedIn.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              startIcon={<IconMail size={18} />}
              href={`mailto:${profile.email}`}
              sx={{ bgcolor: '#fff', color: 'primary.main', '&:hover': { bgcolor: '#f0f0f0' } }}
            >
              {profile.email}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<IconBrandLinkedin size={18} />}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<IconBrandGithub size={18} />}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
            >
              GitHub
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
