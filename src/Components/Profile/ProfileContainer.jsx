import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/profilePostsReducer";
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
    // this.props.setPreloader(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/" + userId)
      .then((response) => {
        // this.props.setPreloader(false);
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div className={style.profile}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const ProfileContainerUrl = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePostsPage.profile,
  };
};

// const profileContainer = connect(
//   mapStateToProps,
//   { setUserProfile }
// )(ProfileContainerAxios);
// const ProfileContainerUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainerUrl
);
