import { Box, Container, Grid, Paper, Typography } from '@mui/material';

import Reveal from '../common/Reveal';
import { stats } from '../../data/profile';

const Stats = () => {
  return (
    <Box sx={{ py: { xs: 3, md: 4 } }}>
      <Container maxWidth="md">
        <Reveal>
          <Grid container spacing={2}>
            {stats.map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: { xs: 2, md: 2.5 },
                    height: '100%',
                    borderRadius: 3,
                    textAlign: 'center',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '1.9rem', md: '2.3rem' },
                      background: 'linear-gradient(90deg, #2952E3 0%, #6C4CE0 60%, #A24BE0 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, lineHeight: 1.4 }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Stats;
