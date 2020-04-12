import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { store } from "./redux/redux-store";

import "./index.css";
import { Provider } from "react-redux";

const rerenderEntireTree = () => { 
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

store.subscribe( () => {
  rerenderEntireTree();
});
