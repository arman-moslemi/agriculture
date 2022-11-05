import React from 'react';
import Alert  from '@material-ui/lab/Alert';

const AlertBox = (props) => {
    return ( 
        <Alert  elevation={6} {...props} />
     );
}
 
export default AlertBox;