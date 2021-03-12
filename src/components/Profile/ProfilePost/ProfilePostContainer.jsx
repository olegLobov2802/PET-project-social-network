import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import ProfilePost from "./ProfilePost";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const ProfilePostContainer = connect(mapStateToProps, {updateNewPostText, addPost})(ProfilePost);

export default ProfilePostContainer;
