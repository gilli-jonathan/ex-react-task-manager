import { createContext } from "react";
import useTask from "../hooks/useTask";
// const { VITE_API_URL } = import.meta.env;

const TasksContext = createContext()

function TasksProvider({ children }) {

    const taskData = useTask()

    return (

        <TasksContext.Provider value={{ ...taskData }}>
            {children}
        </TasksContext.Provider>
    )

}


export { TasksProvider, TasksContext }