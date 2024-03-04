import React from "react";
import { Field, reduxForm } from "redux-form";

import { maxLength, required } from "../../../../utils/validators/validators";
import { Textarea } from "../../../Common/FormsControl/FormsControl";

const maxLength20 = maxLength(20);

const MyPostsForm = (props) => {
  
  return (
     <form onSubmit={props.handleSubmit}>
        <div>
          <Field
          placeholder="Додайте свій текст"
          name="newPost"
          component={Textarea}
          validate={[required, maxLength20]}
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
  )
}

const MyPostsReduxForm = reduxForm({
  form: "myPost"
})(MyPostsForm)

export default MyPostsReduxForm