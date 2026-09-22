import { useState } from 'react';

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { IconMenu2, IconX } from '@tabler/icons-react';

const NAV_ITEMS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contacto', href: '#contact' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: 'rgba(247, 248, 252, 0.85)',
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
          <IconButton onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
            <IconMenu2 />
          </IconButton>
        ) : (
          <Stack direction="row" spacing={1}>
            {NAV_ITEMS.map((item) => (
              <Button key={item.href} href={item.href} color="inherit">
                {item.label}
              </Button>
            ))}
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
