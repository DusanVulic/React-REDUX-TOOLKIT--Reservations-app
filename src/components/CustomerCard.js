import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

const CustomerCard = ({ id, name, food }) => {
  const dispatch = useDispatch();
  const [meal, setMeal] = useState([]);

  const addFoodHandler = (id) => {
    if (!meal) {
      console.log("empty input");
      return;
    }

    dispatch(addFoodToCustomer({ id, food: meal }));
    setMeal([]);
  };

  return (
    <div className="customer-food-card-container">
      <h4 className="customer-name">{name}</h4>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((meal, index) => {
            return <p key={index}> {meal}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            className="input"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          />
          <button className="form-btn" onClick={() => addFoodHandler(id, meal)}>
            Add food
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
