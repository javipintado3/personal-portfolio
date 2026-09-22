import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
          © {year} Javier Pintado Navarro
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
