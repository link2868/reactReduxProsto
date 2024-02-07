import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setAuthUser, setPhotoUser } from "../../redux/authReducer";

import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
              withCredentials: true,
          })
        .then((response) => {
              if (response.data.resultCode === 0) {
                  const { id, login, email } = response.data.data;
                  this.props.setAuthUser(id, login, email);
                  // this.props.setAuthUser(response.data.data);
                return(id)
              }
          })
        .then((id) => {
      axios
          .get("https://social-network.samuraijs.com/api/1.0/profile/"+id)
          .then((response) => {
            this.props.setPhotoUser(response.data.photos.small);
          });
      });
  }
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

export default connect(mapStateToProps, { setAuthUser, setPhotoUser })(
  HeaderContainer
);
