import React, { useState } from "react";

function App() {
  const [name, setName] = useState("My name is Arko");

  function updatename() {
    setName("My name is" + Math.random());
  }
  return (
    // <React.Fragment> or <Fragment> solves the issue--If you don’t wrap sibling elements in a single parent, React will throw a syntax error because JSX must return a single element.
    <div>
      <button onClick={updatename}>Click me to change the Title</button>
      <Header title={name}></Header>
      <Header title="Arko"></Header>
      <Header title="Arko"></Header>
      <Header title="Arko"></Header>
      <Header title="Arko"></Header>
      <Header title="Arko"></Header>
    </div>
  );
}
function Header({ title }) {
  return <div>{title}</div>;
}
//The problem is every time the first header re renders the total app and other components re-render,which isn't a good practice.

//SOLUTION--1 [Declare the the state variable on in a specific function if already know where's it's gonna use]

function SolutionApp1() {
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="My name is Arko"></Header>
    </div>
  );

  function HeaderWithButton() {
    const [firstName, setFirstName] = useState("My name is Arko");

    function changeName() {
      setFirstName("My name is " + Math.floor(Math.random() * 10));
    }

    return (
      <div>
        <button onClick={changeName}>Click to change First Header Name</button>
        <Header title={firstName} />
      </div>
    );
  }
}

function Header({ title }) {
  return <div>{title}</div>;
}

//SOLUTION--2 React.memo [ It only re-renders those components where the props(state variable) are changed ]

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
