import Logininput from "./LoginInput";
import 'antd/dist/antd.css';
import { Checkbox } from "antd";
import SubmitButton from "./SubmitButton";
import RegisterButton from "./RegisterButton";
import { StyledBox, CheckBoxAndForgotButton } from "../styledcss/login.styled";


const Loginbox = () =>{

    return (

      <StyledBox>
            <h1>Welcome back</h1>
            <p>Sign in by entering information below</p>
            <Logininput text='email' type ='text' id='email'/>
            <Logininput text='password'type ='password' id='password'/>
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