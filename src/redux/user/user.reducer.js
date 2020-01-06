// a reducer is a function that takes 2 properties: state (initial state) and an action (an object that can be a string)]


import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
