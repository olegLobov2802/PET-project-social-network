import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then((response) => {
        // checking user authorization
        if (response.data.resultCode === 0) {
          this.props.setAuthData(response.data.data);
        }
      });
  }

  render() {
    return <Header authData={this.props.authData} />;
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
