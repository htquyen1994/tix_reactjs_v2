import {
    GET_GROUP_THEATER_API,
    GET_GROUP_THEATER_API_SUCCESS,
    GET_THEATERS_BY_GROUP_API,
    GET_THEATERS_BY_GROUP_API_SUCCESS,
    GET_MOVIE_BY_GROUP_THEATER_API,
    GET_MOVIE_BY_GROUP_THEATER_API_SUCCESS
} from "../constant/GroupTheater.contant"

export const getGroupTheaterAPI = () => {
    return {
        type: GET_GROUP_THEATER_API,
    }
}

export const getGroupTheaterAPISuccess = (data) => {
    return {
        type: GET_GROUP_THEATER_API_SUCCESS,
        payload: data
    }
}

export const getTheatersByGroupAPI = (maHeThongRap) => {
    return {
        type: GET_THEATERS_BY_GROUP_API,
        maHeThongRap: maHeThongRap,
    }
}

export const getTheatersByGroupAPISuccess = (data) => {
    return {
        type: GET_THEATERS_BY_GROUP_API_SUCCESS,
        payload: data,
    }
}

export const getMovieByGroupTheaterAPI = (maHeThongRap) => {
    return {
        type: GET_MOVIE_BY_GROUP_THEATER_API,
        maHeThongRap: maHeThongRap,
    }
}

export const getMovieByGroupTheaterAPISuccess = (data) => {
    return {
        type: GET_MOVIE_BY_GROUP_THEATER_API_SUCCESS,
        payload: data,
    }
}