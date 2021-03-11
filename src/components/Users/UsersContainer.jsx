import React from "react";
import { connect } from "react-redux";
import { isFollowAC, isUnfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";
import * as axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      console.log(response.data.items);
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <Users
        usersData={this.props.usersData}
        isFollow={this.props.isFollow}
        isUnfollow={this.props.isUnfollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

