import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanDescription from "./pages/Host/HostVanDescription";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import './index.css'
import './server'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='vans' element={<Vans />} />
                    <Route path='vans/:id' element={<VanDetail />} />
                    <Route path='/host' element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path='income' element={<Income />} />
                        <Route path='vans' element={<HostVans />} />
                        <Route path='vans/:id' element={<HostVanDetail />}>
                            <Route index element={<HostVanDescription />} />
                            <Route path='price' element={<HostVanPricing />} />
                            <Route path='photos' element={<HostVanPhotos />} />
                        </Route>
                        <Route path='reviews' element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)