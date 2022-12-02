import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { IncrementCount, DecrementCount, ResetCount } from '../actions/counterActions'


const CounterRedux = () => {

  const storeState = useSelector(state => state.count)
  console.log('storeState ==>', storeState);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0)

  useEffect(() => {
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