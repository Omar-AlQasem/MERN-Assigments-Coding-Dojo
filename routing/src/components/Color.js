import React from 'react';

const Color = props => {
    return (
        <div style={{backgroundColor:props.BackgroundColor, color:props.TextColor}}>
            {isNaN(props.input) ? <h1>The word is: {props.input}</h1> : <h1>The number is: {props.input}</h1>}
        </div>
    )
}

export default Color;