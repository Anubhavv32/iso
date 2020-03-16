import React, { Component } from 'react';
import Header from '../../components/header';
import './doctor.css';
import img from './doc.jpg';
export default class Doctors extends Component {
    render() {
        return (
            <div>
                <Header/>
                <br />
                <br />
                <div>
                    <div className="container">
                        <div className="content">
                            <h3 className = "our-physical-health" >Our Physical Health Practioners:</h3>
                            <p className="select">Select a practioner to complete your appointment</p>
                        </div>
                        <div className="row card-pack">
                            
                            <div className="card pack">
                            <div className="card-body" style={{display:"flex"}}>
                                <div className="col-md-4" >
                                    <img src={img} alt="" className="rounded-circle img-circle"/>
                                </div>
                                <div className="col-md-8">
                                    <h3 style={{color:"black"}}>Anubhav Sharma</h3>
                                    <p>Mental Health Practitioner</p>
                                    <div style={{color:"#2a6377"}}>View Bio & Clinic hours </div>
                                </div>
                            
                            
                        </div>
                            </div>
                            
                            <div className="card pack">
                            <div className="card-body" style={{display:"flex"}}>
                                <div className="col-md-4" >
                                    <img src={img} alt="" className="rounded-circle img-circle"/>
                                </div>
                                <div className="col-md-8">
                                    <h3 style={{color:"black"}}>Anubhav Sharma</h3>
                                    <p>Mental Health Practitioner</p>
                                    <div style={{color:"#2a6377"}}>View Bio & Clinic hours </div>
                                </div>
                            
                            </div>
                            </div>
                        
                            <div className="card pack">
                            <div className="card-body" style={{display:"flex"}}>
                                <div className="col-sm-4" >
                                    <img src={img} alt="" className="rounded-circle img-circle"/>
                                </div>
                                <div className="col-md-8">
                                    <h3 style={{color:"black"}}>Anubhav Sharma</h3>
                                    <p>Mental Health Practitioner</p>
                                    <div style={{color:"#2a6377"}}>View Bio & Clinic hours </div>
                                </div>
                            
                            </div>
                            </div>
                            <div className="pack card">
                            <div className="card-body" style={{display:"flex"}}>
                                <div className="col-sm-4" >
                                    <img src={img} alt="" className="rounded-circle img-circle"/>
                                </div>
                                <div className="col-md-8">
                                    <h3 style={{color:"black"}}>Anubhav Sharma</h3>
                                    <p>Mental Health Practitioner</p>
                                    <div style={{color:"#2a6377"}}>View Bio & Clinic hours </div>
                                </div>
                            
                            
                        </div>
                            </div>
                            <div className="card pack">
                            <div className="card-body" style={{display:"flex"}}>
                                <div className="col-sm-4" >
                                    <img src={img} alt="" className="rounded-circle img-circle"/>
                                </div>
                                <div className="col-md-8">
                                    <h3 style={{color:"black"}}>Anubhav Sharma</h3>
                                    <p>Mental Health Practitioner</p>
                                    <div style={{color:"#2a6377"}}>View Bio & Clinic hours </div>
                                </div>
                        </div>
                            </div>
                            <div className="pack card">
                            <div className="card-body" style={{display:"flex"}}>
                                <div className="col-sm-4" >
                                    <img src={img} alt="" className="rounded-circle img-circle"/>
                                </div>
                                <div className="col-sm-8">
                                    <h3 style={{color:"black"}}>Anubhav Sharma</h3>
                                    <p>Mental Health Practitioner</p>
                                    <div style={{color:"#2a6377"}}>View Bio & Clinic hours </div>
                                </div>
                        </div>
                            </div>
                        </div>
                        <div className="row more">
                            <p><span style={{color:"red",cursor:"pointer"}}>Click Here</span> to browse all our Practitioners</p>
                            


                        </div>
                       
                    </div>
                    <br/>
                    <br/>
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="card-pack2">
                                <p>FAQs</p>
                                <div className="card">
                                    <div className="card-body" style={{padding:"0"}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" data-toggle="collapse"  aria-expanded="false" aria-controls="collapseExample">Cras justo odio</li>
                                        <div className="collapse" id="collapseExample">
                                        <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                        </div>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    
                                   </div>
                                </div>

                            </div>
                        </div>
                        <br /><br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
