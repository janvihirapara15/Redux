import {formReducers} from "./formreducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ formReducers});
export default rootReducer;