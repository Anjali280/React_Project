let initialState = "Dummy data";

const Reducer = (state = initialState, action) => {
  if (action.type === "NAME") {
    state = action.name;
  }
  return state;
};
export default Reducer;
