import React from "react";

export default function TodoForm() {
  return (
    <form className="TodoForm">
      <input
        type="text"
        className="todo-input"
        placeholder="Enter your tasks.."
      />
      <button type="submit" className="todo-btn">
        Enter
      </button>
    </form>
  );
}
