import React from "react";
import "./css/Welcome.css";

const Welcome = ({ goToLogin }) => {
  return (
    <div className="welcome-page">

      <div className="welcome-card">

        <h1>
          🍏 NutriBalance 💻
        </h1>

        <p>
          Track • Analyze • Improve Your Health
        </p>

        <div className="welcome-icons">
          📊 🥗 📏 💡 ❤️
        </div>

        <button onClick={goToLogin}>
          🚀 Get Started
        </button>

      </div>
    </div>
  );
};

export default Welcome;