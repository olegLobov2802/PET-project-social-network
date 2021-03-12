import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItemName from "./DialogsItem/DialogsItemName";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({ sendMessage, updateNewMessageText, dialogsPage }) => {
  const changeMessageText = (e) => {
    const text = e.target.value;
    updateNewMessageText(text);
  };

  let dialogElementsName = dialogsPage.dialogsData.map((dialog) => (
    <DialogsItemName key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem key={message.id} text={message.messages} />
  ));

  return (
    <div>
      <div className={classes.dialogs}>
        <ul className={classes.users}>{dialogElementsName}</ul>
        <ul className={classes.message}>{messagesElements}</ul>
      </div>
      <div>
        <input
          className={classes.message__input}
          type='text'
          value={dialogsPage.newMessageText}
          onChange={changeMessageText}
        />
        <button
          onClick={() => {
            sendMessage();
          }}
          className={classes.message__btn}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
