import { createStore, combineReducers } from "redux";
import appReducerFunction from "./appReducer";


let reducers = combineReducers({
  app : appReducerFunction
});

let store = createStore(reducers);

export default store;
