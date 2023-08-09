import React from "react";
import Paper from "@mui/material/Paper";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const paperStyle = {
    padding: 30,
    minHeight: "65vh",
    width: 300,
    margin: "40px auto",
    background: "linear-gradient(45deg, #CE9FFC 60%, #7367F0 90%)",
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>

          <TextField
            sx={{ marginTop: 5 }}
            label="Username"
            placeholder="Enter username"
            spacing={3}
            fullWidth
            required
          />

          <TextField
            sx={{ marginTop: 2 }}
            label="Password"
            placeholder="Enter password"
            spacing={3}
            type="password"
            fullWidth
            required
          />

          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>Forgot password ?</Typography>
          <Typography> Do you have an account ? Sign Up</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
