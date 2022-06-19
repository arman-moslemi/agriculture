import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
const Consultation = () =>{
   
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
            <Col md={3}>
            <Button className="greenBtn searchBtn">
                فیلترهای جستجو
            </Button>
            </Col>
            <Col md={9}>
                <div className="whiteBox">
                    <span className="whiteBoxTitle">
                        لیست مشاوران
                    </span>
                </div>
            </Col>
            </Row>
   </Container>
    <Footer/>
   </div>
    );
};
export default Consultation