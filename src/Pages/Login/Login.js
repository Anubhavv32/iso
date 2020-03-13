import React, { Component } from 'react';
import Header from '../../components/header';
import './login.css';
import { Link } from 'react-router-dom';


export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <div className="row header"><Header /></div>
                
                <div align="center" className="row " style={{background:"lightblue"}}>
                    <div className="Absolute-Center is-Responsive">
                <form>
                    <div className="login">Log in</div>
                    <div className="signup-go"><span>NEW TO ISOHEALTH? </span><span >
                        <Link  style={{color:"#619EB2"}}>SIGNUP HERE</Link></span></div>
        <div className="form-group">
          {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
          <input type="email" className="form-control rectangle" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group">
          {/* <label htmlFor="exampleInputPassword1">Password</label> */}
          <input type="password" className="form-control rectangle-p" id="exampleInputPassword1" placeholder="Password" />
          <span className="forget-pass-link">Forgot Password</span>
        </div>
        {/* <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className=" button-background">Submit</button>
      </form>
      <div className="agree-mark">By continuing, you agree to IsosHealth’s <span style={{color:"#619EB2"}}>Terms & Conditions and Privacy Polic</span>y</div>
      </div>
                </div>
            </div>
        )
    }
}
