import React from "react";
import { Field, reduxForm } from "redux-form";

import style from "../Login.module.css";

const LoginForm = (props) => {
  const messageError = props.messageErrorAuth.map((e, index) => {
    return (<div key={index}>{e}</div>)
  })
 
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={"input"}
            name={"email"}
            type={"email"}
            placeholder={"Email"}
          />
        </div>
        <div>
          <Field
            component={"input"}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
          />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
          <span className={style.rememberMe}>remember me</span>
        </div>
        <div>
          <button>Submit</button>
          <div className={style.messageError}>{messageError}</div>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm