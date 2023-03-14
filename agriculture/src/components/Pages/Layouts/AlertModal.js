import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            left: 0,
            top: 8,
            color:'#ff004e',
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  // const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    // setOpen(true);
  };
  const handleClose = () => {
    // setOpen(false);
    props.setOpen(false)
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        هشدار
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          پیام!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
{
  props.Title
}          </Typography>

        </DialogContent>
        {
          props.Delete?
       <DialogActions>
          <Button autoFocus onClick={props.DeleteAction} style={{color:"red"}}>
           حذف
          </Button>
        </DialogActions> 
          :
          null
        }
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            بازگشت به عقب
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
