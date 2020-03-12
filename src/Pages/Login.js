import React, { Component } from 'react';
import Header from '../components/header';
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="header"><Header /></div>
                
                <div style={{background:"lightblue"}}></div>
            </div>
        )
    }
}
