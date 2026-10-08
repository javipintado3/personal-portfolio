import { useState } from 'react';

import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { IconChevronLeft, IconChevronRight, IconX, IconZoomIn } from '@tabler/icons-react';

export type GalleryImage = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
};

/**
 * Miniaturas que se abren en grande al pulsarlas, con flechas para pasar de
 * una a otra (también con el teclado). Sin efectos: el estado es solo la
 * imagen abierta, o null si el visor está cerrado.
 */
const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const goTo = (offset: number) => {
    setOpenIndex((current) =>
      current === null ? null : (current + offset + images.length) % images.length,
    );
  };

  const current = openIndex === null ? null : images[openIndex];

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' },
          gap: 1.5,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={image.src}
            component="button"
            type="button"
            aria-label={`Ampliar: ${image.alt}`}
            onClick={() => setOpenIndex(index)}
            sx={{
              position: 'relative',
              p: 0,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
              cursor: 'zoom-in',
              bgcolor: 'background.default',
              aspectRatio: '16 / 10',
              '&:hover img': { transform: 'scale(1.06)' },
              '&:hover .zoom-overlay, &:focus-visible .zoom-overlay': { opacity: 1 },
              '&:focus-visible': { outline: 2, outlineColor: 'primary.main', outlineOffset: 2 },
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform 0.3s ease',
              }}
            />
            <Box
              className="zoom-overlay"
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'grid',
                placeItems: 'center',
                color: 'common.white',
                bgcolor: 'rgba(11, 14, 26, 0.45)',
                opacity: 0,
                transition: 'opacity 0.2s ease',
              }}
            >
              <IconZoomIn size={26} />
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog
        open={current !== null}
        onClose={() => setOpenIndex(null)}
        maxWidth="lg"
        fullWidth
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') goTo(-1);
          if (event.key === 'ArrowRight') goTo(1);
        }}
        slotProps={{
          paper: { sx: { bgcolor: 'background.paper', backgroundImage: 'none', overflow: 'hidden' } },
        }}
      >
        {current !== null ? (
          <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <IconButton
              aria-label="Cerrar"
              onClick={() => setOpenIndex(null)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 1,
                color: 'common.white',
                bgcolor: 'rgba(11, 14, 26, 0.6)',
                '&:hover': { bgcolor: 'rgba(11, 14, 26, 0.85)' },
              }}
            >
              <IconX size={20} />
            </IconButton>

            <Box
              component="img"
              src={current.src}
              alt={current.alt}
              sx={{
                display: 'block',
                width: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                bgcolor: 'background.default',
              }}
            />

            {images.length > 1 ? (
              <>
                <IconButton
                  aria-label="Imagen anterior"
                  onClick={() => goTo(-1)}
                  sx={{
                    position: 'absolute',
                    top: '40%',
                    left: 8,
                    color: 'common.white',
                    bgcolor: 'rgba(11, 14, 26, 0.6)',
                    '&:hover': { bgcolor: 'rgba(11, 14, 26, 0.85)' },
                  }}
                >
                  <IconChevronLeft size={24} />
                </IconButton>
                <IconButton
                  aria-label="Imagen siguiente"
                  onClick={() => goTo(1)}
                  sx={{
                    position: 'absolute',
                    top: '40%',
                    right: 8,
                    color: 'common.white',
                    bgcolor: 'rgba(11, 14, 26, 0.6)',
                    '&:hover': { bgcolor: 'rgba(11, 14, 26, 0.85)' },
                  }}
                >
                  <IconChevronRight size={24} />
                </IconButton>
              </>
            ) : null}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, px: 2.5, py: 1.5 }}>
              <Typography variant="body2">{current.alt}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'nowrap' }}>
                {(openIndex ?? 0) + 1} / {images.length}
              </Typography>
            </Box>
          </Box>
        ) : null}
      </Dialog>
    </>
  );
};

export default ImageGallery;
