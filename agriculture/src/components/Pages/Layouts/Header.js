import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button, Nav, Navbar, NavDropdown, NavItem,Offcanvas} from "react-bootstrap";
import Instagram from 'src/components/assets/icon/Instagram';
import Phone from 'src/components/assets/icon/Phone';
import Telegram from 'src/components/assets/icon/Telegram';
import Whatsapp from 'src/components/assets/icon/Whatsapp';
import Logo from 'src/components/assets/img/logo.png';
import {Search } from 'react-bootstrap-icons';
import Cart from 'src/components/assets/icon/Cart';
import Profile from 'src/components/assets/icon/Profile';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Iran from 'src/components/assets/img/iran.png';
import England from 'src/components/assets/img/england.png';
import M1B from 'src/components/assets/img/m1B.png';
import M1G from 'src/components/assets/img/m1G.png';
import M2B from 'src/components/assets/img/m2B.png';
import M2G from 'src/components/assets/img/m2G.png';
import M3B from 'src/components/assets/img/m3B.png';
import M3G from 'src/components/assets/img/m3G.png';
import M4B from 'src/components/assets/img/m4B.png';
import M4G from 'src/components/assets/img/m4G.png';
import { Link, useNavigate } from "react-router-dom";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";


const Header = () =>{
    const [green, setGreen] = useState(false);
    const [showMega, setShowMega] = useState(false);
    const [groupShow, setGroupShow] = useState(false);
    const [data, setData] = useState(false);
    const [group, setGroup] = useState(false);
    let navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [auto, setAuto] = useState("");
    const onClick = () =>{
        setShowMega(!showMega);
     };
     const  _handleKeyDownAuto = async(aa) => {
        const axios = require("axios");
 
            axios
                .post(apiUrl + "SearchProduct",{
                    ProductName:aa
                })
            .then(function (response) {
              if (response.data.result == "True" && aa.length>0) {
      
                setAuto(response.data.Data)
                console.log(response.data.Data)
      
            }
            else{
              setAuto([])
              console.log(response.data.result)
      
            }})
            .catch(function (error) {
              console.log(error);
            });}
     const  GetData = async(e) => {
        const axios = require("axios");
 
            axios
                .get(apiUrl + "MainMenu",{
                    ProductName:search
                })
            .then(function (response) {
              if (response.data.result == "True") {
      
                setData(response.data.Data)
                console.log(response.data.Data)
      
            }
            else{
              console.log(response.data.result)
      
            }})
            .catch(function (error) {
              console.log(error);
            });}
     const  GetGroup = async(aa) => {
        const axios = require("axios");
 
            axios.post(apiUrl + "MenuAll",{
                    GroupID:aa
                })
            .then(function (response) {
              if (response.data.result == "True") {
      
                setGroup(response.data.Data)
                console.log(Object.values(response.data.Data))
      
            }
            else{
              console.log(response.data.result)
      
            }})
            .catch(function (error) {
              console.log(error);
            });}
            useEffect(() => {
              GetData();
            }, []);

            const GetCart=()=>{
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
          if(response.data.Data.length>0)
          {
            navigate("/Cart")
          }
          else{
            alert("سبد شما خالی می یاشد")
          }
                }
                else{
                  alert("سبد شما خالی می یاشد")
                  console.log(response.data.result)
          
                }})
              .catch(function (error) {
                console.log(777)
                console.log(error);
      
                console.log(error);
              });
        
        
            }
    return(
   <Container fluid className="pd0" style={{padding:0}}>
    <div className="topBar">
        <Container>
            <Row className="responsiveFlex">
                <Col md={6} className="text-right responsiveFlexCol">
                <div className="d-flex align-items-center">
                    <Phone/>
                    <p className="topBarText">
                  بخش فروش : 86052 - 021
                    </p>
                </div>
                </Col>
                <Col md={6} className="topBarLeft responsiveFlexCol">
                    
                    <Telegram className="topBarIcon"/>
                    <Whatsapp className="topBarIcon"/>
                    <Instagram className="topBarIcon"/>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="grayBar">
        <Container className="grayBarContainer">
            <Link to={"/"}>
        <img src={Logo} className="logo"/>
            
            </Link>
        <div className="searchDiv">

            <input onChange={(e)=>{_handleKeyDownAuto(e.target.value)}} className="searchInput" placeholder="نام محصول یا برند مورد نظر را جستجو کنید ..."/>
            <Search color="#009959"/>
        
        </div>
      
        <div className="btnBox">
            <Button onClick={()=>GetCart()} className="cartBtn">
                <Cart className="ml-1"/>
                سبد خرید
            </Button>
                {
                    localStorage.getItem("CustomerID")?
            <Button onClick={()=>navigate("/EditProfile")} className="profileBtn">
                <Profile/>

                    داشبورد
            </Button>
                    :
                    <Button onClick={()=>navigate("/Login")} className="profileBtn">
                    <Profile/>
                     ورود / عضویت
                    </Button>

                }
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel defaultValue={10} id="demo-simple-select-label">زبان</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         className="languageSelect"
          label="Age"
          value={10}
          
        >
          <MenuItem value={10}>
            <img src={Iran} className="flag"/>
            <span className="flagName">
                فارسی
            </span>
          </MenuItem>
          <MenuItem value={20}>
          <img src={England} className="flag"/>
            <span className="flagName">
                انگلیسی
            </span>
          </MenuItem>
          <MenuItem value={30}>
            <img src={Iran} className="flag"/>
            <span className="flagName">
                عربی
            </span>
          </MenuItem>
          <MenuItem value={40}>
          <img src={England} className="flag"/>
            <span className="flagName">
                فرانسوی
            </span>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        </Container>
        <Container className="grayBarContainerResponsive">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center' ,marginTop:15}}>
            <Link to={"/"}>
        <img src={Logo} className="logo"/>
            
            </Link>
            <div className="btnBox justify-content-end">
            <Button onClick={()=>GetCart()} className="cartBtnResponsive">
                <Cart className="ml-1"/>
                
            </Button>
                {
                    localStorage.getItem("CustomerID")?
            <Button onClick={()=>navigate("/EditProfile")} className="profileBtnResponsive">
                <Profile/>

                    
            </Button>
                    :
                    <Button onClick={()=>navigate("/Login")} className="profileBtnResponsive">
                    <Profile/>
                    
                    </Button>

                }
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">زبان</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         className="languageSelect"
          label="Age"
          
        >
          <MenuItem value={10}>
            <img src={Iran} className="flag"/>
            <span className="flagName">
                فارسی
            </span>
          </MenuItem>
          <MenuItem value={20}>
          <img src={England} className="flag"/>
            <span className="flagName">
                انگلیسی
            </span>
          </MenuItem>
          <MenuItem value={30}>
            <img src={Iran} className="flag"/>
            <span className="flagName">
                عربی
            </span>
          </MenuItem>
          <MenuItem value={40}>
          <img src={England} className="flag"/>
            <span className="flagName">
                فرانسوی
            </span>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
        
            </div>
      <br/>
      <div className="searchDiv">

<input onChange={(e)=>{setSearch(e.target.value);_handleKeyDownAuto()}} className="searchInput" placeholder="نام محصول یا برند مورد نظر را جستجو کنید ..."/>
<Search color="#009959"/>

</div>
        </Container>
    </div>
    <div>
            <ul class="suggestions">
             {
               auto ?
auto.map((item)=>{
  return(
            <li className="suggestions li" 
            onClick={()=>navigate("/SingleProduct/"+item.Name2)}

            >
                  <p>
                    {item?.Name}
                  </p>
                </li>

  )
})
               :
               null
             }
           
                
</ul>
  </div>
    <div className="whiteBar">
        <Button className="topBarBtn" onClick={onClick}>
            <img className="btnImg" 
            src={M1B}
            
            />
            <br/>
            <span>محصولات</span>
        </Button>
        
        <Button onClick={()=>navigate("/SmartFarming")} className="topBarBtn">
            <img src={M2B} className="btnImg"/>
            <br/>
            <span>کشاورزی هوشمند</span>
        </Button>
        <Button onClick={()=>navigate("/Consultation")} className="topBarBtn">
            <img src={M3B} className="btnImg"/>
            <br/>
            <span>مشاوره کشاورزی</span>
        </Button>
        <Button onClick={()=>navigate("/News")} className="topBarBtn">
            <img src={M4B} className="btnImg"/>
            <br/>
            <span>اخبار و اعلانات</span>
        </Button>
    </div>
    {showMega ?
        <div className="storeMenu">
               <div className="d-flex ">
                {
                  data?.map((item)=>{
                    return(

                <Button onClick={()=>{GetGroup(item?.MainGroupID);setGroupShow(!groupShow)}}>
                {item.MainTitle}
                </Button>
                    )
                  })
                }
              
               </div>
            </div> :null}
            {
              groupShow?
              <div className="storeMenu" style={{display:'flex',flexWrap:'wrap'}}>
               <ul className="menuList">
              <Link className="a2 link" to={Object.values(group).length>0?  "/GroupProduct/"+Object?.values(group)[0][0]?.GroupTitle2:"/GroupProduct/2"} >  {Object?.values(group)[0]?  Object?.values(group)[0][0]?.GroupTitle:null}</Link>
                {
                 Object.values(group)?.map((item)=>{
                    return(
                 
              <li                           >
                <Link className="a1 link" to={"/SubGroup/"+item[0].Title2}>

{item[0]?.Title}         
                </Link>
     </li>
             
             
             )
            })
          }
          </ul>
             

</div>
              :
              null
            }
   </Container>
    );
};
export default Header;