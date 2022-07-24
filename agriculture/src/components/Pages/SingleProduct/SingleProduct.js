import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import ImageGallery from 'react-image-gallery';
import { StarFill ,Heart} from 'react-bootstrap-icons';
import Garranty from "src/components/assets/icon/Garranty";
import File from "src/components/assets/icon/File";
import CartSingle from "src/components/assets/icon/CartSingle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const SingleProduct = () =>{
    const images = [
        // {
        //   original: apiAsset+product.Pic1,
        //   thumbnail: apiAsset+product.Pic1,
        // },
        // {
        //   original: apiAsset+product.Pic2,
        //   thumbnail: apiAsset+product.Pic2,
        // },
        // {
        //   original: apiAsset+product.Pic3,
        //   thumbnail: apiAsset+product.Pic3,
        // },
        // {
        //     original: apiAsset+product.Pic4,
        //     thumbnail: apiAsset+product.Pic4,
        //   }
            {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail:"https://picsum.photos/id/1019/1000/600/",
          },
            {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail:"https://picsum.photos/id/1019/1000/600/",
          },
            {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail:"https://picsum.photos/id/1019/1000/600/",
          }
      ];
      
    return(
   <>
   <Header/>
   <Container className="singleProductContainer" fluid>
   <div className="breadCrumbs">
          <ul>
            <li>
خانه
            </li>
            /
            <li>
              {/* <Link onClick={()=>history.push("/EachCategory/"+product.MainGroupID)}> */}
{/* {product.MainTitle}        */}
تجهیزات و ماشین آلات صنعتی
       {/* </Link> */}
            </li>
            /
            <li>
              {/* <Link onClick={()=>history.push("/products/"+product.GroupID)}> */}
{/* {product.GroupName}      */}
تراکتور دو چرخ
         {/* </Link> */}
            </li>
          </ul>
        </div>

        <div className="singleBox1">
        <div className="row">
        <Col md={4} id="singleOrder1" className="gallery">
        <ImageGallery items={images} showNav={false} showFullscreenButton={true} showPlayButton={false}/>
        </Col>
        <Col md={8} id="singleOrder3">
        <div className="singleTitleBox">
        <div className="d-flex">
        <p className="singleTitle">
                    تراکتور دو چرخ دیزلی 7اسب کاما BCS740
                </p>
            </div>
                <div className="d-flex">

                <p className="singleModelP">مدل:Bcs740 WalkingTractor</p>
                </div>
            <div className="d-flex flex-row">
            <StarFill color="#FF6900" size="16"/> 
<p className="singleRateP">3.2</p>

<p className="singleTitleCatP">دسته بندی:</p>
<p className="singleCatP">تراکتور دو چرخ</p>
            </div>
            </div>
            <div className="d-flex justify-content-between">
<div>
            <p className="singleTitleProperty">
                   ویژگی های محصول:
                </p>
                <p className="singlePropertyDis">
                امکانات : قفل دیفرانسیل و نصب ادوات جلو و پشت سوار شونده
                </p>
                <p className="singlePropertyDis">

                موتور : دیزلی 7 اسب ( هندلی / استارتی )
                </p>

                <p className="singlePropertyDis">
فرمان : متحرک ( چرخش 180 درجه )
                </p>

<p className="singlePropertyDis">

گیربکس : 8 دنده ( 4 دنده جلو ، 4 دنده عقب )
</p>

            </div>
            <div className="greyLightBox">
              <div className="d-flex boxGreyBox">
<Garranty/>
<p className="titleGrayBox">
گارانتی 12 ماهه برگ سبز
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
<p className="costGrayBox">
{"125.000.000".toLocaleString("en-de")} تومان</p>
              </div>
              <div className="d-flex boxGreyBox2 justify-content-between">
              <p className="costTitleGrayBox">
تعداد:</p>
<div className="counterDiv d-flex justify-content-center">
              <button  className="decBTN">-</button>
              <span className="costNumber">1</span>
              <button  className="inBTN">+</button>
            </div>
              </div>

              <div className="boxGreyBox">
              <Button  className="d-flex addToCart mb-1">
                <CartSingle color="#fff"/>
                <p className="addToCartTitle">

              افزودن به سبد خرید
                </p>
              </Button>
              <Button className="addFavorite mt-1" style={{marginRight:'auto',marginLeft:'auto',display:'block'}}>
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
        <div className="singleBox1">
        <div dir="rtl">
        <Tabs dir={'rtl'}>
    <TabList className="cTabList">
      <Tab>مشخصات فنی</Tab>
      <Tab>نقد و بررسی</Tab>
      <Tab>نظرات کاربران</Tab>
    </TabList>
    <TabPanel>
      <div className="d-flex">

      <div className="propertyBox">
        <p className="propertyBoxTitle" >برند</p>
      </div>
      <div className="propertyBoxDes">
        <p className="propertyDesTitle">BCS</p>
      </div>
      </div>
</TabPanel>
<TabPanel>

      <div>
        <p>تیغه روتیواتور bcs بی سی اس ، پک ۲۰ تایی : یکی از لوازم مصرفی تراکتورهای دو چرخ تیغه روتیواتور است. از این تیغه ها در عملیات مختلف خاک ورزی، خرد کردن کلوخه ها، آماده سازی زمین برای کاشت بذور و… استفاده می شود. به وسیله تیغه تراکتور دو چرخ بی سی اس خاک سطحی با خاک زیرین به طور یکنواخت و تا عمق مشخصی مخلوط می شود.  با تیغه روتیواتور بی سی اس امور کشاورزی و خاک ورزی با کیفیت بیشتری انجام می شود. حذف علف های هرز و از بین بردن بقایای گیاهان یکی دیگر از کاربردهای تیغه روتیواتور بی سی اس می باشد. همچنین زیر و رو کردن اصولی خاک و کود، در زمین هایی که از قبل شخم خورده اند؛ از دیگر کاربردهای تیغه تراکتور دوچرخ بی سی اس می باشد. این تیغه به راحتی روی دستگاه نصب می شود.

خرید تیغه روتیواتور bcs

شرکت راشا ماشین علاوه بر عرضه انبوه ماشین آلات کشاورزی و تراکتورهای دو چرخ کمپانی بی سی اس، لوازم جانبی این محصولات را نیز با قیمت هایی مقرون به صرفه ارائه می دهد. هدف راشا ماشین رضایت مشتریان و استفاده بهینه آنها از تراکتورهای دوچرخ بی سی اس به عنوان یک ماشین ایده آل و همه کاره است. این شرکت همیشه محصولات خود را با بهترین کیفیت و مناسب ترین قیمت به مشتریان خود عرضه می کند.
</p>
    
      </div>
</TabPanel>
<TabPanel>

      <div>
        <p>دیدگاه ها</p>
        </div>

        </TabPanel>

    </Tabs>
    </div>
</div>
   </Container>
   {/* <Footer/> */}
   </>
    );
};
export default SingleProduct;