import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Slide1 from "src/components/assets/img/slider1.png";
import Slider from "react-slick";
const Home = () =>{

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return(
   <div style={{backgroundColor:'#f4f4f4',height:'100vh'}}>
   <Header/>
  {/* <div style={{width:'100%'}}>
  <Slider {...settings} className="homeSlider" style={{width:'100%'}}>
          <div>
          <img src={Slide1} style={{width:'100%'}}/>
          </div>
          <div>
          <img src={Slide1} style={{width:'100%'}}/>
          </div>
          <div>
          <img src={Slide1} style={{width:'100%'}}/>
          </div>
          <div>
          <img src={Slide1} style={{width:'100%'}}/>
          </div>
       
        </Slider>
  </div> */}

    <Footer/>
   </div>
    );
};
export default Home;