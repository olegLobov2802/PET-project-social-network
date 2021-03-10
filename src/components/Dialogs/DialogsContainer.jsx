import React from "react";
import { sendMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {
  const onAddMessage = () => {
    store.dispatch(sendMessageAC());
  };

  const onMessageChange = (text) => {
    store.dispatch(updateNewMessageTextAC(text));
  };

  let dialogsPage = store.getState().dialogsPage;

  return (
    <Dialogs
      onAddMessage={onAddMessage}
      onMessageChange={onMessageChange}
      dialogsPage={dialogsPage}
    />
  );
};

export default DialogsContainer;
