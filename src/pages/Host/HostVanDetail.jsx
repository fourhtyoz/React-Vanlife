import { useState, useEffect } from "react"
import { useParams, Outlet, NavLink, Link } from "react-router-dom"
import axios from "axios"

export default function HostVanDetail() {
    const [van, setVan] = useState(null)
    const params = useParams()
    useEffect(() => {
        axios.get(`/api/vans/${params.id}`).then(res => setVan(res.data.vans))
    }, [params.id])

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (
        <>
            {van ?
                <>  
                    <Link to='..' relative="path">Back to all vans</Link>
                    <h1>{van.name}</h1>
                    <img className="host--van--detail--image" src={van.imageUrl} />
                    <p>${van.price} a day</p>
                    <NavLink end to='' style={({isActive}) => isActive ? activeStyle : null}>Description</NavLink>
                    <NavLink to='price' style={({isActive}) => isActive ? activeStyle : null}>Price</NavLink>
                    <NavLink to='photos' style={({isActive}) => isActive ? activeStyle : null}  >Photos</NavLink>
                    <Outlet />
                </> 
                : <h1>Loading</h1>
            }
        </>
    )
}