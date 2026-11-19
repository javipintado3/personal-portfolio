import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { IconBrandGithub, IconCircleCheck, IconCircleFilled, IconExternalLink } from '@tabler/icons-react';

import ImageGallery from '../common/ImageGallery';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import { projects, type ProjectEntry } from '../../data/profile';

// Con `reverse` la tarjeta enseña las capturas a la izquierda y el texto a la derecha (solo en pantallas grandes)
const ProjectCard = ({ project, reverse }: { project: ProjectEntry; reverse: boolean }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 2.5, md: 3.5 },
        borderRadius: 3,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: reverse ? 'row-reverse' : 'row' }}
        spacing={{ xs: 3, md: 5 }}
        sx={{ alignItems: { md: 'center' } }}
      >
        <Stack spacing={1.5} sx={{ flex: 1, minWidth: 0 }}>
          <Stack direction="row" spacing={1.5} useFlexGap sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {project.name}
            </Typography>
            <Chip
              label={project.status.label}
              size="small"
              color={project.status.color}
              variant="outlined"
              icon={<IconCircleFilled size={8} />}
              sx={{ fontWeight: 600 }}
            />
          </Stack>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
            {project.period}
          </Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
            {project.highlights.map((highlight) => (
              <Stack key={highlight} direction="row" spacing={0.75} sx={{ alignItems: 'center', color: 'text.secondary' }}>
                <IconCircleCheck size={16} color="#22C55E" />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {highlight}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {project.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" />
            ))}
          </Box>
          <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap', pt: 1 }}>
            {project.demo ? (
              <Button
                variant="contained"
                startIcon={<IconExternalLink size={18} />}
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver demo
              </Button>
            ) : null}
            {project.github ? (
              <Button
                variant="outlined"
                startIcon={<IconBrandGithub size={18} />}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            ) : null}
          </Stack>
        </Stack>

        {project.images ? (
          <Box sx={{ minWidth: 0, width: { xs: '100%', md: '55%' }, flexShrink: 0 }}>
            <ImageGallery images={project.images} variant={project.imagesVariant} />
          </Box>
        ) : null}
      </Stack>
    </Paper>
  );
};

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <SectionTitle>Proyectos</SectionTitle>

        <Grid container spacing={3} sx={{ alignItems: 'flex-start' }}>
          {projects.map((project, index) => (
            <Grid key={project.name} size={{ xs: 12 }}>
              <Reveal>
                <ProjectCard project={project} reverse={index % 2 === 1} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
