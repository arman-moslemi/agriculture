import {React ,useState,useEffect } from "react";
import { Container, Row ,Col ,Button} from "react-bootstrap";
import LoginImg from "src/components/assets/img/login.png";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dargah = () =>{
    // const params = useParams().id;
    const {state} = useLocation();

    const VerifyClick=()=>{
        // var frm = document.getElementById('myfrm');
        // frm.submit();
        const axios = require("axios");
      
    
        axios.post("https://bpm.shaparak.ir/pgwchannel/startpay.mellat",{RefId:state?.id})
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
    // useEffect(() => {
    //     VerifyClick();

    //   }, []);
    return(
        // <Container className="loginBody" fluid>
        <div >
        <form  action="https://bpm.shaparak.ir/pgwchannel/startpay.mellat" method="post" target="_self" id="myfrm"> */}
        {/* <input type="hidden" name="RefId" value="{{$refId}}">  */}
        <input type="hidden" name="RefId" value="74860D65D595A6E6"/>
<button />
        </form>
        <script>

var frm = document.getElementById('myfrm');
frm.submit();

</script>
     </div>

    //  </Container>
    );
};
export default Dargah;