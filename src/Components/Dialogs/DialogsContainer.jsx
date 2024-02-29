// import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  addMessagesMessageActionCreator
} from "../../redux/dialogsMessagesReducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsMessagesPage: state.dialogsMessagesPage,
    resultAuth: state.authUser.resultAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  
  return {
    addMessagesMessage: (newMessage) => {
      dispatch(addMessagesMessageActionCreator(newMessage));
    },
    // updateMessageText: (text) => {
    //   dispatch(updateMessageTextActionCreator(text));
    // },
  };
};

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Dialogs);

export default DialogsContainer;
