import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Instagram from 'src/components/assets/icon/Instagram';
import Phone from 'src/components/assets/icon/Phone';
import Telegram from 'src/components/assets/icon/Telegram';
import Whatsapp from 'src/components/assets/icon/Whatsapp';
import Logo from 'src/components/assets/img/logo.png';
import {Search } from 'react-bootstrap-icons';
import Cart from 'src/components/assets/icon/Cart';
import Profile from 'src/components/assets/icon/Profile';
const Header = () =>{
   
    return(
   <Container fluid className="pd0" style={{padding:0}}>
    <div className="topBar">
        <Container>
            <Row>
                <Col md={6} className="text-right">
                <div className="d-flex align-items-center">
                    <Phone/>
                    <p className="topBarText">
                  بخش فروش : 86052 - 021
                    </p>
                </div>
                </Col>
                <Col md={6} className="topBarLeft">
                    
                    <Telegram className="topBarIcon"/>
                    <Whatsapp className="topBarIcon"/>
                    <Instagram className="topBarIcon"/>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="grayBar">
        <Container className="grayBarContainer">
        <img src={Logo} className="logo"/>
        <div className="searchDiv">
            <input className="searchInput" placeholder="نام محصول یا برند مورد نظر را جستجو کنید ..."/>
            <Search color="#009959"/>
        </div>
        <div className="btnBox">
            
        </div>
        </Container>
    </div>
   </Container>
    );
};
export default Header;