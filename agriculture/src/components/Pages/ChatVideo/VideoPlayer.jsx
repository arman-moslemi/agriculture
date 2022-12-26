import React, { useContext ,useEffect,useState} from 'react';
import {Grid, Typography, Paper,Fab} from '@material-ui/core';
import { SocketContext } from '../../../SocketContext';
import Loader from "./Loader";
import dial from 'src/components/assets/audio/dial.mp3';

const VideoPlayer = () => {
    const {me,callAccepted, userVideo, myVideo, callEnded, stream, call, myAudioRef} = useContext(SocketContext);
    // const [second, setSeconds] = useState(0);

//     useEffect(() => {
//    if(     callAccepted && !callEnded)
// {
//     setInterval(() => {
// setSeconds(second + 1);
// console.log(second)

//     }, 1000);
// }
     
  
//       }, [second]);
    return ( 
        <Grid container spacing={2} className={callAccepted ? 'call-accepted d-flex align-items-center justify-content-center video-container p-0 p-md-5' : 'd-flex align-items-center justify-content-center video-container p-0 p-md-5'}>  
            {/* our own video */}
            {stream &&(
                <Grid item xs={12} md={6} className={!callAccepted ? 'me-grid' : ''}>
                    <Paper className="video-paper">
                        <Typography varient="h5" gutterBottom className="text-center">
                            {me != null && Object.keys(me).length > 0 ? `You(${me.fname} ${me.lname})` : <Loader width="50" />}
                        </Typography>
                        <video controls playsInline muted ref={myVideo} autoPlay className="w-100" />
                        <audio muted autoPlay loop ref={myAudioRef} className="d-none">
                            <source src={dial} type="audio/mpeg" />
                        </audio>
                    </Paper>
                </Grid>    
            )}
            {/* user's video */}
            {callAccepted && !callEnded && (
                <Grid item xs={12} md={6}>
                    <Paper className="video-paper">
                        <Typography varient="h5" gutterBottom className="text-center">
                        {call.from || call.to}
                        </Typography>
                        <video controls playsInline muted ref={userVideo} autoPlay className="w-100" />
                    </Paper>
                </Grid>   
          )} 
          {/* <Fab color="primary" aria-label="add">
{second}
</Fab>  */}
        </Grid>
    );
}
 
export default VideoPlayer;