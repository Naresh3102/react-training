import React, { useRef, useState } from "react";

const Timeout = () => {
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const id = useRef();

  function handleStart() {
    id.current = setTimeout(() => {
      setTimerExpired(true);
    }, 5000);
    console.log(id.current);
    setTimerStart(true);
  }

  function handleStop() {
    console.log(id.current);
    clearTimeout(id.current);
    setTimerStart(false);
  }

  return (
    <div>
      <h2>Timer Component</h2>
      <button onClick={timerStart ? handleStop : handleStart}>
        {timerStart ? "Stop" : "Start"}
      </button>
      {timerExpired && <p>Timer expired</p>}
    </div>
  );
};

export default Timeout;
