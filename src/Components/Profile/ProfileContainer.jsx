import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";

import Profile from "./Profile";
import {
  setUserProfileThunkCreator,
  getUserStatus,
  updateUserStatus,
  savePhoto
} from "../../redux/profilePostsReducer";

// import Preloader from "../Common/Preloader/Preloader";
import style from "./Profile.module.css";

const withRouter = (WrappedComponent) => {
  return (props) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
  };
};

// const withRouter = (WrappedComponent) => (props) => {
//   const params = useParams();

//   return <WrappedComponent {...props} params={params} />;
// };


class ProfileContainer extends React.Component {

  refreshProfile() { 
  let userId = this.props.params.userId;
    if (!userId && this.props.resultAuth) {
      userId = this.props.id;
    }
    this.props.setUserProfileThunkCreator(userId);
    this.props.getUserStatus(userId);
  }
  
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) { 
    if (this.props.params.userId !== prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <div className={style.profile}>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}
          isOwner={!this.props.params.userId || this.props.params.userId === "30760"}
          savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePostsPage.profile,
    status: state.profilePostsPage.status,
    resultAuth: state.authUser.resultAuth,
    id: state.authUser.id
  };
};

export default compose(
  connect(mapStateToProps, {
    setUserProfileThunkCreator,
    getUserStatus,
    updateUserStatus,
    savePhoto,
  }),
  withRouter,
)(ProfileContainer);
