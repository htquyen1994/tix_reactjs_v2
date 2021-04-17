import * as LoginSage from './LoginSage';
import * as SearchBookingSaga from './BookingSearchSage';
import * as IntroduceMovieSaga from './IntroduceMovieSage';
import * as GorupTheaterSaga from './GroupTheaterSaga';
import {all} from 'redux-saga/effects';

export function * rootSaga() {
    yield all([
        // authentication firebase
        LoginSage.watchLoginFaceBookAPI(),
        LoginSage.watchLoginGoogleAPI(),
        LoginSage.watchGetCurrentUser(),
        LoginSage.watchLogOut(),

        // search booking saga
        SearchBookingSaga.watchBookingSearchGetMovieList(),
        SearchBookingSaga.watchBookingSearchMovieSchedule(),

        // introduce movie
        IntroduceMovieSaga.watchIntroduceMovieDangChieuAPI(),
        IntroduceMovieSaga.watchIntroduceMovieSapChieuAPI(),

        // group theater
        GorupTheaterSaga.watchGetGroupTheaterList(),
        GorupTheaterSaga.watchGetTheaterByGroup(),
        GorupTheaterSaga.watchGetMovieByTheater()
    ]);
}