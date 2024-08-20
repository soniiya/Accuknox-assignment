import React, { useState } from 'react';
import { AppBar, Box, Typography, Button, Toolbar, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  const open = Boolean(menu);
  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };
  const handleClose = () => {
    setMenu(null);
  };

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='h5'>CSPM Executive Dashboard</Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <IconButton>
            <CachedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <Button variant="outlined" sx={{ ml: 2 }}>Last 2 days</Button>
        </Box>
        
        <IconButton
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={handleClick}
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={menu}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>
          <IconButton>
            <CachedIcon />
          </IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button fullWidth variant="outlined">Last 2 days</Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;