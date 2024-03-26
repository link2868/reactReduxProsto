import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./redux/reduxStore";

// import {
//   addProfilePost,
//   updateNewPostText,
//   addMessagesMessage,
//   subscribe,
// } from "./redux/state";

import "./index.css";

setInterval(() => {
  store.dispatch({ type: "FAKE" });
}, 1000);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />,
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// renderUi(store.getState());

// store.subscribe(() => {
//   const state = store.getState();
//   renderUi(state);

serviceWorker.unregister();
