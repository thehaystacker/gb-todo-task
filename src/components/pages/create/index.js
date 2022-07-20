import React from "react";
import FormCreate from "../../molecules/create-form";
import TaskList from "../../molecules/TaskList";

const Create = () => {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <p className="mb-2">
                  <span className="h2 me-2">Todo List</span>
                </p>
                <FormCreate />
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
