import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Login from './Pages/Login';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Login}/>
        </Router>
      </div>
    )
  }
}
