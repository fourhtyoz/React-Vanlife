import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return(
        <>
            <div>
            <NavLink to='/host' end style={({isActive}) => isActive ? activeStyle : null}>Host</NavLink>
            <NavLink to='/host/income' style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
            <NavLink to='/host/reviews' style={({isActive}) => isActive ? activeStyle : null}>Reviews</NavLink>
            </div>
            <Outlet />
        </>
    )
}