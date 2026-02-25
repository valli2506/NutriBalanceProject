import React, { useState } from "react";
import "./css/Login.css";

const Login = ({ goToSignup, goToDiet }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    const savedUser = JSON.parse(localStorage.getItem("nutriUser"));

    /* ✅ EMPTY FIELD CHECK */
    if (!username || !password) {
      setError("⚠ Please enter username and password");
      return;
    }

    /* ✅ NO ACCOUNT CHECK */
    if (!savedUser) {
      setError("⚠ No account found. Please sign up first.");
      return;
    }

    /* ✅ WRONG CREDENTIALS */
    if (
      username !== savedUser.username ||
      password !== savedUser.password
    ) {
      setError("⚠ Invalid username or password");
      return;
    }

    /* ✅ SUCCESS */
    setError("");
    goToDiet(savedUser);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">NutriBalance</h1>
        <p className="login-subtitle">
          Welcome back! Login to continue
        </p>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* ✅ ERROR MESSAGE */}
        {error && <div className="error-msg">{error}</div>}

        <button className="login-button" onClick={handleLogin}>
          🔐 Login
        </button>

        <p className="signup-text">
          Don't have an account?  
          <span onClick={goToSignup}> Sign up here!</span>
        </p>

      </div>
    </div>
  );
};

export default Login;