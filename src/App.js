import React from "react";
import {BrowserRouter, Route} from "react-router-dom"

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settigns from "./components/Settings/Settings";
import {ROUTES} from "./components/core/constants";

import "./App.css";

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path={ROUTES.PROFILE} rennder={ () => <Profile posts={props.Appstate.ProfilePage}/>} />
        <Route path={ROUTES.MESSAGES} rennder={ () => <Dialogs messages={props.Appstate.MessagePage} users={props.Appstate.DialogPage}/>} />
        <Route path={ROUTES.NEWS} component={News} />
        <Route path={ROUTES.MUSIC} component={Music} />
        <Route path={ROUTES.SETTINGS} component={Settigns} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
