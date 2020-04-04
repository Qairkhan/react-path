import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES, I18N} from "../../core/constants";
import ACTION_TYPES from "../../redux/actionTypes"

import s from "./Dialogs.module.css";

const DialogItem = props => {
  const way = `${ROUTES.MESSAGES}/${props.id}`;
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={way}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.dialogs}>{props.message}</div>;
};

const dialogsElements = (usersData) => usersData.map(dialog => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

const messagesElements = (messagesData) => messagesData.map(message => (
  <Message message={message.message} />
));

const Dialogs = (props) => {
    
  let newMessageBody = props.newMessageBody;

  
  let onSendMessageClick = () => {
    props.store.dispatch(ACTION_TYPES.SEND_MESSAGE())
  }

  let onSendMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY(body))
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogsElements(props.users.usersData)}</div>
        <div className={s.messages}>{messagesElements(props.messages.messagesData)}</div>
      </div>
      <div>
        <div>
          <textarea 
            value={newMessageBody} 
            onChange={onSendMessageChange}
            placeholder='Text'>
          </textarea>
        </div>
        <div><button onClick ={onSendMessageClick}>Send</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
