import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "../../assets/img/login.png";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
import CustomizedDialogs from '../Layouts/AlertModal';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation } from "react-router-dom";

const SignUp2 = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [name,setName]=useState("")
    const [family,setFamily]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")
    const [nationalCode,setNationalCode]=useState("")
    const [pass,setPass]=useState("")
    const [again,setAgain]=useState("")
    const [title,setTitle]=useState("")
    const [open,setOpen]=useState(false)
    const [moshaver,setMoshaver]=useState(false)
    const {state} = useLocation();

    let navigate = useNavigate();

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
      const handleChange = (event) => {
        setMoshaver(event.target.checked);
      };
      const Signups=()=>{
        console.log(moshaver)
        const axios = require("axios");
        if(!name || !family || !pass || !again) 
        {
            
            setTitle("همه موارد را وارد نمائید")
            setOpen(true)
            
        }
        else if(pass != again){
            setTitle("پسورد و تکرار با هم منطبق نیستند")
            setOpen(true)
        }
        else{
            var guest=localStorage.getItem("Guest")?localStorage.getItem("Guest"):0;

        axios.post(apiUrl + "InsertCustomer",{Mobile:state.Mobile,Name:name,Family:family,Password:pass,IsConsultant:moshaver,GuestID:guest})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)
            console.log(response.data.Data)
            // auth.login(response.data.Data.CustomerID);
            console.log(88)
            if(moshaver){
                setTitle("برای تاپید اطلاع داده میشود.ثبت نام با موفقیت انجام شد")
                setOpen(true)
            }
            else{

                setTitle("ثبت نام با موفقیت انجام شد")
                setOpen(true)
            }
    navigate("/login");

            // console.log("auth", auth.isLoggedIn);
            // localStorage.setItem("guest","");
            // history.push("/EditInformation/"+response.data.Data.CustomerID)
    
        }
        else{
          setTitle("نام کاربری یا رمز عبور نادرست می باشد")
          setOpen(true)

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

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
                <input onChange={(e)=>setName(e.target.value)} className="inputCLass" type="text"/>
                    </Col>
                    <Col md={6}>
                    <span className="inputTitle">نام خانوادگی</span>
                <br/>
                <input onChange={(e)=>setFamily(e.target.value)} className="inputCLass" type="text"/>
                    </Col>
                </Row>
                <span className="inputTitle">رمز عبور</span>
                <br/>
                <div className="passwordBox">
                <input onChange={(e)=>setPass(e.target.value)}  className="passwordInput"type={passwordShown ? "text" : "password"}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                
                <span className="inputTitle">تکرار رمز عبور</span>
                <br/>
                <div className="passwordBox">
                <input onChange={(e)=>setAgain(e.target.value)} className="passwordInput"type={passwordShown2 ? "text" : "password"}/>
                <button onClick={togglePassword2} className="passwordShow">
                   {
                    passwordShown2 ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
               
                 
                <div className="d-flex align-items-center">
                 
                    <Checkbox
onChange={handleChange}
checked={moshaver}
                        // defaultChecked
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
              
                <Button onClick={()=>Signups()} className="greenBtn mt-2"  style={{marginRight:'auto',marginLeft:'auto',display:'block'}}>ایجاد حساب کاربری</Button>
              
               
            </div>
        </Col>
    </Row>
    </div>
  
    </Container>
    );
};
export default SignUp2;