import React from "react";
import Header from "./Components/Header";
import "./css/BMI.css";

const BMI = ({
  userData,
  selectedFoods,
  goToDiet,
  goToTips,
  goToResults,
  goToInfo
}) => {

  const height = Number(userData?.height);
  const weight = Number(userData?.weight);

  /* ✅ FIXED → BMI ALWAYS NUMBER */
  const bmi =
    height > 0 && weight > 0
      ? Number((weight / ((height / 100) * (height / 100))).toFixed(1))
      : 0;

  let category = "";
  let categoryClass = "";
  let message = "";
  let tips = [];

  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
    message = "Your BMI indicates you are underweight.";
    tips = [
      "Increase calorie intake",
      "Include protein-rich foods",
      "Strength training can help"
    ];
  } 
  else if (bmi < 25) {
    category = "Normal Weight";
    categoryClass = "normal";
    message = "Perfect! You have a healthy weight.";
    tips = [
      "Maintain balanced diet",
      "Stay physically active",
      "Keep monitoring BMI"
    ];
  } 
  else if (bmi < 30) {
    category = "Overweight";
    categoryClass = "overweight";
    message = "Your BMI suggests you are slightly overweight.";
    tips = [
      "Reduce sugary foods",
      "Increase physical activity",
      "Stay hydrated"
    ];
  } 
  else {
    category = "Obese";
    categoryClass = "obese";
    message = "Your BMI is higher than recommended.";
    tips = [
      "Focus on healthier diet",
      "Exercise regularly",
      "Consider lifestyle adjustments"
    ];
  }

  /* ✅ Dynamic Indicator Position */
  const getIndicatorPosition = () => {
    if (bmi === 0) return "0%";

    if (bmi < 18.5) return "12%";
    if (bmi < 25) return "37%";
    if (bmi < 30) return "62%";
    return "87%";
  };

  return (
    <div className="bmi-page">

      {/* ✅ FIXED HEADER NAVIGATION */}
      <Header
        userData={userData}
        activeScreen="bmi"
        goToDiet={goToDiet}
        goToTips={goToTips}
        goToResults={goToResults}
        goToInfo={goToInfo}
      />

      <div className="bmi-card">

        <h2>📏 BMI Calculator</h2>
        <p>Body Mass Index based on your height and weight</p>

        <div className={`bmi-result ${categoryClass}`}>
          <h3>Your BMI is</h3>

          <div className="bmi-value">{bmi}</div>

          <div className="bmi-range">
            Healthy BMI Range: 18.5 – 24.9
          </div>

          <div className="bmi-icon">
            {category === "Underweight" && "⚠️"}
            {category === "Normal Weight" && "✅"}
            {category === "Overweight" && "📉"}
            {category === "Obese" && "🚨"}
          </div>

          <div className="bmi-category">{category}</div>
        </div>

        <div className="bmi-message">
          {message}
        </div>

        <div className="bmi-explanation">
          BMI is a general indicator of body composition based on height and weight.
        </div>

        <div className="bmi-stats">
          <div>
            <span>Height</span>
            <strong>{height} cm</strong>
          </div>
          <div>
            <span>Weight</span>
            <strong>{weight} kg</strong>
          </div>
        </div>

        <div className="bmi-scale">

          <h3>📊 BMI Scale</h3>

          <div className="scale-bar">
            <div 
              className={`indicator ${categoryClass}`}
              style={{ left: getIndicatorPosition() }}
            ></div>
          </div>

          <div className="scale-labels">
            <span>Underweight</span>
            <span>Normal</span>
            <span>Overweight</span>
            <span>Obese</span>
          </div>
        </div>

        <div className="bmi-actions">
          <button onClick={goToInfo}>👤 My Info</button>
          <button onClick={goToDiet}>🥗 View Diet Plan</button>
        </div>

        <div className="bmi-tips">
          <h3>💡 Tips For You</h3>

          <ul>
            {tips.map(tip => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default BMI;