import { useParams } from "react-router-dom"
import { useContext } from "react"
import { TasksContext } from "../contexts/GlobalContext"

export default function TaskDetails() {

    const { id } = useParams()
    const { tasks } = useContext(TasksContext)
    const task = tasks.find(t => t.id === parseInt(id))

    if (!task) {
        return (
            <h2>la task che cerchi non esiste bro</h2>
        )
    }

    const handleDelete = () => {
        console.log('il bottone di elimina task funge');


    }


    return (
        <>
            <h1>ecco la tua task in dettaglio</h1>
            <p><strong>NOME TASK:</strong>{task.title}</p>
            <p><strong>DESCRIZIONE TASK:</strong>{task.description}</p>
            <p><strong>STATO:</strong>{task.status}</p>
            <p><strong>DATA:</strong>{new Date(task.createdAt).toLocaleDateString()}</p>

            <button onClick={handleDelete}>elimina la task</button>
        </>
    )
}