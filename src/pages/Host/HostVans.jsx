import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function HostVans() {
    const [vans, setVans] = useState([])
    
    useEffect(() => {
        axios.get(`/api/host/vans`).then(res => setVans(res.data.vans))
    }, [])

    return (
        <>  
            {vans ? vans.map(van => (
                <Link key={van.id} to={van.id}>
                    <p>{van.name}</p>
                    <p>{van.price}</p>
                </Link>
                )) : 'loading'}
        </>
    )
}