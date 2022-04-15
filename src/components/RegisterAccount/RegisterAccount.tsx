import { StyledBox } from "../styledcss/login.styled";
import LoginInput from "../Login/LoginInput";
import {InputRef } from "antd";
import { useState, useRef, useEffect } from 'react';
import SubmitButton from "../Login/SubmitButton";
import RegisterButton from "../Login/RegisterButton";
import { Link } from "react-router-dom";


const ForgotPassword = () =>{
    const PhoneRef = useRef< InputRef >(null);
    const CompanyRef = useRef< InputRef >(null);
    const CustomerBusinessRef = useRef< InputRef >(null);
    const ReasonRef = useRef< InputRef >(null);
    const EmailRef = useRef< InputRef >(null);
    const PasswordRef = useRef< InputRef >(null);
    const ConfirmPasswordRef = useRef< InputRef >(null);

    return(
        <StyledBox style={{height: "800px"}}>
            <h1>Register new ccount</h1>
            <p >Have an account? <Link style={{color: "#2ECF94"}} to='/'>LOGIN NOW</Link></p>
            <div style={{display: "inline"}}>
            <input />
            <input />
            </div>
            <LoginInput text='Phone number' 
                        type ='text' 
                        id='email'
                        placeholder="Enter phone number"
                        refProps={PhoneRef}/>
            <LoginInput text='Company name' 
                        type ='text' 
                        id='email'
                        placeholder="Enter company name"
                        refProps={CompanyRef}/>
            <LoginInput text='About your business' 
                        type ='text' 
                        id='email'
                        placeholder="Write something..."
                        refProps={CustomerBusinessRef}/>
            <LoginInput text='Reason' 
                        type ='text' 
                        id='email'
                        placeholder="Why are you interested in using our flatform?"
                        refProps={ReasonRef}/>
            <LoginInput text='Email' 
                        type ='text' 
                        id='email'
                        placeholder="Your email address"
                        refProps={EmailRef}/>
            <LoginInput text='Password' 
                        type ='text' 
                        id='email'
                        placeholder="Enter password"
                        refProps={PasswordRef}/>
            <LoginInput text='Confirm password' 
                        type ='text' 
                        id='email'
                        placeholder="Re-type password"
                        refProps={ConfirmPasswordRef}/>
            <SubmitButton text='Send the request password link'/>
        </StyledBox>
    )
}

export default ForgotPassword;