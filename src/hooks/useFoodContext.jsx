import { useContext } from "react";
import { foodContext } from "../context/FoodContext";

const useFoodContext = () => {
  const { foods, setFoods } = useContext(foodContext);
  return [foods, setFoods];
};

export default useFoodContext;
