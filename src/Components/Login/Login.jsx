import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import { postFormLogin } from "../../redux/authReducer";
import LoginReduxForm from "./LoginForm/LoginForm";

import style from "./Login.module.css";


const Login = (props) => {
  const submitPostFormLogin = (formData) => { 
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
      <LoginReduxForm onSubmit={submitPostFormLogin} messageErrorAuth={ props.messageErrorAuth} />
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
