import React from "react";
import "./css/Intro.css";

const Intro = ({ goToDiet }) => {
  return (
    <div className="intro-page">

      <div className="intro-card">

        <h1>🍏 NutriBalance Guide 💡</h1>

        <p className="intro-subtitle">
          Your Smart Nutrition Tracking Companion
        </p>

        <div className="intro-steps">

          <div className="step">
            <h3>👤 Step 1 – Enter Your Details</h3>
            <p>
              Provide your height and weight to personalize your experience
              and enable BMI analysis.
            </p>
          </div>

          <div className="step">
            <h3>🥗 Step 2 – Select Your Foods</h3>
            <p>
              Choose the foods you consumed to analyze your daily nutritional
              intake.
            </p>
          </div>

          <div className="step">
            <h3>📊 Step 3 – View Nutrition Results</h3>
            <p>
              Understand your protein, carbs, fiber, vitamins, and minerals
              through visual progress indicators.
            </p>
          </div>

          <div className="step">
            <h3>📏 Step 4 – Check Your BMI</h3>
            <p>
              Monitor your Body Mass Index and assess your health category.
            </p>
          </div>

          <div className="step">
            <h3>💡 Step 5 – Follow Smart Tips</h3>
            <p>
              Receive personalized suggestions to improve your lifestyle
              and nutrition habits.
            </p>
          </div>

        </div>

        <button onClick={goToDiet}>
          🚀 Start Using NutriBalance
        </button>

      </div>
    </div>
  );
};

export default Intro;