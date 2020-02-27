/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './Login.css';

export class Login extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4 login"> 
            <h1 className="account_heading">Login to your<br/> AmeriCamp Account</h1>
            <form>
                <div className="form-group">
                    <label className="login_label">Email address<span className="required">*</span></label>
                    <input type="email" className="form-control" required></input>
                </div>
                <div className="form-group">
                    <label className="login_label">Password<span className="required">*</span></label>
                    <input type="password" className="form-control" required></input>
                </div>
                
                <button type="button" className="button_cont btnlogin">
                    Login
                    <i className="fa fa-angle-right float-right fa-lg"></i>
                </button>
            </form>
            </div>
            
            <div className="col-md-3"></div>
            <div className="col-md-4 image">
                <img src="https://dummyimage.com/600x500/000000/fff"/>
            </div>
        </div>
        )
    }
}

export default Login
