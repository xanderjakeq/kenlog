import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';

import logo from '../svgs/logo.svg'




class Authentication extends Component {

  constructor(props){
    super(props)
    // The component's Local state.
    this.state = {
      isSignedIn: false, // Local signed-in state.
    };
  }

  componentDidMount() {
    
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    
  }


  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="form-wrapper">
          <img src={logo} alt="logo" id="logoInAuth"/>
          <h1 id="appname">Welcome to <em><strong>KenLog</strong></em></h1>
          <p>
            A place for your thoughts <span role='img' aria-label = 'monkey'>🙈</span>
          </p>
          <div className = "form">
            <div className="form-item">
              <label htmlFor="email"></label>
              <input type="email" name="email" required="required" placeholder="Email Address" onChange = {this.props.handleInputChange}></input>
            </div>
            <div className="form-item">
              <label htmlFor="password"></label>
              <input type="password" name="password" required="required" placeholder="Password" onChange = {this.props.handleInputChange}></input>
            </div>
            <div className="button-panel">
              <button onClick = {this.props.signin} className="button signup-button" title="Sign In" value="Sign In">Sign In</button>
              <button onClick = {this.props.signup} className="button login-button" title="Sign Up" value="Sign Un">Sign Up</button>
            </div>
          </div>
          <div className="form-footer">
            {/* <p><a href="#">Create an account</a></p>
            <p><a href="#">Forgot password?</a></p> */}
          </div>
        </div>
      );
    }else{
      return (      
        <div>
            {/* Return APP */}
          {/* <UserProfile/> */}
        </div>
      );
    }
  }
}

export default Authentication;