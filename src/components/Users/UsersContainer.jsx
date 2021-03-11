import React from "react";
import { connect } from "react-redux";
import {
  isFollowAC,
  isUnfollowAC,
  setCurrentPageAC,
  setUsersAC,
  totalUsersCountAC,
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      });
  }

  onPageChange = (totalPage) => {
    this.props.setCurrenPage(totalPage);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${totalPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        usersData={this.props.usersData}
        isFollow={this.props.isFollow}
        isUnfollow={this.props.isUnfollow}
        totalUsersCount={this.props.totalUsersCount}
        usersCount={this.props.usersCount}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isFollow(id) {
      dispatch(isFollowAC(id));
    },

    isUnfollow(id) {
      dispatch(isUnfollowAC(id));
    },
    setUsers(users) {
      dispatch(setUsersAC(users));
    },
    setCurrenPage(currentPage) {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount(usersCount) {
      dispatch(totalUsersCountAC(usersCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
