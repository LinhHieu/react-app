import styled from "styled-components";
import React, {useState} from 'react';
import Logininput from "./LoginInput";
import 'antd/dist/antd.css';
import { Checkbox } from "antd";


const StyledBox = styled.div`
    position: absolute;
    margin: auto;
    width: 50%;
    height: 412px;
    left: 25%;
    top: 150px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;`;

const StyledInput = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
`

const Loginbox = () =>{

    return (
      <StyledBox>
            <h1>Welcome back</h1>
            <p>Sign in by entering information below</p>
            <Logininput type ='text'/>
            <div >
                <label htmlFor='password'>Mật khẩu</label>
                <input type='password' id='password' required/>
            </div>
            <div>
                <Checkbox  name="remember" /> Remember me
                <span className="psw"><a href="#">Forgot password?</a></span>
            </div>
            <div>
                <button>Login</button>
            </div>
      </StyledBox>
    );
  }
  
  export default Loginbox;