import React from 'react';
import '../stylesheets/Login.scss';
import { useState } from 'react';
import { useForm } from "react-hook-form";

//Login component


//let options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(data)
// }

const Login = () => {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState("")
  
  //fetch request to server w/ email & password for login


  return (
    <div>
      <h2 className='SI'>Please sign in</h2>
      <form className="LoginBox" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="input-container" >
          <input {...register("username")} type="text" id="username" name="username" placeholder="Username" required />
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