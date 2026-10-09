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
 * Captura principal grande dentro de un marco de ventana, con miniaturas debajo
 * para cambiarla. Al pulsar la principal se abre en grande, con flechas para
 * pasar de una a otra (también con el teclado). Sin efectos: el estado es la
 * captura seleccionada y la imagen abierta, o null si el visor está cerrado.
 */
const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goTo = (offset: number) => {
    setOpenIndex((current) =>
      current === null ? null : (current + offset + images.length) % images.length,
    );
  };

  const current = openIndex === null ? null : images[openIndex];

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Box
          sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'background.default',
            boxShadow: '0 16px 36px -18px rgba(41, 82, 227, 0.45)',
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.75, px: 1.5, py: 1, bgcolor: 'action.hover' }}>
            {['#FF5F57', '#FEBC2E', '#28C840'].map((color) => (
              <Box key={color} sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: color }} />
            ))}
          </Box>
          <Box
            component="button"
            type="button"
            aria-label={`Ampliar: ${images[selectedIndex].alt}`}
            onClick={() => setOpenIndex(selectedIndex)}
            sx={{
              position: 'relative',
              display: 'block',
              width: '100%',
              p: 0,
              border: 0,
              overflow: 'hidden',
              cursor: 'zoom-in',
              bgcolor: 'transparent',
              aspectRatio: '16 / 10',
              '&:hover img': { transform: 'scale(1.04)' },
              '&:hover .zoom-overlay, &:focus-visible .zoom-overlay': { opacity: 1 },
              '&:focus-visible': { outline: 2, outlineColor: 'primary.main', outlineOffset: -2 },
            }}
          >
            <Box
              component="img"
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform 0.4s ease',
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
                bgcolor: 'rgba(11, 14, 26, 0.4)',
                opacity: 0,
                transition: 'opacity 0.2s ease',
              }}
            >
              <IconZoomIn size={30} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${images.length}, 1fr)`, gap: 1 }}>
          {images.map((image, index) => (
            <Box
              key={image.src}
              component="button"
              type="button"
              aria-label={`Ver: ${image.alt}`}
              onClick={() => setSelectedIndex(index)}
              sx={{
                p: 0,
                border: 2,
                borderColor: index === selectedIndex ? 'primary.main' : 'transparent',
                borderRadius: 1.5,
                overflow: 'hidden',
                cursor: 'pointer',
                bgcolor: 'background.default',
                aspectRatio: '16 / 10',
                opacity: index === selectedIndex ? 1 : 0.6,
                transition: 'opacity 0.2s ease, border-color 0.2s ease',
                '&:hover': { opacity: 1 },
                '&:focus-visible': { outline: 2, outlineColor: 'primary.main', outlineOffset: 2 },
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt=""
                loading="lazy"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
            </Box>
          ))}
        </Box>
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
