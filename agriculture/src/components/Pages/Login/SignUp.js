import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "../../assets/img/login.png";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
const SignUp = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
    return(
    <Container className="loginBody" fluid>
    <div  className="loginBox">
    <Row style={{height:'100%'}}>
     
        <Col md={6} className="grayBack">
            <div className="siteSlogan">
                <p>شعار سایت اینجا قرار میگیرد!</p>
            </div>
        <img src={LoginImg} className="loginImg"/>
        </Col>
        <Col md={6} className="whiteBack">
            <div className="loginDetailBox">
                <p className="hasAcoount">
                    حساب کاربری دارید ؟<a href="#">وارد شوید</a>
                </p>
                <p className="loginTitle">
                    ثبت نام
                </p>
                <div className="ta-right">
                <div className="customHeight2"></div>
                
               
                <span className="inputTitle">شماره تلفن همراه</span>
                <br/>
                <input className="inputCLass" type="number"/>
                <br/>
                {/* <span className="inputTitle" type="password">کلمه عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown ? "text" : "password"}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div> */}
               
                <div className="d-flex align-items-center">
                <Checkbox

                defaultChecked
                sx={{
                color: '#009959',
                '&.Mui-checked': {
                color: '#009959',
                },
                }}
                />
                    <span className="checkBoxLable">
                       اینجانب <a href="#">قوانین و مقررات</a> را مطالعه کرده و آن ها را پذیرفته ام.
                    </span>
                
                </div>
                </div>
              
                <Button className="greenBtn mt-3" style={{marginRight:'auto',marginLeft:'auto',display:'block'}} >ایجاد حساب کاربری</Button>
                
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default SignUp;