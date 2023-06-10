import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader() {
    await requireAuth()
    return getHostVans()
}

export default function HostVans() {
    const vans = useLoaderData()

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