import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"

import App from './App';
import {store} from './redux/State'

import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App appState={store.getState()} 
             dispatch={store.dispatch.bind(store)} 
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


