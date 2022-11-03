import React from "react";
import { useLayoutEffect } from "react";
import { useState, useEffect } from "react";

const FuncLC = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("UseEffect Called");
  }, [number]);

  useEffect(() => {
    console.log("UseEffect2 Called");
  }, [count]);

  useEffect(()=> {
    return(() => {
      console.log('Unmount Called');
    })
  },[])

  useLayoutEffect(() => {
    console.log("useLayoutEffect Called");
  }, []);

  return (
    <div>
      {console.log("Render")}
      FuncLC
      <h3>{number}</h3>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <br />
      <br />
      <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default FuncLC;
