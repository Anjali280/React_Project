import { legacy_createStore as reduxStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Reducer from "./Reducer";

const myStore = reduxStore(Reducer, applyMiddleware(logger));
export default myStore;
