import { Box} from '@mui/material'
import React from 'react'
import ChatSectionHeader from './ChatSectionHeader'
import ChatFooter from './ChatFooter'
import ChatBody from './ChatBody'

const ChatSection = () => {
  return (
    <>
    <Box sx={{flex:1,borderLeft:'0.7px solid #ffffff78',borderRight:'0.7px solid #ffffff78'}}>
    <ChatSectionHeader pic="./Assets/Image.jpg" name="Rashid Hussain"  message="online"/>
    <ChatBody/>
    <ChatFooter />
    </Box>
    
    </>
  )
}

export default ChatSection