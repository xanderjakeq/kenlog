import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import * as firebase from 'firebase'

import './Css/index.css';

import OneLine from './components/OneLine'
import Authentication from './components/Authentication'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
      email:'',
      password:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.signup = this.signup.bind(this);
  }


  componentDidMount(){
    const hamburger = document.querySelector('.hamburger')
    const navLinks = document.querySelector('.nav-links')

    if(hamburger){
      hamburger.addEventListener('click', e => {
          e.currentTarget.classList.toggle('is-active')

          navLinks.classList.toggle('active')
      })
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('signed in')
        this.setState({
          isAuthenticated: true,
          userId: firebase.auth().currentUser.uid
        });
      } else {
        console.log('no User')
        this.setState({
          isAuthenticated: false
        });
      }
    });

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  signin(){
    firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('someError')
      // ...
    });
  };

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('someError')
      // ...
    });
  };  

  signout(){
    console.log('signout Clicked')
    firebase.auth().signOut().then(function() {
      
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    return (
      <Router>
        <div className="App-header header">
          <div className = "main">
          {this.state.isAuthenticated === true ? (<OneLine signOut = {this.signout} database = {this.props.database} storage = {this.props.storage} uid = {this.state.userId}/>):(
            <Authentication signin = {this.signin} signup = {this.signup} handleInputChange = {this.handleInputChange} isAuthenticated = {this.state.isAuthenticated}/>
          )}   
          <Switch>
            <Route path = {'/journal'} component = {Journal}/>
          </Switch>          
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
