import React from "react";
import { Box, Container, IconButton, Typography, Button } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

const TaskHeader = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center" sx={{ ml: 5, minWidth: 200 }}>
        <IconButton
          color="inherit"
          aria-label="check-Box"
          sx={{ display: "block", pb: "0px" }}
        >
          <CheckBox sx={{ fontSize: 40 }} />
        </IconButton>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontSize: 20 }}
        >
          Check IT
        </Typography>
      </Box>
      <Container sx={{display:'flex' , justifyContent:'flex-end'}}>
        <Box display="flex" justifyContent={"space-around"}>
          <Button variant="outlined">Outlined</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TaskHeader;
