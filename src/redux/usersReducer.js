import photo from "../img/photo.jpg";

const ADD_USERS = "ADD_USERS";

let initialState = {
  usersData: [
    {
      id: 1,
      userName: "Oleg",
      status: "Hello World",
      location: {
        country: "Russia",
        city: "Abakan",
      },
      photo: photo,
      isFollow: true,
    },
    {
      id: 2,
      userName: "Anna",
      status: "Hello World",
      location: {
        country: "Russia",
        city: "Abakan",
      },
      photo: photo,
      isFollow: false,
    },
    {
      id: 3,
      userName: "Dimon",
      status: "Hello World",
      location: {
        country: "Russia",
        city: "Abakan",
      },
      photo: photo,
      isFollow: true,
    },
  ],
};

export let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return state;
    default:
      return state;
  }
};

export const addUsersAc = (users) => ({ type: ADD_USERS, users });
