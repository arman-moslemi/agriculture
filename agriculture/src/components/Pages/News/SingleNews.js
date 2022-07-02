import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import { StarFill ,Star ,Heart ,TextLeft ,ChevronLeft ,Share ,ChatDots} from "react-bootstrap-icons";
import PaginationCustom from "src/components/Pages/Layouts/Pagination";
import News1 from "src/components/assets/img/news1.jpg";

const SingleNews = () =>{
    
    
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
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox">
                    <div>
                        <p className="headerNews">
                            عنوان مقاله
                        </p>
                        <p className="headerDate">
                            تاریخ انتشار : 01/04/08
                        </p>
                    </div>
                    <div>
                        <Button className="addFavorite">
                            <Heart className="customM"size={20}/>
                            افزودن به برگزیده ها
                        </Button>
                    </div>
                </div>
                <div className="newsTextBox">
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون 
                    </p>
                </div>
                <img src={News1} className="newsImgSingle"/>
                <div className="newsTextBox">
                    <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون 
                    </p>
                </div>
            </div>
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox">
                    <div>
                        <p className="headerNews">
                           دیدگاه های ثبت شده
                        </p>
                       
                    </div>
                   
                </div>
                <div className="commentBox">
                    <div className="d-flex justify-content-between">
                        <p className="userNameCommnet">
                            کاربر شماره یک
                        </p>
                        <div className="d-flex align-items-center" >
                            <p className="writerScore">
                                امتیاز ثبت شده : 
                            </p>
                            <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                        </div>
                       
                    </div>
                    <p className="writerScore mt-4">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                            </p>
                </div>
                <div className="commentBox">
                    <div className="d-flex justify-content-between">
                        <p className="userNameCommnet">
                            کاربر شماره یک
                        </p>
                        <div className="d-flex align-items-center" >
                            <p className="writerScore">
                                امتیاز ثبت شده : 
                            </p>
                            <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                        </div>
                       
                    </div>
                    <p className="writerScore mt-4">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                            </p>
                </div>
                <div className="commentBox">
                    <div className="d-flex justify-content-between">
                        <p className="userNameCommnet">
                            کاربر شماره یک
                        </p>
                        <div className="d-flex align-items-center" >
                            <p className="writerScore">
                                امتیاز ثبت شده : 
                            </p>
                            <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                        </div>
                       
                    </div>
                    <p className="writerScore mt-4">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
                            </p>
                </div>
            </div>
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox" style={{border:0}}>
                    <div style={{width:'100%'}}>
                        <p className="headerNews">
                           دیدگاه های ثبت شده
                        </p>
                       <p style={{fontFamily:'IRANSansBold'}}>
                        هیچ دیدگاهی برای این موضوع ثبت نشده است شما اولین نفر باشید !
                       </p>
                       <p style={{fontFamily:'IRANSans'}}>
                       نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *
                       </p>
                       <div className="d-flex align-items-center mt-3">
                       <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        امتیاز شما : 
                       </p>
                       <div className="d-flex align-items-center" style={{marginRight:25}}>
                                    <Star color="#000" className="marginLeft5" size={25}/>
                                    <Star color="#000" className="marginLeft5" size={25}/>
                                    <StarFill color="#ffb921" className="marginLeft5" size={25}/>
                                    <StarFill color="#ffb921" className="marginLeft5" size={25}/>
                                    <StarFill color="#ffb921" size={25}/>
                        </div>
                        
                       </div>
                       <Row className="mt-3">
                        <Col md={6} className="d-flex align-items-center">
                        <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        نام و نام خانوادگی شما : 
                       </p>
                       <input className="inputCLass cInput" type="text"/>
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                        <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        ایمیل شما : 
                       </p>
                       <input className="inputCLass cInput" type="text"/>
                        </Col>
                       </Row>
                       <div className="d-flex mt-3 align-items-start">
                       <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        ایمیل شما : 
                       </p>
                       <textarea className="inputCLass cInput" type="text"/>
                       </div>
                    </div>
                   
                </div>
                
               
              
            </div>
            </Col>
            </Row>
   </Container>
  
    <Footer/>
   </div>
    );
};
export default SingleNews;