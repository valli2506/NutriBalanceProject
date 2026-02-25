import Header from "./Components/Header";
import "./css/Tips.css";

const Tips = ({
  userData,
  selectedFoods,
  goToDiet,
  goToResults,
  goToTips,
  goToBMI,
  goToInfo
}) => {

  const nutrientDB = {
    Apple: { protein: 0.3, carbs: 14, fiber: 2.4, vitamins: 5, minerals: 1 },
    Banana: { protein: 1.3, carbs: 27, fiber: 3.1, vitamins: 8, minerals: 2 },
    Rice: { protein: 2.7, carbs: 28, fiber: 0.4, vitamins: 0, minerals: 1 },
    Roti: { protein: 3, carbs: 18, fiber: 2.5, vitamins: 0, minerals: 1 },
    Dal: { protein: 9, carbs: 20, fiber: 8, vitamins: 2, minerals: 3 },
    Milk: { protein: 3.4, carbs: 5, fiber: 0, vitamins: 4, minerals: 5 },
    Eggs: { protein: 13, carbs: 1, fiber: 0, vitamins: 6, minerals: 4 },
    Tofu: { protein: 8, carbs: 2, fiber: 1, vitamins: 1, minerals: 2 }
  };

  const goals = {
    protein: 52,
    carbs: 130,
    fiber: 38,
    vitamins: 75,
    minerals: 1300
  };

  const totals = selectedFoods.reduce(
    (acc, food) => {
      const n = nutrientDB[food] || {};
      acc.protein += n.protein || 0;
      acc.carbs += n.carbs || 0;
      acc.fiber += n.fiber || 0;
      acc.vitamins += n.vitamins || 0;
      acc.minerals += n.minerals || 0;
      return acc;
    },
    { protein: 0, carbs: 0, fiber: 0, vitamins: 0, minerals: 0 }
  );

  const percent = (value, goal) => (value / goal) * 100;

  const proteinLow = percent(totals.protein, goals.protein) < 60;
  const fiberLow = percent(totals.fiber, goals.fiber) < 60;
  const mineralsLow = percent(totals.minerals, goals.minerals) < 60;

  return (
    <div className="results-page">
      <div className="results-wrapper">

        {/* ✅ ONLY FIX → PROP ORDER STANDARDIZED */}
        <Header
          userData={userData}
          goToDiet={goToDiet}
          goToResults={goToResults}
          goToTips={goToTips}
          goToBMI={goToBMI}
          activeScreen="tips"
        />

        <div className="results-container">

          <h2>💡 Tips Just For You</h2>
          <p className="subtitle">Based on what you ate today</p>

          {proteinLow && (
            <div className="tip-card protein">
              <h3>You Need Protein! 🍗</h3>
              <p>Try adding eggs, tofu, paneer, or dal.</p>
            </div>
          )}

          {fiberLow && (
            <div className="tip-card fiber">
              <h3>More Fiber Needed 🌾</h3>
              <p>Eat fruits, vegetables, oats, whole grains.</p>
            </div>
          )}

          {mineralsLow && (
            <div className="tip-card minerals">
              <h3>Boost Minerals 💊</h3>
              <p>Milk, curd, leafy greens help a lot.</p>
            </div>
          )}

          <h2 className="meal-title">🍽 Healthy Meal Ideas</h2>

          <div className="meal-section">
            <h4>🌞 Breakfast Ideas</h4>
            <ul>
              <li>Oatmeal with banana and milk</li>
              <li>Eggs with whole wheat toast</li>
              <li>Yogurt with berries</li>
              <li>Cereal with milk and an apple</li>
            </ul>
          </div>

          <div className="meal-section">
            <h4>☀ Lunch Ideas</h4>
            <ul>
              <li>Chicken with rice and broccoli</li>
              <li>Fish with pasta and carrots</li>
              <li>Beans with bread and tomatoes</li>
              <li>Tofu with rice and spinach</li>
            </ul>
          </div>

          <div className="meal-section">
            <h4>🌙 Dinner Ideas</h4>
            <ul>
              <li>Grilled chicken with vegetables</li>
              <li>Fish with rice and salad</li>
              <li>Pasta with cheese and vegetables</li>
              <li>Eggs with bread and spinach</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tips;