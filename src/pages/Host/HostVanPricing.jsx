import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const van = useOutletContext()
    return (
        <h1>${van.price} a day</h1>
    )
}