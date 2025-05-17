import React, { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, 
        CardMedia, Container, List, ListItem, TextField, Typography } from "@mui/material";


import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { ReactComponent as User } from '../asset/user-solid.svg';
import  myGood from '../asset/5dk.gif'



export default function Login(){
    //useState for email 
    const [email,setEmail] = useState('');
    const [emailError,setEmailError] = useState('');
     //useState for password
     const [password,setPassword] = useState('');
     const [passwordError,setPasswordError] = useState('');

//for email
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setEmailError("Please Enter a valid email adress")
        }
        else{
            setEmailError('');
        }
    };

    const handleEmailChanege  = (e)=>{
        const inputEmail  =e.target.value;
        setEmail(inputEmail);
        validateEmail(inputEmail)
    }

   //for password

   const validatePassword = (password) =>{
   setPassword(password);
   //regex ckeck
    const numberCheck = /\d/.test(password);
    const specialCheck =  /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const lowerCaseCheck = /[a-z]/.test(password) 
    const upperCaseCheck= /[A-Z]/.test(password);
    const lengthCheck = password.length >= 8 && password.length <= 16;
    
    //lets check those four crateria
    if(!numberCheck){
        setPasswordError("at least one number required");
    }
   else if(!specialCheck){
        setPasswordError("at least one special case is required");
    }
    
    else if(!upperCaseCheck){
        setPasswordError("at least one Upper case is required");
    }
    
    else if(!lowerCaseCheck){
        setPasswordError("at least one Lower case is required");
    }
   
    else if(!lengthCheck){
        setPasswordError("The length must be between 8 and 16 characters");
    }
    else{
        setPasswordError('');
        
    }
       
    

   }
   
    return(
        <Container maxWidth='sm'>
             <Card>
                <Box>
                    <Typography variant="h4" sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >Login</Typography><br/>
                    <Typography variant="p" sx={{marginLeft:'20px'}}>Hi,Welcome back <WavingHandIcon sx={{color:'#FFB200'}}/></Typography>
                </Box><br/>
                <CardMedia sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                  <User width='35' height='35'  fill="#79155B"/>
                </CardMedia>
                <CardContent >
                    <Typography>Email</Typography>
                    <TextField fullWidth
                     id="email" value={email} type="email" variant="outlined"
                     onChange={handleEmailChanege}
                     />
                      {
                        emailError?(<p style={{color:'red'}}>{emailError}</p>):
                        (<img src={myGood} width="20" height="20" />)
                    } 
                    
                     <br/>
                    <Typography>Password</Typography>
                    <TextField fullWidth id="password" type="password" variant="outlined"
                      value={password}
                      onChange={(e) => validatePassword(e.target.value)}
                    />
                    
                    {
                        passwordError?(<p style={{color:'red'}}>{passwordError}</p>):
                        (<img src={myGood} width="20" height="20" />)
                    } 
                    
                    
                    
                    <br/>
                    
                </CardContent>
                <CardActions sx={{display:'flex',justifyContent:'center',
                    alignItems:'center',
                    
                    }} >
                    <Button
                       sx={{backgroundColor:'#79155B',
                        '&:hover':{
                            backgroundColor:'#79155B'
                        },
                        width:'50%'
                    }}
                    onClick={()=>{
                        alert('Die mfs')
                    }}   
                    variant="contained">
                    Login</Button>
                </CardActions>
                <CardContent sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                </CardContent>
                <CardContent sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                <Typography>Not registered yet?<a href="#">Create an account<ArrowOutwardIcon/></a></Typography>

                </CardContent>
             </Card> 
        </Container>
    )
}