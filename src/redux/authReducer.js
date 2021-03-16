import { authAPI } from "../components/api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  email: null,
  id: null,
  login: null,
  isAuthorized: false,
};

export let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
        isAuthorized: true,
      };
    }
    default:
      return state;
  }
};

const setAuthData = (data) => ({
  type: SET_AUTH_DATA,
  data,
});

export const authorizationCheck = () => {
  return (dispatch) => {
    authAPI().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthData(data.data));
      }
    });
  };
};
