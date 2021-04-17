import {setLoading} from '../actions/Loading.action';
import theaterService from '../../services/theater.service';
import { call, put, takeLatest} from 'redux-saga/effects';
import ConfigBase from '../../config/global';
import { GET_GROUP_THEATER_API, GET_THEATERS_BY_GROUP_API, GET_MOVIE_BY_GROUP_THEATER_API } from '../constant/GroupTheater.contant';
import { getGroupTheaterAPISuccess, 
        getTheatersByGroupAPISuccess,
        getMovieByGroupTheaterAPISuccess} from '../actions/GroupTheater.action';


function * getGroupTheaterAPI() {
    setLoading(true);
    try {
        const response = yield call (() => {
            return theaterService.getGroupTheater();
        });
        yield put(getGroupTheaterAPISuccess(response.data));
    } catch (error) {
        console.error(error);
    }
    setLoading(false);
}

function * getTheaterByGroup(action) {
    setLoading(true);
    try {
        const response = yield call (() => {
            return theaterService.getTheaterList(action.maHeThongRap);
        });
        yield put(getTheatersByGroupAPISuccess(response.data));
    } catch (error) {
        console.error(error);
    }
    setLoading(false);
}

function * getMovieByGroupTheater(action) {
    setLoading(true);
    try {
        const response = yield call (() => {
            return theaterService.getMovieListByGroupTheater(ConfigBase.CODE_SYSTEM, action.maHeThongRap);
        });
        yield put(getMovieByGroupTheaterAPISuccess(response.data));
    } catch (error) {
        console.error(error);
    }
    setLoading(false);
}


//===============BOOKING SEARCH WATCH ==================
export function * watchGetGroupTheaterList() {
    yield takeLatest(GET_GROUP_THEATER_API, getGroupTheaterAPI)
}

export function * watchGetTheaterByGroup() {
    yield takeLatest(GET_THEATERS_BY_GROUP_API, getTheaterByGroup)
}

export function * watchGetMovieByTheater() {
    yield takeLatest(GET_MOVIE_BY_GROUP_THEATER_API, getMovieByGroupTheater)
}