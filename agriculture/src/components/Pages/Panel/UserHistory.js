import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatr from "src/components/assets/img/avatar.png";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Product from "src/components/assets/img/product.png";
import { StarFill ,Star ,EyeFill} from 'react-bootstrap-icons';
import Product2 from "src/components/assets/img/p2.png";
const UserHistory = () =>{
 
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
               
              <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="news" title="سفارشات">
                    <div className="historyBox">
                        <div className="d-flex align-items-center justify-content-between borderBottomGray">
                            <span className="historyTitle">
                                تاریخ : 01/04/04
                            </span>
                           <div style={{textAlign:'left'}}>
                           <span className="historyTitle">
                              مبلغ پرداختی : 123.000 تومان
                            </span>
                            <br/>
                            <span className="vaziyat">
                              وضعیت سفارش : در حال آماده سازی
                            </span>
                           </div>
                        </div>
                        <div className="historyProductBox">
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="historyBox">
                        <div className="d-flex align-items-center justify-content-between borderBottomGray">
                            <span className="historyTitle">
                                تاریخ : 01/04/04
                            </span>
                            <div style={{textAlign:'left'}}>
                           <span className="historyTitle">
                              مبلغ پرداختی : 123.000 تومان
                            </span>
                            <br/>
                            <span className="vaziyat">
                              وضعیت سفارش : در حال آماده سازی
                            </span>
                           </div>
                        </div>
                        <div className="historyProductBox">
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="historyBox">
                        <div className="d-flex align-items-center justify-content-between borderBottomGray">
                            <span className="historyTitle">
                                تاریخ : 01/04/04
                            </span>
                            <div style={{textAlign:'left'}}>
                           <span className="historyTitle">
                              مبلغ پرداختی : 123.000 تومان
                            </span>
                            <br/>
                            <span className="vaziyat">
                              وضعیت سفارش : در حال آماده سازی
                            </span>
                           </div>
                        </div>
                        <div className="historyProductBox">
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between borderBottomGray">
                               <div className="d-flex align-items-center">
                               <img src={Product2} className="historyImg"/>
                             <div>
                             <p className="HistoryProductTitle">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel">
                               مدل : BCS 740 Walking Tractor
                               </p>
                             </div>
                               </div>
                               <div style={{textAlign:'left'}}>
                            <span className="historyPrice">
                              قیمت کالا : 125.000 تومان
                            </span>
                            <br/>
                            <span className="historyPrice">
                             تعداد : 1 عدد
                            </span>
                            </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="product" title="مشاوره های دریافت شده">
                <div className="consultBoxF2">
       <div className="d-flex">
       <p className="productName" style={{marginLeft:10}}>
            1
        </p>
        <p className="productName">
            موضوع چت اینجا قرار میگیرد
        </p>
       </div>
     
       <div>
       <p className="productVolume">
         نام و نام خانوادگی
        </p>
       </div>
       <div>
       <p className="productVolume">
         چت متنی
        </p>
       </div>
       <div>
        <div className="ticketStatus" id="answered">
            <span>وضعیت چت</span>
        </div>
       </div>
       <div className="d-flex">
            <Button className="repeatConsult">
                + تکرار مشاوره
            </Button>
            <Button className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
        </div>
        
       </div>
       <div className="consultBoxF2">
       <div className="d-flex">
       <p className="productName" style={{marginLeft:10}}>
            2
        </p>
        <p className="productName">
            موضوع چت اینجا قرار میگیرد
        </p>
       </div>
     
       <div>
       <p className="productVolume">
         نام و نام خانوادگی
        </p>
       </div>
       <div>
       <p className="productVolume">
         چت متنی
        </p>
       </div>
       <div>
        <div className="ticketStatus" id="closed">
            <span>وضعیت چت</span>
        </div>
       </div>
       <div className="d-flex">
            <Button className="repeatConsult">
                + تکرار مشاوره
            </Button>
            <Button className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
        </div>
        
       </div>
       <div className="consultBoxF2">
       <div className="d-flex">
       <p className="productName" style={{marginLeft:10}}>
            3
        </p>
        <p className="productName">
            موضوع چت اینجا قرار میگیرد
        </p>
       </div>
     
       <div>
       <p className="productVolume">
         نام و نام خانوادگی
        </p>
       </div>
       <div>
       <p className="productVolume">
         چت متنی
        </p>
       </div>
       <div>
        <div className="ticketStatus" id="answered">
            <span>وضعیت چت</span>
        </div>
       </div>
       <div className="d-flex">
            <Button className="repeatConsult">
                + تکرار مشاوره
            </Button>
            <Button className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
        </div>
        
       </div>
                </Tab>
               
              
            </Tabs>
              </div>
       
                  </div> 
                  
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default UserHistory;