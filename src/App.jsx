import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MealDbCartContainer from "./components/MealDbCartContainer/MealDbCartContainer";

function App() {
  const [meals, setMeals] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <MealDbCartContainer meals={meals}></MealDbCartContainer>
    </div>
  );
}

export default App;
