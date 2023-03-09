import myStore from "./Redux/store.js";
import { incCountAction, decCountAction } from "./Redux/action.js";

function inCount(data) {
  incCountAction(data);
  console.log(myStore.getState());
}
function decCount(data) {
  decCountAction(data);
  console.log(myStore.getState());
}
console.log(myStore.getState());
inCount(3);
decCount(1);
