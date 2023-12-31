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
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";
import CustomizedDialogs from '../Layouts/AlertModal';
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
      const handleShow = (types,names,specialtys,wait) => {setShow(true);setName(names);setType(types);setSpecialty(specialtys)};
      const [show2, setShow2] = useState(false);
      const [name, setName] = useState();
      const [subject, setubject] = useState();
      const [Specialty, setSpecialty] = useState();
      const [type, setType] = useState();
      const [time, setTime] = useState();
      const [cost, setCost] = useState();
      const [consultant, setConsultant] = useState();

      const handleClose2 = () => {setShow2(false);setName("");setType("");setSpecialty("");setTime("")};
      const handleShow2 = () => {setShow2(true);setShow(false)};
      const [data, setData] = useState([]);
      const [recent, setRecent] = useState([]);

  
      const GetData=()=>{
          const axios = require("axios");
          axios.get(apiUrl + "AllConsultant")
          .then(function (response) {
            if (response.data.result == "True") {
                setData(response.data.Data)
                
              }})
              .catch(function (error) {
                  console.log(777)
                  alert(error)
                  
                  console.log(error);
              });
          axios.get(apiUrl + "GetConsultant")
          .then(function (response) {
            if (response.data.result == "True") {
                setData(response.data.Data)
                
              }})
              .catch(function (error) {
                  console.log(777)
                  alert(error)
                  
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
                    alert(error)
                    
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
                    alert(error)
                    
                    console.log(error);
                });
       
         
            
      
          }
        const InsertFavorite=(id)=>{
            const axios = require("axios");
            var ss= localStorage.getItem("CustomerID")
            axios.post(apiUrl + "InsertFavorite",{CustomerID:ss,CustomerID2:id})
            .then(function (response) {
              if (response.data.result == "True") {
                  alert("با موفقیت ثبت شد")
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
            <Button className="greenBtn searchBtn">
                فیلترهای جستجو
            </Button>
            <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                      دسته بندی یک
                    </AccordionItemButton>
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

            </Accordion>
            <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                     دسته بندی دو
                    </AccordionItemButton>
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

            </Accordion>
            <Accordion allowZeroExpanded className="accardionBox">
    
    <AccordionItem >
        <AccordionItemHeading>
            <AccordionItemButton>
              دسته بندی سه
            </AccordionItemButton>
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

    </Accordion>
    <Accordion allowZeroExpanded className="accardionBox">

    <AccordionItem >
        <AccordionItemHeading>
            <AccordionItemButton>
            دسته بندی چهار
            </AccordionItemButton>
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

    </Accordion>
            </Col>
            <Col md={9}>
                <div className="whiteBox">
                    <span className="whiteBoxTitle">
                        لیست مشاوران
                    </span>
                    <p className="consultationDescription">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                    </p>
                    <Row>
                        <Col md={6} className="mb-3">
                            {
                                data?.map((item)=>{
                                    return(

                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
{item.Name} {item.Family}                                       </p>
                                        
                                        <p className="consultDegree">
{item.Specialty}                                        </p>
                                        
                                        {/* <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : {item.WaitTime} دقیقه
                                        </p> */}
                                    </div>
                                    <div className="d-flex justify-space-between">
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
                                
                                    
                                    </div>

                                </div>
                                <div className="consultBox2">
                                    <div>
                                    <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی :  {item.WaitTime} دقیقه
                                        </p>
                                        </div>
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
        <h2 className="sliderTitle"> جدیدترین مشاوران ما</h2>
        <Slider {...settings} className="consultationSlider">
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
          <div className="sliderCardBox">
            <img src={Avatar} className="sliderImg"/>
            <p className="sliderName">یاسمن طاهری صراف</p>
            <p className="sliderDegree">کارشناس ارشد کشاورزی</p>
            <p className="sliderDescription">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
                   
            </p>
          </div>
        </Slider>
      </div>
   </Container>
   </Container>
    <Footer/>
   </div>
    );
};
export default Consultation