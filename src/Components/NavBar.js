import { Box, Container, IconButton, Typography } from '@mui/material';
import { Home, Assignment, FormatListBulleted, Notifications, Settings, CheckBox,} from '@mui/icons-material'; 
import React from 'react';

const NavBar = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const navItems = [
    { icon: <Home />, label: 'Home' },
    { icon: <Assignment />, label: 'Tasks' },
    { icon: <FormatListBulleted />, label: 'List' },
    { icon: <Notifications />, label: 'Notification' },
    { icon: <Settings />, label: 'Settings' },
  ];

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box
        display="flex"
        alignItems="center"
        sx={{ml: 5, minWidth: 200 }}
      >
        <IconButton color="inherit" aria-label="check-Box" sx={{ display: 'block', pb: '0px' }}>
          <CheckBox sx={{fontSize:40}}/> 
        </IconButton>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold',fontSize:20 }}>
          Check IT
        </Typography>
      </Box>
      <Container sx={{ maxWidth: { lg: 1800 } }}>
        <Box display="flex" justifyContent="flex-end" >
          {navItems.map((item, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              flexDirection="column"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                bgcolor: hoverIndex === index ? '#062b5a' : 'transparent',
                transition: 'background-color 0.3s ease',
                cursor:'pointer',
                padding: '8px',
              }}
            >
              <IconButton color="inherit" aria-label={item.label} sx={{ display: 'block' }}>
                {item.icon}
              </IconButton>
              <Typography variant="subtitle1" sx={{ mx: 2 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
