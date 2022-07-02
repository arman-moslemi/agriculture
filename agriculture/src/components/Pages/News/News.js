import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import { StarFill ,Star ,Heart ,TextLeft ,ChevronLeft ,Share ,ChatDots} from "react-bootstrap-icons";
import PaginationCustom from "src/components/Pages/Layouts/Pagination";
import News1 from "src/components/assets/img/news1.jpg";

const News = () =>{
    
    
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
            <Col md={3}>
            <div className="whiteBox  mb-2" style={{padding:0}}>
            <div className="d-flex sortNews">
            <TextLeft color="#ffb921" size={30}/>
            <span className="sortText">
                دسته بندی مطالب
            </span>
            </div>
            <ul className="newsCategory">
                <li>
                    <a href="#">
                        دسته بندی یک
                    </a>
                </li>
                <li>
                    <a href="#">
                        دسته بندی دو
                    </a>
                </li>
                <li>
                    <a href="#">
                        دسته بندی سه
                    </a>
                </li>
                <li>
                    <a href="#">
                        دسته بندی چهار
                    </a>
                </li>
                <li>
                    <a href="#">
                        دسته بندی پنج
                    </a>
                </li>
                <li>
                    <a href="#">
                        دسته بندی شش
                    </a>
                </li>
            </ul>
                </div>
            </Col>
            <Col md={9}>
            <div className="whiteBox mb-2 borderBottomGray" style={{padding:20}}>
            <span className="whiteBoxTitle">
                      اخبار و مقالات
                    </span>
            <div className="bigNewsBox">
                <div className="bigNewsCol bigPad">
                <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p>
                <p className="newsDesc">
                آن چیزی که میخواهد در خصوص متن ها نوشته شود میتواند در این قسمت درج شود.این یک متن آزمایشی می باشد که اینجا درج شده است
                </p>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="d-flex">
                        <Button className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <ChatDots className="newsBtnIcon" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                </div>
                <div className="bigNewsCol">
                <img src={News1} className="bigNewsImg"/>   
               
                </div>

            </div>
            <div className="d-flex align-items-center mt-3 justify-content-center">
                <div className="miniNewsBox">
                    <img src={News1}/>
                 <div className="newsB">
                 <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail2">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                 </div>
                </div>
                <div className="miniNewsBox">
                    <img src={News1}/>
                 <div className="newsB">
                 <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail2">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                 </div>
                </div>
                <div className="miniNewsBox">
                    <img src={News1}/>
                 <div className="newsB">
                 <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail2">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                 </div>
                </div>
            </div>
            <div className="d-flex align-items-stretch mt-3 justify-content-center">
                <div className="mediumNewsBox">
                <div className="bigNewsCol bigPad">
                <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p>
                <p className="newsDesc">
                آن چیزی که میخواهد در خصوص متن ها نوشته شود میتواند در این قسمت درج شود.این یک متن آزمایشی می باشد که اینجا درج شده است
                </p>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="d-flex">
                        <Button className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <ChatDots className="newsBtnIcon" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                </div>
                 <div style={{width:'50%'}}>
                 <img src={News1} style={{width:'100%',height:'100%',borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
                 </div>
                </div>
                <div className="miniNewsBox">
                    <img src={News1}/>
                 <div className="newsB">
                 <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail2">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                 </div>
                </div>
            </div>
            <div className="bigNewsBox">
                <div className="bigNewsCol bigPad">
                <p className="newsDate">
                    01/04/08
                </p>
                <p className="newsTitle">
                    عنوان خبر
                </p>
                <p className="newsDesc">
                آن چیزی که میخواهد در خصوص متن ها نوشته شود میتواند در این قسمت درج شود.این یک متن آزمایشی می باشد که اینجا درج شده است
                </p>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="d-flex">
                        <Button className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <ChatDots className="newsBtnIcon" size={20}/>
                        </Button>
                    </div>
                    <div>
                        <a href="#" className="textDetail">
                           ادامه مطلب <ChevronLeft/>
                        </a>
                    </div>
                </div>
                </div>
                <div className="bigNewsCol">
                <img src={News1} className="bigNewsImg"/>   
               
                </div>

            </div>
            <div className="d-flex justify-content-center mt-5">
                        <PaginationCustom/>
                        </div>
            </div>
           
            </Col>
            </Row>
   </Container>
  
    <Footer/>
   </div>
    );
};
export default News;