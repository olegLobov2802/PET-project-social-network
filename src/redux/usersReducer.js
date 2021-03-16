import { usersAPI } from "../components/api/api";

const IS_FOLLOW = "IS_FOLLO";
const IS_UNFOLLOW = "IS_UNFOLLO";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOTAL_USERS_COUNT = "TOTAL_USERS_COUNT";
const IS_LOADING = "IS_LOADING";
const TOOGLE_BUTTON_DISABLED = "TOOGLE_BUTTON_DISABLED";

let initialState = {
  usersData: [],
  totalUsersCount: 0,
  usersCount: 10,
  currentPage: 1,
  isLoading: false,
  toogleButtonDisabled: [],
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
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.load,
      };
    case TOOGLE_BUTTON_DISABLED:
      return {
        ...state,
        toogleButtonDisabled: action.load
          ? [...state.toogleButtonDisabled, action.userId]
          : state.toogleButtonDisabled.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

const isFollow = (id) => ({ type: IS_FOLLOW, id });
const isUnfollow = (id) => ({ type: IS_UNFOLLOW, id });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = (usersCount) => ({ type: TOTAL_USERS_COUNT, usersCount });
const checkIsLoading = (load) => ({ type: IS_LOADING, load });
const checkButtonDisabled = (load, userId) => ({
  type: TOOGLE_BUTTON_DISABLED,
  load,
  userId,
});

export const getUsers = (usersCount, currentPage) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(usersCount, currentPage).then((data) => {
      dispatch(checkIsLoading(false));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setUsers(data.items));
    });
  };
};

export const follow = (itemId) => {
  return (dispatch) => {
    dispatch(checkButtonDisabled(true, itemId));
    usersAPI.follow(itemId).then((resultCode) => {
      if (resultCode === 0) {
        dispatch(isFollow(itemId));
      }
      dispatch(checkButtonDisabled(false, itemId));
    });
  };
};

export const unfollow = (itemId) => {
  return (dispatch) => {
    dispatch(checkButtonDisabled(true, itemId));
    usersAPI.unfollow(itemId).then((resultCode) => {
      if (resultCode === 0) {
        dispatch(isUnfollow(itemId));
      }
      dispatch(checkButtonDisabled(false, itemId));
    });
  };
};
