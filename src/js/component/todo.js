import React, { useState } from "react";

const Todo = () => {
  const [tasks, remainTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (event) => {
    if (event.key === "Enter" && newTask.trim() !== "") {
      remainTask([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    remainTask(updatedTasks);
  };

  const howManyTask = (tasks) => {
    return tasks.length;
  };

  const taskCount = howManyTask(tasks);

  return (
    <div>
      <h1 className="mt-3 mb-3 text-primary mx-auto">📜Pending Tasks</h1>
      <div>
        <input
          className="form-control w-50 mx-auto text-center"
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onKeyDown={addTask}
          placeholder="Add a new task"
        />
      </div>

      <ul className="form-control w-50 mx-auto text-center list-unstyled text-bold">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text-capitalize" onClick={() => deleteTask(index)}>
              {task} 👣
            </span>
          </li>
        ))}
      </ul>

      <p>{taskCount} Remaining...</p>
    </div>
  );
};

export default Todo;
