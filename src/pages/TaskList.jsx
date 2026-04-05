import { useContext } from "react"
import { TasksContext } from "../contexts/GlobalContext"
import Taskrow from "../components/TaskRow";

export default function TaskList() {

    const { tasks } = useContext(TasksContext)
    console.log('Tasks:', tasks);


    return (
        <>
            <h2>
                elenco delle task
            </h2>

            <table>
                <thead>
                    <tr>
                        <th>nome</th>
                        <th>stato</th>
                        <th>data creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((tasksingola) => (
                        <Taskrow key={tasksingola.id} task={tasksingola} />

                    ))}
                </tbody>
            </table>



        </>
    )
}