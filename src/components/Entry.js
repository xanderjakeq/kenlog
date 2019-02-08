import React, { Component } from 'react';


const Entry = (props) => {

    return (
        <div className = "entry">
           <p>{props.text}</p>
        </div>
    );
}

export default Entry;
