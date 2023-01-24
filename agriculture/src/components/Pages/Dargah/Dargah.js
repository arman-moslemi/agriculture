import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "src/components/assets/img/login.png";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dargah = () =>{
    const params = useParams().id;

    const VerifyClick=()=>{
        // var frm = document.getElementById('myfrm');
        // frm.submit();
        const axios = require("axios");
      
    
        axios.post("https://bpm.shaparak.ir/pgwchannel/startpay.mellat",{RefId:params})
        .then(function (response) {
            console.log(555)
            console.log(response)
          if (response.data.result == "True") {


        }})
        .catch(function (error) {
          console.log(777)
          console.log(error);

          console.log(error);
        });
    }
    useEffect(() => {
        VerifyClick();

      }, []);
    return(
        <Container className="loginBody" fluid>
        <div  className="loginBox">
        {/* <form onSubmit={()=>VerifyClick()} action="https://bpm.shaparak.ir/pgwchannel/startpay.mellat" method="post" target="_self" id="myfrm"> */}
        {/* <input type="hidden" name="RefId" value="{{$refId}}"> */}
            {/* <input type="hidden" name="RefId" value="F08C77EECE66353D"/>
<button />
        </form> */}
     
     </div>
     {/* <p>sallllm</p> */}
     </Container>
    );
};
export default Dargah;