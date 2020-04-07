import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N } from "../../core/constants";

import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={ROUTES.PROFILE}>{I18N.EN.PROFILE}</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={ROUTES.MESSAGES}>{I18N.EN.MESSAGES}</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={ROUTES.NEWS}>{I18N.EN.NEWS}</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={ROUTES.MUSIC}>{I18N.EN.MUSIC}</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to={ROUTES.SETTINGS}>{I18N.EN.SETTINGS}</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
