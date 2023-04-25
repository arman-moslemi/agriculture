import React, { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import Peer from "simple-peer";
import config from "./config.json";

const SocketContext = createContext();
const socket = io(config.WEBRTC_api);

const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState({});
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [openCallDialog, setOpenCallDialog] = useState(false);
  const [showUsersList, setShowUsersList] = useState(true);
  const [videoInputs, setVideoInputs] = useState([]);
  const [selectedVideoInput, setSelectedVideoInput] = useState("");
  const [micStatus, setMicStatus] = useState(true);
  const [cameraStatus, setCameraStatus] = useState(true);
  const [modal, setModal] = useState(false);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const myAudioRef = useRef();
  const userAudioRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((str) => {
        setStream(str);
        if (myVideo.current) {
          myVideo.current.srcObject = str;
        }
      });

    socket.emit("allUsersList", userId);
    socket.on("allUsersList", (users) => {
      setUsersList(users);
    });

    socket.emit("getMe");
    socket.on("getMe", (info) => {
      setMe(info);
    });

    socket.on("reloadOtherParty", () => {
      socket.emit("getMe");
      socket.emit("allUsersList", userId);
      window.location.reload();
    });

    socket.on("callRequest", ({ otherParty, from, signal }) => {
      setCall({ isRecievedCall: true, otherParty, from, signal });
      setCallEnded(false);
      if (userAudioRef.current) {
        console.log(userAudioRef.current);
        userAudioRef.current.muted = false;
      }
    });
    socket.on("callEnded", (status) => {
      setCallEnded(status);
//       const axios = require("axios");

//       axios.post("https://admin.gsmartnet.com/api/VideoEnd",{id:userId})
//       .then(function (response) {
//  console.log(666)
//  console.log(response)
//             }
     
//      )
//       .catch(function (error) {
//         console.log(error);
//       });
      window.location.reload();
    });

    return () => {
      setStream(null);
      setMe({});
      setCall({});
      setCallAccepted(false);
      setCallEnded(false);
      setUsersList([]);
      setOpenCallDialog({});
      setShowUsersList(true);
      setVideoInputs([]);
      setSelectedVideoInput("");
      // socket.disconnect();
    };
  }, []);

  const answerCall = () => {
    userAudioRef.current.muted = true;
    setCallAccepted(true);
    setShowUsersList(false);
    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("callAnswer", {
        otherParty: { clientId: call.otherParty },
        signal: data,
      });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
      userVideo.current.muted = false;
    });
    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const callUser = (id) => {
    setOpenCallDialog(true);
    myAudioRef.current.muted = false;
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("callRequest", {
        otherParty: {
          clientId: id,
        },
        from: `${me.fname} ${me.lname}`,
        signalData: data,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
      userVideo.current.muted = false;
    });
    socket.on("callAccepted", (signal) => {
      myAudioRef.current.muted = true;
      setCallAccepted(true);
      setOpenCallDialog(false);
      setCallEnded(false);
      setShowUsersList(false);
      peer.signal(signal);
    });

    connectionRef.current = peer;
    console.log(connectionRef.current);
  };

  const leaveCall = (clientId) => {
    if (userAudioRef.current) {
      userAudioRef.current.muted = true;
    }
    if (myAudioRef.current) {
      myAudioRef.current.muted = true;
    }
    socket.emit("callEnded", {
      otherParty: { clientId },
    });
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
//           const axios = require("axios");
//           const userId = localStorage.getItem("user_id");

//       axios.post("https://admin.gsmartnet.com/api/VideoEnd",{id:userId})
//       .then(function (response) {
//  console.log(666)
//  console.log(response)
//  localStorage.setItem("user_id", "");

//  localStorage.setItem("cons_id","");
//  localStorage.setItem("cons_fname","");
//  localStorage.setItem("cons_lname","");
//  navigate("/")
//             }
     
//      )
//       .catch(function (error) {
//         console.log(error);
//       });
  };

  const logout = () => {
    if (connectionRef.current) {
      const clientId = call.otherParty;
      socket.emit("reloadOtherParty", {
        otherParty: { clientId },
      });
      socket.disconnect();
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    window.location.reload();
    navigate("/login");
  };

  const endCall = (clientId) => {
    if (userAudioRef.current) {
      userAudioRef.current.muted = true;
    }
    if (myAudioRef.current) {
      myAudioRef.current.muted = true;
    }
    socket.emit("callEnded", {
      otherParty: { clientId },
    });
    setCallAccepted(false);
    setCallEnded(true);
    setShowUsersList(true);
    connectionRef.current.destroy();
    window.location.reload();
    setModal(true)

  };

  const handleMicToggle = () => {
    setMicStatus(!stream.getAudioTracks()[0].enabled);
    stream.getAudioTracks()[0].enabled = !stream.getAudioTracks()[0].enabled;
  };

  const handleCameraToggle = () => {
    setCameraStatus(!stream.getVideoTracks()[0].enabled);
    stream.getVideoTracks()[0].enabled = !stream.getVideoTracks()[0].enabled;
    // if(!stream.getVideoTracks()[0].enabled==false){

    // }
  };


  const value = {
    call,
    callAccepted,
    myVideo,
    userVideo,
    stream,
    openCallDialog,
    showUsersList,
    name,
    usersList,
    setName,
    callEnded,
    me,
    callUser,
    leaveCall,
    answerCall,
    setCall,
    endCall,
    videoInputs,
    selectedVideoInput,
    logout,
    handleCameraToggle,
    handleMicToggle,
    micStatus,
    cameraStatus,
    myAudioRef,
    userAudioRef,
 
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
