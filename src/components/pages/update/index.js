import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../../../contexts/task";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const { updateTask, getTask } = useContext(TaskContext);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const id = query.get("id");
  const navigate = useNavigate();

  useEffect(() => {
    const currentTask = getTask(id);
    if (currentTask) {
      setTask(currentTask.title);
      setIsCompleted(currentTask.completed);
    }
  }, []);

  const _onUpdateTask = (e) => {
    e.preventDefault();
    updateTask(id, "title", task);
    updateTask(id, "completed", isCompleted);
    navigate("/");
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <p className="mb-2">
                  <span className="h2 me-2">{task}</span>
                </p>

                <form
                  className="d-flex flex-column justify-content-center align-items-center mb-4"
                  onSubmit={_onUpdateTask}
                >
                  <div className="mb-4" style={{ width: "100%" }}>
                    <input
                      type="text"
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      id="form2"
                      className="form-control"
                      placeholder="New Task..."
                    />
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      aria-label="Completed"
                      checked={isCompleted}
                      onChange={(e) => setIsCompleted(e.target.checked)}
                    />
                    Completed
                  </div>
                  <button type="submit" className="btn btn-info ms-2">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
