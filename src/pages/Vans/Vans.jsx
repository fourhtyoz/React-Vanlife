import React from "react"
import Van from "../../components/Van"
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from "../../api"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const typeFilter = searchParams.get('type')
    
    React.useEffect(() => {
        async function loadVans() {
            try {
                let data = await getVans()
                setVans(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    })

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (error) {
        return (
            <h1>Error: {error.message}</h1>
        )
    }

    // React.useEffect(() => {
    //     fetch('/api/vans')
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    // }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans
    const vanElements = displayedVans.map(van => <Link key={van.id} to={van.id} state={{type: typeFilter}}>
                                             <Van key={van.id}
                                                    name={van.name}
                                                    description={van.description}
                                                    price={van.price}
                                                    image={van.imageUrl}
                                                    type={van.type} /></Link>)

    // function generateNewSearchParams(key, value) {
    //     let sp = new URLSearchParams(searchParams)
    //     if (value === null) {
    //         sp.delete(key)
    //     } else {
    //         sp.set(key, value)
    //     }
    //     return `?${sp.toString()}`
    // }

    function handleNewFilter(key, value) {
        setSearchParams(prev => {
            if (value === null) {
                prev.delete(key)
            } else {
                prev.set(key, value)
            }
            return prev
        })
    }

    return (
        <div className="van--list">
            <button 
                onClick={() => handleNewFilter('type', 'simple')} 
                className={`${typeFilter === 'simple' ? 'selected' : ''}`} >Simple</button>
            <button 
                onClick={() => handleNewFilter('type', 'rugged')} 
                className={`${typeFilter === 'rugged' ? 'selected' : ''}`}>Rugged</button>
            <button 
                onClick={() => handleNewFilter('type', 'luxury')} 
                className={`${typeFilter === 'luxury' ? 'selected' : ''}`}>Luxury</button>
            {typeFilter ? <button onClick={() => handleNewFilter('type', null)}>Clear</button> : ''}
            {/* <Link to={generateNewSearchParams('type', 'simple')}>Simple</Link>
            <Link to={generateNewSearchParams('type', 'rugged')}>Rugged</Link>
            <Link to={generateNewSearchParams('type', 'luxury')}>Luxury</Link>
            <Link to={generateNewSearchParams('type', null)}>Clear</Link> */}
            {vanElements}
        </div>
    )
}