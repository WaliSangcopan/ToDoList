// pages/index.js

import { useState } from "react";
import TodoList from '../components/TodoList';
import { useTodoList } from "@/context/TodoContext";

const TODO = {
  LIST: "To-Do List",
  COMPLETED: "Completed",
}

const Home = () => {
  const { completed } = useTodoList();
  const [tab, setTabs] = useState(TODO.LIST);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <button 
          className={`px-4 py-2 mr-2 rounded-full focus:outline-none ${tab === TODO.LIST ? 'bg-black text-pink-500 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out' : 'bg-gray-300 text-gray-800 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out'}`} 
          onClick={() => setTabs(TODO.LIST)}>
            {TODO.LIST}
        </button>
        <button 
          className={`px-4 py-2 rounded-full focus:outline-none ${tab === TODO.COMPLETED ? 'bg-black text-pink-500 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out' : 'bg-gray-300 text-gray-800 hover:bg-opacity-80 hover:text-opacity-80 transition duration-300 ease-in-out'}`} 
          onClick={() => setTabs(TODO.COMPLETED)}>
            {TODO.COMPLETED}
        </button>
      </div>
      {tab === TODO.LIST && <TodoList />}
      {tab === TODO.COMPLETED && (
        completed.map((data, i) => (
          <div key={i}>{data}</div>
        ))
      )}
    </div>
  );
};

export default Home;
