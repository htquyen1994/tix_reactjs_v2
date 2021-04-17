import { SET_LOADING_PAGE } from "../constant/Loading.constant"

const initState = {
    isLoading: false
}

const loadingReducer = (state=initState, action) => {
    switch(action.type) {
        case SET_LOADING_PAGE:
            state.isLoading = action.payload;
            return {...state};
        default:
            return {...state};
    }
}

export default loadingReducer;