import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TaskCard from "./TaskCard";

const TaskBody = () => {
  const renderMyCard = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
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
            height: "80vh",
            margin: "20px",
            marginLeft: "30px",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={10}
            sx={{
              minWidth: "100%",
              minHeight: "80vh",
              width: "100%",
              height: "80vh",
              borderRadius: "12px",
              background:
                "linear-gradient(180deg, hsla(238, 45%, 45%, 1) 6%, hsla(199, 57%, 55%, 1) 83%, hsla(209, 75%, 64%, 1) 100%)",
              display: "flex",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <Grid container>{renderMyCard()}</Grid>
          </Paper>
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
          <Paper
            elevation={10}
            sx={{
              minWidth: "100%",
              minHeight: "80vh",
              width: "50%",
              height: "80vh",
              borderRadius: "12px",
              background:
                "linear-gradient(0deg, hsla(238, 45%, 45%, 1) 6%, hsla(199, 57%, 55%, 1) 83%, hsla(209, 75%, 64%, 1) 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography>Profile information</Typography>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TaskBody;
