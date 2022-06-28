import {React ,useState } from "react";
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

const Store = () =>{
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [show2, setShow2] = useState(false);

      const handleClose2 = () => {setShow2(false)};
      const handleShow2 = () => {setShow2(true);setShow(false)};
    
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
            <Col md={3}>
            <Button className="greenBtn searchBtn">
                فیلترهای جستجو
            </Button>
            <div className="accardionBox5 d-flex align-items-center justify-content-between">
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
            </div>
            <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                      دسته بندی یک
                    </AccordionItemButton>
                 </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="d-flex align-items-center">
                   
                    <Checkbox

                        
                        sx={{
                        color: '#009959',
                        '&.Mui-checked': {
                        color: '#009959',
                        },
                    }}
                />
                 <span className="categoryLable">
                        زیر دسته یک
                    </span>
                </div>
                <div className="d-flex align-items-center">
                   
                   <Checkbox

                       
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته دو
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                       
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته سه
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                       defaultChecked
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته چهار
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                    
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                      زیر دسته پنج
                   </span>
               </div>
             </AccordionItemPanel>
            </AccordionItem>

            </Accordion>
            <Accordion allowZeroExpanded className="accardionBox">
    
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                     دسته بندی دو
                    </AccordionItemButton>
                 </AccordionItemHeading>
            <AccordionItemPanel>
            <div className="d-flex align-items-center">
                   
                    <Checkbox

                        
                        sx={{
                        color: '#009959',
                        '&.Mui-checked': {
                        color: '#009959',
                        },
                    }}
                />
                 <span className="categoryLable">
                        زیر دسته یک
                    </span>
                </div>
                <div className="d-flex align-items-center">
                   
                   <Checkbox

                       
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته دو
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                       
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته سه
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                       defaultChecked
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                       زیر دسته چهار
                   </span>
               </div>
               <div className="d-flex align-items-center">
                   
                   <Checkbox

                    
                       sx={{
                       color: '#009959',
                       '&.Mui-checked': {
                       color: '#009959',
                       },
                   }}
               />
                <span className="categoryLable">
                      زیر دسته پنج
                   </span>
               </div>
             </AccordionItemPanel>
            </AccordionItem>

            </Accordion>
            <Accordion allowZeroExpanded className="accardionBox">
    
    <AccordionItem >
        <AccordionItemHeading>
            <AccordionItemButton>
              دسته بندی سه
            </AccordionItemButton>
         </AccordionItemHeading>
    <AccordionItemPanel>
    <div className="d-flex align-items-center">
           
            <Checkbox

                
                sx={{
                color: '#009959',
                '&.Mui-checked': {
                color: '#009959',
                },
            }}
        />
         <span className="categoryLable">
                زیر دسته یک
            </span>
        </div>
        <div className="d-flex align-items-center">
           
           <Checkbox

               
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
               زیر دسته دو
           </span>
       </div>
       <div className="d-flex align-items-center">
           
           <Checkbox

               
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
               زیر دسته سه
           </span>
       </div>
       <div className="d-flex align-items-center">
           
           <Checkbox

               defaultChecked
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
               زیر دسته چهار
           </span>
       </div>
       <div className="d-flex align-items-center">
           
           <Checkbox

            
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
              زیر دسته پنج
           </span>
       </div>
     </AccordionItemPanel>
    </AccordionItem>

             </Accordion>
            <Accordion allowZeroExpanded className="accardionBox">

    <AccordionItem >
        <AccordionItemHeading>
            <AccordionItemButton>
            دسته بندی چهار
            </AccordionItemButton>
         </AccordionItemHeading>
    <AccordionItemPanel>
    <div className="d-flex align-items-center">
           
            <Checkbox

                
                sx={{
                color: '#009959',
                '&.Mui-checked': {
                color: '#009959',
                },
            }}
        />
         <span className="categoryLable">
                زیر دسته یک
            </span>
        </div>
        <div className="d-flex align-items-center">
           
           <Checkbox

               
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
               زیر دسته دو
           </span>
       </div>
       <div className="d-flex align-items-center">
           
           <Checkbox

               
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
               زیر دسته سه
           </span>
       </div>
       <div className="d-flex align-items-center">
           
           <Checkbox

               defaultChecked
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
               زیر دسته چهار
           </span>
       </div>
       <div className="d-flex align-items-center">
           
           <Checkbox

            
               sx={{
               color: '#009959',
               '&.Mui-checked': {
               color: '#009959',
               },
           }}
       />
        <span className="categoryLable">
              زیر دسته پنج
           </span>
       </div>
     </AccordionItemPanel>
    </AccordionItem>

            </Accordion>
            </Col>
            <Col md={9}>
            <div className="whiteBox d-flex align-items-center justify-content-start mb-2" style={{padding:10}}>
            <div className="d-flex">
            <TextLeft color="#ffb921" size={30}/>
            <span className="sortText">
                مرتب سازی بر اساس :
            </span>
            </div>
            <div className="d-flex align-items-center justify-content-start">
                <Button className="sortBtn">
                    پرفروش ترین
                </Button>
                <Button className="sortBtn">
                    جدید ترین
                </Button>
                <Button className="sortBtn">
                    ارزان ترین
                </Button>
                <Button className="sortBtn">
                   گران ترین
                </Button>
            </div>
            </div>
                <div className="whiteBox">
                <div className="d-flex mt-1 flex-wrap justify-content-start">
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
                        <div className="productCard">
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
                        </div>
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
export default Store;