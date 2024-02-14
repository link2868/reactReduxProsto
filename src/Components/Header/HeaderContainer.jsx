import React from "react";
import { connect } from "react-redux";

import { getAuthThunkCreator } from "../../redux/authReducer";

import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthThunkCreator()

    // api.getAuth()
    //     .then((data) => {
    //           if (data.resultCode === 0) {
    //               const { id, login, email } = data.data;
    //               this.props.setAuthUser(id, login, email);
    //               // this.props.setAuthUser(response.data.data);
    //             return(id)
    //           }
    //       })
    //     .then((id) => {
        
    //     api.getProfile(id)
    //       .then((data) => {
    //         this.props.setPhotoUser(data.photos.small);
    //       });
    //   });
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

export default connect(mapStateToProps, { getAuthThunkCreator })(
  HeaderContainer
);
