import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/profilePostsReducer";
// import Preloader from "../Common/Preloader/Preloader";

import style from "./Profile.module.css";

class ProfileContainer extends React.Component {

  componentDidMount() {
    
        // this.props.setPreloader(true);
    axios
      .get(
        'https://social-network.samuraijs.com/api/1.0/profile/2'
    )
      .then(response => {
          
          // this.props.setPreloader(false);
        this.props.setUserProfile(response.data);
               
      });
  }
  
  render() {  
    
    return (
    <div className={style.profile}>
        <Profile {...this.props} profile={ this.props.profile} />
    </div>
  );
  }
  
};

const mapStateToProps = (state) => {
  
  return {
    profile: state.profilePostsPage.profile
  };
};

// const profileContainer = connect(
//   mapStateToProps,
//   { setUserProfile }
// )(ProfileContainerAxios);

export default connect(
  mapStateToProps,
  { setUserProfile })(ProfileContainer);
