import { StyledBox } from "../styledcss/login.styled";
import LoginInput from "../Login/LoginInput";
import {InputRef } from "antd";
import { useState, useRef, useEffect } from 'react';
import SubmitButton from "../Login/SubmitButton";
import RegisterButton from "../Login/RegisterButton";
import { Link } from "react-router-dom";


const ForgotPassword = () =>{
    const OldPasswordRef = useRef< InputRef >(null);
    const NewPasswordRef = useRef< InputRef >(null);

    return(
        <StyledBox style={{height: "430px"}}>
            <h1>Reset Password</h1>
            <p>Enter your new password</p>
            <LoginInput text='New password'
                        type ='password' 
                        id='password'
                        placeholder="Enter company name"
                        refProps={OldPasswordRef}/>
            <LoginInput text='Confirm password'
                        type ='password' 
                        id='password'
                        placeholder="Enter company name"
                        refProps={NewPasswordRef}/>
            <SubmitButton text='Send the reset password link'/>
            <Link to='/'>
                <RegisterButton text='Back to login'/>
            </Link>
        </StyledBox>
    )
}

export default ForgotPassword;