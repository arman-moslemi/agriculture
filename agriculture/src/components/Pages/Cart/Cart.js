import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";

import {Trash3Fill} from "react-bootstrap-icons";

import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Product2 from "src/components/assets/img/p2.png";
import Location from "src/components/assets/icon/Location";

import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";
import CustomizedDialogs from '../Layouts/AlertModal';

const Cart = () =>{
  const [showAlert, setshowAlert] = useState(false);
  const [data, setData] = useState([]);
  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
      const [show, setShow] = useState(false);
      const [count,setCount]=useState(1);
      const [count2,setCount2]=useState(1);
      const handleClose = () => setShowAddress(false);
      const handleShow = () => setShowAddress(true);
      const [dataAddress,setDataAddress]=useState([])
      const [dataProvince,setDataProvince]=useState([])
      const [dataCity,setDataCity]=useState([])
      const [newCity,setNewCity]=useState(1)
      const [newProvince,setNewProvince]=useState(1)
      const [editCity,setEditCity]=useState()
      const [newAddress,setNewAddress]=useState("")
      const [editAddressID,setEditAddressID]=useState("")
      const [costTotal,setCostTotal]=useState(0)
      const [radio,setRadio]=useState(5)

  
      const [newPostalCode,setNewPostalCode]=useState("")
      const increment = (id,type) => {
        setCount(count+1)
        console.log(count)
        const axios = require("axios");
          
                axios.post(apiUrl + "ShoppingBasketValue",{ShoppingBasketID:id,Type:type})
                .then(function (response) {
                  console.log(response)
        
                  if (response.data.result == "True") {
                    console.log(777)
                    console.log(response.data.Data)
                    setCount(count+1)
                    GetData()
                }})
                .catch(function (error) {
                  console.log(777)
                  console.log(error);
        
                  console.log(error);
                });
           
            
      
          }
          const DeleteCart = (id) => {
            setCount(count+1)
            console.log(count)
            const axios = require("axios");
                
                    setCount(count+1)
                    axios.post(apiUrl + "ShoppingBasketDelete",{ShoppingBasketID:id})
                    .then(function (response) {
                      console.log(response)
            
                      if (response.data.result == "True") {
                        console.log(777)
                        console.log(response.data.Data)
                        GetData()
                 }})
                    .catch(function (error) {
                      console.log(777)
                      console.log(error);
            
                      console.log(error);
                    });
                  
                
          
              }
         
      
              const GetData=()=>{
                const axios = require("axios");
              
                var customer=localStorage.getItem("CustomerID")
                var guest=localStorage.getItem("Guest")?localStorage.getItem("Guest"):0;

                console.log(123456)
                console.log(customer)
                axios.post(apiUrl + "ShoppingBasketView",{CustomerID:customer,GuestID:guest})
                .then(function (response) {
                  console.log(response)
        
                  if (response.data.result == "True") {
                    console.log(777)
                    console.log(response.data.Data)
                    setCostTotal(0)
                    setData(response.data.Data)
                    var dd=0;
                    response.data.Data.map((item)=>{
dd=item.SpecialCost?dd+parseInt(item.SpecialCost*item.ShoppingBasketNumber):dd+parseInt(item.Cost*item.ShoppingBasketNumber)
})
setCostTotal(dd)
}else if(response.data.result == "Duplicate"){
  setData([])

}})
                .catch(function (error) {
                  console.log(777)
                  console.log(error);
        
                  console.log(error);
                });
          
          
              }
              const GetAddress=()=>{
                const axios = require("axios");
              
            var customer=localStorage.getItem("CustomerID")
            console.log(123456)
            console.log(customer)
             
                axios.post(apiUrl + "ReadAddress",{CustomerID:customer})
                .then(function (response) {
                    
                    console.log(999)
                    console.log(response)
                  if (response.data.result == "True") {
                    console.log(response.data.Data)
                    setDataAddress(response.data.Data)
    
                }else if(response.data.result == "Duplicate"){
                  setDataAddress([])
  
              }})
                axios.get(apiUrl + "GetProvince")
                .then(function (response) {
                    
                    console.log(999)
                    console.log(response)
                  if (response.data.result == "True") {
                    console.log(response.data.Data)
                    setDataProvince(response.data.Data)
    
                }})
                .catch(function (error) {
                  console.log(999)
                  console.log(error);
        
                  console.log(error);
                });
          
              }
              const GetCity=(id)=>{
                const axios = require("axios");
              
            
                axios.post(apiUrl + "GetCity",{ProvinceID:id})
                .then(function (response) {
                  if (response.data.result == "True") {
                    console.log(777)
                    console.log(response.data.Data)
                    setDataCity(response.data.Data)
             
    
                
        
                }})
                .catch(function (error) {
                  console.log(777)
                  console.log(error);
        
                  console.log(error);
                });
              
              }
              const AddAddress=()=>{
                const axios = require("axios");
                var ss=localStorage.getItem("CustomerID")

                axios.post(apiUrl + "InsertAddress",{CustomerID:ss,CityID:newCity,PostalCode:newPostalCode,Address:newAddress})
                .then(function (response) {
                  if (response.data.result == "True") {
                    console.log(111)
                    console.log(response.data.Data)
                    setNewPostalCode("")
                    setNewAddress("")
                    GetAddress()
                    handleClose();
    
                
        
                }})
                .catch(function (error) {
                  console.log(777)
                  console.log(error);
        
                  console.log(error);
                });
              
              }
              const EditAddress=()=>{
                const axios = require("axios");
              
                axios.post(apiUrl + "EditAddress",{AddressID:editAddressID,CustomerID:state.CustomerID,CityID:newCity,PostalCode:newPostalCode,Address:newAddress})
                .then(function (response) {
                  if (response.data.result == "True") {
                    console.log(111)
                    console.log(response.data.Data)
                    GetData(response.data.Data)
                    handleEditClose();
    
                
        
                }})
                .catch(function (error) {
                  console.log(777)
                  console.log(error);
        
                  console.log(error);
                });
              
              }
              const DeleteAddress=(id)=>{
                const axios = require("axios");
              
            
                axios.post(apiUrl + "DeleteAddress",{AddressID:id})
                .then(function (response) {
                  if (response.data.result == "True") {
                    console.log(111)
                    console.log(response.data.Data)
                    GetAddress()
    
                
        
                }})
                .catch(function (error) {
                  console.log(777)
                  console.log(error);
        
                  console.log(error);
                });
              
              }
              const [showAddress, setShowAddress] = useState(false);
              const [showEditAddress, setShowEditAddress] = useState(false);
           
              const handleEditClose = () => {setShowEditAddress(false);
                  setEditAddressID(0); setNewCity(1);setNewProvince(1);setNewPostalCode("");setNewAddress("");
              };
           
              const handleEditShow = (id,city,province,postal,address) => {setShowEditAddress(true);setEditAddressID(id);
                  GetCity(province);
              setNewCity(city);setNewProvince(province);setNewPostalCode(postal);setNewAddress(address);
              }
              const {state} = useLocation();
              useEffect(() => {
                GetData();
                GetAddress();
              }, []);

              const payment=()=>{
                const axios = require("axios");
              // alert(dataAddress[radio]?.Address)
                var ss=localStorage.getItem("CustomerID")
                // axios.post(apiUrl + "ChargeWallet",{CustomerID:ss,Money:costTotal,orderId:123456})
                
                if(radio!=5)
          {        axios.post(apiUrl + "CardSuccess",{CustomerID:ss,Money:costTotal*10,orderId:123456,Address:dataAddress[radio]?.Address})
                  .then(function (response) {
                      console.log(111)
                      console.log(response)
                    if (response.status== 200) {
                      console.log(777)
                      console.log(response.data.refId)
          //             navigate("/Dargah"
          // , { replace: true,state:{id:response.data?.refId} }
          // );
          window.location.href="/dargahh.html?id="+response.data?.refId;
                  }})
                  .catch(function (error) {
                    console.log(777)
                    console.log(error);
          
                    console.log(error);
                  })}
                else{
                  setTitle("آدرس انتخاب نشده است")
                  setOpen(true)
                }
                
       
                
          
          
              }
    return(
   <div style={{backgroundColor:'#f4f4f4'}}>
   <Header/>
   <Container className="bodyPadding">
        <Row>
        <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/>

        <Col md={9}>
                <div className="whiteBox">
               <div className="whiteBoxGrayborder" style={{padding:0}}>
               <p className="panelTitle" style={{fontSize:20}}>
                    سبد خرید
                   </p>
                   <p className="zirNevis">
                    {data.length} کالا
                   </p>
               </div>
               {
                data?.map((item)=>{
                  return(

               <div className="cartPBox">
                <div className="d-flex align-items-center">
                    <img        src={apiAsset+item.Pic1} className="cartImg"/>
                    <div>
                    <p className="HistoryProductTitle mb-2">
{item.Name}                               </p>
                               <p className="HistoryProductModel mb-2">
                               مدل : {item.BrandName}
                               </p>
                              <div className="d-flex align-items-center">
                              <p className="historyPrice" style={{textAlign:'right'}}>
                              قیمت کالا : {item.SpecialCost}تومان
                            </p>
                            <p className="costGrayBoxStroke ml-2" style={{marginRight:15}}>
                            {item.Cost}تومان
                            </p>
                                </div>
                            <div className="d-flex align-items-center">
                            <p className="historyPrice" style={{textAlign:'right',marginBottom:0}}>
                             تعداد :
                            </p>
                            <div className="counterDiv d-flex justify-content-center" style={{marginRight:10}}>
                            <button onClick={()=>increment(item.ShoppingBasketID,"add")} className="inBTN">+</button>
                            <span style={{marginRight:'0'}}>{item.ShoppingBasketNumber}</span>
                            <button onClick={()=>item.ShoppingBasketNumber==1?null:increment(item.ShoppingBasketID,"mines")} className="decBTN">-</button>
                            </div>
                            </div>
                           
                    </div>
                </div>
                <div className="">
                  <Button onClick={()=>DeleteCart(item.ShoppingBasketID)} className="deleteBtn">
                      <Trash3Fill color="#FF6900" size={30}/>
                  </Button>
                 
                </div>
               </div>
                  )
                })
               }
               {/* <div className="cartPBox">
                <div className="d-flex align-items-center">
                    <img src={Product2} className="cartImg"/>
                    <div>
                    <p className="HistoryProductTitle mb-2">
                               تراکتور دوچرخ دیزلی ۷ اسب کاما BCS740
                               </p>
                               <p className="HistoryProductModel mb-2">
                               مدل : BCS 740 Walking Tractor
                               </p>
                               <p className="historyPrice" style={{textAlign:'right'}}>
                              قیمت کالا : 125.000 تومان
                            </p>
                            <div className="d-flex align-items-center">
                            <p className="historyPrice" style={{textAlign:'right',marginBottom:0}}>
                             تعداد :
                            </p>
                            <div className="counterDiv d-flex justify-content-center" style={{marginRight:10}}>
                            <button onClick={()=>increment2()} className="inBTN">+</button>
                            <span style={{marginRight:'0'}}>{count2}</span>
                            <button onClick={()=>decrement2()} className="decBTN">-</button>
                            </div>
                            </div>
                           
                    </div>
                </div>
                <div className="">
                  <Button className="deleteBtn">
                      <Trash3Fill color="#FF6900" size={30}/>
                  </Button>
                 
                </div>
               </div> */}
                </div>
                <div className="whiteBox mt-4">
                <div className="d-flex align-items-center justify-content-between topBox">
                   <div className="d-flex">
                   <Location/>
                   <p className="panelTitle">
                    آدرس های ذخیره شده
                   </p>
                   </div>
                   <Button className="editProfileBtn" onClick={handleShow}>
                    + افزودن آدرس جدید
                   </Button>
                   <Modal
                                                show={showAddress} onHide={handleClose}
                                                className="historyModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                   افزودن آدرس
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              <Row>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                       استان
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select  onChange={(ss)=>GetCity(ss.target.value)} className="addressSelect">
                                            {
                                                dataProvince?.map((item)=>{
                                                    return(

                                                        <option value={item.ProvinceID}>{item.ProvinceName}</option>
                                                    )
                                                })
                                            }
                                                 
                                                </Form.Select>
                                                </Col>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                      شهر
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select onChange={(ss)=>setNewCity(ss.target.value)} className="addressSelect">
                                                <option value={""}>انتخاب کنید</option>

                                                {
                                                dataCity?.map((item)=>{
                                                    return(

                                                        <option value={item.CityID}>{item.CityName}</option>
                                                    )
                                                })
                                            }
                                                </Form.Select>
                                                </Col>
                                              </Row>
                                              <span className="inputTitle">کدپستی</span>
                        <br/>
                        <input onChange={(e)=>setNewPostalCode(e.target.value)} className="inputCLass" type="text"/>
                        <br/>
                        <span className="inputTitle">آدرس</span>
                        <br/>
                        <textarea onChange={(e)=>setNewAddress(e.target.value)} className="inputCLass" type="text" style={{height:160,resize:'none'}}/>
                                                
                                           
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>AddAddress()}className="modalSaveBtn">ذخیره</Button>
                                                </Modal.Footer>
                                             </Modal>




                                             <Modal
                                                show={showEditAddress} onHide={handleEditClose}
                                                className="historyModal"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                   افزودن آدرس
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                              <Row>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                       استان
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select  defaultValue={newProvince} onChange={(ss)=>GetCity(ss.target.value)} className="addressSelect">
                                            {
                                                dataProvince?.map((item)=>{
                                                    return(

                                                        <option value={item.ProvinceID}>{item.ProvinceName}</option>
                                                    )
                                                })
                                            }
                                                 
                                                </Form.Select>
                                                </Col>
                                                <Col md={6}>
                                                <p className="modalText mb-0">
                                                    <span>
                                                      شهر
                                                    </span>
                                                    
                                                </p>
                                                
                                                <Form.Select onChange={(ss)=>setNewCity(ss.target.value)} defaultValue={newCity}  className="addressSelect">
                                                <option value={""}>انتخاب کنید</option>

                                                {
                                                dataCity?.map((item)=>{
                                                    
                                                    return(

                                                        <option value={item.CityID}>{item.CityName}</option>
                                                    )
                                                })
                                            }
                                                </Form.Select>
                                                </Col>
                                              </Row>
                                              <span className="inputTitle">کدپستی</span>
                        <br/>
                        <input value={newPostalCode} onChange={(e)=>setNewPostalCode(e.target.value)} className="inputCLass" type="text"/>
                        <br/>
                        <span className="inputTitle">آدرس</span>
                        <br/>
                        <textarea value={newAddress} onChange={(e)=>setNewAddress(e.target.value)} className="inputCLass" type="text" style={{height:160,resize:'none'}}/>
                                                
                                           
                                               
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button  onClick={()=>EditAddress()}className="modalSaveBtn">ذخیره</Button>
                                                </Modal.Footer>
                                             </Modal>
                </div>
                {
                    dataAddress.map((item,index)=>{
                        return(
                <div className="addressBox">
                <div className="d-flex align-items-center">
                <Radio
                
                sx={{
                color: '#FF6900',
                '&.Mui-checked': {
                    color: '#FF6900',
                },
                }}
                checked={radio === index }
onChange={()=>{setRadio(index)}}
            />
                <p>
{item.Address}                </p>
                </div>
                <div className="d-flex justify-content-between mt-4">
                <p style={{marginRight:42}}>
                   کد پستی : {item.PostalCode}
                </p>
                <div className="d-flex">
                    <Button onClick={()=>handleEditShow(item.AddressID,item.CityID,item.ProvinceID,item.PostalCode,item.Address)} className="gTransparentBtn">
                        ویرایش
                    </Button>
                    
                    <Button onClick={()=>DeleteAddress(item.AddressID)} className="oTransparentBtn">
                        حذف
                    </Button>
                </div>
                </div>
                </div>

                        )
                    })
                }







             
            </div>
            </Col>
            <Col md={3}>
          
                <div className="whiteBox" style={{paddingTop:0,paddingLeft:0,paddingRight:0,paddingBottom:10}}>
                  <div className="whiteBoxGrayborder customPad">
                  <div className="text-right">
                    <span className="boxText">
                        قیمت کالاها :
                    </span>
                  </div>
                  <div className="" style={{textAlign:'left'}}>
                    <span className="boxText">
                        {costTotal} تومان
                    </span>
                  </div>
                  </div>
                  <div className="whiteBoxGrayborder customPad">
                  <div className="text-right">
                    <span className="boxText">
                       هزینه ارسال :
                    </span>
                  </div>
                  <div className="" style={{textAlign:'right'}}>
                    <span className="boxText2">
                      بعد از انتخاب آدرس لحاظ می شود
                    </span>
                  </div>
                  </div>
                  <div className="customPad">
                  <div className="text-right">
                    <span className="boxText">
                        مجموع سبد خرید :
                    </span>
                  </div>
                  <div className="" style={{textAlign:'left'}}>
                    <span className="boxText">
                        {costTotal} تومان
                    </span>
                  </div>
                  </div>
                  <Button className="yellowColor" 
                  onClick={()=>payment()}
                  
                  >
                    پرداخت
                  </Button>
                 
                </div>
                {showAlert ?
                  <p className="alertText">
                    ! ابتدا آدرس را وارد کنید تا به گام بعد جهت پرداخت منتقل شوید
                  </p>
                  : null}
            </Col>
          
            </Row>
   </Container>
   
    <Footer/>
   </div>
    );
};
export default Cart;