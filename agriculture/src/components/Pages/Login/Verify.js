import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "src/components/assets/img/login.png";
import { Link, useNavigate,useLocation } from "react-router-dom";

const Verify = () =>{
    const {state} = useLocation();
// console.log(state)
let navigate = useNavigate();

const [open,setOpen]=useState(false)
const [title,setTitle]=useState("")
const [code,setCode]=useState()
const VerifyClick=()=>{

if(!code )
{

  setTitle("کد را وارد نمائید")
  setOpen(true)

}
else{


      if (code== state.VerifyCode) {
        console.log(777)
        // auth.login(response.data.Data.CustomerID);
        console.log(88)
navigate("/SignUp2"
, { replace: true,state:{Mobile:state.Mobile} }
);
      }
      else{
        setTitle("کد نادرست می باشد")
        setOpen(true)
      }
}

  }
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
                    کد تایید:
                </p>
                <div className="ta-right">
                <div className="customHeight1"></div>
                <span className="inputTitle">کد تایید ارسال شده را وارد نمایید</span>
                <br/>
                <input className="inputCLass"  onChange={(e)=>setCode(e.target.value)} type="number"/>
               
              
             
                </div>
              
                <Button onClick={()=>VerifyClick()} className="greenBtn mt-5" style={{marginRight:'auto',marginLeft:'auto',display:'block'}}>تایید</Button>
               
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default Verify;