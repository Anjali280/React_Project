import React from "react";
import { useSelector } from "react-redux";

function Display(props) {
  const data = useSelector((storeData) => {
    return storeData;
  });
  return (
    <div style={{ padding: "180px" }}>
      <h3>Display Component</h3>
      <h4>{data} </h4>
    </div>
  );
}

export default Display;
