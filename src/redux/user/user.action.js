// user action that updates the reducers with the appropriate values
import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

