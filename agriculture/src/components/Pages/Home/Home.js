import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button,Carousel,CarouselItem} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Slide1 from "src/components/assets/img/slider1.png";
import Slide2 from "src/components/assets/img/slide2.png";
import Back from "src/components/assets/img/back.png";
import Slider from "react-slick";
import Avatar from "src/components/assets/img/avatar.png";
import { StarFill ,Star ,Heart ,TextLeft ,ChevronLeft} from "react-bootstrap-icons";
import Product from "src/components/assets/img/product.png";
import Home2 from "src/components/assets/img/home2.png";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useNavigate,useParams, Link } from "react-router-dom";

import Voice from "src/components/assets/img/voice.png";
import Chat from "src/components/assets/img/chat.png";
import Consult from "src/components/assets/img/consult2.png";
import Video from "src/components/assets/img/videocall.png";
import News1 from "src/components/assets/img/news1.jpg";
import { renderIntoDocument } from "react-dom/test-utils";
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { truncate } from "src/utils/helper";
import { useTranslation } from 'react-i18next';

const Home = () =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl:true,
    
  };
  let navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const [data,setData]=useState([])
  const [best,setBest]=useState([])
  const [newest,setNew]=useState([])
  const [blog,setBlog]=useState([])
  const [cons,setCons]=useState([])
  const {t,i18n} = useTranslation();

  const GetData=async()=>{
    const axios = require("axios");
    const lang=await localStorage.getItem("lang")
    console.log(444)
    console.log(lang)
    i18n.changeLanguage(lang)

    axios.get(apiUrl + "Info")
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {

        setData(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      console.log(error)

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
      console.log(error)

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
      console.log(error)

      console.log(error);
    });
    axios.get(apiUrl + "RecentlyBlog")
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {
        console.log(response.data.Data);

        setBlog(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      console.log(error);

      console.log(error);
    });
    axios.get(apiUrl + "GetConsultant")
    .then(function (response) {
      console.log(response)
      if (response.data.result == "True") {
        console.log(response.data.Data);

        setCons(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      // console.log(error);

      console.log(error);
    });
    

  }

  useEffect(() => {
    GetData();

  }, []);
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
  <div style={{width:'100%'}}>
 
  <Carousel>
  

  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
                        src={apiAsset+data[0]?.Slider1}
                        />
   <p className="slideGreenBtn">{t("مشاهده محصولات")}</p>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
                        src={apiAsset+data[0]?.Slider2}
                        />
   <p className="slideGreenBtn">{t("مشاهده محصولات")}</p>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'100%',position:'relative'}}
                        src={apiAsset+data[0]?.Slider3}
                        />
   <p className="slideGreenBtn">{t("مشاهده محصولات")}</p>
  </Carousel.Item>
    

 
</Carousel>
  </div>
  <Container className="mt-5 mb-5 resContainer">
    
    <div className="desktopBlock">
    <div className="cardBack">
          <img src={Slide2} className="cardImg"/>
          <img src={Back} className="gBack"/>
          <p className="cardText">{t("انواع دستگاه های IoT")}</p>
          <p onClick={()=>navigate("/SmartFarming")} className="yellowBtn">{t("مشاهده محصولات")}</p>
        </div>
        <div className="productSlider">
          <div className="d-flex mt-3">
          <p className="productSliderTitle">{t("پر فروش ترین محصولات ما")}</p>
          <hr className="hrgray"/>
          </div>
          <div>
          {/* <Slider {...settings} className="consultationSlider2">
         
          {
          best.map((item)=>{
            return(

              <Link to={"/SingleProduct/"+item.Name2} className="sliderCardBox2">
              <div style={{position:'relative'}}>
           <Button className="heartmini">
              <Heart/>
            </Button>
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
          {/* </div>
          <hr/>
          <p className="tamin">
          نام تامین کننده کالا : {item.WarrantyName}
            </p>
          </div>
          </Link>
         )
          })
         }
         
         
         
        
        </Slider> */} 
      
          </div>
          <CarouselMulti responsive={responsive} rtl={true}>
  
  {
          best.map((item)=>{
            return(

              <div className="sliderCardBox2">
              <div style={{position:'relative',padding:15}}>
           {/* <Button className="heartmini">
              <Heart/>
            </Button> */}
          <img src={apiAsset+item.Pic1} className="miniSliderImg"/>
          <br/>
          <Link to={"/SingleProduct/"+item.Name2}  className="pName pLink">{item.Name}</Link>
          <div className="d-flex justify-content-between align-items-center">
         
          <p className="productPriceStroke">
                                        {item.Cost} {t("تومان")}
                                    </p>
                                    <p className="productPrice">
                                        {item.SpecialCost} {t("تومان")}
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
          {t("نام تامین کننده کالا")}: {item.WarrantyName}
            </p>
          </div>
          </div>
         )
          })
         }
         
  
  
</CarouselMulti>
        </div>
        
    

      </div>  
      <div className="responsiveBlock">
        <div className="cardBackResponsive">
        <img src={Slide2} className="cardImg"/>
        <div style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <p className="cardText">{t("انواع دستگاه های IoT")}</p>
        <br/>
          <p onClick={()=>navigate("/SmartFarming")} className="yellowBtn">{t("مشاهده محصولات")}</p>
        </div>
        </div>
    
        <div className="productSlider">
          <div className="d-flex mt-3">
          <p className="productSliderTitle">{t("جدیدترین محصولات ما")}</p>
          <hr className="hrgray"/>
          </div>
          <div>
          {/* <Slider {...settings} className="consultationSlider2">
         
          {
          best.map((item)=>{
            return(

              <Link to={"/SingleProduct/"+item.Name2} className="sliderCardBox2">
              <div style={{position:'relative'}}>
           <Button className="heartmini">
              <Heart/>
            </Button>
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
          {/* </div>
          <hr/>
          <p className="tamin">
          نام تامین کننده کالا : {item.WarrantyName}
            </p>
          </div>
          </Link>
         )
          })
         }
         
         
         
        
        </Slider> */} 
      
          </div>
          <CarouselMulti responsive={responsive} rtl={true}>
  
  {
          best.map((item)=>{
            return(

              <div className="sliderCardBox2">
              <div style={{position:'relative',padding:15}}>
           {/* <Button className="heartmini">
              <Heart/>
            </Button> */}
          <img src={apiAsset+item.Pic1} className="miniSliderImg"/>
          <br/>
          <Link to={"/SingleProduct/"+item.Name2}  className="pName pLink">{item.Name}</Link>
          <div className="d-flex justify-content-between align-items-center">
         
          <p className="productPriceStroke">
                                        {item.Cost} {t("تومان")}
                                    </p>
                                    <p className="productPrice">
                                        {item.SpecialCost} {t("تومان")}
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
          {t("نام تامین کننده کالا ")}: {item.WarrantyName}
            </p>
          </div>
          </div>
         )
          })
         }
         
  
  
</CarouselMulti>
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
              {t("کشاورزی هوشمند")}
            </p>
            <p className="home2Des">
            {t("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ")}
            </p>
            <p className="home2View">
              {t("بیشتر بدانیم ...")}
            </p>
          </Col>
         
        </Row>
      </Container>
    </Container>
    <Container className="mt-5 mb-5 resContainer">
    
    <div className="desktopBlock">
    
        <div className="productSlider" style={{marginRight:0,marginLeft:"2%"}}>
          <div className="d-flex mt-3">
          <p className="productSliderTitle">{t("پر فروش ترین محصولات ما")}</p>
          <hr className="hrgray"/>
          </div>
          <div>
          {/* <Slider {...settings} className="consultationSlider2">
         
          {
          newest.map((item)=>{
            return(

          <Link to={"/SingleProduct/"+item.Name2} className="sliderCardBox2">
          <div style={{position:'relative'}}>
           <Button className="heartmini">
              <Heart/>
            </Button>
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
          {/* </div>
          <hr/>
          <p className="tamin">
          نام تامین کننده کالا : {item.WarrantyName}
            </p>
          </div>
          </Link>
         )
          })
         }
         
         
        </Slider> */} 
            <CarouselMulti responsive={responsive} rtl={true}>
  
  {
          newest.map((item)=>{
            return(

              <div className="sliderCardBox2">
              <div style={{position:'relative',padding:15}}>
           {/* <Button className="heartmini">
              <Heart/>
            </Button> */}
          <img src={apiAsset+item.Pic1} className="miniSliderImg"/>
          <br/>
          <Link to={"/SingleProduct/"+item.Name2}  className="pName pLink">{item.Name}</Link>
          <div className="d-flex justify-content-between align-items-center">
         
          <p className="productPriceStroke">
                                        {item.Cost} {t("تومان")}
                                    </p>
                                    <p className="productPrice">
                                        {item.SpecialCost} {t("تومان")}
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
          {t("نام تامین کننده کالا ")}: {item.WarrantyName}
            </p>
          </div>
          </div>
         )
          })
         }
         
  
  
</CarouselMulti>
          </div>
        </div>
        <div className="cardBack">
          <img src={Slide2} className="cardImg"/>
          <img src={Back} className="gBack"/>
          <p className="cardText">{t("انواع دستگاه های IoT")}</p>
          <p onClick={()=>navigate("/SmartFarming")} className="yellowBtn">{t("مشاهده محصولات")}</p>
        </div>
    

      </div>  
      <div className="responsiveBlock">
    
    <div className="productSlider" style={{marginRight:0,marginLeft:"2%"}}>
      <div className="d-flex mt-3">
      <p className="productSliderTitle">{t("پر فروش ترین محصولات ما")}</p>
      <hr className="hrgray"/>
      </div>
      <div>
      {/* <Slider {...settings} className="consultationSlider2">
     
      {
      newest.map((item)=>{
        return(

      <Link to={"/SingleProduct/"+item.Name2} className="sliderCardBox2">
      <div style={{position:'relative'}}>
       <Button className="heartmini">
          <Heart/>
        </Button>
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
      {/* </div>
      <hr/>
      <p className="tamin">
      نام تامین کننده کالا : {item.WarrantyName}
        </p>
      </div>
      </Link>
     )
      })
     }
     
     
    </Slider> */} 
        <CarouselMulti responsive={responsive} rtl={true}>

{
      newest.map((item)=>{
        return(

          <div className="sliderCardBox2">
          <div style={{position:'relative',padding:15}}>
       {/* <Button className="heartmini">
          <Heart/>
        </Button> */}
      <img src={Product} className="miniSliderImg"/>
      <br/>
      <Link to={"/SingleProduct/"+item.Name2}  className="pName pLink">{item.Name}</Link>
      <div className="d-flex justify-content-between align-items-center">
     
      <p className="productPriceStroke">
                                    {item.Cost} {t("تومان")}
                                </p>
                                <p className="productPrice">
                                    {item.SpecialCost} {t("تومان")}
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
      {t("نام تامین کننده کالا ")}: {item.WarrantyName}
        </p>
      </div>
      </div>
     )
      })
     }
     


</CarouselMulti>
      </div>
    </div>
    <div className="cardBackResponsive">
        <img src={Slide2} className="cardImg"/>
        <div style={{display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <p className="cardText">{t("انواع دستگاه های IoT")}</p>
        <br/>
          <p onClick={()=>navigate("/SmartFarming")} className="yellowBtn">{t("مشاهده محصولات")}</p>
        </div>
        </div>


  </div>  
  </Container>
  <Container fluid style={{backgroundColor: '#A8B57D4A',padding:30}}>
      <Container>
        <Row className="align-items-center">
        <Col md={6} className="col1" xs={{order:2}}>
        <p className="home2Title">
              {t ("ارائه ی انواع مشاوره در حوزه کشاورزی")}
            </p>
            <p className="home2Des">
            {t("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ")}
            </p>
            <div className="d-flex align-items-center mb-3">
              <img src={Video} className="videoIcon"/>
              <p className="home3Des">
                {t("مشاوره تصویری")}
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={Voice} className="videoIcon"/>
              <p className="home3Des">
               {t("مشاوره صوتی")}
              </p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <img src={Chat} className="videoIcon"/>
              <p className="home3Des">
                {t("مشاوره متنی")} 
              </p>
            </div>
            <p onClick={()=>navigate("/Consultation")} className="home2View">
            {t("دریافت مشاوره")}
            </p>
          </Col>
          <Col md={6} className="col2" xs={{order:1}}>
          <img src={Consult} className="home3"/>
          </Col>
         
        </Row>
      </Container>
    </Container>
    <Container fluid className="containerWhite">
   <Container>
   <div>
        <h2 className="sliderTitle">{t("برترین مشاوران ما")}</h2>
        <CarouselMulti responsive={responsive} rtl={true}>
        {
            cons?.map((item)=>{
              return(
          <div className="sliderCardBox">
            <img 
            src={Avatar} 
            className="sliderImg"/>
            <p className="sliderName">{item.Name} {item.Family}</p>
            <p className="sliderDegree">{item.Speciality}</p>
            <p className="sliderDescription">
{item.Description}                   
            </p>
          </div>

              )
            })
          }
     
     </CarouselMulti>
      </div>
   </Container>
   </Container>
   <Container fluid style={{backgroundColor:'#FEF5EC',padding:30}}>
   <Container>
   <div className="d-flex justify-content-between mb-2">
     <p className="boxTitle">
      {t("اخبار و مقالات")} 
     </p>
     <Link className="seeALL" to={"/News"}>
      مشاهده همه
     </Link>
    </div>
    <Row>
    <Col md={4}>
      <div className="miniNewsBox w100">
                    <img 
                        src={apiAsset+blog[0]?.Pic}
                        />
                 <div className="newsB">
                 <p className="newsDate">
                 {blog[0]?.Date}   
                </p>
                <p className="newsTitle">
                {blog[0]?.Title}                
                                </p> 
                <p className="newsDes">
                {truncate( blog[0]?.Text,30)}
                                 </p>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  
                    <div>
                    <Link to={"/SingleNews/"+blog[0]?.Title} className="textDetail">
                           {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                </div>
      </Col>
        
      <Col md={4}>
      <div className="miniNewsBox w100 mb-1">
      {
            blog[1]?      
                 <div className="newsB">
                 <p className="newsDate">
                 {blog[1]?.Date}   
                </p>
                <p className="newsTitle">
                {blog[1]?.Title}                
                </p> 
                <p className="newsDes">
                {truncate( blog[1]?.Text,30)}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  
                    <div>
                    <Link to={"/SingleNews/"+blog[1]?.Title} className="textDetail">
                           {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                 :
                 null}
                </div>
                <div className="miniNewsBox w100">
                {
            blog[2]?
                <div className="newsB">
                 <p className="newsDate">
                 {blog[2]?.Date}   
                </p>
                <p className="newsTitle">
                {blog[2]?.Title}                
                </p> 
                <p className="newsDes">
                {truncate( blog[2]?.Text,30)}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  
                    <div>
                    <Link to={"/SingleNews/"+blog[2]?.Title} className="textDetail">
                           {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                 :null
                }
                 </div>
      </Col>
      <Col md={4}>
      <div className="miniNewsBox w100 mb-1">
          {
            blog[3]?

      <div className="newsB">
                 <p className="newsDate">
                 {blog[3]?.Date}   
                </p>
                <p className="newsTitle">
                {blog[3]?.Title}                
                </p> 
                <p className="newsDes">
                {truncate( blog[3]?.Text,30)}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  
                    <div>
                    <Link to={"/SingleNews/"+blog[3]?.Title} className="textDetail">
                          {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
            :
null
          }        
                </div>
                <div className="miniNewsBox w100">
                {
            blog[4]?
                <div className="newsB">
                 <p className="newsDate">
                 {data[4]?.Date}   
                </p>
                <p className="newsTitle">
                {blog[4]?.Title}                
                </p> 
                <p className="newsDes">
                {truncate( blog[4]?.Text,30)}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-4">
                  
                    <div>
                    <Link to={"/SingleNews/"+blog[4]?.Title} className="textDetail">
                          {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                 :
                 null}
                 </div>
      </Col>
    </Row>
   </Container>
   </Container>
    <Footer/>
   </div>
    );
};
export default Home;