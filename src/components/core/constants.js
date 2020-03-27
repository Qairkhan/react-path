import React from "react";
import { NavLink } from "react-router-dom";
import s from "./constants.module.css";

const ROUTES = {    
    PROFILE: "/profile",
    MESSAGES: "/dialogs",
    NEWS: "/news",
    MUSIC: "/music",
    SETTINGS: "/settings", 
};

const I18N = {
    EN: {
        PROFILE: "Profile",
        MESSAGES: "Messages",
        NEWS: "News",
        MUSIC: "Music",
        SETTINGS: "Settings", 
        ADDPOST: "Add post",
        TEXT_LIKE: "Like",
        USER_POST: "My post"
    },
    RU: {
        PROFILE: "Профиль",
        MESSAGES: "Сообщения",
        NEWS: "Новости",
        MUSIC: "Музыка",
        SETTINGS: "Настройки", 
        ADDPOST: "Добавить сообщение",
        TEXT_LIKE: "Нравится",
        USER_POST: "Мое сообщение"
    }
}

const DialogItem = props => {
    let path = ROUTES.MESSAGES + "/" + props.id;
  
    return (
      <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };

const Message = props => {
    return <div className={s.dialogs}>{props.message}</div>;
  };

let dialogsData = [
    { id: 1, name: "Mukha" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Belyi" },
    { id: 4, name: "Mysyk" },
    { id: 5, name: "Alina" }
  ];

let messagessData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Salem alem" },
    { id: 3, message: "4to tam" },
    { id: 4, message: "Da nu" },
    { id: 5, message: "Realno?" }
  ];

let dialogsElements = dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

let messagesElements = messagessData.map(m => (
    <Message message={m.message} />
  ));

export {ROUTES, I18N, messagesElements, dialogsElements} ;
