import { useState, useRef, useMemo, useContext } from "react"
import { TasksContext } from '../contexts/GlobalContext'

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {

    const { addTask } = useContext(TasksContext)

    const [taskTitle, setTaskTitle] = useState('')
    const descriptionRef = useRef()
    const statusRef = useRef()

    const taskTitleError = useMemo(() => {
        if (!taskTitle.trim())
            return 'non puoi lasciare un nome vuoto'
        if ([...taskTitle].some(char => symbols.includes(char)))
            return 'nome della task non valido, togli i simbolini'
        return ''
    }, [taskTitle])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (taskTitleError)
            return;
        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        try {
            await addTask(newTask)
            alert('task creata senza problemi')
            setTaskTitle('')
            descriptionRef.current.value = ''
            statusRef.current.value = ''
        } catch (error) {
            alert(error.message)

        }

        console.log(newTask);


    }

    return (
        <>
            <h2>
                form per aggiungere task
            </h2>

            <form onSubmit={handleSubmit}>
                <label>
                    metti qui il nome della tua task:
                    <input type="text" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
                </label>

                {taskTitleError &&
                    <p style={{ color: 'red' }}>{taskTitleError}</p>}
                <br /><br />


                <label>
                    descrizione della task in questione
                    <textarea ref={descriptionRef} />
                </label>
                <br />
                <br />
                <label>
                    stato della task
                    <select ref={statusRef} defaultValue={'To Do'}>
                        {['To Do', 'Doing', 'Done'].map((value, i) => (
                            <option key={i} value={value}>{value}</option>
                        ))}
                    </select>
                </label>
                <br /><br />
                <button type="submit" disabled={taskTitleError}>aggiungi la nuova task</button>
            </form>
        </>
    )
}