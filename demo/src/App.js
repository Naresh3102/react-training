import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(false);

  function increment() {
    setCounter(counter + 1);
  }

  function addNewTask() {
    setTasks([...tasks, { name: newTask, id: Date.now() }]);
    setNewTask("");
  }

  function register() {
    console.log(formData);
  }

  return (
    <div className="container">
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}

      <label htmlFor="name">Name</label>
      <input
        type="text"
        name=""
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />

      <label htmlFor="Email">Email</label>
      <input
        type="text"
        name=""
        id="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name=""
        id="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <br />

      <button onClick={register}>Signup</button>
    </div>
  );
};

export default App;
