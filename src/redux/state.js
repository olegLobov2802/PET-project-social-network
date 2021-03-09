const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
    dialogsPage: {
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
    },

    profilePage: {
      postData: [
        {
          id: 1,
          messages: "Quis, atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          like: 3,
        },
        {
          id: 2,
          messages:
            "Dolores repudiandae aspernatur quasi, tenetur nam vitae? Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          like: 5,
        },
        {
          id: 3,
          messages: "Lorem ipsum dolor sit amet consectetur.",
          like: 16,
        },
      ],
      newPostText: "Hello World!",
    },

    sidebar: {
      frends: [
        {
          id: 1,
          name: "Oleg",
        },
        {
          id: 2,
          name: "Anna",
        },
        {
          id: 3,
          name: "Denis",
        },
        {
          id: 4,
          name: "Sergey",
        },
      ],
    },
  },

  _render() {
    console.log("no change");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._render = observer;
  },

  dispatch(action) {
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._render();
    } else if (action.type === ADD_POST) {
      const newPost = {
        id: Math.random(),
        messages: this._state.profilePage.newPostText,
        like: 0,
      };

      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._render();
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.text;
      this._render();
    } else if (action.type === SEND_MESSAGE) {
      const newMessage = {
        id: Math.random(),
        messages: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._render();
    }
  },
};

export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewMessageTextAC = (text) => ({type: UPDATE_MESSAGE_TEXT, text})
export const sendMessageAC = () => ({type: SEND_MESSAGE})

window.store = store;

export default store;
