const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Oleg" },
    { id: 2, name: "Anna" },
    { id: 3, name: "Denis" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Valera" },
  ],

  messagesData: [
    {
      id: 1,
      messages: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      messages: "Amet lorem ipsum dolor sit consectetur adipisicing.",
    },
    {
      id: 3,
      messages: "Ipsum lorem dolor sit amet consectetur adipisicing.",
    },
    {
      id: 4,
      messages: "Dolor lorem ipsum sit amet consectetur adipisicing.",
    },
    {
      id: 5,
      messages: "Consectetur lorem ipsum dolor sit amet adipisicing.",
    },
  ],

  newMessageText: "Hello World!",
};

export let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case SEND_MESSAGE:
      const newMessage = {
        id: Math.random(),
        messages: state.newMessageText,
      };

      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageTextAC = (text) => ({ type: UPDATE_MESSAGE_TEXT, text });
export const sendMessageAC = () => ({ type: SEND_MESSAGE });
