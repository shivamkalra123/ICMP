import React from "react";

import "../comp_css/login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import Navbar from "./nav";
import Footer from "./footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1 className="create-account">Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input className="a" type="text" placeholder="Name" />
            <input className="a" type="email" placeholder="Email" />
            <input className="a" type="password" placeholder="Password" />
            <button class="sign-up-btn">Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1 className="sign-in">Sign in</h1>

            <input className="a" type="email" placeholder="Email" />
            <input className="a" type="password" placeholder="Password" />
            <a className="forget" href="#">
              Forgot your password?
            </a>
            <Link to="/student-centre">
              {" "}
              <button class="sign-in-btn">Sign In</button>
            </Link>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay1">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="b">
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost sign-in-btn" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 className="abou">About Student Center </h1>
              <p className="about_centre">
                Student Center will be unavailable on Sundays until 6am due to
                maintenance.<br></br>
                Need to Activate your Western Identity? Click here to Activate
                <br></br>
                Don't know your Access Code? Click here for Access Code
                Retrieval<br></br>
                Forgot your Western Identity password? Click here to reset your
                password
                <br />
                Questions? Virtual Helpline
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
