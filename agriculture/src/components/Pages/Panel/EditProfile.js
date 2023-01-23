import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatar from "src/components/assets/img/avatar.png";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Pen from "src/components/assets/icon/Pen";
import Location from "src/components/assets/icon/Location";
import { EyeFill,EyeSlashFill } from 'react-bootstrap-icons';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import CustomizedDialogs from '../Layouts/AlertModal';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation } from "react-router-dom";
const EditProfile = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [family,setFamily]=useState("")    
    const [email,setEmail]=useState("")    
    const [pass,setPass]=useState("")
    const [again,setAgain]=useState("")
    const [degre,setDegre]=useState("")
    const [specialty,setSpecialty]=useState("")
    const [nationalCode,setNationalCode]=useState("")
    const [cardNumber,setCardNumber]=useState("")
    const [sheba,setSheba]=useState("")
    const [textType,setTextType]=useState("")
    const [voiceType,setVoiceType]=useState("")
    const [videoType,setVideoType]=useState("")
    const [dataAddress,setDataAddress]=useState([])
    const [dataProvince,setDataProvince]=useState([])
    const [dataCity,setDataCity]=useState([])
    const [newCity,setNewCity]=useState(1)
    const [newProvince,setNewProvince]=useState(1)
    const [editCity,setEditCity]=useState()
    const [newAddress,setNewAddress]=useState("")
    const [editAddressID,setEditAddressID]=useState("")
    const [isConsultant,setIsConsultant]=useState()

    const [newPostalCode,setNewPostalCode]=useState("")
    const [title,setTitle]=useState("")
    const [open,setOpen]=useState(false)
    let navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
      const [passwordShown2, setPasswordShown2] = useState(false);
      const togglePassword2 = () => {
         setPasswordShown2(!passwordShown2);
        };
        const [passwordShown3, setPasswordShown3] = useState(false);
        const togglePassword3 = () => {
           setPasswordShown3(!passwordShown3);
          };
        const [show, setShow] = useState(false);
        const [showAddress, setShowAddress] = useState(false);
        const [showEditAddress, setShowEditAddress] = useState(false);
        const [data, setData] = useState([]);

        const handleClose = () => {setShowAddress(false);
             
        };
        const handleEditClose = () => {setShowEditAddress(false);
            setEditAddressID(0); setNewCity(1);setNewProvince(1);setNewPostalCode("");setNewAddress("");
        };
        const saveDatas =()=>{
            setShow(false);
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
                var ss=localStorage.getItem("CustomerID")
        
            axios.post(apiUrl + "EditCustomer",{CustomerID:ss,Mobile:mobile,Name:name,Family:family,Password:pass,Email:email,
                Degree:degre,CardNumber:cardNumber,Sheba:sheba,Specialty:specialty
            })
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(777)
                console.log(response.data.Data)
                setTitle("تغییرات با موفیت ذخیره شد")
                setOpen(true)

            
    
            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
        }
        }
        const handleShow = () => setShowAddress(true);
        const handleEditShow = (id,city,province,postal,address) => {setShowEditAddress(true);setEditAddressID(id);
            GetCity(province);
        setNewCity(city);setNewProvince(province);setNewPostalCode(postal);setNewAddress(address)
        }
        const {state} = useLocation();

        const GetData=()=>{
            const axios = require("axios");
            var ss=localStorage.getItem("CustomerID")

        
            axios.post(apiUrl + "ReadCustomer",{CustomerID:ss})
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(777)
                console.log(response.data.Data)
                console.log(response.data.Data[0]?.Name)
                setData(response.data.Data)
             setMobile(response.data.Data[0]?.Mobile)
             setName(response.data.Data[0]?.Name)
             setFamily(response.data.Data[0]?.Family)
             setEmail(response.data.Data[0]?.Email)
             setNationalCode(response.data.Data[0]?.NationalCode)
             setDegre(response.data.Data[0]?.Degree)
             setSpecialty(response.data.Data[0]?.Specialty)
             setCardNumber(response.data.Data[0]?.CardNumber)
             setSheba(response.data.Data[0]?.Sheba)
             setIsConsultant(response.data.Data[0]?.IsConsultant)

            
    
            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
            axios.post(apiUrl + "ReadAddress",{CustomerID:ss})
            .then(function (response) {
                
                console.log(999)
                console.log(response)
              if (response.data.result == "True") {
                console.log(response.data.Data)
                setDataAddress(response.data.Data)

            }else if(response.data.result == "Duplicate"){
                setDataAddress([])

            }})
            .catch(function (error) {
              console.log(999)
              console.log(error);
    
              console.log(error);
            });
            axios.get(apiUrl + "GetProvince")
            .then(function (response) {
                
                console.log(999)
                console.log(response)
              if (response.data.result == "True") {
                console.log(response.data.Data)
                setDataProvince(response.data.Data)

            }})
            .catch(function (error) {
              console.log(999)
              console.log(error);
    
              console.log(error);
            });
          }
          const GetCity=(id)=>{
            const axios = require("axios");
          
        
            axios.post(apiUrl + "GetCity",{ProvinceID:id})
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(777)
                console.log(response.data.Data)
                setDataCity(response.data.Data)
         

            
    
            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
          
          }
          const AddAddress=()=>{
            const axios = require("axios");
            var ss=localStorage.getItem("CustomerID")

            axios.post(apiUrl + "InsertAddress",{CustomerID:ss,CityID:newCity,PostalCode:newPostalCode,Address:newAddress})
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(111)
                console.log(response.data.Data)
                setNewPostalCode("")
                setNewAddress("")
                GetData()
                handleClose();

            
    
            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
          
          }
          const EditAddress=()=>{
            const axios = require("axios");
            var ss=localStorage.getItem("CustomerID")

            axios.post(apiUrl + "EditAddress",{AddressID:editAddressID,CustomerID:ss,CityID:newCity,PostalCode:newPostalCode,Address:newAddress})
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(111)
                console.log(response.data.Data)
                GetData()
                handleEditClose();

            
    
            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
          
          }
          const DeleteAddress=(id)=>{
            const axios = require("axios");
          
        
            axios.post(apiUrl + "DeleteAddress",{AddressID:id})
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(111)
                GetData(response.data.Data)

            
    
            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
          
          }
          useEffect(() => {
            GetData();
            GetCity(1);

          }, []);
        
        
          
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
   <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

    <Row>
        <Col md={3}>
       <RightPanelMenu data={data}/>
        </Col>
        <Col md={9}>
            <div className="whiteBox">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex">
                   <Pen/>
                   <p className="panelTitle">
                    ویرایش اطلاعات کاربری
                   </p>
                   </div>
                   {/* <Button className="editProfileBtn" onClick={handleShow}> */}
                   <Button className="editProfileBtn" onClick={saveDatas}>
                    ذخیره اطلاعات
                   </Button>
                   <Modal
                                                show={show} onHide={AddAddress}
                                                size="lg"
                                                
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    ویرایش اطلاعات کاربری
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <Row>
                        <Col md={6}>
                        <span className="inputTitle">نام <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" value={name}  onChange={(e)=>setName(e.target.value)} type="text"/>
                        <span className="inputTitle">شماره تلفن همراه <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" value={mobile}  onChange={(e)=>setMobile(e.target.value)}type="number"/>
                        <span className="inputTitle">کلمه عبور</span>
                <br/>
                <div className="passwordBox">
                <input  onChange={(e)=>setPass(e.target.value)} className="passwordInput"type={passwordShown ? "text" : "password"}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                        </Col>
                        <Col md={6}>
                        <span className="inputTitle">نام خانوادگی <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input value={family}  onChange={(e)=>setFamily(e.target.value)} className="inputCLass" type="text"/>
                        <span className="inputTitle">ایمیل <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input value={email}  onChange={(e)=>setEmail(e.target.value)} className="inputCLass" type="email"/>
                        <span className="inputTitle">تکرار کلمه عبور </span>
                <br/>
                <div className="passwordBox">
                <input  onChange={(e)=>setAgain(e.target.value)} className="passwordInput"type={passwordShown3 ? "text" : "password"}/>
                <button onClick={togglePassword3} className="passwordShow">
                   {
                    passwordShown3 ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                        </Col>
                    </Row>
                                           
                                               
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={saveDatas}className="modalSaveBtn">ذخیره اطلاعات</Button>
                                                </Modal.Footer>
                                             </Modal>
                </div>
                <Form className="mt-3">
                    <Row>
                        <Col md={6}>
                        <span className="inputTitle">نام <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input value={name} onChange={(e)=>setName(e.target.value)}  className="inputCLass" type="text"/>
                        <span className="inputTitle">شماره تلفن همراه <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input value={mobile} onChange={(e)=>setMobile(e.target.value)}  className="inputCLass" type="number"/>
                        <span className="inputTitle">کلمه عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput" onChange={(e)=>setPass(e.target.value)} type={passwordShown ? "text" : "password"}/>
                <button onClick={togglePassword} className="passwordShow">
                   {
                    passwordShown ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                        </Col>
                        <Col md={6}>
                        <span className="inputTitle">نام خانوادگی <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input value={family} onChange={(e)=>setFamily(e.target.value)}  className="inputCLass" type="text"/>
                        <span className="inputTitle">ایمیل <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}  className="inputCLass" type="email"/>
                        <span className="inputTitle">تکرار کلمه عبور </span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput" onChange={(e)=>setAgain(e.target.value)} type={passwordShown2 ? "text" : "password"}/>
                <button onClick={togglePassword2} className="passwordShow">
                   {
                    passwordShown2 ? <EyeSlashFill color="#AAB7CA" size="20"/> : <EyeFill color="#AAB7CA" size="20"/>
                   }
                </button>
                </div>
                        </Col>
                    </Row>
                </Form>
            </div>
            {
isConsultant?
<div className="whiteBox mt-4">
<div className="d-flex align-items-center justify-content-between topBox">
   <div className="d-flex">
   <Pen/>
   <p className="panelTitle">
    اطلاعات تخصصی
   </p>
   </div>
   
</div>
<Form className="mt-3">
    <Row>
        <Col md={6}>
        <span className="inputTitle">مدرک تحصیلی</span>
        <br/>
        {/* <div className="inputCLass d-flex align-items-center"> */}
            {/* <p style={{marginBottom:0,color:'#c1c1c1'}}>کارشناسی ارشد</p> */}
            <input value={degre} onChange={(e)=>setDegre(e.target.value)}  className="inputCLass" type="text"/>

        {/* </div> */}
        
        </Col>
        <Col md={6}>
        <span className="inputTitle">تخصص</span>
        <br/>
            {/* <p style={{marginBottom:0,color:'#c1c1c1'}}>کشاورزی</p> */}
            <input value={specialty} onChange={(e)=>setSpecialty(e.target.value)}  className="inputCLass" type="text"/>

        </Col>
    </Row>
    <span className="inputTitle">نوع مشاوره </span>
        <br/>
    <Row>
        <Col md={4}>
        <div className="grayBox">
        <div className="d-flex align-items-center">
   
   <Checkbox

       
       sx={{
       color: '#009959',
       '&.Mui-checked': {
       color: '#009959',
       },
   }}
/>
<span className="categoryLable">
       متنی
   </span>
</div>
<span className="inputTitle">تعرفه هر دقیقه مشاوره متنی : </span>
        <br/>
        <div className="d-flex justify-content-between">
            <div className="priceShow">
                100.000 تومان
            </div>
            <Form.Select className="priceSelect" >
                            
                                    <option>تومان</option>
                                    <option>پوند</option>
                                    <option>درهم</option>
                                   
                                </Form.Select>
        </div>
        </div>

        </Col>
        <Col md={4}>
        <div className="grayBox">
        <div className="d-flex align-items-center">
   
   <Checkbox

       
       sx={{
       color: '#009959',
       '&.Mui-checked': {
       color: '#009959',
       },
   }}
/>
<span className="categoryLable">
      صوتی 
   </span>
</div>
<span className="inputTitle">تعرفه هر دقیقه مشاوره صوتی : </span>
        <br/>
        <div className="d-flex justify-content-between">
            <div className="priceShow">
                150.000 تومان
            </div>
            <Form.Select className="priceSelect" disabled>
                            
                                    <option>تومان</option>
                                    <option>پوند</option>
                                    <option>درهم</option>
                                   
                                </Form.Select>
        </div>
        </div>

        </Col>
        <Col md={4}>
        <div className="grayBox">
        <div className="d-flex align-items-center">
   
   <Checkbox

       
       sx={{
       color: '#009959',
       '&.Mui-checked': {
       color: '#009959',
       },
   }}
/>
<span className="categoryLable">
       تصویری
   </span>
</div>
<span className="inputTitle">تعرفه هر دقیقه مشاوره تصویری :</span>
        <br/>
        <div className="d-flex justify-content-between">
            <div className="priceShow">
                200.000 تومان
            </div>
            <Form.Select className="priceSelect" disabled>
                            
                                    <option>تومان</option>
                                    <option>پوند</option>
                                    <option>درهم</option>
                                   
                                </Form.Select>
        </div>
        </div>

        </Col>
    </Row>
    <Row>
        <Col md={6}>
        <span className="inputTitle">شماره کارت</span>
        <br/>
        {/* <div className="inputCLass d-flex align-items-center"> */}
            {/* <p style={{marginBottom:0,color:'#c1c1c1'}}>5022221022102250</p> */}
            <input value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)}  className="inputCLass" type="text"/>

        {/* </div> */}
        
        </Col>
        <Col md={6}>
        <span className="inputTitle">شماره شبا</span>
        <br/>
        {/* <div className="inputCLass d-flex align-items-center">
            <p style={{marginBottom:0,color:'#c1c1c1'}}>IR2255000000000000005556</p>
        </div> */}
            <input value={sheba} onChange={(e)=>setSheba(e.target.value)}  className="inputCLass" type="text"/>

        </Col>
    </Row>
</Form>
</div>
:
null
            }
          
            <div className="whiteBox mt-4">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex">
                   <Location/>
                   <p className="panelTitle">
                    آدرس های ذخیره شده
                   </p>
                   </div>
                   <Button className="editProfileBtn" onClick={handleShow}>
                    + افزودن آدرس جدید
                   </Button>
                   <Modal
                                                show={showAddress} onHide={handleClose}
                                                className="historyModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                   افزودن آدرس
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              <Row>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                       استان
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select  onChange={(ss)=>GetCity(ss.target.value)} className="addressSelect">
                                            {
                                                dataProvince?.map((item)=>{
                                                    return(

                                                        <option value={item.ProvinceID}>{item.ProvinceName}</option>
                                                    )
                                                })
                                            }
                                                 
                                                </Form.Select>
                                                </Col>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                      شهر
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select onChange={(ss)=>setNewCity(ss.target.value)} className="addressSelect">
                                                <option value={""}>انتخاب کنید</option>

                                                {
                                                dataCity?.map((item)=>{
                                                    return(

                                                        <option value={item.CityID}>{item.CityName}</option>
                                                    )
                                                })
                                            }
                                                </Form.Select>
                                                </Col>
                                              </Row>
                                              <span className="inputTitle">کدپستی</span>
                        <br/>
                        <input onChange={(e)=>setNewPostalCode(e.target.value)} className="inputCLass" type="text"/>
                        <br/>
                        <span className="inputTitle">آدرس</span>
                        <br/>
                        <textarea onChange={(e)=>setNewAddress(e.target.value)} className="inputCLass" type="text" style={{height:160,resize:'none'}}/>
                                                
                                           
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>AddAddress()}className="modalSaveBtn">ذخیره</Button>
                                                </Modal.Footer>
                                             </Modal>




                                             <Modal
                                                show={showEditAddress} onHide={handleEditClose}
                                                className="historyModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                   افزودن آدرس
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              <Row>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                       استان
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select  defaultValue={newProvince} onChange={(ss)=>GetCity(ss.target.value)} className="addressSelect">
                                            {
                                                dataProvince?.map((item)=>{
                                                    return(

                                                        <option value={item.ProvinceID}>{item.ProvinceName}</option>
                                                    )
                                                })
                                            }
                                                 
                                                </Form.Select>
                                                </Col>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                      شهر
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select onChange={(ss)=>setNewCity(ss.target.value)} defaultValue={newCity}  className="addressSelect">
                                                <option value={""}>انتخاب کنید</option>

                                                {
                                                dataCity?.map((item)=>{
                                                    
                                                    return(

                                                        <option value={item.CityID}>{item.CityName}</option>
                                                    )
                                                })
                                            }
                                                </Form.Select>
                                                </Col>
                                              </Row>
                                              <span className="inputTitle">کدپستی</span>
                        <br/>
                        <input value={newPostalCode} onChange={(e)=>setNewPostalCode(e.target.value)} className="inputCLass" type="text"/>
                        <br/>
                        <span className="inputTitle">آدرس</span>
                        <br/>
                        <textarea value={newAddress} onChange={(e)=>setNewAddress(e.target.value)} className="inputCLass" type="text" style={{height:160,resize:'none'}}/>
                                                
                                           
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>EditAddress()}className="modalSaveBtn">ذخیره</Button>
                                                </Modal.Footer>
                                             </Modal>
                </div>
                {
                    dataAddress.map((item)=>{
                        return(
                <div className="addressBox">
                <div className="d-flex align-items-center">
                <Radio
                
                sx={{
                color: '#FF6900',
                '&.Mui-checked': {
                    color: '#FF6900',
                },
                }}
            />
                <p>
{item.Address}                </p>
                </div>
                <div className="d-flex justify-content-between mt-4">
                <p style={{marginRight:42}}>
                   کد پستی : {item.PostalCode}
                </p>
                <div className="d-flex">
                    <Button onClick={()=>handleEditShow(item.AddressID,item.CityID,item.ProvinceID,item.PostalCode,item.Address)} className="gTransparentBtn">
                        ویرایش
                    </Button>
                    
                    <Button onClick={()=>DeleteAddress(item.AddressID)} className="oTransparentBtn">
                        حذف
                    </Button>
                </div>
                </div>
                </div>

                        )
                    })
                }







             
            </div>
        </Col>
    </Row>
   </Container>
    <Footer/>
   </div>
    );
};
export default EditProfile;