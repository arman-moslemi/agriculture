import {React ,useState ,useEffect} from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import ImageGallery from 'react-image-gallery';
import Garranty from "src/components/assets/icon/Garranty";
import File from "src/components/assets/icon/File";
import CartSingle from "src/components/assets/icon/CartSingle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";
import CustomizedDialogs from '../Layouts/AlertModal';
import { StarFill ,Star ,Heart ,TextLeft ,ChevronLeft ,Share ,ChatDots} from "react-bootstrap-icons";
import StartRate from 'src/components/Pages/Layouts/StarRate';
const SingleProduct = () =>{
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  const [property, setProperty] = useState([]);
  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
  const params = useParams().id;
  const [rate,setRate]=useState(5)
  const [com, setCom] = useState([]);
  const [text, setText] = useState([]);
    const images = [
        {
          original: apiAsset+data?.Pic1,
          thumbnail: apiAsset+data?.Pic1,
        },
        {
          original: apiAsset+data?.Pic2,
          thumbnail: apiAsset+data?.Pic2,
        },
        {
          original: apiAsset+data?.Pic3,
          thumbnail: apiAsset+data?.Pic3,
        },
        {
            original: apiAsset+data?.Pic4,
            thumbnail: apiAsset+data?.Pic4,
          }
          //   {
          //   original: "https://picsum.photos/id/1019/1000/600/",
          //   thumbnail:"https://picsum.photos/id/1019/1000/600/",
          // },
    
      ];
      const GetData=()=>{
        const axios = require("axios");
      
    
        axios.post(apiUrl + "SingleProduct",{ProductName:params})
        .then(function (response) {
          console.log(response)

          if (response.data.result == "True") {
            console.log(12548)
            console.log(response.data.Data)
            setData(response.data.Data[0])

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
        axios.post(apiUrl + "ProductProperty",{ProductName:params})
        .then(function (response) {
          console.log(response)

          if (response.data.result == "True") {
            console.log(88)
            console.log(response.data.Data)
            setProperty(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
        axios.post(apiUrl + "ProductComment",{Title:params})
        .then(function (response) {
            if (response.data.result == "True") {
          console.log(response.data.Data)

        setCom(response.data.Data)

    }})
    .catch(function (error) {
      console.log(777)
      alert(error)

      console.log(error);
    });
   
  
      }
      const AddCart=()=>{
        const axios = require("axios");

      
    var customer=localStorage.getItem("CustomerID")?localStorage.getItem("CustomerID"):0;
    var guest=localStorage.getItem("Guest")?localStorage.getItem("Guest"):0;
        axios.post(apiUrl + "ShoppingBasketAdd",{ProductID:data?.ProductID, 
            // CustomerID:customer,
            CustomerID:customer,
           GuestID:guest,
          ShoppingBasketNumber:number,
          Cost:data?.SpecialCost?data.SpecialCost:data.Cost
        })
        .then(function (response) {
          console.log(response)

          if (response.data.result == "True") {
            console.log(222)
            console.log(response.data.Data)
            localStorage.setItem("Guest",response.data.Data)
            setTitle("محصول با موفقیت به سبدخرید اضافه شد")
            setOpen(true)
        }})
        .catch(function (error) {
          console.log(777)
          alert(error)

          console.log(error);
        });
    
      
     
  
      }
      const InsertComment=()=>{
        var ss=localStorage.getItem("CustomerID")
        if(ss==null){
          setTitle("لطفاابتدا وارد شوید")
          setOpen(true)
        }
        else{

        
        const axios = require("axios");
        axios.post(apiUrl + "InsertProductComment",{CustomerID:ss,ProductID:data.ProductID,Text:text,Rate:rate})
        .then(function (response) {
          if (response.data.result == "True") {
            setTitle("پیام با موفقیت ثبت شد")
            setOpen(true)
GetData()              
            }})
            .catch(function (error) {
                console.log(777)
                alert(error)
                
                console.log(error);
            });
          ;
    }
    }
    const InsertFavorite=()=>{
      const axios = require("axios");
      var ss= localStorage.getItem("CustomerID")
      axios.post(apiUrl + "InsertFavorite",{CustomerID:ss,ProductID:data.ProductID})
      .then(function (response) {
        if (response.data.result == "True") {
            setTitle("با موفقیت ثبت شد")
            setOpen(true)
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
   <>
   <Header/>
   <Container className="singleProductContainer" fluid>
   <div className="breadCrumbs">
          <ul>
            <li onClick={()=>navigate("/")}>
خانه
            </li>
            /
            <li>
              <Link to={"/GroupProduct/"+data?.GroupTitle2}> 
 {data?.GroupTitle}       
        </Link> 
            </li>
            /
            <li>
              <Link to={"/SubGroup/"+data?.Title2}>
{data?.Title}     
         </Link>
            </li>
          </ul>
        </div>

        <div className="container singleBox1">
        <div className="row responsiveR1">
        <Col md={4} id="singleOrder1" className="gallery">
        <ImageGallery items={images} showNav={false} showFullscreenButton={true} showPlayButton={false}/>
        </Col>
        <Col md={8} id="singleOrder3">
        <div className="singleTitleBox">
        <div className="d-flex">
        <p className="singleTitle">
                    {data?.Name}
                </p>
            </div>
                <div className="d-flex">

                <p className="singleModelP">مدل:{data.BrandName}</p>
                </div>
            <div className="d-flex flex-row">
            <StarFill color="#FF6900" size="16"/> 
<p className="singleRateP">{data.RateAVG}</p>

<p className="singleTitleCatP">دسته بندی:</p>
<p className="singleCatP">{data.Title}</p>
            </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
<div>
            <p className="singleTitleProperty">
                   ویژگی های محصول:
                </p>
                {
                  Object.values(property)?.map((item,index)=>{
                  
return(
  index<5?
  <>
  
                    <p className="singlePropertyDis">
                    {item[0].MainGroupPropertyTitle} :
                    </p>

{  item.map((item2)=>{
    return(
<p className="singlePropertyDis">

{item2.SubGroupPropertyTitle}     
           </p>
    )
  })}
</>
:
null
)

                    
                  })
                }
       
      
                 
            </div>
            <div className="greyLightBox">
              <div className="d-flex boxGreyBox">
              <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

<Garranty/>
<p className="titleGrayBox">
گارانتی 12 ماهه {data?.WarrantyName}
</p>
              </div>
              <div className="d-flex boxGreyBox2">
<File/>
<p className="titleGrayBox">
موجود در انبار
</p>
              </div>
              <div className="boxGreyBox">
<p className="costTitleGrayBox">
قیمت کالا:</p>
{
  data.SpecialCost?
  <>
<p className="costGrayBoxStroke">
{data?.Cost?.toLocaleString("en-de")} تومان</p>
<p className="costGrayBox">
{data.SpecialCost?.toLocaleString("en-de")} تومان</p>
  </>
  :

<p className="costGrayBox">
{data.Cost?.toLocaleString("en-de")} تومان</p>
}
              </div>
              <div className="d-flex boxGreyBox2 justify-content-between">
              <p className="costTitleGrayBox">
تعداد:</p>
<div className="counterDiv d-flex justify-content-center">
              <button onClick={()=>number>1?setNumber(number-1):null}  className="decBTN">-</button>
              <span className="costNumber">{number}</span>
              <button onClick={()=>setNumber(number+1)}  className="inBTN">+</button>
            </div>
              </div>

              <div className="boxGreyBox">
              <Button onClick={()=>AddCart()}  className="d-flex addToCart">
                <CartSingle color="#fff"/>
                <p className="addToCartTitle">

              افزودن به سبد خرید
                </p>
              </Button>
              <Button onClick={()=>InsertFavorite()} className="addFavorite mt-1" style={{marginRight:'auto',marginLeft:'auto',display:'block'}}>
                            <Heart className="customM"size={20}/>
                            افزودن به برگزیده ها
                        </Button>
</div>
</div>
            </div>





            <div>

            </div>
            </Col>

        </div>
  
        </div>
        <div className="container singleBox1">
        <div dir="rtl">
        <Tabs dir={'rtl'}>
    <TabList className="cTabList">
      <Tab>مشخصات فنی</Tab>
      <Tab>نقد و بررسی</Tab>
      <Tab>نظرات کاربران</Tab>
    </TabList>
    <TabPanel>
      <div className="d-flex" style={{width:'100%'}}>
      {
                  Object.values(property)?.map((item,index)=>{
                  
return(
  index<5?
  <>
      <div className="propertyBox">
        <p className="propertyBoxTitle" >                    {item[0].MainGroupPropertyTitle} :
</p>
      </div>
      <div className="propertyBoxDes">
        
{  item.map((item2)=>{
    return(
        <p className="propertyDesTitle">{item2.SubGroupPropertyTitle}     </p>
        )
      })}
      </div>
     
    </>
    :
    null
    )})}
    </div>
</TabPanel>
<TabPanel>

      <div>
        <p>{data.Description}</p>
    
      </div>
</TabPanel>
<TabPanel>
{/* 
      <div>
        <p>دیدگاه ها</p>
        </div> */}
            <Col md={12}>
            <div className="whiteBox  mb-2" style={{padding:0}}>
                <div className="headBox">
                    <div>
                        <p className="headerNews">
                           دیدگاه های ثبت شده
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
                                امتیاز ثبت شده : 
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
ثبت دیدگاه                        </p>
                        {
                            com?
null
                            :

                       <p style={{fontFamily:'IRANSansBold'}}>
                        هیچ دیدگاهی برای این موضوع ثبت نشده است شما اولین نفر باشید !
                       </p>
                        }
                       <p style={{fontFamily:'IRANSans'}}>
                       نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند *
                       </p>
                       <div className="d-flex align-items-center mt-3">
                       <p style={{fontFamily:'IRANSans',marginBottom:0}}>
                        امتیاز شما : 
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
                        متن پیام شما :
                       </p>
                       <textarea onChange={(e)=>setText(e.target.value)} className="inputCLass cInput" type="text" style={{minHeight:200}}/>
                       </div>
                        <Row>
                            <Col md={12}>
                                <Button onClick={()=>InsertComment()} className="sendComment">ارسال پیام</Button>
                            </Col>
                        </Row>
                    </div>
                   
                </div>
                
               
              
            </div>
</Col>
        </TabPanel>

    </Tabs>
    </div>
</div>
<div></div>
   </Container>
   <Footer/>
   </>
    );
};
export default SingleProduct;