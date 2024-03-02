
import { useState, createContext, useContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [completed, setCompleted] = useState([]);

    return (
        <TodoContext.Provider value={{ 
            tasks, 
            setTasks, 
            completed, 
            setCompleted 
        }}>
            {children}
        </TodoContext.Provider>
    )
}

const useTodoList = () => useContext(TodoContext);

export { TodoContextProvider, useTodoList }


