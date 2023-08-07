import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton } from '@mui/material';
import ImageCard from './ImageCard';

const TaskList = ({ name, description }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', my: 1,cursor:"pointer" ,'&:hover':{bgcolor:'#08365c'},borderRadius:'20px'}}>
        <ImageCard name={name} description={description} />
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Box>
    );
  };
  

export default TaskList