import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { postFormLogin } from "../../redux/authReducer";
import style from "./Login.module.css";
import { Navigate } from "react-router-dom";


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

const Login = (props) => {
    const onSubmit = (formData) => { 
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
      <LoginReduxForm onSubmit={onSubmit} messageErrorAuth={ props.messageErrorAuth} />
    </div>
  );
};

const mapStateToProps = (state) => { 
  return ({
    resultAuth: state.authUser.resultAuth,
    messageErrorAuth: state.authUser.messageErrorAuth
  })
 
}
export default connect(mapStateToProps, {postFormLogin})(Login);
