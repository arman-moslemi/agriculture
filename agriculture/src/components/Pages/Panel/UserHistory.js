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
import { useTranslation } from 'react-i18next';

const UserHistory = () =>{
  const [data, setData] = useState([]);
  const [his, setHis] = useState([]);
  const [cons, setCons] = useState([]);
  const [key, setKey] = useState('news');
  const [showSub, setShowSub] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [conReqID, setConReqID] = useState(0);
  const [second, setSeconds] = useState(0);
  const [text,setText]=useState("")
  const [titleSup,setTitleSup]=useState("")
  const [chat,setChat]=useState([])
  const [disable,setDisable]=useState(false)
  const {t,i18n} = useTranslation();

  const GetData=async()=>{
      const axios = require("axios");
    var ss= await localStorage.getItem("CustomerID")
  
      // axios.post(apiUrl + "HistoryConsultant",{CustomerID:ss})
      axios.post(apiUrl + "ChatHistory",{CustomerID:ss})
      .then(function (response) {
        if (response.data.result == "True") {
          console.log(777)

          setCons(response.data.Data)
          console.log(response.data.Data);

      }})
      .catch(function (error) {
        console.log(777)
        console.log(error);

        console.log(error);
      });
      axios.post(apiUrl + "CustomerSubFactor",{CustomerID:ss})
      .then(function (response) {
        if (response.data.result == "True") {
          console.log(33)

          setHis(response.data.Data)
          console.log(response.data.Data);

      }})
      .catch(function (error) {
        console.log(777)
        console.log(error);

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
        console.log(error);

        console.log(error);
      });
   
    }
  const GetChat=(id,status)=>{
    setShowSub(true)
    setDisable(status?true:false)
      const axios = require("axios");
  setConReqID(id)
    axios.post(apiUrl + 'ChatDetail',{ConsultantReqID:id})
    .then(function (response) {
      const message = response.data.Data;
      console.log(55);
      console.log(message);
      const result = response.data.result;
      console.log(result);

      if(result == "True"){
        setChat(response.data.Data)
// setText("")
        // navigation.navigate("ChangePass",{mobile:user,verify:response.data.Data})
                        }else{

      }
    })
    .catch(function (error) {
      console.log(error);
    });
   
    }
    const  NewMessage=async()=> {
      const axios = require("axios");

      var CustomerID= await localStorage.getItem("CustomerID")
      axios.post(apiUrl + 'ChatSend',{CustomerID:CustomerID,Text:text,ConsultantReqID:conReqID})
      .then(function (response) {
        const message = response.data.Data;
        console.log(7456);
        console.log(text);
        console.log(message);
        const result = response.data.result;
        console.log(result);
        if(result == "True"){
          setText("")
          // setData(response.data.Data)
          // Alert.alert("","با موفقیت اضافه شد")
          GetChat(conReqID);
            }
      else{
  
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  
  
      };
//     useEffect(() => {
//  setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//         // console.log(8989)
//         if(conReqID){

//           GetChat(conReqID,disable)
//         }
//             }, 10000);
//       if(conReqID){

//         GetChat(conReqID,disable)
//       }

//     }, [second]);
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
            <Tabs defaultActiveKey="profile" onSelect={(k) => setKey(k)} id="uncontrolled-tab-example" className="mb-3" activeKey={key}>
            <Tab eventKey="news" title={t("سفارشات")}>
              {
                Object.values(his).map((item)=>{
                  var tot=0;
                  item.forEach(element => {
                    tot+=element?.SpecialCost?element.SpecialCost*element.NumberFactor:element.Cost*element.NumberFactor;
                  });
return(

<Link to={"/Factor/"+item[0].FactorID} className="historyBox">
    <div className="d-flex align-items-center justify-content-between borderBottomGray">
        <span className="historyTitle">
        {t("تاریخ")} : {item[0].Date}
        </span>
       <div style={{textAlign:'left'}}>
       <span className="historyTitle">
       {t("مبلغ پرداختی")} : {tot} {t("تومان")}
        </span>
        <br/>
        <span className="vaziyat">
        {t("وضعیت سفارش")} : {item[0].Status}
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
           {t("مدل")} : {item2.BrandName}
           </p>
         </div>
           </div>
           <div style={{textAlign:'left'}}>
        <span className="historyPrice">
        {t("قیمت کالا")} : {item2?.SpecialCost?item2?.SpecialCost:item2?.Cost} {t("تومان")}
        </span>
        <br/>
        <span className="historyPrice">
        {t("تعداد")} : {item2.NumberFactor} {t("عدد")}
        </span>
        <br/>
        <span className="historyPrice">
        {t("سریال")} : {item2.FactorSerial} 
        </span>
        </div>
        </div>
          )
        })
      }
     
    </div>
</Link>
)
                })
              }
                
                </Tab>
                <Tab eventKey="product" title={t("مشاوره های دریافت شده")}>
                  {
cons.map((item,index)=>{
  return(

                <div className="consultBoxF2">
       <div className="d-flex">
       <p className="productName" style={{marginLeft:10,width:10}}>
            {index+1}
        </p>
        <p className="productName" style={{width:70}}>
{item.Subject}        </p>
<p className="productVolume" style={{width:100}}>
{t("تاریخ")}:{item.DateReq
+" ساعت:"+item.Time}       </p>
       </div>
     
       <div>
       <p className="productVolume">
{item.Name} {item.Family}        </p>
<p>{t("قیمت")}:{item.Cost}</p>
       </div>
       <div>
        {
          item.Status==3?
          <p className="productVolume">
            {t("بسته شده")}
          </p>
          :
          item.Status==2?
          <p className="productVolume">
            {t("پاسخ داده شده")}
          </p>
          :
          <p className="productVolume">
            {t("در انتظار پاسخ")}
          </p>

        }
     
       </div>
       <div>
        <div className="ticketStatus" id="answered">
          {
            item.Type==1?
            <span>{t("متنی")}</span>

            :
            item.Type==2?
            <span>{t("صوتی")}</span>

            :

            <span>{t("تصویری")}</span>

          }
        </div>
       </div>
       <div className="d-flex">
            {/* <Button className="repeatConsult">
                + تکرار مشاوره
            </Button> */}
            <Button
             onClick={()=>item.Type==1 ? GetChat(item.ConsultantReqID,item.Status==3?true:false) :    item.Status==3?null:               window.open("/LoginChat")            } 
             className="viewBtn">
                <EyeFill color="#AAB7CA" size={25}/>
            </Button>
            {/* <Button className="editProfileBtn"  onClick={handleShow}> 
                   + ایجاد پیام جدید
                   </Button> */}
           
        </div>
        
       </div>
  )
})
                  }
                       <Modal
                                                show={showSub} onHide={setShowSub}
                                                className="ticketShowModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    {t("چت")}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                {/* <p className="modalText mb-0">
                                                    <span>
                                                     موضوع تیکت : {subSupport[0]?.Title}
                                                    </span>
                                                    
                                                </p>
                                            <br/> */}
                                           <Row className="modalScroll">
                                            {
                                                chat?.map((item)=>{
                                                    return(
                                                        item.isCustomer==1?

                                     <Col md={12} style={{display:'flex',alignItems:'center',marginBottom:10,marginTop:10,justifyContent:'end'}}>
                                              
                                    <div className="answerText"  style={{backgroundColor:'rgb(236 235 236 / 46%)',height:'auto',minHeight:50,margin:0,padding:10,borderRadius:'15px 15px 15px 0px'}} >
                                                    <p style={{fontFamily:'IRANSans'}}>
                                                    {item.Text}
                                                    </p>
                                                  
                                                </div>
                                                <p style={{fontFamily:'IRANSans',color:'#cecece',fontSize:12,marginBottom:0,marginRight:10}}>{item.Date}</p>        
                                    
                                     </Col>
                                                        :

                                            <Col md={12} style={{display:'flex',alignItems:'center',marginBottom:10,marginTop:10,justifyContent:'start'}}>
                                                   <p style={{fontFamily:'IRANSans',color:'#cecece',fontSize:12,marginBottom:0,marginLeft:10}}>{item.Date}</p>
                                                   
                                            <div className="sendText" style={{height:'auto',minHeight:50,margin:0,padding:10,borderRadius:'15px 15px 0px 15px'}} >
                                                   
                                            <p style={{fontFamily:'IRANSans'}}>
                                                    {item.Text}
                                                    </p>
                                                </div>
                                            </Col>
                                                    )
                                                })
                                            }
                                                </Row>
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("ارسال پیام")} 
                                                    </span>
                                                    
                                                </p>
                                                <textarea onChange={(e)=>setText(e.target.value)} className="inputCLass" type="text" style={{maxHeight:150,minHeight:50}}/>
                                            
                                              
                                                </Form>
                                               
                                                </Modal.Body>
                                                {
                                                  !disable?

                                                <Modal.Footer>
                                                    <Button  
                                                    onClick={()=>NewMessage()} 
                                                    className="modalSaveBtn" >{t("ارسال پیام")}</Button>
                                                </Modal.Footer>
                                                  :
                                                  null
                                                }
                                             </Modal>
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
               
                <Tab eventKey="cons" title={t("مشاوره های داده شده")}>
                  {
cons?.filter((x)=>x.CustomerID2==localStorage.getItem("CustomerID")).map((item,index)=>{
  return(

    <div className="consultBoxF2">
<div className="d-flex">
<p className="productName" style={{marginLeft:10,width:10}}>
{index+1}
</p>
<p className="productName" style={{width:70}}>
{item.Subject}        </p>
<p className="productVolume" style={{width:100}}>
تاریخ:{item.DateReq
+" ساعت:"+item.Time}       </p>
</div>

<div>
<p className="productVolume">
{item.Name} {item.Family}        </p>
<p>قیمت:{item.Cost}</p>
</div>
<div>
{
item.Status==3?
<p className="productVolume">
بسته شده
</p>
:
item.Status==2?
<p className="productVolume">
پاسخ داده شده
</p>
:
<p className="productVolume">
در انتظار پاسخ
</p>

}

</div>
<div>
<div className="ticketStatus" id="answered">
{
item.Type==1?
<span>{t("متنی")}</span>

:
item.Type==2?
<span>{t("صوتی")}</span>

:

<span>{t("تصویری")}</span>

}
</div>
</div>
<div className="d-flex">
{/* <Button className="repeatConsult">
    + تکرار مشاوره
</Button> */}
<Button
 onClick={()=>item.Type==1 ? GetChat(item.ConsultantReqID,item.Status==3?true:false) :    item.Status==3?null:               window.open("/LoginChat")            } 
 className="viewBtn">
    <EyeFill color="#AAB7CA" size={25}/>
</Button>
{/* <Button className="editProfileBtn"  onClick={handleShow}> 
       + ایجاد پیام جدید
       </Button> */}

</div>

</div>
)
})
                  }
                       <Modal
                                                show={showSub} onHide={setShowSub}
                                                className="ticketShowModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    {t("چت")}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                {/* <p className="modalText mb-0">
                                                    <span>
                                                     موضوع تیکت : {subSupport[0]?.Title}
                                                    </span>
                                                    
                                                </p>
                                            <br/> */}
                                           <Row className="modalScroll">
                                            {
                                                chat?.map((item)=>{
                                                    return(
                                                        item.isCustomer==1?

                                     <Col md={12} style={{display:'flex',alignItems:'center',marginBottom:10,marginTop:10,justifyContent:'end'}}>
                                              
                                    <div className="answerText"  style={{backgroundColor:'rgb(236 235 236 / 46%)',height:'auto',minHeight:50,margin:0,padding:10,borderRadius:'15px 15px 15px 0px'}} >
                                                    <p style={{fontFamily:'IRANSans'}}>
                                                    {item.Text}
                                                    </p>
                                                  
                                                </div>
                                                <p style={{fontFamily:'IRANSans',color:'#cecece',fontSize:12,marginBottom:0,marginRight:10}}>{item.Date}</p>        
                                    
                                     </Col>
                                                        :

                                            <Col md={12} style={{display:'flex',alignItems:'center',marginBottom:10,marginTop:10,justifyContent:'start'}}>
                                                   <p style={{fontFamily:'IRANSans',color:'#cecece',fontSize:12,marginBottom:0,marginLeft:10}}>{item.Date}</p>
                                                   
                                            <div className="sendText" style={{height:'auto',minHeight:50,margin:0,padding:10,borderRadius:'15px 15px 0px 15px'}} >
                                                   
                                            <p style={{fontFamily:'IRANSans'}}>
                                                    {item.Text}
                                                    </p>
                                                </div>
                                            </Col>
                                                    )
                                                })
                                            }
                                                </Row>
                                                <p className="modalText mb-0">
                                                    <span>
                                                    ارسال پیام 
                                                    </span>
                                                    
                                                </p>
                                                <textarea onChange={(e)=>setText(e.target.value)} className="inputCLass" type="text" style={{maxHeight:150,minHeight:50}}/>
                                            
                                              
                                                </Form>
                                               
                                                </Modal.Body>
                                                {
                                                  !disable?

                                                <Modal.Footer>
                                                    <Button  
                                                    onClick={()=>NewMessage()} 
                                                    className="modalSaveBtn" >{t("ارسال پیام")}</Button>
                                                </Modal.Footer>
                                                  :
                                                  null
                                                }
                                             </Modal>
    
    
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