import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return(
        <>
            <div>
            <NavLink to='.' end style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
            <NavLink to='income' style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
            <NavLink to='vans' style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
            <NavLink to='reviews' style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
            </div>
            <Outlet />
        </>
    )
}