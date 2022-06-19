import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import ImageGallery from 'react-image-gallery';
import { StarFill } from 'react-bootstrap-icons';

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
   <Container className="SingleProductContainer" fluid>
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
        <div className="SingleTitleBox">
        <div className="d-flex">
        <p className="SingleTitle">
                    تراکتور دو چرخ دیزلی 7اسب کاما BCS740
                </p>
            </div>
                <div className="d-flex">

                <p className="SingleModelP">مدل:Bcs740 WalkingTractor</p>
                </div>
            <div className="d-flex flex-row">
            <StarFill color="#FF6900" size="16"/> 
<p className="SingleRateP">3.2</p>

<p className="SingleTitleCatP">دسته بندی:</p>
<p className="SingleCatP">تراکتور دو چرخ</p>
            </div>
            </div>
            </Col>

        </div>
  
        </div>
        <div className="singleBox1">
</div>
   </Container>
   {/* <Footer/> */}
   </>
    );
};
export default SingleProduct;