import {INCREMENT, DECREMENT, RESET, SET_TODOS} from './Contants'


export const IncrementCount = () => {
  return ({
    type: INCREMENT
  })
}


export const DecrementCount = () => {
  return ({
    type: DECREMENT
  })
}



export const ResetCount = () => {
  return ({
    type: RESET
  })
}

