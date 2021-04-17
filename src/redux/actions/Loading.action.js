import {SET_LOADING_PAGE} from '../constant/Loading.constant'

export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING_PAGE,
        payload: isLoading
    }
}