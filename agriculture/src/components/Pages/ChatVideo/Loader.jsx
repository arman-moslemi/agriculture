import React from 'react';
import loaderImage from 'src/components/assets/img/loader.gif';

const Loader = (props) => {
    return ( 
        <div className="d-flex align-content-center justify-content-center text-center">
            <img src={loaderImage} alt="loader" {...props} />
        </div>
    );
}
 
export default Loader;