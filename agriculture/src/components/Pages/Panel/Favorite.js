import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form,Tab,Tabs} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatr from "src/components/assets/img/avatar.png";
import RightPanelMenu from "src/components/Pages/Layouts/RightPanelMenu";
import Product from "src/components/assets/img/product.png";
import { StarFill ,Star} from 'react-bootstrap-icons';
import CustomizedDialogs from '../Layouts/AlertModal';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation } from "react-router-dom";
import { truncate } from "src/utils/helper";
import { ChevronLeft,Heart} from "react-bootstrap-icons";


const Favorite = () =>{
    const [data, setData] = useState([]);
    const [favPro, setFavPro] = useState([]);
    const [favCustomer, setFavCustomer] = useState([]);
    const [favBlog, setFavBlog] = useState([]);
    const [key, setKey] = useState('product');
    const GetData=()=>{
        const axios = require("axios");
      var ss=localStorage.getItem("CustomerID")
    
        axios.post(apiUrl + "CustomerFavorite",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(999)

            setFavPro(response.data.ProductData)
            setFavCustomer(response.data.CusromerData)
            setFavBlog(response.data.BlogData)
            console.log(response.data.Data);

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
        axios.post(apiUrl + "ReadCustomer",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)

            setData(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
     
      }
      const DeleteFavorite=async(mm)=>{
        var ss=await localStorage.getItem("CustomerID")
      
  
        
        const axios = require("axios");
        axios.post(apiUrl + "DeleteFavorite",{FavoriteID:mm})
        .then(function (response) {
          if (response.data.result == "True") {
            alert("با موفقیت حذف شد")
  GetData()              
            }})
            .catch(function (error) {
                console.log(777)
                alert(error)
                
                console.log(error);
            });
          ;
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
       <RightPanelMenu data={data}/>
        </Col>
        <Col md={9}>
        
        <div className="whiteBox">
               
              <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3"  activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="product" title="محصولات برگزیده">
                    <div className="d-flex mt-3 flex-wrap justify-content-center">
                        {
                            favProduct.filter(x=>x.ProductID!=null).map((item)=>{
                                return(

                        <div to={"/SingleProduct/"+item.ProductName2} className="productCard">
                             <Button onClick={()=>DeleteFavorite(item.FavoriteID)} className="heartmini">
              <Heart/>
              حذف از برگزیده ها
            </Button>
                           <Link  to={"/SingleProduct/"+item.ProductName2} style={{padding:20,paddingBottom:5}}>
                           <img 
                           src={Product}
                            className="productImg"/>
                            <p className="productName">
                            {item.ProductName}  
                                                        </p>
                            <p className="productVolume">
                            موجودی : {item.Number} {item.Unit}
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                {/* <div className="d-flex align-items-center">
                                {
                      [...new Array(5)].map((item2,index)=>{
                        return(
index+1>item.Rate?
<StarFill color="#ffb921" className="marginLeft5"/>

:
                          <Star color="#000" className="marginLeft5"/>


                        )
                      })
                    }
                                </div> */}
                                <div>
                                <p className="productPriceStroke">
                                        {item.Cost} تومان
                                    </p>
                                    <p className="productPrice">
                                        {item.SpecialCost} تومان
                                    </p>
                                </div>
                            </div>
                           </Link>
                           <div className="box2Div">
                           <p className="productVolume">
                           نام تامین کننده کالا : {item.WarrantyName}
                            </p>
                           </div>
                        </div>
                                )
                            })
                        }
               
                    </div>
                </Tab>
                <Tab eventKey="consult" title="مشاوران برگزیده">
                {
                            favCustomer.filter(x=>x.CustomerID2!=null).map((item)=>{
                                return(
                   <div className="consultBoxF">
                    <div className="d-flex align-items-center">
                        <img src={Avatr} className="consultAvatar"/>
                        <p className="productName " style={{fontFamily:'IRANSansMedium'}}>
{item.Name}{item.Family}                            </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                    <div style={{marginLeft:20}}>
                                    <p className="productPrice">
                                      امتیاز مشاور
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                             
                            </div>
                   </div>
                                )})}
                </Tab>
                <Tab eventKey="news" title="اخبار برگزیده">
                <div className="d-flex mt-3 flex-wrap justify-content-between">

                  {
                        
                          favBlog.filter(x=>x.BlogID!=null).map((item)=>{
                              return(
                                <Col md={4}>
                                <div 
                                
                                className="miniNewsBox w90"
                                
                                >
                                              <img 
                                                  src={apiAsset+item?.Pic}
                                                  />
                                           <div className="newsB">
                                           <p className="newsDate">
                                           {item?.Date}   
                                          </p>
                                          <p className="newsTitle">
                                          {item?.Title}                
                                                          </p> 
                                          <p className="newsDes">
                                          {truncate( item?.Text,30)}
                                                           </p>
                                          <div className="d-flex align-items-center justify-content-between mt-4">
                                            
                                              <div>
                                              <Link to={"/SingleNews/"+item?.Title} className="textDetail">
                                                     ادامه مطلب <ChevronLeft/>
                                                  </Link>
                                              </div>
                                          </div>
                                           </div>
                                          </div>
                                </Col>
                              )})
                  }
                  </div>
         
      
                      </Tab>
            </Tabs>
              </div>
       
                  </div> 
                  
        </Col>
        
        
        
        </Row>
        </Container>
    <Footer/>
   </div>
    );
};
export default Favorite;