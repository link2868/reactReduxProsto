import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  setPage,
  setEnable,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
} from "../../redux/usersReducer";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  

  setCurrentPage = (page) => {
    this.props.getUsers(page, this.props.pageSize);
    this.props.setPage(page);
  };

  render() {
    return (
      <>
        {this.props.isPreloader ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          // follow={this.props.follow}
          // unFollow={this.props.unFollow}
          currentPage={this.props.currentPage}
          setCurrentPage={this.setCurrentPage}
          setEnable={this.props.setEnable}
          isEnabled={this.props.isEnabled}
          followThunkCreator={this.props.followThunkCreator}
          unFollowThunkCreator={ this.props.unFollowThunkCreator}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isPreloader: state.usersPage.isPreloader,
    isEnabled: state.usersPage.isEnabled,
    resultAuth: state.authUser.resultAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
  setPage,
  setEnable,
  getUsers: getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
}),
  withAuthNavigate
)(UsersContainer);
