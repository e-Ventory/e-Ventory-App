import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <form >
        <div className="input-container">
          <input type="text" name="Email" placeholder="Email" required />
          {/* {renderErrorMessage("Please enter username")} */}
        </div>
        <div className="input-container">
          <input type="password" name="Password" placeholder="Password" required />
          {/* {renderErrorMessage("Please enter password")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <button>Terms and Conditions</button>
    </div>
  );
};

export default Login;