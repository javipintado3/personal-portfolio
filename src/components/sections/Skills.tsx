import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { IconLayout2, IconServer, IconTools, type Icon } from '@tabler/icons-react';

import Reveal from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import { skillGroups } from '../../data/profile';

type Look = {
  icon: Icon;
  from: string;
  to: string;
};

/** Cada grupo tiene su color e icono, en el mismo orden que `skillGroups`: frontend, backend y herramientas. */
const LOOKS: Look[] = [
  { icon: IconLayout2, from: '#2952E3', to: '#38BDF8' },
  { icon: IconServer, from: '#7C3AED', to: '#EC4899' },
  { icon: IconTools, from: '#059669', to: '#22D3EE' },
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <SectionTitle>Habilidades</SectionTitle>

        <Grid container spacing={3}>
          {skillGroups.map((group, index) => {
            const look = LOOKS[index % LOOKS.length];
            const GroupIcon = look.icon;
            return (
              <Grid key={group.title} size={{ xs: 12, sm: 4 }}>
                <Reveal stretch>
                  <Box
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      p: 3,
                      pt: 3.5,
                      borderRadius: 3,
                      border: 1,
                      borderColor: 'divider',
                      bgcolor: 'background.default',
                      boxShadow: `0 10px 30px ${look.from}1f`,
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 16px 36px ${look.from}40`,
                      },
                      // Franja de color arriba
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: '0 0 auto 0',
                        height: 6,
                        background: `linear-gradient(90deg, ${look.from}, ${look.to})`,
                      },
                    }}
                  >
                    {/* Icono grande de fondo, como marca de agua */}
                    <Box
                      aria-hidden
                      sx={{ position: 'absolute', right: -20, bottom: -24, color: look.from, opacity: 0.08 }}
                    >
                      <GroupIcon size={140} stroke={1.2} />
                    </Box>

                    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: 2.5,
                            display: 'grid',
                            placeItems: 'center',
                            color: '#fff',
                            background: `linear-gradient(135deg, ${look.from}, ${look.to})`,
                            boxShadow: `0 8px 20px ${look.from}59`,
                          }}
                        >
                          <GroupIcon size={22} />
                        </Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {group.title}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {group.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: `${look.from}1a`,
                              border: 1,
                              borderColor: `${look.from}40`,
                              color: 'text.primary',
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
