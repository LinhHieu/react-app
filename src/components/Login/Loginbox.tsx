import Logininput from "./LoginInput";
import 'antd/dist/antd.css';
import { Checkbox } from "antd";
import SubmitButton from "./SubmitButton";
import RegisterButton from "./RegisterButton";
import { StyledBox, CheckBoxAndForgotButton } from "../styledcss/login.styled";
import { useState, useRef, useEffect } from 'react';
import { updateLanguageServiceSourceFile } from "typescript";


const Loginbox = () =>{

  const emailRef = useRef< HTMLInputElement >(null);
  const passwordRef = useRef< HTMLInputElement >(null);
  const errorRef = useRef< HTMLInputElement >(null);
  
  const [LoginState, setLoginState] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');


  function SubmitLogin (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("test");
  };

  // useEffect(() =>{
  //   emailRef.current.focus();
  // },[]);

  useEffect(() =>{
    setErrorMessage('');
  },[email, password]);

  function HandleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    console.log(newValue);
  }

  function HandlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    console.log(newValue);
  }

  // function HandleSubmit () {

  // }

    return (

      <StyledBox onSubmit={SubmitLogin}>
            <h1>Welcome back!</h1>
            <p>Sign in by entering information below</p>
            <Logininput text='email' 
                        type ='text' 
                        id='email'
                        refProp={emailRef}
                        handleState = {HandleEmailChange}/>
            <Logininput text='password'
                        type ='password' 
                        id='password'
                        refProp={passwordRef}
                        handleState ={HandlePasswordChange}/>
            <CheckBoxAndForgotButton>
                <Checkbox  name="remember" > Remember me </Checkbox>
                <a href="#" >Forgot password?</a>
            </CheckBoxAndForgotButton>
            
            <SubmitButton />
            <RegisterButton />
      </StyledBox>
    );
  }
  
  export default Loginbox;