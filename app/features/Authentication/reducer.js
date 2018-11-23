import { authenticationConstants } from "./constants";
import { fromJS } from 'immutable';

let user = JSON.parse(localStorage.getItem('user'));
export const initialState = user ? fromJS({ loggingIn: false, loggedIn: true, user, error: '' }) : fromJS({});

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case authenticationConstants.LOGIN_REQUEST:
      return state
        .set('loggingIn', true)
        .set('loggedIn', false)
        .set('user', {name: action.username});
    case authenticationConstants.LOGIN_SUCCESS:
      return state
        .set('loggingIn', false)
        .set('loggedIn', true)
        .set('user', action.user);
    case authenticationConstants.LOGIN_FAILURE:
      return state
        .set('loggingIn', false)
        .set('loggedIn', false)
        .set('user', {name: action.username})
        .set('error', action.error);
    case authenticationConstants.LOGOUT:
      return fromJS({});
    default:
      return state
  }
}

export default authenticationReducer;
