import React from "react";
import "./Header.css";

const Header = ({
  userData,
  goToDiet,
  goToResults,
  goToTips,
  goToBMI,
  goToLogin,   
  activeScreen
}) =>

{
  return (
    <div className="header">
      <div className="logo">🥗 NutriBalance</div>

      <div className="nav-buttons">
        <button
          className={`nav-btn ${activeScreen === "diet" ? "active" : ""}`}
          onClick={goToDiet}
        >
          ➕ Add Food
        </button>

        <button
          className={`nav-btn ${activeScreen === "results" ? "active" : ""}`}
          onClick={goToResults}
        >
          📊 View Results
        </button>

        <button
          className={`nav-btn ${activeScreen === "tips" ? "active" : ""}`}
          onClick={goToTips}        /* ✅ FIXED */
        >
          💡 Get Tips
        </button>

        <button
          className={`nav-btn ${activeScreen === "bmi" ? "active" : ""}`}
          onClick={goToBMI}
        >
          🧮 BMI Calculator
        </button>
      </div>

      <div className="user-info">
        Logged in as: <b>{userData?.username}</b>

        <button className="logout-btn" onClick={goToLogin}>
    🚪 Logout
  </button>
      </div>
    </div>
  );
};

export default Header;