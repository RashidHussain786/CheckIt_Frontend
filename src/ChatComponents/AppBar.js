import { Apps, AssignmentTurnedIn, GTranslate, NoteAdd, Settings } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';

const AppBar = () => {
  return (
    <Box sx={{ display: 'flex', position: 'static', height: '100vh', overflowX: 'hidden', overflowY: 'auto', flexDirection: 'column',p:'4px 12px 12px 12px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid white', width: '100%' ,pb:'8px',bgcolor:'#062b5a'}}>
        <IconButton color='inherit'><Apps fontSize="large" /></IconButton>
        <Typography>Apps</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mx: 'auto', textAlign: 'center', width: '100%',py:'25px' }}>
        <IconButton color='inherit'><GTranslate fontSize="large" sx={{my:2}}/></IconButton>
        <IconButton color='inherit'><NoteAdd fontSize="large" sx={{my:2}}/></IconButton>
        <IconButton color='inherit'><AssignmentTurnedIn fontSize="large" sx={{my:2}}/></IconButton>
        <IconButton color='inherit'><Settings fontSize="large" sx={{my:2}}/></IconButton>
      </Box>
    </Box>
  );
}

export default AppBar;
