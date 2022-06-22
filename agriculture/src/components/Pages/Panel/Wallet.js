import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import WalletIcon from "src/components/assets/icon/Wallet";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Purse from "src/components/assets/img/purse.png";

const Wallet = () =>{
  
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
    <Row>
        <Col md={3}>
       <RightPanelMenu/>
        </Col>
        <Col md={9}>
        <div className="whiteBox">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex align-items-center">
                   <WalletIcon/>
                   <p className="panelTitle">
                   کیف پول
                   </p>
                   </div>
                   <div>
                   <Button className="editProfileBtn">
                    دریافت خروجی اکسل
                   </Button>
                   <Button className="editProfileBtn marginRight1rem">
                    برداشت وجه
                   </Button>
                   
                   </div>
                   </div>
                   <div className="whiteBox customWidthBox d-flex align-items-center">
                   <div>
                    <img src={Purse}/>
                   </div>
                    <div>
                    <p className="panelTitle">
                   موجودی کیف پول شما :
                   </p>
                   <p className="panelTitle blackColor">
                   125.000 تومان
                   </p>
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
export default Wallet;