import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from "styled-components";
import {useRef} from 'react';

const InputDiv = styled.div`
padding-top: 20px;
`

const Logininput: React.FC<{text: string, type: string, id: string, refProp: React.RefObject<HTMLInputElement>, handleState: (e:React.ChangeEvent<HTMLInputElement>) => void}> = (props) =>{


    return(
        <InputDiv >
            <label>{props.text}</label>
            < br/>
            <Input type={props.type} id={props.id} required ref={props.refProp as any} />
        </InputDiv>
    )
}

export default Logininput;

