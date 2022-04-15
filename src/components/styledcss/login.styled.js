import styled from "styled-components";
import 'antd/dist/antd.css';
import { Checkbox } from "antd";

export const MyIcon = styled.div`
    text-align: center;
    padding-top: 50px;
    img{
        width: 128px;
        height: 93px;
        left: 656px;
        top: 27px;
    }

`;

export const StyledBox = styled.form`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 30px 100px;
    position: absolute;
    margin: auto;
    width: 36%;
    left: 32%;
    top: 200px;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
    }`;


export const CheckBoxAndForgotButton = styled.div`
    padding-top: 20px;
    justify-content: space-between;
    display: flex;
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #2ECF94;
        border-color: #2ECF94;
        outline: none;
    }

    a{
        color: #2ECF94;
    }
`;

export const StyledLoginFooter = styled.div`
   color: #FFFFFF;
   padding-top: 500px;
   text-align: center;
   a{
    color: #FFFFFF;
   }
   

`

export const StyledRegisterButton = styled.div`
    padding-top: 20px;
    text-align: center; 
    color: #2ECF94;

`

export const SubmitButtonDiv = styled.div`
    padding-top: 20px;
    .ant-btn-primary {
        border-color: #2ECF94;
    }
`

export const InputDiv = styled.div`
    padding-top: 20px;
    .ant-input {
        outline: none;
    }
    .ant-input:focus{
        border-color: #2ECF94;
    }
    .ant-input:hover{
        border-color: #2ECF94;
    }
      
`