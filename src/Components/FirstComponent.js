import React, { useState } from "react";

const FirstComponent = (props) => {
  console.log(props)

  const { name, age } = props;

  // 1. To use props.name
  // 2. To destructure from props object
  // 3. To destructure in the params only

  const [state, setState] = useState({
    count: 0,
    count2: 1
  });

  const [count, setCount] = useState(0);

  // console.log(state.count);
  const onIncrement = (num) => {
    setState((prevState) => {
      console.log(prevState);
      return {
        ...state,
        count: prevState.count + 1
      };
    });
    setState((prevState) => {
      console.log(prevState);
      return {
        ...state,
        count: prevState.count + 1
      };
    });
  };

  const onIncrement2 = (num) => {
    setState({
      ...state,
      count2: state.count2 + num
    });
  };

  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      {/* <div>{props.obj.user}</div> */}
      {/* Count - {state.count} <br />
      Count2 - {state.count2} */}
      {/* <h2>{count}</h2> */}
      {/* <div>
        <button onClick={() => onIncrement()}>Increment</button>
        <button onClick={() => onIncrement2()}>Increment2</button>
      </div> */}
    </div>
  );
};

export default FirstComponent;
