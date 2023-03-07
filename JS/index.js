import incCountAction from "./Redux/action.js";
import myStore from "./Redux/store.js";
function inCount() {
  incCountAction(data);
}
function decCount() {}
console.log(myStore.getState());
inCount(5);
decCount(5);
