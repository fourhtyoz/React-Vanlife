import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import about_image from '../public/assets/van2.jpg'

export default function App() {
    return (
        <BrowserRouter>
            <nav className="nav--bar">
                <h1>#Van Life</h1>
                <div className="nav--links">
                    <Link to='/'>Home page</Link>
                    <Link to='/about'>About us</Link>
                    <Link to='/vans'>Vans</Link>
                </div>
            </nav>
            <Routes>
                <Route path='/'element={<Home />} />
                <Route path='/about'element={<About />} />
                <Route path='/vans'element={<Vans />} />
            </Routes>
        </BrowserRouter>
    )
}

export function Home() {
    return (
        <>
            <div className="home--container">
                <div className="home--header">
                    <p>You got the travel plans,
                we got the travel vans.</p>
                </div>
                <div className="home--header--text">
                    Add adventure to your life by joining #vanlife movement.
                    <br />Rent the perfect van to make your perfect road trip.
                </div>
                <button className="home--header--button">Find your van</button>
            </div>
            <Footer />
        </>
    )
}

export function About() {
    return (
        <>
        <div className="about--container">
            <img src={about_image} />
            <p className="about--container--header">Don't squezze in a sedan when you could relax in a van.</p>
            <p className="about--container--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore illo cum natus, necessitatibus nesciunt atque illum ut soluta ad dolor, quas libero reprehenderit reiciendis velit harum a aperiam qui blanditiis.</p>
            <div className="about--container--block">
                Your destination is waiting. 
                <br />
                Your van is ready.
                <br />
                <button className="about--container--block--button">Explore our vans</button>
            </div>
        </div>
        <Footer />
        </>
    )
}

export function Vans() {
    return (
        <>
            <h1>Vans page</h1>
            <Footer />
        </>
    )
}

export function Footer() {
    return (
        <footer className="footer">
            <h6>Created by Fourhtyoz</h6>
        </footer>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)