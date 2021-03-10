import { connect } from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData
  }
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;
