import React, { useState } from "react";
import "./css/Signup.css";

const Signup = ({ goToLogin, goToInfo }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFood, setSelectedFood] = useState("veg");
  const [error, setError] = useState("");

  const handleSignup = () => {

    /* ✅ EMPTY CHECK */
    if (!username || !password) {
      setError("⚠ Please fill all fields");
      return;
    }

    const newUser = {
      username,
      password,
      foodType: selectedFood === "veg" ? "Vegetarian" : "Non-Veg"
    };

    /* ✅ SAVE USER */
    localStorage.setItem("nutriUser", JSON.stringify(newUser));

    setError("");
    goToInfo(newUser);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        <h1 className="signup-title">NutriBalance</h1>
        <p className="signup-subtitle">
          Create your account to get started
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

        <div className="food-section">
          <label>Food Preference 🍽</label>

          <div className="food-options">

            <div
              className={`food-card ${selectedFood === "veg" ? "active-veg" : ""}`}
              onClick={() => setSelectedFood("veg")}
            >
              🥦
              <h3>Vegetarian</h3>
              <p>Only veg food</p>
            </div>

            <div
              className={`food-card ${selectedFood === "nonveg" ? "active-nonveg" : ""}`}
              onClick={() => setSelectedFood("nonveg")}
            >
              🍗
              <h3>Non-Veg</h3>
              <p>Veg + Non-veg</p>
            </div>

          </div>
        </div>

        <button className="signup-button" onClick={handleSignup}>
          ✨ Sign Up
        </button>

        <p className="login-text">
          Already have an account?
          <span onClick={goToLogin}> Login here!</span>
        </p>

      </div>
    </div>
  );
};

export default Signup;