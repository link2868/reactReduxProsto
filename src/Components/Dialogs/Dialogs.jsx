import React from "react";

import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

import style from "./Dialogs.module.css";

const Dialogs = (props) => {
  const state = props.dialogsMessagesPage;
  const dialogsElement = state.dialogs.map((elem) => (
    <Dialog key={ elem.id} id={elem.id} name={elem.name} avatar={elem.avatar} />
  ));

  const messagesElement = state.messages.map((elem) => (
    <Message key={ elem.id} message={elem.message} />
  ));
  
  const newMessageText = state.newMessageText
  
  // const refNewMessage = React.createRef();

  const onAddNewMessage = () => {
    props.addMessagesMessage();
  };

  const onMessageChange = (event) => {
    const text = event.target.value;
    props.updateMessageText(text);
  };

  // if (!props.resultAuth) { 
  //   return <Navigate to={"/login"} />
  // }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElement}</div>
      <div className={style.messages}>
        <div>{messagesElement}</div>
        <div className={style.newMessage}>
          <div>
            <textarea
              placeholder="Додайте свій текст"
              onChange={onMessageChange}
              value={newMessageText}
              // ref={refNewMessage}
            ></textarea>
          </div>
          <div>
            <button onClick={onAddNewMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
