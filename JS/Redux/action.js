import myStore from "./store.js";
export const incCountAction = (data) => {
  myStore.dispatch({
    type: "ADD",
    payload: data,
  });
};

export const decCountAction = (data) => {
  myStore.dispatch({
    type: "SUB",
    payload: data,
  });
};
// export default { incCountAction, decCountAction };
