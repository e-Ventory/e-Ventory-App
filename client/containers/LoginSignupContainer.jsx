import React from 'react';
//import Login from '../components/Login.jsx';
//import SignUp from '../components/SignUp.jsx';
import LoginSignup from  "../components/LoginSignup.jsx"
import '../stylesheets/Login.scss';

//Page that returns the login and signup components

const LoginSignupContainer = () => {
  return (
    <div className='LSPage'>
      
      <div className="LoginSignupBox">
      <h1 className="welcome">Welcome</h1>
        <div className="LogSign">
          <LoginSignup />
          </div>
        
      </div>
      <div className="Terms">
      <a href="Terms"> Terms & Conditions / FAQ </a>
        </div>
      
    </div>
  );
};

export default LoginSignupContainer;