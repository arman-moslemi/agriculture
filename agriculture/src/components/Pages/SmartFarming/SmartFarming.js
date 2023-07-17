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
import { useTranslation } from 'react-i18next';

const SmartFarming = () =>{
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
  const [newest,setNew]=useState([])

  const {t,i18n} = useTranslation();
  const GetData=async()=>{
    const lang=await localStorage.getItem("lang")
    const rate=await localStorage.getItem("rate")

    const axios = require("axios");
    axios.get(apiUrl + "LastIOTProduct",{  headers: {
      lang: i18n.language,
      rate:rate
    }})
    .then(function (response) {
      if (response.data.result == "True") {
          setNew( Object.values(response.data.Data))
          
        }})
        .catch(function (error) {
            console.log(777)
            console.log(error);
            
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
              <Row style={{alignItems:'center'}}>
                <Col md={5}>
                <img src={Home2} className="home2"/>
                </Col>
                <Col md={7}>
                <p className="home2Title">
                {t("کشاورزی هوشمند")}
            </p>
            <p className="home2Des" style={{width:'85%',fontFamily:'IRANSans',lineHeight:2,textAlign:'justify'}}>
            {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.      */}
            </p>
                       </Col>
             
              </Row>
            </div>
          </Col>
          <Col md={12}>
          <div className="smartBox" style={{marginTop:20}}>
          <p className="home2Title" style={{fontSize:20}}>
          {t("محصولات کشاورزی هوشمند")}
            </p>
            <div>
    
        <CarouselMulti responsive={responsive} rtl={true}>

{
      newest?.map((item)=>{
        return(

          <div className="sliderCardBox2">
          <div style={{position:'relative',padding:15}}>
       {/* <Button className="heartmini">
          <Heart/>
        </Button> */}
      <img  src={apiAsset+item[0].Pic1} className="miniSliderImg"/>
      <br/>
      <Link to={"/SingleProduct/"+item[0].Name2}  className="pName pLink">{item[0].Name}</Link>
      <div className="d-flex justify-content-between align-items-center">
     
      <p className="productPriceStroke">
                                    {item[0].Cost} {t("تومان")}
                                </p>
                                <p className="productPrice">
                                    {item[0].SpecialCost} {t("تومان")}
                                </p>
                      
      </div>
      <hr/>
      <p className="tamin">
      {t("نام تامین کننده کالا")} : {item[0].WarrantyName}
        </p>
      </div>
      </div>
     )
      })
     }
     


</CarouselMulti>
      </div>
            </div>
          </Col>
            </Row>
   </Container>
   
    <Footer/>
   </div>
    );
};
export default SmartFarming;