import { Box, Container, Typography } from '@mui/material';

import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import { profile } from '../../data/profile';

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Reveal>
          <SectionTitle mb={3}>Sobre mí</SectionTitle>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.05rem' }}>
            {profile.about}
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
};

export default About;
