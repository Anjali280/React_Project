let initialState = "Dummy data";

const Reducer = (state = initialState, action) => {
  if (action.type === "NAME") {
    state = action.payload;
  }
  return state;
};
export default Reducer;
