import React from "react";
import { sendMessageAC, updateNewMessageTextAC } from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let dialogsPage = store.getState().dialogsPage;

        const onAddMessage = () => {
          store.dispatch(sendMessageAC());
        };

        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextAC(text));
        };

        return (
          <Dialogs
            onAddMessage={onAddMessage}
            onMessageChange={onMessageChange}
            dialogsPage={dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
