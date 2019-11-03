import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const storeApp =
    createStore(
        reducers, // Addl reducers
        {},  // Init state
        applyMiddleware(reduxThunk)); // middleware: ReduxThunk for async

ReactDOM.render(
  <Provider store={storeApp}>
    <App />
  </Provider>,
  document.getElementById("root")
);
