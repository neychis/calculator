import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/index";
import Main from "./components/Main";
import "./styles/index.scss";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Main />
    <footer>
      Designed and coded by <br />
      <a
        href="https://www.freecodecamp.org/neychis"
        rel="noopener noreferrer"
        target="_blank"
      >
        Neychis
      </a>
    </footer>
  </Provider>,
  document.getElementById("root")
);
