import { createContext, useState } from "react";

const foodContext = createContext();

const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  return (
    <foodContext.Provider value={{ foods, setFoods }}>
      {children}
    </foodContext.Provider>
  );
};

export { FoodProvider, foodContext };
