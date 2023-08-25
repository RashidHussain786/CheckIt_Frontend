import { ArrowDropDown, NotificationAdd, Search } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  IconButton,
  InputBase,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ChatCard from './ChatCard';

const SideBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('All Chats');

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <Box >
      <Box sx={{ p: '12px' }}>
        <Box sx={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Chats
          </Typography>
          <Box>
        <IconButton color="inherit">
         <NotificationAdd />
        </IconButton>
        <IconButton color="inherit">
         <MoreVertIcon />
        </IconButton>
        </Box>
        </Box>
        <Box sx={{py: '4px',display: 'flex',flexDirection: 'row',alignItems: 'center',}}>
          <Box sx={{position: 'relative' }}
            onClick={handleDropdownToggle}
          >
          <Typography variant="body1" sx={{border: '1px solid #ffffff78',py: '7px',px: '10px',mr: '0.75rem',display: 'flex', alignItems: 'center', cursor: 'pointer', }} >
              {selectedOption}
              <IconButton color="inherit" sx={{ p: '0px', pl: '6px' }}>
                <ArrowDropDown />
              </IconButton>
            </Typography>
            {showDropdown && (
              <Box sx={{position: 'absolute',top: '100%',left: 0,zIndex: 1,backgroundColor: 'white',color: 'black',boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',borderRadius: '4px', }}>
                <MenuItem onClick={() => handleOptionSelect('All Chats')}>
                  All Chats
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect('Friends')}>
                  Friends
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect('Group')}>
                  Group
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect('Unread')}>
                  Unread
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect('Archived')}>
                  Archived
                </MenuItem>
              </Box>
            )}
          </Box>
          <InputBase placeholder="Search User" sx={{ color: 'white', border: '1px solid #ffffff78', py: '3px', pl: '12px',  pr: '12px',  width: '60%',}}
            endAdornment={<Search sx={{ cursor: 'pointer' }} />}
          />
        </Box>
      </Box>
      <Box sx={{maxHeight: 'calc(100vh - 150px)',overflowY: 'auto',mt: '16px','&::-webkit-scrollbar': {width: '0.4em',},}}>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="just now" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="09:30" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="01:20" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="Yesterday" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="just now" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="12:33" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="09:12" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="11:12" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="just now" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="just now" message="Hello how are you."/>
      <ChatCard pic="./Assets/Image.jpg" name="Rashid Hussain" time="just now" message="Hello how are you."/>
    </Box>
    </Box>
  );
};

export default SideBar;
