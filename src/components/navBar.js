import React, { Component } from 'react';



const SignInForm = (props) => {

    if (props.isAuthenticated) {
        return null;
      }

    return (
        <div className="form-wrapper">
          <h1>Sign In</h1>
          <div className = "form">
            <div className="form-item">
              <label htmlFor="email"></label>
              <input type="email" name="email" required="required" placeholder="Email Address" onChange = {props.handleInputChange}></input>
            </div>
            <div className="form-item">
              <label htmlFor="password"></label>
              <input type="password" name="password" required="required" placeholder="Password" onChange = {props.handleInputChange}></input>
            </div>
            <div className="button-panel">
              <button onClick = {props.signin} className="button" title="Sign In" value="Sign In">Sign In</button>
            </div>
          </div>
          <div className="form-footer">
            {/* <p><a href="#">Create an account</a></p>
            <p><a href="#">Forgot password?</a></p> */}
          </div>
        </div>
    );
}

export default SignInForm;
