import { Container ,Col, Button,Row} from "react-bootstrap";

// import 'src/components/assets/css/styles.css';

import {useParams } from "react-router-dom";
import React,{useState,useEffect} from 'react'
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
// import LogoBlack from "../../assets/img/Logo-black.png";
import { useTranslation } from 'react-i18next';

export const truncate = (str, len) => {
    // console.log("truncate", str, str.length, len);
    if (str?.length > len && str?.length > 0) {
      let new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + "...";
    }
    return str;
  };
const Factor = () => {
  const params = useParams().id;
  const [data,setData]=useState()
  const [product,setProduct]=useState()
  const [total,setTotal]=useState(0)
  const {t,i18n} = useTranslation();

  const CustomerOrder=()=>{
    const axios = require("axios");
    var ss=localStorage.getItem("CustomerID")

    axios.post(apiUrl + "CustomerFactor",{CustomerID:ss})
    .then(function (response) {
      if (response.data.result == "True") {

         setData(response.data.Data[0])

         console.log(response.data.Data)

        // history.push("/RegisterVerify/"+mobile)

    }
    else{

    }})
    .catch(function (error) {
      console.log(error);
    });

    axios
        // .post(apiUrl + "CustomerOrderDetail",{
        .post(apiUrl + "SubFactorByFactor",{
          FactorID:params
        })
    .then(function (response) {
      if (response.data.result == "True") {
        console.log("sub")
        setProduct(response.data.Data)
        console.log(response.data.Data)
        var tot=0
        response.data.Data.map((item)=>{
tot+=item?.Cost
        })
setTotal(tot)
    }
    else{
      console.log(888)
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
    CustomerOrder();
// alert(val)
  }, []);
    
  return (
    <div className="Factor">
  

 
    <Container className="" fluid style={{backgroundColor:'#f4f4f4',padding:0}}>
      <div className="row factorHeader">
        {/* <Col md={12}>
         <img src={LogoBlack} className="factorLogo"/>
        </Col> */}
      </div>
      <Container>
        <p className="fontWeightBold mb-2">
        {t("پیش فاکتور")}
        </p>
        <p className="fontWeightBold mb-4">
        {t("مشخصات سفارش")}
        </p>
      <div className="row pdTable">
    <Col md={12} className="pd0">
    <div className="row">
          <Col md={4} className="tableBorderLeft d-flex pdTable2 borderBottomTable w-33">
            <p className="fontWeightBold">{t("شماره فاکتور :")}
            </p>
            <p className="fontWeightNormal ml-2">{product?product[0]?.FactorNumber:null}</p>
          </Col>
          <Col md={4} className="tableBorderLeft pdTable2 d-flex borderBottomTable w-33">
          <p className="fontWeightBold">{t("تاریخ")} :  
            </p>
            <p className="fontWeightNormal ml-2">{product?product[0]?.Date:null}</p>
          </Col>
          <Col md={4} className="tableBorder pdTable2 d-flex borderBottomTable w-33">
          <p className="fontWeightBold">{t("نام و نام خانوادگی")} :  
            </p>
            <p className="fontWeightNormal ml-2">{data?.Name+" "+data?.Family}</p>
          </Col>
        </div>
        <div className="row">
          <Col md={4} className="tableBorderLeft d-flex pdTable2 borderBottomTable w-33">
            <p className="fontWeightBold">{t("کدملی")} : 
            </p>
            <p className="fontWeightNormal ml-2">{data?.NationalCode}</p>
          </Col>
          <Col md={4} className="tableBorderLeft pdTable2 d-flex borderBottomTable w-33">
          <p className="fontWeightBold">{t("شماره تماس")} : 
            </p>
            <p className="fontWeightNormal ml-2">{data?.Mobile}</p>
          </Col>
          <Col md={4} className="tableBorder pdTable2 d-flex borderBottomTable w-33">
          <p className="fontWeightBold">{t("ایمیل")} : 
            </p>
            <p className="fontWeightNormal ml-2">{data?.Email}</p>
          </Col>
        </div>
        <div className="row">
          {/* <Col md={4} className="tableBorderLeft d-flex pdTable2 borderBottomTable">
            <p className="fontWeightBold">کد پستی :  
            </p>
            <p className="fontWeightNormal ml-2">1212113131</p>
          </Col>
          <Col md={4} className="tableBorderLeft pdTable2 d-flex borderBottomTable">
          <p className="fontWeightBold">شماره بارنامه :   
            </p>
            <p className="fontWeightNormal ml-2">----</p>
          </Col> */}
          <Col md={4} className="tableBorder pdTable2 d-flex borderBottomTable">
          <p className="fontWeightBold">{t("وضعیت پرداخت")} :   
            </p>
            <p className="fontWeightNormal ml-2">{t("پرداخت شده")}</p>
          </Col>
        </div>
        <div className="row">
          <Col md={12} className=" d-flex pdTable2 borderBottomTable">
            <p className="fontWeightBold">{t("آدرس")} : 
            </p>
            <p className="fontWeightNormal ml-2">{data?data[0]?.Address:null}</p>
          </Col>
        
        </div>
     
    </Col>
  </div>
  <div className="pdTable">
  <div className="topBarTable">
    <div className="row">
      <Col md={1} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {t("ردیف")}
        </p>
      </Col>
      <Col md={6} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {t("شرح محصول")}
        </p>
      </Col>
      
      <Col md={2} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {t("قیمت واحد")}
        </p>
      </Col>
      {/* <Col md={1} className="ta-right">
      <p className="fontWeightBold2 mb-2">
          تخفیف
        </p>
      </Col> */}
      <Col md={1} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {t("تعداد")}
        </p>
      </Col>
      <Col md={2} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {t("قیمت کل")}
        </p>
      </Col>
    </div>
   
  </div>
  {
    product?.map((item,index)=>{
      return(

  <div className="row pd15 borderBottomTable">
      <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
          {index+1}
        </p>
      </Col>
      <Col md={6} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
          {item.Name+" "+item.BrandName}
        </p>
      <p className="fontWeightNormal2 mb-2">
          {item.WarrantyName} 
        </p>
      </Col>
      
      <Col md={2} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
         {item.Cost?.toLocaleString("en-de")} {t("تومان")}
        </p>
      </Col>
      {/* <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
          0
        </p>
      </Col> */}
      <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
         {item.Number}
        </p>
      </Col>
      <Col md={2} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
        {(item.Cost*item.Number)?.toLocaleString("en-de")} {t("تومان")}
        </p>
      </Col>
    </div>
      )
    })
  }
    
    <div className="row pd15 backBlueLight">
      <Col md={6} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
      {t("هزینه ارسال از طریق پست سفارشی")}  :
      {t("زمان فوق با توجه به محدوده جغرافیایی به صورت تقریبی بین 2 تا 4 روز کاری متفاوت است.تحویل در بازه زمانی 10-17.سقف بیمه پست برای هر محصول 20 میلیون تومان است.")}
        </p>
      </Col>
      
      <Col md={2} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
      {product?product[0]?.SendCost?.toLocaleString("en-de"):null} {t("تومان")}
        </p>
      </Col>
      {/* <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
          -
        </p>
      </Col> */} 
      <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
        -
        </p>
      </Col>
      <Col md={2} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
        {product?product[0]?.SendCost?.toLocaleString("en-de"):null} {t("تومان")}
        </p>
      </Col>
    </div>
    <div className="row pd15 borderBottomTable">
      <Col md={6} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
      {t("۹٪ ارزش افزوده")} 
        </p>
      </Col>
      
      <Col md={2} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
        -
        </p>
      </Col>
      <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
          
        </p>
      </Col>
      <Col md={1} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
         
        </p>
      </Col>
      {/* <Col md={2} className="ta-right">
      <p className="fontWeightNormal2 mb-2">
        {product?product[0].CostTotal:null} تومان
        </p>
      </Col> */}
    </div>
   
    <div className="row backGray">
      <Col md={8} className="ta-right">
     
      </Col>
      <Col md={2} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {t("مبلغ قابل پرداخت")} : 
        </p>
      </Col>
      <Col md={2} className="ta-right">
      <p className="fontWeightBold2 mb-2">
      {product?total?.toLocaleString("en-de"):null} {t("تومان")}
        </p>
      </Col>
    </div>

 
  </div>
  {/* <div className="pdTable pdM mt-2">
   <p className="fontWeightBold">
   {t("توضیحات خریدار")} : 
        </p>
        <br/>
        <p className="fontWeightNormal2">
{product?product[0]?.Description:null}      </p>
   </div> */}
   <p className="fontWeightBold mt-4">
   {t("خریدار محترم")} : 
        </p>
        <br/>
        <p className="fontWeightNormal2">
        {t("کلیه قوانین و مقررات مربوط به خرید اینترنتی از وب سایت ما،مندرج و قابل مشاهده است.لذا خرید کالا از این شرکت به منزله پذیرش کلیه قوانین و مقررات اعم از قانون تجارت الکترونیک و قانون حمایت از حقوق مصرف کننده و دستورالعمل صادره از اتحادیه کسب و کار مجازی وزارت صنعت و معدن و تجارت بوده و در محاکم قابل استفاده است.")}
        </p>
  {/* <div className="factorTable">
        
        <div className="row rightMenuBox1" style={{backgroundColor:'#111'}}>
          <Col md={4} className="ta-right">
          <p className="fontWeightBold colorWhite" href="#">
                  شماره فاکتور : {params}
                </p>
          </Col>
          <Col md={4} className="ta-center">
          <p className="fontWeightBold colorWhite" href="#">
                 تاریخ : {product?product[0].Date:null}
                </p>
          </Col>
          <Col md={4} className="ta-left">
          <p className="fontWeightBold colorWhite" href="#">
                   جمع فاکتور : {product?product[0].CostTotal:null} تومان
                </p>
          </Col>
        </div>
        <hr className="grayDashed" />
        <div className="row pdtb10" style={{backgroundColor:'#f4f4f4'}}>
        <Col md={1} className="ta-right">
            <p className="fontWeightBold">
           ردیف
            </p>
          </Col>
          <Col md={8} className="ta-right">
            <p className="fontWeightBold">
              نام محصول
            </p>
          </Col>
          <Col md={1} className="ta-right">
          <p className="fontWeightBold">
              تعداد
            </p>
          </Col>
          <Col md={2} className="ta-right">
          <p className="fontWeightBold">
             قیمت
            </p>
          </Col>
        </div>
       
        <hr className="grayDashed" />
        {
          product?.map((item,index)=>{
            return(
              <div>
              <div className="row  pdtb10">
              <Col md={1} className="ta-right">
                  <p className="fontWeightBold">
                   {index+1}
                  </p>
                </Col>
                <Col md={8} className="ta-right">
                  <p className="fontWeightM">
                    {item.ProductName}
                  </p>
                </Col>
                <Col md={1} className="ta-right">
                <p className="fontWeightM">
                    {item.Number}
                  </p>
                </Col>
                <Col md={2} className="ta-right">
                <p className="fontWeightM">
                   {item.Cost} تومان
                  </p>
                </Col>
              </div>
              <hr className="grayDashed" />
</div>
            )
          })
        }
       
      </div> */}
      </Container>
    
    </Container>
   
  </div>
  );
};
export default Factor;
