import React from 'react';
import '../stylesheets/Login.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const SignUp = () => {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const signUpRequest = (data) => {
    //check to see if name & email exist in DB already. 
      // if it does don't submit (message: user already exists)
      //else send to inventory page
      
  }


  return (
    <div>
      <h2 className='SI'>Please sign up</h2>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="input-container">
          <input {...register("Username")} type="text" id="namesignup" name="Username" placeholder="Username" required />
          {/* {renderErrorMessage("Please enter username")} */}
        </div>
        <div className="input-container">
          <input {...register("email")} type="text" id="emailsignup" name="Email" placeholder="Email" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <div className="input-container">
          <input {...register("password")} type="password" id="pwsignup" name="Password" placeholder="Password" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <div className="input-container">
          <select {...register("category")} id="dropdownlogin">
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