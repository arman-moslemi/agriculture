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
const Favorite = () =>{
    const [data, setData] = useState([]);
    const [fav, setFav] = useState([]);

    const GetData=()=>{
        const axios = require("axios");
      var ss=localStorage.getItem("CustomerID")
    
        axios.post(apiUrl + "CustomerFavorite",{CustomerID:ss})
        .then(function (response) {
          if (response.data.result == "True") {
            console.log(777)

            setFav(response.data.Data)
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
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="product" title="محصولات برگزیده">
                    <div className="d-flex mt-3 flex-wrap justify-content-center">
                        {
                            fav.filter(x=>x.ProductID!=null).map((item)=>{
                                return(

                        <Link to={"/SingleProduct/"+item.ProductName2} className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
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
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                           نام تامین کننده کالا : {item.WarrantyName}
                            </p>
                           </div>
                        </Link>
                                )
                            })
                        }
               
                    </div>
                </Tab>
                <Tab eventKey="consult" title="مشاوران برگزیده">
                {
                            fav.filter(x=>x.CustomerID2!=null).map((item)=>{
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
                    <p>hello</p>
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