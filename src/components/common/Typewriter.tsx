import { Box } from '@mui/material';
import { keyframes } from '@mui/material/styles';

// Cuánto dura cada frase en pantalla (escribir + leer + borrar), en segundos.
const SECONDS_PER_PHRASE = 4.2;

// Animación de una frase dentro del ciclo completo. Todas las frases comparten el mismo ciclo y
// cada una solo es visible en su turno, así que no hace falta estado ni efectos: es CSS puro.
const buildKeyframes = (index: number, total: number, characters: number) => {
  const slot = 100 / total;
  const start = index * slot;
  const typed = start + slot * 0.3;
  const erase = start + slot * 0.85;
  const end = start + slot * 0.95;
  const hidden = 'opacity: 0; clip-path: inset(0 100% 0 0);';
  const steps = `animation-timing-function: steps(${characters}, end);`;

  return keyframes`
    0% { ${hidden} }
    ${Math.max(start - 0.01, 0)}% { ${hidden} }
    ${start}% { opacity: 1; clip-path: inset(0 100% 0 0); ${steps} }
    ${typed}% { opacity: 1; clip-path: inset(0 0 0 0); }
    ${erase}% { opacity: 1; clip-path: inset(0 0 0 0); ${steps} }
    ${end}% { opacity: 1; clip-path: inset(0 100% 0 0); }
    ${Math.min(end + 0.01, 100)}% { ${hidden} }
    100% { ${hidden} }
  `;
};

// Cursor que acompaña al borde del texto mientras se escribe y se borra.
const buildCaretKeyframes = (index: number, total: number, characters: number) => {
  const slot = 100 / total;
  const start = index * slot;
  const typed = start + slot * 0.3;
  const erase = start + slot * 0.85;
  const end = start + slot * 0.95;

  return keyframes`
    0% { left: 0; opacity: 0; }
    ${Math.max(start - 0.01, 0)}% { left: 0; opacity: 0; }
    ${start}% { left: 0; opacity: 1; animation-timing-function: steps(${characters}, end); }
    ${typed}% { left: 100%; opacity: 1; }
    ${erase}% { left: 100%; opacity: 1; animation-timing-function: steps(${characters}, end); }
    ${end}% { left: 0; opacity: 1; }
    ${Math.min(end + 0.01, 100)}% { left: 0; opacity: 0; }
    100% { left: 0; opacity: 0; }
  `;
};

type TypewriterProps = {
  phrases: string[];
};

const Typewriter = ({ phrases }: TypewriterProps) => {
  const cycle = phrases.length * SECONDS_PER_PHRASE;

  return (
    <Box
      aria-label={phrases.join(', ')}
      sx={{
        display: 'grid',
        // Todas las frases ocupan la misma celda: el bloque mide lo que la más larga y no salta
        '& > span': { gridArea: '1 / 1' },
        // Con movimiento reducido se enseña solo la primera frase, fija y completa
        '@media (prefers-reduced-motion: reduce)': {
          '& > span:not(:first-of-type)': { display: 'none' },
        },
      }}
    >
      {phrases.map((phrase, index) => (
        <Box
          key={phrase}
          component="span"
          aria-hidden
          sx={{
            position: 'relative',
            justifySelf: 'start',
            whiteSpace: 'nowrap',
            animation: `${buildKeyframes(index, phrases.length, phrase.length)} ${cycle}s linear infinite`,
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '12%',
              bottom: '12%',
              width: '2px',
              ml: '2px',
              bgcolor: 'primary.main',
              animation: `${buildCaretKeyframes(index, phrases.length, phrase.length)} ${cycle}s linear infinite`,
              '@media (prefers-reduced-motion: reduce)': { display: 'none' },
            },
          }}
        >
          {phrase}
        </Box>
      ))}
    </Box>
  );
};

export default Typewriter;
