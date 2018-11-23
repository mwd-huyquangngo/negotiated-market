import { takeLatest, put } from 'redux-saga/effects';
import { authenticationConstants } from './constants';
import AuthenticationAPI from './api/authenticationAPI';

function* login(action) {
    const { username, password } = action;
    try {
        const response = yield call(AuthenticationAPI.login(username, password));
        yield put({type: authenticationConstants.LOGIN_SUCCESS, response});
    } catch(error) {
        yield put({type: authenticationConstants.LOGIN_FAILURE, error});
    }
}

export default function* loginRequest() {
    yield takeLatest(authenticationConstants.LOGIN_REQUEST, login);
}