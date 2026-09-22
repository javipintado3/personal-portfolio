import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { IconBrandGithub } from '@tabler/icons-react';

import Reveal from '../common/Reveal';
import { projects } from '../../data/profile';

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 4 }}>
          Proyectos
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.name} size={{ xs: 12, sm: 6 }}>
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.period}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.7, flexGrow: 1 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                      ))}
                    </Box>
                    <Button
                      size="small"
                      startIcon={<IconBrandGithub size={16} />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ alignSelf: 'flex-start', mt: 1 }}
                    >
                      Ver en GitHub
                    </Button>
                  </Stack>
                </Paper>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
