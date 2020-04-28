import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../../core/constants";

import style from "./Header.module.css";

const HEDAER_IMG =
  "https://i.pinimg.com/originals/d9/12/09/d91209340bdc005936c46323a62caaff.png";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={HEDAER_IMG} />
      <div className={style.loginBlock}>
        {props.isAuth ? (
         <div> {props.login} - <button onClick={props.logout}>LogOut</button> </div>
        ) : (
          <NavLink to={ROUTES.LOGIN}>{I18N.EN.LOGIN}</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
