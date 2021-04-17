import { setLoading } from "../actions/Loading.action";
import { call, put, takeLatest} from 'redux-saga/effects';
import { GET_INTRODUCE_MOVIE_SAP_CHIEU_API, GET_INTRODUCE_MOVIE_DANG_CHIEU_API } from "../constant/IntroduceMovie.contant";
import movieService from '../../services/introduce-movie.service';
import ConfigBase from "../../config/global";
import {getIntroduceMovieDangChieuAPISuccess, getIntroduceMovieSapChieuAPISuccess} from '../actions/IntroduceMovie.action'

function * getMovieListDangChieuAPI() {
    setLoading(true);
    try {
        const response = yield call (() => {
            return movieService.getMovieListDangChieu(ConfigBase.CODE_SYSTEM);
        })
        yield put(getIntroduceMovieDangChieuAPISuccess(response.data));
    } catch (error) {
        console.error(error);
    }
    setLoading(false);
}

function * getMovieListSapChieuAPI() {
    setLoading(true);
    try {
        const response = yield call (() => {
            return movieService.getMovieListSapChieu(ConfigBase.CODE_SAP_CHIEU);
        });
        yield put(getIntroduceMovieSapChieuAPISuccess(response.data));
    } catch (error) {
        console.error(error);
    }
    setLoading(false);
}

//============= function theo doi ===========
export function * watchIntroduceMovieSapChieuAPI() {
    yield takeLatest(GET_INTRODUCE_MOVIE_SAP_CHIEU_API, getMovieListSapChieuAPI);
}

export function * watchIntroduceMovieDangChieuAPI() {
    yield takeLatest(GET_INTRODUCE_MOVIE_DANG_CHIEU_API, getMovieListDangChieuAPI);
}
