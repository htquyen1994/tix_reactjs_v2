import { GET_INTRODUCE_MOVIE_SAP_CHIEU_API,
    GET_INTRODUCE_MOVIE_DANG_CHIEU_API, 
    GET_INTRODUCE_MOVIE_SAP_CHIEU_API_SUCCESS,
    GET_INTRODUCE_MOVIE_DANG_CHIEU_API_SUCCESS} from "../constant/IntroduceMovie.contant"


export const getIntroduceMovieSapChieuAPI = () => {
    return {
        type: GET_INTRODUCE_MOVIE_SAP_CHIEU_API
    }
}

export const getIntroduceMovieDangChieuAPI = () => {
    return {
        type: GET_INTRODUCE_MOVIE_DANG_CHIEU_API
    }
}

export const getIntroduceMovieSapChieuAPISuccess = (data) => {
    return {
        type: GET_INTRODUCE_MOVIE_SAP_CHIEU_API_SUCCESS,
        payload: data
    }
}

export const getIntroduceMovieDangChieuAPISuccess = (data) => {
    return {
        type: GET_INTRODUCE_MOVIE_DANG_CHIEU_API_SUCCESS,
        payload: data
    }
}