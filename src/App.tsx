import { CssBaseline, ThemeProvider } from '@mui/material';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
