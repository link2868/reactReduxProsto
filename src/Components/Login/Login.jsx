import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { postFormLogin } from "../../redux/authReducer";
import style from "./Login.module.css";
import { Navigate } from "react-router-dom";


const LoginForm = (props) => {
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
          <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember
          me
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => { 
      console.log(formData)
      props.postFormLogin(formData.email, formData.password, formData.rememberMe);
    }
  
  if (props.resultAuth) { 
    return (
      <Navigate to={"/profile"} />
    )
  }
  
  return (
    <div className={style.loginBlock}>
      <h2>Авторизація</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => { 
  return ({
    resultAuth: state.authUser.resultAuth
  })
 
}
export default connect(mapStateToProps, {postFormLogin})(Login);
