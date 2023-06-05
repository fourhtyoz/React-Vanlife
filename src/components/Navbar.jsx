import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const activeStyle = {
        backgroundColor: '#ffd89e',
        color: '#323232'
    }

    return (
        <nav className="nav--bar">
            <Link to='/'><h1>#Van Life</h1></Link>
            <div className="nav--links">
                <NavLink to='/host' style={({isActive}) => isActive ? activeStyle : null }>Host</NavLink>
                <NavLink to='/about' style={({isActive}) => isActive ? activeStyle : null }>About us</NavLink>
                <NavLink to='/vans' style={({isActive}) => isActive ? activeStyle : null }>Vans</NavLink>
            </div>
        </nav>
    )
}
