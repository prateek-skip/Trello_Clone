import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers';

import { combineReducers } from "redux";
import listReducer from "../reducers/listReducer";

const reducer = combineReducers({
    lists : listReducer
});


const store = configureStore({reducer});

export default store;
