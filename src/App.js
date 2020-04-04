import React from "react";
import {Route} from "react-router-dom"

import {ROUTES} from "./core/constants";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settigns from "./components/Settings/Settings";

import "./App.css";

const App = (props) => {
    return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path={ROUTES.PROFILE} render={ () => <Profile posts={props.appState.ProfilePage} dispatch={props.dispatch} />} />
        <Route path={ROUTES.MESSAGES} render={ () => <Dialogs messages={props.appState.MessagePage} users={props.appState.DialogPage}/>} />
        <Route path={ROUTES.NEWS} component={News} />
        <Route path={ROUTES.MUSIC} component={Music} />
        <Route path={ROUTES.SETTINGS} component={Settigns} />
      </div>
    </div>    
  );
}

export default App;
