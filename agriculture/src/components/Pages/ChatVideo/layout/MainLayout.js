import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../../../../SocketContext";
import VideoCall from "../VideoCall";

const MainLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");
    if ( userId) navigate("/VideoChat");
    else navigate("/login");
  }, []);

  return (
    <ContextProvider>
      <VideoCall />
    </ContextProvider>
  );
};

export default MainLayout;
