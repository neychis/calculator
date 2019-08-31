import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/index";
import Main from "./components/Main";
import "./styles.css";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
