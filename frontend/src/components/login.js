import {React, useState} from "react";
import {Avatar, Checkbox, Grid, Paper, TextField, FormControlLabel,Button, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import authApi from "../utils/api";
import axios from 'axios'

const Login = () => {
    const paperStyle = {padding: 20, height:'800', width: 400, margin:'20px auto'}
    const avatarStyle = {backgroundColor:'rgb(114 120 169)'}
    const usernameStyle = {marginBottom:15}
    const btnStyle = {margin:'8px 0px'}
    const[email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    const handleSubmit= async (e) =>{
        e.preventDefault();
        try {
            // Call your login API passing the username and password
            let response = await axios.post(`${authApi}/login`, {
              "email": email, "password": password
            })
            // Assuming your login API returns a token on successful login
            const token = response.data.access_token;
      
            // Store the token in localStorage (you may use cookies as well)
            localStorage.setItem('token', token);
      
            // Redirect the user to the home/dashboard page after successful login
            navigate('/home');
          } catch (error) {
            // Handle login errors here, e.g., display an error message
            console.error('Login error:', error);
          }
    }
    return ( 
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>LogIn</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                <TextField 
                    name="email"
                    value={email}
                    id='email'
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    label="Email"
                    style={usernameStyle} 
                    fullWidth
                    />
                <TextField 
                    label="Password" 
                    type="password" 
                    name="password"
                    value={password}
                    id='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    fullWidth 
                   />
                <FormControlLabel 
                    control={
                        <Checkbox 
                        name="checkeddB"
                        color="primary"/>
                    } 
                    label="Remember me"/>
                    <Button  type="submit" color="primary" variant="contained" style={btnStyle} fullWidth >Log In</Button>
                </form>
                    <Typography><Link href="#" underline="none">forgot password?</Link></Typography>
                    <Typography>Do you have an account?
                        <Link to="/signup" underline="none">Sign Up</Link>
                    </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;