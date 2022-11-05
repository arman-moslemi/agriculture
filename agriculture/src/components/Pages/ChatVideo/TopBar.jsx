import React, { useContext } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import { SocketContext } from '../../../SocketContext';

const TopBar = () => {
    const {logout} = useContext(SocketContext);
    return (  
        <div className="ms-4">
            <IconButton color="secondary" onClick={logout}>
                <ExitToAppIcon />
            </IconButton>
        </div>
    );
}
 
export default TopBar;