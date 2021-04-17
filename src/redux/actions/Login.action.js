import { SET_USER_LOGIN, LOGIN_FACEBOOK_SUCCESS, LOGIN_GOOGLE_SUCCESS } from "../constant/Login.constant"

export const setUserLogin = (user) => {
    return {
        type: SET_USER_LOGIN,
        payload: user
    }
}

export const loginFacebookSuccess = (user) => {
    return {
        type: LOGIN_FACEBOOK_SUCCESS,
        payload: user
    }
}

export const loginGoogleSuccess = (user) => {
    return {
        type: LOGIN_GOOGLE_SUCCESS,
        payload: user
    }
}