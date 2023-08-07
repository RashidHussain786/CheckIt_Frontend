import { Box, Typography } from '@mui/material'
import React from 'react'

const ImageCard = ({name , description,pic}) => {
  return (
    <>
    <Box sx={{minHeight:100,display:'flex',alignItems:'center',mr:5}}>
    <Box sx={{ml:5,mr:3}}> 
     <img src={pic} alt="myPic" width="65px" height="65px" style={{borderRadius:'50%'}}/>
    </Box>
    <Box sx={{pr:3}}>
        <Typography sx={{fontSize:'22px'}}>{name}</Typography>
        <Typography variant='body2'>{description}</Typography>
    </Box>
    </Box>
    </>
  )
}

export default ImageCard