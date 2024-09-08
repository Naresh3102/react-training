import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(10);
  const [products, setProducts] = useState([]);

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

  // // All renders
  // useEffect(() => {
  //   console.log("Effect");
  // });

  // // First render
  // useEffect(() => {
  //   console.log("Effect");
  // }, []);

  // When dependency change
  useEffect(() => {
    console.log("Effect");
  }, [products, count]);

  return (
    <div>
      <Counter data={count} add={increment} sub={decrement} />

      {products.map((p) => (
        <Cards key={p.name} product={p} />
      ))}
    </div>
  );
}

export default App;
