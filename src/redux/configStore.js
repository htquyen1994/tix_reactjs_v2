import { applyMiddleware,combineReducers, createStore , compose} from "redux";
import createMiddlewareSaga from 'redux-saga';
import reduxThunk from 'redux-thunk';
import { rootSaga } from "./sagas/rootSagas";
import loadingReducer from './reducers/Loading.reducer';
import loginReducer from './reducers/Login.reducer';
import bookingSearchReducer from './reducers/BookingSearch.reducer';
import introduceMovieReducer from './reducers/IntroduceMovie.reducer';
import groupTheaterReducer from './reducers/GroupTheater.reducer';

const reduxSaga = createMiddlewareSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    loadingReducer,
    loginReducer,
    bookingSearchReducer,
    introduceMovieReducer,
    groupTheaterReducer
});

const store = createStore(rootReducer, 
    composeEnhancers(applyMiddleware(reduxThunk, reduxSaga))
    );

reduxSaga.run(rootSaga);

export default store;