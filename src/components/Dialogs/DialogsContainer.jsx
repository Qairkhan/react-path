import React from "react";
import { connect } from "react-redux";

import {
  updateNewMessageBodyCreator,
  updateSendMessageCreator,
} from "./../../redux/actionCreators";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
