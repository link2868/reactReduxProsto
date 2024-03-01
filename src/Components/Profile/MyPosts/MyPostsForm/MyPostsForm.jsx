import React from "react";
import { Field, reduxForm } from "redux-form";

const MyPostsForm = (props) => {
  return (
     <form onSubmit={props.handleSubmit}>
        <div>
          <Field
          placeholder="Додайте свій текст"
          name="newPost"
          component={"textarea"}
            // onChange={onPostChange}
            // value={newPostText}
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