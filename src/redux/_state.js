import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

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
    this.getState().profilePage = profileReducer(this.getState().profilePage, action);
    this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
    this.getState().sidebar = sidebarReducer(this.getState().sidebar, action);
    this._render();
  },
};

window.store = store;

export default store;
