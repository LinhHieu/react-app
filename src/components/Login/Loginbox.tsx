import LoginInput from "./LoginInput";
import 'antd/dist/antd.css';
import { Checkbox, Input, InputRef } from "antd";
import SubmitButton from "./SubmitButton";
import RegisterButton from "./RegisterButton";
import { StyledBox, CheckBoxAndForgotButton } from "../styledcss/login.styled";
import { useState, useRef, useEffect } from 'react';
import { Link} from 'react-router-dom';



export interface Person {
  jwt: string;
  user: User[];
}

export interface User {
  id:        number;
  username:  string;
  email:     string;
  provider:  string;
  confirmed: boolean;
  blocked:   boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface Error {
  status:  number;
  name:    string;
  message: string;
  details: Details;
}
export interface Details {
}

const Loginbox = () =>{

  const Axios = require('axios').default;

  const emailRef = useRef< InputRef >(null);
  const passwordRef = useRef< InputRef >(null);
  const errorRef = useRef< InputRef >(null);
  
  // const [LoginState, setLoginState] = useState(false);

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [success, setSuccess] = useState('');


  function SubmitLogin (e: React.FormEvent) {
    e.preventDefault();

    const enteredEmail = emailRef.current?.input?.value;
    const enteredPassword = passwordRef.current?.input?.value;
    console.log(enteredEmail, enteredPassword);
    Axios.post("http://localhost:1337/api/auth/local",{
      "identifier": enteredEmail,
      "password": enteredPassword,
    }).then((response: any) => {
      if(response.status != 200){
        console.log(response)
      }
      else {
        console.log(response);
        const jwtToken = response?.data.jwt;
        console.log(jwtToken)
      }
    })
  };

  // useEffect(() =>{
  //   emailRef.current.focus();
  // },[]);
  // useEffect(() =>{
  //   setErrorMessage('');
  // },[email, password]);

    return (

      <StyledBox onSubmit={SubmitLogin} style={{height: "430px"}}>
            <h1>Welcome back!</h1>
            <p>Sign in by entering information below</p>
            <LoginInput text='Email' 
                        type ='text' 
                        id='email'
                        placeholder="Enter company name"
                        refProps={emailRef}/>
            <LoginInput text='Password'
                        type ='password' 
                        id='password'
                        placeholder="Enter company name"
                        refProps={passwordRef}/>
            <CheckBoxAndForgotButton>
                <Checkbox  name="remember"  > Remember me </Checkbox>
                <Link to='./ForgotPassword'> Forgot password?</Link>
            </CheckBoxAndForgotButton>
            
            <SubmitButton text='Login'/>
            <Link to='/RegisterAccount'>
              <RegisterButton text='REGISTER NEW ACCOUNT'/>
            </Link>
      </StyledBox>
    );
  }
  
  export default Loginbox;