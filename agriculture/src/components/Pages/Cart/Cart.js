import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import {Trash3Fill} from "react-bootstrap-icons";

import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Product2 from "src/components/assets/img/p2.png";
import Location from "src/components/assets/icon/Location";
const Cart = () =>{
  const [showAlert, setshowAlert] = useState(false);
  
      const [show, setShow] = useState(false);
      const [count,setCount]=useState(1);
      const [count2,setCount2]=useState(1);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const increment = () => {
        setCount(count+1)
        console.log(count)
    
          }
    
          const   decrement = () => {
            // this.setState({
            //   count: this.state.count - 1
            // });
            if(count!=0)
            setCount(count-1)
          }
          const increment2 = () => {
            setCount2(count2+1)
            console.log(count2)
        
              }
        
              const   decrement2 = () => {
                // this.setState({
                //   count: this.state.count - 1
                // });
                if(count2!=0)
                setCount2(count2-1)
              }
              const onClick = () =>{
                setshowAlert(true);
              };
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
                            <p className="historyPrice" style={{textAlign:'right',marginBottom:0}}>
                             تعداد :
                            </p>
                            <div className="counterDiv d-flex justify-content-center" style={{marginRight:10}}>
                            <button onClick={()=>increment()} className="inBTN">+</button>
                            <span style={{marginRight:'0'}}>{count}</span>
                            <button onClick={()=>decrement()} className="decBTN">-</button>
                            </div>
                            </div>
                           
                    </div>
                </div>
                <div className="">
                  <Button className="deleteBtn">
                      <Trash3Fill color="#FF6900" size={30}/>
                  </Button>
                 
                </div>
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
                            <p className="historyPrice" style={{textAlign:'right',marginBottom:0}}>
                             تعداد :
                            </p>
                            <div className="counterDiv d-flex justify-content-center" style={{marginRight:10}}>
                            <button onClick={()=>increment2()} className="inBTN">+</button>
                            <span style={{marginRight:'0'}}>{count2}</span>
                            <button onClick={()=>decrement2()} className="decBTN">-</button>
                            </div>
                            </div>
                           
                    </div>
                </div>
                <div className="">
                  <Button className="deleteBtn">
                      <Trash3Fill color="#FF6900" size={30}/>
                  </Button>
                 
                </div>
               </div>
                </div>
                <div className="whiteBox mt-4">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex">
                   <Location/>
                   <p className="panelTitle">
                    آدرس های ذخیره شده
                   </p>
                   </div>
                   <Button className="editProfileBtn"  onClick={handleShow}>
                    + افزودن آدرس جدید
                   </Button>
                   <Modal
                                                show={show} onHide={handleClose}
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
                                                
                                                <Form.Select className="addressSelect">
                                            
                                                    <option>تهران</option>
                                                    <option>فارس</option>
                                                    <option>اصفهان</option>
                                                    <option>مازندران</option>
                                                </Form.Select>
                                                </Col>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                      شهر
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select className="addressSelect">
                                            
                                                    <option>تهران</option>
                                                    <option>شیراز</option>
                                                    <option>اصفهان</option>
                                                    <option>آمل</option>
                                                </Form.Select>
                                                </Col>
                                              </Row>
                                              <span className="inputTitle">کدپستی</span>
                        <br/>
                        <input className="inputCLass" type="text"/>
                        <br/>
                        <span className="inputTitle">آدرس</span>
                        <br/>
                        <textarea className="inputCLass" type="text" style={{height:160,resize:'none'}}/>
                                                
                                           
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={handleClose}className="modalSaveBtn">ذخیره</Button>
                                                </Modal.Footer>
                                             </Modal>
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
            <Col md={3}>
          
                <div className="whiteBox" style={{paddingTop:0,paddingLeft:0,paddingRight:0,paddingBottom:10}}>
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
                  <Button className="yellowColor" onClick={()=>onClick()}>
                    پرداخت
                  </Button>
                 
                </div>
                {showAlert ?
                  <p className="alertText">
                    ! ابتدا آدرس را وارد کنید تا به گام بعد جهت پرداخت منتقل شوید
                  </p>
                  : null}
            </Col>
          
            </Row>
   </Container>
   
    <Footer/>
   </div>
    );
};
export default Cart;