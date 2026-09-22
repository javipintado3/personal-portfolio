import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2952E3',
    },
    secondary: {
      main: '#1B1F3B',
    },
    background: {
      default: '#F7F8FC',
      paper: '#FFFFFF',
    },
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

export default theme;
