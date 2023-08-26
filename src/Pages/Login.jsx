import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import NavBar from "../Components/NavBar"
import {Button,Checkbox,FormControlLabel,Grid,TextField,Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authService } from "../Services/Api";

const Login = () => {
  const paperStyle = {padding: 30,minHeight: "45vh",width: 300,margin: "40px auto",backgroundColor:'rgb(165 204 255)'};
  const btnstyle = { margin: "8px 0" };

  const navigate= useNavigate();
  const [success,setSuccess]=useState("");

  const [errors, setErrors] = useState({});

  const [loginRequest, setLoginRequest] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async () => {
    setErrors({}); 
    try {
      const response = await authService.login(loginRequest);
      const token = response.token;
      localStorage.setItem('token', token);

      console.log("Successfully login");
      setSuccess("Successfully login");
      setLoginRequest({
        email: '',
        password: ''
      });
      navigate("/");
    } catch (error) {
      setErrors({
        Email: error.response.data.Email ? [error.response.data.Email] : [],
        Password: error.response.data.Password ? [error.response.data.Password] : []
      });
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginRequest((prevloginRequest) => ({
      ...prevloginRequest,
      [name]: value,
    }));
  
    // Reset the error message for the specific field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    <>
    <NavBar/>
    {success && <Typography color="success" sx={{alignItems:'center',justifyContent:'center'}}>{success}</Typography>}
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>

          <TextField
            sx={{ marginTop: 2}}
            label="Username"
            placeholder="Enter username"
            spacing={3}
            fullWidth
            required
            name="email"
            value={loginRequest.email}
            onChange={handleInputChange}
            error={errors.Email && errors.Email.length > 0} 
            helperText={errors.Email } 
            />
            

          <TextField
            sx={{ marginTop: 2 }}
            label="Password"
            placeholder="Enter password"
            spacing={3}
            type="password"
            fullWidth
            required
            name="password"
            value={loginRequest.password}
            onChange={handleInputChange}
            error={errors.Password && errors.Password.length > 0} 
            helperText={errors.Password } 
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
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <Typography>Forgot password ?</Typography>
          <Typography> Do you have an account ? {" "}
            <span onClick={()=>navigate("/register")} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
              Sign Up
            </span></Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
//   if(User.firstName===""|| User.lastName===""|| User.email==="" ||User.password<6){
    //     setErrors({...errors,firstName:'First Name is required',lastName:"Last name is required",email:"email is required",password:"Password must be at least 6 characters long"});
    //     return;
    //   }
    //   // Email format validation using regular expression
    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (!emailPattern.test(User.email)) {
    //   setErrors({ ...errors, email: "Invalid email format" });
    //   return;
    // }