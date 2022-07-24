import {React ,useState } from "react";
import { Container, Row ,Col ,Button,Carousel,CarouselItem} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Slide1 from "src/components/assets/img/slider1.png";
import Slide2 from "src/components/assets/img/slide2.png";
import Back from "src/components/assets/img/back.png";
import Slider from "react-slick";
import Avatar from "src/components/assets/img/avatar.png";
import { StarFill ,Star ,Heart ,TextLeft } from "react-bootstrap-icons";
import Product from "src/components/assets/img/product.png";
const Home = () =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl:true,

  };
    
    return(
   <div style={{backgroundColor:'#f4f4f4',height:'100vh'}}>
   <Header/>
  <div style={{width:'100%'}}>
  <Carousel>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
    src={Slide1}
    />
   <Button className="slideGreenBtn">مشاهده محصولات</Button>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
    src={Slide1}
    />
   <Button className="slideGreenBtn">مشاهده محصولات</Button>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
    src={Slide1}
    />
   <Button className="slideGreenBtn">مشاهده محصولات</Button>
  </Carousel.Item>
 
</Carousel>
  </div>
  <Container className="mt-5 mb-5">
    
    <div className="d-flex">
    <div className="cardBack">
          <img src={Slide2} className="cardImg"/>
          <img src={Back} className="gBack"/>
          <p className="cardText">انواع دستگاه های IoT</p>
          <Button className="yellowBtn">مشاهده محصولات</Button>
        </div>
        <div className="productSlider">
          <div className="d-flex mt-3">
          <p className="productSliderTitle">پر فروش ترین محصولات ما</p>
          <hr className="hrgray"/>
          </div>
          <div>
          <Slider {...settings} className="consultationSlider">
         
         
          <div className="sliderCardBox2">
          
          </div>
          <div className="sliderCardBox2">
       
          </div>
          <div className="sliderCardBox2">
           
          </div>
          <div className="sliderCardBox2">
        
          </div>
          <div className="sliderCardBox2">
           
          </div>
        </Slider>
          </div>
        </div>
        
    

      </div>  
    
  </Container>

    <Footer/>
   </div>
    );
};
export default Home;