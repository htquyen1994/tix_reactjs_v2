import {
    GET_GROUP_THEATER_API,
    GET_GROUP_THEATER_API_SUCCESS,
    GET_THEATERS_BY_GROUP_API,
    GET_THEATERS_BY_GROUP_API_SUCCESS,
    GET_MOVIE_BY_GROUP_THEATER_API_SUCCESS
} from "../constant/GroupTheater.contant"


const initState = {
    groupTheaterList: [],
    theaterList: [],
    movieList: [],
    theaterMovieList: [],
    groupTheaterSelected: null,
    theaterSelected: null,
};

const groupTheaterReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_GROUP_THEATER_API_SUCCESS:
            state.groupTheaterList = action.payload;
            if (state.groupTheaterList.length > 0) {
                state.groupTheaterSelected = state.groupTheaterList[0];
            } else {
                state.groupTheaterSelected = null;
            }
            return { ...state };
        // case GET_THEATERS_BY_GROUP_API_SUCCESS:
        //     state.theaterList = action.payload;
        //     if (state.theaterList.length > 0) {
        //         state.theaterSelected = state.theaterList[0];
        //     } else {
        //         state.theaterSelected = null;
        //     }
        //     return { ...state };
        case GET_MOVIE_BY_GROUP_THEATER_API_SUCCESS:
            console.log('Movie list', action.payload)
            state.theaterMovieList = action.payload;
            return { ...state };

        default:
            return {...state};
    }
}

export default groupTheaterReducer;