import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import { Todoitems } from "./Todoitems";

let count = 0;

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const input = inputRef.current.value.trim();
    if (input === "") return;

    const newTask = { no: count++, text: input, done: false };
    const updatedTodos = [...todos, newTask];
    setTodos(updatedTodos);
    inputRef.current.value = "";

    localStorage.setItem("todos_count", count);
  };

  const toggleDone = (no) => {
    const updatedTodos = todos.map((todo) =>
      todo.no === no ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (no) => {
    const updatedTodos = todos.filter((todo) => todo.no !== no);
    setTodos(updatedTodos);
  };

  // Load tasks from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
    count = parseInt(localStorage.getItem("todos_count")) || 0;
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo-container">
      <img src="/Untitled-design-8--unscreen.gif" />

      <div className="todo">
        <div className="todo-header">To-Do List</div>

        <div className="todo-add">
          <input
            type="text"
            ref={inputRef}
            placeholder="Add your task"
            className="todo-input"
          />
          <div className="todo-add-btn" onClick={add}>
            ADD
          </div>
        </div>

        <div className="todo-list">
          {todos.length > 0 &&
            todos.map((item) => (
              <Todoitems
                key={item.no}
                no={item.no}
                text={item.text}
                done={item.done}
                onToggle={toggleDone}
                onDelete={deleteTask}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
