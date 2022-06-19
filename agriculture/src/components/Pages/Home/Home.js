import {React ,useState } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import Header from "src/components/Pages/Layouts/Header";
import Footer from "src/components/Pages/Layouts/Footer";
const Home = () =>{
   
    return(
   <div style={{backgroundColor:'#f4f4f4',height:'100vh'}}>
   <Header/>
    <Footer/>
   </div>
    );
};
export default Home;