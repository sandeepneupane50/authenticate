import React, { useState } from "react";
import { Avatar, Grid, Paper, TextField, Button, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import authApi from '../utils/api'

const Signup = () => {
    const paperStyle = { padding: 20, height: '1000', width: 400, margin: '20px auto' }
    const avatarStyle = { backgroundColor: 'rgb(114 120 169)' }
    const usernameStyle = { marginBottom: 15 }
    const emailStyle = { marginBottom: 15 }
    const passwordStyle = { marginBottom: 15 }
    const btnStyle = { margin: '8px 0px' }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState([]);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username.length < 3) {
            setError({
                username: "must be atleast 3 letter"
            })
        } else if (!validateEmail(formData.email)) {
            setError({
                email: "invalid(eg: abc@gmail.com)"
            })
        } else if (formData.password.length < 8) {
            setError({
                password: "must be atleast of 8 letter"
            })
        } else if (formData.password !== formData.confirmPassword) {
            setError({
                confirmPassword: "doesnot matched"
            })
        } else {
            axios.post(`${authApi}/signup`, {
                username: formData.username,
                email: formData.email,
                password: formData.password
            }).then((response) => {
                navigate('/login');
            })
        }

    }



    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        type="text"
                        style={usernameStyle}
                        id='username'
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        fullWidth
                    />
                    <p className='text-center'>
                        {error.username ?
                            <label className="create-error">{error.username}</label> : ''
                        }</p>
                    <TextField
                        id='email'
                        label="email"
                        type="email"
                        style={emailStyle}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <p className='text-center'>
                        {error.email ?
                            <label className="create-error">{error.email}</label> : ''
                        }</p>
                    <TextField
                        id="password"
                        label="Password" type="password"
                        style={passwordStyle}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                    />
                    <p className='text-center'>
                        {error.password ?
                            <label className="create-error">{error.password}</label> : ''
                        }</p>

                    <TextField
                        id="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                    />
                    <p className='text-center'>
                        {error.confirmPassword ?
                            <label className="create-error">{error.confirmPassword}</label> : ''
                        }</p>
                    <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth >Sign Up</Button>
                    <Typography>Do you have an account?
                        <Link to="/login" underline="none">Log In</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
}

export default Signup;