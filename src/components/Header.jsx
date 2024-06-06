import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'gray' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ color: 'light-blue' }}>
          Cat Images Viewer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
