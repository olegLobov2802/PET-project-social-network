import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import ProfilePost from "./ProfilePost";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onPostChange(text) {
      dispatch(updateNewPostTextAC(text));
    },
    onAddPost() {
      dispatch(addPostAC());
    },
  };
};

const ProfilePostContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePost);

export default ProfilePostContainer;
