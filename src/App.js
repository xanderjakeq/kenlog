import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

import * as firebase from 'firebase'

import './Css/index.css';

import OneLine from './components/OneLine'
import Authentication from './components/Authentication'
import Journal from './components/Journal'
import Entry from './components/Entry'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
      email:'',
      password:'',
      // userId: firebase.auth().currentUser.uid
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.signup = this.signup.bind(this);
  }


  componentDidMount(){

     firebase.auth().onAuthStateChanged( async (user) => {
      if (user) {
        console.log('signed in', user)
        this.setState({
          isAuthenticated: true,
          userId: user.uid
        });

        await this.props.database.ref().child(`users/${this.state.userId}`).on('value', async snap => {
          if(snap.val() != null){
            this.setState({
              entries: await Object.values(snap.val())
            })
          }
       });
      } else {
        console.log('no User')
        this.setState({
          isAuthenticated: false,
          entries: []
        });
      }
    });

  //   this.props.database.ref().child(`users/${this.state.userId}`).on('value', async snap => {
  //     console.log(snap.val(),this.state.userId)
  //     if(snap.val() != null){
  //       console.log(Object.values(snap.val()))
  //       this.setState({
  //         entries: await Object.values(snap.val())
  //       })
  //     }
  //  });

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
      alert(errorMessage)
      // ...
    });
  };

  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error.message)
      // ...
    });
  };  

  signout(){
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    let entryArray = this.state.entries
    let entryRendered = [];
    if(this.state.entries){
      entryRendered =  entryArray.reverse().map((text, index) => {
          return (
          <Entry key= {index} text = {text} />
        )
      });
    }
    return (
      <Router>
        <div className="App-header header">
          <div className = "main">
            {this.state.isAuthenticated === true ? (<OneLine signOut = {this.signout} database = {this.props.database} storage = {this.props.storage} uid = {this.state.userId} value = {this.state.onelineText || null} entries = {entryRendered}/>):(
              <Authentication signin = {this.signin} signup = {this.signup} handleInputChange = {this.handleInputChange} isAuthenticated = {this.state.isAuthenticated}/>
            )}   
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
