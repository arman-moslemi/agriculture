import React, { useEffect, useState } from "react";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import LoginImg from "src/components/assets/img/login3.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import axios from "axios";
import config from "../../../config.json";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import AlertBox from "./AlertBox";
import { apiUrl ,apiAsset} from "../../../commons/inFormTypes";
import { useLocation,useSearchParams,useParams } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});
  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    handleSubmit()
  }, []);




  const handleSubmit = async () => {
 
   
         
             await   localStorage.setItem("user_id", id);

                const axios = require("axios");
                var ss= localStorage.getItem("CustomerID")
                axios.post(apiUrl + "SetLoginChat",{id:id})
                .then(function (response) {
                  if (response.data.result == "True") {
                    console.log(8768)
                    console.log(response.data)
                  localStorage.setItem("cons_id",response.data.Data2?.id);
                  localStorage.setItem("cons_fname",response.data.Data2?.fname);
                  localStorage.setItem("cons_lname",response.data.Data2?.lname);
                  axios.post(apiUrl + "SetSMSChat",{id:id})
                  .then(function (response) {
              
             
                      navigate("/VideoChat");
                 
                      //   navigate("/VideoChat")
                      })
                      .catch(function (error) {                   
                          console.log(error);
                      });
  
                 
               
                    //   navigate("/VideoChat")
                    }})
                    .catch(function (error) {                   
                        console.log(error);
                    });

                  
            
         
     
      
    };


  return (
    <div></div>
  
  );
};

export default Login;
