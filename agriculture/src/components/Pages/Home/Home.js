import {React ,useState,useEffect } from "react";
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
import Home2 from "src/components/assets/img/home2.png";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";

const Home = () =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl:true,

  };
  const [data,setData]=useState([])
  const [best,setBest]=useState([])
  const [newest,setNew]=useState([])

  const GetData=()=>{
    const axios = require("axios");
  

    axios.get(apiUrl + "Info")
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {

        setData(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      alert(error)

      console.log(error);
    });
    axios.get(apiUrl + "BestSellersProduct")
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {
        console.log(response.data.Data);

        setBest(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      alert(error)

      console.log(error);
    });
 
    axios.get(apiUrl + "LastProduct")
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {
        console.log(response.data.Data);

        setNew(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      alert(error)

      console.log(error);
    });
    

  }

  useEffect(() => {
    GetData();

  }, []);
    return(
   <div style={{backgroundColor:'#f4f4f4',height:'100vh'}}>
   <Header/>
  <div style={{width:'100%'}}>
  <Carousel>
  

  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
                        src={apiAsset+data[0]?.Slider1}
                        />
   <Button className="slideGreenBtn">مشاهده محصولات</Button>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
                        src={apiAsset+data[0]?.Slider2}
                        />
   <Button className="slideGreenBtn">مشاهده محصولات</Button>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
                        src={apiAsset+data[0]?.Slider3}
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
          <Slider {...settings} className="consultationSlider2">
         {
          best.map((item)=>{
            return(

          <div className="sliderCardBox2">
          <img src={Product} className="miniSliderImg"/>
          <p className="pName">{item.Name}</p>
          <div className="d-flex justify-content-between align-items-center">
         
          <p className="productPriceStroke">
                                        {item.Cost} تومان
                                    </p>
                                    <p className="productPrice">
                                        {item.SpecialCost} تومان
                                    </p>
                                                                        {/* <div className="d-flex justify-space-between">
                                    <Star color={'#000'} className="marginLeft5" size={10}/>
                                    <Star color={'#000'} className="marginLeft5" size={10}/>
                                    <StarFill color={'#ffb921'} className="marginLeft5" size={10}/>
                                    <StarFill color={'#ffb921'} className="marginLeft5" size={10}/>
                                    <StarFill color={'#ffb921'} size={10}/>
                                    
                                    </div> */}
          </div>
          <hr/>
          <p className="tamin">
          نام تامین کننده کالا : {item.WarrantyName}
            </p>
          </div>
            )
          })
         }
         
         
        </Slider>
          </div>
        </div>
        
    

      </div>  
    
  </Container>
    <Container fluid style={{backgroundColor:'#FEF5EC',padding:30}}>
      <Container>
        <Row className="align-items-center">
        <Col md={6}>
            <img src={Home2} className="home2"/>
          </Col>
          <Col md={6}>
            <p className="home2Title">
              کشاورزی هوشمند
            </p>
            <p className="home2Des">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
            </p>
            <Button className="home2View">
              بیشتر بدانیم ...
            </Button>
          </Col>
         
        </Row>
      </Container>
    </Container>
    <Container className="mt-5 mb-5">
    
    <div className="d-flex">
    
        <div className="productSlider" style={{marginRight:0,marginLeft:"2%"}}>
          <div className="d-flex mt-3">
          <p className="productSliderTitle">پر فروش ترین محصولات ما</p>
          <hr className="hrgray"/>
          </div>
          <div>
          <Slider {...settings} className="consultationSlider2">
         
         {
          newest.map((item)=>{
            return(

              <div className="sliderCardBox2">
              <img src={Product} className="miniSliderImg"/>
              <p className="pName">{item.Name}</p>
              <div className="d-flex justify-content-between align-items-center">
             
              <p className="productPriceStroke">
                                            {item.Cost} تومان
                                        </p>
                                        <p className="productPrice">
                                            {item.SpecialCost} تومان
                                        </p>
                                                                            {/* <div className="d-flex justify-space-between">
                                        <Star color={'#000'} className="marginLeft5" size={10}/>
                                        <Star color={'#000'} className="marginLeft5" size={10}/>
                                        <StarFill color={'#ffb921'} className="marginLeft5" size={10}/>
                                        <StarFill color={'#ffb921'} className="marginLeft5" size={10}/>
                                        <StarFill color={'#ffb921'} size={10}/>
                                        
                                        </div> */}
              </div>
              <hr/>
              <p className="tamin">
              نام تامین کننده کالا : {item.WarrantyName}
                </p>
              </div>
                )          })
         }
       

        </Slider>
          </div>
        </div>
        <div className="cardBack">
          <img src={Slide2} className="cardImg"/>
          <img src={Back} className="gBack"/>
          <p className="cardText">انواع دستگاه های IoT</p>
          <Button className="yellowBtn">مشاهده محصولات</Button>
        </div>
    

      </div>  
    
  </Container>
    <Footer/>
   </div>
    );
};
export default Home;