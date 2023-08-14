import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../ChatComponents/NavBar'
import SideBar from '../ChatComponents/SideBar'
import ChatSection from '../ChatComponents/ChatSection'
import AppBar from '../ChatComponents/AppBar'

const Chat = () => {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row'}}> 
    <NavBar/>
    <SideBar/>
    <ChatSection/>
    <AppBar/>
    </Box>
    </>
  )
}

export default Chat