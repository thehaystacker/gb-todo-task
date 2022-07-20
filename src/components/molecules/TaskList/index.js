import React, { useContext } from "react";
import { TaskContext } from "../../../contexts/task";

const TaskList = () => {
  const { tasks, updateTask } = useContext(TaskContext);

  const _toggleTaskStatus = (event, idx) => {
    const checked = event.target.checked;
    updateTask(idx, "completed", checked);
  };

  return (
    <>
      {tasks && tasks.length ? (
        <ul className="list-group mb-0">
          {tasks.map((task, k) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
              key={k}
            >
              <div className="d-flex align-items-center">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  aria-label={task.title}
                  checked={task.completed}
                  onChange={(e) => _toggleTaskStatus(e, k)}
                />
                {task.completed ? (
                  <s>{task.title}</s>
                ) : (
                  <span>{task.title}</span>
                )}
              </div>
              <div>
                <a
                  href={`/update?id=${k}`}
                  data-mdb-toggle="tooltip"
                  title="Edit item"
                  className="d-inline-block"
                  style={{ marginRight: "16px" }}
                >
                  Edit
                </a>
                <a
                  href={`/update?id=${k}`}
                  data-mdb-toggle="tooltip"
                  title="Remove item"
                  className="d-inline-block"
                >
                  Remove
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default TaskList;
