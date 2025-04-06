import { useEffect, useState } from "react";

// CustomHook must have 'use' as perfix (like useMyHook / useTodos)
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 5000);
  }, []);
  return todos;
}
function CustomHook() {
  const todos = useTodos();

  return (
    <div>
      {todos.map(({ title, description }) => {
        return (
          <div>
            <TodoComponent
              title={title}
              description={description}
            ></TodoComponent>
          </div>
        );
      })}
    </div>
  );
}

function TodoComponent({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
}

export default CustomHook;
