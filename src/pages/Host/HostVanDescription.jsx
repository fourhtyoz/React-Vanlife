import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function HostVanDescription() {
    const [description, setDescription] = useState(null)
    const params = useParams()
    useEffect(() => {
        axios.get(`/api/vans/${params.id}`).then(res => setDescription(res.data.vans.description))
    }, [params.id])
    return (
        <h1>{description}</h1>
    )
}