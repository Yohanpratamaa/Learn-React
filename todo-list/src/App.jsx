import React from "react";
import { useState } from "react";
import Todo from "./todolist/ListTodo.jsx";

const App = () => {
  const [complete, isComplete] = useState(false);

  return (
    <div>
      <h1>Todo List</h1>
      {/* <Todo text="Belajar React" isCompleted={true} /> */}

      <button
        onClick={() => {
          isComplete(true);
        }}
      >
        Button {complete ? "true" : "false"}
      </button>
    </div>
  );
};

export default App;
