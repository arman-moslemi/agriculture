import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatr from "src/components/assets/img/avatar.png";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Product from "src/components/assets/img/product.png";
import { StarFill ,Star} from 'react-bootstrap-icons';

const Favorite = () =>{
 
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
                <Tab eventKey="product" title="محصولات برگزیده">
                    <div className="d-flex mt-3 flex-wrap justify-content-center">
                        <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div>
                        <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div>
                        <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div>
                        <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div>
                        <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div>
                        <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="consult" title="مشاوران برگزیده">
                   <div className="consultBoxF">
                    <div className="d-flex align-items-center">
                        <img src={Avatr} className="consultAvatar"/>
                        <p className="productName " style={{fontFamily:'IRANSansMedium'}}>
                               نام و نام خانوادگی مشاور برگزیده
                            </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                    <div style={{marginLeft:20}}>
                                    <p className="productPrice">
                                      امتیاز مشاور
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                             
                            </div>
                   </div>
                   <div className="consultBoxF">
                    <div className="d-flex align-items-center">
                        <img src={Avatr} className="consultAvatar"/>
                        <p className="productName " style={{fontFamily:'IRANSansMedium'}}>
                               نام و نام خانوادگی مشاور برگزیده
                            </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                    <div style={{marginLeft:20}}>
                                    <p className="productPrice">
                                      امتیاز مشاور
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                             
                            </div>
                   </div>
                   <div className="consultBoxF">
                    <div className="d-flex align-items-center">
                        <img src={Avatr} className="consultAvatar"/>
                        <p className="productName " style={{fontFamily:'IRANSansMedium'}}>
                               نام و نام خانوادگی مشاور برگزیده
                            </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                    <div style={{marginLeft:20}}>
                                    <p className="productPrice">
                                      امتیاز مشاور
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                             
                            </div>
                   </div>
                </Tab>
                <Tab eventKey="news" title="اخبار برگزیده">
                    <p>hello</p>
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
export default Favorite;