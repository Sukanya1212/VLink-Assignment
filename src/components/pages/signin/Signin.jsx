import React, { useState } from "react";
import "./Signin.css";
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else {
      setError("");
      toast.success(isSignUpActive ? "You signed up successfully! 🎉" : "You signed in successfully! 🎉");
    }
  };

  return (
    <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
      <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
      
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form onSubmit={validateForm}>
          <h2 style={{ color: '#6a1b9a', fontSize: '20px' }}>Create Account</h2>
          <div className="social-container">
            <a href="#" className="social"><FaGoogle /></a>
            <a href="#" className="social"><FaTwitter /></a>
            <a href="#" className="social"><FaGithub /></a>
          </div>
          <span>or use your email for registration</span>
          <div className="input-with-icon">
            <FaUser className="icon" />
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-with-icon">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-with-icon">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form onSubmit={validateForm}>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social"><FaGoogle /></a>
            <a href="#" className="social"><FaTwitter /></a>
            <a href="#" className="social"><FaGithub /></a>
          </div>
          <span>or use your account</span>
          <div className="input-with-icon">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-with-icon">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Overlay Panels */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsSignUpActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsSignUpActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
