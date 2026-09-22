import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';

import { skillGroups } from '../../data/profile';

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 4 }}>
          Habilidades
        </Typography>

        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid key={group.title} size={{ xs: 12, sm: 4 }}>
              <Paper
                variant="outlined"
                sx={{ p: 3, height: '100%', borderRadius: 3 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
                  {group.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
