import React, { useContext } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { SocketContext} from '../../../SocketContext';
import AlertBox from './AlertBox';
import notif from 'src/components/assets/audio/notif.mp3';

const Notifications = () => {
    const {call, callAccepted, answerCall, callEnded, leaveCall, userAudioRef} = useContext(SocketContext);
    return ( 
        <>
        {call.isRecievedCall && !callAccepted && !callEnded && (
            <>
                <audio muted loop autoPlay ref={userAudioRef} className="d-none">
                    <source src={notif} type="audio/mpeg" />
                </audio>
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                    <AlertBox severity="success" className="d-flex flex-row align-items-center justify-content-between rtl">
                        <div>
                        {call.from} در حال تماس است
                            <button  className="btn btn-outline-success rounded-circle rounded-padding me-5 ms-1" autoFocus onClick={answerCall}>
                                <span>
                                    <CheckIcon />
                                </span>
                            </button>
                            <button className="btn btn-outline-danger rounded-circle rounded-padding" onClick={()=>leaveCall(call.otherParty)}>
                                <span>
                                    <CloseIcon />
                                </span>
                            </button>
                        </div>
                    </AlertBox>
                </div>   
            </>
        )} 
        </>
     );
}
 
export default Notifications;