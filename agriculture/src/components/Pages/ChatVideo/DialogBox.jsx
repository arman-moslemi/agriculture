import React, { useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import Avatar from 'src/components/assets/img/avatar.png';
import Spinner from 'src/components/assets/img/spinner1.gif';
import { SocketContext } from '../../../SocketContext';

const DialogBox = ({open, handleClose, otherPartyInfo}) => {
  
  const {handleCameraToggle, handleMicToggle} = useContext(SocketContext);
  const {fullName, clientId} = otherPartyInfo;
console.log(888)
console.log(open)
    return ( 
        <Dialog
        open={open==true?open:false}
        onClose={handleClose}
        fullWidth={true}
        maxWidth='xs'
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="p-5">
          <DialogContentText id="alert-dialog-description" className="text-center">
            <img src={Avatar} alt="avatar" width="200" />
            <div className="mt-5 text-dark">
              <span className="fw-bold">در حال تماس با {fullName}</span>  
              <img src={Spinner} alt="spinner" width="30" className="spinner" />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="justify-content-center mb-3">
          <button onClick={()=>handleClose(clientId)} className="btn btn-danger rounded-circle rounded-padding" autoFocus style={{margin:15}}>
            <PhoneDisabledIcon />
          </button>
          <button onClick={()=>handleMicToggle()} className="btn btn-primary rounded-circle rounded-padding" autoFocus  style={{margin:15}}>
            <MicOffIcon />
          </button>
          <button onClick={()=>handleCameraToggle()} className="btn btn-warning rounded-circle rounded-padding" autoFocus style={{margin:15}}>
            <VideocamOffIcon />
          </button>
        </DialogActions>
      </Dialog>
     );
}
 
export default DialogBox;
