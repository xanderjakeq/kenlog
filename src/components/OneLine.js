import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import * as firebase from 'firebase'


import NavBar from './NavBar'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }

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
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <div className="OneLine">
            <NavBar signOut = {this.props.signOut}/>
          
        </div>
    );
  }
}

export default App;
