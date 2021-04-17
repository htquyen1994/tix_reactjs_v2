import { LOGIN_GOOGLE_SUCCESS, LOGIN_FACEBOOK_SUCCESS, SET_USER_LOGIN } from "../constant/Login.constant";

const initState = {
    isLogin: false,
    user: {
        displayName: '',
        photoURL: '',
        email: ''
    }
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_FACEBOOK_SUCCESS:
        case LOGIN_GOOGLE_SUCCESS:
            state.isLogin = true;
            state = { ...state, user: action.payload };
            return { ...state };

        case SET_USER_LOGIN:
            state.isLogin = true;
            if (action.payload === null) {
                state.isLogin = false;
            }
            state = { ...state, user: action.payload };
            return { ...state };
        default:
            return { ...state };
    }
}

export default loginReducer;