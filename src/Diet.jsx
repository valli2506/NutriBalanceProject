import React, { useState } from "react";
import Header from "./Components/Header";
import "./css/Diet.css";

const Diet = ({
  userData,
  selectedFoods,
  setSelectedFoods,
  goToResults,
  goToTips,
  goToBMI,
  goToInfo,
  goToLogin
}) => {

  const [customFood, setCustomFood] = useState("");

  /* ✅ FOOD DATABASE */

  const foods = {

    Fruits: [
      { name: "Apple", type: "veg" },
      { name: "Banana", type: "veg" },
      { name: "Orange", type: "veg" },
      { name: "Grapes", type: "veg" },
      { name: "Berries", type: "veg" }
    ],

    Vegetables: [
      { name: "Broccoli", type: "veg" },
      { name: "Carrots", type: "veg" },
      { name: "Spinach", type: "veg" },
      { name: "Tomatoes", type: "veg" },
      { name: "Lettuce", type: "veg" }
    ],

    Proteins: [
      { name: "Tofu", type: "veg" },
      { name: "Beans", type: "veg" },
      { name: "Paneer", type: "veg" },
      { name: "Lentils", type: "veg" },

      { name: "Chicken", type: "nonveg" },
      { name: "Fish", type: "nonveg" },
      { name: "Eggs", type: "nonveg" },
      { name: "Mutton", type: "nonveg" },
      { name: "Prawns", type: "nonveg" }
    ],

    Grains: [
      { name: "Rice", type: "veg" },
      { name: "Bread", type: "veg" },
      { name: "Pasta", type: "veg" },
      { name: "Oatmeal", type: "veg" },
      { name: "Cereal", type: "veg" },
      { name: "Roti", type: "veg" },
      { name: "Noodles", type: "veg" }
    ],

    Dairy: [
      { name: "Milk", type: "veg" },
      { name: "Yogurt", type: "veg" },
      { name: "Cheese", type: "veg" },
      { name: "Butter", type: "veg" },
      { name: "Curd", type: "veg" }
    ]
  };

  /* ✅ COUNTRY FOODS */

  const countryFoods = {

    India: [
      { name: "Roti", type: "veg" },
      { name: "Dal", type: "veg" },
      { name: "Idli", type: "veg" },
      { name: "Dosa", type: "veg" },

      { name: "Butter Chicken", type: "nonveg" },
      { name: "Biryani", type: "nonveg" }
    ],

    Italy: [
      { name: "Pizza", type: "veg" },
      { name: "Pasta", type: "veg" },

      { name: "Lasagna", type: "nonveg" }
    ]

  };

  /* ✅ FILTER LOGIC */

  const isVegUser = userData.foodType === "Vegetarian";

  const filterFoods = (foodList) => {
    if (!isVegUser) return foodList;
    return foodList.filter(food => food.type === "veg");
  };

  /* ✅ TOGGLE */

  const toggleFood = (food) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter(item => item !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  /* ✅ CUSTOM FOOD */

  const addCustomFood = () => {
    if (!customFood.trim()) return;

    setSelectedFoods([...selectedFoods, customFood]);
    setCustomFood("");
  };

  return (
    <div className="diet-page">

      <Header
        userData={userData}
        activeScreen="diet"
        goToDiet={() => {}}
        goToResults={goToResults}
        goToTips={goToTips}
        goToBMI={goToBMI}
        goToInfo={goToInfo}
        goToLogin={goToLogin}
      />

      <div className="diet-content">
        <div className="diet-card">

          <h2>What did you eat today?</h2>
          <p>Click on the foods you ate. You can select multiple items.</p>

          {/* ✅ USER TYPE LABEL */}
          <div className="food-filter-label">
            🍽 Showing {isVegUser ? "Vegetarian Foods Only" : "Veg + Non-Veg Foods"}
          </div>

          {/* ✅ MAIN FOODS */}
          {Object.keys(foods).map(category => {

            const filteredFoods = filterFoods(foods[category]);

            if (filteredFoods.length === 0) return null;

            return (
              <div key={category} className="food-section">

                <h3>{category}</h3>

                <div className="food-grid">
                  {filteredFoods.map(food => (
                    <button
                      key={food.name}
                      className={`food-btn ${food.type} ${
                        selectedFoods.includes(food.name) ? "selected" : ""
                      }`}
                      onClick={() => toggleFood(food.name)}
                    >
                      {food.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}

          {/* ✅ COUNTRY FOODS */}
          {countryFoods[userData.country] && (
            <div className="food-section">

              <h3>🌍 Foods from {userData.country}</h3>

              <div className="food-grid">
                {filterFoods(countryFoods[userData.country]).map(food => (
                  <button
                    key={food.name}
                    className={`food-btn ${food.type} ${
                      selectedFoods.includes(food.name) ? "selected" : ""
                    }`}
                    onClick={() => toggleFood(food.name)}
                  >
                    {food.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ✅ CUSTOM FOOD */}
          <div className="custom-food">

            <h3>🍽 Add Other Food</h3>

            <div className="custom-input">
              <input
                type="text"
                placeholder="e.g. Pizza, Ice Cream..."
                value={customFood}
                onChange={(e) => setCustomFood(e.target.value)}
              />

              <button onClick={addCustomFood}>+ Add</button>
            </div>
          </div>

          {/* ✅ SAVE BUTTON */}
          <div className="selected-foods">
            <button className="save-btn" onClick={goToResults}>
              ✔ Save My Meal ({selectedFoods.length} foods)
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Diet;