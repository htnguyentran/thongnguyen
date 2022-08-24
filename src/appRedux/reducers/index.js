import { combineReducers } from "redux";
import coinReducer from "./coinReducer";

const rootReducer = combineReducers({
  /* your app’s top-level reducers */
  coinReducer,
});

export default rootReducer;
