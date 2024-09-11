import { useState, createContext } from "react";

export const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(10);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count < 1) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
