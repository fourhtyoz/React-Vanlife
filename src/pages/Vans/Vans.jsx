import Van from "../../components/Van"
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from "../../api"

export function loader() {
    // console.log('hi')
    return getVans()
}

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const vans = useLoaderData()
    const typeFilter = searchParams.get('type')

    // if (error) {
    //     return (
    //         <h1>Error: {error.message}</h1>
    //     )
    // }

    const displayedVans = typeFilter ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase()) : vans
    const vanElements = displayedVans.map(van => <Link key={van.id} to={van.id} state={{type: typeFilter}}>
                                             <Van key={van.id}
                                                    name={van.name}
                                                    description={van.description}
                                                    price={van.price}
                                                    image={van.imageUrl}
                                                    type={van.type} /></Link>)

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
            {vanElements}

            {/* <Link to={generateNewSearchParams('type', 'simple')}>Simple</Link>
            <Link to={generateNewSearchParams('type', 'rugged')}>Rugged</Link>
            <Link to={generateNewSearchParams('type', 'luxury')}>Luxury</Link>
            <Link to={generateNewSearchParams('type', null)}>Clear</Link> */}
        </div>
    )
}