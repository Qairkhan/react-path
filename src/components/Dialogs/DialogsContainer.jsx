import React from "react";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
} from "./../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      const action = updateSendMessageCreator();
      dispatch(action);
    },

    updateNewMessageBody: (body) => {
      const action = updateNewMessageBodyCreator(body);
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
