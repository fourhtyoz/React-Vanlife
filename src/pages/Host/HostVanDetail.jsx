import { Outlet, NavLink, Link, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader(obj) {
    await requireAuth()
    const id = obj.params.id
    return getHostVans(id)
}

export default function HostVanDetail() {
    const van = useLoaderData()[0]

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return (
        <>
            <Link to='..' relative="path">Back to all vans</Link>
            <h1>{van.name}</h1>
            <img className="host--van--detail--image" src={van.imageUrl} />
            <p>${van.price} a day</p>
            <NavLink end to='.' style={({isActive}) => isActive ? activeStyle : null}>Description</NavLink>
            <NavLink to='pricing' style={({isActive}) => isActive ? activeStyle : null}>Price</NavLink>
            <NavLink to='photos' style={({isActive}) => isActive ? activeStyle : null}  >Photos</NavLink>
            <Outlet context={van}/>
        </>
    )
}