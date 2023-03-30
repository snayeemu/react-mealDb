import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ meal, showOutput }) => {
  const {
    strMeal,
    strInstructions,
    idMeal,
    strArea,
    strCategory,
    strMealThumb,
  } = meal;

  return (
    <div>
      <div className="card w-96 glass h-full shadow-2xl">
        <figure>
          <img src={strMealThumb} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p>Made in: {strArea}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => showOutput(strMeal)}
            >
              Details{" "}
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="ms-2"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
