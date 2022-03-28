import React from "react";
import NotificationArea from "../../components/notification";
import Todo from "../../components/todoList";
const Todolist = [
  { id: 1, title: "Learn React", done: false },
  { id: 2, title: "God's list ", done: false }
];
const TodoContainer = () => {
  return (
    <div>
      <h2 align="center">Todo Application</h2>
      <NotificationArea />
      {Todolist.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
