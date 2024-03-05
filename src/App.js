import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/NavBar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginPage from "./Components/Login/Login";
import Preloader from "./Components/Common/Preloader/Preloader";

import { initializeApp } from "./redux/appReducer";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.resultInit) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/profile" element={<ProfileContainer />} /> */}
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            {/* <Route path="/dialogs" element={<DialogsContainer />} /> */}
            <Route path="/dialogs/:id?" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resultInit: state.app.resultInit,
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
