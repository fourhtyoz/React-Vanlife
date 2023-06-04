import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav--bar">
            <h1>#Van Life</h1>
            <div className="nav--links">
                <Link to='/'>Home page</Link>
                <Link to='/about'>About us</Link>
                <Link to='/vans'>Vans</Link>
            </div>
        </nav>
    )
}
