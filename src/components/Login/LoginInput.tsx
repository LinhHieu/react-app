import 'antd/dist/antd.css';
import { Input, InputRef } from 'antd';
import { InputDiv } from "../styledcss/login.styled";


const Logininput: React.FC<{placeholder:string, text: string, type: string, id: string, refProps: React.Ref<InputRef>}> = (props) =>{
    

    return(
        <InputDiv >
            <label>{props.text}</label>
            < br/>
            <Input type={props.type} id={props.id} placeholder={props.placeholder} required ref={props.refProps as React.Ref<InputRef>} />
        </InputDiv>
    )
}

export default Logininput;

