import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Ticket from "src/components/assets/img/Ticket.png";
import { StarFill ,Star} from 'react-bootstrap-icons';

const TicketList = () =>{
 
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
                  <img src={Ticket} width="30px"/>
                   <p className="panelTitle">
                   تیکت ها و پشتیبانی
                   </p>
                   </div>
                   <div>
                   <Button className="editProfileBtn">
                   + ایجاد پیام جدید
                   </Button>
                
               
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
export default TicketList;