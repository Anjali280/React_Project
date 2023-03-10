import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Counter value = {counter}</h1>
      <button
        disabled={counter >= 20 ? true : false}
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
          console.log("counter");
          setCounter(counter + 3);
        }}
      >
        INCREASE COUNT
      </button>
      <button
        disabled={counter === 0 ? true : false}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        DECREASE COUNT
      </button>
    </div>
  );
}
