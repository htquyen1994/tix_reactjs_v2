import {setLoading} from '../actions/Loading.action';
import movieService from '../../services/movie.service';
import { call, put, takeLatest} from 'redux-saga/effects';
import ConfigBase from '../../config/global';
import { SEARCH_MOVIE_GET_MOVIE_LIST_SUCCESS, 
    SEARCH_MOVIE_GET_MOVIE_LIST, 
    SEARCH_MOVIE_GET_MOVIE_THEATER_LIST_SUCCESS,
    SEARCH_MOVIE_GET_MOVIE_THEATER_LIST,
    GET_MOVIE_INFO_SCHEDULE_API} from '../constant/SearchBooking.contant';

import {getMovieListSearchBookingSuccess,
        getMovieTheaterSearchBookingSuccess,
        getMovieScheduleSuccess} from '../actions/BookingSearch.action'

function * getMovieListAPI(action) {
    yield setLoading(true);
    try {
        const response = yield call(() => {return movieService.getMovieListSearch(ConfigBase.CODE_SYSTEM)});
        yield put(getMovieListSearchBookingSuccess(response.data))
    } catch (error) {
        console.error(error)
    }
    yield setLoading(false);
}


function * getMovieInfoScheduleAPI(action) {
    yield setLoading(true);
    try {
        const response = yield call(() => {return movieService.getInfoMovieThreaterList(action.maPhim)});
        yield put(getMovieScheduleSuccess(response.data));
    } catch (error) {
        console.error(error)
    }
    yield setLoading(false);
}


//===============BOOKING SEARCH WATCH ==================
export function * watchBookingSearchGetMovieList() {
    yield takeLatest(SEARCH_MOVIE_GET_MOVIE_LIST, getMovieListAPI)
}


export function * watchBookingSearchMovieSchedule() {
    yield takeLatest(GET_MOVIE_INFO_SCHEDULE_API, getMovieInfoScheduleAPI)
}