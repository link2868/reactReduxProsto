import React from "react";
import { Field, reduxForm } from "redux-form";

import { Input } from "../../Common/FormsControl/FormsControl";
import { required } from "../../../utils/validators/validators";
import style from "../Login.module.css";

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Input}
            name={"email"}
            type={"email"}
            placeholder={"Email"}
            validate={required}
          />
        </div>
        <div>
          <Field
            component={Input}
            name={"password"}
            type={"password"}
            placeholder={"Password"}
            validate={required}
          />
        </div>
        <div>
          <Field component={"input"} name={"rememberMe"} type={"checkbox"} />
          <span className={style.rememberMe}>remember me</span>
        </div>
        <div>
          <button >Submit</button>
          <div className={style.messageError}>{props.error}</div>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default LoginReduxForm;
