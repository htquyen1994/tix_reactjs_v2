import { GET_INTRODUCE_MOVIE_DANG_CHIEU_API_SUCCESS, GET_INTRODUCE_MOVIE_SAP_CHIEU_API_SUCCESS } from "../constant/IntroduceMovie.contant"

const initState = {
    movieList: [],
}

const introduceMovieReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_INTRODUCE_MOVIE_SAP_CHIEU_API_SUCCESS:
        case GET_INTRODUCE_MOVIE_DANG_CHIEU_API_SUCCESS:
            state.movieList = action.payload;
            return {...state};

        default:
            return {...state};
    }
}

export default introduceMovieReducer;