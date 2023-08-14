import { Box, IconButton, ListItemIcon, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CopyAll, DeleteOutline, FavoriteBorder, ForwardOutlined, MoreHoriz, Replay } from '@mui/icons-material';

const ChatMessageCardSelf = ({ sender, text, timestamp,picture }) => {
    const [showDropdown, setshowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setshowDropdown(!showDropdown);
  };
  return (
    <Box sx={{ mb: '1.25rem', fontSize: '0.875rem', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', ml: 'auto' }}>
      <Box sx={{ p: '1rem 1.25rem', borderRadius: '1.25rem', textAlign: 'left', display: 'inline-block', maxWidth: '25rem', ml: 'auto', mr: '1.25rem', bgcolor: '#062b5a' }}>
        <Typography>
          {text}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', mt: '0.3125rem', fontSize: '0.75rem', position: 'relative', bottom: '0', ml: 'auto' }}>
      {showDropdown && (
          <Box sx={{
            position: 'absolute',
            right: '30%',  // Center horizontally
            bottom: '-300%', // Position below the icon
            transform: 'translateX(-50%)',
            zIndex: 3,
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
          }}>
            <MenuItem><ListItemIcon><CopyAll /></ListItemIcon>Copy</MenuItem>
            <MenuItem><ListItemIcon><Replay /></ListItemIcon>Replay</MenuItem>
            <MenuItem><ListItemIcon><ForwardOutlined /></ListItemIcon>Forward</MenuItem>
            <MenuItem><ListItemIcon><FavoriteBorder /></ListItemIcon>Favourite</MenuItem>
            <MenuItem sx={{color:'red'}}><ListItemIcon sx={{color:'red'}}><DeleteOutline /></ListItemIcon>Delete</MenuItem>
          </Box>
        )}
        <IconButton color="inherit" sx={{ pt: 2 }}onClick={handleDropdownToggle}>
          <MoreHoriz sx={{ cursor: 'pointer' }} />
        </IconButton>
        <Typography variant="caption" sx={{ pt: 1 }}>
          {timestamp}
        </Typography>
        <Box sx={{ mx: '0.3125rem', display: 'inline-block', verticalAlign: 'bottom', position: 'relative' }}>
          <img src={picture} alt="pic" style={{ height: '2.25rem', width: '2.25rem', minWidth: '2.25rem', borderRadius: '50%' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMessageCardSelf;
