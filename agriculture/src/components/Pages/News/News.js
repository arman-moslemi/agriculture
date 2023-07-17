import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import { StarFill ,Star ,Heart ,TextLeft ,ChevronLeft ,Share ,ChatDots} from "react-bootstrap-icons";
import PaginationCustom from "src/components/Pages/Layouts/Pagination";
import News1 from "src/components/assets/img/news1.jpg";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const News = () =>{
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [type, setType] = useState([]);
    const [cat,setCat]=useState(0)
    const {t,i18n} = useTranslation();


    const GetData=async()=>{
        const axios = require("axios");
        const lang=await localStorage.getItem("lang")

        axios.get(apiUrl + "AllBlog",{  headers: {
            lang: lang,
          }})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(response.data.Data);

            setData2(response.data.Data)
if(cat!=0){
    setData(response.data.Data.filter(x=>x.BlogTypeID==cat))

}
else{
    setData(response.data.Data)

}
        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        axios.get(apiUrl + "AllBlogType",{  headers: {
            lang: i18n.language,
          }})
        .then(function (response) {
          if (response.data.result == "True") {
            setType(response.data.Data)
            console.log(response.data.Data);

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);
          console.log(error);
        });
        
        
  
      }

      useEffect(() => {
        GetData();

      }, [cat]);
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
            <Col md={3}>
            <div className="whiteBox  mb-2" style={{padding:0}}>
            <div className="d-flex sortNews">
            <TextLeft color="#ffb921" size={30}/>
            <span className="sortText">
            {t("دسته بندی مطالب")}
            </span>
            </div>
            <ul className="newsCategory">
                {
                    type.map((item)=>{
                        return(

                <li style={{cursor:'pointer'}} onClick={()=>setCat(item.BlogTypeID)}>
                    {/* <Link > */}
 {item?.Name}                    {/*</Link> */}
                </li>
                        )
                    })
                }
            
            </ul>
                </div>
            </Col>
            <Col md={9}>
            <div className="whiteBox mb-2 borderBottomGray" style={{padding:20}}>
            <span className="whiteBoxTitle">
            {t("اخبار و مقالات")}
                    </span>
            <div className="bigNewsBox">
                
                <div className="bigNewsCol bigPad">
                <p className="newsDate">
{data[0]?.Date}   
             </p>
                <p className="newsTitle">
                {data[0]?.Title}                </p>
                <p className="newsDesc">
{data[0]?.Text}                </p>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    {/* <div className="d-flex">
                        <Button className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <ChatDots className="newsBtnIcon" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                    <Link to={"/SingleNews/"+data[0]?.Title} className="textDetail">
                    {t("ادامه مطلب")} <ChevronLeft/>
                        </Link>
                    </div>
                </div>
                </div>
                <div className="bigNewsCol">
                <img 
                        src={apiAsset+data[0]?.Pic}
                        className="bigNewsImg"/>   
               
                </div>

            </div>
            <div className="d-flex align-items-center mt-3 justify-content-center flex-wrap">
                <div className="miniNewsBox">
                    <img 
                        src={apiAsset+data[1]?.Pic}
                        />
                 <div className="newsB">
                 <p className="newsDate">
                 {data[1]?.Date}   
                </p>
                <p className="newsTitle">
                {data[1]?.Title}   
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    {/* <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                    <Link to={"/SingleNews/"+data[1]?.Title} className="textDetail">
                    {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                </div>
                <div className="miniNewsBox">
                    <img 
                        src={apiAsset+data[2]?.Pic}
                        />
                 <div className="newsB">
                 <p className="newsDate">
                 {data[2]?.Date}   
                </p>
                <p className="newsTitle">
                {data[2]?.Title}   
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    {/* <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                    <Link to={"/SingleNews/"+data[2]?.Title} className="textDetail">
                    {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                </div>
                {
                    data[3]?

                <div className="miniNewsBox">
                    <img 
                        src={apiAsset+data[3]?.Pic}
                        />
                 <div className="newsB">
                 <p className="newsDate">
                 {data[3]?.Date}   
                </p>
                <p className="newsTitle">
                {data[3]?.Title}   
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    {/* <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                    <Link to={"/SingleNews/"+data[3]?.Title} className="textDetail">
                    {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                </div>
                    :
                    null
                }
            </div>
            {data[4]?

            <div className="d-flex align-items-stretch mt-3 justify-content-center flex-wrap">
                <div className="mediumNewsBox">
                <div className="bigNewsCol bigPad">
                <p className="newsDate">
                {data[4]?.Date}   
                </p>
                <p className="newsTitle">
                {data[4]?.Title}   
                </p>
                <p className="newsDesc">
                {data[4]?.Text}   
                </p>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    {/* <div className="d-flex">
                        <Button className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <ChatDots className="newsBtnIcon" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                        <Link to={"/SingleNews/"+data[4]?.Title} className="textDetail">
                           ادامه مطلب <ChevronLeft/>
                        </Link>
                    </div>
                </div>
                </div>
                 <div style={{width:'50%'}} className="r5">
                 <img 
                        src={apiAsset+data[4]?.Pic}
                        style={{borderTopLeftRadius:5,borderBottomLeftRadius:5}}/>
                 </div>
                </div>
                <div className="miniNewsBox">
                    <img 
                        src={apiAsset+data[5]?.Pic}
                        />
                 <div className="newsB">
                 <p className="newsDate">
                 {data[5]?.Date}   
                </p>
                <p className="newsTitle">
                {data[5]?.Title}   
                </p> 
                <div className="d-flex align-items-center justify-content-between mt-4">
                    {/* <div className="d-flex">
                        <Button className="newsBtn2">
                            <Share className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <Heart className="newsBtnIcon2" size={20}/>
                        </Button>
                        <Button className="newsBtn2">
                            <ChatDots className="newsBtnIcon2" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                    <Link to={"/SingleNews/"+data[5]?.Title} className="textDetail">
                           ادامه مطلب <ChevronLeft/>
                        </Link>
                    </div>
                </div>
                 </div>
                </div>
            </div>
:
null
                }
            {
                data[6]?.length>0?

            <div className="bigNewsBox">
                <div className="bigNewsCol bigPad">
                <p className="newsDate">
                {data[6]?.Date}   
                </p>
                <p className="newsTitle">
                {data[6]?.Title}   
                </p>
                <p className="newsDesc">
                {data[6]?.Text}   
                </p>
                <div className="d-flex align-items-center justify-content-between mt-5">
                    {/* <div className="d-flex">
                        <Button className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button className="newsBtn">
                            <ChatDots className="newsBtnIcon" size={20}/>
                        </Button>
                    </div> */}
                    <div>
                    <Link to={"/SingleNews/"+data[6]?.Title} className="textDetail">
                    {t("ادامه مطلب")}<ChevronLeft/>
                        </Link>
                    </div>
                </div>
                </div>
                <div className="bigNewsCol">
                <img 
                        src={apiAsset+data[6]?.Pic}
                        className="bigNewsImg"/>   
               
                </div>

            </div>
                :
                null
            }
            <div className="d-flex justify-content-center mt-5">
                        <PaginationCustom/>
                        </div>
            </div>
           
            </Col>
            </Row>
   </Container>
  
    <Footer/>
   </div>
    );
};
export default News;