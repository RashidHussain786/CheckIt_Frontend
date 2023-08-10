import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const TaskCard = () => {
  return (
    <>
     <Card sx={{ minWidth: 250,width:250,height:250, margin:2,backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, error?
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </>
  )
}

export default TaskCard