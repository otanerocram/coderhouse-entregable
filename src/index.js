import React from "react";
import ReactDOM from "react-dom";
import CartContextProvider from "./components/context/CartContext";
import { BrowserRouter } from "react-router-dom";
import { positions, Provider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  timeout: 5000,
  position: positions.MIDDLE,
  transition: transitions.SCALE,
  type: "info",
  containerStyle: {
    zIndex: 99999,
  },
};

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <Provider template={AlertTemplate} {...options}>
        <App />
      </Provider>
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
