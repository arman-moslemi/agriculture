import React,{ useContext} from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import { SocketContext} from '../../../SocketContext';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

const Options = ({children}) => {
    const {endCall, callAccepted, callEnded, call, handleCameraToggle, handleMicToggle, micStatus, cameraStatus,modal,setModal,modalRate,setModalRate} = useContext(SocketContext);
    return ( 
        <>
        {callAccepted && !callEnded && (
            <Container>
                <Grid container className="justify-content-center">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item xs={12} md={4} className="option-structure mt-3 mt-md-0">
                            {(!micStatus || !cameraStatus) && 
                                <Paper elevation={10} className="option-paper p-3 text-center">
                                    {!cameraStatus && <VideocamOffIcon className="text-danger" /> }
                                    {!micStatus && <MicOffIcon className="text-danger" /> }
                                </Paper>
                            }
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item xs={12} md={4} className="option-structure mt-3 mt-md-0">
                            <Paper elevation={10} className="option-paper p-3 text-center">
                                <button onClick={()=>endCall(call.otherParty)} className="btn btn-danger rounded-circle rounded-padding me-3" autoFocus>
                                    <PhoneDisabledIcon />
                                </button>
                                <button onClick={()=>handleMicToggle()} className="btn btn-primary rounded-circle rounded-padding me-3" autoFocus>
                                    <MicOffIcon />
                                </button>
                                <button onClick={()=>handleCameraToggle()} className="btn btn-warning rounded-circle rounded-padding" autoFocus>
                                    <VideocamOffIcon />
                                </button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                {children}

             
            </Container>
        )}
        </>
     );
}
 
export default Options;