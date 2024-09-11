import React from "react";
import Button from "./Button";
import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Counter = () => {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h3>Count : {count}</h3>
      <Button />
    </div>
  );
};

export default Counter;
