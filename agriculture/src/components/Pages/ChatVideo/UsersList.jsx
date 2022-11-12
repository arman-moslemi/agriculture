import React, { useContext, useState ,useEffect} from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MessageIcon from "@material-ui/icons/Message";
import VideocamIcon from "@material-ui/icons/Videocam";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { SocketContext } from "../../../SocketContext";
import DialogBox from "./DialogBox";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const UsersListGrid = () => {
  const { usersList, callUser, leaveCall, openCallDialog, call, setCall } =
    useContext(SocketContext);
  const [otherPartyInfo, setOtherPartyInfo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds(seconds => seconds + 1);

        callActionStart()
      
          }, 3000);
  }, []);
  const columns = [
    {
      field: "status",
      headerName: "وضعیت",
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <IconButton
            style={{ color: "clientId" in cellValues.row ? "green" : "gray" }}
          >
            <FiberManualRecordIcon />
          </IconButton>
        );
      },
    },
    {
      field: "id",
      headerName: "ردیف",
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
    },
    {
      field: "fname",
      headerName: "نام",
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <span>
            {cellValues.row.fname !== null ? cellValues.row.fname : "---"}
          </span>
        );
      },
    },
    {
      field: "lname",
      headerName: "نام خانوادگی",
      editable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <span>
            {cellValues.row.lname !== null ? cellValues.row.lname : "---"}
          </span>
        );
      },
    },
    {
      field: "national_code",
      headerName: "کدملی",
      editable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <span>
            {cellValues.row.national_code !== null
              ? cellValues.row.national_code
              : "---"}
          </span>
        );
      },
    },
    {
      field: "username",
      headerName: "نام کاربری",
      editable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <span>
            {cellValues.row.username !== null ? cellValues.row.username : "---"}
          </span>
        );
      },
    },
    {
      field: "mobile",
      headerName: "موبایل",
      editable: false,
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <span>
            {cellValues.row.mobile !== null ? cellValues.row.mobile : "---"}
          </span>
        );
      },
    },
    {
      field: "actions",
      headerName: "اقدامات",
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return cellValues.id != localStorage.getItem("user_id") ? (
          <IconButton
            color="primary"
            component="span"
            onClick={() => callAction(cellValues.row)}
          >
            <CallIcon />
            <VideocamIcon />
          </IconButton>
        ) : (
          <IconButton color="primary"
          component="span"
          onClick={() => callAction(cellValues.row)}>
              <MessageIcon />
          </IconButton>
          );
        }
    },
    {
      field: "end",
      headerName: "انمام گفتگو",
      flex: 1,
      headerAlign: "center",
      align: "center",
      headerClassName: "iran-sans",
      cellClassName: "iran-sans",
      renderCell: (cellValues) => {
        return (
          <IconButton color="red"
          component="span"
          onClick={() => callEnd(cellValues.row)}>
              <MessageIcon />
          </IconButton>
          );
        }
    },
  ];

  const callActionStart = () => {
  // if(  usersList.length > 0 ){

  //   window.location.reload();
  // }
    const userId = localStorage.getItem("user_id");
    const consId = localStorage.getItem("cons_id");
    const consfname = localStorage.getItem("cons_fname");
    const conslname = localStorage.getItem("cons_lname");
    callUser(consId, userId);
    // setOtherPartyInfo({ fullName: `${fname} ${lname}`, clientId });
    setOtherPartyInfo({ fullName: `${consfname} ${conslname}`,clientId: consId });
    const callInfo = { ...call, to: `${consfname} ${conslname}`, otherParty: consId };
    setCall(callInfo);
  };
  const callAction = (info) => {
    const { clientId, fname, lname, userId } = info;
    callUser(clientId, userId);
    setOtherPartyInfo({ fullName: `${fname} ${lname}`, clientId });
    const callInfo = { ...call, to: `${fname} ${lname}`, otherParty: clientId };
    setCall(callInfo);
  };
  const callEnd = (info) => {
    const { clientId, fname, lname, userId } = info;
    const userIds = localStorage.getItem("user_id");
    const axios = require("axios");

    axios.post("https://admin.gsmartnet.com/api/VideoEnd",{id:userIds})
    .then(function (response) {
console.log(666)
console.log(response)
navigate("/login");
          }
   
   )
    .catch(function (error) {
      console.log(error);
    });

  };

  
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="p-0 p-md-5 rtl"
    >
      {/* <div className="row">
          <input className="form-control" />
        <IconButton color="primary"
          component="span"
          // onClick={() => callAction(cellValues.row)}
          >
              <MessageIcon />
          </IconButton>
      </div> */}
      {/* <div className="users-list-title mt-5 mt-md-0">
        <Typography variant="h5" className="text-center mb-5 title">
          لیست کاربران
        </Typography>
      </div>
      <Grid item sm={12} md={12} className="w-100">
        <Paper elevation={3}>
          <div
            className="text-center table-responsive"
            style={{ height: "80vh", width: "100%" }}
          >
            {usersList.length > 0 ? (
              <DataGrid
                rows={usersList.length > 0 && usersList}
                columns={columns}
                pageSize={20}
                checkboxSelection
                disableSelectionOnClick
                disableColumnMenu={true}
              />
            ) : (
              <Loader className="mt-5" width="100" />
            )}
          </div>
        </Paper>
      </Grid> */}
      <DialogBox
        open={openCallDialog}
        handleClose={leaveCall}
        otherPartyInfo={otherPartyInfo}
      />
    </Grid>
  );
};

export default UsersListGrid;
