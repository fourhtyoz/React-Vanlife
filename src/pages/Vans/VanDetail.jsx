import { useLocation, Link, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader(obj) {
    const id = obj.params.id
    return getVans(id)
}

export default function VanDetail() {
    const van = useLoaderData()
    const location = useLocation()
    const previousPage = location.state.type ? `?type=${location.state.type}` : ''

    return (
        <>
            <Link to={`..${previousPage}`} relative='path'>
                {previousPage ? `Back to ${location.state.type} vans` : 'Back to all vans'}
            </Link>
            <div className="van--detail">
                <img className="van--detail--img" src={van.imageUrl} />
                <p className="van--detail--type">{van.type}</p>
                <p className="van--detail--name">{van.name}</p>
                <p className="van--detail--price">Price: ${van.price} a day</p>
                <p className="van--detail--description">{van.description}</p>
                <button className="van--detail--rent">Rent this van</button>
            </div>
        </>
    )
}