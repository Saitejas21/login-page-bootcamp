import React from "react";
import "./styles.css";

function Login() {
  return (
    <div className="container h-100 d-flex align-items-center justify-content-center">
      <div className="login-card card">
        <div className="form-header">Welcome Back</div>
        <div className="form-subheader">Login</div>
        <div className="">
          <div className="email-input">Email ID</div>
          <input
            type="email"
            className="form-control"
            id="email-input"
            placeholder="Enter your email"
          />
          <div className="password-input">Password</div>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Enter your password"
          />
          <div className="btn-submit">
            <button className="btn btn-primary mt-3 w-100" type="submit">
              Login
            </button>
          </div>
          <div className="tnc">
            By continuing, you agree to our{" "}
            <span className="text-bold">Terms of Use</span> and{" "}
            <span className="text-bold">Privacy policies</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
