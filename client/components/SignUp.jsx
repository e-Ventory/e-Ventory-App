import React from 'react';
import '../stylesheets/Login.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react'

const SignUp = (props) => {

  const { register, handleSubmit } = useForm();
  //const [data, setData] = useState("");
  let userList = [];
  

  useEffect(() => {
    // fetch the data for all accounts
    fetch('/accounts/', {
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => { 
       userList = data.accounts;
      console.log(data.accounts)
    })
    .catch(err => {
      console.log('were getting an error',err);
    });
  },[])

  // const signUpRequest = (data) => {
  //   useEffect(() => {
  //    //check to see if name exist in DB already. 
  //     // if it does don't submit (message: user already exists)
  //     //else send to inventory page 
  //   })
  // }
      
  


  return (
    <div>
      <h2 className='SI'>Please sign up</h2>
      <form onSubmit={ handleSubmit((data) => {
        let isValid = true;
        console.log('userList', userList);
        for (let i = 0; i < userList.length; i++) {
          if (userList[i].name === data.name || userList[i].email === data.email) {
            alert("Username/email already exists");
            isValid = false;
            return;
          }
        }
        if(isValid){
          fetch('/accounts/signup', {
            headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(resData => { 
            console.log("67 console.log ", resData.message)
            console.log('data', data);
            console.log('props', props);
            props.setUser(data);
          })
          .catch(err => {
            console.log('were getting an error', err);
          });
        }
      })}>
        <div className="input-container">
          <input {...register("name")} type="text" id="namesignup" name="name" placeholder="Username" required />
          {/* {renderErrorMessage("Please enter username")} */}
        </div>
        <div className="input-container">
          <input {...register("email")} type="text" id="emailsignup" name="email" placeholder="Email" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <div className="input-container">
          <input {...register("password")} type="password" id="pwsignup" name="password" placeholder="Password" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <div className="input-container">
          <select {...register("type")} id="dropdownlogin" placeholder='Category'>
            <option key = "" value = "Small Business" label = "Small Business" />
            <option key = "" value = "Online Store" label = "Online Store" />
            <option key = "" value = "Restaurant" label = "Restaurant" />
            <option key = "" value = "Personal" label = "Personal" />
          </select>
          {/* {renderErrorMessage("Please enter password")} */}
        
        <input type="submit" className="submitbutton"/>
        </div>
      </form>
    </div>
  );
};

export default SignUp;