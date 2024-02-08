import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  follow,
  unFollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  setPreloader,
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
// import { getUsers }  from "../../api/api";

class UsersContainerAxios extends React.Component {
  componentDidMount() {
    this.props.setPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
    // getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setPreloader(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  setCurrentPage = (page) => {
    this.props.setPreloader(true);
    this.props.setPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.setPreloader(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isPreloader ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          currentPage={this.props.currentPage}
          setCurrentPage={this.setCurrentPage}
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
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setPage: (page) => {
//       dispatch(setPageActionCreator(page));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalCountActionCreator(totalCount));
//       },
//       setPreloader: (isPreloader) => {
//           dispatch(setPreloaderActionCreator(isPreloader))
//       }
//   };
// };

const usersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  setPreloader,
})(UsersContainerAxios);

export default usersContainer;
