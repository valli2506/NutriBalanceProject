import React, { useState } from "react";
import "./css/Info.css";

const Info = ({ goToNext, logout, userData, saveUserData }) => {

  const [name, setName] = useState(userData?.name || "");
  const [age, setAge] = useState(userData?.age || "");
  const [weight, setWeight] = useState(userData?.weight || "");
  const [height, setHeight] = useState(userData?.height || "");
  const [country, setCountry] = useState(userData?.country || "India");

  const [error, setError] = useState("");

  const handleContinue = () => {

    /* ✅ EMPTY FIELD CHECK */
    if (!name || !age || !weight || !height) {
      setError("⚠ Please fill all details");
      return;
    }

    /* ✅ SAFE NUMBER CHECK */
    if (weight <= 0 || height <= 0 || age <= 0) {
      setError("⚠ Please enter valid values");
      return;
    }

    const updatedUser = {
      ...userData,
      name,
      age,
      weight,
      height,
      country
    };

    /* ✅ SAVE GLOBALLY */
    saveUserData(updatedUser);

    /* ✅ SAVE TO STORAGE */
    localStorage.setItem("nutriUser", JSON.stringify(updatedUser));

    setError("");
    goToNext();
  };

  return (
    <div className="info-page">

      <div className="info-header">

        <div className="logo-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
            alt="logo"
          />
          <div>
            <h1>NutriBalance</h1>
            <p>Track your meals and get healthy eating tips</p>
          </div>
        </div>

        <button className="logout-btn" onClick={logout}>
          ⎋ Logout
        </button>

        <div className="user-info">
          Logged in as: <b>{userData.username}</b>
        </div>

        <div className="food-badge">
          🥬 {userData.foodType}
        </div>
      </div>

      <div className="info-card">

        <h2>Welcome! Let's Get Started</h2>
        <p>First, tell us a little about yourself</p>

        <div className="input-group">
          <label>What's your name?</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>How old are you?</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>What's your weight? (kg)</label>
          <input
            type="number"
            placeholder="Enter weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>What's your height? (cm)</label>
          <input
            type="number"
            placeholder="Enter height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>🌍 Which country are you from?</label>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>India</option>
            <option>USA</option>
            <option>China</option>
            <option>Japan</option>
            <option>Italy</option>
            <option>Mexico</option>
          </select>
        </div>

        {/* ✅ ERROR MESSAGE */}
        {error && <div className="error-msg">{error}</div>}

        <button className="continue-btn" onClick={handleContinue}>
          → Continue
        </button>

      </div>
    </div>
  );
};

export default Info;