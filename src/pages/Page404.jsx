import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <>
            <h1>Page not found</h1>
            <Link to='/'>Go to home page</Link>
        </>
    )
}