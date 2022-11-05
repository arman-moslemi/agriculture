import React, { useContext } from "react";
import { SocketContext } from "../../../SocketContext";
import VideoPlayer from "./VideoPlayer";
import Options from "./Options";
import Notifications from "./Notifications";
import UsersListGrid from "./UsersList";
import TopBar from "./TopBar";

const VideoCall = () => {
  const { usersList, showUsersList } = useContext(SocketContext);
// console.log(showUsersList)
  return (
    <>
      <TopBar />
      <VideoPlayer />
      <Notifications />
      <Options />
      {usersList.length > 0 && showUsersList && <UsersListGrid />}
    </>
  );
};

export default VideoCall;
