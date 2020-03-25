import React from "react";

import s from "./Header.module.css";

const HEDAER_IMG = "https://i.pinimg.com/originals/d9/12/09/d91209340bdc005936c46323a62caaff.png"

const Header = () => {
    return (
      <header className = {s.header}>
        <img src={HEDAER_IMG}/>
      </header>
    );    
}

export default Header;