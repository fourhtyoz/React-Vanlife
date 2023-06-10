import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function HostVanPhotos() {
    const [image, setImage] = useState(null)
    const params = useParams()
    useEffect(() => {
        axios.get(`/api/vans/${params.id}`).then(res => setImage(res.data.vans.imageUrl))
    }, [params.id])
    return (
        <>
            <img src={image} width={100}/>
        </>
    )
}