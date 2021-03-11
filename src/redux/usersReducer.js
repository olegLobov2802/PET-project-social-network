const IS_FOLLOW = "IS_FOLLO";
const IS_UNFOLLOW = "IS_UNFOLLO";
const SET_USERS = "SET_USERS";

let initialState = {
  usersData: [
    // {
    //   id: 1,
    //   name: "Oleg",
    //   status: "Hello World",
    //   photos: {
    //     small: null,
    //     large: photo,
    //   },
    //   followed: true,
    // },
  ],
};

export let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((item) => {
          if (item.id === action.id) {
            return { ...item, followed: true };
          }
          return item;
        }),
      };
    case IS_UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((item) => {
          if (item.id === action.id) {
            return { ...item, followed: false };
          }
          return item;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        usersData: [...action.users],
      };
    default:
      return state;
  }
};

export const isFollowAC = (id) => ({ type: IS_FOLLOW, id });
export const isUnfollowAC = (id) => ({ type: IS_UNFOLLOW, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
