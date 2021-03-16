import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    return <>{!this.props.profile || this.props.isLoading ? <Preloader /> : <Profile {...this.props} />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isLoading: state.profilePage.isLoading
  };
};

let WithRouterURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getProfile })(WithRouterURL);
