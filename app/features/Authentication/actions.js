import { authenticationConstants } from "./constants";

export const authenticationActions = {
    login,
    loginSuccess,
    loginFailed,
}

function login(username, password) {
    return {
        type: authenticationConstants.LOGIN_REQUEST,
        username,
        password
    }
}

function loginSuccess(user) {
    return {
        type: authenticationConstants.LOGIN_SUCCESS,
        user
    }
}

function loginFailed(error) {
    return {
        type: authenticationConstants.LOGIN_FAILURE,
        error
    }
}
