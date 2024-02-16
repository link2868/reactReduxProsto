// import React from "react";
import { connect } from "react-redux";

import {
  addMessagesMessageActionCreator,
  updateMessageTextActionCreator,
} from "../../redux/dialogsMessagesReducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   const state = props.store.getState().dialogsMessagesPage;

//   const addNewMessage = () => {
//     // props.addMessagesMessage();
//     props.store.dispatch(addMessagesMessageActionCreator());
//   };

//   const onMessageChange = (text) => {
//     props.store.dispatch(updateMessageTextActionCreator(text));
//   };

//   return (
//     <Dialogs
//       dialogsMessagesPage={ state}
//       addMessagesMessage = {addNewMessage}
//       updateMessageText = {onMessageChange}
//     />
//   );
// };
const AuthNavigate = withAuthNavigate(Dialogs)

const mapStateToProps = (state) => {
  return {
    dialogsMessagesPage: state.dialogsMessagesPage,
    resultAuth: state.authUser.resultAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessagesMessage: () => {
      dispatch(addMessagesMessageActionCreator());
    },
    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigate);

export default DialogsContainer;
