import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfileThunkCreator } from "../../redux/profilePostsReducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";

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
  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.setUserProfileThunkCreator(userId);
    // api.getProfile(userId)
    //   .then((data) => {
    //     // this.props.setPreloader(false);
    //     this.props.setUserProfile(data);
    //   });
  }

  render() {
    return (
      <div className={style.profile}>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}

const AuthNavigate = withAuthNavigate(ProfileContainer); 

const ProfileContainerUrl = withRouter(AuthNavigate);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePostsPage.profile,
    resultAuth: state.authUser.resultAuth
  };
};

// const profileContainer = connect(
//   mapStateToProps,
//   { setUserProfile }
// )(ProfileContainerAxios);
// const ProfileContainerUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfileThunkCreator })(
  ProfileContainerUrl
);
