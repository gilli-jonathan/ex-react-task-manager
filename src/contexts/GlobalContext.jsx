import { createContext, useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env;

const TasksContext = createContext()

function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {

        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, [])

    return (

        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    )

}


export { TasksProvider, TasksContext }