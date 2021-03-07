import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItemName from "./DialogsItem/DialogsItemName";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({ dialogsPage }) => {

  const addMessage = () => {
    const newMessage = {
      id: 5,
      messages: dialogsPage.newMessageText,
    };

    dialogsPage.messagesData.push(newMessage);
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    dialogsPage.newMessageText = text;
  };

  let dialogElementsName = dialogsPage.dialogsData.map((dialog) => (
    <DialogsItemName name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = dialogsPage.messagesData.map((message) => (
    <MessageItem text={message.messages} />
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
          onChange={onMessageChange}
        />
        <button onClick={addMessage} className={classes.message__btn}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
