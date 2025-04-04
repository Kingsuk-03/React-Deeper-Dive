import { useEffect, useState } from "react";

function UseEffectApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 5000);
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

// Write a component that takes a todo id as an input
// And fetches the data for that todo from the given endpoint And then renders it
// How would the dependency array change?

function UseEffectApp() {
  const [todoid, setTodoid] = useState(1);

  return (
    <div>
      <button
        onClick={function () {
          setTodoid(1);
        }}
      >
        1
      </button>
      <button
        onClick={function () {
          setTodoid(2);
        }}
      >
        2
      </button>
      <button
        onClick={function () {
          setTodoid(3);
        }}
      >
        3
      </button>
      <Todo id={setTodoid} />
      {/* <Todo id={1} /> */}
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async (res) => {
      const json = await res.json();
      setTodo(json.todo);
    });
  }, [id]);

  return (
    <div>
      <h2>{todo.title}</h2>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default UseEffectApp;
