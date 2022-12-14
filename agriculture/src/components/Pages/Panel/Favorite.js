import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatr from "src/components/assets/img/avatar.png";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Product from "src/components/assets/img/product.png";
import { StarFill ,Star} from 'react-bootstrap-icons';
import CustomizedDialogs from '../Layouts/AlertModal';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation } from "react-router-dom";
import { truncate } from "src/utils/helper";
import { ChevronLeft,Heart} from "react-bootstrap-icons";


const Favorite = () =>{
    const [data, setData] = useState([]);
    const [favPro, setFavPro] = useState([]);
    const [favCustomer, setFavCustomer] = useState([]);
    const [favBlog, setFavBlog] = useState([]);
    const [key, setKey] = useState('product');
    const [show, setShow] = useState(false);

    const handleClose = () => {setShow(false);};
      const handleShow = (types,names,specialtys,wait) => {setShow(true);setName(names);setType(types);setSpecialty(specialtys)};
      const [show2, setShow2] = useState(false);
      const [name, setName] = useState();
      const [subject, setubject] = useState();
      const [Specialty, setSpecialty] = useState();
      const [type, setType] = useState();
      const [time, setTime] = useState();
      const [cost, setCost] = useState();
      const handleClose2 = () => {setShow2(false);setName("");setType("");setSpecialty("");setTime("")};
      const handleShow2 = () => {setShow2(true);setShow(false)};
      const [consultant, setConsultant] = useState();

    const GetData=()=>{
        const axios = require("axios");
      var ss=localStorage.getItem("CustomerID")
    
        axios.post(apiUrl + "CustomerFavorite",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(999)

            setFavPro(response.data.ProductData)
            setFavCustomer(response.data.CustomerData)
            setFavBlog(response.data.BlogData)
            console.log(response.data);

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
      const GetCost=(id)=>{
        const axios = require("axios");
        setConsultant(id)
        axios.post(apiUrl + "SetCostConsultant",{CustomerID:id,Time:time,Type:type})
        .then(function (response) {
          if (response.data.result == "True") {
              setCost(response.data.Data)
              handleShow2()
            }})
            .catch(function (error) {
                console.log(777)
                console.log(error);
                
                console.log(error);
            });
   
     
        
  
      }
    const InsertConsultant=()=>{
        const axios = require("axios");
        var ss= localStorage.getItem("CustomerID")
        axios.post(apiUrl + "SetConsultant",{Customer:ss,Consultant:consultant,Cost:cost,Time:time,Type:type,Subject:subject})
        .then(function (response) {
          if (response.data.result == "True") {
              handleClose2()
              alert("با موفقیت ثبت شد")
            }})
            .catch(function (error) {
                console.log(777)
                console.log(error);
                
                console.log(error);
            });
   
     
        
  
      }
      const DeleteFavorite=async(mm)=>{
        var ss=await localStorage.getItem("CustomerID")
      
  
        
        const axios = require("axios");
        axios.post(apiUrl + "DeleteFavorite",{FavoriteID:mm})
        .then(function (response) {
          if (response.data.result == "True") {
            alert("با موفقیت حذف شد")
  GetData()              
            }})
            .catch(function (error) {
                console.log(777)
                console.log(error);
                
                console.log(error);
            });
          ;
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
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3"  activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="product" title="محصولات برگزیده">
                    <div className="d-flex mt-3 flex-wrap justify-content-center">
                        {
                            favPro.filter(x=>x.ProductID!=null).map((item)=>{
                                return(

                        <div to={"/SingleProduct/"+item.ProductName2} className="productCard">
                             <Button onClick={()=>DeleteFavorite(item.FavoriteID)} className="heartmini">
              <Heart/>
              حذف از برگزیده ها
            </Button>
            <div style={{marginRight:20,padding:5,}}>
                           <Link  to={"/SingleProduct/"+item.ProductName2} style={{  textDecoration: "none" }}>
                           <img 
                           src={Product}
                            className="productImg"/>
                            <p className="productName">
                            {item.ProductName}  
                                                        </p>
                            <p className="productVolume">
                            موجودی : {item.Number} {item.Unit}
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                {/* <div className="d-flex align-items-center">
                                {
                      [...new Array(5)].map((item2,index)=>{
                        return(
index+1>item.Rate?
<StarFill color="#ffb921" className="marginLeft5"/>

:
                          <Star color="#000" className="marginLeft5"/>


                        )
                      })
                    }
                                </div> */}
                                <div>
                                <p className="productPriceStroke">
                                        {item.Cost} تومان
                                    </p>
                                    <p className="productPrice">
                                        {item.SpecialCost} تومان
                                    </p>
                                </div>
                            </div>
                           </Link>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                           نام تامین کننده کالا : {item.WarrantyName}
                            </p>
                           </div>
                        </div>
                                )
                            })
                        }
               
                    </div>
                </Tab>
                <Tab eventKey="consult" title="مشاوران برگزیده">
                {
                            favCustomer.filter(x=>x.CustomerID2!=null).map((item)=>{
                                return(
                   <div className="consultBoxF">
                    <div className="d-flex align-items-center">
                        <img src={Avatr} className="consultAvatar"/>
                        <p className="productName " style={{fontFamily:'IRANSansMedium'}}>
{item.Name} {item.Family}                            </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                    {/* <div style={{marginLeft:20}}>
                                    <p className="productPrice">
                                      امتیاز مشاور
                                    </p>
                                </div> */}
                                {/* <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div> */}
                                        <div className="d-flex">
                                            <Link to="" className="callBtn borderLeftGreen" onClick={()=>handleShow("1",item.Name+" "+item.Family,item.Specialty,item.WaitTime )}>
                                                متنی
                                            </Link>
                                            <Link to=""  className="callBtn borderLeftGreen" onClick={()=>handleShow("2",item.Name+" "+item.Family,item.Specialty,item.WaitTime )}>
                                               صوتی
                                            </Link>
                                            <Link to=""  className="callBtn" onClick={()=>handleShow("3",item.Name+" "+item.Family,item.Specialty,item.WaitTime )}>
                                                تصویری
                                            </Link>
                                            <Modal
                                                show={show} onHide={handleClose}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    زمان مورد نیاز برای انجام مشاوره
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <p className="modalText">
                                                    <span>
                                                        نام مشاور : 
                                                    </span>
{name}                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                       تحصیلات : 
                                                    </span>
                                                     {Specialty}
                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                        نوع مشاوره : 
                                                    </span>
                                                    {type==1?"متنی":type==2?"صوتی":"تصویری"}
                                                </p>
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                        موضوع مشاوره : 
                                                    </span>
                                                    
                                                </p>
                                                <input onChange={(e)=>setubject(e.target.value)} className="inputCLass" type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                        مدت زمان مشاوره : 
                                                    </span>
                                                </p>
                                                <Form.Select onChange={(ss)=>setTime(ss.target.value)} className="bSelect">
                                            
                                                    <option value={""}>انتخاب</option>
                                                    <option value={15}>15 دقیقه</option>
                                                    <option value={30}>30 دقیقه</option>
                                                    <option value={45}>45 دقیقه</option>
                                                    <option value={60}>60 دقیقه</option>
                                                </Form.Select>
                                                </div>
                                                </Form>
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>GetCost(item.CustomerID)}className="modalSaveBtn">ثبت درخواست</Button>
                                                </Modal.Footer>
                                             </Modal>
                                             <Modal
                                                show={show2} onHide={handleClose2}
                                                className="consultModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                    تایید درخواست
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <p className="modalText">
                                                    <span>
                                                        نام مشاور : 
                                                    </span>
{name}                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                       تحصیلات : 
                                                    </span>
{Specialty}                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                        نوع مشاوره : 
                                                    </span>
                                                     {type==1?"متنی":type==2?"صوتی":"تصویری"}
                                                </p>
                                           
                                             
                                                <p className="modalText">
                                                    <span>
                                                        موضوع مشاوره : 
                                                    </span>
{subject}                                                </p>
                                                <p className="modalText colorOrange">
                                                    <span>
                                                        هزینه مشاوره : 
                                                    </span>
                                                   {cost} تومان
                                                </p>
                                            
                                            
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button  onClick={InsertConsultant}className="modalSaveBtn2">پرداخت از کیف پول</Button>
                                                    <Button  onClick={InsertConsultant}className="modalSaveBtn">پرداخت آنلاین</Button>
                                                   
                                                </Modal.Footer>
                                             </Modal>
                                          
                                        </div>
                                <div className="d-flex align-items-center">
                                     <Button onClick={()=>DeleteFavorite(item.FavoriteID)} className="heartCons">
              <Heart/>
              حذف از برگزیده ها
            </Button>
            </div>
                            </div>
                   </div>
                                )})}
                </Tab>
                <Tab eventKey="news" title="اخبار برگزیده">
                <div className="d-flex mt-3 flex-wrap justify-content-start">

                  {
                        
                          favBlog.filter(x=>x.BlogID!=null).map((item)=>{
                              return(
                                <Col md={4}>
                    
                                <div 
                                
                                className="miniNewsBox w90"
                                
                                >
                                           <Button onClick={()=>DeleteFavorite(item.FavoriteID)} className="heartCons">
              <Heart/>
              حذف از برگزیده ها
            </Button>
                                              <img 
                                                  src={apiAsset+item?.Pic}
                                                  />
                                           <div className="newsB">
                                           <p className="newsDate">
                                           {item?.Date}   
                                          </p>
                                          <p className="newsTitle">
                                          {item?.Title}                
                                                          </p> 
                                          {/* <p className="newsDes">
                                          {truncate( item?.Text,30)}
                                                           </p> */}
                                          <div className="d-flex align-items-center justify-content-between mt-4">
                                            
                                              <div>
                                              <Link to={"/SingleNews/"+item?.Title} className="textDetail">
                                                     ادامه مطلب <ChevronLeft/>
                                                  </Link>
                                              </div>
                                          </div>
                                           </div>
                                          </div>
                                </Col>
                              )})
                  }
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
export default Favorite;