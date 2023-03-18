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
import { Link, useNavigate,useLocation } from "react-router-dom";

import { ArrowUpSquare ,ArrowDownSquare } from 'react-bootstrap-icons';
const Wallet = () =>{
    const [show, setShow] = useState(false);
    const [cost, setCost] = useState(0);
    let navigate = useNavigate();

    const handleClose = () =>{ setShow(false);chargeWallet()}
    const handleShow = () => setShow(true);
    const [data, setData] = useState([]);
    const [wallet, setWallet] = useState([]);
    const [total, setTotal] = useState([]);

    const GetData=()=>{
        const axios = require("axios");
      
        var ss=localStorage.getItem("CustomerID")
        axios.post(apiUrl + "ReadCustomer",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log("customer")
            console.log(response.data.Data)
            console.log(response.data.Data[0]?.Name)
            setData(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        axios.post(apiUrl + "CustomerWallet",{CustomerID:ss})
        .then(function (response) {
            console.log("Wallet")
            console.log(response.data.result)
          if (response.data.result == "True") {
            console.log("Wallet")
            console.log(response.data.Data)
            setWallet(response.data.Data)
var tot=0
response.data.Data?.map((item)=>{
    if(item?.Status==1){
        tot+=item?.Cost
    }
    else if(item?.Status==2){
        tot-=item?.Cost
    }
})
setTotal(tot)
        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        
  
  
      }
    const chargeWallet=()=>{
        const axios = require("axios");
      
        var ss=localStorage.getItem("CustomerID")
        axios.post(apiUrl + "ChargeWallet",{CustomerID:ss,Money:cost,orderId:123456})
        .then(function (response) {
            console.log(111)
            console.log(response)
          if (response.status== 200) {
            console.log(777)
            console.log(response.data.refId)
//             navigate("/Dargah"
// , { replace: true,state:{id:response.data?.refId} }
// );
window.location.href="/dargahh.html?id="+response.data?.refId;
        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        
  
  
      }

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
                   {/* <Button className="editProfileBtn">
                    دریافت خروجی اکسل
                   </Button> */}
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
                                                     مبلغ مورد نظر خود را وارد کنید :  (ریال) 
                                                    </span>
                                                    
                                                </p>
                                                <input className="inputCLass" onChange={(e)=>setCost(e.target.value)} type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                        بانک مقصد
                                                    </span>
                                                    
                                                </p>
                                                <br/>
                                                <Form.Select className="bSelect">
                                            
                                                    <option>ملت</option>
                                                    {/* <option>صادرات</option>
                                                    <option>پارسیان</option>
                                                    <option>پاسارگاد</option> */}
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
                 {total}تومان
                   </p>
                    </div>

                   </div>
                   <div className="d-flex align-items-center">
                  <img src={Updown} width="44"/>
                   <p className="panelTitle">
                   تاریخچه تراکنش های شما
                   </p>
                   </div>
                   {
                    wallet?.map((item)=>{
                        return(
                            item.Status!=0?
<Row className="mt-4">
   
        <Col md={12}>
        <div className="whiteBox d-flex align-items-center justify-content-between pd15 r2">
        {
        item?.Status==1?
        <>
             <ArrowUpSquare size={35} color="#009959"/>
             <p className="variz" style={{width:100}}>واریز وجه</p>
             </>
             :
        item?.Status==2?
        <>

        <ArrowDownSquare size={35} color="#FF2525"/>
        <p className="bardasht" style={{width:100}}>برداشت وجه</p>
        </>
        :
        null}
             <p className="tarikh">{item?.Cost} تومان</p>
             <p className="tarikh">{item?.Date} {item?.Time}</p>
             <p className="tarikh">{item?.FactorNumber} </p>
        </div>
    </Col>
        
   
       
                 
                  
                   </Row>
                   :
                   null
                        )
                    })
                   }
                   
                   
                   </div>
        </Col>
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default Wallet;