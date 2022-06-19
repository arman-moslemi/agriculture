import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
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
const Header = () =>{
    const [green, setGreen] = useState(false);
    return(
   <Container fluid className="pd0" style={{padding:0}}>
    <div className="topBar">
        <Container>
            <Row>
                <Col md={6} className="text-right">
                <div className="d-flex align-items-center">
                    <Phone/>
                    <p className="topBarText">
                  بخش فروش : 86052 - 021
                    </p>
                </div>
                </Col>
                <Col md={6} className="topBarLeft">
                    
                    <Telegram className="topBarIcon"/>
                    <Whatsapp className="topBarIcon"/>
                    <Instagram className="topBarIcon"/>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="grayBar">
        <Container className="grayBarContainer">
        <img src={Logo} className="logo"/>
        <div className="searchDiv">
            <input className="searchInput" placeholder="نام محصول یا برند مورد نظر را جستجو کنید ..."/>
            <Search color="#009959"/>
        </div>
        <div className="btnBox">
            <Button className="cartBtn">
                <Cart className="ml-1"/>
                سبد خرید
            </Button>
            <Button className="profileBtn">
                <Profile/>
                ورود / عضویت
            </Button>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">انتخاب زبان</InputLabel>
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
        </Container>
    </div>
    <div className="whiteBar">
        <Button className="topBarBtn">
            <img className="btnImg" 
            src={M1B}
            
            />
            <br/>
            <span>محصولات</span>
        </Button>
        <Button className="topBarBtn">
            <img src={M2B} className="btnImg"/>
            <br/>
            <span>کشاورزی هوشمند</span>
        </Button>
        <Button className="topBarBtn">
            <img src={M3B} className="btnImg"/>
            <br/>
            <span>مشاوره کشاورزی</span>
        </Button>
        <Button className="topBarBtn">
            <img src={M4B} className="btnImg"/>
            <br/>
            <span>اخبار و اعلانات</span>
        </Button>
    </div>
   </Container>
    );
};
export default Header;