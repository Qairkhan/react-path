import React from "react";

import ACTION_TYPES from "../../redux/actionTypes";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";


let mapStateToProps = (state) => {

  return {
    dialogsPage: state.dialogsPage

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch({ type: ACTION_TYPES.SEND_MESSAGE });

    },
    sendMessage: (body) => {
      dispatch({
        type: ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY,
        payload: body,
      });
    }
    
  }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
