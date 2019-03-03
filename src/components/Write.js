import React, { Component } from 'react';


const Write = (props) => {

    if (props.isAuthenticated) {
        return null;
      }
 {/* <p contentEditable = "true" id = "onelineText" onChange = {props.handleChange} data-name = "onelineText">{props.value === ''? 'How are you feeling today?' : props.value}</p> */}
    return (
        <div>
            <textarea name = 'onelineText' onChange = {props.handleChange} placeholder = 'How are you doing today?' id = 'onelineTextArea' value = {props.value}></textarea>
            {props.value !== '' ? <button className = "done" onClick = {props.submitLine}>Done</button> : null}
        </div>
    );
}

export default Write;
