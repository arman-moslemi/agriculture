import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Instagram from 'src/components/assets/icon/Instagram';
import Telegram from 'src/components/assets/icon/Telegram';
import Whatsapp from 'src/components/assets/icon/Whatsapp';
import Logo from 'src/components/assets/img/logo.png';

const Footer = () =>{
  
    return(
   <Container fluid className="footerBox">
        <Container>
            <Row>
                <Col md={3} className="text-right">
                    <span className="footerTitle">
                        درباره ما
                    </span>
                    <p className="footerDescription">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد 
                    </p>
                </Col>
                <Col md={6}>
               <div className="w90 borderBottom">
               <span className="footerTitle">
                        میانبر
                    </span>
               </div>
               <ul className="footerList">
                <li>
                    <a href="/">
                        صفحه اصلی
                    </a>
                </li>
                <li>
                    <a href="/about-us">
                        درباره ما
                    </a>
                </li>
                <li>
                    <a href="/contact-us">
                        تماس با ما
                    </a>
                </li>
                <li>
                    <a href="/Rules">
                      قوانین و مقررات
                    </a>
                </li>
               </ul>
                </Col>
                {/* <Col md={2}>
                <div className="w90 borderBottom">
               <span className="footerTitle">
                        میانبر
                    </span>
               </div>
               <ul className="footerList">
                <li>
                    <a href="/">
                        صفحه اصلی
                    </a>
                </li>
                <li>
                    <a href="#">
                        درباره ما
                    </a>
                </li>
               
               </ul>
                </Col>
                <Col md={2}>
                <div className="w90 borderBottom">
               <span className="footerTitle">
                        میانبر
                    </span>
               </div>
               <ul className="footerList">
                <li>
                    <a href="/">
                        صفحه اصلی
                    </a>
                </li>
                <li>
                    <a href="/">
                        درباره ما
                    </a>
                </li>
                <li>
                    <a href="#">
                        تماس با ما
                    </a>
                </li>
                <li>
                    <a href="/Rules">
                      قوانین و مقررات
                    </a>
                </li>
               </ul>
                </Col> */}
                <Col md={3} className="d-grid">
                    <img src={Logo} className="footerLogo"/>
                    <br/>
                    <div className="d-flex justify-content-end">
                        <Whatsapp className="footerIcon ml-2"/>
                        <Instagram className="footerIcon ml-2"/>
                        <Telegram className="footerIcon"/>
                     
                    </div>
                    <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=310907&amp;Code=YakUjIavkOXx4SRsnbGL">
                            <img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=310907&amp;Code=YakUjIavkOXx4SRsnbGL" alt="" style={{cursor:"pointer" ,width:100,height:100}}id="YakUjIavkOXx4SRsnbGL"/>

                            </a>
                </Col>
                </Row>
        </Container>
   </Container>
    );
};
export default Footer;