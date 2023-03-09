import myReducer from "./reducer.js";
import { legacy_createStore as createStore } from "redux";

const myStore = createStore(myReducer);

export default myStore;
