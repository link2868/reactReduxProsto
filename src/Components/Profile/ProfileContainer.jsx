import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";

import Profile from "./Profile";
import { setUserProfileThunkCreator } from "../../redux/profilePostsReducer";


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
  }

  render() {
    return (
      <div className={style.profile}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePostsPage.profile,
  };
};

export default compose(
  connect(mapStateToProps, { setUserProfileThunkCreator }),
  withRouter,
)(ProfileContainer);


