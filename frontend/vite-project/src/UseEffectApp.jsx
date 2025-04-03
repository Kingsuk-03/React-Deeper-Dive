import { useEffect, useState } from "react";

function UseEffectApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

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

export default UseEffectApp;
