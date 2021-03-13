const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  email: null,
  id: null,
  login: null,
  isAuthorized: false
};

export let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
        isAuthorized: true
      };
    }
    default:
      return state;
  }
};

export const setAuthData = (data) => ({
  type: SET_AUTH_DATA,
  data,
});
