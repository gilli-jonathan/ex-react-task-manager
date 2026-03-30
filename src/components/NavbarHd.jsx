import { NavLink } from "react-router-dom"

export default function NavbarHd() {

    return (

        <nav>
            <NavLink to="/">tutte le task</NavLink>
            <br />
            <NavLink to="/addtask">aggiungi una nuova task</NavLink>
        </nav>

    )
}