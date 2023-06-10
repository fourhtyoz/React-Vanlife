import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function HostVanPricing() {
    const [price, setPrice] = useState(null)
    const params = useParams()
    useEffect(() => {
        axios.get(`/api/vans/${params.id}`).then(res => setPrice(res.data.vans.price))
    }, [params.id])
    return (
        <h1>${price} a day</h1>
    )
}