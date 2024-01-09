import "./form.css"
import React, {useState} from "react";

// mui form imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import TableDisplay from "./TableDisplay";

import firebase from "firebase/compat/app";
import "firebase/compat/database";


import { getDatabase, ref, set, get } from "firebase/database";
import {app} from "./firebase";
const db = getDatabase(app)


// get data from realtime database
const usersRef = ref(db, 'users');


export default function Form(){
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [checkVal, setCheckVal] = useState(false)
    const [gotUsersData, setGotUsersData] = useState(null);
    const [showTableFlag, setShowTableFlag] = useState(false);


    const putData = (userData) => {
        console.log("Put Data clicked....");

        set(ref(db, `users/${userData.firstName}`, 1), {
            id: 1,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email : userData.email,
            password: userData.password,
        });
      }


    // submit data Form functions
    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/vishalam3636/Vishal-Programming-Journey" target="_blank">
              vishal github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log(userData, ">>>>userdata");
        console.log(checkVal, ">>>>checkVal");

        if(!userData.firstName.trim() || !userData.lastName.trim() || !userData.email.trim() || !userData.password.trim()){
            alert(">>>>All fields are mandatory");
        } else if(!checkVal){
            alert(">>>>>> select the check field")
        } else {
            console.log({...userData, checkVal: checkVal});
            putData({...userData, checkVal: checkVal});
            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })

            getUsersData();
        }
    };



    // get data functions
    const getUsersData = () => {
        get(ref(db, 'users'))
        .then(snapshot => {
            const allUsersData = snapshot.val();
            // sallUsersData will contain an object with all user data
            console.log(allUsersData);
            setGotUsersData(allUsersData);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    };


    const showUsers = () =>{
        setShowTableFlag(!showTableFlag)
        getUsersData();
    }

    return(
        <div className="main-container form-component-container">
            <h3>Task-03: Form</h3>
            <button onClick={showUsers}>{!showTableFlag ? "Display Users" : "User Form"}</button>

            {
                !showTableFlag ? (
                    <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Details Form
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={userData.firstName}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        value={userData.lastName}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={userData.email}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={userData.password}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                        control={<Checkbox checked={checkVal} color="primary" name="check" onChange={()=>setCheckVal(!checkVal)} />}
                        label="I accept all terms and conditions"
                        />
                    </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="#" variant="body2">
                        Already have an account? Sign in
                        </Link>
                    </Grid>
                    </Grid>
                </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
                    </Container>
                ) : (
                    <TableDisplay gotUsersData = {gotUsersData} />
                )
            }
        </div> 
        
    )
}