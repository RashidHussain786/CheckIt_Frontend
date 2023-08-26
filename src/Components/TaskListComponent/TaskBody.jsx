import {  Button, Grid} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TaskCard from "./TaskCard";
import Profile from "./Profile";

const TaskBody = () => {
  const renderMyCard = () => {
    const cards = [];
    for (let i = 0; i < 5; i++) {
      cards.push(<TaskCard key={i} />);
    }
    return cards;
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={7} lg={8} >
        <Box
          sx={{
            display: "flex",
            width: "100%", // Adjust width as needed
            minHeight: "80vh",
            margin: "20px",
            justifyContent: "center",
          }}
        >
          
          <Box
            elevation={10}
            sx={{
              minWidth: "100%",
              minHeight: "80vh",
              width: "100%",
              borderRadius: "12px",
              bgcolor:'rgb(165 204 255/5%)',
              display: "flex",
              flexDirection:'column',
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'right',my:'10px',mr:'20px'}}> 
            <Button  size="large" variant="contained" sx={{color:'black',bgcolor:'rgba(255 ,255, 255 ,0.3)'}}>Add Task</Button>
            </Box>
            <Grid container>{renderMyCard()}</Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Box
          sx={{
            display: "flex",
            width: "70%", // Adjust width as needed
            height: "80vh",
            margin: "20px",
            marginLeft: "50px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            elevation={10}
            sx={{
              minWidth: "100%",
              minHeight: "88vh",
              width: "50%",
              borderRadius: "12px",
              bgcolor:'rgb(165 204 255/5%)',
              display: "flex",
              justifyContent: "center",
              boxSizing: "border-box",
              p:'2rem',
              
            }}
          >
            <Profile
              pic="./Assets/sid.jpeg"
              name="Siddhant Kashyap"
              username="Siddhant-Kashyap · he/him"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              followers="3"
              following="5"
            />

          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskBody;
