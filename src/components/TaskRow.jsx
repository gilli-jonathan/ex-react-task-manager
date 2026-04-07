import { memo } from "react"
import { Link } from 'react-router-dom'

// export default function Taskrow({ task }) {

//     const statusClassName = task.status.replace(" ", "").toLowerCase()

//     return (

//         <tr>
//             <td>{task.title}</td>
//             <td className={statusClassName}>{task.status}</td>
//             <td>{new Date(task.createdAt).toLocaleDateString()}</td>
//         </tr>

//     )
// }

const Taskrow = memo(({ task }) => {

    const statusClassName = task.status.replace(" ", "").toLowerCase()

    return (

        <tr>
            <td>
                <Link to={`/task/${task.id}`}>
                    {task.title}
                </Link>
            </td>
            <td className={statusClassName}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>

    )
})

export default Taskrow