import React, { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    let currentTasks = localStorage.getItem("gb_tasks");
    if (currentTasks) {
      currentTasks = JSON.parse(currentTasks);
    } else {
      currentTasks = [];
      localStorage.setItem("gb_tasks", JSON.stringify(currentTasks));
    }
    setTasks((prevTasks) => currentTasks);
  };

  const addTask = (task) => {
    const currentTasks = JSON.parse(localStorage.getItem("gb_tasks"));
    currentTasks.push(task);
    localStorage.setItem("gb_tasks", JSON.stringify(currentTasks));
    fetchTasks();
  };

  const updateTask = (idx, key, value) => {
    const currentTasks = JSON.parse(localStorage.getItem("gb_tasks"));
    if (currentTasks[idx]) {
      currentTasks[idx][key] = value;
    }
    localStorage.setItem("gb_tasks", JSON.stringify(currentTasks));
    fetchTasks();
  };

  const getTask = (idx) => {
    const currentTasks = JSON.parse(localStorage.getItem("gb_tasks"));
    if (currentTasks[idx]) {
      return currentTasks[idx];
    }
    return null;
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const value = { tasks, addTask, updateTask, getTask };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export { TaskProvider, TaskContext };
