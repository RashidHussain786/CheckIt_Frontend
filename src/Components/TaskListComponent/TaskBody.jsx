import {  Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TaskCard from "./TaskCard";

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
      <Grid item xs={12} md={7} lg={8}>
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
            {/* <Box sx={{display:'flex',alignItems:'center',justifyContent:'right',my:'10px',mr:'20px'}}> 
            <Button color="inherit" size="large" variant="outlined">Button</Button>
            </Box> */}
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
              minHeight: "80vh",
              width: "50%",
              height: "80vh",
              borderRadius: "12px",
              bgcolor:'rgb(165 204 255/5%)',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography>Profile information</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskBody;
