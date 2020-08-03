import {createStore, combineReducers, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';

// Reducers
import users from './users/reducer';


const rootReducer = combineReducers({
    users,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
);