import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "../../assets/img/login.png";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
const SignUp2 = () =>{
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
                    حساب کاربری دارید؟<a href="#">وارد شوید</a>
                </p>
                <p className="loginTitle">
                   تکمیل ثبت نام
                </p>
                <div className="ta-right">
                <div className="customHeight1"></div>
                <Row>
                    <Col md={6}>
                    <span className="inputTitle">نام</span>
                <br/>
                <input className="inputCLass" type="text"/>
                    </Col>
                    <Col md={6}>
                    <span className="inputTitle">نام خانوادگی</span>
                <br/>
                <input className="inputCLass" type="text"/>
                    </Col>
                </Row>
                <span className="inputTitle">رمز عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown ? "text" : "password"}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                
                <span className="inputTitle">تکرار رمز عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown2 ? "text" : "password"}/>
                <button onClick={togglePassword2} className="passwordShow">
                   {
                    passwordShown2 ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
               
                 
                <div className="d-flex align-items-center">
                 
                    <Checkbox

                        defaultChecked
                        sx={{
                        color: '#009959',
                        '&.Mui-checked': {
                        color: '#009959',
                        },
                    }}
                />    <span className="checkBoxLable" style={{fontFamily:'IRANSansBold'}}>
               ثبت نام به عنوان مشاور
            </span>
                </div>
                </div>
              
                <Button className="greenBtn mt-2"  style={{marginRight:'auto',marginLeft:'auto',display:'block'}}>ایجاد حساب کاربری</Button>
              
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default SignUp2;