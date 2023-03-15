import { legacy_createStore as reduxStore } from "redux";
import Reducer from "./Reducer";
const myStore = reduxStore(Reducer);
export default myStore;
