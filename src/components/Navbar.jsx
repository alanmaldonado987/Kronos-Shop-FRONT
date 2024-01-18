import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import TranslateIcon from '@mui/icons-material/Translate';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { MenuItem } from '@mui/material';


import "../styles/components/navbar.scss";

import { useState } from "react";

const Navbar = () => {

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenuOpen(event.currentTarget);
      console.log("Language menu abierto:", event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuOpen(null);
  };

  return (
    <Box position="static" className='appBar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#e45858' }} />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className='paragraphColor'
          >
            KRONOS <Box sx={{marginLeft: 1, color: '#e45858'}}> SHOP </Box>
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{display:' flex', gap: 2}}>
                <Tooltip title="Lenguajes">
                    <IconButton sx={{ p: 0 }}>
                        <Avatar sx={{ backgroundColor: '#e45858' }} onClick={handleLanguageMenuOpen}>
                            <TranslateIcon />
                        </Avatar>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Modo Oscuro">
                    <IconButton sx={{ p: 0 }}>
                        <Avatar sx={{ backgroundColor: '#e45858' }}>
                            <DarkModeIcon />
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={languageMenuOpen}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(languageMenuOpen)}
              onClose={handleLanguageMenuClose}
            >
              {/* Contenido del menú de idiomas */}
              <MenuItem onClick={handleLanguageMenuClose}>Español</MenuItem>
              <MenuItem onClick={handleLanguageMenuClose}>Inglés</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default Navbar;