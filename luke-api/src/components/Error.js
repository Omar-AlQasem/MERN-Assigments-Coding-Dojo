import React from 'react';
import obiWan from './obiWan.jpg'

const Error = props => {
    const { error } = props;


    return (
        <div>
            <h2><i><b>{error}</b></i></h2>
            <img src={obiWan} alt="ObiWan" />
        </div>
    )
}


export default Error;