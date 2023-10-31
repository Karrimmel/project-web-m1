import React from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

/**
 * LoginPage component renders the login form for the application.
 */
export default function LoginPage() {
    return (
      <div>
        {/* Link to the home page */}
        <Link to="/">
          <h1>
            <img src="/Logo_Solution_Factory_2.png" alt="Logo La l'e-brairie" />
          </h1>
        </Link>
        <div className="formlogin">
          {/* The form should be handled by your backend server on submission */}
          <form action="" method="POST">
            {/* Headings for the form */}
            <div className="headingsContainer">
              <p>Welcome</p>
            </div>
  
            {/* Main container for all inputs */}
            <div className="mainContainer">
              {/* Email input */}
              <label htmlFor="Email">E-mail :</label>
              <input type="text" placeholder="Enter E-mail" id="Email" name="Email" required />
              <br /><br />
  
              {/* Password input */}
              <label htmlFor="Pswrd">Password :</label>
              <input type="password" placeholder="Enter Password" id="Pswrd" name="Pswrd" required />
  
              {/* Submit button */}
              <button type="submit">Log in</button>
  
              {/* Sign up link */}
              <p className="">You don't have an account ?<Link to="/register">Create a account !</Link></p>
              {/* Link back to the home page */}
              <Link to="/"><p className="">Back to the homepage</p></Link>
            </div>
          </form>
        </div>
      </div>
    );
}