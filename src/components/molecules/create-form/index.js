import React, { useState, useContext } from "react";
import { TaskContext } from "../../../contexts/task";

const FormCreate = () => {
  const [task, setTask] = useState("");
  const { addTask } = useContext(TaskContext);

  const _onAddNewTask = (event) => {
    event.preventDefault();
    const newTask = { title: task, completed: false };
    addTask(newTask);
    setTask("");
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={_onAddNewTask}
    >
      <div className="form-outline flex-fill">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="form2"
          className="form-control"
          placeholder="New Task..."
        />
      </div>
      <button type="submit" className="btn btn-info ms-2">
        Add
      </button>
    </form>
  );
};

export default FormCreate;
