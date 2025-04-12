// The problem with passing props
// Passing props is a great way to explicitly pipe data through your UI tree to the components that use it.
// But passing props can become verbose and inconvenient when you need to pass some prop deeply through
// the tree, or if many components need the same prop. The nearest common ancestor could be far removed from
// the components that need data, and lifting state up that high can lead to a situation called "prop drilling"
const { useState } = require("react");

// IT MEANS IN ORDER TO USE A STATE IN LOWEST CHILD U HAVE TO PASS THE PROP IN IT'S ALL ANCESTORS THOUGH THE PROP IS NOT NEEDED FOR THOSE ANCESTORS

function PropDrilling() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

function CountRenderer({ count }) {
  return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}
