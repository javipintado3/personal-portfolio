import { useEffect, useRef, useState, type ReactNode } from 'react';

import { Grow } from '@mui/material';

type RevealProps = {
  children: ReactNode;
  timeout?: number;
};

const Reveal = ({ children, timeout = 600 }: RevealProps) => {
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
    <div ref={ref}>
      <Grow in={visible} timeout={timeout}>
        <div>{children}</div>
      </Grow>
    </div>
  );
};

export default Reveal;
