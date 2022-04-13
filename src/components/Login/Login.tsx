import Loginbox from "./Loginbox";
import icon from "../../image/icon2.png"
import { MyIcon } from "../styledcss/login.styled";
import LoginFooter from "./LoginFooter";



const Login = () =>{
    return (
        <div>
            <MyIcon>
                <img src={icon} />
            </MyIcon>
            <Loginbox />
            <LoginFooter />
        </div>
        );
}

export default Login;