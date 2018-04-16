import React, { Component } from 'react';


import logo from './logo.svg';
import burg from './burger.svg';

import './App.css';

import Articles from './components/Articles';
import Footer from './components/Footer';
import ARTICLES from './VirtualDb';
import LoginForm from './components/Login/LoginForm';
import SignUpForm from './components/Signup/SignUpForm';
import SidenavPush from './components/Sidebar/SidenavPush';





class App extends Component {
  
  state= {
    drawerOpen: false,
    loginWindowOpen: false,
    signUpWindowOpen: false,
    classSidebar: true,
    color: '#ff0066',
    fontSize: 20,
    lineHeight: 1.4,
  }
//123

  sidebarPush = () => {
    this.setState ({
      classSidebar: !this.state.classSidebar
    })
  }

  showLogin = () => {
    this.setState ({
      loginWindowOpen: !this.state.loginWindowOpen
    })
  }

  showSignUp = () => {
    this.setState ({
      signUpWindowOpen: !this.state.signUpWindowOpen
    })
  }

  changeColor = () => {
    this.setState ({
      colorText: ''
    })
  }


  render() {
    
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test Text App</h1>
          <div className="btnLogin">
              <button onClick={() => this.showLogin()}>Log In</button>
              <button onClick={() => this.showSignUp()}>Sing Up</button>
          </div>
        </header>

        <div className={"login" +(this.state.loginWindowOpen ? 'Show': 'Hide')}> 
          <LoginForm onShowLogin={this.showLogin} onShowSignUp={this.showSignUp}/>
        </div>
        
        <div className={"signUp" + (this.state.signUpWindowOpen ? 'Show': 'Hide')}> 
        <SignUpForm onShowSignUp={this.showSignUp} onShowLogin={this.showLogin}/>
        </div>
       
        <div className={this.state.classSidebar ? 'mainContainer': 'mainContainer_Push'}>
          <img src={burg}  alt="logo" onClick={() => this.sidebarPush()} className={this.state.classSidebar ? 'burgerNav': 'burgerNav_Push'}/>
          
          <SidenavPush classSidebar={this.state.classSidebar ? 'sidenav': 'sidenavOpen'} colorChange={this.changeColor}/>
          
          <Articles article={ARTICLES} classArticles={this.state.classSidebar ? 'Articles': 'ArticlesPush'}/>
          </div>
          
          <Footer />
      </div>
    );
  }
}

export default App;
