import React from "react";
import Header from "./Components/Header";
import "./css/Results.css";

const Results = ({
  userData,
  selectedFoods,
  goToDiet,
  goToTips,
  goToBMI,
  goToInfo
}) => {

  /* ✅ FOOD NUTRITION DATABASE */
  const foodData = {

    Apple: { protein: 0.3, carbs: 14, fiber: 2.4, vitamins: 5, minerals: 2 },
    Banana: { protein: 1.1, carbs: 23, fiber: 2.6, vitamins: 8, minerals: 3 },
    Orange: { protein: 0.9, carbs: 12, fiber: 2.2, vitamins: 10, minerals: 4 },
    Grapes: { protein: 0.6, carbs: 17, fiber: 0.9, vitamins: 4, minerals: 2 },
    Berries: { protein: 0.7, carbs: 14, fiber: 2.0, vitamins: 9, minerals: 3 },

    Broccoli: { protein: 2.8, carbs: 7, fiber: 2.6, vitamins: 12, minerals: 8 },
    Carrots: { protein: 0.9, carbs: 10, fiber: 2.8, vitamins: 11, minerals: 6 },
    Spinach: { protein: 2.9, carbs: 3.6, fiber: 2.2, vitamins: 15, minerals: 10 },
    Tomatoes: { protein: 0.9, carbs: 3.9, fiber: 1.2, vitamins: 9, minerals: 5 },
    Lettuce: { protein: 1.4, carbs: 2.9, fiber: 1.3, vitamins: 6, minerals: 4 },

    Tofu: { protein: 8, carbs: 2, fiber: 1, vitamins: 2, minerals: 6 },
    Beans: { protein: 9, carbs: 27, fiber: 9, vitamins: 4, minerals: 7 },
    Paneer: { protein: 11, carbs: 3, fiber: 0, vitamins: 2, minerals: 5 },
    Lentils: { protein: 9, carbs: 20, fiber: 8, vitamins: 3, minerals: 6 },

    Chicken: { protein: 27, carbs: 0, fiber: 0, vitamins: 2, minerals: 4 },
    Fish: { protein: 22, carbs: 0, fiber: 0, vitamins: 3, minerals: 5 },
    Eggs: { protein: 13, carbs: 1, fiber: 0, vitamins: 2, minerals: 3 },
    Mutton: { protein: 25, carbs: 0, fiber: 0, vitamins: 1, minerals: 4 },
    Prawns: { protein: 24, carbs: 0, fiber: 0, vitamins: 2, minerals: 4 },

    Rice: { protein: 2.7, carbs: 28, fiber: 0.4, vitamins: 1, minerals: 1 },
    Bread: { protein: 9, carbs: 49, fiber: 2.7, vitamins: 2, minerals: 2 },
    Pasta: { protein: 5, carbs: 25, fiber: 1.3, vitamins: 1, minerals: 1 },
    Oatmeal: { protein: 13, carbs: 68, fiber: 10, vitamins: 3, minerals: 5 },
    Cereal: { protein: 8, carbs: 84, fiber: 6, vitamins: 4, minerals: 3 },
    Roti: { protein: 3.5, carbs: 18, fiber: 2.0, vitamins: 1, minerals: 1 },
    Noodles: { protein: 4.5, carbs: 25, fiber: 1.0, vitamins: 1, minerals: 1 },

    Milk: { protein: 3.4, carbs: 5, fiber: 0, vitamins: 4, minerals: 6 },
    Yogurt: { protein: 10, carbs: 3.6, fiber: 0, vitamins: 3, minerals: 5 },
    Cheese: { protein: 25, carbs: 1.3, fiber: 0, vitamins: 2, minerals: 8 },
    Butter: { protein: 0.5, carbs: 0.1, fiber: 0, vitamins: 1, minerals: 1 },
    Curd: { protein: 11, carbs: 4, fiber: 0, vitamins: 3, minerals: 6 }
  };

  /* ✅ SAFE TOTALS */
  const totals = {
    protein: 0,
    carbs: 0,
    fiber: 0,
    vitamins: 0,
    minerals: 0
  };

  selectedFoods?.forEach(food => {

    const item = foodData?.[food];

    if (!item) return;

    totals.protein += item.protein || 0;
    totals.carbs += item.carbs || 0;
    totals.fiber += item.fiber || 0;
    totals.vitamins += item.vitamins || 0;
    totals.minerals += item.minerals || 0;
  });

  /* ✅ GOALS */
  const goals = {
    protein: 52,
    carbs: 130,
    fiber: 38,
    vitamins: 75,
    minerals: 1300
  };

  const getPercent = (value, goal) =>
    Math.min((value / goal) * 100, 100);

  return (
    <div className="results-page">

      <Header
        userData={userData}
        activeScreen="results"
        goToDiet={goToDiet}
        goToTips={goToTips}
        goToBMI={goToBMI}
        goToInfo={goToInfo}
      />

      <div className="results-card">

        <h2>📊 Your Nutrition Today</h2>
        <p>You ate <b>{selectedFoods?.length || 0}</b> foods today</p>

        {/* ✅ PROTEIN */}
        <div className="nutrient">
          <div className="nutrient-header">
            <span>Protein</span>
            <span>{totals.protein.toFixed(1)} / {goals.protein}</span>
          </div>
          <div className="bar-bg">
            <div
              className="bar-fill protein"
              style={{ width: `${getPercent(totals.protein, goals.protein)}%` }}
            />
          </div>
        </div>

        {/* ✅ CARBS */}
        <div className="nutrient">
          <div className="nutrient-header">
            <span>Carbohydrates</span>
            <span>{totals.carbs.toFixed(1)} / {goals.carbs}</span>
          </div>
          <div className="bar-bg">
            <div
              className="bar-fill carbs"
              style={{ width: `${getPercent(totals.carbs, goals.carbs)}%` }}
            />
          </div>
        </div>

        {/* ✅ FIBER */}
        <div className="nutrient">
          <div className="nutrient-header">
            <span>Fiber</span>
            <span>{totals.fiber.toFixed(1)} / {goals.fiber}</span>
          </div>
          <div className="bar-bg">
            <div
              className="bar-fill fiber"
              style={{ width: `${getPercent(totals.fiber, goals.fiber)}%` }}
            />
          </div>
        </div>

        {/* ✅ VITAMINS */}
        <div className="nutrient">
          <div className="nutrient-header">
            <span>Vitamins</span>
            <span>{totals.vitamins.toFixed(1)} / {goals.vitamins}</span>
          </div>
          <div className="bar-bg">
            <div
              className="bar-fill vitamins"
              style={{ width: `${getPercent(totals.vitamins, goals.vitamins)}%` }}
            />
          </div>
        </div>

        {/* ✅ MINERALS */}
        <div className="nutrient">
          <div className="nutrient-header">
            <span>Minerals</span>
            <span>{totals.minerals.toFixed(1)} / {goals.minerals}</span>
          </div>
          <div className="bar-bg">
            <div
              className="bar-fill minerals"
              style={{ width: `${getPercent(totals.minerals, goals.minerals)}%` }}
            />
          </div>
        </div>

        <button className="back-btn" onClick={goToDiet}>
          ← Back
        </button>

      </div>
    </div>
  );
};

export default Results;