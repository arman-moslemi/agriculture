import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
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

const Consultation = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl:true,
      };
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
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
                            </Col>
                            <Col md={6} className="mb-3">
                            <div className="consultBox">
                                <div className="consultBox1">
                                    <div>
                                    <img src={Avatar} className="avatar"/>
                                    </div>
                                    <div>
                                        <p className="consultName">
                                            یاسمن طاهری صراف
                                        </p>
                                        
                                        <p className="consultDegree">
                                            کارشناسی ارشد کشاورزی
                                        </p>
                                        
                                        <p className="consultDegree">
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
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
                                            زمان انتظار جهت پاسخگویی : 20 دقیقه
                                        </p>
                                        </div>
                                        <div className="d-flex">
                                            <a href="#" className="callBtn borderLeftGreen">
                                                متنی
                                            </a>
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
        <Slider {...settings}>
          <div className="sliderCardBox">
            <h3>1</h3>
          </div>
          <div className="sliderCardBox">
            <h3>2</h3>
          </div>
          <div className="sliderCardBox">
            <h3>3</h3>
          </div>
          <div className="sliderCardBox">
            <h3>4</h3>
          </div>
          <div className="sliderCardBox">
            <h3>5</h3>
          </div>
          <div className="sliderCardBox">
            <h3>6</h3>
          </div>
          <div className="sliderCardBox">
            <h3>7</h3>
          </div>
          <div className="sliderCardBox">
            <h3>8</h3>
          </div>
          <div className="sliderCardBox">
            <h3>9</h3>
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