import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./Counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hello Redux-Toolkit </h1>
      <Counter />
    </>
  );
}

export default App;
