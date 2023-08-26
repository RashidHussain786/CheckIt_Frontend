import { AccountCircle, Call, Chat, CheckBox, Group } from '@mui/icons-material';
import { Box, Container, IconButton } from '@mui/material';
import React from 'react';

const NavBar = () => {
  return (
    <Box sx={{ bgcolor: '#062b5a', display: 'flex', flexDirection: 'column', textAlign: 'center', height: '100vh' }} >
      <IconButton color="inherit">
        <CheckBox sx={{ padding: '0.375rem', height: 40, width: 40 }} />
      </IconButton>

      <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center',p:{xs:0} }}>
      <IconButton color='inherit'>
      <Chat sx={{ padding: '12px', height: 30, width: 30 ,mb:2}}/>
      </IconButton>
      <IconButton color='inherit'>
      <Call sx={{ padding: '12px', height: 30, width: 30 ,mb:2}}/>
      </IconButton>
      <IconButton color='inherit'>
      <Group sx={{ padding: '12px', height: 30, width: 30,mb:2 }}/>
      </IconButton>
      <IconButton color='inherit'>
      <AccountCircle sx={{ padding: '12px', height: 30, width: 30 ,mb:2}}/>
      </IconButton>
      </Container>
    </Box>
  );
};

export default NavBar;
