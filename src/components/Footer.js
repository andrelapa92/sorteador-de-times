import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        marginTop: 'auto',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
      }}
    >
      <Typography variant="body1" sx={{ marginRight: 1 }}>
        Desenvolvido por André Lapa
      </Typography>
      <Link href="https://github.com/andrelapa92" target="_blank" rel="noopener">
        <GitHubIcon fontSize="large" />
      </Link>
    </Box>
  );
}

export default Footer;
