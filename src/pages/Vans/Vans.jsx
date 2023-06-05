import React from "react"
import Van from "../../components/Van"
import { Link } from 'react-router-dom'

export default function Vans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    const vanElements = vans.map(van => <Link key={van.id} to={`/vans/${van.id}`}>
                                             <Van key={van.id}
                                                    name={van.name}
                                                    description={van.description}
                                                    price={van.price}
                                                    image={van.imageUrl}
                                                    type={van.type} /></Link>)
    return (
        <div className="van--list">
            {vanElements}
        </div>
    )
}