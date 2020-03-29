import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost, updateNewpostText} from './components/redux/State'


export const rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App appState={state} addPost={addPost} updateNewPostText={updateNewpostText}/>
  </React.StrictMode>,
  </BrowserRouter>,

  document.getElementById('root')
);
}

