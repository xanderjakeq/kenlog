import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';

// import './Authentication.css';

// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';

// import UserProfile from '../UserProfile/UserProfile'


class Authentication extends Component {

  constructor(props){
    super(props)
    // The component's Local state.
    this.state = {
      isSignedIn: false, // Local signed-in state.
    };
  }


//   // Configure FirebaseUI.
//   uiConfig = {
//     // Popup signin flow rather than redirect flow.
//     signInFlow: 'redirect',
//     // We will display Google and Facebook as auth providers.
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     ],
//     callbacks: {
//       // Avoid redirects after sign-in.
//       signInSuccessWithAuthResult: () => false
//     }
//   };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    // this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    //     (user) => this.setState({isSignedIn: !!user})
    // );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    // this.unregisterAuthObserver();
    
  }


  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="form-wrapper">
          <h1>Sign In</h1>
          <p>
            Warning: Low security handling. <span role='img' aria-label = 'monkey'>🙈</span>
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