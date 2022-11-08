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

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setUserInfo({});
      setMessage({});
      setLoading(false);
    };
  }, []);

  const handleChange = (e) => {
    let newInfo = { ...userInfo };
    newInfo[e.target.name] = e.target.value;
    const info = { ...newInfo };
    setUserInfo(info);
    checkValidations(e);
    let newMsg = { ...message };
    if (newInfo[e.target.name] !== null || newInfo[e.target.name] !== "") {
      delete newMsg[e.target.name];
    }
    setMessage(newMsg);
  };

  const checkValidations = () => {
    return new Promise(function (resolve, reject) {
      let error = 0;
      const userInfoLength = Object.entries(userInfo).length;
      const { username, password } = userInfo;
      let newMsg = { ...message };

      if (userInfoLength === 0 || username === null || username === "") {
        newMsg["username"] = "نام کاربری را وارد کنید.";
        error += 1;
      }
      if (userInfoLength === 0 || password === null || password === "") {
        newMsg["password"] = "رمز عبور را وارد کنید.";
        error += 1;
      }
      setMessage(newMsg);
      resolve(error);
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage({});
    checkValidations().then((resp) => {
      setLoading(false);
      if (resp === 0) {
        try {
          axios
            .post(
              `${config.WEBRTC_api}/${config.base}/${config.login_api}`,
              userInfo
            )
            .then((response) => {
              const { status, data } = response;
              if (status === 200) {
                localStorage.setItem("token", data.accessToken);
                localStorage.setItem("user_id", data.user_id);
                navigate("/VideoChat");
              } else console.log("error");
              setUserInfo({});
            })
            .catch(({ response }) => {
              if (response.status === 401) {
                let newMsg = { ...message };
                newMsg["not_authorized"] = "نام کاربری یا رمز عبور اشتباه است.";
                setMessage(newMsg);
              }
            });
        } catch (e) {
          console.log(e);
        }
      }
    });
  };

  return (
    <Grid
      container
      spacing={2}
      className="d-flex align-items-center justify-content-center login-container rtl"
    >
      <Grid item xs={12} md={6} className="rtl d-flex justify-content-center">
        <form autoComplete="off" className="login-form">
          <Box mb={3}>
            <Typography color="textPrimary" variant="h4">
              ورود به سیستم
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
              className="mt-4"

            >
              سیستم تماس تصویری
            </Typography>
          </Box>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <AccountCircleIcon />
              <span className="me-1" style={{fontFamily:'IRANSans'}}>نام کاربری</span>
            </label>
            <input
            style={{fontFamily:'IRANSans'}}
              type="text"
              name="username"
              className={
                message.username ? "input-danger form-control" : "form-control"
              }
              id="username"
              value={userInfo.username || ""}
              onChange={(e) => handleChange(e)}
            />
            {message.username && (
              <span className="text-danger">{message.username}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"style={{fontFamily:'IRANSans'}}>
              <LockIcon />
              <span className="me-1"style={{fontFamily:'IRANSans'}}>رمز عبور</span>
            </label>
            <input
            style={{fontFamily:'IRANSans'}}
              type="password"
              name="password"
              className={
                message.password ? "input-danger form-control" : "form-control"
              }
              id="password"
              value={userInfo.password || ""}
              onChange={(e) => handleChange(e)}
            />
            {message.password && (
              <span className="text-danger">{message.password}</span>
            )}
          </div>
          <Box my={2}>
            {loading ? (
              <Loader width="50" />
            ) : (
              <Button
              style={{fontFamily:'IRANSans'}}
                color="primary"
                fullWidth
                size="large"
                type="button"
                variant="contained"
                onClick={() => handleSubmit()}
              >
                ورود
              </Button>
            )}
          </Box>
          {message.not_authorized && (
            <AlertBox severity="error" className="rtl mt-4">
              <div>{message.not_authorized}</div>
            </AlertBox>
          )}
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="text-center">
          <img src={LoginImg} alt="login" className="login-img" style={{width:'100%'}} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
