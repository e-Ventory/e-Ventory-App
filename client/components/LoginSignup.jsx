import React from 'react';
import '../stylesheets/Login.scss';
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import { useState } from 'react';


//add onclick to a anchor tag (<a></a>)

const LoginSignup = (props) => {
  
  const [isShow, setIsShow] = React.useState(true);  
  const handleClick = () => {setIsShow(s => !s)};

if (isShow){
  return (
    <div>
      <Login setUser = {props.setUser}/>
      <div className="button-container">
          
        </div>
      <a href="#" className='toggle' onClick={ handleClick }> Not a member? Sign-Up here! </a>
    </div>
    )
  } else {
      return (
        <div>
          <SignUp setUser = {props.setUser}/>
          <div className="button-container">
          
        </div>
          <a href="#" className='toggle' onClick={ handleClick }> Already a member? Log-In here! </a>
        </div>
    )
  };
};

export default LoginSignup;
