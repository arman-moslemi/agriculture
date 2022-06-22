import {React ,useState } from "react";
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
const EditProfile = () =>{
    const [passwordShown, setPasswordShown] = useState(false);
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

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
    <Row>
        <Col md={3}>
       <RightPanelMenu/>
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
                   <Button className="editProfileBtn" onClick={handleShow}>
                    ویرایش اطلاعات
                   </Button>
                   <Modal
                                                show={show} onHide={handleClose}
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
                        <input className="inputCLass" type="text"/>
                        <span className="inputTitle">شماره تلفن همراه <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" type="number"/>
                        <span className="inputTitle">کلمه عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown ? "text" : "password"}/>
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
                        <input className="inputCLass" type="text"/>
                        <span className="inputTitle">ایمیل <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" type="email"/>
                        <span className="inputTitle">تکرار کلمه عبور </span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown3 ? "text" : "password"}/>
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
                                                    <Button  onClick={handleClose}className="modalSaveBtn">ذخیره اطلاعات</Button>
                                                </Modal.Footer>
                                             </Modal>
                </div>
                <Form className="mt-3">
                    <Row>
                        <Col md={6}>
                        <span className="inputTitle">نام <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" type="text"/>
                        <span className="inputTitle">شماره تلفن همراه <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" type="number"/>
                        <span className="inputTitle">کلمه عبور</span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown ? "text" : "password"}/>
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
                        <input className="inputCLass" type="text"/>
                        <span className="inputTitle">ایمیل <span style={{color:"red"}}>*</span></span>
                        <br/>
                        <input className="inputCLass" type="email"/>
                        <span className="inputTitle">تکرار کلمه عبور </span>
                <br/>
                <div className="passwordBox">
                <input className="passwordInput"type={passwordShown2 ? "text" : "password"}/>
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
                        <div className="inputCLass d-flex align-items-center">
                            <p style={{marginBottom:0,color:'#c1c1c1'}}>کارشناسی ارشد</p>
                        </div>
                        
                        </Col>
                        <Col md={6}>
                        <span className="inputTitle">تخصص</span>
                        <br/>
                        <div className="inputCLass d-flex align-items-center">
                            <p style={{marginBottom:0,color:'#c1c1c1'}}>کشاورزی</p>
                        </div>
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
                        <div className="inputCLass d-flex align-items-center">
                            <p style={{marginBottom:0,color:'#c1c1c1'}}>5022221022102250</p>
                        </div>
                        
                        </Col>
                        <Col md={6}>
                        <span className="inputTitle">شماره شبا</span>
                        <br/>
                        <div className="inputCLass d-flex align-items-center">
                            <p style={{marginBottom:0,color:'#c1c1c1'}}>IR2255000000000000005556</p>
                        </div>
                
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="whiteBox mt-4">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex">
                   <Location/>
                   <p className="panelTitle">
                    آدرس های ذخیره شده
                   </p>
                   </div>
                   <Button className="editProfileBtn">
                    + افزودن آدرس جدید
                   </Button>
                </div>
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
                    تهران - تهران - پاسداران - گلستان دوم - نبش داوود ابراهیمی - پلاک 2 -واحد 7
                </p>
                </div>
                <div className="d-flex justify-content-between mt-4">
                <p style={{marginRight:42}}>
                   کد پستی : 1669145869
                </p>
                <div className="d-flex">
                    <Button className="gTransparentBtn">
                        ویرایش
                    </Button>
                    |
                    <Button className="oTransparentBtn">
                        حذف
                    </Button>
                </div>
                </div>
                </div>
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
                    تهران - تهران - پاسداران - گلستان دوم - نبش داوود ابراهیمی - پلاک 2 -واحد 7
                </p>
                </div>
                <div className="d-flex justify-content-between mt-4">
                <p style={{marginRight:42}}>
                   کد پستی : 1669145869
                </p>
                <div className="d-flex">
                    <Button className="gTransparentBtn">
                        ویرایش
                    </Button>
                    |
                    <Button className="oTransparentBtn">
                        حذف
                    </Button>
                </div>
                </div>
                </div>
            </div>
        </Col>
    </Row>
   </Container>
    <Footer/>
   </div>
    );
};
export default EditProfile;