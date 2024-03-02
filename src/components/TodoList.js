// TodoList.js

import React, { useState } from 'react';
import { useTodoList } from "@/context/TodoContext";

const TodoList = () => {
  const { tasks, setTasks, completed, setCompleted } = useTodoList();

  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditTask(tasks[index]);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditTask('');
  };

  const updateTask = () => {
    if (editTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = editTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditTask('');
  };

  const complete = (index) => {
    setCompleted([...completed, tasks[index]]);
    removeTask(index);
  }

  return (
    <div className="bg-gray-200 p-4 rounded-md max-w-md mx-auto mt-8">
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border rounded-l-md w-full"
        />
        <button onClick={addTask} className="bg-black text-pink-500 px-4 rounded-r-md hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out">
          Create
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center px-2 py-1 border-b">
            <div className="flex items-center">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className="p-1 border rounded-md mr-2"
                  />
                  <button onClick={updateTask} className="bg-black text-green-300 px-4 rounded-md hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out" type="button">
                    Update
                  </button>
                  <button onClick={cancelEditing} className="bg-black text-blue-300 px-4 rounded-md ml-2 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out" type="button">
                    Cancel
                  </button>
                  <button onClick={() => removeTask(index)} className="bg-black text-red-300 px-4 rounded-md ml-2 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out" type="button">
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <button onClick={() => startEditing(index)} className="bg-black text-pink-500 px-4 rounded-md ml-2 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out" type="button">
                    Edit
                  </button>
                  <button onClick={() => complete(index)} className="bg-black text-pink-500 px-4 rounded-md ml-2 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out" type="button">
                    Complete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
