import React, { useState } from "react";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Signup() {

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  if (authMode === "signin") {
    return (
      <>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <img alt="This will Take a while to load"
              id="ig"
              className="float-start"
              src={require('./sign.jpg')}
            />

            <div className="float-end Auth-form-content">
              <h2 className="mt-5" id="tit">
                <b>
                 Experience the Beauty of Nature
                </b>
              </h2>{" "}
              <br />
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  id="email"
                  name="email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" >
                  <a href="/app" style={{color:"#F6FAFA"}}> Submit</a>
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <span className="link-primary">password?</span>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <img alt="This will Take a while to load"
          id="ig2"
          className="float-start"
          src={require('./snup.jpg')}
        />

        <div className="float-end Auth-form-content">
          <h2 className="mt-5" id="tit2">
            <b>
               Experience the Beauty of Nature
            </b>
          </h2>{" "}
          <br />
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Thiyagu"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              <Link to="/app" style={{color:"#F6FAFA"}}>Submit</Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}