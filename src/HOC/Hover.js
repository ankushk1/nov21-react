import React, { useState } from 'react'
import withCounter from './withCounter';

const Hover = (props) => {
  console.log(props);
  const {count, onIncrement, onDecrement}= props
  return (
    <div className='mt-5 border border-dark w-50'>
      <div onMouseOver={onIncrement} onMouseDown={onDecrement}>
        Counter Count- {count}
      </div>
    </div>
  );
}

export default withCounter(Hover)