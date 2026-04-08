import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { TasksContext } from "../contexts/GlobalContext"
import Modal from '../components/Modal'
import EditModal from "../components/EditModal"

export default function TaskDetails() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask, updateTask } = useContext(TasksContext)
    const task = tasks.find(t => t.id === parseInt(id))

    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    if (!task) {
        return (
            <h2>la task che cerchi non esiste bro</h2>
        )
    }

    const handleDelete = async () => {
        // console.log('il bottone di elimina task funge');
        try {
            await removeTask(task.id)
            alert('task eliminata per sempre hahah')
            navigate('/')
        } catch (error) {
            alert(error.message)

        }
    }

    const handleUpdate = async (updateTaskData) => {

        try {
            await updateTask(updateTaskData)
            setShowEditModal(false)
        } catch (error) {
            alert(error.message)

        }
    }


    return (
        <>
            <h1>ecco la tua task in dettaglio</h1>
            <p><strong>NOME TASK:</strong>{task.title}</p>
            <p><strong>DESCRIZIONE TASK:</strong>{task.description}</p>
            <p><strong>STATO:</strong>{task.status}</p>
            <p><strong>DATA:</strong>{new Date(task.createdAt).toLocaleDateString()}</p>

            <button onClick={() => setShowModal(true)}>elimina la task</button>
            <button onClick={() => setShowEditModal(true)}>modifica la task</button>


            {/* modale per eliminare la task */}
            <Modal
                title='attenzione eliminazione in corso'
                content={<p>vecchio stai attento a quello che fai</p>}
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleDelete}
            />

            <EditModal
                key={task.id}
                task={task}
                show={showEditModal}
                onClose={() => setShowEditModal(false)}
                onSave={handleUpdate}

            />
        </>
    )
}