import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`
    )
    .then((response) => {
      this.props.setProfile(response.data)
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let WithRouterURL = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile})(WithRouterURL)
