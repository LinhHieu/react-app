import { Button } from 'antd';
import { SubmitButtonDiv } from "../styledcss/login.styled";




const SubmitButton = () => {
    return (
        <SubmitButtonDiv>
            <Button style={{ background: '#2ECF94' }} type="primary" block>Login</Button>
        </SubmitButtonDiv>
    )
    
}

export default SubmitButton;
