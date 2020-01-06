import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // provider is a component class from react-redux once passed the stored object will be able to give
  // that redux store context to the rest of application (pull values of the store, give values)
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
