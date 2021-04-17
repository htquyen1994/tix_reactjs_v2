import { SEARCH_MOVIE_GET_MOVIE_LIST_SUCCESS, 
    SEARCH_MOVIE_GET_MOVIE_THEATER_LIST_SUCCESS, 
    SEARCH_MOVIE_DAY_SUCCESS,
    SEARCH_MOVIE_HOUR_SUCCESS, 
    SEARCH_MOVIE_SET_MOVIE_SELECTED,
    GET_MOVIE_INFO_SCHEDULE_API_SUCCESS,
    SEARCH_MOVIE_SET_THEATER_SELECTED,
    SEARCH_MOVIE_SET_DAY_SELECTED} from "../constant/SearchBooking.contant"

const initState = {
    movieList: [],
    theaterList: [],
    dayList: [],
    hourList: [],
    movieSelected: null,
    theaterSelected: null,
    daySelected: null,
    hourSelected: null,
    infoMovieSchedule: {
        heThongRapChieu: []
    },
}

const bookingSearchReducer = (state=initState, action) => {
    switch(action.type) {
        case SEARCH_MOVIE_GET_MOVIE_LIST_SUCCESS:
            state = {...state, movieList: action.payload};
            return {...state};

        case SEARCH_MOVIE_GET_MOVIE_THEATER_LIST_SUCCESS:
            state = {...state, theaterList: action.payload};
            return {...state};
        case SEARCH_MOVIE_DAY_SUCCESS:
            state = {...state, dayList: action.payload};
            return {...state};

        case SEARCH_MOVIE_HOUR_SUCCESS:
            console.log('SEARCH_MOVIE_HOUR_SUCCESS', action.payload);
            state = {...state, hourList: action.payload};
            return {...state};

        case SEARCH_MOVIE_SET_MOVIE_SELECTED:
            state = {...state, movieSelected: action.payload};
            return {...state};

        case SEARCH_MOVIE_SET_THEATER_SELECTED:
            state = {...state, theaterSelected: action.payload};
            return {...state};

        case SEARCH_MOVIE_SET_DAY_SELECTED:
            const dateSelected = (new Date(action.payload));

            dateSelected.setHours(0,0,0,0);
        
            const theaters = state.theaterList.filter(res => {
                return res.maCumRap === state.theaterSelected.maCumRap;
            });

            let lichChieuList = [];
            theaters.forEach(cumRap => {
                cumRap.lichChieuPhim.forEach(item => {
                    const date = new Date(item.ngayChieuGioChieu);
                    date.setHours(0,0,0,0);
                    if (date.getTime() === dateSelected.getTime()) {
                        const temp = new Date(item.ngayChieuGioChieu);
                        const hour  = temp.getHours().toString();
                        const min = temp.getMinutes().toString();
                        const format =  hour.concat(':').concat(min);
                        lichChieuList.push({...item, text: format});
                    };
                });
            })

            state.hourList = [...lichChieuList];
            state.daySelected = dateSelected
            return {...state};

        case GET_MOVIE_INFO_SCHEDULE_API_SUCCESS:
            const cumRapList = [];
            const movieSchedule = action.payload;
            movieSchedule.heThongRapChieu.forEach((heThong) => {
                const cumRaps = heThong.cumRapChieu;
                cumRaps.forEach((rap) => {
                    cumRapList.push(rap);
                });
            });
            state.infoMovieSchedule = action.payload;
            state.theaterList = [...cumRapList];
            
            return {...state};
        default:
            return {...state};
    }
}

export default bookingSearchReducer;