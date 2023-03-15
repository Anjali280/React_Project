const electronicAction = (electronicData, dispatch) => {
  dispatch({
    type: "ELECTRONIC",
    payload: electronicData,
  });
};
export default electronicAction;
