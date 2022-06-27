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
import Category from "src/components/assets/img/Category.png";
import Tooltip from '@mui/material/Tooltip';
import WeatherDeg from "src/components/assets/img/c1.png";
import SoulDeg from "src/components/assets/img/c2.png";
import WaterDeg from "src/components/assets/img/c3.png";
import Humidity from "src/components/assets/img/c4.png";
import SoulHumidity from "src/components/assets/img/c5.png";
import Faucet from "src/components/assets/img/c6.png";
const IoTDashboard = () =>{
    const [showSearch, setshowSearch] = useState(false);
    const onClick = () =>{
        setshowSearch(!showSearch);
      };
      const [showSearch2, setshowSearch2] = useState(false);
      const onClick2 = () =>{
          setshowSearch2(!showSearch2);
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
                   <div className="d-flex align-items-center">
                   <img src={Category} width="30px"/>
                   <p className="panelTitle">
                  داشبورد IoT
                   </p>
                   </div>
                   <div>
                
                   </div>
                   </div>
                   <div className="accBox mt-3">
         <div className="d-flex align-items-center justify-content-between borderBottomGray">
            <div>
                <p style={{marginBottom:0,fontFamily:'IRANSansBold'}}>
                نام پروژه اینجا قرار میگیرد
                </p>
            </div>
            <div className="d-flex">
              
                <Button onClick={()=>onClick()} className="caretDownBtn">
                    <CaretDownFill color="#FF6900" size={20}/>
                </Button>
             
            </div>
            
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
              
                <p className="addDeviceText">
                    مشاهده دستگاه ها
                </p>
                <Button onClick={()=>onClick2()} className="caretDownBtn">
                    <CaretDownFill color="#FF6900" size={20}/>
                </Button>
                
            </div>
            
           </div>
       {showSearch2? 
       <div>
         <div className="groundBox2">
             <div className="d-flex align-items-center">
                 <p className="groundName" style={{color:'#FF6900',fontFamily:'IRANSansBold'}}>
                     دستگاه شماره یک
                 </p>
                 <Tooltip title="سالم" placement="top">
                     <ExclamationCircleFill color="#AAADB3"/>
           </Tooltip>
             </div>
             
           <div className="d-flex justify-content-center mt-4 boxRow">
            <a className="whiteMiniBox" href="#" onClick={handleShow}>
                <p className="whiteMiniBoxTitle">دمای هوا</p>
                <img src={WeatherDeg} />
                <p className="whiteMiniBoxTitle">37 درجه</p>
                <p className="whiteMiniBoxStatus">وضعیت : سالم</p>
            </a>
            <Modal
                                                show={show} onHide={handleClose}
                                                className="historyModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    سوابق دستگاه
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                               
                                                </Modal.Body>
                                             
                                             </Modal>
            <a className="whiteMiniBox" href="#">
                <p className="whiteMiniBoxTitle">دمای خاک</p>
                <img src={SoulDeg} />
                <p className="whiteMiniBoxTitle">28 درجه</p>
                <p className="whiteMiniBoxStatus">وضعیت : سالم</p>
            </a>
            <a className="whiteMiniBox" href="#">
                <p className="whiteMiniBoxTitle">دمای آب</p>
                <img src={WaterDeg} />
                <p className="whiteMiniBoxTitle">17 درجه</p>
                <p className="whiteMiniBoxStatus">وضعیت : سالم</p>
            </a>
            <a className="whiteMiniBox" href="#">
                <p className="whiteMiniBoxTitle">رطوبت هوا</p>
                <img src={Humidity} />
                <p className="whiteMiniBoxTitle">68 %</p>
                <p className="whiteMiniBoxStatus">وضعیت : سالم</p>
            </a>
            <a className="whiteMiniBox" href="#">
                <p className="whiteMiniBoxTitle">رطوبت خاک</p>
                <img src={SoulHumidity} />
                <p className="whiteMiniBoxTitle">53 %</p>
                <p className="whiteMiniBoxStatus">وضعیت : سالم</p>
            </a>
            <a className="whiteMiniBox" href="#">
                <p className="whiteMiniBoxTitle">شیرآب کنترلی</p>
                <img src={Faucet} />
                <p className="whiteMiniBoxTitle">بسته</p>
                <p className="whiteMiniBoxStatus">وضعیت : خراب</p>
            </a>
            </div>
         </div>    
       
       </div>
       : null}
         </div>
       :null}
       </div>
              
       
                  </div> 
                  
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default IoTDashboard;