import "./App.css";
import React, { useRef, useState } from "react";
import Modal from "./component/Modal";
import Timeout from "./component/TimeOut";

function App() {
  const fileRef = useRef();
  const modalRef = useRef();
  const [tasks, setTasks] = useState([
    { name: "task1", id: 1 },
    { name: "task2", id: 2 },
  ]);

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleShow = () => {
    modalRef.current.showModal();
  };

  const handleClose = () => {
    modalRef.current.close();
  };

  const handleDelete = () => {
    console.log("deleted");
    modalRef.current.close()
  }

  return (
    <div>
      <input style={{ display: "none" }} type="file" ref={fileRef} />
      <button onClick={handleClick}>Upload</button>

      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}

      {/* <dialog ref={modalRef}>
        <p>Something</p>
        <button onClick={handleClose}>X</button>
      </dialog> */}

      {/* <Modal ref={modalRef}>
        <p>Something Para</p>
        <button onClick={handleClose}>X</button>
      </Modal> */}

      <Modal ref={modalRef}>
        <p>Are you sure you want to delete?</p>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={handleClose}>No</button>
      </Modal>

      <button onClick={handleShow}>Show</button>

      <Timeout />
    </div>
  );
}

export default App;
