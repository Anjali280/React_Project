import React from "react";
import { Action } from "./Action";
import { useState } from "react";

export default function Input(props) {
  const [state, setState] = useState("");
  const sendDataToAction = () => {
    Action(state);
  };
  return (
    <div style={{ padding: "180px" }}>
      <h2>Input Component</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />{" "}
      <span></span>
      <button onClick={sendDataToAction}>Submit</button>
    </div>
  );
}
