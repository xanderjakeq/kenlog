import React, { Component } from 'react';


const Journal = (props) => {

    if (props.isAuthenticated) {
        return null;
      }

    return (
        <div>
           <p>Journalsdfasdfasd</p>
        </div>
    );
}

export default Journal;
