import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import PaginationCustom from "src/components/Pages/Layouts/Pagination";
import News1 from "src/components/assets/img/news1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";
import CustomizedDialogs from '../Layouts/AlertModal';
import parse  from 'html-react-parser';
import { StarFill ,Star ,Heart ,TextLeft ,ChevronLeft ,Share ,ChatDots} from "react-bootstrap-icons";
import StartRate from 'src/components/Pages/Layouts/StarRate';
import { useTranslation } from 'react-i18next';

const SingleNews = () =>{
    
    const params = useParams().id;
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    const [rate,setRate]=useState(5)
    const [com, setCom] = useState([]);
    const [text, setText] = useState([]);
    const {t,i18n} = useTranslation();

    const GetData=()=>{
        const axios = require("axios");
        axios.post(apiUrl + "SingleBlog",{Title:params})
        .then(function (response) {
          if (response.data.result == "True") {
              setData(response.data.Data)
              console.log(response.data.Data)
            }})
            .catch(function (error) {
                console.log(777)
                console.log(error);
                
                console.log(error);
            });
            axios.post(apiUrl + "SingleBlogComment",{Title:params})
            .then(function (response) {
                if (response.data.result == "True") {
              console.log(response.data.Data)

            setCom(response.data.Data)

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
        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);
          console.log(error);
        });
        
        
  
      }
      const InsertFavorite=async ()=>{
        const axios = require("axios");
        var ss=await localStorage.getItem("CustomerID")
        axios.post(apiUrl + "InsertFavorite",{CustomerID:ss,BlogID:data[0].BlogID})
        .then(function (response) {
          if (response.data.result == "True") {
              alert( t("با موفقیت ثبت شد"))
            }})
            .catch(function (error) {
                console.log(777)
                console.log(error);
                
                console.log(error);
            });
      
      
        
      
      }
      const InsertComment=()=>{
        var ss=localStorage.getItem("CustomerID")
        if(ss==null){
alert( t("لطفاابتدا وارد شوید"))
        }
        else{

        
        const axios = require("axios");
        axios.post(apiUrl + "InsertBlogComment",{CustomerID:ss,BlogID:data[0].BlogID,Text:text,Rate:rate})
        .then(function (response) {
          if (response.data.result == "True") {
            alert( t("پیام با موفقیت ثبت شد"))
GetData()              
            }})
            .catch(function (error) {
                console.log(777)
                console.log(error);
                
                console.log(error);
            });
          ;
    }
    }
      useEffect(() => {
        GetData();

      }, []);
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

                <li>
                    <a href="#">
{item?.Name}                    </a>
                </li>
                        )
                    })
                }
            </ul>
                </div>
            </Col>
            <Col md={9}>
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox">
                    <div>
                        <p className="headerNews">
{data[0]?.Title}                        </p>
                        <p className="headerDate">
                        {t("تاریخ انتشار")} : {data[0]?.Date}
                        </p>
                    </div>
                    <div>
                 
                        <Button onClick={() =>      {
                    navigator.clipboard
                    .writeText( 'https://gsmartnet.com//SingleNews/'+data[0]?.Title?.replace(/%20/g, " "))
                    .then(() => {
                      alert("successfully copied");
                    })
                    .catch(() => {
                      alert("something went wrong");
                    });
                }} className="newsBtn">
                            <Share className="newsBtnIcon" size={20}/>
                        </Button>
                        <Button onClick={()=>InsertFavorite()} className="newsBtn">
                            <Heart className="newsBtnIcon" size={20}/>
                        </Button>
                    
                   
                    </div>
                </div>
                <div className="newsTextBox">
                    <p>
                    {   data[0]?.Text?
                          parse (data[0]?.Text)
                          :
                          null}
                    </p>
                </div>
             
            </div>
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox">
                    <div>
                        <p className="headerNews">
                        {t("دیدگاه های ثبت شده")}
                        </p>
                       
                    </div>
                   
                </div>
                {
                    com?.map((item)=>{
                        return(

                <div className="commentBox">
                    <div className="d-flex justify-content-between">
                        <p className="userNameCommnet">
{item.Name} {item.Family}                        </p>
                        <div className="d-flex align-items-center" >
                            <p className="writerScore">
                            {t("امتیاز ثبت شده")} : 
                            </p>
                            <div className="d-flex align-items-center">
                            {
                      [...new Array(5)].map((item2,index)=>{
                        return(
index+1>item.Rate?

<Star color="#000" className="marginLeft5"/>
:
<StarFill color="#ffb921" className="marginLeft5"/>


                        )
                      })
                    }
                                </div>
                        </div>
                       
                    </div>
                    <p className="writerScore mt-4">
{item.TextComment}                            </p>
                </div>
                        )
                    })
                }
           
            </div>
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox" style={{border:0}}>
                    <div style={{width:'100%'}}>
                        <p className="headerNews">
                        {t("ثبت دیدگاه")}                        </p>
                        {
                            com?
null
                            :

                       <p style={{fontFamily:'IRANSansBold'}}>
                        هیچ دیدگاهی برای این موضوع ثبت نشده است شما اولین نفر باشید !
                       </p>
                        }
                       {/* <p style={{fontFamily:'IRANSans'}}>
                       نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *
                       </p> */}
                       <div className="d-flex align-items-center mt-3">
                       <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                       {t("امتیاز شما")} : 
                       </p>
                       <div className="d-flex align-items-center" style={{marginRight:25}}>
                       <StartRate  setRate={setRate} />

                        </div>
                        
                       </div>
                       <Row className="mt-3">
                        {/* <Col md={6} className="d-flex align-items-center">
                        <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        نام و نام خانوادگی شما : 
                       </p>
                       <input className="inputCLass cInput" type="text"/>
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                        <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        ایمیل شما : 
                       </p>
                       <input className="inputCLass cInput" type="text"/>
                        </Col> */}
                       </Row>
                       <div className="d-flex mt-3 align-items-start">
                       <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                       {t("متن پیام شما")} :
                       </p>
                       <textarea onChange={(e)=>setText(e.target.value)} className="inputCLass cInput" type="text"/>
                       </div>
                        <Row>
                            <Col md={12}>
                                <Button onClick={()=>InsertComment()} className="sendComment"> {t("ارسال پیام")}</Button>
                            </Col>
                        </Row>
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
export default SingleNews;