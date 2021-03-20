import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile, getProfileStatus, updateProfileStatus } from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;

    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <>
        {!this.props.profile || this.props.isLoading ? (
          <Preloader />
        ) : (
          <Profile
            {...this.props}
            status={this.props.profileStatus}
            updateStatus={this.props.updateProfileStatus}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading,
    profileStatus: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
  }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);
