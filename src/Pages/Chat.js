import { Box } from '@mui/material'
import React from 'react'
import NavBar from '../ChatComponents/NavBar'
import SideBar from '../ChatComponents/SideBar'

const Chat = () => {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row'}}> 
    <NavBar/>
    <SideBar/>
    </Box>
    </>
  )
}

export default Chat