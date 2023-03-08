import { incCountAction, decCountAction } from "./Redux/action.js";
// import decCountAction from "./Redux/action.js";
import myStore from "./Redux/store.js";

function inCount(data) {
  incCountAction(data);
  console.log(myStore.getState());
}
function decCount(data) {
  decCountAction(data);
  console.log(myStore.getState());
}
console.log(myStore.getState());
inCount(6);
decCount(1);
