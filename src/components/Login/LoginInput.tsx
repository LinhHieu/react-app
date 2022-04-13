import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from "styled-components";


const InputDiv = styled.div`
padding-top: 20px;
`

const Logininput = (props: {text: string, type: string, id: string}) =>{
    return(
        <InputDiv >
            <label>{props.text}</label>
            < br/>
            <Input type={props.type} id={props.id} required />
        </InputDiv>
    )
}

export default Logininput;