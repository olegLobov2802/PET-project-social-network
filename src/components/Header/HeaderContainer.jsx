import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authorizationCheck } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // checking user authorization
    this.props.authorizationCheck();
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

export default connect(mapStateToProps, { authorizationCheck })(HeaderContainer);
