import React from "react";
import { Field, reduxForm } from "redux-form";

import style from "../Dialogs.module.css";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newMessage}>
      <div>
        <Field
            placeholder="Додайте свій текст"
            name="newMessage"
            component={"textarea"}   
        ></Field>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: "newMessage" })(MessageForm);
export default MessageReduxForm