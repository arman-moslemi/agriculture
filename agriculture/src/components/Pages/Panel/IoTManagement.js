import {React ,useState,useEffect } from "react";
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
import { ArrowUpSquare ,ArrowDownSquare,CaretDownFill ,ExclamationCircleFill ,Plus,Dash} from 'react-bootstrap-icons';
import IotImg from "src/components/assets/img/IotImg.png";
import Filter from "src/components/assets/img/Filter.png";
import Setting from "src/components/assets/img/setting.png";
import Tooltip from '@mui/material/Tooltip';
import CustomizedDialogs from '../Layouts/AlertModal';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const IoTManagement = () =>{
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [showSearch, setshowSearch] = useState(false);
    const [shows1, setshows1] = useState(0);
    const [shows2, setshows2] = useState(0);
    const [shows3, setshows3] = useState(0);
    const [showSearch2, setshowSearch2] = useState(false);
    const [showCondition, setshowCondition] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [partName, setPartName] = useState("");
    const [partid, setPartid] = useState();
    const [rules, setRules] = useState([]);
    const [sensor, setSensor] = useState();
    const [pipe, setPipe] = useState();
    const [conditionSensor, setConditionSensor] = useState();
    const [conditionPipe, setConditionPipe] = useState();
    const [forceSensor, setForseSensore] = useState();
    const [forcePipe, setForsePipe] = useState();
    const [statusPipe, setStatusPipe] = useState();
    const [value, setValue] = useState();
    const [sensorList, setSensorList] = useState([]);
    const [pipeList, setPipeList] = useState([]);
    const [open,setOpen]=useState(false)
    const [title,setTitle]=useState("")
    const [serial, setSerial] = useState();
    const [deviceName, setDeviceName] = useState("");
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const {t,i18n} = useTranslation();

    const handleClose2 = () => setShow2(false);
     const handleShow2 = () => setShow2(true);
     const [show3, setShow3] = useState(false);
   
     const handleClose3 = () => setShow3(false);
      const handleShow3 = () => setShow3(true);
      const [show4, setShow4] = useState(false);
   
      const handleClose4 = () => setShow4(false);
       const handleShow4 = () => setShow4(true);
     const onClick = (id) =>{
        setshowSearch(!showSearch);
        setshows1(id)
      };
      const onClick2 = (id) =>{
        setshowSearch2(!showSearch2);
        setPartid(id)

      };
      const onClick3 = (id) =>{
        setshowCondition(!showCondition);
        setshows3(id)

      };
      const [data, setData] = useState([]);
      const [dev, setDev] = useState([]);
    const [part, setPart] = useState([]);
    const GetData=()=>{
        const axios = require("axios");
      var ss=localStorage.getItem("CustomerID")
    
        axios.post(apiUrl + "CustomerPart",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(456789)

            setPart(response.data.Data)
            console.log(response.data.Data);

        }})
        .catch(function (error) {
          console.log(777)

          console.log(error);
        });
        axios.post(apiUrl + "CustomerDevice",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)

            setDev(response.data.Data)
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
        axios.post(apiUrl + "Rules",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log("rules")
            console.log(response.data.Data)

            setRules(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });

        axios.post(apiUrl + "GetSensor",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log("sensor")

            setSensorList(response.data.SensorData)
            setPipeList(response.data.PipeData)
            console.log(response.data.SensorData);
            console.log(response.data.PipeData);

        }})
        .catch(function (error) {
          console.log(777)

          console.log(error);
        });
     
      }
      const DeleteProject=(id)=>{
        const axios = require("axios");
        var ss=localStorage.getItem("CustomerID")
      
          axios.post(apiUrl + "DeleteProject",{ProjectID:id})
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
  handleClose()
GetData()  
setOpen(false)
          }})
          .catch(function (error) {
            console.log(777)
            console.log(error);
  
            console.log(error);
          });
      }
      const DeleteRule=(id)=>{
        const axios = require("axios");
        var ss=localStorage.getItem("CustomerID")
      
          axios.post(apiUrl + "DeleteRules",{RuleID:id})
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
  handleClose()
GetData()  
          }})
          .catch(function (error) {
            console.log(777)
            console.log(error);
  
            console.log(error);
          });
      }
      const InsertProject=()=>{
        const axios = require("axios");
        var ss=localStorage.getItem("CustomerID")
      
          axios.post(apiUrl + "InsertProject",{CustomerID:ss,ProjectName:projectName,PartName:partName})
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
  handleClose()
GetData()  
          }})
          .catch(function (error) {
            console.log(777)
            console.log(error);
  
            console.log(error);
          });
      }
      const InsertPart=(id)=>{
        const axios = require("axios");
        var ss=localStorage.getItem("CustomerID")
      
          axios.post(apiUrl + "InsertPart",{CustomerID:ss,ProjectID:id,PartName:partName})
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
              handleClose2()
GetData()  
          }})
          .catch(function (error) {
            console.log(777)
            console.log(error);
  
            console.log(error);
          });
      }
      const InsertDevice=(id)=>{
        const axios = require("axios");
        var ss=localStorage.getItem("CustomerID")
      
          axios.post(apiUrl + "InsertDevice",{PartID:id,Serial:deviceName})
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
              handleClose3()
GetData()  
          }})
          .catch(function (error) {
            console.log(777)
            console.log(error);
  
            console.log(error);
          });
      }
      const InsertRule=(type)=>{
        const axios = require("axios");
        var ss=localStorage.getItem("CustomerID")
      
          axios.post(apiUrl + "InsertRules",{CustomerID:ss,Type:type,SensorID:type==0?sensor:sensorList[0]?.SensorID,PipeID:type==1?parseInt(pipe):null,Value:value,
            Condition:type==0?conditionSensor:conditionPipe,StatusPipe:type==1?parseInt(statusPipe):null,Force:type==0?parseInt(forceSensor):1
          })
          .then(function (response) {
            if (response.data.result == "True") {
              console.log(777)
              handleClose3()
GetData()  
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
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex align-items-center">
                   <img src={Filter} width="30px"/>
                   <p className="panelTitle">
                   {t("مدیریت دستگاه های IoT")}
                   </p>
                   </div>
                   <div>
                  
                   <Button className="editProfileBtn marginRight1rem" onClick={handleShow}>
                   +  {t("افزودن پروژه")}
                   </Button>
                   <Modal
                                                show={show} onHide={handleClose}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    {t("افزودن پروژه جدید")}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("نام پروژه خود را وارد کنید")} : 
                                                    </span>
                                                    
                                                </p>
                                                <input onChange={(e)=>setProjectName(e.target.value)} className="inputCLass" type="text"/>
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("نام بخش اول را وارد کنید")} : 
                                                    </span>
                                                    
                                                </p>
                                                <input onChange={(e)=>setPartName(e.target.value)} className="inputCLass" type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("نوع بخش را انتخاب کنید")} 
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
                                                    <Button  onClick={()=>InsertProject()} className="modalSaveBtn" >افزودن</Button>
                                                </Modal.Footer>
                                             </Modal>
                   </div>
                   </div>
                {
                    part.length==0
                    ?
                    <>
                    
                    <img src={IotImg} className="IotImg"/>
                    <p className="tarikh" style={{fontSize:20,margin:30,textAlign:"center",fontWeight:"bold"}}> {t("تاکنون پروژه ای تعریف نکرده اید")}!</p>
                     
                    </>
                    :
                   Object.values(part).map((item)=>{
                return(
         <div className="accBox">
         <div className="d-flex align-items-center justify-content-between borderBottomGray">
            <div>
                <p style={{marginBottom:0,fontFamily:'IRANSansBold'}}>
                {item[0].ProjectName}       
                </p>
            </div>
            <div className="d-flex">
                <Button onClick={handleShow2} className="addSection" >
                    +  {t("افزودن بخش")}
                </Button> |
                <Button onClick={()=>setOpen(true)} className="deleteProject" >
                    -  {t("حذف پروژه")}
                </Button> |
                <p className="addDeviceText">
                {t("مشاهده بخش ها")}
                </p>
                <CustomizedDialogs Title={t("ایا از حذف مطمئن هستید؟")} open={open} Delete={true} setOpen={setOpen} DeleteAction={()=>DeleteProject(item[0].ProjectID)}/>

                <Button onClick={()=>onClick(item[0].ProjectID)} className="caretDownBtn">
                    <CaretDownFill color="#FF6900" size={20}/>
                </Button>
             
            </div>
            <Modal
                                                show={show2} onHide={handleClose2}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    {t("افزودن بخش")}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("نام بخش مورد نظر را وارد کنید")} : 
                                                    </span>
                                                    
                                                </p>
                                                <input onChange={(e)=>setPartName(e.target.value)} className="inputCLass" type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("نوع بخش را انتخاب کنید")} 
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
                                                    <Button  onClick={()=>InsertPart(item[0].ProjectID)} className="modalSaveBtn" >افزودن</Button>
                                                </Modal.Footer>
                                             </Modal>
           </div>
       {showSearch && item[0].ProjectID==shows1? 
        item.map((item2)=>{
            return(
        <div className="accBox2">
        <div className="r3 d-flex align-items-center justify-content-between borderBottomGray">
           <div>
               <p style={{marginBottom:0,fontFamily:'IRANSansMedium'}}>
               {item2.PartName}
               </p>
           </div>
           <div className="d-flex">
               <Button className="addSection" onClick={handleShow3}>
                   +  {t("افزودن دستگاه")}
               </Button> |
               <p className="addDeviceText">
               {t("مشاهده دستگاه ها")}
               </p>
               <Button onClick={()=>onClick2(item2.PartID)} className="caretDownBtn">
                   <CaretDownFill color="#FF6900" size={20}/>
               </Button>
               <Modal
                                                show={show3} onHide={handleClose3}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    {t("افزودن دستگاه")}
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                    {t("شماره سریال دستگاه را وارد کنید")}
                                                    </span>
                                                    
                                                </p>
                                                <input onChange={(e)=>setDeviceName(e.target.value)}  className="inputCLass" type="text"/>
                                                
                                                </Form>
                                               
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>InsertDevice(item2.PartID)} className="modalSaveBtn" > {t("ثبت دستگاه")}</Button>
                                                </Modal.Footer>
                                             </Modal>
           </div>
           
          </div>
      {showSearch2 && partid==item2.PartID? 
         dev.filter(x=>x.PartID==item2.PartID).map((item3)=>{
            return(
      <div>
        <div className="groundBox">
            <div className="d-flex align-items-center">
                <p className="groundName">
                {item3.Serial}                 </p>
                <Tooltip title="سالم" placement="top">
                    <ExclamationCircleFill color="#AAADB3"/>
          </Tooltip>
            </div>
            <div>
                {/* <Button className="deviceManage" style={{marginLeft:10}} onClick={()=>setSerial(item3.Serial)}>
                    قواعد دستگاه
                    </Button> */}
                <Button className="deviceManage" onClick={handleShow4}>
                    مدیریت دستگاه
                    </Button>
                    <Modal
                                                show={show4} onHide={handleClose4}
                                                className="consultModal2"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                   مدیریت دستگاه
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              
                                                
                                           
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <p className="modalText" style={{marginBottom:0}}>
                                                        نام دستگاه : دستگاه شماره یک
                                                    </p>
                                                    <div className="deviceStatus" id="salem">
                                                        <p>
                                                            سالم
                                                        </p>
                                                    </div>
                                                    {/* <div className="deviceStatus" id="kharab">
                                                        <p>
                                                            خراب
                                                        </p>
                                                    </div> */}
                                                </div>
                                               <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       نوع دستگاه : دستگاه فلان
                                                    </p>
                                               </div>
                                               <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       وضعیت پورت ها
                                                    </p>
                                               </div>
                                               <Table striped bordered hover className="portTable">
  <thead>
    <tr>
    
      <th className="portTh">شماره پورت</th>
      <th className="portTh">وضعیت</th>
      <th className="portTh">سنسور</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td className="portTd">12</td>
      <td className="portTd">فعال</td>
      <td className="portTd"></td>
    </tr>
    <tr>
    
      <td className="portTd">27</td>
      <td className="portTd">غیر فعال</td>
      <td className="portTd"></td>
    </tr>
   
  </tbody>
                                            </Table>
                                            <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       تاریخ رجیستر شدن : 01/04/08
                                                    </p>
                                               </div>
                                               <div className="mt-3 mb-3">
                                               <p className="modalText" style={{marginBottom:0}}>
                                                       آخرین تاریخ فعال شدن دستگاه : 01/04/01
                                                    </p>
                                               </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button  onClick={handleClose4} className="modalSaveBtn2" >غیر فعال کردن دستگاه</Button>
                                                    <Button  onClick={handleClose4} className="modalSaveBtn" >فعال کردن دستگاه</Button>
                                                </Modal.Footer>
                                             </Modal>
                </div>
        </div>    
       
      </div>
            )})
      : null}
        </div>
            )})
       : null}
         </div>
                )
                                                
                } 
                   ) 
            }
                  </div> 
                  {
                    // serial?
                    part.length!=0?



    <div className="whiteBox mt-3">
    <div className="d-flex align-items-center justify-content-between topBox">
       <div className="d-flex align-items-center">
       <img src={Setting} width="30px"/>
       <p className="panelTitle">
       {t("قواعد دستگاه")}  
       {/* {serial} */}
       </p>
       </div>
       </div>

       <div className="d-flex conditionBox align-items-center">
      <p className="condition">
      {t("اگر")}
      </p>
      <Form.Select  onChange={(ss)=>setSensor(ss.target.value)} className="bSelect2">
                {
                  sensorList?.map((item2)=>{
                    return(
item2!=null?
                      <option value={item2?.SensorID}>{item2?.Sensor}</option>
                      :
                      null
                    )
                  })
                }              
 
       </Form.Select>
       <Form.Select onChange={(ss)=>setConditionSensor(ss.target.value)}  className="bSelect2">
                              
          <option  value={"="}> {t("مساوی")}</option>
          <option  value={"b"}> {t("بزرگتر-مساوی")}</option>
          <option  value={"<="}> {t("کمتر-مساوی")}</option>
      </Form.Select>
      <input className="conditionInput" onChange={(ss)=>setValue(ss.target.value)}  placeholder="27 درجه"/>
      <Form.Select  onChange={(ss)=>setForseSensore(ss.target.value)} className="bSelect3">
                              
          <option value={0}> {t("و")}</option>
          <option value={1}> {t("یا")}</option>

      </Form.Select>
      <Button className="addBtn" onClick={()=>InsertRule(0)}>
          <Plus color="#fff" size="30"/>
      </Button>  
      </div>


      <div className="d-flex conditionBox align-items-center">
      <p className="condition">
      {t("آنگاه")}
  </p>
  <Form.Select onChange={(ss)=>setPipe(ss.target.value)} className="bSelect2">
              {
                pipeList?.map((item)=>{
return(
item!=null?

  <option value={item?.PipeID}>{item?.Pipe}</option>
  :
  null
)
                })
              }            
      
   </Form.Select>
   <Form.Select onChange={(ss)=>setConditionPipe(ss.target.value)} className="bSelect2">
                          
   <option  value={"="}> {t("مساوی")}</option>
          <option  value={"b"}> {t("بزرگتر-مساوی")}</option>
          <option  value={"<="}> {t("کمتر-مساوی")}</option>
  </Form.Select>
  <Form.Select onChange={(ss)=>setStatusPipe(ss.target.value)} className="bSelect3">
                          
                          <option value={0}>{t("باز")}</option>
                          <option value={1}>{t("بسته")}</option>
                      
                      </Form.Select>
                      <Button className="addBtn" onClick={()=>InsertRule(1)}>
          <Plus color="#fff" size="30"/>
      </Button>  
  </div>
       {rules?.map((item)=>{
  return(
    <>
    {
      item?.Type==0?
      <div className="d-flex conditionBox align-items-center">
      <p className="condition">
      {t("اگر")}
      </p>
      <Form.Select defaultValue={item?.SensorID} className="bSelect2">
                {
                  sensorList?.map((item2)=>{
                    return(
item2!=null?
                      <option value={item2?.SensorID}>{item2?.Sensor}</option>
                      :
                      null
                    )
                  })
                }              
 
       </Form.Select>
       <Form.Select defaultValue={item?.Condition} className="bSelect2">
                              
       <option  value={"="}> {t("مساوی")}</option>
          <option  value={"b"}> {t("بزرگتر-مساوی")}</option>
          <option  value={"<="}> {t("کمتر-مساوی")}</option>
      </Form.Select>
      <input className="conditionInput" value={item?.Value} placeholder="27 درجه"/>
      <Form.Select defaultValue={item?.Force} className="bSelect3">
                              
      <option value={0}>{t("باز")}</option>
                          <option value={1}>{t("بسته")}</option>

      </Form.Select>
      <Button className="addBtn" onClick={()=>DeleteRule(item?.RuleID)}>
          <Dash color="#fff" size="30"/>
      </Button>  
      </div>
      :
     null
    }
    



   
        </>         
      
  )
})}
  {rules?.map((item)=>{
  return(
    <>
    {  item?.Type==1?
       <div className="d-flex conditionBox align-items-center">
       <p className="condition">
       آنگاه
   </p>
   <Form.Select defaultValue={item?.PipeID} className="bSelect2">
                           
   {
                 pipeList?.map((item)=>{
 return(
 item!=null?
 
   <option value={item?.PipeID}>{item?.Pipe}</option>
   :
   null
 )
                 })
               }    
    </Form.Select>
    <Form.Select defaultValue={item?.Condition} className="bSelect2">
                           
    <option  value={"="}> {t("مساوی")}</option>
          <option  value={"b"}> {t("بزرگتر-مساوی")}</option>
          <option  value={"<="}> {t("کمتر-مساوی")}</option>
   </Form.Select>
   <Form.Select defaultValue={item?.StatusPipe}  className="bSelect3">
                           
   <option value={0}>{t("باز")}</option>
                          <option value={1}>{t("بسته")}</option>
                       
                       </Form.Select>
                       <Button className="addBtn" onClick={()=>DeleteRule(item?.RuleID)}>
           <Dash color="#fff" size="30"/>
       </Button> 
   </div>
   :
   null
      }
      </>)})}
       </div>

                
                  :null}
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default IoTManagement;