import React, { useState, useEffect } from "react";

import Welcome from "./Welcome";
import Intro from "./Intro";
import Login from "./Login";
import Signup from "./Signup";
import Info from "./Info";
import Diet from "./Diet";
import Results from "./Results";
import Tips from "./Tips";
import BMI from "./BMI";

const App = () => {

  /* ✅ START SCREEN */
  const [screen, setScreen] = useState("welcome");

  /* ✅ GLOBAL USER DATA */
  const [userData, setUserData] = useState({});

  /* ✅ GLOBAL FOODS */
  const [selectedFoods, setSelectedFoods] = useState([]);

  /* ✅ LOAD SAVED USER */
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("nutriUser"));
    if (savedUser) {
      setUserData(savedUser);
    }
  }, []);

  /* ✅ NAVIGATION */
  const goToWelcome = () => setScreen("welcome");
  const goToLogin = () => setScreen("login");
  const goToSignup = () => setScreen("signup");
  const goToInfo = () => setScreen("info");
  const goToIntro = () => setScreen("intro");
  const goToDiet = () => setScreen("diet");
  const goToResults = () => setScreen("results");
  const goToTips = () => setScreen("tips");
  const goToBMI = () => setScreen("bmi");

  /* ✅ SCREEN SWITCHING */
  switch (screen) {

    case "welcome":
      return (
        <Welcome goToLogin={goToLogin} />
      );

    case "login":
      return (
        <Login
          goToSignup={goToSignup}
          goToDiet={(user) => {
            setUserData(user);
            setScreen("intro");   /* ✅ SHOW INTRO PAGE */
          }}
        />
      );

    case "signup":
      return (
        <Signup
          goToLogin={goToLogin}
          goToInfo={(newUser) => {
            setUserData(newUser);
            setScreen("info");
          }}
        />
      );

    case "info":
      return (
        <Info
          userData={userData}
          logout={goToLogin}
          goToNext={goToIntro}   /* ✅ AFTER INFO → INTRO */
          saveUserData={setUserData}
        />
      );

    case "intro":
      return (
        <Intro goToDiet={goToDiet} />
      );

    case "diet":
      return (
        <Diet
          userData={userData}
          selectedFoods={selectedFoods}
          setSelectedFoods={setSelectedFoods}
          goToResults={goToResults}
          goToTips={goToTips}
          goToBMI={goToBMI}
          goToInfo={goToInfo}
          goToLogin={goToLogin}
        />
      );

    case "results":
      return (
        <Results
          userData={userData}
          selectedFoods={selectedFoods}
          goToDiet={goToDiet}
          goToTips={goToTips}
          goToBMI={goToBMI}
          goToInfo={goToInfo}
        />
      );

    case "tips":
      return (
        <Tips
          userData={userData}
          selectedFoods={selectedFoods}
          goToDiet={goToDiet}
          goToResults={goToResults}
          goToBMI={goToBMI}
          goToInfo={goToInfo}
        />
      );

    case "bmi":
      return (
        <BMI
          userData={userData}
          selectedFoods={selectedFoods}
          goToDiet={goToDiet}
          goToTips={goToTips}
          goToResults={goToResults}
          goToInfo={goToInfo}
        />
      );

    default:
      return <div>Something went wrong</div>;
  }
};

export default App;