import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "../../assets/img/login.png";

const Verify = () =>{
   
    return(
    <Container className="loginBody" fluid>
    <div  className="loginBox">
    <Row  style={{height:'100%'}}>
     
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
                <div className="customHeight1"></div>
                <p className="loginTitle">
                    کد تایید
                </p>
                <div className="ta-right">
                <div className="customHeight1"></div>
                <span className="inputTitle">کد تایید ارسال شده را وارد نمایید</span>
                <br/>
                <input className="inputCLass" type="number"/>
               
              
             
                </div>
              
                <Button className="greenBtn mt-5">تایید</Button>
               
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default Verify;