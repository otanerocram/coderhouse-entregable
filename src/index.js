import React from "react";
import ReactDOM from "react-dom";
import { positions, Provider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const options = {
  timeout: 3000,
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
  type: "info",
  containerStyle: {
    zIndex: 99999,
  },
};

ReactDOM.render(
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>,
  document.getElementById("root")
);
