import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  const onAddTodo = () => {
    if (!input) return;
    const newTodo = {
      id: uuidv4().split("-")[0],
      text: input
    };
    setTodoArr([...todoArr, newTodo]);
    setInput("");
  };

  const onDeleteTodo = (id) => {
    //Filter Method
    // const filteredArr = todoArr.filter( elem => elem.id != id)
    // setTodoArr(filteredArr)

    // splice method
    const todoIndex = todoArr.findIndex((elem) => elem.id == id);
    const cloneArr = [...todoArr];
    cloneArr.splice(todoIndex, 1);
    setTodoArr(cloneArr);
  };

  return (
    <div className="container">
      <div className="fs-4 my-3">Todo App</div>
      <div className="d-flex justify-content-center">
        <input
          className="form-control me-2 w-75"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="btn btn-success" onClick={onAddTodo}>
          {" "}
          Add{" "}
        </button>
      </div>
      <div className="row mt-3 ">
        {todoArr.length > 0 &&
          todoArr.map((todo) => (
            <>
              <div className="col-1"></div>
              <div className="col-6 text-start">{todo.text}</div>
              <div className="col-5 mt-2">
                <button className="btn btn-sm btn-secondary me-2">Edit</button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Todo;
