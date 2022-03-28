import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{todo.title}</span>
      <hr />
    </div>
  );
};

export default Todo;
