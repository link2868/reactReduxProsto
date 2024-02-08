import React from "react";
import { connect } from "react-redux";

import { api } from "../../api/api";

import { setAuthUser, setPhotoUser } from "../../redux/authReducer";

import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
// .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true,})
    api.getAuth()
        .then((data) => {
              if (data.resultCode === 0) {
                  const { id, login, email } = data.data;
                  this.props.setAuthUser(id, login, email);
                  // this.props.setAuthUser(response.data.data);
                return(id)
              }
          })
        .then((id) => {
          // .get("https://social-network.samuraijs.com/api/1.0/profile/"+id)
        api.getProfile(id)
          .then((data) => {
            this.props.setPhotoUser(data.photos.small);
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
