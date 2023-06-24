import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "src/components/assets/img/login.png";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import CustomizedDialogs from '../Layouts/AlertModal';
import { useTranslation } from 'react-i18next';
const ForgetPassword = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [mobile,setMobile]=useState()
    const {t} = useTranslation();
    
    let navigate = useNavigate();

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
      };
    


      const login=()=>{
        const axios = require("axios");

        if(!mobile)
        {
            
            setTitle("موبایل را وارد نمائید")
            setOpen(true)
            
        }
        else{
    
        axios.post(apiUrl + "Forgetting",{Mobile:mobile})
        .then(function (response) {
          console.log(response.data)
          var mm=String(response.data).substring(16,20)
    
          if (mm == "True") {
            console.log(777)
            console.log(response.data.Data)
           console.log( String(response.data).substring(29,33))
            // auth.login(response.data.Data.CustomerID);
            console.log(88)
            setOpen(true)
            setTitle("رمز عبور جدید برای شما فرستاده شد")
            navigate("/Login");
    
            // console.log("auth", auth.isLoggedIn);
            // localStorage.setItem("guest","");
            // history.push("/EditInformation/"+response.data.Data.CustomerID)
    
        }
        else{
          alert("موبایل با این شماره وجود دارد")
    
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
                <p>{t("شعار سایت اینجا قرار میگیرد!")}</p>
            </div>
        <img src={LoginImg} className="loginImg"/>
        </Col>
        <Col md={6} className="whiteBack">
            <div className="loginDetailBox">
                <p className="hasAcoount">
                    {t("حساب کاربری دارید ؟")}<Link to={"/Login"}>{t("وارد شوید")}</Link>
                </p>
                <p className="loginTitle">
                    {t("فراموشی رمز عبور")}
                </p>
                <div className="ta-right">
                <div className="customHeight2"></div>
                
               
                <span className="inputTitle">{t("شماره تلفن همراه")}</span>
                <br/>
                <input  onChange={(e)=>setMobile(e.target.value)} className="inputCLass" type="number"/>
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
               
         
                </div>
              
                <p onClick={()=>login()} className="greenBtn mt-3" style={{marginRight:'auto',marginLeft:'auto',display:'block'}}> {t("فراموشی رمز عبور")}</p>
                
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default ForgetPassword;