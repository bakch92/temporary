import { combineReducers } from "redux";
import checkReducer from "./checkReducer";

const rootReducer = combineReducers({
  checkReducer,
});

export default rootReducer;
