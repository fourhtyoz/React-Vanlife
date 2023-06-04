import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import 'axios'
import axios from "axios"

export default function VanDetail() {
    const [van, setVan] = React.useState(null)
    const params = useParams()
    useEffect(() => {
        axios.get(`/api/vans/${params.id}`).then(res => setVan(res.data.vans))
    }, [params.id])
    return (
        <>
            {van ? (
                <div className="van--detail">
                    <img src={van.imageUrl} />
                    <p>{van.name}</p>
                    <p>{van.price}</p>
                    <p>{van.type}</p>
                    <p>{van.description}</p>
                </div>) : 'Loading...'}
        </>
    )
}