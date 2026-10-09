import { useState, useSyncExternalStore } from 'react';

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
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { IconMail, IconMenu2, IconX } from '@tabler/icons-react';

const NAV_ITEMS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Aficiones', href: '#hobbies' },
  { label: 'Contacto', href: '#contact' },
];

// "Contacto" is shown as the highlighted call-to-action button on desktop.
const DESKTOP_NAV_ITEMS = NAV_ITEMS.filter((item) => item.href !== '#contact');

// Distance from the top of the viewport at which a section counts as the current one.
const ACTIVE_OFFSET = 140;

const subscribeToScroll = (onChange: () => void) => {
  window.addEventListener('scroll', onChange, { passive: true });
  window.addEventListener('resize', onChange);
  return () => {
    window.removeEventListener('scroll', onChange);
    window.removeEventListener('resize', onChange);
  };
};

// Returns the href of the section currently being read (e.g. "#projects"), or "" at the top.
const getActiveHref = () => {
  const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (isAtBottom) return '#contact';

  return NAV_ITEMS.reduce((active, item) => {
    const section = document.querySelector(item.href);
    return section && section.getBoundingClientRect().top <= ACTIVE_OFFSET ? item.href : active;
  }, '');
};

type HeaderProps = {
  mode: PaletteMode;
  onToggleMode: () => void;
};

const Header = ({ mode, onToggleMode }: HeaderProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeHref = useSyncExternalStore(subscribeToScroll, getActiveHref, () => '');

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
        top: 12,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        pointerEvents: 'none',
        px: 2,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        sx={{
          pointerEvents: 'auto',
          width: { xs: '100%', md: 'fit-content' },
          maxWidth: '100%',
          mx: 'auto',
          pl: 2.5,
          pr: 1,
          py: 0.75,
          borderRadius: 999,
          color: 'text.primary',
          bgcolor: alpha(theme.palette.background.paper, 0.72),
          backdropFilter: 'blur(14px)',
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 10px 30px -12px rgba(41,82,227,0.35)',
        }}
      >
        <Typography
          variant="h6"
          component="a"
          href="#top"
          sx={{ fontWeight: 700, color: 'text.primary', textDecoration: 'none', pr: { md: 2 } }}
        >
          Javier Pintado
        </Typography>

        {isMobile ? (
          <Stack direction="row" spacing={0.5} alignItems="center">
            {ThemeToggleButton}
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
              <IconMenu2 />
            </IconButton>
          </Stack>
        ) : (
          <Stack direction="row" spacing={0.5} alignItems="center">
            {DESKTOP_NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                color="inherit"
                sx={{
                  px: 1.75,
                  fontWeight: 500,
                  color: activeHref === item.href ? 'primary.main' : 'text.primary',
                  bgcolor: activeHref === item.href ? alpha(theme.palette.primary.main, 0.12) : 'transparent',
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="#contact"
              startIcon={<IconMail size={16} />}
              sx={{ ml: 1, px: 2.25, fontWeight: 600 }}
            >
              Contactar
            </Button>
            {ThemeToggleButton}
          </Stack>
        )}
      </Stack>

      <Drawer anchor="right" open={drawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 260 }} role="presentation">
          <Stack direction="row" justifyContent="flex-end" sx={{ p: 1 }}>
            <IconButton onClick={closeDrawer} aria-label="Cerrar menú">
              <IconX />
            </IconButton>
          </Stack>
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                selected={activeHref === item.href}
                onClick={closeDrawer}
              >
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
