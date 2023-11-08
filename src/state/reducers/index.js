import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  // state: (state = []) => state,
  amount: amountReducer,
});
export default reducers;
