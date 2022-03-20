import React from 'react';
import '../stylesheets/Login.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";

//Login component


const Login = () => {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState("")
  
  //fetch request to server w/ email & password for login


  return (
    <div>
      <h2 className='SI'>Please sign in</h2>
      <form className="LoginBox" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="input-container" >
          <input {...register("email")} type="text" id="Email" name="Email" placeholder="Email" required />
          {/* {renderErrorMessage("Please enter username")} */}
        </div>
        <div className="input-container">
          <input {...register("password")} type="password" id="PW" name="Password" placeholder="Password" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <input type="submit" className="submitbutton"/>
      </form>
      
    </div>
  );
};

export default Login;