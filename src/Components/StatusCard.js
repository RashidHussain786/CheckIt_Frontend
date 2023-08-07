import { Box, Typography } from '@mui/material'
import React from 'react'

const StatusCard = ({name,description,status}) => {
  return (
    <>
     <Box sx={{minHeight:100,display:'flex',alignItems:'center',backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/bgImg.jpg)`,borderRadius:'15px',mx:3}}>
    <Box sx={{ml:5,mr:3}}> 
     <Typography sx={{fontSize:'22px'}}>{name}</Typography>
     <Typography variant='body1'sx={{fontSize:"18px"}}>{description}</Typography>
    </Box>
    <Box sx={{pr:3}}>
        <Typography sx={{fontSize:50}}>{status}</Typography>
    </Box>
    </Box>
    </>
  )
}

export default StatusCard