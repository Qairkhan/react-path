import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"
import * as serviceWorker from './serviceWorker';


import App from './App';
import {store} from './components/redux/State'

import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App appState={store.getState()} 
             addPost={store.addPost.bind(store)} 
             updateNewPostText={store.updateNewpostText.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


