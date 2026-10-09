import type { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

type SectionTitleProps = {
  children: ReactNode;
  /** Espacio inferior (en unidades del tema) antes del contenido de la sección. */
  mb?: number;
};

const SectionTitle = ({ children, mb = 4 }: SectionTitleProps) => {
  return (
    <Box sx={{ mb }}>
      <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>
        {children}
      </Typography>
      <Box
        aria-hidden
        sx={{
          width: 48,
          height: 4,
          mt: 1.25,
          borderRadius: 999,
          background: 'linear-gradient(90deg, #2952E3 0%, #6C4CE0 60%, #A24BE0 100%)',
        }}
      />
    </Box>
  );
};

export default SectionTitle;
