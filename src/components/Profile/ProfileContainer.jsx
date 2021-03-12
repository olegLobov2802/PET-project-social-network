import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
      this.props.setProfile(response.data);
    });
  }

  render() {
    return <>{!this.props.profile ? <Preloader /> : <Profile {...this.props} />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

let WithRouterURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(WithRouterURL);
