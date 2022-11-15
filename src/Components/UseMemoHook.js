import React from "react";
import { useState, useMemo  } from "react";

const slowFunc = (num) => {
  console.log('slowFunc called' );
  for (let i = 0; i < 2000000000; i++) {}
  return num *2;
};

const UseMemoHook = () => {
  const [renderCount, setRenderCount] = useState(1);
  const [number, setNumber] = useState(1);

  // const result = slowFunc(number);
  // Use memo can be used to memoize primitive values and arrays , objects
  const result = useMemo(()=>{
    return slowFunc(number);
  }, [number])

  return (
    <div>
      Count = {renderCount}
      <div>
        <button onClick={() => setRenderCount(renderCount + 1)}>Inc</button>
      </div>{" "}
      <br />
      <br />
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <div>
          {number} x 2 = {result}
        </div>
      </div>
    </div>
  );
};

export default UseMemoHook;
