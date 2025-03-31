import React, { useState } from "react";

let counter = 4;
function TodoApp() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Go to GYM",
      description: "From 6AM",
    },
    {
      id: 2,
      title: "Go to Market",
      description: "From 7AM",
    },
    {
      id: 3,
      title: "Go to College",
      description: "From 8AM",
    },
  ]);

  function addTodo() {
    setTodo([
      ...todo,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todo.map(function (todo) {
        return (
          <div>
            <TodoComponent
              key={todo.id}
              title={todo.title}
              description={todo.description}
            ></TodoComponent>
          </div>
        );
      })}
    </div>
  );
}

function TodoComponent(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </div>
  );
}

export default TodoApp;
