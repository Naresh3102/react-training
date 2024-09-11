import React from "react";
import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Button = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button disabled={count < 1 ? true : false} onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Button;
