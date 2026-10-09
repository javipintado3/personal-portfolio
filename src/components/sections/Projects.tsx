import { useState } from 'react';

import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

import ImageGallery from '../common/ImageGallery';
import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import { projects, type ProjectEntry } from '../../data/profile';

const LONG_DESCRIPTION_LENGTH = 220;

const ProjectCard = ({ project }: { project: ProjectEntry }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = project.description.length > LONG_DESCRIPTION_LENGTH;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 2.5, md: 3.5 },
        height: '100%',
        borderRadius: 3,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 6,
        },
      }}
    >
      <Stack
        direction={{ xs: 'column', md: project.images ? 'row' : 'column' }}
        spacing={{ xs: 3, md: 4 }}
        alignItems={{ md: project.images ? 'center' : 'stretch' }}
        sx={{ height: '100%' }}
      >
        <Stack spacing={1.5} sx={{ flex: 1, minWidth: 0, height: '100%' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {project.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600 }}>
            {project.period}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.7,
              flexGrow: 1,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: expanded || !isLong ? 'unset' : 4,
              overflow: 'hidden',
            }}
          >
            {project.description}
          </Typography>
          {isLong ? (
            <Button
              size="small"
              onClick={() => setExpanded((current) => !current)}
              sx={{ alignSelf: 'flex-start', px: 0, minWidth: 0 }}
            >
              {expanded ? 'Leer menos' : 'Leer más'}
            </Button>
          ) : null}
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
            <Button
              variant="outlined"
              startIcon={<IconBrandGithub size={18} />}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Stack>
        </Stack>

        {project.images ? (
          <Box sx={{ flex: 1.1, minWidth: 0, width: '100%' }}>
            <ImageGallery images={project.images} />
          </Box>
        ) : null}
      </Stack>
    </Paper>
  );
};

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <SectionTitle>Proyectos</SectionTitle>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.name} size={{ xs: 12, sm: project.images ? 12 : 6 }}>
              <Reveal>
                <ProjectCard project={project} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
