import React from "react";
import { Field, reduxForm } from "redux-form";

import style from "../Dialogs.module.css";
import { Textarea } from "../../Common/FormsControl/FormsControl";
import { required, maxLength } from "../../../utils/validators/validators";

const maxLength10 = maxLength(10);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newMessage}>
      <div>
        <Field
            placeholder="Додайте свій текст"
            name="newMessage"
          component={Textarea} 
          validate={[required, maxLength10]}
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