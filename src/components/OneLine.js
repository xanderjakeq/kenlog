import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import * as firebase from 'firebase'


import NavBar from './NavBar'
import Write from './Write'
import Logs from './Logs'




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      placeholder : 'How Are you today?',
      onelineText: null
    }
    // this.handleWrite = this.handleWrite.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitLine = this.submitLine.bind(this)
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

    // document.getElementById("onelineText").addEventListener("input", (e) => {
    //     // e.target.textContent = this.state.onelineText
    //     if(e.target.textContent === this.state.placeholder){
    //         e.target.textContent = this.state.onelineText
    //     }
    //     this.handleWrite(e.target.textContent)
    // }, false);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  submitLine() {
    this.props.database.ref().child(`users/${this.props.uid}`).push(this.state.onelineText);
    
    document.getElementById('onelineTextArea').textContent = ''
    this.setState({
        onelineText: ''
    })
  }

//   handleWrite(text){
//       console.log('write')
//     this.setState({
//         onelineText: text
//     })
//   }

  render() {
    return (
        <div className="OneLine">
            <NavBar signOut = {this.props.signOut}/>
            {/* <Router> */}
              <div>
              <Route exact path = '/'  render = {(props) => <Write submitLine = {this.submitLine} handleChange = {this.handleInputChange} value = {this.state.onelineText || ''}/> }/>
              <Route exact path = '/entries'  render = {(props) => <Logs {...props} entries = {this.props.entries}/>} />
            </div>
            {/* </Router> */}
        </div>
        
    );
  }
}

export default App;
