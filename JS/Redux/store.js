import { legacy_createStore as createStore } from "redux";
import myReducer from "./reducer";

const myStore = createStore(myReducer);

export default myStore;
