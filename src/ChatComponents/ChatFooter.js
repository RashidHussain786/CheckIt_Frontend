import { AddCircleOutline, ArrowRightAlt, Collections, ContactPhone, FolderCopy, Mood, Place, Poll, VolumeUp } from '@mui/icons-material'
import { Box, IconButton, InputBase, ListItemIcon, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const ChatFooter = () => {
  const [showDropdown ,setshowDropdown]=useState(false);

  const handleDropdownToggle=()=>{
    setshowDropdown(!showDropdown);
  }
  return (
    <>
    {showDropdown &&(
             <Box sx={{position: 'absolute',top:'67.4%',left: 490,zIndex: 2,backgroundColor: 'white',color: 'black',boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',borderRadius: '4px', }}>
             <MenuItem><ListItemIcon><Collections/></ListItemIcon>Gallery</MenuItem>
             <MenuItem><ListItemIcon><VolumeUp/></ListItemIcon>Audio</MenuItem>
             <MenuItem><ListItemIcon><FolderCopy/></ListItemIcon>Document</MenuItem>
             <MenuItem><ListItemIcon><ContactPhone/></ListItemIcon>Contact</MenuItem>
             <MenuItem><ListItemIcon><Place/></ListItemIcon>Location</MenuItem>
             <MenuItem><ListItemIcon><Poll/></ListItemIcon>Poll</MenuItem>
             </Box>
            )
            }
    <Box sx={{bottom:0,borderTop:'0.7px solid #ffffff78',minHeight:70,display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
    <InputBase  placeholder="Type Your Message here ..." sx={{color: 'white', py: '3px', pl: '12px',  pr: '12px',width:'100%'}}
            endAdornment={<Mood sx={{ cursor: 'pointer' }} />}
            startAdornment={<AddCircleOutline sx={{ cursor: 'pointer' ,mr:2}} onClick={handleDropdownToggle}/>}/> 
            
    <IconButton color='inherit'sx={{mr:2,bgcolor:'#062b5a',':hover':{bgcolor:'#031b3a'}}}>
    <ArrowRightAlt sx={{p:1,fontSize:'30px',fontWeight:'bold'}}/>    
    </IconButton>        
    </Box>  
    </>
  )
}

export default ChatFooter