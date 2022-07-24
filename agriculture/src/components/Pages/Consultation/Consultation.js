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

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [show2, setShow2] = useState(false);

      const handleClose2 = () => {setShow2(false)};
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
{item.Degree}                                        </p>
                                        
                                        {/* <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : {item.WaitTime} دقیقه
                                        </p> */}
                                    </div>
                                    <div className="d-flex justify-space-between">
                                    <Star color={'#000'} className="marginLeft5"/>
                                    <Star color={'#000'} className="marginLeft5"/>
                                    <StarFill color={'#ffb921'} className="marginLeft5"/>
                                    <StarFill color={'#ffb921'} className="marginLeft5"/>
                                    <StarFill color={'#ffb921'}/>
                                    
                                    </div>

                                </div>
                                <div className="consultBox2">
                                    <div>
                                    <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی :  {item.WaitTime} دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen" onClick={handleShow}>
                                                متنی
                                            </a>
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
                                                     یاسمن طاهری صراف
                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                       تحصیلات : 
                                                    </span>
                                                     کارشناس ارشد کشاورزی
                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                        نوع مشاوره : 
                                                    </span>
                                                     متنی
                                                </p>
                                           
                                                <Form>
                                                <p className="modalText mb-0">
                                                    <span>
                                                        موضوع مشاوره : 
                                                    </span>
                                                    
                                                </p>
                                                <input className="inputCLass" type="text"/>
                                                <div className="d-flex align-items-center">
                                                <p className="modalText mb-0">
                                                    <span>
                                                        مدت زمان مشاوره : 
                                                    </span>
                                                    
                                                </p>
                                                <Form.Select className="bSelect">
                                            
                                                    <option>15 دقیقه</option>
                                                    <option>30 دقیقه</option>
                                                    <option>45 دقیقه</option>
                                                    <option>60 دقیقه</option>
                                                </Form.Select>
                                                </div>
                                                </Form>
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={handleShow2}className="modalSaveBtn">ثبت درخواست</Button>
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
                                                     یاسمن طاهری صراف
                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                       تحصیلات : 
                                                    </span>
                                                     کارشناس ارشد کشاورزی
                                                </p>
                                                <p className="modalText">
                                                    <span>
                                                        نوع مشاوره : 
                                                    </span>
                                                     متنی
                                                </p>
                                           
                                             
                                                <p className="modalText">
                                                    <span>
                                                        موضوع مشاوره : 
                                                    </span>
                                                    آفت زدگی مراتع
                                                </p>
                                                <p className="modalText colorOrange">
                                                    <span>
                                                        هزینه مشاوره : 
                                                    </span>
                                                    125.000 تومان
                                                </p>
                                            
                                            
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                <Button  onClick={handleClose2}className="modalSaveBtn2">پرداخت از کیف پول</Button>
                                                    <Button  onClick={handleClose2}className="modalSaveBtn">پرداخت آنلاین</Button>
                                                   
                                                </Modal.Footer>
                                             </Modal>
                                            <a href="#" className="callBtn borderLeftGreen">
                                               صوتی
                                            </a>
                                            <a href="#" className="callBtn">
                                                تصویری
                                            </a>
                                        </div>
                                </div>
                                <Button className="favorite">
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