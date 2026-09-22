import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { IconBriefcase } from '@tabler/icons-react';

import { experience } from '../../data/profile';

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' }, mb: 5 }}>
          Experiencia
        </Typography>

        <Stack spacing={0}>
          {experience.map((entry, index) => (
            <Stack key={`${entry.company}-${entry.period}`} direction="row" spacing={3}>
              <Stack alignItems="center" sx={{ pt: 0.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <IconBriefcase size={20} />
                </Box>
                {index < experience.length - 1 ? (
                  <Box sx={{ width: 2, flexGrow: 1, bgcolor: 'divider', my: 1 }} />
                ) : null}
              </Stack>

              <Box sx={{ pb: index < experience.length - 1 ? 5 : 0 }}>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0.5, sm: 1.5 }}
                  alignItems={{ sm: 'baseline' }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {entry.role}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    · {entry.company}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  {entry.period} · {entry.duration} · {entry.location} · {entry.workMode}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1.5, color: 'text.primary', lineHeight: 1.7 }}>
                  {entry.description}
                </Typography>

                {entry.bullets ? (
                  <Stack component="ul" spacing={0.75} sx={{ mt: 1.5, pl: 2.5, color: 'text.secondary' }}>
                    {entry.bullets.map((bullet) => (
                      <Typography key={bullet} component="li" variant="body2" sx={{ lineHeight: 1.7 }}>
                        {bullet}
                      </Typography>
                    ))}
                  </Stack>
                ) : null}

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {entry.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
