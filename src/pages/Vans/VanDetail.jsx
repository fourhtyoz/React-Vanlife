import React, { useEffect } from "react"
import { useParams, useLocation, Link } from "react-router-dom"
// import 'axios'
import axios from "axios"

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const params = useParams()
    const location = useLocation()
    const previousPage = location.state.type ? `?type=${location.state.type}` : ''

    useEffect(() => {
        axios.get(`/api/vans/${params.id}`).then(res => setVan(res.data.vans))
    }, [params.id])

    return (
        <>
            {van ? (
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
                ) : 'Loading...'}
        </>
    )
}