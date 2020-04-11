import React from "react";

import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
} from "./../../redux/actionCreators";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (body) => {
      const action = updateSendMessageCreator(body);
      dispatch(action);
    },

    updateNewMessageBody: () => {
      const action = updateNewMessageBodyCreator();
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
