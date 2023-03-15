import myStore from "./Store";
export const Action = (name) => {
  myStore.dispatch({
    type: "NAME",
    payload: name,
  });
};
