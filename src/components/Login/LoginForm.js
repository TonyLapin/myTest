
import React, { Component } from 'react';

import './LoginForm.css';

class LoginForm extends Component {
  
  render () {
      return (
      <div className="modal">
        <form className="modal-content animate">
          <h1>Log In</h1>
          <div >
            <span className="close" title="Close Modal" onClick={this.props.onShowLogin}>&times;</span>
          </div>
          <div className="container">
            <label ><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" />
            <br />
            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" />
            <br />
            <button className="main">Login</button>
          </div>
          <div className="container" >
            <p onClick={this.props.onShowSignUp}>Or Sign Up</p>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

