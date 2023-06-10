import {React ,useState,useEffect } from "react";
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
import { Link, Navigate, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";
import CustomizedDialogs from '../Layouts/AlertModal';
import CarouselMulti from 'react-multi-carousel';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const Consultation = () =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl:true,
    
      };
      const [show, setShow] = useState(false);

      const handleClose = () => {setShow(false);};
      const handleShow = (types,names,specialtys,wait,cons,degree) => {
        if(                    localStorage.getItem("CustomerID")
        )
      {

          setShow(true);setName(names);setType(types);setSpecialty(specialtys);setConsultant(cons);setDegree(degree)
      }
        else{
            alert("ابتدا لاگین کنید")
        }
    }
      const [show2, setShow2] = useState(false);
      const [name, setName] = useState();
      const [subject, setubject] = useState();
      const [Specialty, setSpecialty] = useState();
      const [degree, setDegree] = useState();
      const [type, setType] = useState();
      const [time, setTime] = useState();
      const [cost, setCost] = useState();
      const [property, setProperty] = useState();
      const [consultant, setConsultant] = useState();
      const [open,setOpen]=useState(false)
      const [title,setTitle]=useState("")
      let navigate = useNavigate();

      const handleClose2 = () => {setShow2(false);setName("");setType("");setSpecialty("");setTime("");setConsultant();setDegree("")};
      const handleShow2 = () => {setShow2(true);setShow(false)};
      const [data, setData] = useState([]);
      const [data2, setData2] = useState([]);
      const [similar, setSimilar] = useState([]);
      const [recent, setRecent] = useState([]);

  
      const GetData=()=>{
          const axios = require("axios");
          axios.get(apiUrl + "AllConsultant")
          .then(function (response) {
            if (response.data.result == "True") {
                setData(response.data.Data.sort((a, b) =>
                a.RateAvg < b.RateAvg ? 1 : -1,
              ))
                setData2(response.data.Data.sort((a, b) =>
                a.RateAvg < b.RateAvg ? 1 : -1,
              ))
                console.log(345678)
                console.log(response.data.Data.sort((a, b) =>
                a.RateAvg < b.RateAvg ? 1 : -1,
              ))
              }})
              .catch(function (error) {
                  console.log(777)
                  console.log(error);
                  
                  console.log(error);
              });
          axios.get(apiUrl + "GetConsultant")
          .then(function (response) {
            if (response.data.result == "True") {
                setSimilar(response.data.Data)
                
              }})
              .catch(function (error) {
                  console.log(777)
                  console.log(error);
                  
                  console.log(error);
              });
          axios.get(apiUrl + "Specialty")
          .then(function (response) {
            if (response.data.result == "True") {
                setProperty(response.data.Data)                
              }})
              .catch(function (error) {
                  console.log(777)
                  console.log(error);
                  
                  console.log(error);
              });
       
          
    
        }
        const GetCost=(id)=>{
            const axios = require("axios");
            // setConsultant(id)
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
        const InsertConsultant=async(id)=>{
    
            const axios = require("axios");
            var ss= localStorage.getItem("CustomerID")
if(id==1)
{
    axios.post(apiUrl + "CustomerWallet",{CustomerID:ss})
    .then(function (response) {
        console.log("Wallet")
        console.log(response.data.result)
      if (response.data.result == "True") {
        console.log("Wallet")
        console.log(response.data.Data)
var tot=0
response.data.Data?.map((item)=>{
if(item?.Status==1){
    tot+=item?.Cost
}
else if(item?.Status==2){
    tot-=item?.Cost
}


})
if(tot>=cost){

    // dechargeWallet()
    SetConsultant()

}
else{
    setTitle("موجودی کیف پول شما کافی نیست")
    setOpen(true)
}
    }})
    .catch(function (error) {
      console.log(777)
      console.log(error);

      console.log(error);
    });
}
else{
    chargeWallet()
}

       
       
         
            
      
          }
          const chargeWallet=()=>{
            const axios = require("axios");
          
            var ss=localStorage.getItem("CustomerID")
            axios.post(apiUrl + "ChargeWallet",{CustomerID:ss,Money:cost*10,orderId:123456})
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
          const dechargeWallet=()=>{
            const axios = require("axios");
          
            var ss=localStorage.getItem("CustomerID")
            axios.post(apiUrl + "DeChargeWallet",{CustomerID:ss,Money:cost*10,orderId:123456})
            .then(function (response) {
                console.log(111)
                console.log(response)
              if (response.data.result== "True") {
                console.log(777)
                console.log(response.data)
                SetConsultant()

            }})
            .catch(function (error) {
              console.log(777)
              console.log(error);
    
              console.log(error);
            });
            
      
      
          }
          const SetConsultant=async()=>{
            const axios = require("axios");
            var ss= localStorage.getItem("CustomerID")
            axios.post(apiUrl + "SetConsultant",{Customer:ss,Consultant:consultant,Cost:cost,Time:time,Type:type,Subject:subject})
            .then(function (response) {
              if (response.data.result == "True") {
                console.log(8768)
                console.log(response.data)
                console.log(response.data.Data1?.id)
              localStorage.setItem("user_id",response.data.Data1?.id);
              localStorage.setItem("cons_id",response.data.Data2?.id);
              localStorage.setItem("cons_fname",response.data.Data2?.fname);
              localStorage.setItem("cons_lname",response.data.Data2?.lname);
              localStorage.setItem("cons_cost",cost);
              localStorage.setItem("cons_time",time);

                  handleClose2()
                  setTitle("با موفقیت ثبت شد")
                  setOpen(true)
           
                    axios.post(apiUrl + "SetSMSChat",{id:response.data.Data1?.id})
                    .then(function (response) {
                        console.log(8768)
                        console.log(response.data)
               if(type==3 || type==2){

                   window.open("/VideoChat")
               }
               else if(type==1){
                navigate("/UserHistory")
               }
                   
                        //   navigate("/VideoChat")
                      })
                        .catch(function (error) {                   
                            console.log(error);
                        });
    
                   
                 
               
                //   navigate("/VideoChat")
                }
            
            else{
                // alert("هم اکنون چت فعال وجود دارد")
                setTitle("هم اکنون چت فعال وجود دارد");
                setOpen(true)
            }})
                .catch(function (error) {
                    console.log(777)
                    console.log(error);
                });
          }
        const InsertFavorite=(id)=>{
            const axios = require("axios");
            var ss= localStorage.getItem("CustomerID")
            axios.post(apiUrl + "InsertFavorite",{CustomerID:ss,CustomerID2:id})
            .then(function (response) {
              if (response.data.result == "True") {
                //   alert("با موفقیت ثبت شد")
                  setTitle("با موفقیت ثبت شد")
                  setOpen(true)
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
        const [filter,setFilter]=useState([])
        var gg=[]
        const proFilter=(type,val,vv)=>{
      
      if(type==1){
        setFilter([...filter,{id:val,title:vv.SpecialtyID}])
        gg.push({id:val,title:vv.SpecialtyID})
        var ff=[]
      
          console.log(14563)
          console.log(val)
          console.log(gg)
      //  setProduct([])
      // var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
      data?.map((item2,index1)=>{
        var count=0;
      gg?.map((item,index3)=>{
      
       
      
          if(item2.SpecialtyID==item.id)
         {
           count+=1;
           if (count==gg.length){
      
            ff.push(item2)
          }
          
        
        }
        })
      })
      console.log(ff)
      // if(ff.length!=0){
      
        setData(ff)
      }
      else{
        setFilter( filter.filter((el)=>el.id!=vv.SpecialtyID));
        gg=gg.filter((el)=>el.id!=vv.SpecialtyID);
        var ff=[]
      
          console.log(14563)
          console.log(val)
          console.log(gg)
      //  setProduct([])
      // var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
      data2?.map((item2,index1)=>{
        var count=0;
      gg?.map((item,index3)=>{
      
       
      
          if(item2.SpecialtyID==item.id)
         {
           count+=1;
           if (count==gg.length){
      
            ff.push(item2)
          }
          
        
        }
        })
      })
      console.log(ff)
      // if(ff.length!=0){
      
        setData(ff)
      
      }
      
      
      
      // }
      if(gg.length==0)
      {
      GetData()
      }
      }
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
            <Col md={3}>
            <Button className="greenBtn searchBtn">
                فیلترهای جستجو
            </Button>
            <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
تخصص                    </AccordionItemButton>
                 </AccordionItemHeading>
            <AccordionItemPanel>
                {
                    property?.map((item)=>{
                        return(

            <div className="d-flex align-items-center">
                   
                    <Checkbox
                        sx={{
                        color: '#009959',
                        '&.Mui-checked': {
                        color: '#009959',
                        },
                    }}
                    value={item.SpecialtyID}
                    onChange={(e)=>e.target.checked? proFilter(1,e.target.value,item)
                      :                   
                     proFilter(2,e.target.value,item)                                       
                      
                     }
                />
                 <span className="categoryLable">
{item.SpecialtyName}                    </span>
                </div>
                        )
                    })
                }
              
             </AccordionItemPanel>
            </AccordionItem>

            </Accordion>
            {/* <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
مدرک                    </AccordionItemButton>
                 </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="d-flex align-items-center">
                   
                    <Checkbox

                        
                        sx={{
                        color: '#009959',
                        '&.Mui-checked': {
                        color: '#009959',
                        },
                    }}
                />
                 <span className="categoryLable">
                        زیر دسته یک
                    </span>
                </div>
                <div className="d-flex align-items-center">
                   
                   <Checkbox

                       
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته دو
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                       
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته سه
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                       defaultChecked
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته چهار
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                    
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                      زیر دسته پنج
                   </span>
               </div>
             </AccordionItemPanel>
            </AccordionItem>

            </Accordion> */}
           
            </Col>
            <Col md={9}>
                <div className="whiteBox">
                    <span className="whiteBoxTitle">
                        لیست مشاوران
                    </span>
                    <p className="consultationDescription">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                    </p>
                    <CustomizedDialogs Title={title} open={open} setOpen={setOpen} />

                    <Row>
                        <Col md={6} className="mb-3">
                            {
                                data?.filter((x)=>x.CustomerID!=localStorage.getItem("CustomerID")).map((item)=>{
                                    return(

                            <div className="consultBox" style={{margin:10}}>
                                <div className="consultBox1">
                                   <div style={{display:'flex'}}>
                                   <div>
                                    <img src={Avatar} className="avatar" style={{marginLeft:10}}/>
                                    </div>
                                    <div>
                                        <p className="consultName">
{item.Name} {item.Family}                                       </p>
                                        
                                        <p className="consultDegree">
{item.Specialty}                                        </p>
                                        

                                    </div>
                                   </div>
                                    <div className="d-flex justify-space-between">
                                    {
                      [...new Array(5)].map((item2,index)=>{
                        return(
index<parseInt(item.RateAvg)?

<StarFill color="#ffb921" className="marginLeft5"/>
:
<Star color="#000" className="marginLeft5"/>


                        )
                      })
                    }
                                
                                    
                                    </div>

                                </div>
                                <div className="consultBox2">
                                    <div>
                                    <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی :  {item.WaitTime} دقیقه
                                        </p>
                                        <div>
                                    <p className="consultDegree">
                                           زمان کاری:  {item.Avaible} 
                                        </p>
                                        </div>
                                        </div>
                                  
                                        <div className="d-flex ">
                                            <div className="borderLeftGreen" style={{alignItems:'center',justifyContent:'center',padding:10}}>
                                            <Link to="" className="callBtn " onClick={()=>handleShow("1",item.Name+" "+item.Family,item.Specialty,item.WaitTime ,item.CustomerID,item.Degree)}>
                                                متنی
                                            </Link>
                                            {/* <p className="consultDegree">تعداد:۵۰</p> */}
                                            </div>
                                            <div className="borderLeftGreen" style={{alignItems:'center',justifyContent:'center',padding:10}}>

                                            <Link to=""  className="callBtn " onClick={()=>handleShow("2",item.Name+" "+item.Family,item.Specialty,item.WaitTime ,item.CustomerID,item.Degree)}>
                                               صوتی
                                            </Link>
                                            {/* <p className="consultDegree">تعداد:۵۰</p> */}
                                            </div>
                                            <div className="borderLeftGreen" style={{alignItems:'center',justifyContent:'center',padding:10}}>

                                            <Link to=""  className="callBtn" onClick={()=>handleShow("3",item.Name+" "+item.Family,item.Specialty,item.WaitTime ,item.CustomerID,item.Degree)}>
                                                تصویری
                                            </Link>
                                            {/* <p className="consultDegree">تعداد:۵۰</p> */}
                                            </div>
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
                                                     {degree}
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
                                                    <Button  
                                                    onClick={()=>GetCost(consultant)}
                                                    // onClick={()=>alert(consultant)}
                                                    
                                                    className="modalSaveBtn">ثبت درخواست</Button>
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
                                                <Button  onClick={()=>InsertConsultant(1)}className="modalSaveBtn2">پرداخت از کیف پول</Button>
                                                    <Button  onClick={()=>InsertConsultant(2)}className="modalSaveBtn">شارژ کیف پول</Button>
                                                   
                                                </Modal.Footer>
                                             </Modal>
                                          
                                        </div>
                                </div>
                                <Button onClick={()=>InsertFavorite(item.CustomerID)} className="favorite">
                                    <Heart color={'#FF2525'}/>
                                   <p>
                                   افزودن به برگزیده ها
                                   </p>
                                </Button>
                            </div>
                                    )
                                })
                            }
                            </Col>
                        
                        </Row>
                        <div className="d-flex justify-content-center mt-5">
                        <PaginationCustom/>
                        </div>
                </div>
            </Col>
            </Row>
   </Container>
   <Container fluid className="containerWhite">
   <Container>
   <div>
        <h2 className="sliderTitle mb-4"> جدیدترین مشاوران ما</h2>
        <CarouselMulti responsive={responsive} rtl={true}>
            {
                similar?.map((item)=>{
                    return(

          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">{item.Name} {item.Family} </p>
            <p className="sliderDegree">{item.Specialty}</p>
            <p className="sliderDescription">
{item.Description}                   
            </p>
          </div>
                    )
                })
            }
      
         </CarouselMulti>
      </div>
   </Container>
   </Container>
    <Footer/>
   </div>
    );
};
export default Consultation