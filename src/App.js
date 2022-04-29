import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      mode:"light",
      country:"in"
    }
    console.log(this.state.mode)
  }
  toggle=()=>{
    if (this.state.mode === "light"){
      this.setState({
        mode:"dark"
      })
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
    }
    else if (this.state.mode === "dark"){
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
      <BrowserRouter>
      <Navbar toggle={this.toggle} mode={this.state.mode}/>
    <Routes>
      <Route path="/" element={<News key={"general1"} mode={this.state.mode} country={"in"} category={"general"} pageSize="9"/>}/>
      <Route  path="general" element={<News key={"general"} mode={this.state.mode} country={"in"} category={"general"} pageSize="9"/>}/>
        <Route  path="business" element={<News key={"business"} mode={this.state.mode} country={"in"} category={"business"} pageSize="9"/>}/>
          <Route path="entertainment" element={<News key={"entertainment"} mode={this.state.mode} country={"in"} category={"entertainment"} pageSize="9"/>} />
          <Route path="health" element={<News key={"health"} mode={this.state.mode} country={"in"} category={"health"} pageSize="9"/>} />
          <Route path="science" element={<News key={"science"} mode={this.state.mode} country={"in"} category={"science"} pageSize="9"/>} />
          <Route path="sports" element={<News key={"sports"} mode={this.state.mode} country={"in"} category={"sports"} pageSize="9"/>} />
          <Route path="technology" element={<News key={"technology"} mode={this.state.mode} country={"in"} category={"technology"} pageSize="9"/>} />
    </Routes>
  </BrowserRouter>
      </>
    )
  }
}
