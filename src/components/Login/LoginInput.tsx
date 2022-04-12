import 'antd/dist/antd.css';
import { Input } from 'antd';


const Logininput = (props: any) =>{
    return(
        <div >
            <label htmlFor='text'>Tên đăng nhập</label>
            <Input style={{ width: 400, margin: '100px auto' }} type={props.text} id='text' required />
        </div>
    )
}

export default Logininput;