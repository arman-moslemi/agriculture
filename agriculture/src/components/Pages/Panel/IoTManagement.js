import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Table} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import WalletIcon from "src/components/assets/icon/Wallet";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Updown from "src/components/assets/img/Updown.png";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import FlashUp from "src/components/assets/img/flashUp.png";
import { ArrowUpSquare ,ArrowDownSquare,CaretDownFill ,ExclamationCircleFill ,Plus} from 'react-bootstrap-icons';
import IotImg from "src/components/assets/img/IotImg.png";
import Filter from "src/components/assets/img/Filter.png";
import Setting from "src/components/assets/img/setting.png";
import Tooltip from '@mui/material/Tooltip';
const IoTManagement = () =>{
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [showSearch, setshowSearch] = useState(false);
    const [showSearch2, setshowSearch2] = useState(false);
    const [showCondition, setshowCondition] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
   
    const handleClose2 = () => setShow2(false);
     const handleShow2 = () => setShow2(true);
     const [show3, setShow3] = useState(false);
   
     const handleClose3 = () => setShow3(false);
      const handleShow3 = () => setShow3(true);
      const [show4, setShow4] = useState(false);
   
      const handleClose4 = () => setShow4(false);
       const handleShow4 = () => setShow4(true);
     const onClick = () =>{
        setshowSearch(!showSearch);
      };
      const onClick2 = () =>{
        setshowSearch2(!showSearch2);
      };
      const onClick3 = () =>{
        setshowCondition(!showCondition);
      };
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
                   <div className="d-flex align-items-center">
                   <img src={Filter} width="30px"/>
                   <p className="panelTitle">
                   مدیریت دستگاه های IoT
                   </p>
                   </div>
                   <div>
                  
                   <Button className="editProfileBtn marginRight1rem" onClick={handleShow}>
                   + افزودن پروژه
                   </Button>
                   <Modal
                                                show={show} onHide={handleClose}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    افزودن پروژه جدید
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                       نام پروژه خود را وارد کنید : 
                                                    </span>
                                                    
                                                </p>
                                                <input className="inputCLass" type="text"/>
                                            
                                                </Form>
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={handleClose} className="modalSaveBtn" >افزودن</Button>
                                                </Modal.Footer>
                                             </Modal>
                   </div>
                   </div>
                  
                <img src={IotImg} className="IotImg"/>
                <p className="tarikh" style={{fontSize:20,margin:30,textAlign:"center",fontWeight:"bold"}}>تاکنون پروژه ای تعریف نکرده اید !</p>
                 
               
         <div className="accBox">
         <div className="d-flex align-items-center justify-content-between borderBottomGray">
            <div>
                <p style={{marginBottom:0,fontFamily:'IRANSansBold'}}>
                نام پروژه اینجا قرار میگیرد
                </p>
            </div>
            <div className="d-flex">
                <Button className="addSection" >
                    + افزودن بخش
                </Button> |
                <p className="addDeviceText">
                    مشاهده بخش ها
                </p>
                <Button onClick={()=>onClick()} className="caretDownBtn">
                    <CaretDownFill color="#FF6900" size={20}/>
                </Button>
             
            </div>
            <Modal
                                                show={show2} onHide={handleClose2}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    افزودن بخش
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                     نام بخش مورد نظر را وارد کنید : 
                                                    </span>
                                                    
                                                </p>
                                                <input className="inputCLass" type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                     نوع بخش را انتخاب کنید 
                                                    </span>
                                                    
                                                </p>
                                                <br/>
                                                <Form.Select className="bSelect">
                                            
                                                    <option>باغچه</option>
                                                    <option>زمین</option>
                                                    <option>باغ</option>
                                                 
                                                </Form.Select>
                                                </div>
                                                </Form>
                                               
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={handleClose2} className="modalSaveBtn" >افزودن</Button>
                                                </Modal.Footer>
                                             </Modal>
           </div>
       {showSearch? 
        <div className="accBox2">
        <div className="d-flex align-items-center justify-content-between borderBottomGray">
           <div>
               <p style={{marginBottom:0,fontFamily:'IRANSansMedium'}}>
               زمین 1
               </p>
           </div>
           <div className="d-flex">
               <Button className="addSection" onClick={handleShow3}>
                   + افزودن دستگاه
               </Button> |
               <p className="addDeviceText">
                   مشاهده دستگاه ها
               </p>
               <Button onClick={()=>onClick2()} className="caretDownBtn">
                   <CaretDownFill color="#FF6900" size={20}/>
               </Button>
               <Modal
                                                show={show3} onHide={handleClose3}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    افزودن دستگاه
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                     شماره سریال دستگاه را وارد کنید
                                                    </span>
                                                    
                                                </p>
                                                <input className="inputCLass" type="text"/>
                                                
                                                </Form>
                                               
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={handleClose3} className="modalSaveBtn" >ثبت دستگاه</Button>
                                                </Modal.Footer>
                                             </Modal>
           </div>
           
          </div>
      {showSearch2? 
      <div>
        <div className="groundBox">
            <div className="d-flex align-items-center">
                <p className="groundName">
                    دستگاه شماره یک
                </p>
                <Tooltip title="سالم" placement="top">
                    <ExclamationCircleFill color="#AAADB3"/>
          </Tooltip>
            </div>
            <div>
                <Button className="deviceManage" onClick={handleShow4}>
                    مدیریت دستگاه
                    </Button>
                    <Modal
                                                show={show4} onHide={handleClose4}
                                                className="consultModal2"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                   مدیریت دستگاه
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <p className="modalText" style={{marginBottom:0}}>
                                                        نام دستگاه : دستگاه شماره یک
                                                    </p>
                                                    <div className="deviceStatus" id="salem">
                                                        <p>
                                                            سالم
                                                        </p>
                                                    </div>
                                                    {/* <div className="deviceStatus" id="kharab">
                                                        <p>
                                                            خراب
                                                        </p>
                                                    </div> */}
                                                </div>
                                               <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       نوع دستگاه : دستگاه فلان
                                                    </p>
                                               </div>
                                               <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       وضعیت پورت ها
                                                    </p>
                                               </div>
                                               <Table striped bordered hover className="portTable">
  <thead>
    <tr>
    
      <th className="portTh">شماره پورت</th>
      <th className="portTh">وضعیت</th>
      <th className="portTh">سنسور</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="portTd">12</td>
      <td className="portTd">فعال</td>
      <td className="portTd"></td>
    </tr>
    <tr>
    
      <td className="portTd">27</td>
      <td className="portTd">غیر فعال</td>
      <td className="portTd"></td>
    </tr>
   
  </tbody>
                                            </Table>
                                            <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       تاریخ رجیستر شدن : 01/04/08
                                                    </p>
                                               </div>
                                               <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       آخرین تاریخ فعال شدن دستگاه : 01/04/01
                                                    </p>
                                               </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button  onClick={handleClose4} className="modalSaveBtn2" >غیر فعال کردن دستگاه</Button>
                                                    <Button  onClick={handleClose4} className="modalSaveBtn" >فعال کردن دستگاه</Button>
                                                </Modal.Footer>
                                             </Modal>
                </div>
        </div>    
        <div className="groundBox">
            <div className="d-flex align-items-center">
                <p className="groundName">
                    دستگاه شماره یک
                </p>
                <Tooltip title="سالم" placement="top">
                    <ExclamationCircleFill color="#AAADB3"/>
          </Tooltip>
            </div>
            <div>
                <Button className="deviceManage">
                    مدیریت دستگاه ها
                    </Button>
                </div>
        </div>  
      </div>
      : null}
        </div>
       : null}
         </div>
                  </div> 
                  <div className="whiteBox mt-3">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex align-items-center">
                   <img src={Setting} width="30px"/>
                   <p className="panelTitle">
                   قواعد دستگاه های IoT
                   </p>
                   </div>
                   </div>
                   <div className="d-flex conditionBox align-items-center">
                    <p className="condition">
                        اگر
                    </p>
                    <Form.Select className="bSelect2">
                                            
                        <option>سنسور 1</option>
                        <option>سنسور 2</option>
                        <option>سنسور 3</option>
                        <option>سنسور 4</option>
                     </Form.Select>
                     <Form.Select className="bSelect2">
                                            
                        <option>مساوی</option>
                        <option>بزرگتر-مساوی</option>
                        <option>کمتر-مساوی</option>
                    </Form.Select>
                    <input className="conditionInput" placeholder="27 درجه"/>
                    <Form.Select className="bSelect3">
                                            
                        <option>و</option>
                        <option>یا</option>

                    </Form.Select>
                    <Button className="addBtn" onClick={()=>onClick3()}>
                        <Plus color="#fff" size="30"/>
                    </Button>  
                    </div>
                    {showCondition?
                    <div className="d-flex conditionBox align-items-center">
                        <p className="condition">
                        آنگاه
                    </p>
                    <Form.Select className="bSelect2">
                                            
                        <option>شیر آب</option>
                        <option>شیر آب</option>
                        
                     </Form.Select>
                     <Form.Select className="bSelect2">
                                            
                        <option>مساوی</option>
                        <option>بزرگتر-مساوی</option>
                        <option>کمتر-مساوی</option>
                    </Form.Select>
                    <Form.Select className="bSelect3">
                                            
                                            <option>باز</option>
                                            <option>بسته</option>
                                        
                                        </Form.Select>
                    </div>
                    :null}                  
                  
                   </div>
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default IoTManagement;