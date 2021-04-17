import { 
    SEARCH_MOVIE_GET_MOVIE_LIST_SUCCESS,
    SEARCH_MOVIE_GET_MOVIE_THEATER_LIST_SUCCESS,
    SEARCH_MOVIE_HOUR_SUCCESS,
    SEARCH_MOVIE_DAY_SUCCESS, 
    SEARCH_MOVIE_SET_MOVIE_SELECTED,
    SEARCH_MOVIE_SET_THEATER_SELECTED,
    SEARCH_MOVIE_SET_DAY_SELECTED,
    SEARCH_MOVIE_SET_HOUR_SELECTED,
    SEARCH_MOVIE_GET_MOVIE_LIST,
    SEARCH_MOVIE_GET_MOVIE_THEATER_LIST,
    GET_MOVIE_INFO_SCHEDULE_API,
    GET_MOVIE_INFO_SCHEDULE_API_SUCCESS} from "../constant/SearchBooking.contant"

export const getMovieListSearchBooking = () => {
    return {
        type: SEARCH_MOVIE_GET_MOVIE_LIST
    }
}

export const getMovieListSearchBookingSuccess = (list) => {
    return {
        type: SEARCH_MOVIE_GET_MOVIE_LIST_SUCCESS,
        payload: list
    }

}

export const getMovieTheaterSearchBooking = (maPhim) => {
    return {
        type: SEARCH_MOVIE_GET_MOVIE_THEATER_LIST,
        maPhim: maPhim
    }
}

export const getMovieTheaterSearchBookingSuccess = (list) => {
    return {
        type: SEARCH_MOVIE_GET_MOVIE_THEATER_LIST_SUCCESS,
        payload: list
    }
}

export const getMovieDaySearchBookingSuccess = (list) => {
    return {
        type: SEARCH_MOVIE_DAY_SUCCESS,
        payload: list
    }
}

export const getMovieHourSearchBookingSuccess = (list) => {
    console.log('HAHAHAHAHA');
    return {
        type: SEARCH_MOVIE_HOUR_SUCCESS,
        payload: list
    }
}

export const setMovieSelected = (movie) => {
    return {
        type: SEARCH_MOVIE_SET_MOVIE_SELECTED,
        payload: movie
    }
}

export const setTheaterSelected = (theater) => {
    return {
        type: SEARCH_MOVIE_SET_THEATER_SELECTED,
        payload: theater
    }
}

export const setDaySelected = (day) => {
    return {
        type: SEARCH_MOVIE_SET_DAY_SELECTED,
        payload: day
    }
}

export const setHourSelected = (hour) => {
    return {
        type: SEARCH_MOVIE_SET_HOUR_SELECTED,
        payload: hour
    }
}

export const getMovieSchedule = (maPhim) => {
    return {
        type: GET_MOVIE_INFO_SCHEDULE_API,
        maPhim: maPhim
    }
}

export const getMovieScheduleSuccess = (data) => {
    return {
        type: GET_MOVIE_INFO_SCHEDULE_API_SUCCESS,
        payload: data
    }
}