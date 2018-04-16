import React, { Component } from 'react';

import './SignUpForm.css';

class SignUpForm extends Component {
  
  render () {
    
    return (
      <div className="modal">
        <span className="close" onClick={this.props.onShowSignUp}>&times;</span>
        <form className="modal-content" >
          <div className="container">
            <h1>Sign Up</h1>
            <h2>Please fill in this form to create an account.</h2>
            <hr />
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" />

            <label><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" />
            
            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={this.props.onShowSignUp||this.props.onShowLogin}>Cancel</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;