import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
import Avatar from "src/components/assets/img/avatar.png";
import { StarFill ,Star ,Heart ,TextLeft } from "react-bootstrap-icons";
import PaginationCustom from "src/components/Pages/Layouts/Pagination";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Product from "src/components/assets/img/product.png";
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const GroupProduct = () =>{
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [data,setData]=useState([])
    const [property,setProperty]=useState([])
    const {state} = useLocation();
    const [filter,setFilter]=useState([])
    const [data2,setData2]=useState([])
        const params = useParams().id;
        const {t,i18n} = useTranslation();

    const viewset=()=>{


        console.log(14563)
        //  setProduct([])
        // var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
        setData([...Object.values(data)].sort((a, b) => (a.TotalView < b.TotalView) ? 1 : -1))
        
        }
    const expensive=()=>{


        console.log(14563)
    //  setProduct([])
    // var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
    setData([...Object.values(data)].sort((a, b) => (a.Cost < b.Cost) ? 1 : -1))
    
    }
    const chep=()=>{



        setData([...Object.values(data)].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1))
      
      }
    const GetData=async()=>{
        const axios = require("axios");
      
        const rate2=await localStorage.getItem("rate")

        axios.post(apiUrl + "GroupProduct",{GroupTitle:params},{  headers: {
          lang: i18n.language,
          rate:rate2
      }})
        .then(function (response) {
          if (response.data.result == "True") {

            setData(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        axios.post(apiUrl + "GetPropertyGroup",{GroupTitle:params},{  headers: {
          lang: i18n.language,
          rate:rate2
      }})
        .then(function (response) {
          if (response.data.result == "True") {

            setProperty(response.data.Data)

        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
        
        
  
      }
      var gg=[]

      useEffect(() => {
        GetData();

      }, []);
      const proFilter=(type,val,vv)=>{

        if(type==1){
          setFilter([...filter,{id:val,title:vv.Title}])
          gg.push({id:val,title:vv.SubGroupPropertyTitle})
          var ff=[]
        
            console.log(14563)
            console.log(val)
            console.log(gg)
        //  setProduct([])
        // var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
        Object.values(data)?.map((item2,index1)=>{
          var count=0;
          console.log(item2)

          // item2?.map((item3,index2)=>{
        gg?.map((item,index3)=>{
        
         
        
            if(item2.SubGroupPropertyID==item.id)
           {
             count+=1;
             if (count==gg.length){
        
              ff.push(item2)
            }
            
          
          }
          })
        // })
        })
        console.log(ff)
        // if(ff.length!=0){
        
          setData(ff)
        }
        else{
          setFilter( filter.filter((el)=>el.id!=vv.SubGroupPropertyID));
          gg=gg.filter((el)=>el.id!=vv.SubGroupPropertyID);
          var ff=[]
        
            console.log(14563)
            console.log(val)
            console.log(gg)
        //  setProduct([])
        // var list=[...product].sort((a, b) => (a.Cost > b.Cost) ? 1 : -1);
        data2?.map((item2,index1)=>{
          var count=0;
          item2?.map((item3,index2)=>{
        gg?.map((item,index3)=>{
        
         
        
            if(item3.SubGroupPropertyID==item.id)
           {
             count+=1;
             if (count==gg.length){
        
              ff.push(item2)
            }
            
          
          }
          })
        })
        })
        console.log(ff)
        // if(ff.length!=0){
        
          setData(ff)
        
        }
        
        
        
        // }
        if(gg.length==0)
        {
        GetData()
        }
        }
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
            <Col md={3}>
            <Button className="greenBtn searchBtn">
            {t("فیلترهای جستجو")}
            </Button>
            {/* <div className="accardionBox5 d-flex align-items-center justify-content-between">
                <div>
                    <span className="toggleText">کالاهای توافقی</span>
                </div>
        <div>
        <Switch {...label} />
        </div>
            </div>
            <div className="accardionBox5 d-flex align-items-center justify-content-between">
                <div>
                    <span className="toggleText">فقط کالاهای موجود</span>
                </div>
        <div>
        <Switch {...label} />
        </div>
            </div> */}

               {
                  Object.values(property)?.map((item,index)=>{
                  
return(

            <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {item[0]?.MainGroupPropertyTitle} 
                    </AccordionItemButton>
                 </AccordionItemHeading>
            <AccordionItemPanel>
            {  item.map((item2)=>{
    return(
            <div className="d-flex align-items-center">
                   
                    <Checkbox

                        
                        sx={{
                        color: '#009959',
                        '&.Mui-checked': {
                        color: '#009959',
                        },
                    }}
                    value={item2.SubGroupPropertyID}
                    onChange={(e)=>e.target.checked?
                     proFilter(1,e.target.value,item2)
                      :
                    
                     proFilter(2,e.target.value,item2)
                    
                    
                      
                     }
                />
                 <span className="categoryLable">
                 {item2.SubGroupPropertyTitle}     
                    </span>
                </div>
              )
            })}
             </AccordionItemPanel>
            </AccordionItem>

            </Accordion>
                )

                    
            })
          }
          
            </Col>
            <Col md={9}>
            <div className="scrollResponsive whiteBox d-flex align-items-center justify-content-start mb-2" style={{padding:10}}>
            <div className="d-flex">
            <TextLeft color="#ffb921" size={30}/>
            <span className="sortText">
            {t("مرتب سازی بر اساس :")}
            </span>
            </div>
            <div className="d-flex align-items-center justify-content-start">
            <Button onClick={()=>viewset()} className="sortBtn">
                {t("پربازدید ترین")}            
                </Button>
                <Button onClick={()=>GetData()} className="sortBtn">
                {t("جدید ترین")}                 
                </Button>
                <Button onClick={()=>chep()} className="sortBtn">
                {t("ارزان ترین")}                   
                </Button>
                <Button onClick={()=>expensive()} className="sortBtn">
                {t("گران ترین")}                 
                </Button>
            </div>
            </div>
                <div className="whiteBox">
                <div className="d-flex mt-1 flex-wrap justify-content-start">
                    {
Object.values(data)?.map((item,index)=>{
//     item2?.map((item)=>{
    return(
                        <Link to={"/SingleProduct/"+item?.Name2} className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img 
                        src={apiAsset+item?.Pic1}
                           className="productImg"/>
                            <p className="productName">
{item?.Name}                            </p>
                            <p className="productVolume">
                            {t("موجودی")}: {item?.Number} {item?.Unit}
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPriceStroke">
                                        {item?.Cost} {t("تومان")}
                                    </p>
                                    <p className="productPrice">
                                        {item?.SpecialCost} {t("تومان")}
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                           {t("نام تامین کننده کالا")}: {item?.WarrantyName}
                            </p>
                           </div>
                        </Link>
// )})
)} )
}
                    
                        {/* <div className="productCard">
                           <div style={{padding:20,paddingBottom:5}}>
                           <img src={Product} className="productImg"/>
                            <p className="productName">
                                دستگاه میوه خشک کن
                            </p>
                            <p className="productVolume">
                                موجودی : 10 تن
                            </p>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="d-flex align-items-center">
                                    <Star color="#000" className="marginLeft5"/>
                                    <Star color="#000" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921" className="marginLeft5"/>
                                    <StarFill color="#ffb921"/>
                                </div>
                                <div>
                                    <p className="productPrice">
                                        125.000 تومان
                                    </p>
                                </div>
                            </div>
                           </div>
                           <div className="box2Div">
                           <p className="productVolume">
                               نام تامین کننده کالا : شرکت فلان
                            </p>
                           </div>
                        </div> */}
                    
                    </div>
                    
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
export default GroupProduct;