import React, { Component } from 'react'
import './home.css';
import Header from '../../components/header';
import {img} from './Ovalblue3.png'
export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div><Header /></div>
                <div className= "row circle" style={{background:"#EFF5F8",height:"120vh",position:"absolute", width:"100%"}} >
                       
                            <div className="text-home">
                            <div className="welcome-home">Welcome back to isos<span style={{color:"#1995C7"}}>health</span></div>
                            <p style={{ marginTop: "50px"}} >
                            Whether you're new to isoshealth or have already onboarded with us, you're in the right place! Add the code which will be emailed to you, to access and enter your account. We use unique codes to ensure all of your data, and information are kept safe and secure.
                            </p>
                            <p style={{ marginTop: "25px"}}>
                            Should you experience a technical issue, please use the chat button for support, or email us at <span>support@isoshealth.com </span>- we're always happy to help.
                            </p>
                        </div>
                        <div className="add-btn" style={{ marginTop: "50px"}}>
                        <button type="button" class="btn btn-info btn-login" data-toggle="modal" data-target="#exampleModalLong">Log in to your account</button>
                        <div className="modal fade " id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-width modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
            <label className="modal-title">isoshealth</label>
              
              <button type="button circle" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
             
            </div>
            <div className="modal-body row">
            <p className="content" >Enter your email to sign in or create an account</p>
           
            <div class="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">@</span>
  </div>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
                        </div>
                        </div>
                </div>
           
        )
    }
}
