import rootReducer from "./reducers";
import { createStore } from "redux";

// Creating Redux Store
const store = createStore(rootReducer)


export default store;