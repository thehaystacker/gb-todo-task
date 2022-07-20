import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [retryCount, setRetryCount] = useState(0);

  const fetchTasks = () => {
    let currentTasks = JSON.parse(localStorage.getItem("gb_tasks"));
    if (!currentTasks) {
      currentTasks = [];
    }
    localStorage.setItem("gb_tasks", JSON.stringify(currentTasks));
    setTasks((prevTasks) => currentTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, [retryCount]);

  const retry = () => {
    setRetryCount((prevCount) => prevCount + 1);
  };

  const addTask = (task) => {
    let currentTasks = JSON.parse(localStorage.getItem("gb_tasks"));
    if (!currentTasks) {
      currentTasks = [];
    }

    currentTasks.push(task);
    localStorage.setItem("gb_tasks", JSON.stringify(currentTasks));
    setTasks((prevTasks) => currentTasks);
  };

  const updateTask = (idx, task) => {
    const updatedTasks = [...tasks];
    updatedTasks[idx] = task;
    setTasks(updatedTasks);
  };

  return [tasks, addTask, updateTask, retry];
};

export default useTasks;
