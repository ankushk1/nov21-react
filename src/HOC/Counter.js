import React, { useState } from "react";
import withCounter from "./withCounter";

const Counter = (props) => {
  console.log(props)
  const {count, onIncrement, onDecrement} = props;

  return (
    <div>
      Counter Count- {count}
      <div>
        <button onClick={onIncrement}>Inc</button>
        <button onClick={onDecrement}>Dec</button>
      </div>
    </div>
  );
};

export default withCounter(Counter);
