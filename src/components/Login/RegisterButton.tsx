import { StyledRegisterButton } from "../styledcss/login.styled";

const RegisterButton: React.FC<{text: string}>  = (props) => {
    return (
        <StyledRegisterButton >{props.text}</StyledRegisterButton>
    )
    

}

export default RegisterButton;