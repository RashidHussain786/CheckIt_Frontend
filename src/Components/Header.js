import { Box, Container, IconButton, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import ImageCard from './ImageCard';
import StatusCard from './StatusCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TaskList from './TaskList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CustomLinearProgress = ({ value }) => {
  return (
    <Box sx={{ px:'20px' }}>
      <Typography variant="body1">{`${value}%`}</Typography>
      <LinearProgress variant="determinate" value={value} sx={{height:10,borderRadius:'10px'}}/>
    </Box>
  );
};

const taskLists = [
  { name: 'UX/UI Design', description: 'App Design - 10:00 AM' },
  { name: 'Research and Optimization', description: 'Web Design - 02:00 PM' },
  { name: 'Team Meeting', description: 'Design Team - 03:00 PM' },
  { name: 'Flyer Design', description: 'Graphics Design - 05:00 PM' },
];


const Header = () => {
  return (
    <>
    <Box
      sx={{
        minHeight: 180,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
      }}
    >
      <ImageCard name="Rashid Hussain" description="Software Developer- Level 2" pic="./Assets/Image.jpg"/>
      <Container sx={{ maxWidth: { lg: 1500 } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            gap: '10px',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <StatusCard name="Completed" description="Task" status="08" />
          <StatusCard name="Pending" description="Task" status="03" />
          <StatusCard name="Unread" description="Messages" status="07" />
          <StatusCard name="Remaining" description="Billing" status="09" />
        </Box>
      </Container>
    </Box>
    <Box sx={{ bgcolor: '#062b5a', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      {/* left Child Header */}
        <Box sx={{ minWidth: '27%', p: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row',my:3, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' ,minWidth:'200px'}}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold', fontSize: '20px', ml: 2 }}>Task List -</Typography>
              <Typography variant='subtitle1' sx={{ fontSize: '19px' }}>April 09</Typography>
            </Box>
            <Box>
              <IconButton color="inherit">
                <ChevronLeftIcon sx={{fontSize:35}}/>
              </IconButton>
              <IconButton color="inherit">
                <ChevronRightIcon sx={{fontSize:35}}/>
              </IconButton>
            </Box>
          </Box>
        {taskLists.map((entry,index)=>(
        <TaskList key={index} name={entry.name} description={entry.description}/>
        ))}
        </Box>

        {/* middle Child Header */}
        <Box sx={{ minWidth: '41%',py:4 }}>
        <Box sx={{bgcolor:'#08365c',minHeight:'400px',mt:3,borderRadius:'20px',mx:4,textAlign:'center'}}>  
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',p:3 }}>
        <Typography variant='h5'>Weekly Activity</Typography>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
         </Box>
         {/* Add the graph using third party library */}
         <Typography>Add the graph</Typography>
         </Box>  
         <Box sx={{bgcolor:'#08365c',mt:3,borderRadius:'20px',mx:4}}>  
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',px:3,pt:3 }}>
        <Typography variant='h5'>Monthly Target</Typography>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
         </Box>
         <Box sx={{ px:"20px" ,pb:"20px"}}>
         <CustomLinearProgress value={60} />
         </Box>
         </Box>  
        </Box>

        {/* right Child Header */}
        <Box sx={{ minWidth: '29%',py:4 }}>
        <Box sx={{bgcolor:'#08365c',mt:3,borderRadius:'20px',mx:4}}>  
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',px:3,pt:3 }}>
        <Typography variant='h5'>Message</Typography>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
         </Box>
         <ImageCard name="Rashid Hussain" description="Hi, How are you?" pic="./Assets/Image.jpg"/>
         <ImageCard name="Rashid Hussain" description="Do you need that logo degsign" pic="./Assets/Image.jpg"/>
         </Box>   
         <Box sx={{bgcolor:'#08365c',mt:3,borderRadius:'20px',mx:4}}>  
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',px:3,pt:3 }}>
        <Typography variant='h5'>Top Skills</Typography>
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
         </Box>
         <ImageCard name="UI Design" description="545 + Projects" />
         <ImageCard name="Web Delevlopment" description="277 + Projects" />
         </Box>   
        </Box>
    </Box>
    </>
  );
};

export default Header;
