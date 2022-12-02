import React from "react";

const TodoDetails = ({ todo, onEditHandler, onDeleteTodo, isEditing , onCompleteHandler}) => {
  return (
    <>
      <div className="col-1"></div>
      <div className="col-6 text-start">
        <span onClick={() => onCompleteHandler(todo)}>
          {todo.completed? (
            <i className="fa-regular fa-sm fa-circle-check me-2"></i>
          ) : (
            <i className="fa-solid fa-stopwatch me-2"></i>
          )}
        </span>
        {todo.text}
      </div>
      <div className="col-5 mt-2">
        <button
          className="btn btn-sm btn-secondary me-2"
          onClick={() => onEditHandler(todo.id)}
          disabled={isEditing.edit}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoDetails;
