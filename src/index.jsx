import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/VanDetail";
import Layout from "./components/Layout";
import './index.css'
import './server'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/'element={<Home />} />
                    <Route path='/about'element={<About />} />
                    <Route path='/vans'element={<Vans />} />
                    <Route path='/vans/:id'element={<VanDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)