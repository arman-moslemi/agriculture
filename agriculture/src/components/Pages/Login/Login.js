import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "../../assets/img/login.png";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import CustomizedDialogs from '../Layouts/AlertModal';

const Login = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [mobile,setMobile]=useState()
    const [pass,setPass]=useState()
    let navigate = useNavigate();

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
      const login=()=>{
        const axios = require("axios");
        console.log(pass)
    
    if(!mobile || !pass)
    {
    
      setTitle("همه مقادیر را وارد نمائید")
      setOpen(true)

    }
    else{
        var guest=localStorage.getItem("Guest")?localStorage.getItem("Guest"):0;

        axios.post(apiUrl + "Login",{Mobile:mobile,Password:pass,GuestID:guest})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)
            // auth.login(response.data.Data.CustomerID);
            localStorage.setItem("CustomerID",response.data.Data[0].CustomerID);
            localStorage.setItem("CustomerID","");
    navigate("/EditProfile"
    , { replace: true,state:{CustomerID:response.data.Data[0].CustomerID} }
    );

            // console.log("auth", auth.isLoggedIn);
            // history.push("/EditInformation/"+response.data.Data.CustomerID)
    
        }
        else{
          setTitle("نام کاربری یا رمز عبور نادرست می باشد")
          setOpen(true)

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
      }
    
    
    
      }
    return(
    <Container className="loginBody" fluid>
               <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

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
                    حساب کاربری ندارید؟<Link to="/SignUp">ثبت نام کنید</Link>
                </p>
                <p className="loginTitle">
                    ورود
                </p>
                <div className="ta-right">
                <div className="customHeight1"></div>
                <span className="inputTitle">شماره تلفن همراه</span>
                <br/>
                <input className="inputCLass" type="number" onChange={(e)=>setMobile(e.target.value)}/>
                <br/>
                <span className="inputTitle" >کلمه عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown ? "text" : "password"} onChange={(e)=>setPass(e.target.value)}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
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
                />    <span className="checkBoxLable">
                مرا به خاطر بسپار
            </span>
                </div>
                </div>
              
                <Button onClick={()=>login()} className="greenBtn mt-5" style={{marginRight:'auto',marginLeft:'auto',display:'block'}}>ورود به حساب کاربری</Button>
                <p className="hasAcoount text-center mt-3" style={{fontSize:10}}>
                    رمز عبور خود را فراموش کردید؟<a href="#">ایجاد رمز جدید</a>
                </p>
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default Login;