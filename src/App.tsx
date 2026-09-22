import { useMemo, useState } from 'react';

import { CssBaseline, type PaletteMode, ThemeProvider } from '@mui/material';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Hobbies from './components/sections/Hobbies';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import getTheme from './theme';

const THEME_STORAGE_KEY = 'theme-mode';

const getInitialMode = (): PaletteMode => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage not available (private mode, etc.)
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const App = () => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // localStorage not available (private mode, etc.)
      }
      return next;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header mode={mode} onToggleMode={toggleMode} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
