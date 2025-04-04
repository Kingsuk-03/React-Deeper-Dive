import { useMemo, useState } from "react";

// Without Using useMemo -------
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for (let i = 1; i <= inputValue; i++) {
    count = count + i;
  }

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={"Find Sum from 1 to n"}
      ></input>
      <br />
      Sum form 1 to {inputValue} is {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}

// Using useMemo

function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalcount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={"Find Sum from 1 to n"}
      ></input>
      <br />
      Sum form 1 to {inputValue} is {count}
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter ({counter})
      </button>
    </div>
  );
}
