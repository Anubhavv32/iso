import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './header.css';

export default class header extends Component {
    render() {
        return (
            <header className="site-navbar static-top site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index.html" className="text-black"><span className="text-primary">Cargo</span></a>
            </div>
            <div className="col-12">
              <nav className="site-navigation text-right ml-auto " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  
                  <li >
                    <Link className="nav-link">About Us</Link>
                   
                  </li>
                  <li><Link  className="nav-link">How It works</Link></li>
                  <li><Link  className="nav-link">Works with us</Link></li>
                  <li><Link  className="nav-link">Blog</Link></li>
                  <li><Link  className="nav-link">Login</Link></li>
                
                </ul>
              </nav>
            </div>
          
          </div>
        </div>
      </header>
        )
    }
}
