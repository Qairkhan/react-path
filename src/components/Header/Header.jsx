import React from "react";
import s from "./Header.module.css";

const HeaderLink = "https://i.pinimg.com/originals/d9/12/09/d91209340bdc005936c46323a62caaff.png"

const Header = () => {
    return (
      <header className = {s.header}>
        <img src={HeaderLink}/>
      </header>
    );    
}

export default Header;