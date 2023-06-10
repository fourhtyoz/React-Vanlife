import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Vans, {loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, {loader as vanDetailLoader} from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail";
import HostVanDescription from "./pages/Host/HostVanDescription";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Page404 from "./pages/Page404";
import Error from "./components/Error";
import Login from "./pages/Host/Login";
import { requireAuth } from "./utils";
import './index.css'
import './server'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />} >
        <Route index element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} loader={vansLoader} />
        <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader}/>
        <Route path='/host' element={<HostLayout />}>
            <Route index element={<Dashboard />} loader={() => requireAuth()}/>
            <Route path='income' element={<Income />} loader={() => requireAuth()}/>
            <Route path='vans' element={<HostVans />} loader={hostVansLoader}/>
            <Route path='vans/:id' element={<HostVanDetail />} loader={hostVanDetailLoader}>
                <Route index element={<HostVanDescription />} loader={async () => await requireAuth()}/>
                <Route path='pricing' element={<HostVanPricing loader={async () => await requireAuth()}/>} />
                <Route path='photos' element={<HostVanPhotos />} loader={async () => await requireAuth()}/>
            </Route>
            <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<Page404 />} />
    </Route>
))

export default function App() {
    return (
        <RouterProvider router={router}/>

        // Old way
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<Layout />}>
        //             <Route index element={<Home />} />
        //             <Route path='about' element={<About />} />
        //             <Route path='vans' element={<Vans />} />
        //             <Route path='vans/:id' element={<VanDetail />} />
        //             <Route path='/host' element={<HostLayout />}>
        //                 <Route index element={<Dashboard />} />
        //                 <Route path='income' element={<Income />} />
        //                 <Route path='vans' element={<HostVans />} />
        //                 <Route path='vans/:id' element={<HostVanDetail />}>
        //                     <Route index element={<HostVanDescription />} />
        //                     <Route path='pricing' element={<HostVanPricing />} />
        //                     <Route path='photos' element={<HostVanPhotos />} />
        //                 </Route>
        //                 <Route path='reviews' element={<Reviews />} />
        //             </Route>
        //             <Route path='*' element={<Page404 />} />
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)