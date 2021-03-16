import React from "react";
import { connect } from "react-redux";
import { getUsers, follow, unfollow } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersCount, this.props.currentPage);
  }

  onPageChange = (totalPage) => {
    this.props.getUsers(this.props.usersCount, totalPage);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Users
            usersData={this.props.usersData}
            totalUsersCount={this.props.totalUsersCount}
            usersCount={this.props.usersCount}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            toogleButtonDisabled={this.props.toogleButtonDisabled}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
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
    toogleButtonDisabled: state.usersPage.toogleButtonDisabled,
    isLoading: state.usersPage.isLoading,
  };
};

const mapDispatchToProps = {
  getUsers,
  follow,
  unfollow,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
