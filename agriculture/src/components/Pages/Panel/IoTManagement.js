import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
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
import { ArrowUpSquare ,ArrowDownSquare } from 'react-bootstrap-icons';
import IotImg from "src/components/assets/img/IotImg.png";
import Filter from "src/components/assets/img/Filter.png";
const IoTManagement = () =>{
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
   
    const handleClose2 = () => setShow2(false);
     const handleShow2 = () => setShow2(true);
     const onClick = () =>{
        setshowSearch(!showSearch);
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
                   <img src={Filter} width="44px"/>
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
                 
                <Accordion allowZeroExpanded className="accardionBox2">
    
    <AccordionItem >
        <AccordionItemHeading>
            <AccordionItemButton>
           <div className="d-flex align-items-center justify-content-between">
            <div>
                <p style={{marginBottom:0}}>
                نام پروژه اینجا قرار میگیرد
                </p>
            </div>
            <div className="d-flex">
                <Button className="addSection" onClick={handleShow2}>
                    + افزودن بخش
                </Button> |
                <p className="addDeviceText">
                    افزودن دستگاه ها
                </p>
                <Button>/</Button>
             
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
            </AccordionItemButton>
         </AccordionItemHeading>
    <AccordionItemPanel>
    
    
      
     
     </AccordionItemPanel>
    </AccordionItem>

    </Accordion>
                  </div> 
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default IoTManagement;