import React from "react";
import { connect } from "react-redux";

import {
  follow,
  unFollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  setPreloader,
  setEnable
} from "../../redux/usersReducer";

import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
// import { getUsers }  from "../../api/api";
import { api } from "../../api/api";

class UsersContainerAxios extends React.Component {
  componentDidMount() {
    this.props.setPreloader(true);
      
    api.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setPreloader(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  setCurrentPage = (page) => {
    this.props.setPreloader(true);
    this.props.setPage(page);
    
    api.getUsers(page, this.props.pageSize)
      .then((data) => {
        this.props.setPreloader(false);
        this.props.setUsers(data.items);
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
          setEnable={this.props.setEnable}
          isEnabled={ this.props.isEnabled}
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
  setEnable,
})(UsersContainerAxios);

export default usersContainer;
