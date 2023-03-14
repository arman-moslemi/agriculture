import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Product from "src/components/assets/img/product.png";
import Home2 from "src/components/assets/img/home2.png";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useNavigate,useParams, Link } from "react-router-dom";


import { renderIntoDocument } from "react-dom/test-utils";
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { truncate } from "src/utils/helper";
const ContactUs = () =>{

   return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="">
        <Row>
          <Col md={12}>
            <div className="smartBox">
              
                <Col md={12}>
                <p className="home2Title" style={{fontSize:25}}>
            تماس با ما
            </p>
            <p className="home2Title" style={{fontSize:20}}>
             موبایل
            </p>
            <p className="home2Des" style={{width:'auto',fontFamily:'IRANSans',lineHeight:2,textAlign:'justify'}}>
۰۹۱۲۱۲۳۴۵۶            </p>
            <p className="home2Title" style={{fontSize:20}}>
             ثابت
            </p>
            <p className="home2Des" style={{width:'auto',fontFamily:'IRANSans',lineHeight:2,textAlign:'justify'}}>
۲۲۲۲۲۲۲۲۲            </p>

         
                </Col>
            
             
           
            </div>
          </Col>
      
            </Row>
   </Container>
   
    <Footer/>
   </div>
    );
};
export default ContactUs;