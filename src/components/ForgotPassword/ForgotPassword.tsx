import { StyledBox } from "../styledcss/login.styled";
import LoginInput from "../Login/LoginInput";
import {InputRef } from "antd";
import { useState, useRef, useEffect } from 'react';
import SubmitButton from "../Login/SubmitButton";
import RegisterButton from "../Login/RegisterButton";
import { Link } from "react-router-dom";

const ForgotPassword = () =>{
    const emailRef = useRef< InputRef >(null);

    return(
        <StyledBox style={{height: "300px"}}>
            <h1>Forgot Password</h1>
            <p>We will send you an email</p>
            <LoginInput text='Email' 
                        type ='text' 
                        id='email'
                        placeholder="Enter company name"
                        refProps={emailRef}/>
            <SubmitButton text='Send the request password link'/>
            <Link to='/'>
                <RegisterButton text='Back to login'/>
            </Link>
        </StyledBox>
    )
}

export default ForgotPassword;