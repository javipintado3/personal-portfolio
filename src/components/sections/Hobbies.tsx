import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { IconBarbell, IconRun, IconTrophy } from '@tabler/icons-react';

import Reveal from '../common/Reveal';
import { hobbies } from '../../data/profile';

const ICONS = [IconTrophy, IconRun, IconBarbell];

const Hobbies = () => {
  return (
    <Box id="hobbies" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 4 }}>
          Fuera del trabajo
        </Typography>

        <Grid container spacing={3}>
          {hobbies.map((hobby, index) => {
            const Icon = ICONS[index];
            return (
              <Grid key={hobby.title} size={{ xs: 12, sm: 4 }}>
                <Reveal>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Stack spacing={1.5} sx={{ height: '100%' }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={22} />
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {hobby.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, flexGrow: 1 }}>
                        {hobby.description}
                      </Typography>
                      {hobby.cta ? (
                        <Button
                          size="small"
                          variant="outlined"
                          href={hobby.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ alignSelf: 'flex-start' }}
                        >
                          {hobby.cta.label}
                        </Button>
                      ) : null}
                    </Stack>
                  </Paper>
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
