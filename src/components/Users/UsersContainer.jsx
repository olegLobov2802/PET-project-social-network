import React from "react";
import { connect } from "react-redux";
import {
  isFollow,
  isUnfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  checkIsLoading,
} from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.checkIsLoading(true);
    usersAPI.getUsers(this.props.usersCount, this.props.currentPage).then((data) => {
      this.props.checkIsLoading(false);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.setUsers(data.items);
    });
  }

  onPageChange = (totalPage) => {
    this.props.checkIsLoading(true);
    this.props.setCurrentPage(totalPage);
    usersAPI.getUsers(this.props.usersCount, totalPage).then((data) => {
      this.props.checkIsLoading(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            usersData={this.props.usersData}
            isFollow={this.props.isFollow}
            isUnfollow={this.props.isUnfollow}
            totalUsersCount={this.props.totalUsersCount}
            usersCount={this.props.usersCount}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    totalUsersCount: state.usersPage.totalUsersCount,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

const mapDispatchToProps = {
  isFollow,
  isUnfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  checkIsLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
