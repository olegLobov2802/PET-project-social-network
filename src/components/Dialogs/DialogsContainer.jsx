import { connect } from "react-redux";
import { sendMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage() {
      dispatch(sendMessageAC());
    },

    onMessageChange(text) {
      dispatch(updateNewMessageTextAC(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
