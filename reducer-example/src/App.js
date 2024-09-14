import "./App.css";
import React, { useReducer, useState } from "react";

const initialState = {
  tasks: [
    {
      name: "Task1",
      id: 1,
    },
  ],
  user: {
    name: "Naresh",
    email: "naresh@gmail.com",
  },
};

const reducerFunc = (prevState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...prevState,
        tasks: [
          { name: action.payload.name, id: action.payload.id },
          ...prevState.tasks,
        ],
      };

    case "DELETE":
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
};

function App() {
  const [taskState, taskDispatch] = useReducer(reducerFunc, initialState);

  const [typedTask, setTypedTask] = useState("");

  const handleAdd = () => {
    taskDispatch({
      type: "ADD_TASK",
      payload: {
        name: typedTask,
        id: Date.now(),
      },
    });
    setTypedTask("");
  };

  const handleDelete = (taskId) => {
    taskDispatch({
      type: "DELETE",
      payload: taskId
    })
  }

  return (
    <div>
      <h2>Task Manager</h2>
      <input
        type="text"
        onChange={(e) => setTypedTask(e.target.value)}
        value={typedTask}
      />
      <button onClick={handleAdd}>Add Task</button>

      {taskState.tasks.map((task) => (
        <div>
          <li key={task.id}>{task.name}</li>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
