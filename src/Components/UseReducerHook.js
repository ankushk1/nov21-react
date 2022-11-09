import React from "react";
import { useReducer } from "react";

const UseReducerHook = () => {
  // We have an initial State
  // We have a method called "dispatch" that triggers some action
  // We a have a reducer , which takes the action and updates the state

  const initialState = {
    count: 0,
    count2: 1,
    name: ""
  };

  const reducer = (state, action) => {
    // console.log(action);
    // if (action.type === "increment") {
    //   return { ...state, count: state.count + action.payload };
    // } else if (action.type === "decrement") {
    //   return { ...state, count: state.count - 1 };
    // } else {
    //   return state;
    // }
    console.log(action.event);
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "increment2":
        return { ...state, count2: state.count2 + (action.payload || 1) };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "inputChange":
        return { ...state, name: action.event.target.value };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count - {state.count}
      Count2 - {state.count2}
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment2", payload: 5 })}>
          Increment 2
        </button>
      </div>
      <br />
      <br />
      <div>
        <input
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(event) => dispatch({ type: "inputChange", event: event })}
        />
      </div>
    </div>
  );
};

export default UseReducerHook;
