import { Button } from 'antd';
import { SubmitButtonDiv } from "../styledcss/login.styled";

const SubmitButton: React.FC<{text: string}> = (props) => {
    return (
        <SubmitButtonDiv  >
            <Button style={{ background: '#2ECF94' }} type="primary" block htmlType="submit">{props.text}</Button>
        </SubmitButtonDiv>
    )
    
}

export default SubmitButton;
