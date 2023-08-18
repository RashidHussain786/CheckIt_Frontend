import React from 'react';
import { Box } from '@mui/system';
import { Button, alpha } from '@mui/material';
import Typography from '@mui/material/Typography';

const TaskCard = () => {
  return (
    <Box sx={{ minWidth: 250, width: 250, height: 280, margin: 2, backgroundColor: alpha('#ffffff', 0.3), my: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem', borderRadius: '10px' }}>
      <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" sx={{ color: 'text.secondary', textAlign: 'center', display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', maxWidth: '100%' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, error?
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.primary">
        adjective
      </Typography>
      <Typography variant="body2" sx={{ color: 'black' }}>
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '8px' }}>
        <Button variant='contained' size="small">Learn More</Button>
      </Box>
    </Box>
  );
}

export default TaskCard;
