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
const IoTDashboard = () =>{
    const [showSearch, setshowSearch] = useState(false);
    const onClick = () =>{
        setshowSearch(!showSearch);
      };
      const [showSearch2, setshowSearch2] = useState(false);
      const onClick2 = () =>{
          setshowSearch2(!showSearch2);
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
         <div className="groundBox">
             <div className="d-flex align-items-center">
                 <p className="groundName" style={{color:'#FF6900',fontFamily:'IRANSansBold'}}>
                     دستگاه شماره یک
                 </p>
                 <Tooltip title="سالم" placement="top">
                     <ExclamationCircleFill color="#AAADB3"/>
           </Tooltip>
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