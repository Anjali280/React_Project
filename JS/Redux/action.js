import myStore from "./store.js";
const incCountAction = (data) => {
  myStore.dispatch({
    type: "ADD",
    payload: data,
  });
};
export default incCountAction;
