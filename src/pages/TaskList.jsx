import { useContext, useState, useMemo, useCallback } from "react"
import { TasksContext } from "../contexts/GlobalContext"
import Taskrow from "../components/TaskRow";

function debouce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

export default function TaskList() {

    const { tasks } = useContext(TasksContext)
    console.log('Tasks:', tasks);

    const [sortBy, setSortBy] = useState('createdAt')
    const [sortOrder, setSortOrder] = useState(1)

    const [searchQuery, setSearchQuery] = useState('')

    const debouceSearch = useCallback(debouce(setSearchQuery, 500)
        , []);

    const sortIcon = sortOrder === 1 ? '⬇️' : '⬆️'

    const handleSort = (campo) => {
        //decide il campo e come
        if (sortBy === campo) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(campo)
            setSortOrder(1)
        }
    }

    const filteredAndSorteredTask = useMemo(() => {

        return [...tasks]
            .filter((t) => t.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
            .sort((a, b) => {

                let comparison

                if (sortBy === 'title') {
                    comparison = a.title.localeCompare(b.title)
                } else if (sortBy === 'status') {
                    const statusOption = ['To do', 'Doing', 'Done']
                    comparison = statusOption.indexOf(a.status) - statusOption.indexOf(b.status)
                } else if (sortBy === 'createdAt') {
                    const dateA = new Date(a.createdAt).getTime()
                    const dateB = new Date(b.createdAt).getTime()
                    comparison = dateA - dateB
                }


                return comparison * sortOrder
            })


    }, [tasks, sortBy, sortOrder, searchQuery])


    return (
        <>
            <h2>
                elenco delle task
            </h2>

            <input type="text"
                placeholder="la task che stai cercando"
                // value={searchQuery}
                onChange={e => debouceSearch(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')}>
                            nome {sortBy === 'title' && sortIcon}
                        </th>
                        <th onClick={() => handleSort('status')}>
                            stato {sortBy === 'status' && sortIcon}
                        </th>
                        <th onClick={() => handleSort('createdAt')}>
                            data creazione {sortBy === 'createdAt' && sortIcon}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSorteredTask.map((tasksingola) => (
                        <Taskrow key={tasksingola.id} task={tasksingola} />

                    ))}
                </tbody>
            </table>



        </>
    )
}