import React from "react";

const ListTodo = ({ text, isCompleted }) => {
  if (isCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
};

export default ListTodo;
