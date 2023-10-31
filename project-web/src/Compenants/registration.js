import React from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

/**
 * RegisterPage component renders the registration form for new users.
 */
export default function RegisterPage() {
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
          <form action="/auth/register" method="POST">
            {/* Headings for the form */}
            <div className="headingsContainer">
              <p>Welcome</p>
            </div>
  
            {/* Main container for all inputs */}
            <div className="mainContainer">
              {/* Name input */}
              <label htmlFor="Lname">Name :</label>
              <input type="text" placeholder="Enter Name" id="Lname" name="Lname" required />
              <br /><br />
  
              {/* First name input */}
              <label htmlFor="Fname">Firstname :</label>
              <input type="text" placeholder="Enter Firstname" id="Fname" name="Fname" required />
              <br /><br />
  
              {/* Email input */}
              <label htmlFor="Email">E-mail :</label>
              <input type="text" placeholder="Enter E-mail" id="Email" name="Email" required />
              <br /><br />
  
              {/* Phone number input */}
              <label htmlFor="Pnumber">Phonenumber :</label>
              <input type="text" placeholder="Enter Phonenumber" id="Pnumber" name="Pnumber" required />
              <br /><br />
  
              {/* Password input */}
              <label htmlFor="Pswrd">Password :</label>
              <input type="password" placeholder="Enter Password" id="Pswrd" name="Pswrd" required />
              <br /><br />
  
              {/* Confirm password input */}
              <label htmlFor="Cpswrd">Confirm Password :</label>
              <input type="password" placeholder="Enter Password" id="Cpswrd" name="Cpswrd" required />
  
              {/* Submit button */}
              <button type="submit" id="btn">Create</button>
  
              {/* Link to the login page */}
              <p className="">Already have a account ? <Link to="/login">Log in</Link></p>
              {/* Link back to the home page */}
              <Link to="/"><p className="">Back to the homepage</p></Link>
            </div>
          </form>
        </div>
       
      </div>
    );
}