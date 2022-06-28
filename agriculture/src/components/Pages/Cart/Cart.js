import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatar from "src/components/assets/img/avatar.png";
import { StarFill ,Star ,Heart } from "react-bootstrap-icons";
import PaginationCustom from "src/components/Pages/Layouts/Pagination";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Checkbox from '@mui/material/Checkbox';
import Slider from "react-slick";
import Product2 from "src/components/assets/img/p2.png";
const Cart = () =>{
   
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
   
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
        <Col md={9}>
                <div className="whiteBox">
               <div className="whiteBoxGrayborder" style={{padding:0}}>
               <p className="panelTitle" style={{fontSize:20}}>
                    سبد خرید
                   </p>
                   <p className="zirNevis">
                    3 کالا
                   </p>
               </div>
               <div className="cartPBox">
                <div className="d-flex align-items-center">
                    <img src={Product2} className="cartImg"/>
                    <div>
                    <p className="HistoryProductTitle mb-2">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel mb-2">
                               مدل : BCS 740 Walking Tractor
                               </p>
                               <p className="historyPrice" style={{textAlign:'right'}}>
                              قیمت کالا : 125.000 تومان
                            </p>
                            <div className="d-flex align-items-center">
                            <p className="historyPrice" style={{textAlign:'right'}}>
                             تعداد :
                            </p>
                            </div>
                    </div>
                </div>
               </div>
                </div>
            </Col>
            <Col md={3}>
          
                <div className="whiteBox" style={{paddingTop:0,paddingLeft:0,paddingRight:0}}>
                  <div className="whiteBoxGrayborder customPad">
                  <div className="text-right">
                    <span className="boxText">
                        قیمت کالاها :
                    </span>
                  </div>
                  <div className="" style={{textAlign:'left'}}>
                    <span className="boxText">
                        12.500.000 تومان
                    </span>
                  </div>
                  </div>
                  <div className="whiteBoxGrayborder customPad">
                  <div className="text-right">
                    <span className="boxText">
                       هزینه ارسال :
                    </span>
                  </div>
                  <div className="" style={{textAlign:'right'}}>
                    <span className="boxText2">
                      بعد از انتخاب آدرس لحاظ می شود
                    </span>
                  </div>
                  </div>
                  <div className="customPad">
                  <div className="text-right">
                    <span className="boxText">
                        مجموع سبد خرید :
                    </span>
                  </div>
                  <div className="" style={{textAlign:'left'}}>
                    <span className="boxText">
                        12.500.000 تومان
                    </span>
                  </div>
                  </div>
                  <Button className="yellowColor">
                    پرداخت
                  </Button>
                </div>
            </Col>
          
            </Row>
   </Container>
   
    <Footer/>
   </div>
    );
};
export default Cart;