import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import TodoDetails from "./TodoDetails";

const Todo = () => {

  const storeState = useSelector(state => state.count)
  console.log('storeState in Todo ==>', storeState);
  const ALL = "ALL";
  const PENDING = "PENDING";
  const COMPLETED = "COMPLETED";

  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState(() => {
    const todosFromLS = JSON.parse(localStorage.getItem('todos')) ?? [];
    return todosFromLS;
  });
  const [isEditing, setIsEditing] = useState({ edit: false, todoId: "" });
  const [filter, setFilter] = useState(ALL);

  const onAddTodo = () => {
    if (!input) return;
    const newTodo = {
      id: uuidv4().split("-")[0],
      text: input,
      completed: false
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

  const onEditHandler = (id) => {
    setIsEditing({ edit: true, todoId: id });
    const todo = todoArr.find((elem) => elem.id === id);
    setInput(todo.text);
  };

  const onUpdateHandler = () => {
    const currId = isEditing.todoId;
    const todoIndex = todoArr.findIndex((elem) => elem.id === currId);
    const cloneArr = [...todoArr];
    cloneArr[todoIndex] = {
      id: currId,
      text: input
    };
    setTodoArr(cloneArr);
    setInput("");
    setIsEditing({ edit: false, todoId: "" });
  };

  const onCompleteHandler = ({ id, text, completed }) => {
    const todoIndex = todoArr.findIndex((elem) => elem.id === id);
    const cloneArr = [...todoArr];
    cloneArr[todoIndex] = {
      id: id,
      text: text,
      completed: !completed
    };
    setTodoArr(cloneArr);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoArr))
  }, [todoArr])

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
        {isEditing.edit ? (
          <button className="btn btn-sm btn-warning" onClick={onUpdateHandler}>
            Update
          </button>
        ) : (
          <button className="btn btn-sm btn-success" onClick={onAddTodo}>
            Add
          </button>
        )}
      </div>
      <div className="d-flex justify-content-evenly my-2">
        <button
          className={`${filter === ALL ? "btn-info" : ""} btn`}
          onClick={() => setFilter(ALL)}
        >
          All
        </button>
        <button
          className={`${filter === COMPLETED ? "btn-info" : ""} btn`}
          onClick={() => setFilter(COMPLETED)}
        >
          Completed
        </button>
        <button
          className={`${filter === PENDING ? "btn-info" : ""} btn`}
          onClick={() => setFilter(PENDING)}
        >
          Pending
        </button>
      </div>
      <div className="row mt-3 ">
        {todoArr.length > 0 &&
          filter === ALL &&
          todoArr.map((todo) => (
            <TodoDetails
              key={todo.id}
              todo={todo}
              onEditHandler={onEditHandler}
              onDeleteTodo={onDeleteTodo}
              isEditing={isEditing}
              onCompleteHandler={onCompleteHandler}
            />
          ))}
        {todoArr.length > 0 &&
          filter === COMPLETED && todoArr.map((todo) => (
            todo.completed && <TodoDetails
              key={todo.id}
              todo={todo}
              onEditHandler={onEditHandler}
              onDeleteTodo={onDeleteTodo}
              isEditing={isEditing}
              onCompleteHandler={onCompleteHandler}
            />
          ))}
          {todoArr.length > 0 &&
          filter === PENDING && todoArr.map((todo) => (
            !todo.completed && <TodoDetails
              key={todo.id}
              todo={todo}
              onEditHandler={onEditHandler}
              onDeleteTodo={onDeleteTodo}
              isEditing={isEditing}
              onCompleteHandler={onCompleteHandler}
            />
          ))}
      </div>
    </div>
  );
};

export default Todo;



// JSON.parse
// JSON.stringify