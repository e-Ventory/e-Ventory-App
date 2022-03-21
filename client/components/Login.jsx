import React from 'react';
import '../stylesheets/Login.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, } from 'react-router-dom';
//Login component


//let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(data)
// }

const Login = (props) => {
  // useForm hook returns an object containing a few properties.
    //register method helps register an input field into react hook form so that it is available for validation.
    //handleSubmit can handle two functions as arguments. first function passed as an arg will be onvoked along with registered field values when the form validation is successfull.
  const {register, handleSubmit} = useForm();
  //const [data, setData] = useState("")

  return (
    <div>
      <h2 className='SI'>Please sign in</h2>
      <form className="LoginBox" onSubmit={handleSubmit((data) => {
        //fetch request to server w/ email & password for login
        fetch('/accounts/login', {
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => { 
          props.setUser(data.account);
        })
        .catch(err => {
          console.log('were getting an error',err);
          alert('Wrong username/password');
          props.setUser({user: {name: undefined}});
          return;
        });
        
          // create a post request then in the body send username and password
         // setData(JSON.stringify(data))
      })}>
      <div className="input-container" >
        <input {...register("username")} type="text" id="username" name="username" placeholder="Username" required />
        {/* {renderErrorMessage("Please enter username")} */}
      </div>
      <div className="input-container">
        <input {...register("password")} type="password" id="PW" name="password" placeholder="Password" required />
        {/* {renderErrorMessage("Please enter password")} */}
      </div>
      <input type="submit" className="submitbutton" />
    </form>
      
    </div>
  );
};

export default Login;