import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode:"light"
    }
  }
  toggle=()=>{
    if (this.state.mode === "light"){
      this.setState({
        mode:"dark"
      })
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
    }
    else{
      this.setState({
        mode:"light"
      })
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
  }
  render() {
    return (
      <>
      <Navbar toggle={this.toggle} mode={this.state.mode}/>
      <News/>
      </>
    )
  }
}
