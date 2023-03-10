import React from "react";
import "./ReactInputBox.css";

export default function ReactInputBox() {
  const [text, setText] = React.useState("");
  function handleInput(event) {
    setText(event.target.value);
  }
  function clear() {
    setText("");
  }
  return (
    <div>
      <h1>REACT-INPUT BOX</h1>
      <input value={text} className="input" onChange={handleInput} />
      <button onClick={clear} className="clearBtn">
        Clear
      </button>
      <br />
      <br />
      <h1>{text}</h1>
    </div>
  );
}
