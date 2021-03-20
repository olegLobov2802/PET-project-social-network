import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage, updateNewMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, { updateNewMessageText, sendMessage })(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
  connect(mapStateToProps, { updateNewMessageText, sendMessage }),
  // withAuthRedirect
)(Dialogs);
