const IS_FOLLOW = "IS_FOLLO";
const IS_UNFOLLOW = "IS_UNFOLLO";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";

let initialState = {
  usersData: [],
  totalUsersCount: 0,
  usersCount: 10,
  currentPage: 1,
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    default:
      return state;
  }
};

export const isFollowAC = (id) => ({ type: IS_FOLLOW, id });
export const isUnfollowAC = (id) => ({ type: IS_UNFOLLOW, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const totalUsersCountAC = (usersCount) => ({ type: TOTAL_USERS_COUNT, usersCount });
