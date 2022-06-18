import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "../../assets/img/login.png";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
const SetPassword = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
      const togglePassword2 = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown2(!passwordShown2);
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
                    حساب کاربری ندارید؟<a href="#">ثبت نام کنید</a>
                </p>
                <p className="loginTitle">
                    رمز عبور
                </p>
                <div className="ta-right">
                <div className="customHeight1"></div>
                <span className="inputTitle">رمز عبور جدید</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown ? "text" : "password"}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                
                <span className="inputTitle">تکرار رمز عبور جدید</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown2 ? "text" : "password"}/>
                <button onClick={togglePassword2} className="passwordShow">
                   {
                    passwordShown2 ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
               
                
                </div>
              
                <Button className="greenBtn mt-5">تغییر رمز عبور</Button>
              
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default SetPassword;