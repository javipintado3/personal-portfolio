import { useState } from 'react';

import {
  alpha,
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  type PaletteMode,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { IconMenu2, IconX } from '@tabler/icons-react';

const NAV_ITEMS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Aficiones', href: '#hobbies' },
  { label: 'Contacto', href: '#contact' },
];

type HeaderProps = {
  mode: PaletteMode;
  onToggleMode: () => void;
};

const Header = ({ mode, onToggleMode }: HeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  const ThemeToggleButton = (
    <IconButton
      onClick={onToggleMode}
      aria-label={mode === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
      color="inherit"
    >
      {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
    </IconButton>
  );

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.85),
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 6 } }}>
        <Typography variant="h6" component="a" href="#top" sx={{ fontWeight: 700, color: 'text.primary', textDecoration: 'none' }}>
          Javier Pintado
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {isMobile ? (
          <Stack direction="row" spacing={0.5} alignItems="center">
            {ThemeToggleButton}
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
              <IconMenu2 />
            </IconButton>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1} alignItems="center">
            {NAV_ITEMS.map((item) => (
              <Button key={item.href} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
            {ThemeToggleButton}
          </Stack>
        )}
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 260 }} role="presentation">
          <Stack direction="row" justifyContent="flex-end" sx={{ p: 1 }}>
            <IconButton onClick={closeDrawer} aria-label="Cerrar menú">
              <IconX />
            </IconButton>
          </Stack>
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton key={item.href} component="a" href={item.href} onClick={closeDrawer}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
