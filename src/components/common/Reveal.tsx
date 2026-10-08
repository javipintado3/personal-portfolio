import { useEffect, useRef, useState, type ReactNode } from 'react';

import { Grow } from '@mui/material';

type RevealProps = {
  children: ReactNode;
  timeout?: number;
  /** Que el contenido ocupe toda la altura disponible (tarjetas que deben medir lo mismo). */
  stretch?: boolean;
};

const Reveal = ({ children, timeout = 600, stretch = false }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={stretch ? { height: '100%' } : undefined}>
      <Grow in={visible} timeout={timeout}>
        <div style={stretch ? { height: '100%' } : undefined}>{children}</div>
      </Grow>
    </div>
  );
};

export default Reveal;
