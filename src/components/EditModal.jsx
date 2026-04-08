import { useState, useRef } from "react";
import Modal from "./Modal"

export default function EditModal({ show, onClose, task, onSave }) {

    const [editTask, setEditTask] = useState(task)
    const editFormRef = useRef()
    const changeEditedTask = (key, event) => {
        setEditTask(prev => ({ ...prev, [key]: event.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSave(editTask)
    }

    const { title, description, status } = editTask

    return (
        <Modal
            title='modifica la task'
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <label>
                        nome task:
                        <input
                            type="text"
                            value={title}
                            onChange={e => changeEditedTask('title', e)}
                        />
                    </label>
                    <br />
                    <label>
                        descrizione della task:
                        < textarea
                            value={description}
                            onChange={e => changeEditedTask('description', e)}
                        />
                    </label>
                    <br />
                    <label>
                        lo stato della task:
                        <select
                            value={status}
                            onChange={e => changeEditedTask('status', e)}
                        >
                            {['To Do', 'Doing', 'Done'].map((value, i) => (
                                <option key={i} value={value}>{value}</option>
                            ))}
                        </select>
                    </label>
                </form>
            }
            confirmText='salva  le modifiche'
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}

        />
    )
}