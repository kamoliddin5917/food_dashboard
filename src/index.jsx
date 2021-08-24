import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FoodProvider } from "./context/FoodContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FoodProvider>
        <App />
      </FoodProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
