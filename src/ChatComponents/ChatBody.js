import { Box, Typography } from '@mui/material'
import React from 'react'
import ChatCard from './ChatCard'

const ChatBody = () => {
  return (
    <Box sx={{maxHeight: 'calc(100vh - 180px)',overflowY: 'auto',mt: '16px','&::-webkit-scrollbar': {width: '0.4em'}}}>
    <Typography>Chat Body</Typography>
    
    </Box>
  )
}

export default ChatBody