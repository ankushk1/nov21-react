import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { IncrementCount, DecrementCount, ResetCount } from '../actions/counterActions'


const CounterRedux = () => {

  const storeState = useSelector(state => state.countData.count)
  console.log('storeState ==>', storeState);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('UseEffect')
    setCount(storeState)
  },[storeState])

  const onHandleIncrement = () => {
    dispatch(IncrementCount())
  }

  const onHandleDecrement = () => {
    dispatch(DecrementCount())
    
  }

  const onHandleReset = () => {
    dispatch(ResetCount())
    
  }

  return (
    <div>CounterRedux <br />
       Count - {count}
      <div>
        <button onClick={onHandleIncrement}>
          Increment
        </button>
        <button onClick={onHandleDecrement}>
          Decrement
        </button>
        <button onClick={onHandleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default CounterRedux


// In Redux, the state is always predictable. 
// If the same state and action are passed to a reducer, 
// the same result is always produced because reducers are pure functions.
//  The state is also immutable and is never changed