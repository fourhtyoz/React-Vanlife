import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './index.css'
import './server'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/'element={<Home />} />
                <Route path='/about'element={<About />} />
                <Route path='/vans'element={<Vans />} />
                <Route path='/vans/:id'element={<VanDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)