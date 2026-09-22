import { Box, Container, Typography } from '@mui/material';

import { profile } from '../../data/profile';

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 3 }}>
          Sobre mí
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem' }}>
          {profile.about}
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
