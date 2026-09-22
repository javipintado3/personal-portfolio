import { createTheme, type PaletteMode } from '@mui/material';

const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#2952E3',
      },
      secondary: {
        main: '#1B1F3B',
      },
      background:
        mode === 'light'
          ? { default: '#F7F8FC', paper: '#FFFFFF' }
          : { default: '#0B0E1A', paper: '#141830' },
    },
    typography: {
      fontFamily: '"Public Sans Variable", "Public Sans", sans-serif',
      h1: {
        fontFamily: '"Pathway Extreme Variable", "Pathway Extreme", sans-serif',
        fontWeight: 700,
      },
      h2: {
        fontFamily: '"Pathway Extreme Variable", "Pathway Extreme", sans-serif',
        fontWeight: 700,
      },
      h3: {
        fontFamily: '"Pathway Extreme Variable", "Pathway Extreme", sans-serif',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 999,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
    },
  });

export default getTheme;
