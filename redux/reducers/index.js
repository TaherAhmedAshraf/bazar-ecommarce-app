import { userReducer } from "./user";
import { productsReducer } from "./products";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({ userReducer, productsReducer })

export default rootReducer