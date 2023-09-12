import { useState } from "react";

import Button from "./components/Button";
import setColor from "./utils/setColor";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const decreaseHandler = () => {
    setCount((preState) => preState - 1);
  };

  const increaseHandler = () => {
    setCount((preState) => preState + 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className={setColor(count)}>{count}</h1>
      <div>
        <Button text="decrease" styles="red" handler={decreaseHandler} />
        <Button text="reset" styles="blue" handler={resetHandler} />
        <Button text="increase" styles="green" handler={increaseHandler} />
      </div>
    </>
  );
};

export default App;
