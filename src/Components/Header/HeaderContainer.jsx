import React from "react";
import { connect } from "react-redux";

import { deleteFormLogout } from "../../redux/authReducer";

import Header from "./Header";

class HeaderContainer extends React.Component {
 
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    resultAuth: state.authUser.resultAuth,
    login: state.authUser.login,
    photos: state.authUser.photos,
  };
};

export default connect(mapStateToProps, { deleteFormLogout })(
  HeaderContainer
);
