import React from "react";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageReduxForm from "./DialogsMessageForm/MessageForm";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  const state = props.dialogsMessagesPage;
  const dialogsElement = state.dialogs.map((elem) => (
    <Dialog key={ elem.id} id={elem.id} name={elem.name} avatar={elem.avatar} />
  ));

  const messagesElement = state.messages.map((elem) => (
    <Message key={ elem.id} message={elem.message} />
  ));
  
  // const newMessageText = state.newMessageText
  
    const onAddNewMessage = (value) => {
      props.addMessagesMessage(value.newMessage);
  };

  // const onMessageChange = (event) => {
  //   const text = event.target.value;
  //   props.updateMessageText(text);
  // };

  // if (!props.resultAuth) { 
  //   return <Navigate to={"/login"} />
  // }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        <div>{messagesElement}</div>
       <MessageReduxForm onSubmit={onAddNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
