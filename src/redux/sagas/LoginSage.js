import {loginService} from '../../services/login.service';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_FACEBOOK_API, LOGIN_GOOGLE_API, GET_CURRENT_USER_LOGIN, DO_LOGOUT } from '../constant/Login.constant';
import {setLoading} from '../actions/Loading.action';
import { setUserLogin, loginFacebookSuccess, loginGoogleSuccess } from '../actions/Login.action';

const AUTHENTICATION_STATUS = 'IS_AUTHENTICATION_STATUS';
const ACCESS_TOKEN_AUTHENTICATION_FB = 'ACCESS_TOKEN_AUTHENTICATION_FB';

const initUser = (data) => {
    return {

    }
}

function * LoginFaceBookAPI() {
   
    yield put(setLoading(true));
    try {
        const {credential, user} = yield call(loginService.signInFaceBook);
        const photoURL = `${user.photoURL}?access_token=${credential.accessToken}`;
      
        yield put(loginFacebookSuccess({...user, photoURL: photoURL}));
        localStorage.setItem(ACCESS_TOKEN_AUTHENTICATION_FB, credential.accessToken);
    } catch (error) {
        console.log('Error' , error)
    }
   
    yield put(setLoading(false));
}

function * LoginGoogleAPI() {
    yield put(setLoading(true));
    try {
        const {credential, user} = yield call(loginService.signInGoogle);
        yield put(loginGoogleSuccess(user));
    } catch (error) {
        console.log(error);   
    }
    yield put(setLoading(false));
}

function * GetCurrentUserAPI() {
    yield put(setLoading(true));
   
    try {
        const data = yield call(loginService.getUserCurrent);
        localStorage.setItem(AUTHENTICATION_STATUS, true);
     
        yield put(setUserLogin(data));
    
    } catch (error) {
        console.log(error);
        localStorage.removeItem(AUTHENTICATION_STATUS);
        yield put(setUserLogin(null));
    }
   
    yield put(setLoading(false));
}

function * DoLogout() {
    yield put(setLoading(true));
    try {
        const data = yield call(loginService.logout);
        localStorage.removeItem(AUTHENTICATION_STATUS);
        console.log('Do logout');
        yield put(setUserLogin(null));
    } catch (error) {
        
    }
    yield put(setLoading(false));
}


//-------------------------Function sage export ---------------
export function * watchLoginFaceBookAPI() {
    yield takeLatest(LOGIN_FACEBOOK_API, LoginFaceBookAPI);
}

export function * watchLoginGoogleAPI() {
    yield takeLatest(LOGIN_GOOGLE_API, LoginGoogleAPI);
}

export function * watchGetCurrentUser() {
    yield takeLatest(GET_CURRENT_USER_LOGIN, GetCurrentUserAPI);
}

export function * watchLogOut() {
    yield takeLatest(DO_LOGOUT, DoLogout);
}