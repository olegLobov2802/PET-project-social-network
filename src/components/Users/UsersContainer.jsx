import { connect } from "react-redux";
import { isFollowAC, isUnfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
