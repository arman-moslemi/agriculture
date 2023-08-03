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
import parse  from 'html-react-parser';
import { useTranslation } from 'react-i18next';

const AboutUs = () =>{
  const [data,setData]=useState([])
  const {t,i18n} = useTranslation();

  const GetData=async()=>{
    const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    const rate=await localStorage.getItem("rate")
    console.log(444)
    console.log(lang)
    i18n.changeLanguage(lang)

    axios.get(apiUrl + "Info",{  headers: {
      lang: i18n.language,
      rate:rate
    }})
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {
console.log(123098)
console.log(response.data.Data[0])
        setData(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      console.log(error)

      console.log(error);
    });
   
 
    

  }

  useEffect(() => {
    GetData();

  }, []);
   return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="">
        <Row>
          <Col md={12}>
            <div className="smartBox">
              
                <Col md={12}>
                {   data?.length>0?
                          parse (data[0]?.Text)
                          :
                          null}
                </Col>
            
             
           
            </div>
          </Col>
      
            </Row>
   </Container>
   
    <Footer/>
   </div>
    );
};
export default AboutUs;