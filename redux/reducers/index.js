import { userReducer } from "./user";
import { productsReducer } from "./products";
import { cartReducer } from "./cart";

import { combineReducers } from 'redux'

const rootReducer = combineReducers({ userReducer, productsReducer, cartReducer })

export default rootReducer