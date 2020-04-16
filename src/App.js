import React from "react";
import { Route } from "react-router-dom";

import { ROUTES } from "./core/constants";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settigns from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path={`${ROUTES.PROFILE}/:userId?`}
          render={() => <ProfileContainer />}
        />
        <Route path={ROUTES.MESSAGES} render={() => <DialogsContainer />} />
        <Route path={ROUTES.NEWS} component={News} />
        <Route path={ROUTES.MUSIC} component={Music} />
        <Route path={ROUTES.USERS} render={() => <UsersContainer />} />
        <Route path={ROUTES.SETTINGS} component={Settigns} />
      </div>
    </div>
  );
};

export default App;
