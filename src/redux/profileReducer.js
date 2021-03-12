const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
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
};

export let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };
    case ADD_POST:
      const newPost = {
        id: Math.random(),
        messages: state.newPostText,
        like: 0,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      };
    default:
      return state;
  }
};

export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const addPost = () => ({ type: ADD_POST });
