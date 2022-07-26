import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatr from "src/components/assets/img/avatar.png";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Product from "src/components/assets/img/product.png";
import { StarFill ,Star ,EyeFill} from 'react-bootstrap-icons';
import Product2 from "src/components/assets/img/p2.png";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
const UserHistory = () =>{
  const [data, setData] = useState([]);
  const [his, setHis] = useState([]);
  const [cons, setCons] = useState([]);

  const GetData=()=>{
      const axios = require("axios");
    var ss=localStorage.getItem("CustomerID")
  
      axios.post(apiUrl + "HistoryConsultant",{CustomerID:ss})
      .then(function (response) {
        if (response.data.result == "True") {
          console.log(777)

          setCons(response.data.Data)
          console.log(response.data.Data);

      }})
      .catch(function (error) {
        console.log(777)
        alert(error)

        console.log(error);
      });
      axios.post(apiUrl + "CustomerSubFactor",{CustomerID:ss})
      .then(function (response) {
        if (response.data.result == "True") {
          console.log(777)

          setHis(response.data.Data)
          console.log(response.data.Data);

      }})
      .catch(function (error) {
        console.log(777)
        alert(error)

        console.log(error);
      });
      axios.post(apiUrl + "ReadCustomer",{CustomerID:ss})
      .then(function (response) {
        if (response.data.result == "True") {
          console.log(777)

          setData(response.data.Data)

      }})
      .catch(function (error) {
        console.log(777)
        alert(error)

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
               
              <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="news" title="سفارشات">
              {
                Object.values(his).map((item)=>{
return(

<div className="historyBox">
    <div className="d-flex align-items-center justify-content-between borderBottomGray">
        <span className="historyTitle">
            تاریخ : {item[0].Date}
        </span>
       <div style={{textAlign:'left'}}>
       <span className="historyTitle">
          مبلغ پرداختی : {item[0].TotalCost} تومان
        </span>
        <br/>
        <span className="vaziyat">
          وضعیت سفارش : {item[0].Status}
        </span>
       </div>
    </div>
    <div className="historyProductBox">
      {
        item.map((item2)=>{
          return(

        <div className="d-flex align-items-center justify-content-between borderBottomGray">
           <div className="d-flex align-items-center">
           <img 
                        src={apiAsset+item2.Pic1}
                        className="historyImg"/>
         <div>
         <p className="HistoryProductTitle">
{item2.Name}           </p>
           <p className="HistoryProductModel">
           مدل : {item2.BrandName}
           </p>
         </div>
           </div>
           <div style={{textAlign:'left'}}>
        <span className="historyPrice">
          قیمت کالا : {item2.SubFactorCost} تومان
        </span>
        <br/>
        <span className="historyPrice">
         تعداد : {item2.SubFactorNumber} عدد
        </span>
        </div>
        </div>
          )
        })
      }
     
    </div>
</div>
)
                })
              }
                
                </Tab>
                <Tab eventKey="product" title="مشاوره های دریافت شده">
                  {
cons.map((item,index)=>{
  return(

                <div className="consultBoxF2">
       <div className="d-flex">
       <p className="productName" style={{marginLeft:10}}>
            {index+1}
        </p>
        <p className="productName">
{item.Title}        </p>
       </div>
     
       <div>
       <p className="productVolume">
{item.Name}{item.Family}        </p>
       </div>
       <div>
       <p className="productVolume">
         چت {item.Status}
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
  )
})
                  }
       {/* <div className="consultBoxF2">
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
        
       </div> */}
    
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