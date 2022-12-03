import { useReducer, useRef } from "react";
import "./App.css";
function reducer(state, Action) {
  console.log(Action);
  switch (Action.type) {
    case "Inc":
      return Number(state) + 1;
    case "dec":
      return state - 1;
    case "reset":
      return 0;
    case "show":
      return Action.payload;
    default:
      return state;
  }
}

function App() {
  const numbers = useRef();

  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "Inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <input type="number" ref={numbers}></input>
      {numbers.current && console.log(numbers.current.value)}
      <button
        onClick={() =>
          dispatch({ type: "show", payload: numbers.current.value })
        }
      >
        Show
      </button>
      <h1>{state}</h1>
    </div>
  );
}

export default App;
