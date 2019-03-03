import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import logo from '../svgs/logo.svg'


class NavBar extends Component{

    componentDidMount(){
        const hamburger = document.querySelector('.hamburger')
        const navLinks = document.querySelector('.nav-links')
        const entriesLink = document.querySelector('#entriesLink')
        if(hamburger){
        // hamburger.addEventListener('click', e => {
        //     e.currentTarget.classList.toggle('is-active')

            // navLinks.classList.toggle('active')
        // })

        entriesLink.addEventListener('click', e => {
            hamburger.classList.toggle('is-active')
            navLinks.classList.toggle('active')
        })
        }
    }

    render(){
        if (this.props.isAuthenticated) {
            return null;
        }

        return (
            <nav>
            <Link to ="/"><img src={logo} alt="Logo" className="logo"/></Link>
            <img src="./images/logo-with-bg.png" alt="Logo for preview" id = "hidden-logo"/>
            <button className="hamburger hamburger--collapse" type="button" aria-label="Mobile Menu">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
            <ul className="nav-links">
                {/* <li><Link to = '/journal'>Journal</Link></li> */}
                <li><a href="https://twitter.com/onelineadayhq">Help</a></li>
                <li><a href="https://twitter.com/onelineadayhq">Get The App</a></li>
                <li><Link to = '/entries' id = 'entriesLink'>Entries</Link></li>
                <div className="login-container">
                    <Link to = '/' onClick = {() => {
                            this.props.signOut()
                        }}>Log Out</Link>
                </div>
            </ul>
        </nav>
        );
    }
}

export default NavBar;
