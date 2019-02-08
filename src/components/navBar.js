import React, { Component } from 'react';

import logo from '../svgs/logo.svg'


const NavBar = (props) => {

    if (props.isAuthenticated) {
        return null;
      }

    return (
        <nav>
        <a href="/"><img src={logo} alt="Logo" className="logo"/></a>
        <img src="./images/logo-with-bg.png" alt="Logo for preview" id = "hidden-logo"/>
        <button className="hamburger hamburger--collapse" type="button" aria-label="Mobile Menu">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
        <ul className="nav-links">
            <li><a href="https://www.apple.com/ios/app-store/">Get the App</a></li>
            <li><a href="https://twitter.com/onelineadayhq">Help</a></li>
            <div className="login-container">
                <li id="login" onClick = {props.signOut}>Log Out</li>
                {/* <ul className="client-container">
                    <li><a href="">Settings</a></li>
                    <li><a href="">Profile</a></li>
                </ul> */}
            </div>
        </ul>
    </nav>
    );
}

export default NavBar;
