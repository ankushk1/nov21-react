import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const set = new Set();
const UseCallbackHook = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);

  const onIncrement1 = () => {
    setNumber(number + 1);
  };

  // const onIncrement2 = () => {
  //   setNumber2(number2 + 1);
  // }

  const onIncrement2 = useCallback((num) => {
    setNumber2(number2 + num);
  }, [number2]);

  set.add(onIncrement2);

  useEffect(() => {
    console.log("useEffect called");
  }, [onIncrement2]);

  console.dir([1,2,3]);
  console.log(set);
  return (
    <div>
      Number1 ={number} <br />
      Number2 ={number2}
      <div>
        <button onClick={onIncrement1}>Increment 1 </button>
        <button onClick={()=>onIncrement2(5)}> Increment 2</button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
