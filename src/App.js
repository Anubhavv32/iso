import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact component={Login}/>
          <Route path="/Home" component={Home}/>
        </Router>
      </div>
    )
  }
}
