import React from 'react';
import Loader from 'src/components/assets/images/spinner.gif';

const CompleteLoader = () => {
    return ( 
        <div className="w-100 bg-white">
            <img src={Loader} alt="loader" />
        </div>
    );
}
 
export default CompleteLoader;