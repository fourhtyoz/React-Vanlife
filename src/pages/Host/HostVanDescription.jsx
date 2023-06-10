import { useOutletContext } from 'react-router-dom'

export default function HostVanDescription() {
    const van = useOutletContext()
    return (
        <>
            <p>Name: {van.name}</p>
            <p>Description: {van.description}</p>
            <p>Type: {van.type}</p>
        </>
    )
}