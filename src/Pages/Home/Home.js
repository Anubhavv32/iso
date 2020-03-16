import React, { Component } from 'react'
import './home.css';
import Header from '../../components/header';
import {img} from './Ovalblue3.png'
export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      email:"",partOne:true
    }
  }
  emailChangeHandler=(e)=>{
    console.log(e.target.name,e.target.value)
    this.setState({[e.target.name]:e.target.value},()=>{
      console.log(this.state.email)
    })
  }
  submitHandler=(e)=>{
    e.preventDefault()
    if(this.state.email !== ""){
      this.setState({partOne:!this.state.partOne})
    }
  }
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
        {this.state.partOne && 
         <div className="modal-content">
          
         <div className="modal-header">
         <label className="modal-title">isoshealth</label>
           
           <button type="button circle" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">×</span>
           </button>
          
         </div>
         <div className="modal-body row">
         <p className="content" >Enter your email to sign in or create an account</p>
        
         <div class="input-group mb-3 input-modal">
           <div className="input-group-prepend">
           <span className="input-group-text" id="basic-addon1">@</span>
           </div>
           <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={this.emailChangeHandler} name="email"/>
         </div>
        
         <div className="row terms">
         <p className="content" >By signing up, you agree to our terms and privacy policy.</p>
         </div>
         </div>
         <div className="modal-footer ">
           <button type="button" onClick = {this.submitHandler} className="btn" >Submit</button>
           
         </div>
       </div>}
       {
         !this.state.partOne && 
         <div className="modal-content">
          
         <div className="modal-header">
         <label className="modal-title">isoshealth</label>
           
           <button type="button circle" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">×</span>
           </button>
          
         </div>
         <div className="modal-body row">
       <p className="content" >An email with the code has been sent to {this.state.email}</p>
        
         <div class="input-group mb-3 input-modal">
           <div className="input-group-prepend">
           <span className="input-group-text" id="basic-addon1">@</span>
           </div>
           <input type="text" className="form-control" placeholder="Code" aria-label="Username" aria-describedby="basic-addon1" onChange={this.codeChangeHandler} />
         </div>
        
         <div className="row terms">
         <p className="content" >Did not get the code?</p>
         </div>
         </div>
         <div className="modal-footer ">
           <button type="button" onClick = {this.submitCodeHandler} className="btn" >Submit</button>
           
         </div>
       </div>
       }
         
        </div>
      </div>
                        </div>
                        </div>
                </div>
           
        )
    }
}
