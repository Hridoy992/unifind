import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../FormStyles.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">Reset Password</button>
        </form>
        {/* <div className="links"> */}
          {/* <Link to="/login">Back to Login</Link> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ForgotPassword;
