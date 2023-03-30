import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Output from "../Output/Output";

const MealDbCartContainer = (props) => {
  const [clickedOn, setClickedOn] = useState("");
  const { meals } = props.meals;
  const showOutput = (strMeal) => {
    setClickedOn(strMeal);
  };
  return (
    <div className="grid grid-cols-6">
      <div className="grid lg:grid-cols-2 gap-3 col-span-5">
        {meals &&
          meals.map((meal) => (
            <Cart meal={meal} showOutput={showOutput} key={meal.idMeal}></Cart>
          ))}
      </div>
      <div>
        <Output clickedOn={clickedOn}></Output>
      </div>
    </div>
  );
};

export default MealDbCartContainer;
