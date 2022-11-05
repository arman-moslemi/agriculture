import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import WalletIcon from "src/components/assets/icon/Wallet";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Updown from "src/components/assets/img/Updown.png";
import Purse from "src/components/assets/img/purse.png";
import FlashUp from "src/components/assets/img/flashUp.png";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

import { ArrowUpSquare ,ArrowDownSquare } from 'react-bootstrap-icons';
const Wallet = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const GetData=()=>{
        const axios = require("axios");
      
    
        axios.post(apiUrl + "ReadCustomer",{CustomerID:1})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)
            console.log(response.data.Data)
            console.log(response.data.Data[0]?.Name)
            setData(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        
  
  
      }
      const [data, setData] = useState([]);

    useEffect(() => {
        GetData();

      }, []);
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
    <Row>
        <Col md={3}>
        <RightPanelMenu data={data}/>
        </Col>
        <Col md={9}>
        <div className="whiteBox">
                <div className="r1 d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex align-items-center">
                   <WalletIcon/>
                   <p className="panelTitle">
                   کیف پول
                   </p>
                   </div>
                   <div>
                   <Button className="editProfileBtn">
                    دریافت خروجی اکسل
                   </Button>
                   <Button className="editProfileBtn marginRight1rem" onClick={handleShow}>
                   + افزایش موجودی
                   </Button>
                   <Modal
                                                show={show} onHide={handleClose}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    افزایش موجودی کیف پول
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                       مبلغ مورد نظر خود را وارد کنید : 
                                                    </span>
                                                    
                                                </p>
                                                <input className="inputCLass" type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                        بانک مقصد
                                                    </span>
                                                    
                                                </p>
                                                <br/>
                                                <Form.Select className="bSelect">
                                            
                                                    <option>ملت</option>
                                                    <option>صادرات</option>
                                                    <option>پارسیان</option>
                                                    <option>پاسارگاد</option>
                                                </Form.Select>
                                                </div>
                                                </Form>
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={handleClose} className="modalSaveBtn">پرداخت</Button>
                                                </Modal.Footer>
                                             </Modal>
                   </div>
                   </div>
                   <div className="wBoxRes whiteBox customWidthBox d-flex align-items-center">
                   <div>
                    <img src={Purse}/>
                   </div>
                    <div>
                    <p className="panelTitle">
                   موجودی کیف پول شما :
                   </p>
                   <p className="panelTitle blackColor">
                   125.000 تومان
                   </p>
                    </div>

                   </div>
                   <div className="d-flex align-items-center">
                  <img src={Updown} width="44"/>
                   <p className="panelTitle">
                   تاریخچه تراکنش های شما
                   </p>
                   </div>
                   <Row className="mt-4">
                    <Col md={6}>
                        <div className="whiteBox d-flex align-items-center justify-content-between pd15 r2">
                             <ArrowUpSquare size={35} color="#009959"/>
                             <p className="variz">واریز وجه</p>
                             <p className="tarikh">120.000 تومان</p>
                             <p className="tarikh">01/02/28</p>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className="whiteBox d-flex align-items-center justify-content-between pd15">
                             <ArrowDownSquare size={35} color="#FF2525"/>
                             <p className="bardasht">برداشت وجه</p>
                             <p className="tarikh">120.000 تومان</p>
                             <p className="tarikh">01/02/28</p>
                        </div>
                    </Col>
                   </Row>
                   <Row className="mt-3">
                    <Col md={6}>
                        <div className="whiteBox d-flex align-items-center justify-content-between pd15">
                             <ArrowUpSquare size={35} color="#009959"/>
                             <p className="variz">واریز وجه</p>
                             <p className="tarikh">120.000 تومان</p>
                             <p className="tarikh">01/02/28</p>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className="whiteBox d-flex align-items-center justify-content-between pd15">
                             <ArrowDownSquare size={35} color="#FF2525"/>
                             <p className="bardasht">برداشت وجه</p>
                             <p className="tarikh">120.000 تومان</p>
                             <p className="tarikh">01/02/28</p>
                        </div>
                    </Col>
                   </Row>
                   <Row className="mt-3">
                    <Col md={6}>
                        <div className="whiteBox d-flex align-items-center justify-content-between pd15">
                             <ArrowUpSquare size={35} color="#009959"/>
                             <p className="variz">واریز وجه</p>
                             <p className="tarikh">120.000 تومان</p>
                             <p className="tarikh">01/02/28</p>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className="whiteBox d-flex align-items-center justify-content-between pd15">
                             <ArrowDownSquare size={35} color="#FF2525"/>
                             <p className="bardasht">برداشت وجه</p>
                             <p className="tarikh">120.000 تومان</p>
                             <p className="tarikh">01/02/28</p>
                        </div>
                    </Col>
                   </Row>
                   </div>
        </Col>
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default Wallet;