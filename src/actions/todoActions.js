import { SET_TODOS } from "./Contants"



export const setTodos = (todos) => {
  return ({
    type: SET_TODOS,
    payload: todos
  })
}
