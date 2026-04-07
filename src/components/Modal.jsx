import { createPortal } from "react-dom"

export default function Modal({ title, content, show, onClose, onConfirm, confirmText = 'voglio eliminarla' }) {

    if (!show) return null
    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h2>stai per eliminare la task {title}</h2>
                {content}
            </div>
            <br />
            <button onClick={onClose}>salva la task</button>
            <button onClick={onConfirm}>{confirmText}</button>
        </div>,
        document.body
    )



}