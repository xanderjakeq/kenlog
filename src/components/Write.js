import React, { Component } from 'react';


const Write = (props) => {

    if (props.isAuthenticated) {
        return null;
      }

    return (
        <div>
            {/* <p contentEditable = "true" id = "onelineText" onChange = {props.handleChange} data-name = "onelineText">{props.value === ''? 'How are you feeling today?' : props.value}</p> */}
            <textarea name = 'onelineText' onChange = {props.handleChange} placeholder = 'How are you doing today?' id = 'onelineTextArea'></textarea>
        </div>
    );
}

export default Write;
