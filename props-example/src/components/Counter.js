import React from "react";
import Button from "./Button";

const Counter = ({data, add, sub}) => {
  return (
    <div>
      <h3>Count : {data}</h3>
      <Button text={"Increment"} handleClick={add}  />
      <Button text={"Decrement"} handleClick={sub} disabled={data < 1 ? true : false} />
    </div>
  );
};

export default Counter;
