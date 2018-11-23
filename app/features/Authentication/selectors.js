import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuthentication = state => state.get('authentication', initialState);

const makeSelectLoggingIn = () =>
  createSelector(selectAuthentication, authenticationState => authenticationState.get('loggingIn'));

export { selectAuthentication, makeSelectLoggingIn };
