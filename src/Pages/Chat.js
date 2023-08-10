import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../ChatComponents/NavBar'
import SideBar from '../ChatComponents/SideBar'
import ChatSection from '../ChatComponents/ChatSection'

const Chat = () => {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row'}}> 
    <NavBar/>
    <SideBar/>
    <ChatSection/>
    </Box>
    </>
  )
}

export default Chat